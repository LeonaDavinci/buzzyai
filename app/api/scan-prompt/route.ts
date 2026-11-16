import crypto from "node:crypto";
import { NextResponse } from "next/server";
import {
  BLOCKLIST_VERSION,
  Verdict,
  matchLocalBlocklist,
} from "@/lib/moderation";

// Must run on Node (uses node:crypto for RSA-SHA256 request signing).
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SCAN_PATH = "/v1/actions/verification/scan-prompt";
const WAFFO_API = "https://api.waffo.ai";

type Body = { prompt?: unknown; locale?: unknown };

function logVerdict(v: Verdict & { promptHash: string; ms: number }) {
  // Structured, single-line log for Vercel function logs. We log a SHA-256
  // prefix of the prompt (never the raw text) so decisions are auditable
  // without retaining user content.
  console.log(
    "[moderation] " +
      JSON.stringify({
        action: v.action,
        reasonCode: v.reasonCode,
        categories: v.matchedCategories,
        requestId: v.requestId,
        source: v.source,
        semanticStatus: v.semanticStatus,
        promptHash: v.promptHash,
        ms: v.ms,
        blocklistVersion: BLOCKLIST_VERSION,
      })
  );
}

function normalizePrivateKey(raw: string): string {
  // Allow env var to hold either a PEM with literal \n, a PEM with real
  // newlines, or a base64-encoded DER key.
  if (raw.includes("PRIVATE KEY")) return raw.replace(/\\n/g, "\n");
  return `-----BEGIN PRIVATE KEY-----\n${raw.replace(/\s/g, "")}\n-----END PRIVATE KEY-----`;
}

function signRequest(
  method: string,
  path: string,
  timestamp: string,
  bodyStr: string,
  privateKey: string
): string {
  const bodyHash = crypto
    .createHash("sha256")
    .update(bodyStr)
    .digest("base64");
  const canonical = `${method}\n${path}\n${timestamp}\n${bodyHash}`;
  return crypto
    .sign("sha256", Buffer.from(canonical), normalizePrivateKey(privateKey))
    .toString("base64");
}

async function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

/**
 * Calls Waffo Prompt Sift. Returns null only when the service is unreachable
 * or credentials are missing, so the caller can fall back to local-only mode.
 */
async function callPromptSift(
  prompt: string,
  locale: string,
  merchantId: string,
  privateKey: string
): Promise<{ verdict: Verdict | null; retryAfter?: number; degraded?: boolean }> {
  const bodyStr = JSON.stringify({ prompt, locale, semantic: "enforce" });

  for (let attempt = 0; attempt < 3; attempt++) {
    const timestamp = Math.floor(Date.now() / 1000).toString();
    const signature = signRequest(
      "POST",
      SCAN_PATH,
      timestamp,
      bodyStr,
      privateKey
    );

    let res: Response;
    try {
      res = await fetch(`${WAFFO_API}${SCAN_PATH}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Merchant-Id": merchantId,
          "X-Timestamp": timestamp,
          "X-Signature": signature,
        },
        body: bodyStr,
        cache: "no-store",
      });
    } catch (e) {
      console.error("[moderation] network error calling Prompt Sift", e);
      if (attempt < 2) {
        await sleep(5000 * (attempt + 1));
        continue;
      }
      return { verdict: null, degraded: true };
    }

    if (res.status === 429) {
      const retryAfter = Number(res.headers.get("Retry-After") ?? "5") || 5;
      if (attempt < 2) {
        await sleep(retryAfter * 1000);
        continue;
      }
      return { verdict: null, retryAfter, degraded: true };
    }

    if (res.status >= 500) {
      if (attempt < 2) {
        await sleep(5000 * (attempt + 1));
        continue;
      }
      return { verdict: null, degraded: true };
    }

    if (!res.ok) {
      console.error("[moderation] Prompt Sift returned", res.status, await res.text());
      return { verdict: null, degraded: true };
    }

    const json = await res.json();
    const d = json?.data ?? {};
    return {
      verdict: {
        action: d.action === "allow" || d.action === "block" ? d.action : "review",
        reasonCode: d.reasonCode ?? "unknown",
        matchedCategories: Array.isArray(d.matchedCategories)
          ? d.matchedCategories
          : [],
        requestId: d.requestId ?? "",
        source: "waffo",
        semanticStatus: d.semanticStatus,
      },
    };
  }

  return { verdict: null, degraded: true };
}

export async function POST(req: Request) {
  const started = Date.now();
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const prompt = typeof body.prompt === "string" ? body.prompt.trim() : "";
  const locale =
    body.locale === "ja" || body.locale === "zh" ? body.locale : "en";

  if (!prompt || prompt.length > 10000) {
    return NextResponse.json(
      { error: "Prompt must be 1-10000 characters" },
      { status: 400 }
    );
  }

  const promptHash = crypto.createHash("sha256").update(prompt).digest("hex").slice(0, 16);
  const localHits = matchLocalBlocklist(prompt);

  // Local hard-block: these categories are reported to authorities and are
  // never sent onward for generation, regardless of the remote verdict.
  if (localHits.length > 0) {
    const verdict: Verdict = {
      action: "block",
      reasonCode: "restricted_content",
      matchedCategories: localHits,
      requestId: `LOCAL_${promptHash}`,
      source: "local",
    };
    logVerdict({ ...verdict, promptHash, ms: Date.now() - started });
    return NextResponse.json(verdict, { status: 200 });
  }

  const merchantId = process.env.WAFFO_MERCHANT_ID;
  const privateKey = process.env.WAFFO_PRIVATE_KEY;

  // Demo / pre-launch mode: no credentials yet. The local blocklist is the
  // moderation layer, so clean prompts pass and blocked categories were
  // already rejected above. This keeps the marketing demo functional while
  // Prompt Sift goes live as soon as credentials are added to env.
  if (!merchantId || !privateKey) {
    const localPass: Verdict = {
      action: "allow",
      reasonCode: "allowed_local",
      matchedCategories: [],
      requestId: `LOCAL_${promptHash}`,
      source: "local",
    };
    logVerdict({ ...localPass, promptHash, ms: Date.now() - started });
    return NextResponse.json(localPass, { status: 200 });
  }

  const { verdict, degraded, retryAfter } = await callPromptSift(
    prompt,
    locale,
    merchantId,
    privateKey
  );

  if (verdict) {
    logVerdict({ ...verdict, promptHash, ms: Date.now() - started });
    return NextResponse.json(verdict, { status: 200 });
  }

  // Fail safe: when credentials exist but Waffo is unreachable, no verdict
  // means nothing is generated. "review" makes the client hold the request;
  // service_degraded is the Waffo convention for that case.
  const held: Verdict = {
    action: "review",
    reasonCode: degraded ? "service_degraded" : "review_required",
    matchedCategories: [],
    requestId: `LOCAL_${promptHash}`,
    source: "local",
  };
  logVerdict({ ...held, promptHash, ms: Date.now() - started });
  const res = NextResponse.json(held, { status: 200 });
  if (retryAfter) res.headers.set("Retry-After", String(retryAfter));
  return res;
}

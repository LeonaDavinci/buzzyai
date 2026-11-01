import { NextRequest, NextResponse } from "next/server";

// Lightweight server-side event tracker. Every payment-intent click is logged
// here so you can verify in Vercel function logs (or forward to your own BI)
// whether a user actually clicked to pay. No PII is stored.
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const record = {
    ts: new Date().toISOString(),
    ip: req.headers.get("x-forwarded-for") ?? "unknown",
    ua: req.headers.get("user-agent") ?? "unknown",
    referer: req.headers.get("referer") ?? "unknown",
    ...body,
  };
  console.log("[track]", JSON.stringify(record));
  return NextResponse.json({ ok: true });
}

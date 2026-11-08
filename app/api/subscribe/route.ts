import { NextRequest, NextResponse } from "next/server";

// Collects waitlist emails during the scaling pause. Emails are logged to the
// server (Vercel function logs) so you can retrieve them — no DB is used yet.
// TODO: pipe to a real store (sheet / DB / email provider) before launch.
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const email = typeof body.email === "string" ? body.email : "unknown";
  const plan = typeof body.plan === "string" ? body.plan : "unknown";
  const record = {
    ts: new Date().toISOString(),
    email,
    plan,
    ip: req.headers.get("x-forwarded-for") ?? "unknown",
  };
  console.log("[subscribe]", JSON.stringify(record));
  return NextResponse.json({ ok: true });
}

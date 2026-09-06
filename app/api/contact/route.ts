import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const { name, email, message, company } = body as Record<string, string>;

  // Honeypot: bots fill hidden fields. Silently accept and drop.
  if (company) return NextResponse.json({ ok: true });

  if (!name || !email) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;
  const from = process.env.CONTACT_FROM;

  // Without mail credentials nobody would ever see this. Fail loudly so the
  // form points people at Heather's email instead of faking a sent message.
  if (!key || !to || !from) {
    console.error("[contact] mail not configured, inquiry not delivered", {
      name,
      email,
    });
    return NextResponse.json({ error: "Mail not configured" }, { status: 500 });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: email,
        subject: `New inquiry from ${name} - Twin Roots`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message || "(no message)"}`,
      }),
    });
    if (!res.ok) throw new Error(await res.text());
  } catch (err) {
    console.error("[contact] send failed", err);
    return NextResponse.json({ error: "Send failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

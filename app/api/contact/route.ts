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

  if (key && to && from) {
    try {
      await fetch("https://api.resend.com/emails", {
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
    } catch {
      // fall through: never lose the lead over a mail hiccup
    }
  } else {
    console.log("[contact]", { name, email, message });
  }

  return NextResponse.json({ ok: true });
}

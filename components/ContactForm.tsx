"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-line bg-sand/60 p-8 text-center">
        <p className="font-serif text-2xl text-sage-deep">Thank you for reaching out.</p>
        <p className="mt-3 text-muted">
          Heather will get back to you personally, usually within one to two
          business days. If you are in crisis, please call or text 988.
        </p>
      </div>
    );
  }

  const field =
    "w-full rounded-xl border border-line bg-white px-4 py-3 text-ink outline-none transition focus:border-sage focus:ring-2 focus:ring-sage/25";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* honeypot */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm text-ink/80">Name</label>
          <input name="name" required className={field} placeholder="Your name" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm text-ink/80">Email</label>
          <input name="email" type="email" required className={field} placeholder="you@email.com" />
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm text-ink/80">What brings you here? (optional)</label>
        <textarea
          name="message"
          rows={5}
          className={field}
          placeholder="Share as much or as little as you like. This is a safe, confidential space."
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-sage px-6 py-3.5 font-medium text-cream transition hover:bg-sage-deep disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send message"}
      </button>

      {status === "error" && (
        <p className="text-sm text-clay">
          Something went wrong. Please email {""}
          <a className="underline" href="mailto:hello@twinrootspsychotherapy.com">
            hello@twinrootspsychotherapy.com
          </a>{" "}
          directly.
        </p>
      )}

      <p className="pt-1 text-xs leading-relaxed text-muted">
        Please do not share sensitive clinical details through this form. It is a
        first point of contact, not a secure medical channel.
      </p>
    </form>
  );
}

import Link from "next/link";
import { brand } from "@/lib/brand";

export function BookingCta() {
  return (
    <section className="bg-clay">
      <div className="mx-auto max-w-4xl px-5 py-16 text-center text-cream">
        <h2 className="text-3xl leading-tight md:text-4xl">
          Reaching out is the first root you put down.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-cream/90">
          Send a note or an email and I will get back to you personally to find
          a time that works. No pressure, just a first step.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="rounded-full bg-cream px-7 py-3.5 font-medium text-sage-deep transition hover:bg-white"
          >
            {brand.contact.portalLabel}
          </Link>
          <a
            href={`mailto:${brand.contact.email}`}
            className="rounded-full border border-cream/60 px-7 py-3.5 font-medium text-cream transition hover:bg-cream/10"
          >
            Email Heather
          </a>
        </div>
        <p className="mt-6 text-sm text-cream/75">{brand.location.serves}</p>
      </div>
    </section>
  );
}

import Image from "next/image";
import { brand } from "@/lib/brand";
import { PageHero } from "@/components/PageHero";
import { BookingCta } from "@/components/BookingCta";
import { ServiceIcon } from "@/components/ServiceIcon";

export const metadata = { title: "Services" };

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Care rooted in the perinatal season, and beyond."
        intro="Specialized support for pregnancy, postpartum, and the experiences around them, with room to keep working together as life grows."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="grid gap-6 md:grid-cols-2">
          {brand.specialties.map((s) => (
            <div
              key={s.title}
              className="group overflow-hidden rounded-2xl border border-line bg-cream transition hover:border-sage/50 hover:shadow-sm"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-sand">
                <Image
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={`object-cover ${s.imagePos} transition duration-700 group-hover:scale-[1.04]`}
                />
              </div>
              <div className="relative p-8">
                <div className="absolute -top-7 left-8 flex h-14 w-14 items-center justify-center rounded-full border border-line bg-cream shadow-sm">
                  <ServiceIcon name={s.icon} className="h-7 w-7" />
                </div>
                <h2 className="mt-5 text-2xl text-ink">{s.title}</h2>
                <p className="mt-3 leading-relaxed text-muted">{s.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Insurance */}
        <div className="mt-12 rounded-3xl border border-line bg-cream p-8 md:p-12">
          <h2 className="text-2xl text-ink md:text-3xl">{brand.insurance.heading}</h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-muted">
            {brand.insurance.lead}
          </p>
          <ul className="mt-7 flex flex-wrap gap-2.5">
            {brand.insurance.plans.map((p) => (
              <li
                key={p.name}
                className="inline-flex items-baseline gap-1.5 rounded-full border border-sage/30 bg-sage/5 px-4 py-2 text-sm text-sage-deep"
              >
                {p.name}
                {"note" in p && (
                  <span className="text-xs text-muted">({p.note})</span>
                )}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-muted">
            {brand.insurance.footnote}
          </p>
        </div>

        <div className="mt-12 rounded-3xl bg-sage-deep p-8 text-cream md:p-12">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-clay-soft">Format</p>
              <p className="mt-3 leading-relaxed text-cream/85">
                Secure video sessions for clients anywhere in California, plus
                in-person sessions in La Mesa, CA.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-clay-soft">Getting started</p>
              <p className="mt-3 leading-relaxed text-cream/85">
                We begin with a free 15-minute consultation, then a first session to
                understand what you need and how I can help.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-clay-soft">Good to know</p>
              <p className="mt-3 leading-relaxed text-cream/85">
                Fees are shared during our consultation, and your insurance
                benefits are verified before the first session.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BookingCta />
    </>
  );
}

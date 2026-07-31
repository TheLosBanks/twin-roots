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
              className="rounded-2xl border border-line bg-cream p-8 transition hover:border-sage/50 hover:shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sage/10">
                <ServiceIcon name={s.icon} className="h-7 w-7" />
              </div>
              <h2 className="mt-5 text-2xl text-ink">{s.title}</h2>
              <p className="mt-3 leading-relaxed text-muted">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-sage-deep p-8 text-cream md:p-12">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-clay-soft">Format</p>
              <p className="mt-3 leading-relaxed text-cream/85">
                Secure video sessions (telehealth), available to clients located
                anywhere in California.
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
                Fees and insurance details are shared during our consultation, so
                there are no surprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BookingCta />
    </>
  );
}

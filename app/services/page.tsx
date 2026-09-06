import Image from "next/image";
import { brand } from "@/lib/brand";
import { PageHero } from "@/components/PageHero";
import { BookingCta } from "@/components/BookingCta";
import { ServiceIcon } from "@/components/ServiceIcon";
import { InsuranceSection } from "@/components/Insurance";

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

        <div className="mt-12">
          <InsuranceSection />
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
                Reach out by email or through the contact form. I will get back
                to you to schedule a first session and talk through what you need.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-clay-soft">Good to know</p>
              <p className="mt-3 leading-relaxed text-cream/85">
                Fees are shared when we first connect, and your insurance
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

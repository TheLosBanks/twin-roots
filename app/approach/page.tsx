import Image from "next/image";
import { brand } from "@/lib/brand";
import { PageHero } from "@/components/PageHero";
import { BookingCta } from "@/components/BookingCta";

export const metadata = { title: "My Approach" };

export default function Approach() {
  return (
    <>
      <PageHero
        eyebrow="My Approach"
        title={brand.approach.heading}
        intro={brand.approach.lead}
      />

      <section className="mx-auto max-w-4xl px-5 py-16 md:py-24">
        <div className="space-y-10">
          {brand.approach.points.map((p, i) => (
            <div key={p.title} className="flex gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-clay/10 font-serif text-xl text-clay">
                {i + 1}
              </div>
              <div>
                <h2 className="text-2xl text-ink">{p.title}</h2>
                <p className="mt-2 leading-relaxed text-muted">{p.body}</p>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Clinical approach */}
      <section className="bg-sand/40">
        <div className="mx-auto max-w-5xl px-5 py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-clay">How I work</p>
            <h2 className="mt-4 text-3xl leading-tight text-ink md:text-4xl">
              My clinical approach
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              I draw on several approaches and shape them around you, rather than
              fitting you to a method.
            </p>
          </div>

          <div className="mt-14 space-y-16">
            {brand.modalities.map((m, i) => (
              <div
                key={m.slug}
                className="grid items-center gap-8 md:grid-cols-2 md:gap-12"
              >
                <div
                  className={`overflow-hidden rounded-3xl bg-cream ring-1 ring-line ${
                    i % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <Image
                    src={m.image}
                    alt={m.imageAlt}
                    width={1200}
                    height={1200}
                    className="h-auto w-full"
                    sizes="(max-width: 768px) 100vw, 45vw"
                  />
                </div>
                <div>
                  <h3 className="text-2xl leading-snug text-ink">{m.title}</h3>
                  {m.paragraphs.map((t) => (
                    <p key={t.slice(0, 24)} className="mt-4 leading-relaxed text-muted">
                      {t}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-16 md:py-24">
        <div className="rounded-3xl border border-line bg-sand/50 p-8 md:p-12">
          <h2 className="text-2xl text-sage-deep md:text-3xl">
            What working together looks like
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Therapy with me is warm and collaborative. We move at your pace. Some
            sessions are about tools and coping. Others are simply about having a
            place where you can be honest about how hard, or how mixed, this all
            feels. Both matter, and both are welcome here.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            You will never be rushed to be okay. My hope is that, over time, you feel
            more like yourself, more steady on your feet, and less alone.
          </p>
        </div>
      </section>

      <BookingCta />
    </>
  );
}

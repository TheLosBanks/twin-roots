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

        <div className="mt-16 rounded-3xl border border-line bg-sand/50 p-8 md:p-12">
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

import { brand } from "@/lib/brand";
import { PageHero } from "@/components/PageHero";
import { BookingCta } from "@/components/BookingCta";
import Image from "next/image";

export const metadata = { title: "About Heather" };

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={brand.about.heading}
        intro="Perinatal mental health is not just my specialty. It is a season I have lived through myself."
      />

      <section className="mx-auto max-w-5xl px-5 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            {/* Full 2:3 frame so the girls are not cropped; caption sits below. */}
            <div className="overflow-hidden rounded-3xl ring-1 ring-line">
              <div className="relative aspect-[2/3]">
                <Image
                  src="/heather-girls.jpg"
                  alt={`${brand.therapist.name} with her twin daughters`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />
              </div>
              <div className="bg-sage-deep px-5 py-4">
                <p className="font-serif text-lg text-cream">
                  {brand.therapist.name}
                </p>
                <p className="text-xs text-cream/85">
                  {brand.therapist.credentials}
                </p>
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-line bg-sand/50 p-6 text-sm">
              <p className="font-serif text-lg text-sage-deep">Credentials</p>
              <ul className="mt-3 space-y-1.5 text-muted">
                <li>{brand.therapist.credentials}</li>
                <li>{brand.therapist.title}</li>
                <li>{brand.location.serves}</li>
              </ul>
            </div>
          </div>

          <div className="space-y-5">
            {brand.about.paragraphs.map((p, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "text-xl leading-relaxed text-ink"
                    : "leading-relaxed text-muted"
                }
              >
                {p}
              </p>
            ))}
            <blockquote className="mt-8 border-l-2 border-clay pl-5 font-serif text-2xl leading-snug text-sage-deep">
              &ldquo;You do not have to have it all together to begin. You only have
              to begin.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      <BookingCta />
    </>
  );
}

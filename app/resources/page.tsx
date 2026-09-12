import Image from "next/image";
import { brand } from "@/lib/brand";
import { PageHero } from "@/components/PageHero";
import { BookingCta } from "@/components/BookingCta";

export const metadata = { title: "Books & Resources" };

export default function Resources() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title={brand.resources.heading}
        intro={brand.resources.lead}
      />

      <section className="mx-auto max-w-5xl px-5 py-16 md:py-24">
        <div className="space-y-10">
          {brand.resources.books.map((b) => (
            <div
              key={b.slug}
              className="grid gap-7 rounded-3xl border border-line bg-cream p-6 sm:grid-cols-[minmax(0,12rem)_1fr] sm:p-8"
            >
              <div className="overflow-hidden rounded-2xl bg-sand ring-1 ring-line">
                <Image
                  src={b.image}
                  alt={`Cover of ${b.title}`}
                  width={900}
                  height={900}
                  className="h-auto w-full"
                  sizes="(max-width: 640px) 100vw, 12rem"
                />
              </div>
              <div>
                <h2 className="text-2xl leading-snug text-ink">{b.title}</h2>
                <p className="mt-1 text-sm text-clay">{b.subtitle}</p>
                <p className="mt-3 text-sm text-muted">{b.byline}</p>
                <p className="mt-4 leading-relaxed text-muted">{b.blurb}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {b.links.map((l) => (
                    <a
                      key={l.url}
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-sage/40 px-5 py-2.5 text-sm font-medium text-sage-deep transition hover:border-sage hover:bg-sage/5"
                    >
                      {l.label}
                      <span aria-hidden>&rarr;</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm leading-relaxed text-muted">
          Reading a book is not therapy, and nothing here replaces working with
          someone. If this season feels heavier than a book can hold, please
          reach out.
        </p>

        <div className="mt-10 rounded-2xl border border-line bg-sand/40 p-6 md:p-8">
          <h2 className="font-serif text-xl text-sage-deep">
            {brand.resources.disclosure.heading}
          </h2>
          <div className="mt-4 space-y-4">
            {brand.resources.disclosure.paragraphs.map((p) => (
              <div key={p.title}>
                <p className="text-sm font-medium text-ink">{p.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">{p.body}</p>
              </div>
            ))}
            <p className="text-sm leading-relaxed text-muted">
              {brand.resources.disclosure.contactLead}{" "}
              <a
                href={`mailto:${brand.contact.email}`}
                className="text-sage-deep underline-offset-2 hover:underline"
              >
                {brand.contact.email}
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <BookingCta />
    </>
  );
}

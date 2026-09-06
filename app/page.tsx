import Link from "next/link";
import Image from "next/image";
import { brand } from "@/lib/brand";
import { LogoEmblem } from "@/components/Logo";
import { ServiceIcon } from "@/components/ServiceIcon";
import { BookingCta } from "@/components/BookingCta";
import { InsuranceCompact } from "@/components/Insurance";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_85%_-10%,var(--color-sand),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 items-center justify-center lg:flex">
          <LogoEmblem className="h-[26rem] w-[26rem] opacity-[0.13]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="max-w-2xl">
            <span className="rise inline-flex items-center gap-2 rounded-full border border-line bg-white/60 px-3.5 py-1.5 text-xs uppercase tracking-[0.15em] text-sage">
              <span className="h-1.5 w-1.5 rounded-full bg-clay" />
              {brand.hero.eyebrow}
            </span>
            <h1 className="rise rise-2 mt-6 text-4xl leading-[1.08] text-ink md:text-6xl">
              {brand.hero.heading}
            </h1>
            <p className="rise rise-3 mt-6 max-w-xl text-lg leading-relaxed text-muted">
              {brand.hero.body}
            </p>
            <div className="rise rise-4 mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-sage px-7 py-3.5 text-center font-medium text-cream transition hover:bg-sage-deep"
              >
                {brand.contact.portalLabel}
              </Link>
              <Link
                href="/about"
                className="rounded-full border border-line bg-white/60 px-7 py-3.5 text-center font-medium text-ink transition hover:border-sage"
              >
                Meet Heather
              </Link>
            </div>
          </div>
        </div>

        {/* trust strip */}
        <div className="relative border-y border-line bg-white/50">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-5 md:grid-cols-4">
            {brand.trust.map((t) => (
              <div key={t} className="px-2 py-5 text-center text-sm text-ink/75">
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl ring-1 ring-line">
              <Image
                src="/heather-2026.jpg"
                alt={brand.therapist.name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 45vw"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-sage-deep via-sage-deep/75 to-transparent px-6 pb-6 pt-20">
                <p className="font-serif text-2xl text-cream [text-shadow:0_1px_4px_rgba(0,0,0,0.45)]">
                  {brand.therapist.name}
                </p>
                <p className="text-sm text-cream/90 [text-shadow:0_1px_3px_rgba(0,0,0,0.4)]">
                  {brand.therapist.credentials}
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-clay">A little about me</p>
            <h2 className="mt-4 text-3xl leading-tight text-ink md:text-4xl">
              I found my way through this season too.
            </h2>
            <p className="mt-5 leading-relaxed text-muted">
              {brand.approach.lead}
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              That is why the perinatal season is the heart of my work. Whether you
              are anxious in pregnancy, sitting beside an incubator, grieving a loss,
              or simply not feeling like yourself, you deserve to be met with real
              understanding.
            </p>
            <Link
              href="/about"
              className="mt-7 inline-flex items-center gap-2 font-medium text-sage transition hover:gap-3"
            >
              Read my story
              <span aria-hidden>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="bg-sand/50">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-clay">How I can help</p>
            <h2 className="mt-4 text-3xl leading-tight text-ink md:text-4xl">
              Support for every part of this chapter.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {brand.specialties.map((s) => (
              <div
                key={s.title}
                className="group overflow-hidden rounded-2xl border border-line bg-cream transition hover:-translate-y-1 hover:border-sage/50 hover:shadow-sm"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-sand">
                  <Image
                    src={s.image}
                    alt={s.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={`object-cover ${s.imagePos} transition duration-700 group-hover:scale-[1.04]`}
                  />
                </div>
                <div className="relative p-7">
                  <div className="absolute -top-6 left-7 flex h-12 w-12 items-center justify-center rounded-full border border-line bg-cream shadow-sm">
                    <ServiceIcon name={s.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-xl text-ink">{s.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-medium text-sage transition hover:gap-3"
            >
              See all services
              <span aria-hidden>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Insurance */}
      <section className="border-y border-line bg-sand/40">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.6fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-clay">
                Paying for care
              </p>
              <h2 className="mt-4 text-2xl leading-tight text-ink md:text-3xl">
                {brand.insurance.heading}
              </h2>
              <p className="mt-3 leading-relaxed text-muted">
                {brand.insurance.lead}
              </p>
            </div>
            <InsuranceCompact tone="sand" />
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-clay">What it feels like</p>
          <h2 className="mt-4 text-3xl leading-tight text-ink md:text-4xl">
            {brand.approach.heading}
          </h2>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {brand.approach.points.map((p, i) => (
            <div key={p.title} className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-clay/10 font-serif text-xl text-clay">
                {i + 1}
              </div>
              <h3 className="mt-5 text-xl text-ink">{p.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <BookingCta />
    </>
  );
}

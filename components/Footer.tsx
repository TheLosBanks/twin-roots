import Link from "next/link";
import { brand } from "@/lib/brand";
import { LogoEmblemWhite } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-sage-deep text-cream/85">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <span className="flex items-center gap-2.5">
              <LogoEmblemWhite className="h-11 w-11" />
              <span className="font-serif text-xl text-cream">{brand.shortName}</span>
            </span>
            <p className="mt-4 text-sm leading-relaxed text-cream/70">
              {brand.tagline}
            </p>
          </div>

          <div className="flex gap-14">
            <div>
              <p className="mb-3 text-xs uppercase tracking-widest text-clay-soft">Explore</p>
              <ul className="space-y-2 text-sm">
                {brand.nav.map((n) => (
                  <li key={n.href}>
                    <Link href={n.href} className="text-cream/75 transition hover:text-cream">
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-3 text-xs uppercase tracking-widest text-clay-soft">Practice</p>
              <ul className="space-y-2 text-sm text-cream/75">
                <li>{brand.therapist.name}</li>
                <li>{brand.therapist.credentials}</li>
                <li>{brand.location.city}</li>
                <li>{brand.location.serves}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/15 pt-6 text-xs text-cream/55">
          <p>
            &copy; {new Date().getFullYear()} {brand.name}. {brand.therapist.license}.
          </p>
          <p className="mt-2 max-w-2xl leading-relaxed">
            This website is for informational purposes and is not a substitute for
            professional care. If you are in crisis, call or text 988 for the Suicide
            and Crisis Lifeline, or dial 911.
          </p>
        </div>
      </div>
    </footer>
  );
}

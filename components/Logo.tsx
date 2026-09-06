import Image from "next/image";
import { brand } from "@/lib/brand";

// The real Twin Roots emblem (intertwined twin-trunk tree = twins + roots).
// Clean transparent PNG from the source art (smooth rings, unlike the trace).
export function LogoEmblem({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/logo-mark.png"
      alt={`${brand.name} emblem`}
      width={897}
      height={902}
      className={className}
      priority
    />
  );
}

// White version of the emblem, for dark (sage-deep) backgrounds like the footer.
export function LogoEmblemWhite({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/logo-mark-white.png"
      alt={`${brand.name} emblem`}
      width={897}
      height={902}
      className={className}
    />
  );
}

// Full stacked lockup (emblem + wordmark), for larger brand moments.
export function LogoFull({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt={brand.name}
      width={1142}
      height={1195}
      className={className}
    />
  );
}

// Small decorative sprout for micro icons (service cards, list markers).
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path d="M24 44c0-4-3-7-6-9" fill="none" stroke="var(--color-clay)" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M24 44c0-4 3-7 6-9" fill="none" stroke="var(--color-clay)" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M24 44C24 30 20 22 16 16" fill="none" stroke="var(--color-sage)" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M24 44C24 30 28 22 32 16" fill="none" stroke="var(--color-sage)" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M16 16c-3.4-1.2-6-0.6-7.6 1.4 2 1.6 4.8 1.8 7.6-1.4z" fill="var(--color-sage-soft)" />
      <path d="M32 16c3.4-1.2 6-0.6 7.6 1.4-2 1.6-4.8 1.8-7.6-1.4z" fill="var(--color-sage-soft)" />
      <circle cx="16" cy="14.5" r="2.3" fill="var(--color-clay)" />
      <circle cx="32" cy="14.5" r="2.3" fill="var(--color-clay)" />
    </svg>
  );
}

// Wordmark mirrors the printed lockup: "Twin Roots" over spaced "PSYCHOTHERAPY".
export function Wordmark({
  className = "",
  tone = "ink",
}: {
  className?: string;
  tone?: "ink" | "cream";
}) {
  const cream = tone === "cream";
  const Emblem = cream ? LogoEmblemWhite : LogoEmblem;
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <Emblem className="h-11 w-11 shrink-0" />
      <span className="flex flex-col">
        <span
          className={`font-serif text-[1.35rem] leading-none ${
            cream ? "text-cream" : "text-ink"
          }`}
        >
          {brand.shortName}
        </span>
        <span
          className={`mt-1 text-[0.58rem] uppercase leading-none tracking-[0.28em] ${
            cream ? "text-cream/70" : "text-sage"
          }`}
        >
          Psychotherapy
        </span>
      </span>
    </span>
  );
}

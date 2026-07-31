// Distinct line-symbols per service, in the sage/clay palette.
// Keyed by the `icon` field on each specialty in lib/brand.ts.

const S = "var(--color-sage)";
const C = "var(--color-clay)";

const icons: Record<string, React.ReactNode> = {
  // Postpartum depression & anxiety: sunrise = light after the dark
  sunrise: (
    <>
      <path d="M4 18a8 8 0 0 1 16 0" fill="none" stroke={S} strokeWidth="1.7" strokeLinecap="round" />
      <line x1="2.5" y1="18" x2="21.5" y2="18" stroke={S} strokeWidth="1.7" strokeLinecap="round" />
      <line x1="12" y1="3" x2="12" y2="5.5" stroke={C} strokeWidth="1.7" strokeLinecap="round" />
      <line x1="5" y1="6" x2="6.6" y2="7.6" stroke={C} strokeWidth="1.7" strokeLinecap="round" />
      <line x1="19" y1="6" x2="17.4" y2="7.6" stroke={C} strokeWidth="1.7" strokeLinecap="round" />
    </>
  ),
  // Pregnancy & prenatal: seedling
  seedling: (
    <>
      <path d="M12 21V11" stroke={S} strokeWidth="1.7" strokeLinecap="round" />
      <path d="M12 13c-1-3-4-3.5-6-3 .2 2.5 2.4 4.2 6 3z" fill="none" stroke={S} strokeWidth="1.6" />
      <path d="M12 11c1-3 4-3.5 6-3-.2 2.5-2.4 4.2-6 3z" fill="none" stroke={S} strokeWidth="1.6" />
      <circle cx="12" cy="7" r="2" fill="none" stroke={C} strokeWidth="1.6" />
    </>
  ),
  // NICU parents: a heart holding a smaller heart (protective care)
  heart: (
    <>
      <path d="M12 20S3.5 14.5 3.5 8.8C3.5 6.1 5.6 4 8.2 4c1.7 0 3 .9 3.8 2.2C12.8 4.9 14.1 4 15.8 4c2.6 0 4.7 2.1 4.7 4.8C20.5 14.5 12 20 12 20z" fill="none" stroke={S} strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M12 14.5s-3-1.9-3-4c0-1 .8-1.8 1.8-1.8.6 0 1 .3 1.2.7.3-.4.7-.7 1.2-.7 1 0 1.8.8 1.8 1.8 0 2.1-3 4-3 4z" fill="none" stroke={C} strokeWidth="1.4" strokeLinejoin="round" />
    </>
  ),
  // Pregnancy & infant loss: remembrance bloom
  bloom: (
    <>
      <path d="M12 22v-7" stroke={S} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M12 18c-2 0-4 .8-4 .8s1 1.8 3 1.4" fill="none" stroke={S} strokeWidth="1.4" strokeLinecap="round" />
      <g fill="none" stroke={S} strokeWidth="1.5">
        <ellipse cx="12" cy="6.5" rx="2.2" ry="3.3" />
        <ellipse cx="12" cy="6.5" rx="2.2" ry="3.3" transform="rotate(60 12 8.5)" />
        <ellipse cx="12" cy="6.5" rx="2.2" ry="3.3" transform="rotate(120 12 8.5)" />
      </g>
      <circle cx="12" cy="9" r="1.4" fill={C} stroke="none" />
    </>
  ),
  // Parents of multiples: two leaves (twins)
  twins: (
    <>
      <path d="M11 21c0-5-1.5-7.5-5-9 0 4 1.5 7.5 5 9z" fill="none" stroke={S} strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M13 21c0-5 1.5-7.5 5-9 0 4-1.5 7.5-5 9z" fill="none" stroke={S} strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="7.5" cy="9.5" r="1.4" fill={C} stroke="none" />
      <circle cx="16.5" cy="9.5" r="1.4" fill={C} stroke="none" />
    </>
  ),
  // Individual therapy: a single stem growing with a bud
  growth: (
    <>
      <path d="M12 21V7" stroke={S} strokeWidth="1.7" strokeLinecap="round" />
      <path d="M12 13c-1.2-2.2-3.6-2.6-5.5-2.2.3 2 2 3.4 5.5 2.2z" fill="none" stroke={S} strokeWidth="1.5" />
      <circle cx="12" cy="5" r="2.2" fill="none" stroke={C} strokeWidth="1.6" />
    </>
  ),
};

export function ServiceIcon({ name, className = "" }: { name: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      {icons[name] ?? icons.seedling}
    </svg>
  );
}

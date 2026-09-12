import { brand } from "@/lib/brand";

const { groups, direct } = brand.insurance;

type Plan = { readonly name: string; readonly note?: string };

function Pills({ plans }: { plans: readonly Plan[] }) {
  return (
    <ul className="flex flex-wrap gap-2.5">
      {plans.map((p) => (
        <li
          key={p.name}
          className="inline-flex items-baseline gap-1.5 rounded-full border border-sage/30 bg-sage/5 px-4 py-2 text-sm text-sage-deep"
        >
          {p.name}
          {"note" in p && <span className="text-xs text-muted">({p.note})</span>}
        </li>
      ))}
    </ul>
  );
}

function Direct() {
  return (
    <div className="mt-6 rounded-2xl border border-line bg-sand/40 p-6">
      <Pills plans={direct.plans} />
      <p className="mt-3 text-sm leading-relaxed text-muted">{direct.note}</p>
    </div>
  );
}

// Full-width horizontal rows: platform on the left, its plans in the middle,
// its book button on the right. For places with the whole page width to use,
// where the side-by-side cards would squeeze the pills into narrow columns.
export function InsuranceRows({ heading }: { heading?: string }) {
  return (
    <div>
      {heading && (
        <p className="text-xs uppercase tracking-widest text-clay">{heading}</p>
      )}
      <div className={`space-y-4 ${heading ? "mt-4" : ""}`}>
        {groups.map((g) => {
          const selfPay = "selfPay" in g ? g.selfPay : null;
          return (
            <div
              key={g.id}
              className="grid items-center gap-5 rounded-2xl border border-line bg-cream p-6 md:grid-cols-[minmax(0,13rem)_1fr_auto] md:gap-7"
            >
              <h3 className="text-xl leading-snug text-ink">{g.title}</h3>
              <div>
                <Pills plans={g.plans} />
                {selfPay && (
                  <div className="mt-3 inline-flex w-fit items-baseline gap-2 rounded-full bg-sand/70 px-4 py-2 text-sm">
                    <span className="text-muted">{selfPay.label}</span>
                    <span className="font-serif text-lg text-sage-deep">{selfPay.rate}</span>
                    <span className="text-xs text-muted">{selfPay.unit}</span>
                  </div>
                )}
              </div>
              <a
                href={g.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-sage px-6 py-3 text-sm font-medium text-cream transition hover:bg-sage-deep"
              >
                {g.ctaLabel}
                <span aria-hidden>&rarr;</span>
              </a>
            </div>
          );
        })}
      </div>
      <Direct />
      <p className="mt-5 text-sm leading-relaxed text-muted">
        {brand.insurance.footnote}
      </p>
    </div>
  );
}

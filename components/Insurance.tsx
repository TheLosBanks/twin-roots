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

// One platform: its plans, its self-pay rate if it has one, and its book link.
function GroupCard({ group }: { group: (typeof groups)[number] }) {
  const selfPay = "selfPay" in group ? group.selfPay : null;
  return (
    <div className="flex flex-col rounded-2xl border border-line bg-cream p-7">
      <h3 className="text-xl text-ink">{group.title}</h3>
      <div className="mt-5">
        <Pills plans={group.plans} />
      </div>
      {selfPay && (
        <div className="mt-4 inline-flex w-fit items-baseline gap-2 rounded-full bg-sand/70 px-4 py-2 text-sm">
          <span className="text-muted">{selfPay.label}</span>
          <span className="font-serif text-lg text-sage-deep">{selfPay.rate}</span>
          <span className="text-xs text-muted">{selfPay.unit}</span>
        </div>
      )}
      <a
        href={group.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-sage px-6 py-3 text-sm font-medium text-cream transition hover:bg-sage-deep"
      >
        {group.ctaLabel}
        <span aria-hidden>&rarr;</span>
      </a>
    </div>
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

// Full block: heading, lead, both platforms, the direct plan, superbill note.
export function InsuranceSection() {
  return (
    <div className="rounded-3xl border border-line bg-white/40 p-8 md:p-12">
      <h2 className="text-2xl text-ink md:text-3xl">{brand.insurance.heading}</h2>
      <p className="mt-3 max-w-2xl leading-relaxed text-muted">
        {brand.insurance.lead}
      </p>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {groups.map((g) => (
          <GroupCard key={g.id} group={g} />
        ))}
      </div>
      <Direct />
      <p className="mt-6 text-sm leading-relaxed text-muted">
        {brand.insurance.footnote}
      </p>
    </div>
  );
}

// Compact: same two platforms, no outer card. Home and Contact.
export function InsuranceCompact({ heading }: { heading?: string }) {
  return (
    <div>
      {heading && (
        <p className="text-xs uppercase tracking-widest text-clay">{heading}</p>
      )}
      <div className={`grid gap-5 md:grid-cols-2 ${heading ? "mt-4" : ""}`}>
        {groups.map((g) => (
          <GroupCard key={g.id} group={g} />
        ))}
      </div>
      <Direct />
    </div>
  );
}

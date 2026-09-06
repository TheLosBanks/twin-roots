import { brand } from "@/lib/brand";

const { plans, selfPay } = brand.insurance;

function Pills({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-2.5 ${className}`}>
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

function SelfPay({ tone = "light" }: { tone?: "light" | "sand" }) {
  return (
    <div
      className={`inline-flex items-baseline gap-2 rounded-full px-4 py-2 text-sm ${
        tone === "sand" ? "bg-cream" : "bg-sand/70"
      }`}
    >
      <span className="text-muted">{selfPay.label}</span>
      <span className="font-serif text-lg text-sage-deep">{selfPay.rate}</span>
      <span className="text-xs text-muted">{selfPay.unit}</span>
    </div>
  );
}

// Full block: heading, lead, pills, self-pay, superbill note. Services page.
export function InsuranceSection() {
  return (
    <div className="rounded-3xl border border-line bg-cream p-8 md:p-12">
      <h2 className="text-2xl text-ink md:text-3xl">{brand.insurance.heading}</h2>
      <p className="mt-3 max-w-2xl leading-relaxed text-muted">
        {brand.insurance.lead}
      </p>
      <Pills className="mt-7" />
      <div className="mt-5">
        <SelfPay />
      </div>
      <p className="mt-6 text-sm leading-relaxed text-muted">
        {brand.insurance.footnote}
      </p>
    </div>
  );
}

// Compact: pills plus the rate, no heading of its own. Home and Contact.
export function InsuranceCompact({
  heading,
  tone = "light",
}: {
  heading?: string;
  tone?: "light" | "sand";
}) {
  return (
    <div>
      {heading && (
        <p className="text-xs uppercase tracking-widest text-clay">{heading}</p>
      )}
      <Pills className={heading ? "mt-4" : ""} />
      <div className="mt-4">
        <SelfPay tone={tone} />
      </div>
    </div>
  );
}

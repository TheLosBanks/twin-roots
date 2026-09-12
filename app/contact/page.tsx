import { brand } from "@/lib/brand";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { InsuranceRows } from "@/components/Insurance";

export const metadata = { title: "Contact" };

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's take the first step together."
        intro="Reaching out can feel like a lot. There is no pressure here, just a place to start when you are ready."
      />

      <section className="mx-auto max-w-5xl px-5 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 className="text-2xl text-ink">Get in touch</h2>
            <p className="mt-4 leading-relaxed text-muted">
              Send a note using the form or email me directly. I will get back
              to you personally and we will find a time to meet.
            </p>

            <div className="mt-8 space-y-5 text-sm">
              <div>
                <p className="text-xs uppercase tracking-widest text-clay">Email</p>
                <a
                  href={`mailto:${brand.contact.email}`}
                  className="mt-1 block text-lg text-sage-deep underline-offset-2 hover:underline"
                >
                  {brand.contact.email}
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-clay">Sessions</p>
                <p className="mt-1 text-ink/80">{brand.location.serves}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-clay">Based in</p>
                <p className="mt-1 text-ink/80">{brand.location.city}</p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-clay/30 bg-clay/5 p-5 text-sm leading-relaxed text-ink/80">
              If you are in crisis or thinking about harming yourself, please call or
              text 988 for the Suicide and Crisis Lifeline, or dial 911. You matter,
              and help is available right now.
            </div>
          </div>

          <div className="rounded-3xl border border-line bg-white/60 p-7 md:p-9">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Insurance gets the full page width so the plan pills can breathe */}
      <section className="border-t border-line bg-sand/40">
        <div className="mx-auto max-w-5xl px-5 py-16 md:py-20">
          <h2 className="text-2xl text-ink md:text-3xl">
            {brand.insurance.heading}
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-muted">
            {brand.insurance.lead}
          </p>
          <div className="mt-8">
            <InsuranceRows />
          </div>
        </div>
      </section>
    </>
  );
}

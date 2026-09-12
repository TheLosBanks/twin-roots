export function PageHero({
  eyebrow,
  title,
  intro,
  introSecondLine,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  // Rendered on its own line under `intro`, for a closing aside that reads
  // better separated from the sentence before it.
  introSecondLine?: string;
}) {
  return (
    <section className="bg-sage-deep text-cream">
      <div className="mx-auto max-w-4xl px-5 py-20 text-center md:py-24">
        {eyebrow && (
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-clay-soft rise">
            {eyebrow}
          </p>
        )}
        <h1 className="rise rise-2 text-4xl leading-tight md:text-5xl">{title}</h1>
        {intro && (
          <p className="rise rise-3 mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-cream/80">
            {intro}
            {introSecondLine && (
              <>
                <br />
                {introSecondLine}
              </>
            )}
          </p>
        )}
      </div>
    </section>
  );
}

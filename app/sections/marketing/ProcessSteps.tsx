import { PROCESS_STEPS } from "../../lib/services";
import { Reveal, SectionHeading } from "../shared";

export function ProcessSteps({
  theme = "obsidian",
  heading = true,
}: {
  theme?: "obsidian" | "paper";
  heading?: boolean;
}) {
  return (
    <section
      className={`theme-${theme} border-t border-border bg-surface py-20 md:py-28`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {heading && (
          <Reveal>
            <SectionHeading
              eyebrow="How we work"
              title="A calm, visible operating rhythm."
              description="Same process from discovery to launch — short loops, weekly demos, and clear async updates that flex to your timezone."
            />
          </Reveal>
        )}

        <div className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
          {PROCESS_STEPS.map((step, i) => (
            <Reveal
              key={step.title}
              variant="pop-in"
              delay={(i * 100) as 0 | 100 | 200 | 300}
              className="group h-full"
            >
              <div className="accent-hover-card kinetic-card relative h-full rounded-2xl p-6 md:p-7">
                <span className="step-number font-mono text-4xl font-bold tabular-nums leading-none text-text-primary/15 transition-colors duration-300 md:text-5xl">
                  0{i + 1}
                </span>

                <h3 className="mt-5 text-lg font-semibold text-text-primary md:text-xl">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

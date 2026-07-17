import { PROCESS_STEPS } from "../../lib/services";
import { Reveal, SectionHeading } from "../shared";

type ProcessStep = { title: string; body: string };

export function ProcessSteps({
  theme = "obsidian",
  heading = true,
  steps = PROCESS_STEPS,
  eyebrow = "How we work",
  title = "A calm, visible operating rhythm.",
  description = "Same process from discovery to launch — short loops, weekly demos, and clear async updates that flex to your timezone.",
}: {
  theme?: "obsidian" | "paper";
  heading?: boolean;
  steps?: readonly ProcessStep[];
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  return (
    <section
      className={`theme-${theme} border-t border-border bg-surface py-14 sm:py-20 md:py-28`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {heading && (
          <Reveal>
            <SectionHeading
              size="default"
              eyebrow={eyebrow}
              title={title}
              description={description}
            />
          </Reveal>
        )}

        <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 xl:mt-14 xl:grid-cols-4 xl:gap-6">
          {steps.map((step, i) => (
            <Reveal
              key={step.title}
              variant="pop-in"
              delay={(i * 100) as 0 | 100 | 200 | 300}
              className="group h-full"
            >
              <div className="accent-hover-card kinetic-card relative h-full rounded-lg p-4 sm:rounded-2xl sm:p-5 md:p-7">
                <span className="step-number font-mono text-2xl font-bold tabular-nums leading-none text-text-primary/15 transition-colors duration-300 sm:text-3xl md:text-5xl">
                  0{i + 1}
                </span>

                <h3 className="mt-3 text-sm font-semibold text-text-primary sm:mt-4 sm:text-base md:text-xl">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-text-secondary sm:mt-2 sm:text-sm">
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

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
          <SectionHeading
            eyebrow="How we work"
            title="A calm, visible operating rhythm."
            description="Same process from discovery to launch — short loops, weekly demos, and clear async updates across US and EU hours."
          />
        )}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {PROCESS_STEPS.map((step, i) => (
            <Reveal
              key={step.title}
              delay={(i * 100) as 0 | 100 | 200 | 300}
              className="kinetic-card rounded-2xl border border-border bg-surface-elevated p-6 md:p-7"
            >
              <p className="text-sm font-semibold tabular-nums text-accent">
                0{i + 1}
              </p>
              <h3 className="mt-4 text-lg font-semibold text-text-primary md:text-xl">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                {step.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

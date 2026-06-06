import { TECH_STACK } from "../../lib/services";
import { SectionHeading } from "../shared";

export function TechStackStrip({
  items = TECH_STACK,
  heading = true,
  theme = "paper",
}: {
  items?: readonly string[];
  heading?: boolean;
  theme?: "obsidian" | "paper";
}) {
  // Duplicate the list so the marquee loops seamlessly (track shifts -50%).
  const loop = [...items, ...items];

  return (
    <section
      className={`theme-${theme} border-t border-border bg-surface-muted py-20 md:py-28`}
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        {heading && (
          <SectionHeading
            eyebrow="Tech stack"
            title="Modern, type-safe, battle-tested."
            description="We build on a broad, proven stack — and pick the right tools for your project, not a one-size-fits-all."
          />
        )}
      </div>

      <div className="tech-marquee mt-12" aria-hidden>
        <div className="tech-marquee-track">
          {loop.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="shrink-0 rounded-full border border-border bg-surface-elevated px-5 py-2.5 text-sm font-medium text-text-primary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Accessible, non-animated list for screen readers */}
      <ul className="sr-only">
        {items.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </section>
  );
}

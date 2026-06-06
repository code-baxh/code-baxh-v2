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
  return (
    <section
      className={`theme-${theme} border-t border-border bg-surface-muted py-20 md:py-28`}
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        {heading && (
          <SectionHeading
            eyebrow="Tech stack"
            title="Modern, type-safe, production-proven."
            description="We build on a focused stack we know deeply — the same tools we use to run our own SaaS work."
          />
        )}
        <ul className="mt-10 flex flex-wrap gap-3">
          {items.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-border bg-surface-elevated px-4 py-2 text-sm font-medium text-text-primary"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

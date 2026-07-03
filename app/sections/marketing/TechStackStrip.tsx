import type { CSSProperties } from "react";
import Image from "next/image";
import { Reveal, SectionHeading } from "../shared";
import { TECH_STACK_ITEMS, type TechStackItem } from "./tech-stack-icons";

const MARQUEE_DURATION = "34s";

const TECH_CATEGORIES = [
  "Frontend",
  "Backend",
  "Databases",
  "Cloud",
  "AI",
] as const;

function splitIntoColumns<T>(items: readonly T[], columns: number): T[][] {
  const result: T[][] = Array.from({ length: columns }, () => []);
  items.forEach((item, i) => {
    result[i % columns].push(item);
  });
  return result;
}

function TechStackPill({ item }: { item: TechStackItem }) {
  const label = item.name === "Strapi (headless CMS)" ? "Strapi" : item.name;

  return (
    <div className="tech-pill">
      <span className="tech-pill__icon">
        {item.icon ? (
          <Image
            src={item.icon}
            alt=""
            width={28}
            height={28}
            className="size-6 object-contain"
            aria-hidden
          />
        ) : (
          <span className="text-[11px] font-bold uppercase tracking-tight text-accent">
            {label.slice(0, 2)}
          </span>
        )}
      </span>
      <span className="tech-pill__label">{label}</span>
    </div>
  );
}

function MarqueeGroup({
  items,
  groupId,
  clone,
}: {
  items: readonly TechStackItem[];
  groupId: string;
  clone?: boolean;
}) {
  return (
    <div
      className={`tech-marquee-group ${clone ? "tech-marquee-group--clone" : ""}`}
      aria-hidden
    >
      {items.map((item, i) => (
        <TechStackPill key={`${groupId}-${item.name}-${i}`} item={item} />
      ))}
    </div>
  );
}

function TechMarqueeRow({
  items,
  reverse = false,
  duration,
}: {
  items: readonly TechStackItem[];
  reverse?: boolean;
  duration: string;
}) {
  if (!items.length) return null;

  return (
    <div className="tech-marquee" aria-hidden>
      <div
        className={[
          "tech-marquee-track",
          reverse ? "tech-marquee-track--reverse" : "",
        ]
          .filter(Boolean)
          .join(" ")}
        style={{ "--marquee-duration": duration } as CSSProperties}
      >
        <MarqueeGroup items={items} groupId="a" />
        <MarqueeGroup items={items} groupId="b" clone />
        <MarqueeGroup items={items} groupId="c" clone />
      </div>
    </div>
  );
}

export function TechStackStrip({
  items = TECH_STACK_ITEMS,
  heading = true,
  theme = "paper",
}: {
  items?: readonly TechStackItem[];
  heading?: boolean;
  theme?: "obsidian" | "paper";
}) {
  const [leftCol, centerCol, rightCol] = splitIntoColumns(items, 3);

  return (
    <section
      className={`tech-stack-section theme-${theme} relative overflow-hidden border-t border-border bg-surface-muted py-16 sm:py-24 md:py-28`}
    >
      <div className="tech-stack-glow pointer-events-none absolute inset-x-0 -top-16 h-72" aria-hidden />

      {heading && (
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <SectionHeading
              align="center"
              eyebrow="Tech stack"
              title="Modern, type-safe, battle-tested."
              description="We build on a broad, proven stack — and pick the right tools for your project, not a one-size-fits-all."
            />
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-text-muted sm:text-xs">
              {TECH_CATEGORIES.map((category, i) => (
                <span key={category} className="flex items-center gap-3">
                  {i > 0 ? (
                    <span
                      className="size-1 rounded-full bg-accent/60"
                      aria-hidden
                    />
                  ) : null}
                  {category}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      )}

      <Reveal
        variant="pop-in"
        delay={100}
        className={`tech-marquee-rows ${heading ? "mt-12 sm:mt-14 md:mt-16" : ""}`}
      >
        <TechMarqueeRow items={leftCol} duration={MARQUEE_DURATION} />
        <TechMarqueeRow items={centerCol} reverse duration={MARQUEE_DURATION} />
        <TechMarqueeRow items={rightCol} duration={MARQUEE_DURATION} />
      </Reveal>

      <ul className="sr-only">
        {items.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </section>
  );
}

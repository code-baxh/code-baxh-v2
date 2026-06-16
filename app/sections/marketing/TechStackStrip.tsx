import type { CSSProperties } from "react";
import Image from "next/image";
import { Reveal, SectionHeading } from "../shared";
import { TECH_STACK_ITEMS, type TechStackItem } from "./tech-stack-icons";

const MARQUEE_DURATION = "28s";

function splitIntoColumns<T>(items: readonly T[], columns: number): T[][] {
  const result: T[][] = Array.from({ length: columns }, () => []);
  items.forEach((item, i) => {
    result[i % columns].push(item);
  });
  return result;
}

function TechStackTile({
  item,
  muted,
}: {
  item: TechStackItem;
  muted?: boolean;
}) {
  const label =
    item.name === "Strapi (headless CMS)" ? "Strapi" : item.name;

  return (
    <div
      className={[
        "flex w-[5rem] shrink-0 flex-col items-center gap-2.5 md:w-[5.5rem]",
        muted ? "opacity-80" : "",
      ].join(" ")}
    >
      <div className="flex size-16 items-center justify-center p-1 md:size-[4.5rem]">
        {item.icon ? (
          <Image
            src={item.icon}
            alt=""
            width={48}
            height={48}
            className="size-10 object-contain md:size-11"
            aria-hidden
          />
        ) : (
          <span className="flex size-10 items-center justify-center text-xl font-bold uppercase tracking-tight text-accent md:size-11 md:text-2xl">
            {label.slice(0, 2)}
          </span>
        )}
      </div>
      <span className="max-w-[5rem] text-center text-[10px] font-medium leading-tight text-text-muted md:text-[11px]">
        {label}
      </span>
    </div>
  );
}

function MarqueeGroup({
  items,
  groupId,
  muted,
}: {
  items: readonly TechStackItem[];
  groupId: string;
  muted?: boolean;
}) {
  return (
    <div className="tech-marquee-group" aria-hidden>
      {items.map((item, i) => (
        <TechStackTile
          key={`${groupId}-${item.name}-${i}`}
          item={item}
          muted={muted}
        />
      ))}
    </div>
  );
}

function TechMarqueeRow({
  items,
  reverse = false,
  duration,
  muted = false,
}: {
  items: readonly TechStackItem[];
  reverse?: boolean;
  duration: string;
  muted?: boolean;
}) {
  if (!items.length) return null;

  return (
    <div className="tech-marquee overflow-hidden py-2" aria-hidden>
      <div
        className={[
          "tech-marquee-track",
          reverse ? "tech-marquee-track--reverse" : "",
        ]
          .filter(Boolean)
          .join(" ")}
        style={{ "--marquee-duration": duration } as CSSProperties}
      >
        <MarqueeGroup items={items} groupId="a" muted={muted} />
        <MarqueeGroup items={items} groupId="b" muted={muted} />
        <MarqueeGroup items={items} groupId="c" muted={muted} />
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
      className={`theme-${theme} overflow-x-hidden border-t border-border bg-surface-muted py-20 md:py-28`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {heading && (
          <Reveal>
            <SectionHeading
              eyebrow="Tech stack"
              title="Modern, type-safe, battle-tested."
              description="We build on a broad, proven stack — and pick the right tools for your project, not a one-size-fits-all."
            />
          </Reveal>
        )}
      </div>

      <Reveal variant="pop-in" delay={100} className="tech-marquee-rows mt-12 md:mt-14">
        <TechMarqueeRow items={leftCol} duration={MARQUEE_DURATION} />
        <TechMarqueeRow
          items={centerCol}
          reverse
          duration={MARQUEE_DURATION}
          muted
        />
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

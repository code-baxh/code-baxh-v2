import { cn } from "@/lib/utils";

type Tone = "ink" | "paper";

/**
 * Page section. `tone` gives the section its own colour world regardless of the
 * site theme: "ink" is the dark surface, "paper" a warm light one. Toned
 * sections have rounded tops and overlap the section before them, so each one
 * slides over the last as you scroll.
 */
export function Section({
  id,
  className,
  tone,
  children,
}: {
  id?: string;
  className?: string;
  tone?: Tone;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 sm:py-24",
        tone && "relative -mt-10 rounded-t-[2.5rem] bg-bg pb-24 text-fg sm:rounded-t-[3.5rem] sm:pb-32",
        tone === "ink" && "dark theme-ink",
        tone === "paper" && "theme-paper",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-[92rem] px-5 sm:px-8 lg:px-14">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  className,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-3xl text-center", className)}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold sm:text-[2.6rem]">{title}</h2>
      {lead ? <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">{lead}</p> : null}
    </div>
  );
}

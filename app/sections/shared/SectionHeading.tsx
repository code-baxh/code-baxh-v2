type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  animate?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  animate = false,
}: SectionHeadingProps) {
  const alignClass =
    align === "center"
      ? "mx-auto text-center items-center [&::before]:mx-auto"
      : "text-left items-start";

  return (
    <div
      className={`heading-accent flex max-w-2xl flex-col ${alignClass} ${
        animate ? "animate-hero-reveal" : ""
      }`}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-text-muted md:text-sm">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-text-primary md:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-text-secondary md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  animate?: boolean;
  size?: "default" | "large";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  animate = false,
  size = "default",
}: SectionHeadingProps) {
  const alignClass =
    align === "center"
      ? "mx-auto text-center items-center"
      : "text-left items-start";

  return (
    <div
      className={`heading-accent flex max-w-2xl flex-col ${alignClass} ${
        animate ? "animate-hero-reveal" : ""
      }`}
    >
      {eyebrow ? (
        <p className="heading-accent__eyebrow text-xs font-medium uppercase tracking-[0.2em] text-text-muted md:text-sm">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-semibold tracking-tight text-text-primary ${
          size === "large"
            ? "text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.05]"
            : "text-3xl md:text-4xl lg:text-[2.75rem]"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 leading-relaxed text-text-secondary ${
            size === "large"
              ? "max-w-2xl text-lg md:text-xl"
              : "text-base md:text-lg"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

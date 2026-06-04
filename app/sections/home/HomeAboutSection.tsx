import { Reveal, SectionHeading, SectionLink, SectionShell } from "../shared";

const VALUES = [
  {
    title: "Specialist recruiting",
    body: "Deep tech market knowledge, not generic CV pushing.",
  },
  {
    title: "Builder mindset",
    body: "We understand delivery because we ship software too.",
  },
  {
    title: "Clear communication",
    body: "Short loops, direct updates, and visible progress.",
  },
] as const;

export function HomeAboutSection() {
  return (
    <SectionShell id="about" index="05" label="About" theme="obsidian">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Reveal>
          <SectionHeading
            size="large"
            eyebrow="Who we are"
            title="Recruiters who build. Builders who recruit."
            description="Code Baxh started in tech recruitment — specialty, market knowledge, and connections that surface talent others miss. Along the way, we began shipping websites and software with the same teams we support."
          />
          <div className="mt-10">
            <SectionLink href="/about" label="Read the full story" />
          </div>
        </Reveal>

        <div className="grid gap-5">
          {VALUES.map((value, index) => (
            <Reveal
              key={value.title}
              delay={(index * 100) as 0 | 100 | 200}
              className="rounded-2xl border border-border bg-surface-elevated p-7 md:p-8"
            >
              <h3 className="text-xl font-semibold text-text-primary">
                {value.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary md:text-base">
                {value.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

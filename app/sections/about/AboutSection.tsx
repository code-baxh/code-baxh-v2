import { Reveal, SectionHeading } from "../shared";
import { ContactCard } from "./ContactCard";

export function AboutSection() {
  return (
    <section
      id="about"
      className="snap-section theme-paper border-t border-border bg-surface py-20 md:py-28"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="grid gap-14 md:grid-cols-2 md:items-start md:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="About us"
              title="Recruiters who build. Builders who recruit."
              description="Code Baxh started in tech recruitment — specialty, market knowledge, and connections that surface talent others can't find. Along the way, we began shipping websites and software with the same teams we support. Today we do both: place exceptional people and build the products those teams need."
            />
          </Reveal>

          <div className="space-y-14">
            <Reveal
              delay={100}
              as="div"
              id="careers"
              className="kinetic-card scroll-mt-28 rounded-2xl border border-border bg-surface-elevated p-7 md:p-8"
            >
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
                Careers
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-text-primary md:text-2xl">
                Join the Code Baxh team.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary md:text-base">
                We&apos;re always looking for sharp recruiters, engineers, and
                operators who care about talent and craft. Send your CV and a
                short note about what you&apos;d bring to the team.
              </p>
              <a
                href="mailto:code.baxh@gmail.com?subject=Careers%20at%20Code%20Baxh"
                className="mt-6 inline-flex rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-[#0d0d0d] transition-[transform,box-shadow] duration-300 hover:-translate-y-px hover:shadow-[0_8px_24px_color-mix(in_srgb,var(--accent)_30%,transparent)]"
              >
                Apply now
              </a>
            </Reveal>

            <Reveal delay={200}>
              <ContactCard />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

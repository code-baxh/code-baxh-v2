import { Reveal, SectionHeading } from "../shared";
import { ServiceCard } from "./ServiceCard";
import { BUILD_SERVICES, RECRUITMENT_SERVICES } from "./constants";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="snap-section theme-paper border-t border-border bg-surface py-20 md:py-28"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="What we do"
            title="Recruit talent. Build products."
            description="Two sides of the same team — placing exceptional tech talent for clients, and shipping websites and software when projects need hands on deck."
          />
        </Reveal>

        <Reveal delay={100} className="mt-14">
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-text-muted">
            Talent &amp; recruitment
          </h3>
          <div className="mt-5 grid gap-5 md:grid-cols-3 md:gap-6">
            {RECRUITMENT_SERVICES.map((service, index) => (
              <Reveal
                key={service.title}
                delay={(index * 100) as 0 | 100 | 200}
              >
                <ServiceCard {...service} />
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal delay={200} className="mt-12 md:mt-14">
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-text-muted">
            Design &amp; development
          </h3>
          <div className="mt-5 grid gap-5 md:grid-cols-3 md:gap-6">
            {BUILD_SERVICES.map((service, index) => (
              <Reveal
                key={service.title}
                delay={(index * 100) as 0 | 100 | 200}
              >
                <ServiceCard {...service} />
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

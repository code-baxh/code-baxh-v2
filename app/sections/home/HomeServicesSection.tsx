import { Reveal, SectionHeading, SectionLink, SectionShell } from "../shared";
import { ServiceCard } from "../services/ServiceCard";
import {
  BUILD_SERVICES,
  RECRUITMENT_SERVICES,
} from "../services/constants";

export function HomeServicesSection() {
  const featuredRecruit = RECRUITMENT_SERVICES.slice(0, 2);
  const featuredBuild = BUILD_SERVICES.slice(0, 2);

  return (
    <SectionShell id="services" index="02" label="Services" theme="paper">
      <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <Reveal className="max-w-3xl">
          <SectionHeading
            size="large"
            eyebrow="What we do"
            title="Recruit talent. Build products."
            description="A preview of how we support hiring teams and delivery teams — from specialist search to shipped software."
          />
        </Reveal>
        <Reveal delay={100}>
          <SectionLink href="/services" label="View all services" />
        </Reveal>
      </div>

      <Reveal delay={100} className="mt-14">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-text-muted">
          Talent &amp; recruitment
        </p>
        <div className="mt-6 grid gap-5 md:grid-cols-2 md:gap-6">
          {featuredRecruit.map((service, index) => (
            <Reveal key={service.title} delay={(index * 100) as 0 | 100}>
              <ServiceCard {...service} />
            </Reveal>
          ))}
        </div>
      </Reveal>

      <Reveal delay={200} className="mt-12 md:mt-16">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-text-muted">
          Design &amp; development
        </p>
        <div className="mt-6 grid gap-5 md:grid-cols-2 md:gap-6">
          {featuredBuild.map((service, index) => (
            <Reveal key={service.title} delay={(index * 100) as 0 | 100}>
              <ServiceCard {...service} />
            </Reveal>
          ))}
        </div>
      </Reveal>
    </SectionShell>
  );
}

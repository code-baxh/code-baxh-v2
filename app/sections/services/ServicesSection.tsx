import { SectionHeading } from "../shared";
import { ServiceCard } from "./ServiceCard";
import { SERVICES } from "./constants";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="theme-paper border-t border-border bg-surface py-20 md:py-28"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What we do"
          title="Design, develop, and deliver."
          description="Obsidian for bold moments. Paper for clarity. Same brand, two contexts — built to feel cohesive whether we're presenting or proposing."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3 md:gap-6">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

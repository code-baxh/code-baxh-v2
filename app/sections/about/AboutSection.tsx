import { SectionHeading } from "../shared";
import { ContactCard } from "./ContactCard";

export function AboutSection() {
  return (
    <section
      id="about"
      className="theme-paper border-t border-border bg-surface py-20 md:py-28"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="grid gap-14 md:grid-cols-2 md:items-start md:gap-16">
          <SectionHeading
            eyebrow="About us"
            title="A studio built on collaboration."
            description="We're developers first — designers, architects, and builders who prefer shipping over slides. We work closely with founders, product teams, and agencies who need reliable technical partners."
          />
          <ContactCard />
        </div>
      </div>
    </section>
  );
}

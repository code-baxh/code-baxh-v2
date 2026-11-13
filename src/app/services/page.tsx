import { PageHero } from "@/components/layout/page-hero";
import { ServiceCard } from "@/components/cards/service-card";
import { CtaBand } from "@/components/sections/cta-band";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { aiServices, coreServices } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Software & AI Development Services",
  description:
    "Software and AI services from CodeBaxh: SaaS, MVPs, web and mobile apps, backends, cloud, Stripe billing, RAG assistants, chatbots, AI agents and LLM evaluation.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Services", path: "/services" }]}
        eyebrow="Services"
        title="Software and AI services, delivered end to end."
        lead="One team covers product, design, engineering, AI, QA and DevOps. Engage us for a complete build or for the part you need."
        image="webDev"
      >
        <ButtonLink href="/start-a-project">Start a project</ButtonLink>
        <ButtonLink href="/ai" variant="secondary">
          Explore AI services
        </ButtonLink>
      </PageHero>

      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="AI services"
            title="AI built into real products."
            lead="From first strategy session to evaluated, monitored features in production."
          />
        </Reveal>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {aiServices.map((s, i) => (
            <li key={s.slug}>
              <Reveal delay={(i % 4) * 0.05} className="h-full">
                <ServiceCard service={s} />
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="border-t border-line">
        <Reveal>
          <SectionHeading
            eyebrow="Product engineering"
            title="Web, mobile, SaaS and the platform beneath them."
            lead="Modern, typed stacks and architecture that holds up as your product and team grow."
          />
        </Reveal>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {coreServices.map((s, i) => (
            <li key={s.slug}>
              <Reveal delay={(i % 4) * 0.05} className="h-full">
                <ServiceCard service={s} />
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand title="Not sure which service fits?" body="Describe the outcome you need and we will recommend the right scope and team." />
    </>
  );
}

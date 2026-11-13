import { Check } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { ToolLogos } from "@/components/sections/tool-logos";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";
import { processSteps } from "@/content/process";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Our Software Delivery Process",
  description:
    "How CodeBaxh delivers software and AI products: discovery, design and architecture, build in short loops with weekly demos, then launch, monitoring and support.",
  path: "/process",
});

export default function ProcessPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Process", path: "/process" }]}
        eyebrow="Process"
        title="A delivery process you can see and plan around."
        lead="The same seven stages on every engagement, from requirements to post-launch support, with working software shown every week."
        image="ide"
      >
        <ButtonLink href="/engagement" variant="secondary">
          Engagement & pricing
        </ButtonLink>
      </PageHero>

      <Section>
        <ol className="space-y-4">
          {processSteps.map((step, i) => (
            <li key={step.title}>
              <Reveal>
                <div className="card grid gap-8 p-6 sm:p-10 lg:grid-cols-[auto_1.2fr_1fr]">
                  <span className="font-display text-6xl font-semibold text-accent-text">0{i + 1}</span>
                  <div>
                    <h2 className="text-3xl font-semibold">{step.title}</h2>
                    <p className="mt-4 max-w-2xl text-lg text-muted">{step.body}</p>
                  </div>
                  <div>
                    <p className="eyebrow">You receive</p>
                    <ul className="mt-4 space-y-3">
                      {step.outputs.map((o) => (
                        <li key={o} className="flex gap-3">
                          <Check aria-hidden className="mt-1 size-5 shrink-0 text-accent-text" strokeWidth={2.5} />
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="border-t border-line">
        <Reveal>
          <SectionHeading
            eyebrow="Tools"
            title="The tools behind the process."
            lead="Engineering, cloud and infrastructure, QA and testing, planning and communication."
          />
        </Reveal>
        <Reveal className="mt-12">
          <ToolLogos />
        </Reveal>
      </Section>

      <CtaBand title="Ready to start with discovery?" />
    </>
  );
}

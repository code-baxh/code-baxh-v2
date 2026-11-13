import { Check } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { FaqList } from "@/components/sections/faq-list";
import { GlowCard } from "@/components/ui/glow-card";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";
import { engagementFaqs, engagementModels } from "@/content/engagement";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Engagement Models & Pricing",
  description:
    "Three ways to work with CodeBaxh: a fixed-scope project, a monthly retainer or staff augmentation. Transparent estimates, milestone payments and clear contracts.",
  path: "/engagement",
});

export default function EngagementPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Engagement & Pricing", path: "/engagement" }]}
        eyebrow="Engagement & pricing"
        title="Three ways to work with us, each with clear terms."
        lead="Choose the model that fits your stage. Every engagement starts with a discovery conversation and a written estimate."
        image="keyboardCode"
      />

      <Section>
        <ul className="grid gap-4 lg:grid-cols-3">
          {engagementModels.map((m, i) => (
            <li key={m.name}>
              <Reveal delay={i * 0.06} className="h-full">
                <GlowCard className="flex h-full flex-col p-6 sm:p-8">
                  <p className="eyebrow">Best for</p>
                  <p className="mt-2 text-sm text-muted">{m.bestFor}</p>
                  <h2 className="mt-6 text-3xl font-semibold">{m.name}</h2>
                  <p className="mt-5 inline-flex self-start rounded-full border border-accent/50 bg-accent/10 px-3.5 py-1.5 text-sm font-medium text-accent-text">
                    {m.pricing}
                  </p>
                  <p className="mt-6 text-muted">{m.description}</p>
                  <ul className="mt-6 space-y-3">
                    {m.includes.map((x) => (
                      <li key={x} className="flex gap-3">
                        <Check aria-hidden className="mt-1 size-5 shrink-0 text-accent-text" strokeWidth={2.5} />
                        {x}
                      </li>
                    ))}
                  </ul>
                </GlowCard>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="border-t border-line">
        <div className="mx-auto grid max-w-4xl gap-10">
          <SectionHeading eyebrow="FAQ" title="Pricing and contract questions." />
          <FaqList faqs={engagementFaqs} />
        </div>
      </Section>

      <CtaBand title="Get a written estimate for your project." label="Start a project" />
    </>
  );
}

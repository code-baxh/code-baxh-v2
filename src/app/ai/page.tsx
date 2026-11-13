import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { ButtonLink } from "@/components/ui/button";
import { GlowCard } from "@/components/ui/glow-card";
import { Photo } from "@/components/ui/photo";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";
import { ServiceIcon } from "@/components/ui/service-icon";
import { aiEngagement, aiPrinciples, aiUseCases } from "@/content/ai";
import { aiServices } from "@/content/services";
import { serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "AI Development Services: RAG, Agents & Chatbots",
  description:
    "AI development from CodeBaxh: strategy, integration, RAG assistants, chatbots, agents and workflow automation, voice AI, LLM evaluation, guardrails and cost control.",
  path: "/ai",
});

export default function AiPage() {
  return (
    <>
      <JsonLd data={aiServices.map(serviceSchema)} />
      <PageHero
        crumbs={[{ name: "AI Services", path: "/ai" }]}
        eyebrow="AI services"
        title="AI that works in production, not only in the demo."
        lead="We design, build and run AI features that are grounded in your data, measured against real cases and affordable to operate."
        image="aiAgents"
      >
        <ButtonLink href="/start-a-project">Request an AI readiness review</ButtonLink>
      </PageHero>

      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="What we do"
            title="Eight AI services, one accountable team."
            lead="Take one service or combine them. Each is delivered by AI engineers working alongside our product, design and platform teams."
          />
        </Reveal>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {aiServices.map((s, i) => (
            <li key={s.slug}>
              <Reveal delay={(i % 4) * 0.05} className="h-full">
                <GlowCard className="flex h-full flex-col p-6">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl border border-line bg-surface-2">
                    <ServiceIcon name={s.icon} className="size-5 text-accent-text" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold">
                    <Link href={`/services/${s.slug}`} className="stretched">
                      {s.name}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm text-muted">{s.summary}</p>
                  <p className="mt-auto flex items-center gap-1 pt-5 text-sm font-medium text-accent-text">
                    Details <ArrowRight aria-hidden className="size-4" />
                  </p>
                </GlowCard>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="border-t border-line">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="How we build"
              title="Four principles behind every AI system we ship."
            />
            <dl className="mt-10 grid gap-6 sm:grid-cols-2">
              {aiPrinciples.map((p) => (
                <div key={p.title} className="border-l-2 border-accent pl-4">
                  <dt className="font-display text-lg font-semibold">{p.title}</dt>
                  <dd className="mt-1 text-sm text-muted">{p.body}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={0.06} className="h-full">
            <Photo name="monitorsCode" className="h-full min-h-72" sizes="(min-width: 1024px) 45vw, 100vw" />
          </Reveal>
        </div>
      </Section>

      <Section className="border-t border-line">
        <Reveal>
          <SectionHeading
            eyebrow="Engagement"
            title="How an AI engagement works."
            lead="Evidence first. You see results on your own data before committing to a full build."
          />
        </Reveal>
        <ol className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {aiEngagement.map((step, i) => (
            <li key={step.title}>
              <Reveal delay={i * 0.05} className="h-full">
                <div className="card h-full p-6">
                  <span className="inline-flex size-11 items-center justify-center rounded-full border border-accent-text font-mono text-sm text-accent-text">
                    0{i + 1}
                  </span>
                  <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted">{step.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="border-t border-line">
        <Reveal>
          <SectionHeading
            eyebrow="Use cases"
            title="Where AI pays off, by industry."
            lead="Examples of work AI handles well today. We will tell you honestly if yours is not one of them."
          />
        </Reveal>
        <ul className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {aiUseCases.map((u, i) => (
            <li key={u.industry}>
              <Reveal delay={(i % 3) * 0.05} className="h-full">
                <div className="card h-full p-6">
                  <h3 className="text-xl font-semibold">{u.industry}</h3>
                  <ul className="mt-4 space-y-2.5 text-sm text-muted">
                    {u.cases.map((c) => (
                      <li key={c} className="flex gap-2.5">
                        <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand
        title="Find out if your product is ready for AI."
        body="Tell us about your data and the task you have in mind. We will come back with a clear view of fit, effort and risk."
        label="Request an AI readiness review"
      />
    </>
  );
}

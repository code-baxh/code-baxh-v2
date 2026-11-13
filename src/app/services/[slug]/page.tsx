import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { CaseStudyCard } from "@/components/cards/case-study-card";
import { PostCard } from "@/components/blog/post-card";
import { CtaBand } from "@/components/sections/cta-band";
import { FaqList } from "@/components/sections/faq-list";
import { JsonLd } from "@/components/seo/json-ld";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";
import { caseStudies } from "@/content/case-studies";
import { serviceImage } from "@/content/images";
import { processSteps } from "@/content/process";
import { services } from "@/content/services";
import { coversFor, postsForService, toMeta } from "@/lib/blog";
import { serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  return pageMetadata({ title: s.metaTitle, description: s.metaDescription, path: `/services/${s.slug}` });
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();
  const related = caseStudies.filter((c) => s.relatedCaseStudies.includes(c.slug));
  // Hub-to-spoke links: the guides that feed this service (set by `service:` in each post's frontmatter).
  const guides = postsForService(s.slug);
  const guideCovers = coversFor(guides);
  const parent = s.category === "ai" ? { name: "AI Services", path: "/ai" } : { name: "Services", path: "/services" };

  return (
    <>
      <JsonLd data={serviceSchema(s)} />
      <PageHero
        crumbs={[parent, { name: s.name, path: `/services/${s.slug}` }]}
        eyebrow={s.category === "ai" ? "AI service" : "Service"}
        title={s.headline}
        lead={s.summary}
        image={serviceImage[s.slug]}
      >
        <ButtonLink href="/start-a-project">Start a project</ButtonLink>
      </PageHero>

      <Section>
        <div className="mx-auto grid max-w-4xl gap-10">
          <Reveal>
            <SectionHeading eyebrow="The problem" title="Where teams get stuck." />
          </Reveal>
          <Reveal delay={0.06} className="mx-auto max-w-3xl space-y-5 text-center text-lg text-muted">
            {s.problem.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
        </div>
      </Section>

      <Section className="border-t border-line">
        <Reveal>
          <SectionHeading eyebrow="Our approach" title="What makes this work." />
        </Reveal>
        <ol className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {s.approach.map((a, i) => (
            <li key={a.title}>
              <Reveal delay={i * 0.05} className="h-full">
                <div className="card h-full p-6">
                  <span className="font-mono text-sm text-accent-text">0{i + 1}</span>
                  <h3 className="mt-4 text-xl font-semibold">{a.title}</h3>
                  <p className="mt-2 text-sm text-muted">{a.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="border-t border-line">
        <Reveal>
          <SectionHeading
            eyebrow="Delivery process"
            title="How we deliver it, step by step."
            lead="Every engagement follows the same seven stages, from requirements to post-launch support."
          />
        </Reveal>
        <ol className="mx-auto mt-12 max-w-4xl space-y-4">
          {processSteps.map((step, i) => (
            <li key={step.title} className="relative flex items-start gap-5 text-left sm:gap-7">
              {i < processSteps.length - 1 ? (
                <span aria-hidden className="absolute -bottom-4 left-[1.35rem] top-11 w-px bg-line-strong" />
              ) : null}
              <span className="relative inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-accent-text bg-bg font-mono text-sm text-accent-text">
                0{i + 1}
              </span>
              <div className="card flex-1 p-5 sm:p-6">
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-muted">{step.body}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {step.outputs.map((o) => (
                    <li key={o} className="rounded-full border border-line bg-surface-2 px-3 py-1 text-xs text-muted">
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="border-t border-line">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading eyebrow="Deliverables" title="What you receive." />
            <ul className="mt-8 space-y-3">
              {s.deliverables.map((d) => (
                <li key={d} className="flex gap-3">
                  <Check aria-hidden className="mt-1 size-5 shrink-0 text-accent-text" strokeWidth={2.5} />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.06}>
            <SectionHeading eyebrow="Technology" title="What we build it with." />
            <ul className="mt-8 flex flex-wrap justify-center gap-2">
              {s.tech.map((t) => (
                <li key={t} className="rounded-full border border-line bg-surface px-4 py-2 font-mono text-sm">
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {related.length ? (
        <Section className="border-t border-line">
          <Reveal>
            <SectionHeading eyebrow="Related work" title="Where we have done this before." />
          </Reveal>
          <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {related.map((c) => (
              <li key={c.slug}>
                <CaseStudyCard study={c} />
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      {guides.length ? (
        <Section className="border-t border-line">
          <Reveal>
            <SectionHeading
              eyebrow="From the blog"
              title="Related guides."
              lead={`What we have written about ${s.name.toLowerCase()}: cost, timelines and the trade-offs behind each decision.`}
            />
          </Reveal>
          <ul className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {guides.map((p) => (
              <li key={p.slug}>
                <PostCard post={toMeta(p, guideCovers.get(p.slug))} />
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      <Section className="border-t border-line">
        <div className="mx-auto grid max-w-4xl gap-10">
          <SectionHeading eyebrow="FAQ" title={`${s.name}: common questions.`} />
          <FaqList faqs={s.faqs} />
        </div>
      </Section>

      <CtaBand title={`Discuss your ${s.name} project with us.`} />
    </>
  );
}

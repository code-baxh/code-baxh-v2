import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { CaseStudyCard } from "@/components/cards/case-study-card";
import { CtaBand } from "@/components/sections/cta-band";
import { FaqList } from "@/components/sections/faq-list";
import { Testimonials } from "@/components/sections/testimonials";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";
import { caseStudies } from "@/content/case-studies";
import { engagementModels, minimumProject } from "@/content/engagement";
import { marketBySlug, markets } from "@/content/markets";
import { featuredTestimonials } from "@/content/testimonials";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return markets.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: PageProps<"/markets/[slug]">) {
  const { slug } = await params;
  const m = marketBySlug(slug);
  if (!m) return {};
  return pageMetadata({ title: m.metaTitle, description: m.metaDescription, path: `/markets/${m.slug}` });
}

export default async function MarketPage({ params }: PageProps<"/markets/[slug]">) {
  const { slug } = await params;
  const m = marketBySlug(slug);
  if (!m) notFound();
  const work = m.caseStudies
    .map((s) => caseStudies.find((c) => c.slug === s))
    .filter((c): c is (typeof caseStudies)[number] => Boolean(c));

  return (
    <>
      <PageHero
        crumbs={[
          { name: "Markets", path: "/markets" },
          { name: m.name, path: `/markets/${m.slug}` },
        ]}
        eyebrow={m.eyebrow}
        title={m.headline}
        lead={m.lead}
        image="globalNetwork"
      >
        <ButtonLink href="/start-a-project">Start a project</ButtonLink>
      </PageHero>

      <Section>
        <Reveal>
          <SectionHeading eyebrow="Working together" title="How it works from where you are." />
        </Reveal>
        <ul className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {m.working.map((w, i) => (
            <li key={w.title}>
              <Reveal delay={i * 0.05} className="h-full">
                <div className="card h-full p-6">
                  <h3 className="text-xl font-semibold">{w.title}</h3>
                  <p className="mt-2 text-sm text-muted">{w.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="border-t border-line">
        <Reveal>
          <SectionHeading
            eyebrow="Built for your market"
            title="The rules and expectations we build for."
            lead="What products in this market are expected to handle, and how we deal with it in the build."
          />
        </Reveal>
        <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {m.compliance.map((c, i) => (
            <li key={c.title}>
              <Reveal delay={(i % 3) * 0.05} className="h-full">
                <div className="card h-full p-6">
                  <h3 className="flex items-start gap-2 text-lg font-semibold">
                    <Check aria-hidden className="mt-1 size-5 shrink-0 text-accent-text" strokeWidth={2.5} />
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{c.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
        <Reveal className="mt-14">
          <p className="text-center text-sm text-muted">Common integrations</p>
          <ul className="mt-4 flex flex-wrap justify-center gap-2">
            {m.integrations.map((t) => (
              <li key={t} className="rounded-full border border-line bg-surface px-4 py-2 text-sm">
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      <Section className="border-t border-line">
        <div className="mx-auto grid max-w-4xl gap-8 text-center">
          <Reveal>
            <SectionHeading
              eyebrow="Engagement"
              title={`Most projects start from ${minimumProject}.`}
              lead="Every project is scoped after a discovery call, with a written estimate and milestones before you commit."
            />
          </Reveal>
          <Reveal delay={0.06}>
            <ul className="flex flex-wrap justify-center gap-2">
              {engagementModels.map((e) => (
                <li key={e.name} className="rounded-full border border-line bg-surface px-4 py-2 text-sm">
                  {e.name}
                </li>
              ))}
            </ul>
            <ButtonLink href="/engagement" variant="ghost" className="mt-6">
              Engagement models and pricing <ArrowRight aria-hidden className="size-4" />
            </ButtonLink>
          </Reveal>
        </div>
      </Section>

      {work.length ? (
        <Section className="border-t border-line">
          <Reveal>
            <SectionHeading
              eyebrow="Relevant work"
              title="Products like the ones you need."
              lead="Case studies that match what companies in this market most often ask us to build."
            />
          </Reveal>
          <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {work.map((c) => (
              <li key={c.slug}>
                <CaseStudyCard study={c} />
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      <Section className="border-t border-line">
        <Testimonials items={featuredTestimonials} />
      </Section>

      <Section className="border-t border-line">
        <div className="mx-auto grid max-w-4xl gap-10">
          <SectionHeading eyebrow="FAQ" title={`Working with us from ${m.inName}: common questions.`} />
          <FaqList faqs={m.faqs} />
        </div>
      </Section>

      <CtaBand title="Tell us what you are building." />
    </>
  );
}

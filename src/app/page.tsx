import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";
import { ServiceIcon } from "@/components/ui/service-icon";
import { CaseStudyCard } from "@/components/cards/case-study-card";
import { PostCard } from "@/components/blog/post-card";
import { CtaBand } from "@/components/sections/cta-band";
import { FaqList } from "@/components/sections/faq-list";
import { Hero } from "@/components/hero/hero";
import { ToolLogos } from "@/components/sections/tool-logos";
import { Photo } from "@/components/ui/photo";
import { MarketsMap } from "@/components/art/markets-map";
import { aiServices, homeServices } from "@/content/services";
import type { ImageKey } from "@/content/images";
import { featuredCaseStudies } from "@/content/case-studies";
import { processSteps } from "@/content/process";
import { team } from "@/content/team";
import { homeFaqs } from "@/content/faqs";
import { site } from "@/config/site";
import { coversFor, getAllPosts, toMeta } from "@/lib/blog";
import { cn } from "@/lib/utils";

const trust = [
  { value: "Top Rated Plus", label: "Our founder's standing on Upwork" },
  { value: "6+ years", label: "Delivering production software" },
  { value: "End to end", label: "Product, design, engineering, AI, QA and DevOps in one team" },
  { value: "Worldwide", label: "Clients across Europe, the US, Canada and the UAE" },
];

export default function HomePage() {
  // Newest guides get a link from the homepage, so fresh posts are found and crawled quickly.
  const latest = getAllPosts().slice(0, 3);
  const latestCovers = coversFor(latest);
  return (
    <>
      <Hero />

      {/* Trust strip */}
      <section aria-label="Track record" className="pb-10">
        <dl className="mx-auto grid w-full max-w-[92rem] grid-cols-2 px-5 sm:px-8 lg:px-14 lg:grid-cols-4">
          {trust.map((t, i) => (
            <div
              key={t.value}
              className={cn(
                "flex flex-col-reverse items-center gap-1 px-4 py-7 text-center",
                i > 0 && "lg:border-l lg:border-line",
                i % 2 === 1 && "max-lg:border-l max-lg:border-line",
              )}
            >
              <dt className="text-sm text-muted">{t.label}</dt>
              <dd className="font-display text-xl font-semibold sm:text-2xl">{t.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* AI highlight */}
      <Section tone="ink">
        <Reveal>
          <SectionHeading
            eyebrow="AI services"
            title="AI that earns its place in your product."
            lead="We treat AI as engineering. Every feature is grounded in your data, tested against real cases and built to a cost you can live with."
          />
        </Reveal>
        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="h-full">
            <Photo name="agenticAi" className="h-full min-h-72" sizes="(min-width: 1024px) 42vw, 100vw" />
          </Reveal>
          <Reveal delay={0.06}>
            <ul className="grid gap-x-10 sm:grid-cols-2">
              {aiServices.map((s) => (
                <li key={s.slug} className="group relative border-t border-line py-5 text-left">
                  <h3 className="flex items-center gap-3 text-lg font-medium">
                    <ServiceIcon name={s.icon} className="size-5 shrink-0 text-accent-text" />
                    <Link href={`/services/${s.slug}`} className="after:absolute after:inset-0 group-hover:text-accent-text">
                      {s.name}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm text-muted">{s.summary}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <div className="mt-12 flex justify-center">
          <ButtonLink href="/ai" variant="secondary">
            Explore AI services <ArrowRight aria-hidden className="size-4" />
          </ButtonLink>
        </div>
      </Section>

      {/* Core services */}
      <Section tone="paper">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="From first requirement to post-launch support."
            lead="Software, AI, quality assurance and support under one roof, delivered by specialists in each discipline."
          />
        </Reveal>
        <ul className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {homeServices.map((s) => (
            <li key={s.title}>
              <Reveal className="h-full">
                <article className="card card-glow group flex h-full items-center gap-4 p-3 text-left">
                  <Photo
                    name={s.image as ImageKey}
                    decorative
                    className="size-24 shrink-0 rounded-[0.9rem] sm:size-28"
                    sizes="112px"
                  />
                  <div className="min-w-0 flex-1 py-1">
                    <h3 className="flex items-start gap-2 text-base font-semibold text-wrap sm:text-lg">
                      <ServiceIcon name={s.icon} className="mt-1 size-[1.1rem] shrink-0 text-accent-text" />
                      <Link href={s.href} className="stretched">
                        {s.title}
                      </Link>
                    </h3>
                    <p className="mt-1.5 line-clamp-2 text-sm text-muted">{s.summary}</p>
                  </div>
                  <ArrowRight
                    aria-hidden
                    className="mr-2 size-5 shrink-0 text-muted transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent-text"
                  />
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex justify-center">
          <ButtonLink href="/services" variant="secondary">
            View all services <ArrowRight aria-hidden className="size-4" />
          </ButtonLink>
        </div>
      </Section>

      {/* Selected work */}
      <Section tone="ink">
        <div className="flex flex-col items-center gap-4">
          <Reveal>
            <SectionHeading eyebrow="Selected work" title="Software in production, with real users." />
          </Reveal>
          <ButtonLink href="/work" variant="ghost">
            All case studies <ArrowRight aria-hidden className="size-4" />
          </ButtonLink>
        </div>
        <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featuredCaseStudies.map((c, i) => (
            <li key={c.slug}>
              <Reveal delay={i * 0.06} className="h-full">
                <CaseStudyCard study={c} />
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      {/* Process */}
      <Section tone="paper">
        <Reveal>
          <SectionHeading
            eyebrow="Process"
            title="A clear path from first requirement to live product."
            lead="Seven stages on every engagement, with working software shown every week."
          />
        </Reveal>
        <ol className="mt-14 flex flex-wrap justify-center gap-x-6 gap-y-12">
          {processSteps.map((step, i) => (
            <li key={step.title} className="w-full text-center sm:w-[calc(50%-1.5rem)] lg:w-[calc(25%-1.5rem)]">
              <Reveal delay={i * 0.06}>
                <span className="mx-auto inline-flex size-12 items-center justify-center rounded-full border border-accent-text font-mono text-sm text-accent-text">
                  0{i + 1}
                </span>
                <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted">{step.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
        <div className="mt-12 flex justify-center">
          <ButtonLink href="/process" variant="secondary">
            How we work in detail
          </ButtonLink>
        </div>
      </Section>

      {/* Tools */}
      <Section tone="ink">
        <Reveal>
          <SectionHeading
            eyebrow="Tools"
            title="The tools we build, deploy, test and communicate with."
            lead="A proven engineering stack, cloud and infrastructure tooling, a full testing toolkit, and the planning and communication tools your team already uses."
          />
        </Reveal>
        <Reveal className="mt-12">
          <ToolLogos />
        </Reveal>
      </Section>

      {/* Team */}
      <Section tone="paper">
        <Reveal>
          <SectionHeading
            eyebrow="Team"
            title="Founder-led, with a dedicated team in every department."
            lead="Our founder leads every engagement. Specialists in each department do the work from our engineering base in Islamabad, delivering to clients across the world."
          />
          <ul className="mt-8 flex flex-wrap justify-center gap-2">
            {site.departments.map((d) => (
              <li key={d} className="rounded-full border border-line bg-surface px-4 py-2 text-sm text-fg">
                {d}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal>
          <div className="dark art-panel mt-10 px-4 py-8 text-fg sm:px-8">
            <MarketsMap className="relative mx-auto w-full max-w-5xl" />
            <p className="relative mt-6 text-center text-sm text-muted">
              Clients across Europe, the United States, Canada and the UAE, and delivery worldwide. Product delivery team in Stockholm, engineering team in Islamabad.
            </p>
          </div>
        </Reveal>
        <ul className={cn("mt-4 grid gap-4", team.length > 1 ? "md:grid-cols-2" : "mx-auto max-w-2xl")}>
          {team.map((m, i) => (
            <li key={m.slug}>
              <Reveal delay={i * 0.06} className="h-full">
                <article className="card h-full p-6 text-center sm:p-8">
                  <div>
                    <h3 className="text-2xl font-semibold">
                      <Link href={`/team/${m.slug}`} className="hover:text-accent-text">
                        {m.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-accent-text">{m.role}</p>
                    <p className="mt-1 font-mono text-xs uppercase tracking-[0.12em] text-muted">{m.location}</p>
                    <p className="mt-4 text-sm text-muted">{m.bio}</p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      {/* Latest guides */}
      <Section tone="ink">
        <div className="flex flex-col items-center gap-4">
          <Reveal>
            <SectionHeading
              eyebrow="From the blog"
              title="Practical guides from the team."
              lead="Cost, timelines and the trade-offs behind building software and AI products."
            />
          </Reveal>
          <ButtonLink href="/blog" variant="ghost">
            All articles <ArrowRight aria-hidden className="size-4" />
          </ButtonLink>
        </div>
        <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {latest.map((p, i) => (
            <li key={p.slug}>
              <Reveal delay={i * 0.06} className="h-full">
                <PostCard post={toMeta(p, latestCovers.get(p.slug))} />
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      {/* FAQ */}
      <Section tone="paper">
        <div className="mx-auto grid max-w-4xl gap-10">
          <Reveal>
            <SectionHeading eyebrow="FAQ" title="Common questions." />
          </Reveal>
          <FaqList faqs={homeFaqs} />
        </div>
      </Section>

      <CtaBand />
    </>
  );
}

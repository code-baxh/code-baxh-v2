import type { Metadata } from "next";
import { pageOpenGraph } from "../../lib/metadata";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check } from "lucide-react";
import { CtaSection } from "../../sections/cta";
import { FooterSection } from "../../sections/footer";
import { HeaderSection } from "../../sections/header";
import { PageHero, Reveal, SectionHeading, SectionLink } from "../../sections/shared";
import {
  ProcessSteps,
  FaqSection,
  Breadcrumbs,
  CaseStudyCard,
} from "../../sections/marketing";
import { JsonLd } from "../../lib/JsonLd";
import {
  breadcrumbSchema,
  faqSchema,
  graph,
  serviceSchema,
} from "../../lib/schema";
import { SERVICES, getService } from "../../lib/services";
import { getCaseStudy } from "../../lib/work";
import { BLOG_POSTS } from "../../lib/blog";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: { absolute: service.metaTitle },
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: pageOpenGraph({
      title: service.metaTitle,
      description: service.metaDescription,
      url: `/services/${service.slug}`,
    }),
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const caseStudy = service.caseStudySlug
    ? getCaseStudy(service.caseStudySlug)
    : undefined;

  // Hub→spoke links: every post already links UP to its service page, but
  // service pages linked DOWN to zero of their cluster posts (audit finding).
  const relatedGuides = BLOG_POSTS.filter(
    (p) => p.serviceSlug === service.slug,
  )
    .sort((a, b) => +new Date(b.datePublished) - +new Date(a.datePublished))
    .slice(0, 3);

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.navLabel, path: `/services/${service.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={graph(
          serviceSchema({
            name: service.title,
            description: service.metaDescription,
            slug: service.slug,
            serviceType: service.keyword,
          }),
          breadcrumbSchema(crumbs),
          faqSchema(service.faqs),
        )}
      />
      <HeaderSection />
      <main>
        <PageHero
          eyebrow={service.eyebrow}
          title={service.title}
          description={service.heroSubhead}
          primaryHref="/contact"
          primaryLabel="Book a free discovery call"
          secondaryHref="/work"
          secondaryLabel="See our work"
        />

        {/* Overview + challenge */}
        <section className="theme-paper border-t border-border bg-surface py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Breadcrumbs items={crumbs} />
            <div className="mt-8 grid gap-10 lg:grid-cols-3 lg:gap-14">
              <div className="lg:col-span-1">
                <Reveal className="lg:sticky lg:top-28">
                  <p className="heading-accent text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
                    The challenge
                  </p>
                  <p className="mt-5 text-lg leading-relaxed text-text-primary md:text-xl">
                    {service.problem}
                  </p>
                </Reveal>
              </div>

              {service.overview && service.overview.length > 0 && (
                <div className="lg:col-span-2">
                  <Reveal>
                    {service.overview.map((para, i) => (
                      <p
                        key={i}
                        className={`text-lg leading-relaxed text-text-secondary md:text-xl ${
                          i > 0 ? "mt-5" : ""
                        }`}
                      >
                        {para}
                      </p>
                    ))}
                  </Reveal>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Sound familiar? — pain points */}
        {service.painPoints && service.painPoints.length > 0 && (
          <section className="theme-obsidian border-t border-border bg-surface py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-5 sm:px-8">
              <SectionHeading
                eyebrow="Sound familiar?"
                title="If any of this rings true, you're in the right place."
              />
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {service.painPoints.map((pain, i) => (
                  <Reveal
                    key={pain}
                    delay={((i % 2) * 100) as 0 | 100}
                    className="rounded-2xl border border-border border-l-2 border-l-accent bg-surface-elevated p-5"
                  >
                    <p className="text-base leading-relaxed text-text-primary md:text-lg">
                      {pain}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* How we solve it — problem → solution */}
        {service.solutions && service.solutions.length > 0 && (
          <section className="theme-paper border-t border-border bg-surface py-20 md:py-28">
            <div className="mx-auto max-w-5xl px-5 sm:px-8">
              <SectionHeading
                eyebrow="How we solve it"
                title="Your problem, and exactly how we remove it."
              />
              <div className="mt-10 space-y-4">
                {service.solutions.map((pair) => (
                  <Reveal
                    key={pair.problem}
                    className="grid gap-4 rounded-2xl border border-border bg-surface-elevated p-6 md:grid-cols-2 md:gap-8 md:p-7"
                  >
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-text-muted">
                        The problem
                      </p>
                      <p className="mt-2 text-base font-medium leading-relaxed text-text-primary">
                        {pair.problem}
                      </p>
                    </div>
                    <div className="md:border-l md:border-border md:pl-8">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                        How we solve it
                      </p>
                      <p className="mt-2 text-base leading-relaxed text-text-secondary">
                        {pair.solution}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Scope / what we deliver */}
        <section className="theme-obsidian border-t border-border bg-surface py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <SectionHeading
              eyebrow="What we deliver"
              title="Scope of work"
            />
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {service.deliverables.map((item, i) => (
                <Reveal
                  key={item}
                  delay={((i % 2) * 100) as 0 | 100}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-surface-elevated p-5"
                >
                  <Check className="mt-0.5 size-5 shrink-0 text-accent" strokeWidth={2.25} aria-hidden />
                  <span className="text-sm leading-relaxed text-text-secondary md:text-base">
                    {item}
                  </span>
                </Reveal>
              ))}
            </ul>

            <div className="mt-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
                Tech stack for this service
              </p>
              <ul className="mt-4 flex flex-wrap gap-2.5">
                {service.techStack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-border px-3.5 py-1.5 text-sm text-text-primary"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Differentiators */}
        <section className="theme-paper border-t border-border bg-surface py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <SectionHeading
              eyebrow="Why CodeBaxh"
              title="What sets this work apart."
            />
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {service.differentiators.map((d, i) => (
                <Reveal
                  key={d.title}
                  delay={(i * 100) as 0 | 100 | 200}
                  className="kinetic-card rounded-2xl border border-border bg-surface-elevated p-7"
                >
                  <h3 className="text-lg font-semibold text-text-primary">
                    {d.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary md:text-base">
                    {d.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {service.processSteps && service.processSteps.length > 0 ? (
          <ProcessSteps
            theme="obsidian"
            steps={service.processSteps}
            eyebrow="How we work"
            title={`How a ${service.navLabel} project runs`}
            description="A calm, visible rhythm from the first call to launch — short loops, weekly demos, and clear updates throughout."
          />
        ) : (
          <ProcessSteps theme="obsidian" />
        )}

        {/* Related case study */}
        {caseStudy && (
          <section className="theme-paper border-t border-border bg-surface py-20 md:py-28">
            <div className="mx-auto max-w-6xl px-5 sm:px-8">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                <SectionHeading
                  eyebrow="Proof"
                  title="Relevant work."
                  description="A real project that shows this service in production."
                />
                <SectionLink href="/work" label="All case studies" />
              </div>
              <div className="mt-10 grid gap-5 md:max-w-xl">
                <CaseStudyCard study={caseStudy} />
              </div>
            </div>
          </section>
        )}

        {/* Engagement anchor */}
        <section className="theme-obsidian border-t border-border bg-surface py-16">
          <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
            <p className="text-base text-text-secondary">
              Fixed-scope, retainer, or staff-augmentation engagements available.{" "}
              <Link href="/engagement" className="font-semibold text-accent hover:underline">
                See engagement models
              </Link>{" "}
              or{" "}
              <Link href="/contact" className="font-semibold text-accent hover:underline">
                book a discovery call
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Related guides — hub→spoke internal links into this service's cluster */}
        {relatedGuides.length > 0 && (
          <section className="theme-paper border-t border-border bg-surface py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-5 sm:px-8">
              <SectionHeading eyebrow="From the blog" title="Related guides" />
              <div className="mt-10 grid gap-4 md:grid-cols-3">
                {relatedGuides.map((post) => (
                  <Reveal key={post.slug} className="h-full">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="flex h-full flex-col rounded-2xl border border-border bg-surface-elevated p-6 transition-colors hover:border-accent/40"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-text-muted">
                        {post.category}
                      </p>
                      <h3 className="mt-3 text-base font-semibold leading-snug text-text-primary">
                        {post.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                        {post.excerpt}
                      </p>
                      <span className="mt-auto pt-4 text-xs text-text-muted">
                        {post.readingTime}
                      </span>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQPage schema already emitted in this page's @graph — don't double-emit */}
        <FaqSection
          faqs={service.faqs}
          title={`${service.navLabel} — FAQs`}
          emitSchema={false}
        />
      </main>
      <CtaSection />
      <FooterSection />
    </>
  );
}

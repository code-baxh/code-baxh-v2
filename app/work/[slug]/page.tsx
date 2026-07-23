import type { Metadata } from "next";
import { pageOpenGraph } from "../../lib/metadata";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { CtaSection } from "../../sections/cta";
import { FooterSection } from "../../sections/footer";
import { HeaderSection } from "../../sections/header";
import { PageHero, Reveal, SectionHeading } from "../../sections/shared";
import { Breadcrumbs } from "../../sections/marketing";
import { JsonLd } from "../../lib/JsonLd";
import { breadcrumbSchema, caseStudySchema, graph } from "../../lib/schema";
import { CASE_STUDIES, getCaseStudy } from "../../lib/work";
import { getService } from "../../lib/services";

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: { absolute: study.metaTitle },
    description: study.metaDescription,
    alternates: { canonical: `/work/${study.slug}` },
    openGraph: pageOpenGraph({
      type: "article",
      title: study.metaTitle,
      description: study.metaDescription,
      url: `/work/${study.slug}`,
    }),
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const service = study.serviceSlug ? getService(study.serviceSlug) : undefined;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: study.client, path: `/work/${study.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={graph(
          caseStudySchema({
            title: study.title,
            description: study.metaDescription,
            slug: study.slug,
          }),
          breadcrumbSchema(crumbs),
        )}
      />
      <HeaderSection />
      <main>
        <PageHero
          eyebrow={study.category}
          title={study.title}
          description={study.summary}
          primaryHref="/contact"
          primaryLabel="Start a project like this"
          secondaryHref="/work"
          secondaryLabel="All case studies"
        />

        <section className="theme-paper border-t border-border bg-surface py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Breadcrumbs items={crumbs} />

            <div className="mt-8 grid gap-10 lg:grid-cols-3 lg:gap-14">
              {/* Main narrative */}
              <article className="space-y-12 lg:col-span-2">
                {study.overview && study.overview.length > 0 && (
                  <Reveal>
                    {study.overview.map((para, i) => (
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
                )}

                <Reveal>
                  <h2 className="text-2xl font-semibold tracking-tight text-text-primary">
                    The problem
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-text-secondary">
                    {study.problem}
                  </p>
                </Reveal>

                <Reveal>
                  <h2 className="text-2xl font-semibold tracking-tight text-text-primary">
                    Our approach
                  </h2>
                  <ul className="mt-4 space-y-3">
                    {study.approach.map((step) => (
                      <li
                        key={step}
                        className="flex items-start gap-3 text-lg leading-relaxed text-text-secondary"
                      >
                        <ArrowRight className="mt-1.5 size-4 shrink-0 text-accent" strokeWidth={2.25} aria-hidden />
                        {step}
                      </li>
                    ))}
                  </ul>
                </Reveal>

                <Reveal>
                  <h2 className="text-2xl font-semibold tracking-tight text-text-primary">
                    The solution
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-text-secondary">
                    {study.solution}
                  </p>
                </Reveal>

                {study.highlights && study.highlights.length > 0 && (
                  <Reveal>
                    <h2 className="text-2xl font-semibold tracking-tight text-text-primary">
                      What we built
                    </h2>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      {study.highlights.map((h) => (
                        <div
                          key={h.title}
                          className="kinetic-card rounded-2xl border border-border bg-surface-elevated p-5"
                        >
                          <div className="flex items-center gap-2.5">
                            <Check className="size-4 shrink-0 text-accent" strokeWidth={2.5} aria-hidden />
                            <h3 className="text-base font-semibold text-text-primary">
                              {h.title}
                            </h3>
                          </div>
                          <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                            {h.body}
                          </p>
                        </div>
                      ))}
                    </div>
                  </Reveal>
                )}
              </article>

              {/* Sticky project-details sidebar */}
              <aside className="lg:col-span-1">
                <div className="space-y-5 lg:sticky lg:top-28">
                  <Reveal className="rounded-2xl border border-border bg-surface-elevated p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
                      Project
                    </p>
                    <p className="mt-2 text-lg font-semibold text-text-primary">
                      {study.client}
                    </p>
                    <dl className="mt-5 space-y-4 border-t border-border pt-5 text-sm">
                      <div>
                        <dt className="text-text-muted">Category</dt>
                        <dd className="mt-1 font-medium text-text-primary">
                          {study.category}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-text-muted">Tech stack</dt>
                        <dd className="mt-2 flex flex-wrap gap-2">
                          {study.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-border px-3 py-1 text-xs text-text-primary"
                            >
                              {tech}
                            </span>
                          ))}
                        </dd>
                      </div>
                    </dl>
                  </Reveal>

                  {study.clients && study.clients.length > 0 && (
                    <Reveal className="rounded-2xl border border-border bg-surface-elevated p-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
                        Enterprise clients
                      </p>
                      <p className="mt-3 text-base font-semibold text-text-primary">
                        {study.clients.join(" · ")}
                      </p>
                    </Reveal>
                  )}

                  {service && (
                    <Reveal>
                      <Link
                        href={`/services/${service.slug}`}
                        className="group flex items-center justify-between gap-3 rounded-2xl border border-border bg-surface-elevated p-6 transition-colors hover:border-accent/40"
                      >
                        <span className="text-sm">
                          <span className="block text-text-muted">Related service</span>
                          <span className="mt-1 block font-semibold text-text-primary">
                            {service.navLabel}
                          </span>
                        </span>
                        <ArrowUpRight
                          className="size-5 shrink-0 text-text-muted transition-[transform,color] duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                          strokeWidth={2}
                          aria-hidden
                        />
                      </Link>
                    </Reveal>
                  )}
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="theme-obsidian border-t border-border bg-surface py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <SectionHeading eyebrow="Results" title="Outcomes that mattered." />
            <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
              {study.results.map((r) => (
                <div key={r.label} className="bg-surface-elevated p-7">
                  <p className="text-2xl font-semibold tracking-tight text-text-primary md:text-3xl">
                    {r.value}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {r.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <CtaSection />
      <FooterSection />
    </>
  );
}

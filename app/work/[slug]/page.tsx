import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
    openGraph: {
      type: "article",
      title: study.metaTitle,
      description: study.metaDescription,
      url: `/work/${study.slug}`,
    },
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
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <Breadcrumbs items={crumbs} />

            {study.clients && study.clients.length > 0 && (
              <Reveal className="mb-12 rounded-2xl border border-border bg-surface-elevated p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
                  Enterprise clients
                </p>
                <p className="mt-3 text-lg font-semibold text-text-primary">
                  {study.clients.join(" · ")}
                </p>
              </Reveal>
            )}

            <article className="space-y-12">
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
            </article>
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

            <div className="mt-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
                Tech stack
              </p>
              <ul className="mt-4 flex flex-wrap gap-2.5">
                {study.techStack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-border px-3.5 py-1.5 text-sm text-text-primary"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            {service && (
              <div className="mt-10">
                <Link
                  href={`/services/${service.slug}`}
                  className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-[#0d0d0d] transition-[transform,opacity] hover:-translate-y-px hover:opacity-90 md:text-base"
                >
                  Explore {service.navLabel}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} aria-hidden />
                </Link>
              </div>
            )}
          </div>
        </section>
      </main>
      <CtaSection />
      <FooterSection />
    </>
  );
}

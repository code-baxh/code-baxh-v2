import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/page-hero";
import { CaseStudyCard, clientLabel } from "@/components/cards/case-study-card";
import { caseStudyImage } from "@/content/images";
import { CtaBand } from "@/components/sections/cta-band";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeading } from "@/components/ui/section";
import { caseStudies } from "@/content/case-studies";
import { services } from "@/content/services";
import { JsonLd } from "@/components/seo/json-ld";
import { caseStudySchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const c = caseStudies.find((x) => x.slug === slug);
  if (!c) return {};
  return pageMetadata({ title: c.metaTitle ?? c.title, description: c.summary, path: `/work/${c.slug}` });
}

function Block({ title, paragraphs }: { title: string; paragraphs: string[] }) {
  return (
    <div className="grid gap-6 border-t border-line py-10 lg:grid-cols-[0.5fr_1fr]">
      <h2 className="text-2xl font-semibold sm:text-3xl">{title}</h2>
      <div className="max-w-3xl space-y-4 text-lg text-muted">
        {paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </div>
  );
}

export default async function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const c = caseStudies.find((x) => x.slug === slug);
  if (!c) notFound();
  const used = services.filter((s) => c.services.includes(s.slug));
  const more = caseStudies.filter((x) => x.slug !== c.slug && x.category === c.category).slice(0, 3);

  return (
    <>
      <JsonLd data={caseStudySchema(c)} />
      <PageHero
        crumbs={[
          { name: "Work", path: "/work" },
          { name: c.title, path: `/work/${c.slug}` },
        ]}
        eyebrow={c.sector}
        title={c.title}
        lead={c.summary}
        image={caseStudyImage[c.slug]}
      />

      <Section className="!pb-0">
        <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <dt className="eyebrow">Client</dt>
            <dd className="mt-2 text-lg">{clientLabel(c)}</dd>
          </div>
          <div>
            <dt className="eyebrow">Our role</dt>
            <dd className="mt-2 text-lg">{c.roleNote}</dd>
          </div>
          <div>
            <dt className="eyebrow">Services</dt>
            <dd className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-lg">
              {used.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="underline decoration-line-strong underline-offset-4 hover:text-accent-text">
                  {s.name}
                </Link>
              ))}
            </dd>
          </div>
          <div>
            <dt className="eyebrow">Stack</dt>
            <dd className="mt-2 flex flex-wrap gap-2">
              {c.stack.map((t) => (
                <span key={t} className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">
                  {t}
                </span>
              ))}
            </dd>
          </div>
        </dl>
      </Section>

      <Section className="!pt-12">
        <Block title="The problem" paragraphs={c.problem} />
        <Block title="Our approach" paragraphs={c.approach} />
        <Block title="The solution" paragraphs={c.solution} />

        <div className="border-t border-line py-10">
          <h2 className="text-2xl font-semibold sm:text-3xl">What we built</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {c.built.map((b, i) => (
              <li key={b.title}>
                <Reveal delay={(i % 3) * 0.05} className="h-full">
                  <div className="card h-full p-6">
                    <h3 className="text-lg font-semibold">{b.title}</h3>
                    <p className="mt-2 text-sm text-muted">{b.body}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-6 border-t border-line py-10 lg:grid-cols-[0.5fr_1fr]">
          <h2 className="text-2xl font-semibold sm:text-3xl">Results</h2>
          <ul className="max-w-3xl space-y-4 text-lg">
            {c.results.map((r) => (
              <li key={r.text} className="border-l-2 border-accent pl-4">
                {r.text}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {more.length ? (
        <Section className="border-t border-line">
          <SectionHeading eyebrow="More work" title={`More ${c.category} case studies.`} />
          <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {more.map((x) => (
              <li key={x.slug}>
                <CaseStudyCard study={x} />
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      <CtaBand title="Planning something similar?" />
    </>
  );
}

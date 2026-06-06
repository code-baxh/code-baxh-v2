import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CtaSection } from "../../sections/cta";
import { FooterSection } from "../../sections/footer";
import { HeaderSection } from "../../sections/header";
import { PageHero, Reveal } from "../../sections/shared";
import { Breadcrumbs, FaqSection } from "../../sections/marketing";
import { JsonLd } from "../../lib/JsonLd";
import { articleSchema, breadcrumbSchema, faqSchema, graph } from "../../lib/schema";
import { BLOG_POSTS, getPost } from "../../lib/blog";
import { getService } from "../../lib/services";
import { FOUNDER } from "../../lib/site";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.metaTitle,
      description: post.metaDescription,
      url: `/blog/${post.slug}`,
      publishedTime: post.datePublished,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const service = post.serviceSlug ? getService(post.serviceSlug) : undefined;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={graph(
          articleSchema({
            title: post.title,
            description: post.metaDescription,
            slug: post.slug,
            datePublished: post.datePublished,
          }),
          breadcrumbSchema(crumbs),
          ...(post.faqs && post.faqs.length ? [faqSchema(post.faqs)] : []),
        )}
      />
      <HeaderSection />
      <main>
        <PageHero eyebrow={post.category} title={post.title} description={post.excerpt} />

        <section className="theme-paper border-t border-border bg-surface py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <Breadcrumbs items={crumbs} />

            <div className="flex flex-wrap items-center gap-3 border-b border-border pb-8 text-sm text-text-muted">
              <span className="font-medium text-text-primary">{FOUNDER.name}</span>
              <span aria-hidden>·</span>
              <span>{formatDate(post.datePublished)}</span>
              <span aria-hidden>·</span>
              <span>{post.readingTime}</span>
            </div>

            <article className="mt-10 space-y-10">
              {post.sections.map((section, i) => (
                <Reveal key={i}>
                  {section.heading && (
                    <h2 className="text-2xl font-semibold tracking-tight text-text-primary">
                      {section.heading}
                    </h2>
                  )}
                  {section.paragraphs?.map((p, j) => (
                    <p
                      key={j}
                      className={`text-lg leading-relaxed text-text-secondary ${
                        section.heading || j > 0 ? "mt-4" : ""
                      }`}
                    >
                      {p}
                    </p>
                  ))}
                  {section.bullets && (
                    <ul className="mt-4 space-y-3">
                      {section.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-3 text-lg leading-relaxed text-text-secondary"
                        >
                          <ArrowRight className="mt-1.5 size-4 shrink-0 text-accent" strokeWidth={2.25} aria-hidden />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </Reveal>
              ))}
            </article>

            {service && (
              <div className="mt-12 rounded-2xl border border-border bg-surface-elevated p-7">
                <p className="text-sm text-text-secondary">
                  Need this built?{" "}
                  <Link
                    href={`/services/${service.slug}`}
                    className="font-semibold text-accent hover:underline"
                  >
                    Explore our {service.navLabel} service
                  </Link>{" "}
                  or{" "}
                  <Link href="/contact" className="font-semibold text-accent hover:underline">
                    book a discovery call
                  </Link>
                  .
                </p>
              </div>
            )}
          </div>
        </section>

        {post.faqs && post.faqs.length > 0 && (
          <FaqSection faqs={post.faqs} emitSchema={false} />
        )}
      </main>
      <CtaSection />
      <FooterSection />
    </>
  );
}

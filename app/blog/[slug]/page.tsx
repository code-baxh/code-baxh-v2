import type { Metadata } from "next";
import { pageOpenGraph } from "../../lib/metadata";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CtaSection } from "../../sections/cta";
import { FooterSection } from "../../sections/footer";
import { HeaderSection } from "../../sections/header";
import { PageHero, Reveal } from "../../sections/shared";
import { ArticleBody, Breadcrumbs, FaqSection } from "../../sections/marketing";
import { JsonLd } from "../../lib/JsonLd";
import { articleSchema, breadcrumbSchema, faqSchema, graph } from "../../lib/schema";
import { BLOG_POSTS, getPost, getRelatedPosts } from "../../lib/blog";
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
    openGraph: pageOpenGraph({
      type: "article",
      title: post.metaTitle,
      description: post.metaDescription,
      url: `/blog/${post.slug}`,
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified ?? post.datePublished,
    }),
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
  const related = getRelatedPosts(post.slug, 3);
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
            dateModified: post.dateModified,
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

            <ArticleBody sections={post.sections} />

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

        {related.length > 0 && (
          <section className="theme-paper border-t border-border bg-surface-muted py-16 md:py-20">
            <div className="mx-auto max-w-5xl px-5 sm:px-8">
              <h2 className="text-2xl font-semibold tracking-tight text-text-primary">
                Keep reading
              </h2>
              <div className="mt-8 grid gap-5 md:grid-cols-3">
                {related.map((rp) => (
                  <Reveal key={rp.slug} className="h-full">
                    <Link
                      href={`/blog/${rp.slug}`}
                      className="group kinetic-card flex h-full flex-col rounded-2xl border border-border bg-surface-elevated p-6"
                    >
                      <div className="flex items-center gap-2.5 text-xs text-text-muted">
                        <span className="font-semibold uppercase tracking-[0.14em] text-accent">
                          {rp.category}
                        </span>
                        <span aria-hidden>·</span>
                        <span>{rp.readingTime}</span>
                      </div>
                      <h3 className="mt-3 flex items-start justify-between gap-3 text-base font-semibold leading-snug tracking-tight text-text-primary">
                        {rp.title}
                        <ArrowUpRight
                          className="size-4 shrink-0 text-text-muted transition-[transform,color] duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                          strokeWidth={2}
                          aria-hidden
                        />
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">
                        {rp.excerpt}
                      </p>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <CtaSection />
      <FooterSection />
    </>
  );
}

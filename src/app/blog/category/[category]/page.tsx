import { notFound } from "next/navigation";
import { BlogIndex } from "@/components/blog/blog-index";
import { categorySlug, getAllPosts, getCategories } from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return getCategories().map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/category/[category]">) {
  const { category } = await params;
  const c = getCategories().find((x) => x.slug === category);
  if (!c) return {};
  return pageMetadata({
    title: `${c.name} Articles & Guides`,
    description: `${c.name} articles from the CodeBaxh team: practical guidance on architecture, cost, timelines and the trade-offs behind each decision.`,
    path: `/blog/category/${c.slug}`,
    image: "/blog/opengraph-image",
  });
}

export default async function BlogCategory({ params }: PageProps<"/blog/category/[category]">) {
  const { category } = await params;
  const c = getCategories().find((x) => x.slug === category);
  if (!c) notFound();
  return (
    <BlogIndex
      title={`${c.name} articles`}
      lead={`${c.count} guides in this category.`}
      crumbs={[
        { name: "Blog", path: "/blog" },
        { name: c.name, path: `/blog/category/${c.slug}` },
      ]}
      posts={getAllPosts().filter((p) => categorySlug(p.category) === c.slug)}
      activeCategory={c.slug}
    />
  );
}

import { notFound } from "next/navigation";
import { BlogIndex } from "@/components/blog/blog-index";
import { pagePosts, totalBlogPages } from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";

const totalPages = totalBlogPages;

export function generateStaticParams() {
  return Array.from({ length: totalPages() - 1 }, (_, i) => ({ page: String(i + 2) }));
}

export async function generateMetadata({ params }: PageProps<"/blog/page/[page]">) {
  const { page } = await params;
  return pageMetadata({
    title: `Blog, page ${page}`,
    description: `Page ${page} of practical guides from the CodeBaxh team on SaaS, AI, web and mobile development, costs and timelines.`,
    path: `/blog/page/${page}`,
    image: "/blog/opengraph-image",
  });
}

export default async function BlogPaged({ params }: PageProps<"/blog/page/[page]">) {
  const { page } = await params;
  const n = Number(page);
  if (!Number.isInteger(n) || n < 2 || n > totalPages()) notFound();
  return (
    <BlogIndex
      title={`Blog, page ${n}`}
      lead="Practical guides on building software and AI products."
      crumbs={[
        { name: "Blog", path: "/blog" },
        { name: `Page ${n}`, path: `/blog/page/${n}` },
      ]}
      posts={pagePosts(n)}
      pagination={{ page: n, total: totalPages() }}
    />
  );
}

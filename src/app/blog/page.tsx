import { BlogIndex } from "@/components/blog/blog-index";
import { getAllPosts, pagePosts, totalBlogPages } from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Blog: Software & AI Development Guides",
  description:
    "Practical guides from the CodeBaxh team on building SaaS products, adding AI, choosing a tech stack, and what software projects cost and how long they take.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <BlogIndex
      title="Practical guides on building software and AI products."
      lead="Written by the people who build them: architecture, cost, timelines and the trade-offs behind each decision."
      crumbs={[{ name: "Blog", path: "/blog" }]}
      featured={posts[0]}
      posts={pagePosts(1)}
      pagination={{ page: 1, total: totalBlogPages() }}
    />
  );
}

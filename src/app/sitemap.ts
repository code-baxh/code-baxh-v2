import type { MetadataRoute } from "next";
import { caseStudies } from "@/content/case-studies";
import { services } from "@/content/services";
import { team } from "@/content/team";
import { getAllPosts, getCategories, totalBlogPages } from "@/lib/blog";
import { abs } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const pages = totalBlogPages();
  const fixed = ["/", "/ai", "/services", "/work", "/about", "/process", "/engagement", "/blog", "/contact", "/start-a-project", "/privacy", "/terms"];
  return [
    ...fixed.map((p) => ({ url: abs(p), changeFrequency: "monthly" as const, priority: p === "/" ? 1 : 0.8 })),
    ...services.map((s) => ({ url: abs(`/services/${s.slug}`), changeFrequency: "monthly" as const, priority: 0.8 })),
    ...caseStudies.map((c) => ({ url: abs(`/work/${c.slug}`), changeFrequency: "yearly" as const, priority: 0.6 })),
    ...team.map((m) => ({ url: abs(`/team/${m.slug}`), changeFrequency: "yearly" as const, priority: 0.5 })),
    ...getCategories().map((c) => ({ url: abs(`/blog/category/${c.slug}`), changeFrequency: "weekly" as const, priority: 0.4 })),
    ...Array.from({ length: Math.max(pages - 1, 0) }, (_, i) => ({
      url: abs(`/blog/page/${i + 2}`),
      changeFrequency: "weekly" as const,
      priority: 0.3,
    })),
    ...posts.map((p) => ({ url: abs(`/blog/${p.slug}`), lastModified: p.updated, changeFrequency: "monthly" as const, priority: 0.6 })),
  ];
}

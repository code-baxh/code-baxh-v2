import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import GithubSlugger from "github-slugger";
import { z } from "zod";
import { blogPools, images, type ImageKey } from "@/content/images";

const DIR = path.join(process.cwd(), "content", "blog");
export const POSTS_PER_PAGE = 9;

/** Page 1 = featured post + 9; every later page = 9. */
export function pagePosts(page: number) {
  const rest = getAllPosts().slice(1);
  return rest.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);
}
export const totalBlogPages = () => Math.max(1, Math.ceil((getAllPosts().length - 1) / POSTS_PER_PAGE));

const frontmatter = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  updated: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  author: z.string().min(1),
  category: z.string().min(1),
  tags: z.array(z.string()).default([]),
  cover: z.string().optional().default(""),
});

export type PostMeta = z.infer<typeof frontmatter> & { slug: string; readingMinutes: number };
export type Post = PostMeta & { body: string; headings: { depth: 2 | 3; text: string; id: string }[] };

function read(slug: string): Post {
  const raw = fs.readFileSync(path.join(DIR, `${slug}.mdx`), "utf8");
  const { data, content } = matter(raw);
  const fm = frontmatter.parse(data);
  const words = content.split(/\s+/).filter(Boolean).length;
  const slugger = new GithubSlugger();
  const headings: Post["headings"] = [];
  let inFence = false;
  for (const line of content.split("\n")) {
    if (line.startsWith("```")) inFence = !inFence;
    const m = !inFence && /^(#{2,3})\s+(.+)$/.exec(line);
    if (m) {
      const text = m[2].replace(/[*_`]|\[([^\]]+)\]\([^)]+\)/g, "$1").trim();
      headings.push({ depth: m[1].length as 2 | 3, text, id: slugger.slug(text) });
    }
  }
  return { ...fm, slug, readingMinutes: Math.max(1, Math.round(words / 220)), body: content, headings };
}

let cache: Post[] | null = null;

export function getAllPosts(): Post[] {
  cache ??= fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => read(f.replace(/\.mdx$/, "")))
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : a.slug.localeCompare(b.slug)));
  return cache;
}

export const getPost = (slug: string) => getAllPosts().find((p) => p.slug === slug);

const allImages = Object.keys(images) as ImageKey[];

/**
 * Gives each post in a list a cover photo, preferring its category's photos
 * and never repeating one while unused photos remain. With `window` set, only
 * the most recent picks are treated as used, which keeps any run of that many
 * neighbouring posts distinct across a long list.
 */
export function coversFor(posts: { slug: string; category: string }[], window = Infinity) {
  const out = new Map<string, ImageKey>();
  const recent: ImageKey[] = [];
  posts.forEach((p, i) => {
    const pool = blogPools[p.category] ?? [];
    const pick = [...pool, ...allImages].find((k) => !recent.includes(k)) ?? allImages[i % allImages.length];
    out.set(p.slug, pick);
    recent.push(pick);
    if (recent.length > window) recent.shift();
  });
  return out;
}

let globalCovers: Map<string, ImageKey> | null = null;
/** The cover a post uses on its own page and in search results. */
export function coverFor(slug: string): ImageKey {
  globalCovers ??= coversFor(getAllPosts(), 12);
  return globalCovers.get(slug) ?? "circuit";
}

export function toMeta(post: Post, cover: ImageKey = coverFor(post.slug)): PostMeta {
  const meta: Partial<Post> = { ...post, cover };
  delete meta.body;
  delete meta.headings;
  return meta as PostMeta;
}

export const categorySlug = (c: string) => c.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export function getCategories() {
  const counts = new Map<string, number>();
  for (const p of getAllPosts()) counts.set(p.category, (counts.get(p.category) ?? 0) + 1);
  return [...counts].map(([name, count]) => ({ name, slug: categorySlug(name), count })).sort((a, b) => b.count - a.count);
}

export function relatedPosts(post: Post, n = 3) {
  return getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .map((p) => ({
      p,
      score: (p.category === post.category ? 2 : 0) + p.tags.filter((t) => post.tags.includes(t)).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, n)
    .map((x) => x.p);
}

export { formatDate } from "./format";

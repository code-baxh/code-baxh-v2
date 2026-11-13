import { site } from "@/config/site";
import { team } from "@/content/team";
import { getAllPosts } from "@/lib/blog";
import { abs } from "@/lib/seo";

export const dynamic = "force-static";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** RSS feed of every blog post, newest first. */
export function GET() {
  const items = getAllPosts()
    .map((p) => {
      const author = team.find((m) => m.slug === p.author)?.name ?? site.name;
      return `<item><title>${esc(p.title)}</title><link>${abs(`/blog/${p.slug}`)}</link><guid>${abs(`/blog/${p.slug}`)}</guid><description>${esc(p.description)}</description><category>${esc(p.category)}</category><author>${esc(author)}</author><pubDate>${new Date(`${p.date}T00:00:00Z`).toUTCString()}</pubDate></item>`;
    })
    .join("");
  // Channel image = the CB mark, so feed readers show the brand rather than a generic icon.
  const image = `<image><url>${abs("/apple-icon.png")}</url><title>${site.name} blog</title><link>${abs("/blog")}</link><width>144</width><height>144</height></image>`;
  const self = `<atom:link href="${abs("/blog/rss.xml")}" rel="self" type="application/rss+xml"/>`;
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>${site.name} blog</title><link>${abs("/blog")}</link><description>Practical guides on building software and AI products.</description><language>en-gb</language>${self}${image}${items}</channel></rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}

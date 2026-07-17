import { SITE, SITE_URL } from "../lib/site";
import { SERVICES } from "../lib/services";
import { CASE_STUDIES } from "../lib/work";
import { BLOG_POSTS } from "../lib/blog";

/**
 * /llms.txt — a Markdown index of the site for LLM/agent tooling. Low-cost,
 * ship-and-forget (no major search engine officially relies on it yet), but
 * harmless and may help future AI tooling discover canonical pages.
 */
export function GET() {
  const lines: string[] = [];
  lines.push(`# ${SITE.name}`);
  lines.push("");
  lines.push(`> ${SITE.description}`);
  lines.push("");
  lines.push("## Services");
  for (const s of SERVICES) {
    lines.push(`- [${s.title}](${SITE_URL}/services/${s.slug}): ${s.summary}`);
  }
  lines.push("");
  lines.push("## Work / Case studies");
  for (const c of CASE_STUDIES) {
    lines.push(`- [${c.title}](${SITE_URL}/work/${c.slug}): ${c.summary}`);
  }
  lines.push("");
  lines.push("## Blog");
  for (const p of BLOG_POSTS) {
    lines.push(`- [${p.title}](${SITE_URL}/blog/${p.slug}): ${p.excerpt}`);
  }
  lines.push("");
  lines.push("## Company");
  lines.push(`- [About](${SITE_URL}/about)`);
  lines.push(`- [Process](${SITE_URL}/process)`);
  lines.push(`- [Engagement & pricing](${SITE_URL}/engagement)`);
  lines.push(`- [Contact / book a call](${SITE_URL}/contact)`);
  lines.push("");

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

import { site } from "@/config/site";
import { caseStudies } from "@/content/case-studies";
import { services } from "@/content/services";
import { getAllPosts } from "@/lib/blog";
import { abs } from "@/lib/seo";

export const dynamic = "force-static";

/** Plain-text map of the site for AI assistants and answer engines (llms.txt convention). */
export function GET() {
  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    `Full text of every service, case study and article: ${abs("/llms-full.txt")}`,
    "",
    "## Key pages",
    `- [Services](${abs("/services")})`,
    `- [AI services](${abs("/ai")})`,
    `- [Work](${abs("/work")})`,
    `- [About](${abs("/about")})`,
    `- [Process](${abs("/process")})`,
    `- [Engagement and pricing](${abs("/engagement")})`,
    `- [Start a project](${abs("/start-a-project")})`,
    `- [Contact](${abs("/contact")})`,
    "",
    "## Services",
    ...services.map((s) => `- [${s.name}](${abs(`/services/${s.slug}`)}): ${s.summary}`),
    "",
    "## Case studies",
    ...caseStudies.map((c) => `- [${c.title}](${abs(`/work/${c.slug}`)}): ${c.summary}`),
    "",
    "## Articles",
    ...getAllPosts().map((p) => `- [${p.title}](${abs(`/blog/${p.slug}`)}): ${p.description}`),
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}

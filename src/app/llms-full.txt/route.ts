import { companyFacts, site } from "@/config/site";
import { caseStudies } from "@/content/case-studies";
import { services } from "@/content/services";
import { team } from "@/content/team";
import { getAllPosts } from "@/lib/blog";
import { abs } from "@/lib/seo";

export const dynamic = "force-static";

/**
 * Full-text companion to /llms.txt: every service, case study and article as Markdown,
 * so answer engines can read and cite the content without rendering pages.
 */
export function GET() {
  const out: string[] = [
    `# ${site.name}: full content`,
    "",
    `> ${site.description}`,
    "",
    companyFacts,
    "",
    `Index of pages: ${abs("/llms.txt")}`,
    "",
    "## Team",
    "",
    ...team.flatMap((m) => [`### ${m.name}, ${m.role}`, "", `Profile: ${abs(`/team/${m.slug}`)}`, "", m.bio, "", `Expertise: ${m.expertise.join(", ")}.`, ""]),
    "## Services",
    "",
  ];

  for (const s of services) {
    out.push(
      `### ${s.name}`,
      "",
      `URL: ${abs(`/services/${s.slug}`)}`,
      "",
      s.headline + ".",
      "",
      ...s.problem.flatMap((p) => [p, ""]),
      "How we approach it:",
      "",
      ...s.approach.map((a) => `- **${a.title}.** ${a.body}`),
      "",
      "Deliverables:",
      "",
      ...s.deliverables.map((d) => `- ${d}`),
      "",
      `Technology: ${s.tech.join(", ")}.`,
      "",
      ...s.faqs.flatMap((f) => [`**${f.q}** ${f.a}`, ""]),
    );
  }

  out.push("## Case studies", "");
  for (const c of caseStudies) {
    out.push(
      `### ${c.title}`,
      "",
      `URL: ${abs(`/work/${c.slug}`)}`,
      "",
      `${c.sector}. ${c.summary} ${c.roleNote}`,
      "",
      ...c.problem.flatMap((p) => [p, ""]),
      ...c.solution.flatMap((p) => [p, ""]),
      ...c.results.filter((r) => !r.needsVerification).map((r) => `- ${r.text}`),
      "",
      `Stack: ${c.stack.join(", ")}.`,
      "",
    );
  }

  out.push("## Articles", "");
  for (const p of getAllPosts()) {
    const author = team.find((m) => m.slug === p.author);
    out.push(
      `### ${p.title}`,
      "",
      `URL: ${abs(`/blog/${p.slug}`)}`,
      `Author: ${author?.name ?? site.name}. Published ${p.date}, updated ${p.updated}.`,
      "",
      // Demote the article's own headings one level so they nest under its ### title.
      p.body.trim().replace(/^(#{2,5}) /gm, "#$1 "),
      "",
    );
  }

  return new Response(out.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}

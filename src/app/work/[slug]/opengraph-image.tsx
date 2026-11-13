import { ogContentType, ogSize, renderOg } from "@/lib/og";
import { caseStudies } from "@/content/case-studies";

export const alt = "CodeBaxh";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = caseStudies.find((x) => x.slug === slug);
  return renderOg(s ? { eyebrow: `Case study · ${s.sector}`, title: s.title } : { eyebrow: "Case study", title: "CodeBaxh" });
}

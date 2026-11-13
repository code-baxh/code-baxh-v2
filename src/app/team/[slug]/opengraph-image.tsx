import { ogContentType, ogSize, renderOg } from "@/lib/og";
import { team } from "@/content/team";

export const alt = "CodeBaxh";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return team.map((m) => ({ slug: m.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = team.find((x) => x.slug === slug);
  return renderOg(s ? { eyebrow: s.role, title: s.name } : { eyebrow: "Team", title: "CodeBaxh" });
}

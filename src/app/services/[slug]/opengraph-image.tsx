import { ogContentType, ogSize, renderOg } from "@/lib/og";
import { services } from "@/content/services";

export const alt = "CodeBaxh";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  return renderOg(s ? { eyebrow: s.category === "ai" ? "AI service" : "Service", title: s.name } : { eyebrow: "Service", title: "CodeBaxh" });
}

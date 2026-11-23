import { ogContentType, ogSize, renderOg } from "@/lib/og";
import { marketBySlug, markets } from "@/content/markets";

export const alt = "CodeBaxh";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return markets.map((m) => ({ slug: m.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const m = marketBySlug(slug);
  return renderOg(m ? { eyebrow: m.eyebrow, title: m.headline } : { eyebrow: "Markets", title: "CodeBaxh" });
}

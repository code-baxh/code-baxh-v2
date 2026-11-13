import { ogContentType, ogSize, renderOg } from "@/lib/og";
import { getAllPosts, getPost } from "@/lib/blog";

export const alt = "CodeBaxh";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getPost(slug);
  return renderOg(s ? { eyebrow: `Blog · ${s.category}`, title: s.title } : { eyebrow: "Blog", title: "CodeBaxh" });
}

import { iconTools } from "@/content/tools";

export const dynamic = "force-static";
export const dynamicParams = false;

/** One static SVG per tool logo (/tool-icons/<slug>.svg), generated at build from simple-icons. */
export function generateStaticParams() {
  return iconTools.map((t) => ({ icon: `${t.slug}.svg` }));
}

export async function GET(_req: Request, { params }: { params: Promise<{ icon: string }> }) {
  const { icon } = await params;
  const tool = iconTools.find((t) => `${t.slug}.svg` === icon);
  if (!tool) return new Response("Not found", { status: 404 });
  const title = tool.title.replace(/&/g, "&amp;").replace(/</g, "&lt;");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>${title}</title><path fill="#${tool.hex}" d="${tool.path}"/></svg>`;
  return new Response(svg, { headers: { "Content-Type": "image/svg+xml; charset=utf-8" } });
}

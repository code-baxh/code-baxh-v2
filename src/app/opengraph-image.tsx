import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Web, SaaS and AI products that ship.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({ eyebrow: "Software development and AI company", title: "Web, SaaS and AI products that ship." });
}

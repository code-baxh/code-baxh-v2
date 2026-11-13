import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Practical guides on building software and AI products.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({ eyebrow: "Blog", title: "Practical guides on building software and AI products." });
}

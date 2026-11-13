import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Three ways to work with us, each with clear terms.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({ eyebrow: "Engagement & pricing", title: "Three ways to work with us, each with clear terms." });
}

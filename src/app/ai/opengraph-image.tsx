import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "AI that works in production, not only in the demo.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({ eyebrow: "AI services", title: "AI that works in production, not only in the demo." });
}

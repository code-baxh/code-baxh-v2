import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Software and AI services, delivered end to end.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({ eyebrow: "Services", title: "Software and AI services, delivered end to end." });
}

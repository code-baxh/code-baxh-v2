import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "A founder-led company with a specialist team behind every build.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({ eyebrow: "About", title: "A founder-led company with a specialist team behind every build." });
}

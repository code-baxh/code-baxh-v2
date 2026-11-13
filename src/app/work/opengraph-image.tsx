import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Products we have designed, built and shipped.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({ eyebrow: "Work", title: "Products we have designed, built and shipped." });
}

import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Software and AI development for clients around the world.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({ eyebrow: "Markets", title: "Software and AI development for clients around the world." });
}

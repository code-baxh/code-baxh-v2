import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "A delivery process you can see and plan around.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({ eyebrow: "Process", title: "A delivery process you can see and plan around." });
}

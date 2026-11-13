import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Start a project with CodeBaxh.";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({ eyebrow: "Contact", title: "Start a project with CodeBaxh." });
}

import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Start a project with CodeBaxh";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({ eyebrow: "Start a project", title: "Tell us what you are building." });
}

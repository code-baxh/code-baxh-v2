import type { Metadata } from "next";
import { site } from "@/config/site";

type Args = {
  /** Page title without the brand suffix; " | CodeBaxh" is appended when it fits. */
  title: string;
  description: string;
  /** Root-relative path, e.g. "/services/saas-development". */
  path: string;
  type?: "website" | "article";
  /** Social image for routes that have no opengraph-image file of their own. */
  image?: string;
};

const SUFFIX = ` | ${site.name}`;
const PAD = " From CodeBaxh, a software development and AI company.";

/** Keeps meta descriptions inside the range search engines show in full (about 120 to 160 characters). */
export function fitDescription(text: string) {
  let d = text.trim();
  if (d.length < 120 && d.length + PAD.length <= 160) d += PAD;
  if (d.length <= 160) return d;
  const cut = d.slice(0, 157);
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:.]$/, "")}…`;
}

/** One place that builds title, description, canonical and social tags for a page. */
export function pageMetadata({ title, description, path, type = "website", image }: Args): Metadata {
  const desc = fitDescription(description);
  // Long headlines drop the brand suffix so the full title is shown in results.
  const withBrand = title.length + SUFFIX.length <= 60;
  const full = withBrand ? `${title}${SUFFIX}` : title;
  // Only set images when given: an explicit value would replace the route's own opengraph-image file.
  const social = image ? { images: [{ url: image, width: 1200, height: 630, alt: title }] } : {};
  return {
    title: { absolute: full },
    description: desc,
    alternates: { canonical: path },
    openGraph: { title: full, description: desc, url: path, siteName: site.name, type, locale: "en_GB", ...social },
    twitter: { card: "summary_large_image", title: full, description: desc, ...(image ? { images: [image] } : {}) },
  };
}

export const abs = (path: string) => new URL(path, site.url).toString();

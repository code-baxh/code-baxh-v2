import type { Metadata } from "next";
import { SITE } from "./site";

type PageOpenGraphInput = {
  url: string;
  title: string;
  description: string;
  /** OG type; slug pages pass "article" plus e.g. publishedTime. */
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
};

/**
 * Per-page Open Graph block. Next.js merges metadata SHALLOWLY per top-level
 * key: a page that sets `openGraph` replaces the root layout's block entirely
 * — siteName, locale, and images are silently lost unless re-declared (this
 * is how every blog post shipped without an og:image). Always build
 * page-level openGraph through this helper so the defaults survive.
 */
export function pageOpenGraph({
  url,
  title,
  description,
  type = "website",
  publishedTime,
  modifiedTime,
}: PageOpenGraphInput): NonNullable<Metadata["openGraph"]> {
  return {
    type,
    siteName: SITE.name,
    locale: "en_US",
    images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: SITE.name }],
    url,
    title,
    description,
    ...(publishedTime ? { publishedTime } : {}),
    ...(modifiedTime ? { modifiedTime } : {}),
  } as NonNullable<Metadata["openGraph"]>;
}

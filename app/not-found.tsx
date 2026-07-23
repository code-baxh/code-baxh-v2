import type { Metadata } from "next";
import Link from "next/link";
import { HeaderSection } from "./sections/header";
import { FooterSection } from "./sections/footer";

/**
 * Explicit metadata so the 404 boundary doesn't merge with the root layout's
 * defaults — without this the 404 page shipped two <title> tags, conflicting
 * robots metas (noindex AND index,follow), and a canonical to the homepage.
 */
export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
  alternates: { canonical: null },
};

export default function NotFound() {
  return (
    <>
      <HeaderSection />
      <main className="theme-obsidian flex min-h-[60vh] flex-col items-center justify-center bg-surface px-5 py-24 text-center">
        <p className="font-mono text-sm text-text-muted">404</p>
        <h1 className="mt-4 text-3xl font-semibold text-text-primary sm:text-4xl">
          This page doesn&apos;t exist.
        </h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-text-secondary">
          The link may be outdated or mistyped. Everything we&apos;ve shipped
          is one click away.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
          >
            Back to home
          </Link>
          <Link
            href="/blog"
            className="rounded-full border border-border px-6 py-3 text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
          >
            Read the blog
          </Link>
        </div>
      </main>
      <FooterSection />
    </>
  );
}

import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button";

/**
 * Own head for 404s. Without this the page inherits the root layout's homepage title,
 * `index, follow` (next to the noindex Next.js injects) and a canonical pointing at the
 * homepage: conflicting signals on every broken URL.
 */
export const metadata: Metadata = {
  title: { absolute: "Page not found | CodeBaxh" },
  description: "This page does not exist. Browse CodeBaxh services, case studies or the blog.",
  robots: { index: false, follow: true },
  alternates: { canonical: null },
  openGraph: null,
};

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center text-center px-5 py-24">
      <p className="eyebrow">Error 404</p>
      <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">This page does not exist.</h1>
      <p className="mt-5 text-lg text-muted">The link may be old, or the page may have moved.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href="/">Back to home</ButtonLink>
        <ButtonLink href="/services" variant="secondary">
          Browse services
        </ButtonLink>
      </div>
    </div>
  );
}

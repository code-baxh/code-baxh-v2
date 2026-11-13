import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/components/providers";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HelpPrompt } from "@/components/help-prompt";
import Script from "next/script";
import { site } from "@/config/site";
import { JsonLd } from "@/components/seo/json-ld";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import "./globals.css";

// Same typefaces as the live site: Geist for body text and headings, Geist Mono for labels and code.
const sans = Geist({ variable: "--ff-body", subsets: ["latin"], display: "swap" });
const mono = Geist_Mono({ variable: "--ff-mono", subsets: ["latin"], display: "swap", preload: false });

const homeTitle = "CodeBaxh | Software Development & AI Company";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: homeTitle, template: "%s | CodeBaxh" },
  description: site.description,
  applicationName: site.name,
  alternates: {
    canonical: "/",
    types: { "application/rss+xml": [{ url: "/blog/rss.xml", title: "CodeBaxh blog" }] },
  },
  openGraph: { title: homeTitle, description: site.description, siteName: site.name, type: "website", locale: "en_GB", url: "/" },
  twitter: { card: "summary_large_image", title: homeTitle, description: site.description },
  robots: { index: true, follow: true, googleBot: { "max-image-preview": "large", "max-snippet": -1 } },
  // Search-console ownership tags, added only when the values are set.
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
      : undefined,
  },
};

const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
/**
 * GA4, defaulting to the property the live site already reports to, so the move to v2
 * doesn't break measurement. Set NEXT_PUBLIC_GA_MEASUREMENT_ID="" to turn it off, for
 * example when switching to Plausible only. GA4 sets cookies: EU visitors need consent.
 */
const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-0ZK9N00Q90";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#04060c" },
    { media: "(prefers-color-scheme: light)", color: "#f6f8fc" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sans.variable} ${mono.variable} antialiased`}
    >
      <body className="flex min-h-dvh flex-col">
        <Providers>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-5 focus:py-3 focus:text-accent-fg"
          >
            Skip to content
          </a>
          <Header />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
          <HelpPrompt />
        </Providers>
        {/* Site-wide structured data: who we are, on every page. */}
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
        {/* Cookieless analytics, only when a domain is configured. */}
        {plausibleDomain ? (
          <Script defer data-domain={plausibleDomain} src="https://plausible.io/js/script.js" strategy="afterInteractive" />
        ) : null}
        {gaId ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="lazyOnload" />
            <Script id="ga4" strategy="lazyOnload">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}

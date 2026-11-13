import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { Providers } from "@/components/providers";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HelpPrompt } from "@/components/help-prompt";
import Script from "next/script";
import { site } from "@/config/site";
import { JsonLd } from "@/components/seo/json-ld";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import "./globals.css";

const display = Space_Grotesk({ variable: "--ff-display", subsets: ["latin"], display: "swap" });
const body = IBM_Plex_Sans({
  variable: "--ff-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});
const mono = JetBrains_Mono({
  variable: "--ff-mono",
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
  preload: false,
});

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
      className={`${display.variable} ${body.variable} ${mono.variable} antialiased`}
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
      </body>
    </html>
  );
}

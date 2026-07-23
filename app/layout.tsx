import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono, Nunito } from "next/font/google";
import { Providers } from "./providers";
import { SITE, SITE_URL, SOCIALS } from "./lib/site";
import { JsonLd } from "./lib/JsonLd";
import {
  graph,
  organizationSchema,
  websiteSchema,
  personSchema,
} from "./lib/schema";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-header",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.metaDescription,
  applicationName: SITE.name,
  keywords: [
    "software development agency",
    "SaaS development company",
    "AI integration services",
    "Next.js development agency",
    "React development",
    "hire full stack developer",
  ],
  authors: [{ name: SITE.name, url: SITE_URL }],
  creator: SITE.name,
  publisher: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.metaDescription,
    url: SITE_URL,
    locale: "en_US",
    images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: SITE.name }],
  },
  // Card type only — NO title/description/images here. Twitter/X falls back
  // to each page's og:* tags, which are per-page; a static twitter block in
  // the root layout gave every blog post the homepage's title in previews.
  twitter: {
    card: "summary_large_image",
    // Auto-included once you set SOCIALS.x (e.g. "@codebaxh").
    ...(SOCIALS.x ? { site: SOCIALS.x, creator: SOCIALS.x } : {}),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="theme-obsidian min-h-full flex flex-col">
        <JsonLd
          data={graph(organizationSchema(), websiteSchema(), personSchema())}
        />
        <Providers>{children}</Providers>

        {/* Google Analytics (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0ZK9N00Q90"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-0ZK9N00Q90');`}
        </Script>
      </body>
    </html>
  );
}

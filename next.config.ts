import type { NextConfig } from "next";

/**
 * Security headers live here, not in netlify.toml: Netlify's Next.js runtime
 * serves page routes through its own handler, which bypasses netlify.toml
 * [[headers]] (verified live 2026-07-23). next.config headers() is honoured.
 */
const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
  // `preload` deliberately left out: a hard commitment that is slow to undo.
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
  // Report-Only first: watch the console for violations, then enforce.
  // Covers Plausible and GA4 (both optional, see app/layout.tsx).
  {
    key: "Content-Security-Policy-Report-Only",
    value:
      "default-src 'self'; script-src 'self' 'unsafe-inline' https://plausible.io https://*.googletagmanager.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://*.googletagmanager.com https://*.google-analytics.com; font-src 'self'; media-src 'self'; connect-src 'self' https://plausible.io https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://www.google.com https://*.g.doubleclick.net; frame-ancestors 'none'; base-uri 'self'; form-action 'self'",
  },
];

const nextConfig: NextConfig = {
  // Allow tunnel hosts during `next dev` (fixes cross-origin dev client issues).
  allowedDevOrigins: ["*.ngrok-free.app", "*.ngrok.app", "*.ngrok.io"],
  // Don't advertise the stack in response headers.
  poweredByHeader: false,
  // AVIF first (smaller than WebP at the same quality), WebP as the fallback.
  images: { formats: ["image/avif", "image/webp"] },
  // No experimental.inlineCss: measured on this site, Next inlines the CSS into the RSC
  // payload as well, adding ~36 KB gzipped to every page's HTML to save one round trip.
  // A separate 11 KB stylesheet that is cached across pages is the better trade.
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  async redirects() {
    return [
      // Legacy URL from the domain's previous (pre-2026) site, still crawled per GSC.
      { source: "/home", destination: "/", permanent: true },
      // Old site routes renamed in the rebuild.
      { source: "/policy", destination: "/privacy", permanent: true },
      { source: "/tos", destination: "/terms", permanent: true },
      { source: "/tech-stack", destination: "/process", permanent: true },
      { source: "/services/stripe-integration", destination: "/services/payment-gateway-integration", permanent: true },
      { source: "/work/saas-mvp-11-weeks", destination: "/work/multi-tenant-saas-mvp", permanent: true },
      // De-branded 2026-08-27: the old slug carried a third party's brand and pulled
      // their branded searches at 0% CTR. Keep this redirect for the old URL's links.
      { source: "/work/zoneomics-proptech-saas", destination: "/work/gis-zoning-saas", permanent: true },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;

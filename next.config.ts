import type { NextConfig } from "next";

/**
 * Security headers live HERE, not in netlify.toml: Netlify's Next.js runtime
 * serves page routes through its own handler, which bypasses netlify.toml
 * [[headers]] (verified live 2026-07-23 — the toml headers never appeared on
 * page responses). next.config headers() IS honored by the runtime.
 */
const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()",
  },
  // `preload` (and hstspreload.org submission) deliberately left out — it's a
  // hard commitment that is slow to undo. Add once subdomain HTTPS is certain.
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains",
  },
  // Report-Only first: watch the browser console for violations, then move to
  // Content-Security-Policy once it's proven quiet.
  // GA4 endpoints per observed traffic + Google's CSP guidance: gtag also
  // beacons to www.google.com/g/collect (Google signals) and regional
  // *.analytics.google.com hosts — missing those would break analytics the
  // day this policy is enforced.
  {
    key: "Content-Security-Policy-Report-Only",
    value:
      "default-src 'self'; script-src 'self' 'unsafe-inline' https://*.googletagmanager.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://*.googletagmanager.com https://*.google-analytics.com; font-src 'self'; connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://www.google.com https://*.g.doubleclick.net; frame-ancestors 'none'; base-uri 'self'; form-action 'self'",
  },
];

const nextConfig: NextConfig = {
  // Allow tunnel hosts during `next dev` (fixes cross-origin dev client issues)
  allowedDevOrigins: ["*.ngrok-free.app", "*.ngrok.app", "*.ngrok.io"],
  // Don't advertise the stack in response headers.
  poweredByHeader: false,
  experimental: {
    // Inline the (Tailwind, atomic) CSS as a <style> tag instead of a
    // render-blocking <link> — removes a full RTT before first paint on
    // slow connections. Trade-off: returning visitors lose stylesheet
    // caching; first-visit LCP matters more for this site.
    inlineCss: true,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;

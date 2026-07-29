import { NAV_CTA, NAV_LINKS } from "../../lib/nav";

// Pre-sized assets (sips -Z from the 4267px originals). Served unoptimized:
// the on-demand /_next/image resize of the full-size PNG took ~6s on the
// Netlify image function and the header logo is an LCP candidate.
export const LOGO_SRC = "/logo/complete-logo-header.png";
export const LOGO_COMPACT_SRC = "/logo/shortLogo-small.png";

export const HEADER_HEIGHT = 80;
export const SCROLL_THRESHOLD = 48;

export { NAV_LINKS, NAV_CTA };

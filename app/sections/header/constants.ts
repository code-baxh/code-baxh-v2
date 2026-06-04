export const LOGO_SRC = "/logo/complete-logo.png";
export const LOGO_COMPACT_SRC = "/logo/shortLogo.png";

export const HEADER_HEIGHT = 80;
export const SCROLL_THRESHOLD = 48;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/careers", label: "Careers" },
] as const;

export const NAV_CTA = {
  href: "/contact",
  label: "Contact",
} as const;

import { SITE } from "../../lib/site";
import { PRIMARY_CTA } from "../../lib/site";
import { FOOTER_NAV, LEGAL_LINKS } from "../../lib/nav";

export const LOGO_SRC = "/logo/complete-logo.png";
export const LOGO_COMPACT_SRC = "/logo/shortLogo.png";

export const COMPANY = {
  name: SITE.name,
  tagline:
    "A senior full-stack software studio building production web, SaaS, and AI products for teams shipping to the US and EU.",
  addressLines: SITE.addressLines,
  email: SITE.email,
  phone: SITE.phone,
  phoneDisplay: SITE.phoneDisplay,
} as const;

export const FOOTER_CTA = {
  title: "Let's build your product.",
  description:
    "Book a free, no-obligation discovery call. We'll map the outcome and the fastest path to shipping it.",
  href: PRIMARY_CTA.href,
  label: PRIMARY_CTA.label,
} as const;

export { FOOTER_NAV, LEGAL_LINKS };

export const LINKEDIN_URL = "https://www.linkedin.com/company/code-baxh/";
export const LINKEDIN_ICON_SRC = "/images/Linkedin%20Icons.png";

/** Navigation config shared by header, footer, and sitemap. */

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Blog" },
] as const;

export const NAV_CTA = {
  href: "/contact",
  label: "Book a call",
} as const;

/** Footer link groups. */
export const FOOTER_NAV: { heading: string; links: { href: string; label: string }[] }[] = [
  {
    // All 10 services: half of them previously had NO sitewide internal links
    // (only the /services index linked them), which starves them of crawl
    // priority and PageRank flow.
    heading: "Services",
    links: [
      { href: "/services/saas-development", label: "SaaS Development" },
      { href: "/services/mvp-development", label: "MVP Development" },
      { href: "/services/ai-integration", label: "AI Integration" },
      { href: "/services/ai-chatbot-development", label: "AI Chatbots" },
      { href: "/services/web-development", label: "Web Development" },
      { href: "/services/nextjs-development", label: "Next.js Development" },
      { href: "/services/mobile-app-development", label: "Mobile Apps" },
      { href: "/services/api-backend-development", label: "API & Backend" },
      { href: "/services/stripe-integration", label: "Stripe Integration" },
      { href: "/services/cloud-devops", label: "Cloud & DevOps" },
      { href: "/services", label: "All services" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/work", label: "Work" },
      { href: "/process", label: "Process" },
      { href: "/engagement", label: "Engagement & pricing" },
      { href: "/blog", label: "Blog" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { href: "/contact", label: "Book a discovery call" },
      { href: "/tech-stack", label: "Tech stack" },
    ],
  },
];

export const LEGAL_LINKS = [
  { href: "/policy", label: "Privacy Policy" },
  { href: "/tos", label: "Terms of Service" },
] as const;

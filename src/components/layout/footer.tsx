import Link from "next/link";
import { CookieSettingsButton } from "@/components/cookie-settings-button";
import { gaId } from "@/config/analytics";
import { mainNav, registeredAddress, site } from "@/config/site";
import { services } from "@/content/services";
import { Logo } from "./logo";

function LinkedInIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="size-5" fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

/** Sitewide links to the main commercial service pages (the full list lives on /services and /ai). */
const footerServiceSlugs = [
  "saas-development",
  "mvp-development",
  "web-development",
  "mobile-app-development",
  "custom-software-development",
  "ai-integration",
  "ai-agent-development",
  "ai-chatbot-development",
  "rag-knowledge-assistants",
  "payment-gateway-integration",
];
const footerServices = footerServiceSlugs.map((slug) => {
  const s = services.find((x) => x.slug === slug);
  if (!s) throw new Error(`Footer links to unknown service "${slug}"`);
  return { href: `/services/${s.slug}`, label: s.name };
});

const company = [
  { href: "/process", label: "Process" },
  { href: "/engagement", label: "Engagement & Pricing" },
  { href: "/start-a-project", label: "Start a project" },
  { href: "/contact", label: "Contact us" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid w-full max-w-[92rem] gap-12 px-5 py-16 sm:px-8 md:grid-cols-3 lg:grid-cols-[1.4fr_1fr_1.2fr_1fr_1.2fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-sm text-muted">
            A founder-led {site.descriptor}. Serving Europe, the US, Canada, the UAE and clients worldwide, with engineering in Islamabad.
          </p>
          <a
            href={site.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="CodeBaxh on LinkedIn"
            className="mt-5 inline-flex size-11 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent-text hover:text-accent-text"
          >
            <LinkedInIcon />
          </a>
        </div>
        <nav aria-label="Footer: explore">
          <h2 className="eyebrow">Explore</h2>
          <ul className="mt-4 space-y-1">
            {mainNav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="inline-flex min-h-9 items-center text-sm text-muted hover:text-fg">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Footer: services">
          <h2 className="eyebrow">Services</h2>
          <ul className="mt-4 space-y-1">
            {footerServices.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="inline-flex min-h-9 items-center text-sm text-muted hover:text-fg">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Footer: company">
          <h2 className="eyebrow">Company</h2>
          <ul className="mt-4 space-y-1">
            {company.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="inline-flex min-h-9 items-center text-sm text-muted hover:text-fg">
                  {l.label}
                </Link>
              </li>
            ))}
            {gaId ? (
              <li>
                <CookieSettingsButton className="inline-flex min-h-9 items-center text-sm text-muted hover:text-fg" />
              </li>
            ) : null}
          </ul>
        </nav>
        <div>
          <h2 className="eyebrow">Offices</h2>
          <ul className="mt-4 space-y-4 text-sm text-muted">
            {site.locations.map((l) => (
              <li key={l.city}>
                <span className="block text-fg">
                  {l.city}, {l.country}
                </span>
                {l.role}
              </li>
            ))}
            <li>
              <span className="block text-fg">
                {site.legal.registeredOffice.city}, {site.legal.registeredOffice.regionName},{" "}
                {site.legal.registeredOffice.country}
              </span>
              Registered office
            </li>
          </ul>
          <h2 className="eyebrow mt-8">Contact</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {site.contact.phones.map(({ country, number: phone }) => (
              <li key={country}>
                {country}:{" "}
                <a href={`tel:${phone.replace(/\s/g, "")}`} className="text-fg hover:text-accent-text">
                  {phone}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto w-full max-w-[92rem] px-5 py-6 text-xs text-muted sm:px-8">
          © {new Date().getFullYear()} {site.legal.entityName}. All rights reserved. Registered in{" "}
          {site.legal.jurisdiction}, charter no. {site.legal.charterNumber}. {registeredAddress}.
        </p>
      </div>
    </footer>
  );
}

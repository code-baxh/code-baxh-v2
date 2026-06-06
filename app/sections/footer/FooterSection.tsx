"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ContactInfoItem } from "../shared/ContactInfoItem";
import { useInView } from "../shared/useInView";
import { COMPANY, FOOTER_NAV, LEGAL_LINKS } from "./constants";
import { FooterLinkedIn } from "./FooterLinkedIn";
import { FooterLogo } from "./FooterLogo";

function FooterLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`text-sm transition-colors hover:text-text-primary ${
        isActive
          ? "font-medium text-text-primary"
          : "text-text-secondary"
      }`}
    >
      {label}
    </Link>
  );
}

function revealClass(visible: boolean, delayMs?: number) {
  return [
    visible ? "animate-fade-up" : "translate-y-3 opacity-0",
    delayMs !== undefined ? `delay-${delayMs}` : "",
  ]
    .filter(Boolean)
    .join(" ");
}

export function FooterSection() {
  const { ref, inView } = useInView<HTMLDivElement>(0.12);

  return (
    <footer className="footer-band theme-obsidian border-t border-white/[0.08] pt-20 sm:pt-24 lg:pt-28">
      <div
        ref={ref}
        className="mx-auto max-w-6xl px-5 pb-14 sm:px-8 sm:pb-16 lg:pb-20"
      >
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:gap-10 lg:gap-14">
          <div className={revealClass(inView, 0)}>
            <FooterLogo />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-text-secondary">
              {COMPANY.tagline}
            </p>
            <div className="mt-6">
              <FooterLinkedIn />
            </div>
          </div>

          {FOOTER_NAV.map((group, groupIndex) => (
            <div
              key={group.heading}
              className={revealClass(inView, (100 + groupIndex * 100) as 100 | 200 | 300)}
            >
              <p className="text-sm font-semibold text-text-primary">
                {group.heading}
              </p>
              <ul className="mt-5 space-y-3.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <FooterLink href={link.href} label={link.label} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={`mt-14 grid gap-6 border-t border-white/[0.08] pt-10 sm:grid-cols-3 ${revealClass(inView, 300)}`}>
          <ContactInfoItem icon={MapPin} label="Address">
            <address className="not-italic text-sm leading-relaxed text-text-primary">
              {COMPANY.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </ContactInfoItem>
          <ContactInfoItem icon={Mail} label="Email">
            <a
              href={`mailto:${COMPANY.email}`}
              className="text-sm text-text-primary transition-colors hover:text-accent"
            >
              {COMPANY.email}
            </a>
          </ContactInfoItem>
          <ContactInfoItem icon={Phone} label="Phone">
            <a
              href={`tel:${COMPANY.phone}`}
              className="text-sm text-text-primary transition-colors hover:text-accent"
            >
              {COMPANY.phoneDisplay}
            </a>
          </ContactInfoItem>
        </div>

        <div
          className={`mt-12 flex flex-col gap-6 border-t border-white/[0.08] pt-8 sm:flex-row sm:items-center sm:justify-between ${revealClass(inView, 300)}`}
        >
          <p className="text-sm text-text-muted">
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>

          <nav
            className="flex flex-wrap items-center gap-x-6 gap-y-3 sm:justify-end"
            aria-label="Legal"
          >
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-text-secondary transition-colors hover:text-text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

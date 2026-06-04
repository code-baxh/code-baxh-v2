"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ContactInfoItem } from "../shared/ContactInfoItem";
import { useInView } from "../shared/useInView";
import { COMPANY, LEGAL_LINKS, MENU_LINKS } from "./constants";
import { FooterLinkedIn } from "./FooterLinkedIn";
import { FooterLogo } from "./FooterLogo";

function MenuLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`text-base transition-colors hover:text-text-primary ${
        isActive
          ? "font-medium text-text-primary underline underline-offset-4"
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
        className="mx-auto max-w-5xl px-5 pb-14 sm:px-8 sm:pb-16 lg:pb-20"
      >
        <div className="grid gap-12 md:grid-cols-3 md:gap-14 lg:gap-20 lg:gap-y-16">
          <div className={revealClass(inView, 0)}>
            <FooterLogo />
            <p className="mt-6 max-w-sm text-base leading-relaxed text-text-secondary">
              {COMPANY.tagline}
            </p>
            <div className="mt-6">
              <FooterLinkedIn />
            </div>
          </div>

          <div className={revealClass(inView, 100)}>
            <p className="text-base font-semibold text-text-primary">Menu</p>
            <ul className="mt-5 space-y-4">
              {MENU_LINKS.map((link) => (
                <li key={link.href}>
                  <MenuLink href={link.href} label={link.label} />
                </li>
              ))}
            </ul>
          </div>

          <div className={revealClass(inView, 200)}>
            <p className="text-base font-semibold text-text-primary">
              Contact Us
            </p>
            <div className="mt-5 space-y-6 text-base text-text-secondary">
              <ContactInfoItem icon={MapPin} label="Official Address">
                <address className="not-italic leading-relaxed text-text-primary">
                  {COMPANY.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </ContactInfoItem>

              <ContactInfoItem icon={Mail} label="Email Us">
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-text-primary transition-colors hover:text-accent"
                >
                  {COMPANY.email}
                </a>
              </ContactInfoItem>

              <ContactInfoItem icon={Phone} label="Phone">
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="text-text-primary transition-colors hover:text-accent"
                >
                  {COMPANY.phoneDisplay}
                </a>
              </ContactInfoItem>
            </div>
          </div>
        </div>

        <div
          className={`mt-14 flex flex-col gap-6 border-t border-white/[0.08] pt-8 sm:mt-16 sm:flex-row sm:items-center sm:justify-between sm:pt-10 ${revealClass(inView, 300)}`}
        >
          <p className="text-sm text-text-muted sm:text-base">
            © {new Date().getFullYear()}, {COMPANY.name}
          </p>

          <nav
            className="flex flex-wrap items-center gap-x-6 gap-y-3 sm:justify-end"
            aria-label="Legal"
          >
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-text-secondary transition-colors hover:text-text-primary sm:text-base"
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

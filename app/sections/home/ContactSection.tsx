"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { COMPANY } from "../footer/constants";
import { ContactInfoItem, RevealGroup, RevealItem } from "../shared";

const CONTACT_PATHS = [
  {
    icon: BriefcaseBusiness,
    title: "I need talent",
    description: "Permanent hires, contractors, and specialist recruiting.",
    href: "/contact",
  },
  {
    icon: Code2,
    title: "I need a build",
    description: "Websites, products, and software delivery.",
    href: "/contact",
  },
] as const;

export function ContactSectionContent() {
  return (
    <section
      id="contact"
      className="contact-section theme-obsidian relative overflow-hidden border-t border-white/[0.06] bg-surface"
    >
      <div className="contact-section-bg pointer-events-none absolute inset-0" aria-hidden />
      <div className="contact-section-glow pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32 lg:py-36">
        <RevealGroup threshold={0.1}>
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 xl:gap-24">
            <div className="max-w-xl">
              <RevealItem index={1}>
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-text-muted">
                  Get in touch
                </p>
              </RevealItem>

              <RevealItem index={2}>
                <h2 className="mt-5 text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl lg:text-[3.25rem] lg:leading-[1.05]">
                  Tell us what you&apos;re trying to move.
                </h2>
              </RevealItem>

              <RevealItem index={3}>
                <p className="mt-6 max-w-md text-base leading-relaxed text-text-secondary md:text-lg">
                  Hiring, contractor support, or a product to ship — share the
                  context and we&apos;ll point the next step in the right
                  direction.
                </p>
              </RevealItem>

              <RevealItem index={4}>
                <Link
                  href={`mailto:${COMPANY.email}`}
                  className="group mt-10 inline-flex items-center gap-2 text-sm font-medium text-text-primary transition-colors hover:text-accent"
                >
                  <Mail className="size-4 text-accent" strokeWidth={1.75} aria-hidden />
                  {COMPANY.email}
                  <ArrowUpRight
                    className="size-4 transition-transform group-hover:-translate-y-px group-hover:translate-x-px"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                </Link>
              </RevealItem>
            </div>

            <div className="flex flex-col gap-5">
              {CONTACT_PATHS.map((path, pathIndex) => {
                const Icon = path.icon;

                return (
                  <RevealItem key={path.title} index={(pathIndex + 5) as 5 | 6}>
                    <Link
                      href={path.href}
                      className="contact-path-card group flex items-center justify-between gap-6 rounded-xl border border-white/[0.08] bg-surface-elevated/40 px-6 py-5 transition-[border-color,background-color] hover:border-white/[0.14] hover:bg-surface-elevated/70 md:px-7 md:py-6"
                    >
                      <div className="flex min-w-0 items-start gap-4">
                        <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-surface-muted/60">
                          <Icon
                            className="size-4 text-accent"
                            strokeWidth={1.75}
                            aria-hidden
                          />
                        </span>
                        <div className="min-w-0">
                          <p className="text-base font-medium text-text-primary md:text-lg">
                            {path.title}
                          </p>
                          <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                            {path.description}
                          </p>
                        </div>
                      </div>
                      <ArrowRight
                        className="size-4 shrink-0 text-text-muted transition-[color,transform] group-hover:translate-x-0.5 group-hover:text-accent"
                        strokeWidth={1.75}
                        aria-hidden
                      />
                    </Link>
                  </RevealItem>
                );
              })}

              <RevealItem index={7}>
                <div className="contact-details-panel mt-2 rounded-xl border border-white/[0.06] bg-surface-elevated/30 px-6 py-6 md:px-7 md:py-7">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <ContactInfoItem
                      icon={MapPin}
                      label="Address"
                      labelClassName="text-[11px] font-medium uppercase tracking-[0.14em] text-text-muted"
                    >
                      <address className="not-italic text-sm leading-relaxed text-text-primary">
                        {COMPANY.addressLines.map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))}
                      </address>
                    </ContactInfoItem>

                    <ContactInfoItem
                      icon={Phone}
                      label="Phone"
                      labelClassName="text-[11px] font-medium uppercase tracking-[0.14em] text-text-muted"
                    >
                      <a
                        href={`tel:${COMPANY.phone}`}
                        className="text-sm text-text-primary transition-colors hover:text-accent"
                      >
                        {COMPANY.phoneDisplay}
                      </a>
                    </ContactInfoItem>
                  </div>
                </div>
              </RevealItem>
            </div>
          </div>
        </RevealGroup>
      </div>
    </section>
  );
}

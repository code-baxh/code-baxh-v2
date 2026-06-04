import Link from "next/link";
import { BriefcaseBusiness, Code2, Mail, MapPin, Phone } from "lucide-react";
import { COMPANY } from "../footer/constants";
import {
  ContactInfoItem,
  Reveal,
  SectionHeading,
  SectionLink,
  SectionShell,
} from "../shared";

const PATHS = [
  {
    icon: BriefcaseBusiness,
    title: "I need talent",
    href: "/contact",
  },
  {
    icon: Code2,
    title: "I need a build",
    href: "/contact",
  },
] as const;

export function HomeContactSection() {
  return (
    <SectionShell id="contact" index="07" label="Contact" theme="obsidian">
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <Reveal>
          <SectionHeading
            size="large"
            eyebrow="Get in touch"
            title="Tell us what you are trying to move."
            description="Hiring, contractor packages, or a project to ship — we will point the next step in the right direction."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {PATHS.map(({ icon: Icon, title, href }, index) => (
              <Reveal
                key={title}
                delay={(index * 100) as 0 | 100}
                className="kinetic-card rounded-2xl border border-border bg-surface-elevated p-6"
              >
                <Icon className="size-6 text-accent" strokeWidth={1.75} aria-hidden />
                <p className="mt-5 text-lg font-semibold text-text-primary">
                  {title}
                </p>
                <Link
                  href={href}
                  className="mt-4 inline-flex text-sm font-medium text-text-secondary transition-colors hover:text-accent"
                >
                  Start here
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-10">
            <SectionLink href="/contact" label="Open contact page" />
          </div>
        </Reveal>

        <Reveal delay={200} className="rounded-3xl border border-border bg-surface-elevated p-7 md:p-9">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
            Direct details
          </p>
          <div className="mt-8 space-y-7">
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
        </Reveal>
      </div>
    </SectionShell>
  );
}

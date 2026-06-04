import type { Metadata } from "next";
import { BriefcaseBusiness, Code2, Mail, MapPin, Phone } from "lucide-react";
import { CtaSection } from "../sections/cta";
import { COMPANY } from "../sections/footer/constants";
import { FooterSection } from "../sections/footer";
import { HeaderSection } from "../sections/header";
import { ContactInfoItem, PageHero, Reveal } from "../sections/shared";

const CONTACT_PATHS = [
  {
    icon: BriefcaseBusiness,
    title: "I need talent",
    body: "Tell us the role, seniority, location, and hiring timeline.",
    href: "mailto:code.baxh@gmail.com?subject=Hiring%20with%20Code%20Baxh",
  },
  {
    icon: Code2,
    title: "I need a build",
    body: "Tell us what you want to ship, where you are stuck, and what success looks like.",
    href: "mailto:code.baxh@gmail.com?subject=Build%20with%20Code%20Baxh",
  },
] as const;

export const metadata: Metadata = {
  title: "Contact — Code Baxh",
  description:
    "Contact Code Baxh for recruitment, contractor packages, websites, and software builds.",
};

export default function ContactPage() {
  return (
    <>
      <HeaderSection />
      <main>
        <PageHero
          eyebrow="Contact"
          title="Tell us what you are trying to move."
          description="Hiring need, contractor package, website, or product build — send the context and we will point the next step in the right direction."
          primaryHref={`mailto:${COMPANY.email}`}
          primaryLabel="Email Code Baxh"
          secondaryHref="/services"
          secondaryLabel="View services"
        />

        <section className="theme-paper border-t border-border bg-surface py-20 md:py-28">
          <div className="mx-auto grid max-w-5xl gap-10 px-5 sm:px-8 md:grid-cols-[0.95fr_1.05fr] md:gap-16">
            <Reveal className="rounded-3xl border border-border bg-surface-elevated p-7 md:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
                Direct details
              </p>
              <div className="mt-8 space-y-7">
                <ContactInfoItem
                  icon={MapPin}
                  label="Official Address"
                  labelClassName="text-xs font-semibold uppercase tracking-[0.12em] text-text-muted"
                >
                  <address className="not-italic leading-relaxed text-text-primary">
                    {COMPANY.addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </ContactInfoItem>

                <ContactInfoItem
                  icon={Mail}
                  label="Email Us"
                  labelClassName="text-xs font-semibold uppercase tracking-[0.12em] text-text-muted"
                >
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="font-medium text-text-primary transition-colors hover:text-accent"
                  >
                    {COMPANY.email}
                  </a>
                </ContactInfoItem>

                <ContactInfoItem
                  icon={Phone}
                  label="Phone"
                  labelClassName="text-xs font-semibold uppercase tracking-[0.12em] text-text-muted"
                >
                  <a
                    href={`tel:${COMPANY.phone}`}
                    className="font-medium text-text-primary transition-colors hover:text-accent"
                  >
                    {COMPANY.phoneDisplay}
                  </a>
                </ContactInfoItem>
              </div>
            </Reveal>

            <div className="space-y-5">
              {CONTACT_PATHS.map((path, index) => {
                const Icon = path.icon;
                return (
                  <Reveal
                    key={path.title}
                    delay={(index * 100) as 0 | 100}
                    className="kinetic-card rounded-3xl border border-border bg-surface-elevated p-7 md:p-8"
                  >
                    <Icon
                      className="size-7 text-accent"
                      strokeWidth={1.75}
                      aria-hidden
                    />
                    <h2 className="mt-6 text-2xl font-semibold tracking-tight text-text-primary">
                      {path.title}
                    </h2>
                    <p className="mt-3 text-base leading-relaxed text-text-secondary">
                      {path.body}
                    </p>
                    <a
                      href={path.href}
                      className="mt-6 inline-flex rounded-full bg-text-primary px-6 py-3 text-sm font-medium text-surface transition-opacity hover:opacity-90"
                    >
                      Start this conversation
                    </a>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <CtaSection />
      <FooterSection />
    </>
  );
}

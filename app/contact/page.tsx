import type { Metadata } from "next";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { CtaSection } from "../sections/cta";
import { FooterSection } from "../sections/footer";
import { HeaderSection } from "../sections/header";
import { ContactInfoItem, PageHero, Reveal } from "../sections/shared";
import { BookingEmbed, Breadcrumbs } from "../sections/marketing";
import { JsonLd } from "../lib/JsonLd";
import { breadcrumbSchema } from "../lib/schema";
import { SITE } from "../lib/site";

export const metadata: Metadata = {
  title: "Contact — Book a Free Discovery Call",
  description:
    "Book a free, no-obligation discovery call with CodeBaxh, or reach us by email. We build web, SaaS, and AI products for startups and companies worldwide.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <HeaderSection />
      <main>
        <PageHero
          eyebrow="Contact"
          title="Let's build your product."
          description="Book a free discovery call and we'll map your outcome and the fastest path to shipping it — no obligation, just a clear next step."
        />

        <section className="theme-paper border-t border-border bg-surface py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <Breadcrumbs
              items={[
                { name: "Home", path: "/" },
                { name: "Contact", path: "/contact" },
              ]}
            />
            <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-14">
              <Reveal>
                <BookingEmbed />
              </Reveal>

              <Reveal delay={100} className="space-y-7 rounded-3xl border border-border bg-surface-elevated p-7 md:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
                  Direct details
                </p>

                <ContactInfoItem
                  icon={Mail}
                  label="Email"
                  labelClassName="text-xs font-semibold uppercase tracking-[0.12em] text-text-muted"
                >
                  <a
                    href={`mailto:${SITE.email}`}
                    className="font-medium text-text-primary transition-colors hover:text-accent"
                  >
                    {SITE.email}
                  </a>
                </ContactInfoItem>

                <ContactInfoItem
                  icon={Phone}
                  label="Phone"
                  labelClassName="text-xs font-semibold uppercase tracking-[0.12em] text-text-muted"
                >
                  <a
                    href={`tel:${SITE.phone}`}
                    className="font-medium text-text-primary transition-colors hover:text-accent"
                  >
                    {SITE.phoneDisplay}
                  </a>
                </ContactInfoItem>

                <ContactInfoItem
                  icon={MapPin}
                  label="Location"
                  labelClassName="text-xs font-semibold uppercase tracking-[0.12em] text-text-muted"
                >
                  <address className="not-italic leading-relaxed text-text-primary">
                    {SITE.addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </ContactInfoItem>

                <ContactInfoItem
                  icon={Clock}
                  label="Availability"
                  labelClassName="text-xs font-semibold uppercase tracking-[0.12em] text-text-muted"
                >
                  <p className="leading-relaxed text-text-primary">
                    {SITE.timezoneNote}
                  </p>
                </ContactInfoItem>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <CtaSection />
      <FooterSection />
    </>
  );
}

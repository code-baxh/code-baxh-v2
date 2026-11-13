import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { ContactDetails } from "@/components/contact/contact-aside";
import { ContactForm } from "@/components/contact/contact-form";
import { ButtonLink } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact Us: Get in Touch",
  description:
    "Contact CodeBaxh with a question, a partnership idea or a general enquiry. Send a short message and the team will reply, usually within one working day.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Contact", path: "/contact" }]}
        eyebrow="Contact us"
        title="Get in touch."
        lead="A question, a partnership idea or a quick hello. Send us a message and we will reply, usually within one working day."
      />
      <Section>
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.4fr_1fr]">
          <ContactForm />
          <aside className="space-y-6">
            <div className="card p-6 text-left sm:p-8">
              <h2 className="text-xl font-semibold">Have a project in mind?</h2>
              <p className="mt-3 text-muted">
                Use the project form to share scope, budget and timeline, and we will come back with a plan and an
                estimate.
              </p>
              <ButtonLink href="/start-a-project" className="mt-6 w-full">
                Start a project <ArrowRight aria-hidden className="size-4" />
              </ButtonLink>
            </div>
            <ContactDetails />
          </aside>
        </div>
      </Section>
    </>
  );
}

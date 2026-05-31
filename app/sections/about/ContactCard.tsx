import { SectionHeading } from "../shared";

export function ContactCard() {
  return (
    <div
      id="contact"
      className="rounded-2xl border border-border bg-surface-elevated p-7 md:p-9"
    >
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something."
        description="Tell us about your project — we'll reply within one business day."
      />
      <a
        href="mailto:hello@codebaxh.com"
        className="mt-7 inline-flex rounded-full bg-text-primary px-6 py-3 text-sm font-medium text-surface transition-opacity hover:opacity-90 md:text-base"
      >
        hello@codebaxh.com
      </a>
    </div>
  );
}

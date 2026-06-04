import { Mail, MapPin, Phone } from "lucide-react";
import { ContactInfoItem } from "../shared/ContactInfoItem";

export function ContactCard() {
  return (
    <div
      id="contact"
      className="rounded-2xl border border-border bg-surface-elevated p-7 md:p-9"
    >
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
        Contact
      </p>
      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-text-primary md:text-3xl">
        Let&apos;s talk talent or your next build.
      </h3>
      <p className="mt-4 text-base leading-relaxed text-text-secondary">
        Hiring, contractor packages, or a project to ship — reach out and
        we&apos;ll reply within one business day.
      </p>

      <div className="mt-7 space-y-5 text-sm md:space-y-6 md:text-base">
        <ContactInfoItem
          icon={MapPin}
          label="Official Address"
          labelClassName="text-xs font-semibold uppercase tracking-[0.12em] text-text-muted"
        >
          <p className="font-medium leading-relaxed text-text-primary">
            306, Ghouri Town, 46000
            <br />
            Islamabad, Pakistan
          </p>
        </ContactInfoItem>

        <ContactInfoItem
          icon={Mail}
          label="Email Us"
          labelClassName="text-xs font-semibold uppercase tracking-[0.12em] text-text-muted"
        >
          <a
            href="mailto:code.baxh@gmail.com"
            className="font-medium text-text-primary transition-colors hover:text-accent"
          >
            code.baxh@gmail.com
          </a>
        </ContactInfoItem>

        <ContactInfoItem
          icon={Phone}
          label="Phone"
          labelClassName="text-xs font-semibold uppercase tracking-[0.12em] text-text-muted"
        >
          <a
            href="tel:+923435527709"
            className="font-medium text-text-primary transition-colors hover:text-accent"
          >
            +92 343 552 7709
          </a>
        </ContactInfoItem>
      </div>

      <a
        href="mailto:code.baxh@gmail.com"
        className="mt-8 inline-flex rounded-full bg-text-primary px-6 py-3 text-sm font-medium text-surface transition-opacity hover:opacity-90 md:text-base"
      >
        Send a message
      </a>
    </div>
  );
}

import Link from "next/link";
import { CalendarCheck, Mail } from "lucide-react";
import { BOOKING_URL, SITE } from "../../lib/site";

/**
 * Booking-first conversion block. When BOOKING_URL (Cal.com / Calendly) is set,
 * embeds the scheduler directly (instant booking lifts conversions ~30%+).
 * Falls back to a clear email CTA until the link is configured.
 */
export function BookingEmbed() {
  if (BOOKING_URL) {
    return (
      <div className="overflow-hidden rounded-3xl border border-border bg-surface-elevated">
        <iframe
          src={BOOKING_URL}
          title="Book a discovery call"
          className="h-[680px] w-full"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-border bg-surface-elevated p-8 text-center md:p-12">
      <CalendarCheck className="mx-auto size-9 text-accent" strokeWidth={1.75} aria-hidden />
      <h3 className="mt-5 text-2xl font-semibold tracking-tight text-text-primary">
        Book a free discovery call
      </h3>
      <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-text-secondary">
        A 30-minute, no-obligation call to map your outcome and the fastest path
        to shipping it. {SITE.timezoneNote}.
      </p>
      <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a
          href={`mailto:${SITE.email}?subject=Discovery%20call%20with%20${SITE.name}`}
          className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-[#0d0d0d] transition-[transform,opacity] hover:-translate-y-px hover:opacity-90 md:text-base"
        >
          <Mail className="size-4" strokeWidth={2} aria-hidden />
          Email us to book
        </a>
        <Link
          href="/work"
          className="rounded-full border border-border px-7 py-3.5 text-sm font-medium text-text-primary transition-colors hover:bg-surface-muted md:text-base"
        >
          See our work
        </Link>
      </div>
      {/* TODO: set NEXT_PUBLIC_BOOKING_URL (Cal.com/Calendly) to embed the scheduler here. */}
    </div>
  );
}

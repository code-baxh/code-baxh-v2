"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FOOTER_CTA, COMPANY } from "../footer/constants";
import { RevealGroup, RevealItem } from "../shared";

export function CtaSection() {
  return (
    <section
      id="get-started"
      className="cta-band theme-obsidian relative overflow-hidden border-t border-white/[0.06]"
    >
      <div className="cta-section-bg pointer-events-none absolute inset-0" aria-hidden />
      <div className="cta-section-glow pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-5 py-28 sm:px-8 sm:py-32 md:py-40 lg:py-44">
        <RevealGroup threshold={0.18} className="mx-auto max-w-3xl text-center">
          <RevealItem index={1}>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-text-muted">
              Ready when you are
            </p>
          </RevealItem>

          <RevealItem index={2}>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl md:text-6xl md:leading-[1.02]">
              {FOOTER_CTA.title}
            </h2>
          </RevealItem>

          <RevealItem index={3}>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
              {FOOTER_CTA.description}
            </p>
          </RevealItem>

          <RevealItem index={4}>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href={FOOTER_CTA.href}
                className="cta-primary-button inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-[#0d0d0d] sm:text-base"
              >
                {FOOTER_CTA.label}
                <ArrowRight className="size-4" strokeWidth={2} aria-hidden />
              </Link>
              <Link
                href={`mailto:${COMPANY.email}`}
                className="text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
              >
                Or email us directly
              </Link>
            </div>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}

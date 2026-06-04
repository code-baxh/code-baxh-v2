"use client";

import Image from "next/image";
import Link from "next/link";
import { FOOTER_CTA, LOGO_COMPACT_SRC } from "../footer/constants";
import { useInView } from "../shared/useInView";

function revealClass(visible: boolean, delayMs?: number) {
  return [
    visible ? "animate-fade-up" : "translate-y-4 opacity-0",
    delayMs !== undefined ? `delay-${delayMs}` : "",
  ]
    .filter(Boolean)
    .join(" ");
}

export function CtaSection() {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);

  return (
    <section
      id="get-started"
      className="cta-band theme-obsidian snap-section border-t border-white/[0.06] py-28 sm:py-32 md:py-36 lg:py-44"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div
          ref={ref}
          className={`cta-section-card cta-section-card-inner mx-auto max-w-4xl rounded-[1.75rem] px-6 py-14 text-center sm:px-10 sm:py-16 md:px-14 md:py-20 ${
            inView ? "cta-section-card--visible" : "translate-y-8 opacity-0"
          }`}
        >
          <div
            className={`mx-auto mb-8 flex justify-center ${revealClass(inView, 100)}`}
          >
            <span className="cta-logo-float relative block size-14 sm:size-16">
              <Image
                src={LOGO_COMPACT_SRC}
                alt=""
                fill
                className="object-contain"
                aria-hidden
              />
            </span>
          </div>

          <p
            className={`mx-auto flex max-w-fit items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-text-muted ${revealClass(inView, 200)}`}
          >
            <span className="h-px w-8 bg-white/10" aria-hidden />
            Get in touch
            <span className="h-px w-8 bg-white/10" aria-hidden />
          </p>

          <h2
            className={`mx-auto mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-text-primary sm:text-4xl md:text-[2.5rem] ${revealClass(inView, 300)}`}
          >
            {FOOTER_CTA.title}
          </h2>

          <p
            className={`mx-auto mt-5 max-w-lg text-base leading-relaxed text-text-secondary sm:text-lg ${revealClass(inView, 400)}`}
          >
            {FOOTER_CTA.description}
          </p>

          <div className={`mt-10 ${revealClass(inView, 500)}`}>
            <Link
              href={FOOTER_CTA.href}
              className="cta-section-button inline-flex rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-[#0d0d0d] sm:text-base"
            >
              {FOOTER_CTA.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

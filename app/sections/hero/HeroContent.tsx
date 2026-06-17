"use client";

import Link from "next/link";
import { useIntroReady } from "../intro";

export function HeroActions() {
  return (
    <>
      <Link
        href="/contact"
        className="rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-[#0d0d0d] transition-[transform,opacity] hover:-translate-y-px hover:opacity-90 md:text-base"
      >
        Book a free discovery call
      </Link>
      <Link
        href="/work"
        className="rounded-full border border-text-primary/25 bg-transparent px-7 py-3.5 text-sm font-medium text-text-primary transition-colors hover:border-text-primary/50 hover:bg-text-primary/5 md:text-base"
      >
        See our work
      </Link>
    </>
  );
}

export function HeroContent() {
  const introReady = useIntroReady();

  return (
    <div
      className={`max-w-2xl ${introReady ? "animate-hero-reveal" : "opacity-0"}`}
      style={{ animationDelay: introReady ? "280ms" : undefined }}
    >
      <p
        className={`hero-eyebrow mb-6 text-xs font-medium uppercase tracking-[0.25em] text-text-muted sm:mb-8 md:text-sm ${
          introReady ? "animate-fade-up" : "opacity-0"
        }`}
        style={{ animationDelay: introReady ? "420ms" : undefined }}
      >
        Software development agency
      </p>

      <h1
        className={`text-2xl font-semibold leading-[1.08] tracking-tight text-text-primary sm:text-4xl md:text-5xl lg:text-[3.75rem] lg:leading-[1.02] ${
          introReady ? "animate-fade-up" : "opacity-0"
        }`}
        style={{ animationDelay: introReady ? "500ms" : undefined }}
      >
        We build web, mobile, SaaS &amp; AI products that ship.
      </h1>

      <p
        className={`mt-8 max-w-xl text-base leading-relaxed text-text-secondary sm:mt-12 md:text-lg lg:text-xl ${
          introReady ? "animate-fade-up" : "opacity-0"
        }`}
        style={{ animationDelay: introReady ? "580ms" : undefined }}
      >
        CodeBaxh is a software development agency. Our team turns your idea into
        a real, working product — web and mobile apps, SaaS platforms, and AI
        features — and ships it fast. Tell us what you&apos;re building.
      </p>

      <div
        className={`mt-8 flex flex-wrap gap-3 sm:mt-14 sm:gap-4 ${
          introReady ? "animate-fade-up" : "opacity-0"
        }`}
        style={{ animationDelay: introReady ? "660ms" : undefined }}
      >
        <HeroActions />
      </div>

      <dl
        className={`mt-12 grid grid-cols-3 gap-4 border-t border-border pt-8 sm:mt-16 sm:gap-6 sm:pt-12 ${
          introReady ? "animate-fade-up" : "opacity-0"
        }`}
        style={{ animationDelay: introReady ? "740ms" : undefined }}
      >
        {[
          { term: "SaaS", detail: "MVP to scale, multi-tenant" },
          { term: "AI / LLM", detail: "RAG & agents in production" },
          { term: "Web & Mobile", detail: "Next.js, React, React Native" },
        ].map((item) => (
          <div key={item.term}>
            <dt className="text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-text-primary sm:text-[0.6875rem]">
              {item.term}
            </dt>
            <dd className="mt-1 text-[0.7rem] leading-relaxed text-text-muted sm:mt-1.5 sm:text-xs">
              {item.detail}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

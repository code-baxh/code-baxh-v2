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
        className={`hero-eyebrow mb-6 text-xs font-medium uppercase tracking-[0.25em] text-text-muted md:text-sm ${
          introReady ? "animate-fade-up" : "opacity-0"
        }`}
        style={{ animationDelay: introReady ? "420ms" : undefined }}
      >
        Full-stack web, SaaS &amp; AI development
      </p>

      <h1
        className={`text-4xl font-semibold leading-[1.08] tracking-tight text-text-primary sm:text-5xl lg:text-[3.75rem] lg:leading-[1.02] ${
          introReady ? "animate-fade-up" : "opacity-0"
        }`}
        style={{ animationDelay: introReady ? "500ms" : undefined }}
      >
        We build production-grade web, SaaS, and AI products — fast.
      </h1>

      <p
        className={`mt-8 max-w-xl text-lg leading-relaxed text-text-secondary md:text-xl ${
          introReady ? "animate-fade-up" : "opacity-0"
        }`}
        style={{ animationDelay: introReady ? "580ms" : undefined }}
      >
        CodeBaxh is a senior full-stack software studio. We turn ideas into
        shipped products — multi-tenant SaaS, production AI, and the web and
        mobile apps around them.
      </p>

      <div
        className={`mt-10 flex flex-wrap gap-3 ${
          introReady ? "animate-fade-up" : "opacity-0"
        }`}
        style={{ animationDelay: introReady ? "660ms" : undefined }}
      >
        <HeroActions />
      </div>

      <dl
        className={`mt-12 grid grid-cols-3 gap-5 border-t border-border pt-10 ${
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
            <dt className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-text-primary">
              {item.term}
            </dt>
            <dd className="mt-1.5 text-xs leading-relaxed text-text-muted">
              {item.detail}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

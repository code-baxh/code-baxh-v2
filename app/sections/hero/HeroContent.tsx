"use client";

import { useIntroReady } from "../intro";

export function HeroActions() {
  return (
    <>
      <a
        href="/services"
        className="rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-[#0d0d0d] transition-[transform,opacity] hover:-translate-y-px hover:opacity-90 md:text-base"
      >
        Find talent
      </a>
      <a
        href="/contact"
        className="rounded-full border border-text-primary/25 bg-transparent px-7 py-3.5 text-sm font-medium text-text-primary transition-colors hover:border-text-primary/50 hover:bg-text-primary/5 md:text-base"
      >
        Start a project
      </a>
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
        Tech recruitment &amp; software studio
      </p>

      <h1
        className={`text-4xl font-semibold leading-[1.08] tracking-tight text-text-primary sm:text-5xl lg:text-[3.75rem] lg:leading-[1.02] ${
          introReady ? "animate-fade-up" : "opacity-0"
        }`}
        style={{ animationDelay: introReady ? "500ms" : undefined }}
      >
        Build the team. Ship the thing. Keep momentum visible.
      </h1>

      <p
        className={`mt-8 max-w-xl text-lg leading-relaxed text-text-secondary md:text-xl ${
          introReady ? "animate-fade-up" : "opacity-0"
        }`}
        style={{ animationDelay: introReady ? "580ms" : undefined }}
      >
        Code Baxh helps companies hire technical talent and launch polished
        digital products with the same calm, focused operating rhythm.
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
          { term: "01 Talent", detail: "Specialist tech search" },
          { term: "02 Build", detail: "Websites and software" },
          { term: "03 Motion", detail: "Short loops, clear progress" },
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

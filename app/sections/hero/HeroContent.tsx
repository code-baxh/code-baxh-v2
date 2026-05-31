"use client";

import { useIntroReady } from "../intro";

export function HeroActions() {
  return (
    <>
      <a
        href="#work"
        className="rounded-full bg-text-primary px-7 py-3.5 text-sm font-medium text-surface transition-opacity hover:opacity-90 md:text-base"
      >
        View our work
      </a>
      <a
        href="#contact"
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
      className={`max-w-xl ${introReady ? "animate-hero-reveal" : "opacity-0"}`}
      style={{ animationDelay: introReady ? "280ms" : undefined }}
    >
      <p
        className={`hero-eyebrow mb-6 text-xs font-medium uppercase tracking-[0.25em] text-text-muted md:text-sm ${
          introReady ? "animate-fade-up" : "opacity-0"
        }`}
        style={{ animationDelay: introReady ? "420ms" : undefined }}
      >
        Programming studio
      </p>

      <h1
        className={`text-4xl font-semibold leading-[1.1] tracking-tight text-text-primary md:text-5xl lg:text-[3.25rem] lg:leading-[1.05] ${
          introReady ? "animate-fade-up" : "opacity-0"
        }`}
        style={{ animationDelay: introReady ? "500ms" : undefined }}
      >
        We build websites &amp; software together.
      </h1>

      <p
        className={`mt-6 max-w-md text-lg leading-relaxed text-text-secondary md:text-xl ${
          introReady ? "animate-fade-up" : "opacity-0"
        }`}
        style={{ animationDelay: introReady ? "580ms" : undefined }}
      >
        We collaborate with teams to ship digital products that actually work.
      </p>

      <div
        className={`mt-8 flex flex-wrap gap-3 ${
          introReady ? "animate-fade-up" : "opacity-0"
        }`}
        style={{ animationDelay: introReady ? "660ms" : undefined }}
      >
        <HeroActions />
      </div>
    </div>
  );
}

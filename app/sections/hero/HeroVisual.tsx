"use client";

import { useIntroReady } from "../intro";

export function HeroVisual() {
  const introReady = useIntroReady();

  if (!introReady) return null;

  return (
    <div
      className="relative hidden animate-hero-reveal lg:block"
      style={{ animationDelay: "320ms" }}
      aria-hidden
    >
      <div className="hero-grid absolute -inset-6 rounded-3xl opacity-40" />

      <div className="relative overflow-hidden rounded-2xl border border-border bg-surface-elevated/80 p-6 shadow-2xl md:p-8">
        <div className="mb-5 flex items-center gap-2">
          <span className="intro-dot intro-dot-red" />
          <span className="intro-dot intro-dot-yellow" />
          <span className="intro-dot intro-dot-green" />
          <span className="ml-2 font-mono text-xs text-text-muted">studio.ts</span>
        </div>

        <pre className="intro-code-block font-mono text-sm leading-relaxed">
          <code>
            <span className="intro-code-comment">{"// codebaxh.studio\n"}</span>
            <span className="intro-code-kw">import</span>
            <span className="intro-code-plain">{" { "}</span>
            <span className="intro-code-fn">ship</span>
            <span className="intro-code-plain">{" } "}</span>
            <span className="intro-code-kw">from</span>
            <span className="intro-code-str">{" \"@codebaxh/core\""}</span>
            <span className="intro-code-plain">;</span>
          </code>
        </pre>
      </div>
    </div>
  );
}

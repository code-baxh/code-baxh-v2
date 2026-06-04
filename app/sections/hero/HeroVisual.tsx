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

      <div className="relative overflow-hidden rounded-3xl border border-border bg-surface-elevated/80 p-6 shadow-2xl md:p-8">
        <div className="mb-5 flex items-center gap-2">
          <span className="intro-dot intro-dot-red" />
          <span className="intro-dot intro-dot-yellow" />
          <span className="intro-dot intro-dot-green" />
          <span className="ml-2 font-mono text-xs text-text-muted">
            live.pipeline
          </span>
        </div>

        <pre className="intro-code-block font-mono text-sm leading-relaxed">
          <code>
            <span className="intro-code-comment">{"// codebaxh operating loop\n"}</span>
            <span className="intro-code-kw">const</span>
            <span className="intro-code-plain">{" signal = "}</span>
            <span className="intro-code-str">{"\"hire + build\""}</span>
            <span className="intro-code-plain">{";\n"}</span>
            <span className="intro-code-fn">matchTalent</span>
            <span className="intro-code-plain">{"(market, team);\n"}</span>
            <span className="intro-code-fn">shipProduct</span>
            <span className="intro-code-plain">{"(scope, sprint);"}</span>
          </code>
        </pre>

        <div className="mt-8 grid gap-3">
          {[
            ["Talent search", "Shortlist moving"],
            ["Contractor package", "Compliance checked"],
            ["Software build", "Sprint in progress"],
          ].map(([title, status]) => (
            <div
              key={title}
              className="kinetic-card rounded-2xl border border-border bg-surface-muted/80 p-4"
            >
              <div className="flex items-center justify-between gap-6">
                <p className="text-sm font-medium text-text-primary">{title}</p>
                <p className="text-xs text-accent">{status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

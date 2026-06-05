"use client";

import { useIntroReady } from "../intro";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderNav } from "./HeaderNav";

const BAR_CLASS =
  "mx-auto flex h-16 w-full items-center justify-between gap-3 px-4 sm:h-[5.25rem] sm:gap-6 sm:px-6 lg:px-8";

export function HeaderSection() {
  const introReady = useIntroReady();

  return (
    <header
      className={`theme-obsidian sticky top-0 z-50 w-full bg-surface pointer-events-auto ${
        introReady ? "animate-fade-up" : "opacity-0"
      }`}
      style={{ animationDelay: introReady ? "120ms" : undefined }}
    >
      <div className={`${BAR_CLASS} max-w-5xl bg-transparent`}>
        <HeaderLogo introReady={introReady} />
        <HeaderNav introReady={introReady} />
      </div>
    </header>
  );
}

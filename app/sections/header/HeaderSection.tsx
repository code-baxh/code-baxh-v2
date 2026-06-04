"use client";

import { useEffect, useState } from "react";
import { useIntroReady } from "../intro";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderNav } from "./HeaderNav";
import { SCROLL_THRESHOLD } from "./constants";

const BAR_CLASS =
  "mx-auto flex h-16 w-full items-center justify-between gap-3 px-4 sm:h-[5.25rem] sm:gap-6 sm:px-6 lg:px-8";

export function HeaderSection() {
  const introReady = useIntroReady();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`theme-obsidian sticky top-0 z-50 w-full ${
        scrolled
          ? "pointer-events-none bg-transparent py-2 sm:py-3"
          : "pointer-events-auto bg-surface"
      } ${introReady ? "animate-fade-up" : "opacity-0"}`}
      style={{ animationDelay: introReady ? "120ms" : undefined }}
    >
      <div
        className={`header-pill ${BAR_CLASS} max-w-5xl transition-opacity duration-150 ease-out ${
          scrolled
            ? "pointer-events-auto max-w-[min(calc(100%-1.5rem),64rem)] rounded-[2rem] border border-white/[0.08] bg-[#0d0d0d] shadow-[0_8px_32px_rgb(0_0_0/0.35)]"
            : "bg-transparent"
        }`}
      >
        <HeaderLogo introReady={introReady} />
        <HeaderNav introReady={introReady} />
      </div>
    </header>
  );
}

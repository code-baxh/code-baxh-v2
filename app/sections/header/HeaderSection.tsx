"use client";

import { useEffect, useState } from "react";
import { useIntroReady } from "../intro";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderNav } from "./HeaderNav";

const BAR_CLASS =
  "mx-auto flex h-16 w-full items-center justify-between gap-3 px-4 sm:h-[5.25rem] sm:gap-6 sm:px-6 lg:px-8";

export function HeaderSection() {
  const introReady = useIntroReady();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > 8;
      setScrolled((prev) => (prev === next ? prev : next));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`site-header theme-obsidian sticky top-0 z-50 w-full pointer-events-auto ${
        scrolled ? "site-header--scrolled" : ""
      } ${introReady ? "animate-fade-up" : "opacity-0"}`}
      style={{ animationDelay: introReady ? "120ms" : undefined }}
    >
      <div className={`${BAR_CLASS} max-w-5xl bg-transparent`}>
        <HeaderLogo introReady={introReady} />
        <HeaderNav introReady={introReady} />
      </div>
    </header>
  );
}

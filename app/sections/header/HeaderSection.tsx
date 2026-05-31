"use client";

import { useEffect, useState } from "react";
import { useIntroReady } from "../intro";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderNav } from "./HeaderNav";

export function HeaderSection() {
  const introReady = useIntroReady();
  const [overLight, setOverLight] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);

      const paperSection = document.getElementById("services");
      if (paperSection) {
        const headerHeight = 72;
        setOverLight(paperSection.getBoundingClientRect().top <= headerHeight);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`header-glass sticky top-0 z-50 w-full transition-[background,border-color,backdrop-filter] duration-500 ${
        overLight ? "theme-paper" : "theme-obsidian"
      } ${scrolled ? "header-glass-scrolled" : ""} ${
        introReady ? "animate-fade-up" : "opacity-0"
      }`}
      style={{ animationDelay: introReady ? "160ms" : undefined }}
    >
      <div className="mx-auto flex h-[4.5rem] w-full max-w-6xl items-center justify-between px-8 lg:px-12">
        <HeaderLogo introReady={introReady} />
        <HeaderNav introReady={introReady} />
      </div>
    </header>
  );
}

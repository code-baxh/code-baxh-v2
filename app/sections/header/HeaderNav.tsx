"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useRef, useState } from "react";
import { HeaderMobileMenu } from "./HeaderMobileMenu";
import { NAV_CTA, NAV_LINKS } from "./constants";

type HeaderNavProps = {
  introReady: boolean;
};

type PillState = {
  left: number;
  width: number;
  opacity: number;
};

const PILL_HIDDEN: PillState = { left: 0, width: 0, opacity: 0 };

export function HeaderNav({ introReady }: HeaderNavProps) {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const [pill, setPill] = useState<PillState>(PILL_HIDDEN);

  const movePillTo = useCallback((element: HTMLElement | null) => {
    if (!element || !navRef.current) {
      setPill(PILL_HIDDEN);
      return;
    }

    const navRect = navRef.current.getBoundingClientRect();
    const rect = element.getBoundingClientRect();

    setPill({
      left: rect.left - navRect.left,
      width: rect.width,
      opacity: 1,
    });
  }, []);

  const hidePill = useCallback(() => {
    setPill(PILL_HIDDEN);
  }, []);

  const ctaClass = [
    "hidden shrink-0 items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold tracking-[-0.01em] lg:inline-flex",
    "bg-accent text-[#0d0d0d]",
    "transition-[transform,box-shadow] duration-150",
    "hover:-translate-y-px hover:shadow-[0_0_0_1px_rgb(255_184_0/0.35),0_8px_24px_rgb(255_184_0/0.28)]",
    "active:translate-y-0",
    introReady ? "animate-fade-up" : "opacity-0",
  ].join(" ");

  return (
    <div className="flex min-w-0 shrink-0 items-center gap-2 sm:gap-4">
      <nav
        ref={navRef}
        className="relative hidden min-w-0 flex-1 items-center gap-1 lg:flex"
        aria-label="Main"
        onMouseLeave={hidePill}
      >
        <span
          className="pointer-events-none absolute top-1/2 h-10 -translate-y-1/2 rounded-full bg-white/[0.06] transition-[left,width,opacity] duration-150 ease-out"
          style={{
            left: pill.left,
            width: pill.width,
            opacity: pill.opacity,
          }}
          aria-hidden
        />

        {NAV_LINKS.map((link, index) => (
          <Link
            key={link.href}
            href={link.href}
            className={[
              "relative z-[1] inline-flex shrink-0 items-center rounded-full px-4 py-2.5 text-sm font-medium tracking-[-0.01em]",
              "transition-colors duration-150 hover:text-accent",
              pathname === link.href
                ? "text-text-primary"
                : "text-text-secondary",
              introReady ? "animate-fade-up" : "opacity-0",
            ].join(" ")}
            style={{
              animationDelay: introReady ? `${260 + index * 45}ms` : undefined,
            }}
            onMouseEnter={(event) => movePillTo(event.currentTarget)}
            onFocus={(event) => movePillTo(event.currentTarget)}
            onBlur={hidePill}
            aria-current={pathname === link.href ? "page" : undefined}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <Link
        href={NAV_CTA.href}
        className={ctaClass}
        style={{
          animationDelay: introReady ? "400ms" : undefined,
        }}
      >
        {NAV_CTA.label}
      </Link>

      <HeaderMobileMenu introReady={introReady} />
    </div>
  );
}

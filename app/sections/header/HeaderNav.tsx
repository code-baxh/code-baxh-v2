"use client";

import Link from "next/link";
import { NAV_LINKS } from "./constants";

type HeaderNavProps = {
  introReady: boolean;
};

export function HeaderNav({ introReady }: HeaderNavProps) {
  return (
    <>
      <nav
        className="hidden items-center gap-9 lg:flex xl:gap-10"
        aria-label="Main"
      >
        {NAV_LINKS.map((link, index) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-base font-semibold tracking-normal text-text-secondary transition-colors hover:text-text-primary ${
              introReady ? "animate-fade-up" : "opacity-0"
            }`}
            style={{
              animationDelay: introReady ? `${400 + index * 80}ms` : undefined,
            }}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <Link
        href="#contact"
        className={`text-base font-semibold tracking-normal text-text-secondary transition-colors hover:text-text-primary lg:hidden ${
          introReady ? "animate-fade-up" : "opacity-0"
        }`}
        style={{ animationDelay: introReady ? "400ms" : undefined }}
      >
        Contact
      </Link>
    </>
  );
}

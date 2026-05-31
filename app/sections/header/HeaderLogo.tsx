"use client";

import Image from "next/image";
import Link from "next/link";
import { LOGO_SRC } from "./constants";

type HeaderLogoProps = {
  introReady: boolean;
};

export function HeaderLogo({ introReady }: HeaderLogoProps) {
  return (
    <Link
      href="/"
      className={`group shrink-0 ${introReady ? "animate-pop-in" : "opacity-0"}`}
      aria-label="Code Baxh home"
      style={{ animationDelay: introReady ? "240ms" : undefined }}
    >
      <span className="relative flex shrink-0 items-center">
        <span
          className="absolute -left-2 top-1/2 size-1.5 -translate-y-1/2 rounded-full bg-accent"
          aria-hidden
        />
        <span className="logo-mark block transition-transform duration-300 group-hover:scale-[1.03]">
          <Image src={LOGO_SRC} alt="Code Baxh" fill priority />
        </span>
      </span>
    </Link>
  );
}

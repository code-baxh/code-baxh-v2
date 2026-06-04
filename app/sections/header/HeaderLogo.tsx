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
      className={`logo-mark-header group flex shrink-0 items-center ${
        introReady ? "animate-pop-in" : "opacity-0"
      }`}
      aria-label="Code Baxh home"
      style={{ animationDelay: introReady ? "180ms" : undefined }}
    >
      <span className="relative block h-9 w-[6.5rem] max-w-[26vw] shrink-0 transition-transform duration-200 group-hover:scale-[1.02] sm:h-12 sm:w-[12rem] sm:max-w-none">
        <Image
          src={LOGO_SRC}
          alt="Code Baxh"
          fill
          priority
          sizes="(max-width: 640px) 26vw, 192px"
          className="object-contain object-left"
        />
      </span>
    </Link>
  );
}

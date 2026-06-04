import Image from "next/image";
import Link from "next/link";
import { LOGO_SRC } from "./constants";

type FooterLogoProps = {
  centered?: boolean;
};

export function FooterLogo({ centered = false }: FooterLogoProps) {
  return (
    <Link
      href="/"
      className={`footer-logo group inline-flex shrink-0 ${
        centered ? "mx-auto" : ""
      }`}
      aria-label="Code Baxh home"
    >
      <span
        className={`relative block shrink-0 transition-opacity duration-200 group-hover:opacity-90 ${
          centered
            ? "h-10 w-[11rem] sm:h-11 sm:w-[12rem]"
            : "h-11 w-[12rem] sm:h-12 sm:w-[13rem]"
        }`}
      >
        <Image
          src={LOGO_SRC}
          alt="Code Baxh"
          fill
          sizes="(max-width: 640px) 160px, 176px"
          className={`object-contain ${centered ? "object-center" : "object-left"}`}
        />
      </span>
    </Link>
  );
}

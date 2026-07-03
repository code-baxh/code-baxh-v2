"use client";

import { usePathname } from "next/navigation";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  hasIntroCompletedThisLoad,
  markIntroCompletedThisLoad,
} from "./introSession";
import { IntroWindow } from "./IntroWindow";

type IntroContextValue = {
  introReady: boolean;
};

const IntroContext = createContext<IntroContextValue>({ introReady: false });

export function useIntroReady() {
  return useContext(IntroContext).introReady;
}

function shouldPlayIntro(pathname: string) {
  if (typeof window === "undefined") {
    return pathname === "/";
  }

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  return (
    pathname === "/" && !hasIntroCompletedThisLoad() && !reducedMotion
  );
}

export function IntroProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [showOverlay, setShowOverlay] = useState(() =>
    shouldPlayIntro(pathname),
  );

  useEffect(() => {
    if (!showOverlay) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showOverlay]);

  const handleIntroComplete = () => {
    markIntroCompletedThisLoad();
    setShowOverlay(false);
  };

  // `introReady` is intentionally always true: the header + hero (the LCP
  // element) must paint immediately, be crawlable, and work without JS. The
  // intro plays as a *non-blocking, skippable* overlay ON TOP of the already-
  // rendered page — it no longer gates content visibility.
  return (
    <IntroContext.Provider value={{ introReady: true }}>
      {showOverlay ? <IntroWindow onComplete={handleIntroComplete} /> : null}
      {children}
    </IntroContext.Provider>
  );
}

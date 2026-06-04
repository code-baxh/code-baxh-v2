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
  const [introReady, setIntroReady] = useState(() => !shouldPlayIntro(pathname));
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
    setIntroReady(true);
  };

  return (
    <IntroContext.Provider value={{ introReady }}>
      {showOverlay ? <IntroWindow onComplete={handleIntroComplete} /> : null}
      {children}
    </IntroContext.Provider>
  );
}

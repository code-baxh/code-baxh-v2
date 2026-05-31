"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { IntroWindow } from "./IntroWindow";

type IntroContextValue = {
  introReady: boolean;
};

const IntroContext = createContext<IntroContextValue>({ introReady: false });

export function useIntroReady() {
  return useContext(IntroContext).introReady;
}

export function IntroProvider({ children }: { children: ReactNode }) {
  const [introReady, setIntroReady] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      setIntroReady(true);
      setShowOverlay(false);
    }
  }, []);

  useEffect(() => {
    if (!showOverlay) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showOverlay]);

  const handleIntroComplete = () => {
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

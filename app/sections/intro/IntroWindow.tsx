"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { IntroCodeTyping } from "./IntroCodeTyping";
import { IntroCursor } from "./IntroCursor";
import { IntroMorphLoader } from "./IntroMorphLoader";
import {
  runIntroSequence,
  runLoadingPhase,
  type IntroPhase,
} from "./useIntroSequence";

type IntroWindowProps = {
  onComplete: () => void;
};

type CursorPosition = {
  x: number;
  y: number;
  opacity: number;
  scale: number;
};

export function IntroWindow({ onComplete }: IntroWindowProps) {
  const greenRef = useRef<HTMLSpanElement>(null);
  const [phase, setPhase] = useState<IntroPhase>("idle");
  const [expanded, setExpanded] = useState(false);
  const [cursor, setCursor] = useState<CursorPosition>({
    x: 0,
    y: 0,
    opacity: 0,
    scale: 1,
  });
  const [overlayOpacity, setOverlayOpacity] = useState(1);
  const [bgWhite, setBgWhite] = useState(true);
  const [waitingDots, setWaitingDots] = useState(1);
  const startPos = useRef({ x: 0, y: 0 });

  const finishIntro = useCallback(() => {
    setOverlayOpacity(0);
    window.setTimeout(onComplete, 450);
  }, [onComplete]);

  useEffect(() => {
    startPos.current = {
      x: window.innerWidth * 0.72,
      y: window.innerHeight * 0.65,
    };
    setCursor({
      x: startPos.current.x,
      y: startPos.current.y,
      opacity: 0,
      scale: 1,
    });

    const cancelSequence = runIntroSequence({
      onPhase: (next) => {
        setPhase(next);
        if (next === "cursor-in") {
          setCursor({
            x: startPos.current.x,
            y: startPos.current.y,
            opacity: 1,
            scale: 1,
          });
        }
      },
      onExpand: () => setExpanded(true),
      onBackgroundDark: () => setBgWhite(false),
      onComplete: finishIntro,
    });

    return cancelSequence;
  }, [finishIntro]);

  useEffect(() => {
    if (phase !== "cursor-move" && phase !== "click") return;

    const green = greenRef.current;
    if (!green) return;

    const rect = green.getBoundingClientRect();

    setCursor({
      x: rect.left + rect.width / 2 - 4,
      y: rect.top + rect.height / 2 - 4,
      opacity: 1,
      scale: phase === "click" ? 0.88 : 1,
    });
  }, [phase]);

  const handleCodeComplete = useCallback(() => {
    setPhase("loading");
  }, []);

  useEffect(() => {
    if (phase !== "loading") return;
    return runLoadingPhase(() => {
      setPhase("exit");
      finishIntro();
    });
  }, [phase, finishIntro]);

  const showWaiting =
    phase === "idle" ||
    phase === "cursor-in" ||
    phase === "cursor-move" ||
    phase === "click";
  const showCursor =
    phase === "cursor-in" || phase === "cursor-move" || phase === "click";
  const showCode = phase === "code" || phase === "loading";
  const showLoader = phase === "loading";

  useEffect(() => {
    if (!showWaiting) return;

    const resetTimer = window.setTimeout(() => {
      setWaitingDots(1);
    }, 0);
    const interval = window.setInterval(() => {
      setWaitingDots((count) => (count % 3) + 1);
    }, 500);

    return () => {
      window.clearTimeout(resetTimer);
      window.clearInterval(interval);
    };
  }, [showWaiting]);

  return (
    <div
      className={`intro-overlay fixed inset-0 z-[300] transition-[background,opacity] duration-700 ${
        bgWhite ? "intro-overlay--paper theme-paper" : "intro-overlay--obsidian theme-obsidian"
      }`}
      style={{ opacity: overlayOpacity }}
      aria-hidden={overlayOpacity === 0}
    >
      <div
        className={`intro-window theme-obsidian overflow-hidden border border-border bg-surface shadow-2xl ${
          expanded ? "intro-window--expanded" : "intro-window--compact"
        }`}
      >
        <div className="intro-window-chrome flex items-center gap-3 border-b border-border px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="intro-dot intro-dot-red" aria-hidden />
            <span className="intro-dot intro-dot-yellow" aria-hidden />
            <span
              ref={greenRef}
              className={`intro-dot intro-dot-green ${
                phase === "click" ? "intro-dot-green--active" : ""
              }`}
              aria-hidden
            />
          </div>
          <span className="truncate font-mono text-xs text-text-muted">
            studio.ts
          </span>
        </div>

        <div className="intro-window-body flex flex-col p-5 md:p-8">
          {showWaiting ? (
            <p className="font-mono text-sm text-text-muted" aria-live="polite">
              # waiting
              <span className="inline-block w-[1.5ch]">
                {".".repeat(waitingDots)}
              </span>
            </p>
          ) : null}

          {showCode ? (
            <div
              className={
                showLoader ? "opacity-40 transition-opacity duration-500" : ""
              }
            >
              <IntroCodeTyping
                active={phase === "code"}
                charDelayMs={7}
                charsPerTick={1.2}
                onComplete={handleCodeComplete}
              />
            </div>
          ) : null}

          {showLoader ? (
            <>
              <div
                className="intro-loader-backdrop absolute inset-0 z-[1]"
                aria-hidden
              />
              <div className="absolute inset-0 z-[2] flex items-center justify-center">
                <IntroMorphLoader />
              </div>
            </>
          ) : null}
        </div>
      </div>

      {showCursor ? (
        <IntroCursor
          x={cursor.x}
          y={cursor.y}
          opacity={cursor.opacity}
          scale={cursor.scale}
          clicking={phase === "click"}
        />
      ) : null}
    </div>
  );
}

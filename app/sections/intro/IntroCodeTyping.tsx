"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { flattenCodeTokens, INTRO_CODE, type CodeToken } from "./intro-code";

const TONE_CLASS: Record<CodeToken["tone"], string> = {
  keyword: "intro-code-kw",
  function: "intro-code-fn",
  string: "intro-code-str",
  type: "intro-code-type",
  comment: "intro-code-comment",
  plain: "intro-code-plain",
  punct: "intro-code-punct",
  number: "intro-code-num",
};

type IntroCodeTypingProps = {
  active: boolean;
  charDelayMs?: number;
  charsPerTick?: number;
  onComplete?: () => void;
};

export function IntroCodeTyping({
  active,
  charDelayMs = 14,
  charsPerTick = 1,
  onComplete,
}: IntroCodeTypingProps) {
  const chars = useMemo(() => flattenCodeTokens(INTRO_CODE), []);
  const [visibleCount, setVisibleCount] = useState(0);
  const completedRef = useRef(false);

  useEffect(() => {
    if (!active) return;

    if (visibleCount >= chars.length) {
      if (!completedRef.current) {
        completedRef.current = true;
        onComplete?.();
      }
      return;
    }

    const timer = window.setTimeout(() => {
      setVisibleCount((count) =>
        Math.min(count + charsPerTick, chars.length),
      );
    }, charDelayMs);

    return () => window.clearTimeout(timer);
  }, [active, visibleCount, chars.length, charDelayMs, charsPerTick, onComplete]);

  if (!active && visibleCount === 0) return null;

  const visible = chars.slice(0, visibleCount);

  const segments: { tone: CodeToken["tone"]; text: string }[] = [];
  for (const char of visible) {
    const last = segments[segments.length - 1];
    if (last && last.tone === char.tone) {
      last.text += char.text;
    } else {
      segments.push({ tone: char.tone, text: char.text });
    }
  }

  return (
    <pre className="intro-code-block font-mono text-sm leading-relaxed md:text-[0.9375rem]">
      <code>
        {segments.map((segment, index) => (
          <span key={index} className={TONE_CLASS[segment.tone]}>
            {segment.text}
          </span>
        ))}
        {active && visibleCount < chars.length ? (
          <span className="intro-caret inline-block h-4 w-2 align-middle" aria-hidden />
        ) : null}
      </code>
    </pre>
  );
}

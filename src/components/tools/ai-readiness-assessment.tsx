"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, CircleAlert, CircleCheck, CircleX, Copy, RotateCcw } from "lucide-react";
import { ButtonLink, buttonClass } from "@/components/ui/button";
import {
  areaStatus,
  readinessAreas,
  readinessOptions,
  readinessQuestionCount,
  readinessVerdict,
  type AreaStatus,
  type ReadinessAnswer,
} from "@/content/ai-readiness";
import { cn } from "@/lib/utils";

const pill =
  "inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full border px-4 text-sm transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-accent-text";
const pillOn = "border-accent bg-accent text-accent-fg";
const pillOff = "border-line-strong hover:border-accent-text";

const statusMeta: Record<AreaStatus, { label: string; Icon: typeof CircleCheck; text: string; bar: string }> = {
  ready: { label: "Ready", Icon: CircleCheck, text: "text-ok", bar: "bg-ok" },
  work: { label: "Needs work", Icon: CircleAlert, text: "text-accent-text", bar: "bg-accent" },
  gap: { label: "Gap", Icon: CircleX, text: "text-todo", bar: "bg-todo" },
};

const allQuestions = readinessAreas.flatMap((a) => a.questions);
const questionNumber = new Map(allQuestions.map((q, i) => [q.id, i + 1]));

type Analytics = { plausible?: (event: string) => void; gtag?: (...args: unknown[]) => void };

/** Counts completions only. Plausible is cookieless; gtag exists only once GA has loaded under consent mode. */
function trackCompletion() {
  const w = window as unknown as Analytics;
  w.plausible?.("AI readiness assessment completed");
  w.gtag?.("event", "ai_readiness_assessment_completed");
}

/**
 * Interactive version of the checklist in the AI readiness assessment post.
 * Everything runs in the browser: answers are never sent anywhere.
 * Rendered inside the post's .prose, so the root opts out with .not-prose.
 */
export function AiReadinessAssessment() {
  const [answers, setAnswers] = useState<Record<string, ReadinessAnswer>>({});
  const [workflow, setWorkflow] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLHeadingElement>(null);

  const answered = Object.keys(answers).length;
  const remaining = readinessQuestionCount - answered;
  const complete = remaining === 0;
  const showResult = submitted && complete;

  const areas = readinessAreas.map((a) => {
    const values = a.questions.map((q) => answers[q.id] ?? 0);
    const points = values.reduce<number>((n, v) => n + v, 0);
    return { ...a, points, max: a.questions.length * 2, status: areaStatus(values) };
  });
  const gaps = areas.filter((a) => a.status === "gap").length;
  const needsWork = areas.filter((a) => a.status === "work").length;
  const total = areas.reduce((n, a) => n + a.points, 0);
  const max = areas.reduce((n, a) => n + a.max, 0);
  const score = Math.round((total / max) * 100);
  const verdict = readinessVerdict(gaps, needsWork);

  useEffect(() => {
    if (!submitted) return;
    resultRef.current?.focus({ preventScroll: true });
    resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [submitted]);

  function answer(id: string, value: ReadinessAnswer) {
    setAnswers((prev) => ({ ...prev, [id]: value }));
    setCopied(false);
  }

  function seeResult() {
    if (!complete) {
      const first = allQuestions.find((q) => answers[q.id] === undefined);
      const input = first && rootRef.current?.querySelector<HTMLInputElement>(`input[name="air-${first.id}"]`);
      input?.focus();
      input?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    if (!submitted) trackCompletion();
    setSubmitted(true);
  }

  function startAgain() {
    setAnswers({});
    setWorkflow("");
    setSubmitted(false);
    setCopied(false);
    rootRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  async function copyResults() {
    const lines = [
      "AI readiness assessment (codebaxh.com/blog/ai-readiness-assessment)",
      workflow.trim() ? `Workflow: ${workflow.trim()}` : null,
      `Result: ${verdict.title} (readiness score ${score}/100)`,
      "",
      ...areas.map((a) =>
        a.status === "ready" ? `${a.name}: Ready` : `${a.name}: ${statusMeta[a.status].label}. Next step: ${a.nextStep}`,
      ),
    ].filter((l): l is string => l !== null);
    try {
      await navigator.clipboard.writeText(lines.join("\n"));
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div ref={rootRef} className="not-prose card scroll-mt-24 p-5 sm:p-8">
      <div>
        <label htmlFor="air-workflow" className="block font-medium">
          Which workflow are you assessing? <span className="font-normal text-muted">(optional)</span>
        </label>
        <input
          id="air-workflow"
          type="text"
          value={workflow}
          maxLength={120}
          onChange={(e) => setWorkflow(e.target.value)}
          placeholder="For example: drafting replies to support tickets"
          className="mt-2 w-full rounded-xl border border-line-strong bg-bg px-4 py-3 text-fg placeholder:text-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-text"
        />
        <span className="mt-2 block text-sm text-muted">
          Assess one workflow at a time: readiness belongs to a use case, not a whole company. Your answers stay in your
          browser.
        </span>
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between text-sm text-muted">
          <span>
            {answered} of {readinessQuestionCount} answered
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.12em]">About 3 minutes</span>
        </div>
        <div
          role="progressbar"
          aria-label="Questions answered"
          aria-valuemin={0}
          aria-valuemax={readinessQuestionCount}
          aria-valuenow={answered}
          className="mt-2 h-1.5 overflow-hidden rounded-full bg-surface-2"
        >
          <div
            className="h-full rounded-full bg-accent transition-[width] duration-300"
            style={{ width: `${(answered / readinessQuestionCount) * 100}%` }}
          />
        </div>
      </div>

      {readinessAreas.map((area, i) => (
        <div key={area.id} className="mt-8 border-t border-line pt-6">
          <h3 className="flex items-baseline gap-3 text-lg font-semibold">
            <span className="font-mono text-sm text-accent-text">{String(i + 1).padStart(2, "0")}</span>
            {area.name}
          </h3>
          <span className="mt-1 block text-sm text-muted">Ready when {area.readyWhen}</span>
          {area.questions.map((q) => {
            return (
              <fieldset key={q.id} className="mt-5">
                <legend className="font-medium">
                  <span className="sr-only">Question {questionNumber.get(q.id)}: </span>
                  {q.text}
                  {q.hint ? <span className="mt-1 block text-sm font-normal text-muted">{q.hint}</span> : null}
                </legend>
                <div className="mt-3 flex flex-wrap gap-2">
                  {readinessOptions.map((o) => {
                    const on = answers[q.id] === o.value;
                    return (
                      <label key={o.value} className={cn(pill, on ? pillOn : pillOff)}>
                        <input
                          type="radio"
                          name={`air-${q.id}`}
                          value={o.value}
                          checked={on}
                          onChange={() => answer(q.id, o.value)}
                          // A click made before hydration leaves the native radio checked, and a checked
                          // radio fires no change event, so handle the click too (setting it twice is harmless).
                          onClick={() => answer(q.id, o.value)}
                          className="sr-only"
                        />
                        {on ? <Check aria-hidden className="size-4" strokeWidth={3} /> : null}
                        {o.label}
                      </label>
                    );
                  })}
                </div>
              </fieldset>
            );
          })}
        </div>
      ))}

      {showResult ? (
        <div className="mt-10 border-t border-line pt-8">
          <span className="eyebrow block">Your result{workflow.trim() ? `: ${workflow.trim()}` : ""}</span>
          <h3 ref={resultRef} tabIndex={-1} className="mt-3 scroll-mt-28 text-2xl font-semibold focus:outline-none sm:text-3xl">
            {verdict.title}
          </h3>
          <span className="mt-3 block max-w-2xl text-muted">{verdict.body}</span>

          <div className="mt-6 flex items-end gap-2">
            <span className="font-display text-5xl font-semibold leading-none">{score}</span>
            <span className="pb-1 text-sm text-muted">/ 100 readiness score</span>
          </div>

          <ul className="mt-8 grid gap-3">
            {areas.map((a) => {
              const meta = statusMeta[a.status];
              return (
                <li key={a.id} className="rounded-2xl border border-line p-4 sm:p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-medium">{a.name}</span>
                    <span className={cn("inline-flex items-center gap-1.5 text-sm font-medium", meta.text)}>
                      <meta.Icon aria-hidden className="size-4" />
                      {meta.label}
                    </span>
                  </div>
                  <div aria-hidden className="mt-3 h-1.5 overflow-hidden rounded-full bg-surface-2">
                    <div className={cn("h-full rounded-full", meta.bar)} style={{ width: `${(a.points / a.max) * 100}%` }} />
                  </div>
                  {a.status !== "ready" ? (
                    <span className="mt-3 block text-sm text-muted">
                      {a.nextStep}{" "}
                      {a.learnMore.href.startsWith("#") ? (
                        <a href={a.learnMore.href} className="text-accent-text underline underline-offset-4">
                          {a.learnMore.label}
                        </a>
                      ) : (
                        <Link href={a.learnMore.href} className="text-accent-text underline underline-offset-4">
                          {a.learnMore.label}
                        </Link>
                      )}
                    </span>
                  ) : null}
                </li>
              );
            })}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink href="/start-a-project">
              {verdict.cta} <ArrowRight aria-hidden className="size-4" />
            </ButtonLink>
            <button type="button" onClick={copyResults} className={buttonClass("secondary")}>
              {copied ? <Check aria-hidden className="size-4" /> : <Copy aria-hidden className="size-4" />}
              {copied ? "Copied" : "Copy results"}
            </button>
            <button type="button" onClick={startAgain} className={buttonClass("ghost")}>
              <RotateCcw aria-hidden className="size-4" /> Start again
            </button>
          </div>
          <span role="status" className="sr-only">
            {copied ? "Results copied to the clipboard" : ""}
          </span>
          {verdict.id !== "ready" ? (
            <span className="mt-5 block text-sm text-muted">
              Several workflows to compare, or messy data? Our{" "}
              <Link href="/services/ai-strategy-consulting" className="text-accent-text underline underline-offset-4">
                AI strategy consulting
              </Link>{" "}
              ranks use cases with evidence from your own data.
            </span>
          ) : null}
        </div>
      ) : (
        <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-line pt-6">
          <button type="button" onClick={seeResult} className={buttonClass("primary")}>
            See my result <ArrowRight aria-hidden className="size-4" />
          </button>
          <span aria-live="polite" className="text-sm text-muted">
            {complete
              ? "All questions answered."
              : `${remaining} question${remaining === 1 ? "" : "s"} left.`}
          </span>
        </div>
      )}
    </div>
  );
}

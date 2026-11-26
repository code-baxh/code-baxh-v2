/**
 * The interactive AI readiness assessment on /blog/ai-readiness-assessment.
 * The seven areas and their "ready when" lines mirror the checklist table in that post,
 * so the tool and the article never disagree. Change both together.
 */

export type ReadinessAnswer = 0 | 1 | 2;
export type AreaStatus = "ready" | "work" | "gap";

export type ReadinessArea = {
  id: string;
  name: string;
  /** From the checklist table in the post. */
  readyWhen: string;
  questions: { id: string; text: string; hint?: string }[];
  /** Shown in the result when the area is not ready. */
  nextStep: string;
  learnMore: { label: string; href: string };
};

export const readinessOptions: { value: ReadinessAnswer; label: string }[] = [
  { value: 2, label: "Yes" },
  { value: 1, label: "Partly" },
  { value: 0, label: "No or not sure" },
];

export const readinessAreas: ReadinessArea[] = [
  {
    id: "use-case",
    name: "Use case clarity",
    readyWhen: "you can name the user, the task, the input and the output in one sentence, without the word “AI”.",
    questions: [
      {
        id: "uc-sentence",
        text: "Can you describe the task in one sentence, naming the user, the input and the output, without using the word “AI”?",
      },
      { id: "uc-step", text: "Do you know which step of today’s process should change, and what the person does after the change?" },
    ],
    nextStep:
      "Write the use case as one sentence: who does what, with which input, producing which output. If that is hard without saying “AI”, pick a more specific workflow.",
    learnMore: { label: "Why readiness is judged per use case", href: "#what-is-an-ai-readiness-assessment" },
  },
  {
    id: "data",
    name: "Data availability and quality",
    readyWhen: "real examples of the input exist, are reachable, reasonably current and representative.",
    questions: [
      { id: "data-sample", text: "Could you export 50 real examples of the input this week?" },
      { id: "data-truth", text: "Is there someone who can say which outputs are correct, from agreed answers or past decisions?" },
    ],
    nextStep:
      "Collect 50 real inputs and the correct output for each before choosing an approach. The same sample becomes your first test set.",
    learnMore: { label: "Why data is where most assessments fail", href: "#data-is-where-most-assessments-fail" },
  },
  {
    id: "access",
    name: "Access and permissions",
    readyWhen: "the system can read the data through an API or export, and you know who may see what.",
    questions: [
      { id: "access-read", text: "Can a system read the data through an API, a database or a regular export?" },
      { id: "access-rules", text: "Do you know who is allowed to see which data, so the AI feature can enforce the same rules?" },
    ],
    nextStep:
      "Map where the data lives, how it can be read, and who may see what. The AI feature has to enforce the same permissions as the source system.",
    learnMore: { label: "Permissions as a design input", href: "#permissions-are-a-design-input-not-an-afterthought" },
  },
  {
    id: "metrics",
    name: "Success metrics",
    readyWhen: "there is a baseline today and a target you would accept.",
    questions: [
      { id: "metric-baseline", text: "Do you know how long the task takes today, or how often it goes wrong?" },
      {
        id: "metric-target",
        text: "Have you agreed on a target you would accept, such as time saved or accuracy on a set of test questions?",
      },
    ],
    nextStep:
      "Measure today’s baseline (time per task, how often it goes wrong) and agree the result you would accept. Then turn it into a test set you can run every week.",
    learnMore: { label: "Writing a metric you can test", href: "#a-metric-you-can-test-every-week" },
  },
  {
    id: "risk",
    name: "Risk and compliance",
    readyWhen: "you know what happens when the output is wrong, and who reviews it.",
    questions: [
      {
        id: "risk-review",
        text: "Will a person check the output before it reaches a customer, or affects money or a decision about someone?",
        hint: "Answer yes if a wrong output is low-stakes and cheap to correct.",
      },
      {
        id: "risk-data",
        text: "Have you checked which data would go to a model provider, and whether rules such as GDPR or the EU AI Act apply?",
      },
    ],
    nextStep:
      "Add a review step before outputs reach customers, and check which data would leave your systems and which rules apply to the feature.",
    learnMore: { label: "Frameworks that help with AI risk", href: "#which-frameworks-help-with-ai-risk" },
  },
  {
    id: "budget",
    name: "Budget for ongoing usage",
    readyWhen: "model usage, monitoring and maintenance are budgeted monthly, not just the build.",
    questions: [
      { id: "budget-monthly", text: "Is there a monthly budget for model usage, monitoring and maintenance, not only for the build?" },
      { id: "budget-volume", text: "Do you have a rough estimate of how many requests a month you will have at full adoption?" },
    ],
    nextStep:
      "Estimate the cost of one request during a prototype and multiply it by your expected volume. Budget usage, monitoring and maintenance monthly.",
    learnMore: { label: "How to keep LLM costs in check", href: "/blog/reduce-llm-api-costs" },
  },
  {
    id: "owner",
    name: "Team ownership",
    readyWhen: "there is a named product owner, a domain expert who reviews outputs, and an engineer who maintains it.",
    questions: [
      { id: "owner-named", text: "Is there a named owner who decides when the feature is good enough?" },
      { id: "owner-team", text: "Is there a domain expert to review outputs, and an engineer to maintain the feature after launch?" },
    ],
    nextStep:
      "Name a product owner, a domain expert who reviews outputs and an engineer who maintains the feature. Without an owner, AI features get worse quietly.",
    learnMore: { label: "Red flags that mean “not yet”", href: "#which-red-flags-mean-not-yet" },
  },
];

export const readinessQuestionCount = readinessAreas.reduce((n, a) => n + a.questions.length, 0);

/** Any "No or not sure" makes the area a gap; all "Yes" makes it ready. */
export function areaStatus(values: ReadinessAnswer[]): AreaStatus {
  if (values.some((v) => v === 0)) return "gap";
  if (values.every((v) => v === 2)) return "ready";
  return "work";
}

export type ReadinessVerdict = { id: "ready" | "close" | "not-yet"; title: string; body: string; cta: string };

/** Matches the post: pass all seven and prototype; two or more gaps and fix those first. */
export function readinessVerdict(gaps: number, needsWork: number): ReadinessVerdict {
  if (gaps === 0) {
    return {
      id: "ready",
      title: "Ready for a prototype",
      body:
        needsWork > 0
          ? "No area is missing. Start with a 1–2 week prototype on real data, and tighten the areas marked “needs work” while you build."
          : "This workflow passes all seven checks. Start with a 1–2 week prototype on real data.",
      cta: "Scope the prototype with us",
    };
  }
  if (gaps === 1) {
    return {
      id: "close",
      title: "Close: fix one gap first",
      body: "One area is missing. Fix it before you build, then start with a short prototype on real data. A model will not fix it for you.",
      cta: "Talk it through with us",
    };
  }
  return {
    id: "not-yet",
    title: "Not yet: fix the foundations first",
    body: `${gaps} areas are missing. Fix those before you build, because a model will not fix them for you. If several workflows compete for attention, a short AI strategy engagement can rank them.`,
    cta: "Talk it through with us",
  };
}

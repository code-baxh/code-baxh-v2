export const aiEngagement = [
  {
    title: "Readiness review",
    body: "We look at your data, your product and the task you want AI to handle, and tell you plainly whether it is a good fit and what it will take.",
  },
  {
    title: "Proof on real data",
    body: "A short, fixed-scope prototype on a sample of your own content, scored against a test set, so the decision to invest rests on evidence.",
  },
  {
    title: "Production build",
    body: "We build the feature into your product with retrieval, guardrails, human handover, monitoring and a cost budget designed in from the start.",
  },
  {
    title: "Measure and improve",
    body: "Every release runs against the evaluation suite. We track quality, latency and spend, and tune prompts, models and retrieval as usage grows.",
  },
] as const;

export const aiUseCases = [
  {
    industry: "SaaS and software",
    cases: ["In-product assistants that answer from your documentation", "Natural-language search and reporting", "Automated onboarding and support triage"],
  },
  {
    industry: "Legal and compliance",
    cases: ["Contract review with cited clauses", "Policy and regulation question answering", "Document comparison and summarisation"],
  },
  {
    industry: "Finance and fintech",
    cases: ["Document intake and data extraction", "Customer-service assistants with strict guardrails", "Internal knowledge assistants for operations teams"],
  },
  {
    industry: "Sales and customer service",
    cases: ["Call transcription, scoring and follow-up", "Lead qualification agents", "Support chatbots with human handover"],
  },
  {
    industry: "HR and recruitment",
    cases: ["CV screening support with human review", "Policy assistants for employees", "Interview scheduling and coordination agents"],
  },
  {
    industry: "Real estate and property",
    cases: ["Listing and zoning research assistants", "Enquiry handling across channels", "Report generation from structured data"],
  },
] as const;

export const aiPrinciples = [
  { title: "Grounded in your data", body: "Answers come from your content with sources shown, not from the model's general memory." },
  { title: "Measured before launch", body: "A test set and automated evaluation tell you how good the system is, release by release." },
  { title: "Safe by design", body: "Guardrails, permission checks and human approval sit where an error would be costly." },
  { title: "Cost under control", body: "Model routing, caching and prompt design keep spend predictable as usage scales." },
] as const;

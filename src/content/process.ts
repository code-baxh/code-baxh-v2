/**
 * The delivery lifecycle, used on the home page, /process and every service page.
 * Edit here and all three update.
 */
export const processSteps = [
  {
    title: "Discovery & requirements",
    body: "Workshops with your stakeholders to define goals, users, scope and constraints, captured in clear written requirements.",
    outputs: ["Goals and success measures", "Requirements and user stories", "Scope, estimate and roadmap"],
  },
  {
    title: "UX & UI design",
    body: "User flows, wireframes and interface design, reviewed with you until the product feels right before it is built.",
    outputs: ["User flows and wireframes", "Interface design", "Clickable prototype"],
  },
  {
    title: "Architecture & planning",
    body: "Data model, system design, integrations and security are settled, and the work is broken into sprints.",
    outputs: ["Architecture and data model", "Technical decisions on record", "Sprint plan"],
  },
  {
    title: "Development",
    body: "Short iterations with code review on every change and a demo of working software each week.",
    outputs: ["Weekly demo", "Shared board and written updates", "Reviewed, version-controlled code"],
  },
  {
    title: "QA & testing",
    body: "Manual and automated testing across functionality, devices, APIs and performance, followed by user acceptance testing.",
    outputs: ["Test plan and test cases", "Automated regression suite", "UAT support and sign-off"],
  },
  {
    title: "Deployment & launch",
    body: "Release through a CI/CD pipeline onto monitored cloud infrastructure, with a go-live checklist and rollback plan.",
    outputs: ["CI/CD pipeline", "Monitoring and alerting", "Go-live checklist"],
  },
  {
    title: "Hypercare & support",
    body: "Close monitoring and priority fixes straight after launch, then ongoing support, maintenance and improvement.",
    outputs: ["Hypercare period", "Support under agreed response times", "Improvement backlog"],
  },
] as const;

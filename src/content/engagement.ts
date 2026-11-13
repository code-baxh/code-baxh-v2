/** Engagement models. `pricing` describes how each is priced; add figures here if you decide to publish them. */
export const engagementModels = [
  {
    name: "Fixed-scope project",
    bestFor: "A defined build such as an MVP, a new product or a feature set",
    pricing: "Fixed price, quoted after discovery",
    description:
      "We agree the scope, price and milestones up front and deliver against them. You know what you are getting, when, and what it costs.",
    includes: ["Written scope and fixed price", "Milestone-based payments", "Agreed timeline and deliverables", "Handover and documentation"],
  },
  {
    name: "Monthly retainer",
    bestFor: "Continuous delivery, iteration and support after launch",
    pricing: "Monthly fee, based on team allocation",
    description:
      "A dedicated allocation of the team each month. Priorities are reviewed with you every sprint, so effort always goes where it matters most.",
    includes: ["Predictable monthly cost", "Priorities reviewed each sprint", "Ongoing delivery and support", "Scale the allocation up or down"],
  },
  {
    name: "Staff augmentation",
    bestFor: "Extending your in-house team with specialist capacity",
    pricing: "Monthly rate per engineer",
    description:
      "Our engineers join your team, tools and process, and contribute as your own developers would, with our leads accountable for quality.",
    includes: ["Engineers matched to your stack", "Works in your tools and rituals", "Flexible team size", "Oversight from our engineering lead"],
  },
] as const;

export const engagementFaqs = [
  {
    q: "How is a project priced?",
    a: "Every project is scoped after a discovery conversation. For fixed-scope work you receive a written estimate with milestones before any commitment. Retainers and staff augmentation are priced per month.",
  },
  {
    q: "Do you work to milestone payments?",
    a: "Yes. Fixed-scope projects are paid by milestone, which keeps risk low on your side and delivery accountable on ours.",
  },
  {
    q: "Can we start with something small?",
    a: "Yes. Many clients begin with a discovery sprint or a small fixed-scope piece of work, then move to a retainer once the working relationship is proven.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes. We are happy to sign an NDA before you share anything sensitive.",
  },
  {
    q: "Who owns the work?",
    a: "You do. Once the agreed milestones are paid, the code and deliverables are yours, and the contract sets out IP, confidentiality and handover.",
  },
];

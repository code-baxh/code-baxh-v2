export type InteractiveTestimonial = {
  id: string;
  initials: string;
  company: string;
  quote: string;
  name: string;
  role: string;
};

export const INTERACTIVE_TESTIMONIALS: InteractiveTestimonial[] = [
  {
    id: "sorare",
    initials: "So",
    company: "sorare",
    quote:
      "Evervault balances flexibility and security extremely well. They've built clean and thoughtful abstractions over advanced security foundations, and the product just works. We barely have to think about it.",
    name: "Sylvain Utard",
    role: "Head of Platform, Sorare",
  },
  {
    id: "morse",
    initials: "Mo",
    company: "Morse",
    quote:
      "The engineering team delivered a clean, scalable architecture that kept up with our rapid growth. Everything was documented and maintainable from day one.",
    name: "Mike Hudack",
    role: "CEO, Morse",
  },
  {
    id: "xp",
    initials: "XP",
    company: "XP",
    quote:
      "Fast execution without cutting corners. They shipped a production-ready product in weeks, and the code quality was top-tier from the start.",
    name: "João Victor Martins",
    role: "Product Manager, XP",
  },
  {
    id: "overwolf",
    initials: "Ow",
    company: "Overwolf",
    quote:
      "They handled complex backend systems with confidence. The payment integration was bulletproof, and scaling wasn't an afterthought.",
    name: "Liam Wiltshire",
    role: "Head of Payments, Overwolf",
  },
  {
    id: "biller-genie",
    initials: "BG",
    company: "Biller Genie",
    quote:
      "AI features that don't hallucinate. Grounded, evaluated, and cost-controlled. They spent time getting it right.",
    name: "Tyler Trushin",
    role: "VP Software Dev, Biller Genie",
  },
];
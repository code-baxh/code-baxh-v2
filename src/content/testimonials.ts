import type { Testimonial } from "./types";

/**
 * Public Upwork profile the reviews below come from. Re-check `badge` and `jobSuccess`
 * against the profile before relying on them, and update `checked` when you do.
 */
export const upworkProfile = {
  url: "https://www.upwork.com/freelancers/bilalkhursheedwebdeveloper",
  badge: "Top Rated Plus",
  jobSuccess: "100%",
  checked: "2026-11-23",
} as const;

/**
 * Client reviews from Bilal Khursheed's public Upwork profile, quoted word for word.
 * Only 5-star reviews with a written comment. Do not add Review or AggregateRating
 * schema for these: Google treats reviews a business shows about itself as
 * self-serving and does not use them.
 */
export const testimonials: Testimonial[] = [
  {
    id: "nextjs-prototype-to-production",
    quote:
      "Bilal has been a pleasure to work with throughout the development of Trade Flow Planner. He helped take the platform from an idea through development, testing and a successful production launch. […] He handled a wide range of responsibilities, including the application, website, billing integration, authentication, production deployment and technical handoff.",
    author: "Greg G.",
    project: "Trade Flow Planner: Next.js prototype to production launch",
    date: "2026-10-18",
    rating: 5,
    about: "bilal-khursheed",
    featured: true,
  },
  {
    id: "saas-mvp",
    quote:
      "Bilal did an amazing job on our MVP. He’s extremely professional and very perfectionist in the best way. When we hit the deadline, he even took an extra week to polish everything, fix all bugs, and make sure the product was stable, without charging me for the additional work.",
    project: "SaaS MVP build",
    date: "2025-11-26",
    rating: 5,
    about: "bilal-khursheed",
    featured: true,
  },
  {
    id: "payments-backend",
    quote:
      "Working with Bilal has been excellent. He handles payment-critical and backend tasks with a level of care and professionalism that genuinely makes a difference… he understands the codebase context before making changes, anticipates problems, and delivers solid solutions, not just what was asked. His hourly rate is higher than average, but it pays off: less rework, less risk in sensitive areas (like payments), and clear communication throughout.",
    project: "Payment-critical backend: order cleanup and database pool exhaustion",
    date: "2026-07-06",
    rating: 5,
    about: "bilal-khursheed",
    featured: true,
  },
  {
    id: "k12-ai-tutoring",
    quote:
      "Bilal worked on our K-12 tutoring service from September to November. His work is merged and live, and we've asked him to stay on for our next build.",
    project: "K-12 AI tutoring service: TypeScript, Postgres RLS, Stripe",
    date: "2026-11-11",
    rating: 5,
    about: "bilal-khursheed",
  },
  {
    id: "saas-platform",
    quote:
      "Bilal is a very professional and reliable developer. He communicates clearly, delivers consistently, and always tries to find solutions when challenges come up. What I really appreciate is his dedication and flexibility, he adapts quickly and puts real effort into making sure the project moves forward.",
    author: "Leo W.",
    project: "Full-stack SaaS platform development",
    date: "2025-10-06",
    rating: 5,
    about: "bilal-khursheed",
  },
  {
    id: "stripe-vat-kajabi",
    quote:
      "Bilal was an excellent freelancer. Did a great job. Trust worthy and did more than expected. Thank you. Will be using again.",
    author: "Audrey B.",
    project: "Stripe VAT at checkout for a Kajabi product",
    date: "2025-04-04",
    rating: 5,
    about: "bilal-khursheed",
  },
];

export const featuredTestimonials = testimonials.filter((t) => t.featured);

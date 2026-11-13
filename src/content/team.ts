export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  location: string;
  bio: string;
  /** Topics this person is an authority on. Shown on their page and used as Person `knowsAbout`. */
  expertise: string[];
  responsibilities: string[];
  links: { label: string; href: string }[];
};

export const team: TeamMember[] = [
  {
    slug: "muhammad-usman-mustafa",
    name: "Muhammad Usman Mustafa",
    role: "Co-founder, Product & Delivery Lead",
    location: "Stockholm, Sweden",
    bio: "AI product manager and project manager with around five years across fintech, Web3, SaaS and GovTech. He leads client partnership, product direction and delivery at CodeBaxh.",
    expertise: [
      "AI product management",
      "Software project management",
      "Requirements and discovery",
      "Fintech and Web3 products",
      "SaaS product strategy",
      "GovTech delivery",
    ],
    responsibilities: [
      "Leads client partnership, discovery and scoping across Europe.",
      "Owns product direction, priorities and the delivery plan on every engagement.",
      "Runs weekly demos and keeps scope, timeline and budget transparent.",
      "Shapes AI product strategy: where AI adds value and how success is measured.",
    ],
    links: [
      { label: "Portfolio", href: "https://muhammadusmanmustafa.info" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/usmanmustafa-projectmanager/" },
    ],
  },
  {
    slug: "bilal-khursheed",
    name: "Bilal Khursheed",
    role: "Co-founder, Principal Engineer",
    location: "Islamabad, Pakistan",
    bio: "Upwork Top Rated Plus full-stack engineer with more than six years building web, SaaS and AI products. He leads architecture and the engineering team at CodeBaxh.",
    expertise: [
      "Full-stack web development",
      "Multi-tenant SaaS architecture",
      "Next.js and React",
      "Node.js and Python backends",
      "React Native mobile apps",
      "RAG and LLM integration",
      "AI agents",
      "Stripe and payment integration",
    ],
    responsibilities: [
      "Leads the engineering team in Islamabad.",
      "Owns architecture, technical decisions and code quality across web, mobile, backend and AI.",
      "Sets engineering standards for review, testing, security and release.",
      "Stays hands-on in the critical parts of every build.",
    ],
    // Person sameAs: these profiles tell search and AI engines which Bilal Khursheed this is.
    // Google's entity graph was mixing in a namesake's LinkedIn before they were added.
    links: [
      { label: "Portfolio", href: "https://bilalkhursheed.com" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/bilal-khursheed/" },
      { label: "GitHub", href: "https://github.com/Bilal-Khursheed" },
      { label: "Upwork", href: "https://www.upwork.com/freelancers/bilalkhursheedwebdeveloper" },
    ],
  },
];

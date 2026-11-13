export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  location: string;
  bio: string;
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
    responsibilities: [
      "Leads client partnership, discovery and scoping across Europe.",
      "Owns product direction, priorities and the delivery plan on every engagement.",
      "Runs weekly demos and keeps scope, timeline and budget transparent.",
      "Shapes AI product strategy: where AI adds value and how success is measured.",
    ],
    links: [
      { label: "Portfolio", href: "https://muhammadusmanmustafa.info" },
      { label: "LinkedIn", href: "https://linkedin.com/in/usmanmustafa-projectmanager/" },
    ],
  },
  {
    slug: "bilal-khursheed",
    name: "Bilal Khursheed",
    role: "Co-founder, Principal Engineer",
    location: "Islamabad, Pakistan",
    bio: "Upwork Top Rated Plus full-stack engineer with more than six years building web, SaaS and AI products. He leads architecture and the engineering team at CodeBaxh.",
    responsibilities: [
      "Leads the engineering team in Islamabad.",
      "Owns architecture, technical decisions and code quality across web, mobile, backend and AI.",
      "Sets engineering standards for review, testing, security and release.",
      "Stays hands-on in the critical parts of every build.",
    ],
    links: [{ label: "Portfolio", href: "https://bilalkhursheed.com" }],
  },
];

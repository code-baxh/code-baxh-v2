/**
 * Photography used across the site. The first group was supplied by the company
 * (confirm you hold a licence for each before launch); the second group is from
 * Unsplash under the Unsplash License (free for commercial use, no attribution).
 * `alt` is used wherever the photo carries meaning; decorative uses pass alt="".
 */
export const images = {
  // Supplied by the company
  globalNetwork: { src: "/images/global-network.jpg", alt: "Hands on a laptop and tablet beneath a glowing digital globe" },
  webDev: { src: "/images/web-development.jpg", alt: "A developer at a laptop with web development icons overlaid" },
  laptopCode: { src: "/images/laptop-code.jpg", alt: "Hands typing on a laptop that shows colourful code, with warm lights behind" },
  keyboardCode: { src: "/images/keyboard-code.jpg", alt: "A hand on a laptop keyboard with HTML code reflected across it" },
  monitorsCode: { src: "/images/monitors-code.jpg", alt: "Two monitors showing source code in a dimly lit room" },
  saas: { src: "/images/saas-development.jpg", alt: "A laptop showing a SaaS dashboard, with icons for code, cloud, data, users and analytics" },
  agenticAi: { src: "/images/agentic-ai.jpg", alt: "A glowing Agentic AI node connected to a network of tools" },
  aiAgents: { src: "/images/ai-agents.jpg", alt: "A hand pointing at a transparent AI agents dashboard above a laptop" },
  phpCode: { src: "/images/php-code.jpg", alt: "Close-up of server-side code on a dark screen" },
  jsCode: { src: "/images/js-code.jpg", alt: "Close-up of JavaScript code on a screen" },
  codeBokeh: { src: "/images/code-bokeh.jpg", alt: "Source code on a screen with soft lights in the background" },
  ide: { src: "/images/ide-monitor.jpg", alt: "A monitor showing a code editor on a desk" },
  // Unsplash
  dashboard: { src: "/images/analytics-dashboard.jpg", alt: "A laptop showing an analytics dashboard with charts" },
  phone: { src: "/images/smartphone.jpg", alt: "A smartphone showing a home screen of apps" },
  aiChip: { src: "/images/ai-chip.jpg", alt: "A processor labelled AI on a circuit board" },
  robot: { src: "/images/humanoid-robot.jpg", alt: "Profile of a white humanoid robot" },
  neural: { src: "/images/neural-network.jpg", alt: "A glowing network of connected nodes" },
  circuit: { src: "/images/circuit-board.jpg", alt: "Macro view of a dark circuit board with microchips" },
  servers: { src: "/images/server-rack.jpg", alt: "A server rack with rows of status lights" },
  mobile: { src: "/images/mobile-app.jpg", alt: "A hand holding a phone that shows an app dashboard" },
  chipGlow: { src: "/images/chip-glow.jpg", alt: "A processor lit by a ring of light" },
} as const;

export type ImageKey = keyof typeof images;

/** Photo used for each service on cards and detail pages. */
export const serviceImage: Record<string, ImageKey> = {
  "saas-development": "saas",
  "mvp-development": "laptopCode",
  "web-development": "webDev",
  "nextjs-development": "jsCode",
  "mobile-app-development": "mobile",
  "api-backend-development": "phpCode",
  "cloud-devops": "servers",
  "payment-gateway-integration": "keyboardCode",
  "custom-software-development": "laptopCode",
  "enterprise-software-development": "dashboard",
  "qa-testing": "jsCode",
  "requirements-documentation": "keyboardCode",
  "support-hypercare": "ide",
  "ai-strategy-consulting": "globalNetwork",
  "ai-integration": "monitorsCode",
  "rag-knowledge-assistants": "ide",
  "ai-chatbot-development": "codeBokeh",
  "ai-agent-development": "aiAgents",
  "voice-call-ai": "globalNetwork",
  "llm-evaluation-guardrails": "chipGlow",
  "llm-cost-optimisation": "circuit",
};

/** One distinct photo per case study, so the work grid never repeats an image. */
export const caseStudyImage: Record<string, ImageKey> = {
  "gis-zoning-saas": "globalNetwork",
  "legal-contract-ai": "aiAgents",
  "multi-tenant-saas-mvp": "servers",
  "omnichannel-messaging-saas": "phone",
  "home-equity-fintech-saas": "dashboard",
  "ai-call-analysis": "chipGlow",
  "ai-business-consultant-chatbot": "codeBokeh",
  "redeemx-admin-dashboard": "ide",
  "landlord-academy-lms": "laptopCode",
  "mydasma-wedding-platform": "mobile",
  "transit-rewards-app": "keyboardCode",
  "fika-wall-art-ecommerce": "webDev",
  "chattin-realtime-chat": "monitorsCode",
  "snippetz-code-learning": "jsCode",
  "prowire-marketplace": "phpCode",
};

/** Preferred cover photos per blog category. Covers are assigned in src/lib/blog.ts so a page never repeats one. */
export const blogPools: Record<string, ImageKey[]> = {
  AI: ["agenticAi", "aiChip", "aiAgents", "chipGlow", "neural", "robot"],
  SaaS: ["saas", "dashboard", "servers", "monitorsCode"],
  Web: ["webDev", "laptopCode", "jsCode", "phpCode", "codeBokeh", "ide", "keyboardCode"],
  Mobile: ["mobile", "phone"],
  Business: ["globalNetwork", "dashboard", "keyboardCode", "laptopCode"],
};

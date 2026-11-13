import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { HeroRotator, type HeroSlide } from "./hero-rotator";

/**
 * Hero slides. Each one names a clip in /public/videos (hero-N.mp4 plus the
 * poster hero-N.jpg). To change a clip, replace both files and keep the names.
 */
const slides: HeroSlide[] = [
  {
    id: "products",
    label: "Products that ship",
    video: 1,
    eyebrow: "Software development and AI company",
    title: ["We build web, SaaS and ", "AI products", " that ship."],
    body: "CodeBaxh is a founder-led company with dedicated product, design, engineering and AI teams. We take your product from first brief to production and stay accountable for the result.",
  },
  {
    id: "web",
    label: "Web and SaaS engineering",
    video: 2,
    eyebrow: "Web and SaaS engineering",
    title: ["Web platforms ", "engineered", " for speed and scale."],
    body: "Multi-tenant SaaS, customer portals and high-performance websites on a modern, typed stack. Built to load fast, rank well and stay maintainable as your team grows.",
  },
  {
    id: "models",
    label: "AI training and evaluation",
    video: 3,
    eyebrow: "AI model training and evaluation",
    title: ["AI ", "trained and tested", " on your data."],
    body: "We ground models in your own content, fine-tune where it pays off and measure every release against a test suite, so accuracy and cost are known before launch.",
  },
  {
    id: "agents",
    label: "Agentic AI workflows",
    video: 4,
    eyebrow: "Agentic AI workflows",
    title: ["AI agents that ", "finish the work", ", not just the chat."],
    body: "Agents that plan, call your tools and complete multi-step tasks, with human approval at the points where a mistake would be expensive.",
  },
  {
    id: "world",
    label: "Global delivery",
    video: 5,
    eyebrow: "Global delivery",
    title: ["One team, ", "delivering", " across the world."],
    body: "We partner with clients across Europe, the United States, Canada and the UAE, with a full engineering team based in Islamabad and working hours planned around yours.",
  },
];

export function Hero() {
  return (
    // The hero always sits on dark video, so it uses the dark tokens in both themes.
    <section
      className="dark relative isolate overflow-hidden border-b border-line bg-[#06080d] text-fg"
      aria-roledescription="carousel"
      aria-label="What CodeBaxh does"
    >
      <HeroRotator
        slides={slides}
        actions={
          <>
            <Magnetic>
              <ButtonLink href="/start-a-project">
                Start a project <ArrowRight aria-hidden className="size-4" />
              </ButtonLink>
            </Magnetic>
            <ButtonLink href="/work" variant="secondary">
              See our work
            </ButtonLink>
          </>
        }
      />
    </section>
  );
}

"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Panel = {
  tag: string;
  title: string;
  body: string;
  points: string[];
  href: string;
  cta: string;
};

const PANELS: Panel[] = [
  {
    tag: "01 · Web & Mobile",
    title: "Web & mobile apps your users love",
    body: "Fast, polished web apps and cross-platform mobile apps — built once, shipped to every screen.",
    points: ["Next.js & React on the web", "React Native for iOS & Android", "Design, build, and launch"],
    href: "/services/web-development",
    cta: "Web development",
  },
  {
    tag: "02 · SaaS Platforms",
    title: "SaaS platforms, from MVP to scale",
    body: "Secure multi-tenant SaaS with billing, auth, and dashboards — on architecture that grows with you.",
    points: ["Multi-tenant architecture", "Stripe billing & subscriptions", "MVP delivered in 11 weeks"],
    href: "/services/saas-development",
    cta: "SaaS development",
  },
  {
    tag: "03 · AI Products",
    title: "AI features that actually work",
    body: "RAG pipelines, LLM features, and AI agents grounded in your data — accurate, evaluated, and cost-controlled.",
    points: ["RAG & vector search", "OpenAI & Anthropic", "Chatbots & AI agents"],
    href: "/services/ai-integration",
    cta: "AI integration",
  },
];

function ShowcaseCard({
  panel,
  index,
  total,
  progress,
  reduce,
}: {
  panel: Panel;
  index: number;
  total: number;
  progress: MotionValue<number>;
  reduce: boolean | null;
}) {
  // Card is bigger when in view, shrinks dramatically as it moves out of view
  const start = index / total;
  const end = start + 1 / total;
  const scale = useTransform(progress, [start, end], [1, 0.88 - (total - 1 - index) * 0.05]);
  const opacity = useTransform(progress, [start, end], [1, 0.65]);

  return (
    <div
      className="sticky"
      style={{ top: `calc(6.5rem + ${index * 1.5}rem)` }}
    >
      <motion.article
        style={reduce ? undefined : { scale, opacity }}
        className="showcase-card relative rounded-3xl border border-white/10 p-6 md:p-12"
      >
        <div className="showcase-card-glow pointer-events-none absolute inset-0 rounded-3xl" aria-hidden />
        <div className="relative grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              {panel.tag}
            </p>
            <h3 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight text-text-primary md:text-4xl lg:text-5xl">
              {panel.title}
            </h3>
            <p className="mt-5 max-w-md text-base leading-relaxed text-text-secondary md:text-lg">
              {panel.body}
            </p>
            <Link
              href={panel.href}
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-[#0d0d0d] transition-[transform,opacity] hover:-translate-y-px hover:opacity-90 md:text-base"
            >
              {panel.cta}
              <ArrowUpRight
                className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={2}
                aria-hidden
              />
            </Link>
          </div>
          <ul className="grid gap-3">
            {panel.points.map((point) => (
              <li
                key={point}
                className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 sm:px-5 sm:py-4 text-sm font-medium text-text-primary md:text-base"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </motion.article>
    </div>
  );
}

export function HomeShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section className="theme-obsidian relative w-full border-t border-border bg-surface overflow-hidden">
      <div className="section-orb -left-32 top-1/4 h-96 w-96 opacity-50" aria-hidden />
      <div className="section-orb -right-24 bottom-1/4 h-80 w-80 opacity-30" aria-hidden />
      <div ref={ref} className="relative mx-auto max-w-5xl px-4 sm:px-6 md:px-8 pb-16 md:pb-32 pt-16 md:pt-28">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="heading-accent mx-auto inline-block text-xs font-semibold uppercase tracking-[0.2em] text-text-muted [&::before]:mx-auto">
            What we build
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary md:text-5xl md:leading-[1.05]">
            Three things we do exceptionally well.
          </h2>
        </div>

        <div className="space-y-6 md:space-y-8">
          {PANELS.map((panel, i) => (
            <ShowcaseCard
              key={panel.tag}
              panel={panel}
              index={i}
              total={PANELS.length}
              progress={scrollYProgress}
              reduce={reduce}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

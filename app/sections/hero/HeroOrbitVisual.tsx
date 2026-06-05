"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import { useIntroReady } from "../intro";

type OrbitNode = {
  src: string;
  alt: string;
  glowClass: string;
};

const ORBIT_NODES: OrbitNode[] = [
  {
    src: "/images/VSCodeIcon.png",
    alt: "VS Code",
    glowClass:
      "bg-[radial-gradient(circle,rgba(56,189,248,0.5)_0%,rgba(56,189,248,0.1)_45%,transparent_72%)]",
  },
  {
    src: "/images/FigmaIcons.png",
    alt: "Figma",
    glowClass:
      "bg-[radial-gradient(circle,rgba(242,78,30,0.32)_0%,rgba(162,89,255,0.22)_35%,rgba(26,188,254,0.15)_60%,transparent_75%)]",
  },
  {
    src: "/images/Xcode Icon.png",
    alt: "Xcode",
    glowClass:
      "bg-[radial-gradient(circle,rgba(30,41,59,0.55)_0%,rgba(15,23,42,0.35)_40%,rgba(37,99,235,0.2)_65%,transparent_78%)]",
  },
  {
    src: "/images/JiraIcon.png",
    alt: "Jira",
    glowClass:
      "bg-[radial-gradient(circle,rgba(38,132,255,0.45)_0%,rgba(59,130,246,0.15)_45%,transparent_72%)]",
  },
];

/**
 * Circular orbit path from top-right arcing around to bottom-right.
 * Creates a smooth curved path that bows leftward into the content area.
 */
function buildHeroArcPath(width: number, height: number): string {
  const centerX = width * 0.65;
  const centerY = height / 2;
  const radius = height * 0.75;
  
  // Start at top-right, arc down and around to bottom-right
  const startAngle = -50; // degrees, top-right
  const endAngle = 50;    // degrees, bottom-right
  
  const startX = centerX + radius * Math.cos((startAngle * Math.PI) / 180);
  const startY = centerY + radius * Math.sin((startAngle * Math.PI) / 180);
  const endX = centerX + radius * Math.cos((endAngle * Math.PI) / 180);
  const endY = centerY + radius * Math.sin((endAngle * Math.PI) / 180);
  
  // Use large-arc-flag=0 for small arc (less than 180°)
  return `M ${startX.toFixed(2)} ${startY.toFixed(2)} A ${radius.toFixed(2)} ${radius.toFixed(2)} 0 0 1 ${endX.toFixed(2)} ${endY.toFixed(2)}`;
}

export function HeroOrbitVisual() {
  const introReady = useIntroReady();
  const containerRef = useRef<HTMLDivElement>(null);
  const [path, setPath] = useState("");
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const updatePath = () => {
      const { width, height } = node.getBoundingClientRect();
      if (width <= 0 || height <= 0) return;
      setSize({ width, height });
      setPath(buildHeroArcPath(width, height));
    };

    updatePath();

    const observer = new ResizeObserver(updatePath);
    observer.observe(node);

    return () => observer.disconnect();
  }, [introReady]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-visible transition-opacity duration-500 ${
        introReady ? "animate-hero-reveal opacity-100" : "opacity-0"
      }`}
      style={
        path
          ? ({
              "--hero-orbit-path": `path("${path}")`,
              animationDelay: introReady ? "320ms" : undefined,
            } as CSSProperties)
          : undefined
      }
      aria-hidden
    >
      {path && size.width > 0 ? (
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
          viewBox={`0 0 ${size.width} ${size.height}`}
          aria-hidden
        >
          <defs>
            <filter id="hero-orbit-track-blur" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Track depth — outer shadow */}
          <path
            d={path}
            fill="none"
            className="hero-orbit-track-shadow"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeWidth={2}
          />

          {/* Main thick track body */}
          <path
            d={path}
            fill="none"
            className="hero-orbit-track-body"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeWidth={1.5}
            filter="url(#hero-orbit-track-blur)"
          />

          {/* Inner highlight edge */}
          <path
            d={path}
            fill="none"
            className="hero-orbit-track-highlight"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeWidth={0.8}
          />
        </svg>
      ) : null}

      {path
        ? ORBIT_NODES.map((node, index) => (
            <div
              key={node.src}
              className={`hero-orbit-node hero-orbit-node-${index} pointer-events-none absolute left-0 top-0`}
            >
              <div className="relative -translate-x-1/2 -translate-y-1/2">
                <div
                  className={`absolute top-1/2 left-1/2 size-28 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl ${node.glowClass}`}
                  aria-hidden
                />
                <div className="relative z-10 flex size-[3.75rem] items-center justify-center rounded-full bg-transparent sm:size-16">
                  <Image
                    src={node.src}
                    alt=""
                    width={32}
                    height={32}
                    className="size-8 object-contain"
                  />
                </div>
              </div>
            </div>
          ))
        : null}
    </div>
  );
}

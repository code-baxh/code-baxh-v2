"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import { useIntroReady } from "../intro";

type OrbitNode = {
  src: string;
  alt: string;
  glow: string;
};

const ORBIT_NODES: OrbitNode[] = [
  {
    src: "/images/FigmaIcons.png",
    alt: "Figma",
    glow: "radial-gradient(circle, rgba(242,78,30,0.4) 0%, rgba(162,89,255,0.2) 40%, transparent 70%)",
  },
  {
    src: "/images/JiraIcon.png",
    alt: "Jira",
    glow: "radial-gradient(circle, rgba(38,132,255,0.45) 0%, rgba(59,130,246,0.15) 45%, transparent 72%)",
  },
  {
    src: "/images/VSCodeIcon.png",
    alt: "VS Code",
    glow: "radial-gradient(circle, rgba(56,189,248,0.5) 0%, rgba(56,189,248,0.1) 45%, transparent 72%)",
  },
  {
    src: "/images/Xcode Icon.png",
    alt: "Xcode",
    glow: "radial-gradient(circle, rgba(37,99,235,0.4) 0%, rgba(15,23,42,0.2) 50%, transparent 75%)",
  },
];

// Full ellipse as a closed SVG path so icons orbit continuously
// with no teleport. The ellipse center is anchored to the right of
// the container; only the left-facing arc is visible on screen.
function buildOrbitPath(width: number, height: number): string {
  const rx = height * 0.52;   // horizontal radius — controls how far left the arc bows
  const ry = height * 0.48;   // vertical radius
  const cx = width + rx * 0.3; // center pushed right so only the left arc is visible
  const cy = height / 2;

  // Full ellipse via two arc commands (SVG can't do a full ellipse in one arc)
  const top    = { x: cx,      y: cy - ry };
  const bottom = { x: cx,      y: cy + ry };

  // sweep-flag=1 → clockwise
  return [
    `M ${top.x.toFixed(2)} ${top.y.toFixed(2)}`,
    `A ${rx.toFixed(2)} ${ry.toFixed(2)} 0 1 1 ${bottom.x.toFixed(2)} ${bottom.y.toFixed(2)}`,
    `A ${rx.toFixed(2)} ${ry.toFixed(2)} 0 1 1 ${top.x.toFixed(2)} ${top.y.toFixed(2)}`,
    "Z",
  ].join(" ");
}

// Visible arc only — drawn in the SVG for the track stripe
function buildVisibleArc(width: number, height: number): string {
  const rx = height * 0.52;
  const ry = height * 0.48;
  const cx = width + rx * 0.3;
  const cy = height / 2;

  // Left-most point and the visible chord from top to bottom
  const startAngle = -75 * (Math.PI / 180);
  const endAngle   =  75 * (Math.PI / 180);

  const sx = cx + rx * Math.cos(startAngle);
  const sy = cy + ry * Math.sin(startAngle);
  const ex = cx + rx * Math.cos(endAngle);
  const ey = cy + ry * Math.sin(endAngle);

  return `M ${sx.toFixed(2)} ${sy.toFixed(2)} A ${rx.toFixed(2)} ${ry.toFixed(2)} 0 0 1 ${ex.toFixed(2)} ${ey.toFixed(2)}`;
}

const ORBIT_DURATION = 16; // seconds for one full loop — all icons share this
const NODE_COUNT = ORBIT_NODES.length;

export function HeroOrbitVisual() {
  const introReady = useIntroReady();
  const containerRef = useRef<HTMLDivElement>(null);
  const [orbitPath, setOrbitPath]   = useState("");
  const [visibleArc, setVisibleArc] = useState("");
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const update = () => {
      const { width, height } = node.getBoundingClientRect();
      if (width <= 0 || height <= 0) return;
      setSize({ width, height });
      setOrbitPath(buildOrbitPath(width, height));
      setVisibleArc(buildVisibleArc(width, height));
    };

    // Initial update
    update();
    
    // ResizeObserver for responsive sizing
    const ro = new ResizeObserver(update);
    ro.observe(node);
    
    // Window resize handler as backup
    window.addEventListener("resize", update);
    
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [introReady]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        inset: 0,
        overflow: "visible",
        opacity: 1,
        transition: "opacity 0.5s ease",
        // CSS custom prop consumed by the orbit node style below
        ["--hero-orbit-path" as string]: orbitPath ? `path("${orbitPath}")` : undefined,
      }}
      aria-hidden
    >
      {/* ── Track SVG ── */}
      {visibleArc && size.width > 0 && (
        <svg
          style={{
            pointerEvents: "none",
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            overflow: "visible",
          }}
          viewBox={`0 0 ${size.width} ${size.height}`}
          aria-hidden
        >
          <defs>
            <filter id="track-glow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="10" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Outer soft halo — gives the 3-D depth */}
          <path
            d={visibleArc}
            fill="none"
            stroke="rgba(255,255,255,0.04)"
            strokeWidth={72}
            strokeLinecap="round"
            filter="url(#track-glow)"
          />

          {/* Main track body */}
          <path
            d={visibleArc}
            fill="none"
            stroke="rgba(255,255,255,0.11)"
            strokeWidth={44}
            strokeLinecap="round"
          />

          {/* Inner highlight edge */}
          <path
            d={visibleArc}
            fill="none"
            stroke="rgba(255,255,255,0.055)"
            strokeWidth={22}
            strokeLinecap="round"
          />
        </svg>
      )}

      {/* ── Orbiting icons ── */}
      {orbitPath &&
        ORBIT_NODES.map((node, i) => {
          // Each icon is offset by an equal fraction of the duration.
          // All share the same duration → permanently equal spacing.
          // Negative delay = "already N seconds into the animation".
          const delay = -(ORBIT_DURATION / NODE_COUNT) * i;

          return (
            <div
              key={node.src}
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                pointerEvents: "none",
                // CSS motion path
                offsetPath: `path("${orbitPath}")`,
                offsetRotate: "0deg",
                offsetAnchor: "center",
                animation: `hero-orbit-travel ${ORBIT_DURATION}s linear ${delay}s infinite`,
                willChange: "offset-distance",
              } as CSSProperties}
            >
              {/* Centering wrapper */}
              <div style={{ position: "relative", transform: "translate(-50%, -50%)" }}>
                {/* Glow halo */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: 112,
                    height: 112,
                    transform: "translate(-50%, -50%)",
                    borderRadius: "9999px",
                    background: node.glow,
                    filter: "blur(18px)",
                    opacity: 0.75,
                  }}
                  aria-hidden
                />

                {/* Icon — transparent background, no border */}
                <div
                  style={{
                    position: "relative",
                    zIndex: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 56,
                    height: 56,
                    borderRadius: "9999px",
                    background: "transparent",
                  }}
                >
                  <Image
                    src={node.src}
                    alt=""
                    width={36}
                    height={36}
                    style={{ objectFit: "contain", width: 36, height: 36 }}
                  />
                </div>
              </div>
            </div>
          );
        })}

      {/* Keyframe injected at runtime — avoids global CSS dependency */}
      <style>{`
        @keyframes hero-orbit-travel {
          from { offset-distance: 0%; }
          to   { offset-distance: 100%; }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="hero-orbit-travel"] {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
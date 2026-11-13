/**
 * World map of markets. The land is a dotted map generated from Natural Earth
 * data (public domain) and drawn through a CSS mask so it takes the theme colour.
 * Marker coordinates use the same projection:
 *   x = (lon + 170) * 2.857, y = (75 - lat) * 2.857
 */
const hubs = [
  { x: 694, y: 118, label: "Islamabad", sub: "Engineering team" },
  { x: 537, y: 45, label: "Stockholm", sub: "Product delivery team" },
];
const markets = [
  { x: 183, y: 54, label: "Canada", dx: -14, anchor: "end" as const },
  { x: 206, y: 103, label: "United States", dx: -14, anchor: "end" as const },
  { x: 506, y: 78, label: "Europe", dx: -14, anchor: "end" as const },
  { x: 644, y: 142, label: "UAE", dx: -14, anchor: "end" as const },
];

const text = {
  fontFamily: "var(--font-sans)",
  fontSize: 13,
  fontWeight: 500,
  fill: "var(--fg)",
  stroke: "var(--surface-2)",
  strokeWidth: 5,
  paintOrder: "stroke" as const,
  strokeLinejoin: "round" as const,
};

export function MarketsMap({ className }: { className?: string }) {
  return (
    <div aria-hidden className={className}>
      <div className="relative mx-auto w-full" style={{ aspectRatio: "1000 / 380" }}>
        <div
          className="absolute inset-0 bg-muted opacity-45"
          style={{
            maskImage: "url(/images/world-dots.svg)",
            WebkitMaskImage: "url(/images/world-dots.svg)",
            maskSize: "100% 100%",
            WebkitMaskSize: "100% 100%",
          }}
        />
        <svg viewBox="0 0 1000 380" fill="none" className="absolute inset-0 size-full overflow-visible">
          {markets.map((m, i) => (
            <g key={m.label}>
              <circle
                className="pulse-ring"
                style={{ animationDelay: `${i * -0.7}s` }}
                cx={m.x}
                cy={m.y}
                r="6"
                stroke="var(--accent)"
              />
              <circle cx={m.x} cy={m.y} r="5" fill="var(--accent)" />
              <text x={m.x + m.dx} y={m.y - 1} textAnchor={m.anchor} {...text}>
                {m.label}
              </text>
              <text x={m.x + m.dx} y={m.y + 13} textAnchor={m.anchor} {...text} fontSize={11} fontWeight={400} fill="var(--muted)">
                Clients
              </text>
            </g>
          ))}
          {hubs.map((h) => (
            <g key={h.label}>
              <circle className="pulse-ring" cx={h.x} cy={h.y} r="11" stroke="var(--accent)" />
              <circle cx={h.x} cy={h.y} r="11" fill="var(--bg)" stroke="var(--accent)" strokeWidth="2" />
              <circle cx={h.x} cy={h.y} r="5" fill="var(--accent)" />
              <text x={h.x + 20} y={h.y - 2} {...text} fontWeight={600}>
                {h.label}
              </text>
              <text x={h.x + 20} y={h.y + 15} {...text} fontSize={12} fontWeight={400} fill="var(--muted)">
                {h.sub}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

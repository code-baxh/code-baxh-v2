/**
 * Larger decorative illustrations used once per section.
 * All colours come from theme tokens, so they follow dark and light mode.
 */

/** Documents flowing through retrieval into a model and out as a cited answer. */
export function AiPipelineArt({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 520 190" fill="none" className={className}>
      <defs>
        <linearGradient id="ap-g" x1="0" x2="1">
          <stop offset="0" stopColor="var(--accent)" />
          <stop offset="1" stopColor="var(--accent-2)" />
        </linearGradient>
      </defs>
      {/* documents */}
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${14 + i * 10} ${50 + i * 14})`}>
          <rect width="62" height="76" rx="8" fill="var(--surface)" stroke="var(--line-strong)" />
          <path d="M12 20h38M12 32h30M12 44h38M12 56h22" stroke="var(--line-strong)" strokeWidth="3" strokeLinecap="round" />
        </g>
      ))}
      {/* traces */}
      <g stroke="var(--line-strong)" strokeWidth="1.5">
        <path d="M100 102h70M250 102h50M380 102h44" />
        <path d="M210 62V34h130v28M210 142v24h130v-24" strokeDasharray="3 6" />
      </g>
      <g stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round">
        <path className="trace" d="M100 102h70" />
        <path className="trace" style={{ animationDelay: "-1s" }} d="M250 102h50" />
        <path className="trace" style={{ animationDelay: "-2s" }} d="M380 102h44" />
      </g>
      {/* vector store */}
      <g transform="translate(170 62)">
        <rect width="80" height="80" rx="16" fill="var(--surface)" stroke="var(--line-strong)" />
        {[0, 1, 2, 3].flatMap((r) =>
          [0, 1, 2, 3].map((c) => (
            <circle
              key={`${r}-${c}`}
              cx={16 + c * 16}
              cy={16 + r * 16}
              r="3.2"
              fill={(r * 3 + c) % 4 === 0 ? "var(--accent)" : "var(--line-strong)"}
              className={(r * 3 + c) % 4 === 0 ? "caret" : undefined}
              style={{ animationDelay: `${(r + c) * -0.3}s`, animationDuration: "2.2s" }}
            />
          )),
        )}
      </g>
      {/* model */}
      <g transform="translate(300 62)">
        <circle className="pulse-ring" cx="40" cy="40" r="30" stroke="var(--accent)" />
        <rect width="80" height="80" rx="20" fill="url(#ap-g)" />
        <path
          d="M40 20v40M24 30l32 20M56 30 24 50"
          stroke="var(--accent-fg)"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.85"
        />
        <circle cx="40" cy="40" r="7" fill="var(--accent-fg)" />
      </g>
      {/* answer */}
      <g transform="translate(424 58)">
        <rect width="86" height="88" rx="12" fill="var(--surface)" stroke="var(--accent)" />
        <path d="M14 22h58M14 36h46M14 50h54" stroke="var(--line-strong)" strokeWidth="3" strokeLinecap="round" />
        <rect x="14" y="62" width="34" height="14" rx="7" fill="var(--accent)" opacity="0.9" />
      </g>
      <g fontFamily="var(--font-mono)" fontSize="10" fill="var(--muted)" textAnchor="middle" letterSpacing="1">
        <text x="55" y="176">DOCS</text>
        <text x="210" y="24">RETRIEVE</text>
        <text x="340" y="24">MODEL</text>
        <text x="467" y="176">CITED ANSWER</text>
      </g>
    </svg>
  );
}

/** Stylised market map: the Islamabad engineering hub linked to the US, Europe and the UAE. */
export function MarketsArt({ className }: { className?: string }) {
  const dots: React.ReactNode[] = [];
  for (let y = 0; y < 11; y++) {
    for (let x = 0; x < 38; x++) {
      dots.push(<circle key={`${x}-${y}`} cx={10 + x * 20} cy={12 + y * 20} r="1.2" fill="var(--line-strong)" />);
    }
  }
  const hub = { x: 640, y: 128 };
  const markets = [
    { x: 120, y: 112, label: "UNITED STATES", sub: "Clients", arc: "M640 128C500 -40 260 -30 120 112", ly: 26 },
    { x: 452, y: 58, label: "EUROPE", sub: "Client partnership, Stockholm", arc: "M640 128C600 60 520 40 452 58", ly: 26 },
    { x: 560, y: 178, label: "UAE", sub: "Clients", arc: "M640 128C625 160 595 176 560 178", ly: 26 },
  ];
  return (
    <svg aria-hidden viewBox="0 0 760 232" fill="none" className={className}>
      {dots}
      {/* worldwide: faint arcs leaving the frame */}
      <g stroke="var(--line-strong)" strokeDasharray="3 7">
        <path d="M640 128C690 90 730 80 760 78M640 128C680 170 720 200 760 214M120 112C80 130 40 160 0 170" />
      </g>
      {markets.map((m, i) => (
        <g key={m.label}>
          <path d={m.arc} stroke="var(--line-strong)" strokeWidth="1.5" />
          <path
            className="trace"
            style={{ animationDelay: `${i * -1.1}s` }}
            d={m.arc}
            stroke="var(--accent)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx={m.x} cy={m.y} r="5" fill="var(--bg)" stroke="var(--accent)" strokeWidth="2" />
          <text x={m.x} y={m.y + m.ly} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" letterSpacing="1.2" fill="var(--fg)">
            {m.label}
          </text>
          <text x={m.x} y={m.y + m.ly + 13} textAnchor="middle" fontFamily="var(--font-sans)" fontSize="9.5" fill="var(--muted)">
            {m.sub}
          </text>
        </g>
      ))}
      <circle className="pulse-ring" cx={hub.x} cy={hub.y} r="11" stroke="var(--accent)" />
      <circle cx={hub.x} cy={hub.y} r="8" fill="var(--accent)" />
      <text x={hub.x + 18} y={hub.y - 2} fontFamily="var(--font-mono)" fontSize="10" letterSpacing="1.2" fill="var(--fg)">
        ISLAMABAD
      </text>
      <text x={hub.x + 18} y={hub.y + 11} fontFamily="var(--font-sans)" fontSize="9.5" fill="var(--muted)">
        Engineering team
      </text>
    </svg>
  );
}

/** Faint circuit board used behind the closing call to action. */
export function CircuitBackdrop({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 1200 420" preserveAspectRatio="xMidYMid slice" fill="none" className={className}>
      <g stroke="var(--line-strong)" strokeWidth="1.2">
        <path d="M0 80h180l40 40h160M0 330h140l50-50h120M1200 90h-200l-40 40H820M1200 320h-170l-40-40H860" />
        <path d="M240 0v60l40 40M960 0v70l-40 40M300 420v-70l40-40M900 420v-60l-40-40" />
      </g>
      <g stroke="var(--accent)" strokeWidth="2" strokeLinecap="round">
        <path className="trace" d="M0 80h180l40 40h160" />
        <path className="trace" style={{ animationDelay: "-1.6s" }} d="M1200 320h-170l-40-40H860" />
        <path className="trace" style={{ animationDelay: "-0.8s" }} d="M1200 90h-200l-40 40H820" />
        <path className="trace" style={{ animationDelay: "-2.4s" }} d="M0 330h140l50-50h120" />
      </g>
      <g fill="var(--accent)">
        {[
          [380, 120],
          [310, 280],
          [820, 130],
          [860, 280],
          [280, 100],
          [920, 110],
        ].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="4" />
        ))}
      </g>
    </svg>
  );
}

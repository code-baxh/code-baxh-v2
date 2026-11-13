import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

/** Shared Open Graph card. Each route passes its own eyebrow and title. */
export function renderOg({ eyebrow, title }: { eyebrow: string; title: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          backgroundColor: "#06080d",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(250,184,30,0.35), transparent 45%), radial-gradient(circle at 10% 100%, rgba(255,138,61,0.18), transparent 40%)",
          color: "#eef0f5",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              backgroundColor: "#fab81e",
              color: "#171001",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            CB
          </div>
          <div style={{ fontSize: 30, fontWeight: 700, letterSpacing: 4 }}>CODEBAXH</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 26, letterSpacing: 5, textTransform: "uppercase", color: "#fbc23c" }}>{eyebrow}</div>
          <div style={{ fontSize: title.length > 60 ? 56 : 70, fontWeight: 700, lineHeight: 1.08, letterSpacing: -1.5 }}>
            {title}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#a0a9ba" }}>
          <div>Software development and AI company</div>
          <div>codebaxh.com</div>
        </div>
      </div>
    ),
    ogSize,
  );
}

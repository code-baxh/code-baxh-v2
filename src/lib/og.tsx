import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

/** The real CodeBaxh logo (CB mark + wordmark, the variant made for dark backgrounds), read once per build. */
let logo: Promise<string> | undefined;
const logoSrc = () =>
  (logo ??= readFile(join(process.cwd(), "public/logo/codebaxh-logo-dark.png")).then(
    (b) => `data:image/png;base64,${b.toString("base64")}`,
  ));

/** Shared Open Graph card, shown when a page is shared. Each route passes its own eyebrow and title. */
export async function renderOg({ eyebrow, title }: { eyebrow: string; title: string }) {
  const src = await logoSrc();
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
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse renders plain <img>, not next/image */}
          <img src={src} width={322} height={84} alt="CodeBaxh" />
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

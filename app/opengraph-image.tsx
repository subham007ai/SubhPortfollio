import { ImageResponse } from "next/og";

// edge runtime: @vercel/og's node runtime crashes on Windows paths at build time
export const runtime = "edge";
export const alt = "Subham Sarangi — AI Engineering Student";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0a",
          backgroundImage: "radial-gradient(rgba(255,255,255,0.08) 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
          padding: "64px",
          fontFamily: "sans-serif"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 14, height: 14, borderRadius: 999, background: "#ff3b30" }} />
          <div style={{ color: "#6b6b6b", fontSize: 26, letterSpacing: 8 }}>
            AI ENGINEERING STUDENT · BHUBANESWAR
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "#f5f5f5",
            fontSize: 148,
            fontWeight: 800,
            lineHeight: 0.95,
            letterSpacing: -6
          }}
        >
          <span>SUBHAM</span>
          <span style={{ color: "#8a8a8a" }}>SARANGI</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", color: "#6b6b6b", fontSize: 24, letterSpacing: 6 }}>
          <span>PYTHON · ML · AUTOMATION</span>
          <span>SOA · 2024–2028</span>
        </div>
      </div>
    ),
    { ...size }
  );
}

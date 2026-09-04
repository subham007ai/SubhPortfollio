import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        card: "var(--bg-card)",
        pill: "var(--bg-pill)",
        fg: "var(--fg)",
        fgWarm: "var(--fg-warm)",
        muted: "var(--muted)",
        line: "var(--line)",
        lineStrong: "var(--line-strong)",
        signal: "var(--signal)",
        gold: "var(--gold)"
      },
      fontFamily: {
        serif: ["'Instrument Serif'", "var(--font-serif)", "Georgia", "serif"],
        display: ["'Instrument Serif'", "var(--font-serif)", "Georgia", "serif"],
        body: ["var(--font-geist-sans)", "Inter", "sans-serif"],
        sans: ["var(--font-geist-sans)", "Inter", "sans-serif"],
        mono: ["var(--font-geist-mono)", "JetBrains Mono", "monospace"]
      },
      letterSpacing: {
        tightest: "-0.04em",
        wider2: "0.18em"
      },
      maxWidth: { content: "1200px" }
    }
  },
  plugins: []
};
export default config;

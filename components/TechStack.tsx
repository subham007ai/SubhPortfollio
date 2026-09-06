import React from "react";

type ToolItem = {
  name: string;
  icon: React.ReactNode;
};

const row1: ToolItem[] = [
  {
    name: "Python",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.006 2.752h5.803v.826H3.896S0 5.767 0 11.957c0 6.19 3.4 5.992 3.4 5.992h2.03v-2.852s-.11-3.4 3.336-3.4h5.726s3.224.053 3.224-3.136V3.136S18.23 0 11.914 0zm-3.3 1.83a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1zM12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.006-2.752h-5.803v-.826h8.113s3.896.467 3.896-5.723c0-6.19-3.4-5.992-3.4-5.992h-2.03v2.852s.11 3.4-3.336 3.4H9.408s-3.224-.053-3.224 3.136v5.427S5.77 24 12.086 24zm3.3-1.83a1.05 1.05 0 1 1 0-2.1 1.05 1.05 0 0 1 0 2.1z" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.82 17.584l-7.23-9.336h-1.87v7.502h1.49v-5.78l6.398 8.298c-.256.12-.518.23-.788.316zm-7.61-7.502h1.49v1.888h-1.49V10.082z" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm11.36 12.72h-2.91v7.68H6.84v-7.68H3.93v-2.31h8.555v2.31zm5.138 7.8c-1.39 0-2.48-.48-3.23-1.38-.72-.88-.99-2.02-.95-3.35h2.64c.03.68.18 1.17.47 1.48.29.31.75.47 1.34.47.53 0 .97-.13 1.25-.38.28-.26.43-.61.43-1.02 0-.37-.12-.66-.36-.88-.23-.21-.69-.43-1.36-.66l-.91-.31c-1.17-.41-2.03-.94-2.58-1.58-.55-.64-.81-1.46-.81-2.43 0-1.19.43-2.14 1.29-2.83.86-.7 2.05-1.05 3.53-1.05 1.37 0 2.45.36 3.19 1.07.74.71 1.05 1.68 1.05 2.87h-2.61c-.04-.56-.19-.97-.44-1.23-.25-.26-.66-.39-1.2-.39-.48 0-.87.12-1.14.34-.27.22-.4.52-.4.88 0 .34.12.61.35.8.23.19.64.38 1.22.58l.94.32c1.33.45 2.27 1.03 2.81 1.72.54.69.81 1.57.81 2.62 0 1.22-.43 2.22-1.28 2.94-.85.73-2.05 1.08-3.56 1.08z" />
      </svg>
    ),
  },
  {
    name: "React",
    icon: (
      <svg className="w-4 h-4 fill-none stroke-current stroke-[1.5]" viewBox="0 0 24 24" aria-hidden="true">
        <ellipse cx="12" cy="12" rx="10" ry="4" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1.8" className="fill-current" />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    ),
  },
  {
    name: "FastAPI",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 0a12 12 0 1 0 12 12A12.014 12.014 0 0 0 12 0zm-.75 4.5h2.25l-3.375 7.5h3.75L7.5 19.5l2.25-6.75H6.375z" />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    icon: (
      <svg className="w-4 h-4 fill-none stroke-current stroke-[1.6]" viewBox="0 0 24 24" aria-hidden="true">
        <ellipse cx="12" cy="6" rx="8" ry="3" />
        <path d="M4 6v6c0 1.657 3.582 3 8 3s8-1.343 8-3V6" />
        <path d="M4 12v6c0 1.657 3.582 3 8 3s8-1.343 8-3v-6" />
      </svg>
    ),
  },
  {
    name: "Supabase",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21.362 9.354H12V.316a.316.316 0 0 0-.549-.213L.198 13.256a.316.316 0 0 0 .24.521H9.84v9.907a.316.316 0 0 0 .549.213l11.213-14.024a.316.316 0 0 0-.24-.519z" />
      </svg>
    ),
  },
];

const row2: ToolItem[] = [
  {
    name: "OpenCV",
    icon: (
      <svg className="w-4 h-4 fill-none stroke-current stroke-[1.8]" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="7" r="4.2" />
        <circle cx="7" cy="16" r="4.2" />
        <circle cx="17" cy="16" r="4.2" />
      </svg>
    ),
  },
  {
    name: "TensorFlow",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.001 0L1.714 5.938v5.938l4.286-2.476V24l6-3.462V0zm0 0l10.285 5.938v5.938l-4.286-2.476V24l-6-3.462V0z" />
      </svg>
    ),
  },
  {
    name: "Flask",
    icon: (
      <svg className="w-4 h-4 fill-none stroke-current stroke-[1.6]" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M10 2v5.5L5.2 17.5a2 2 0 0 0 1.8 2.5h10a2 2 0 0 0 1.8-2.5L14 7.5V2" />
        <path d="M9 2h6" />
        <path d="M7 14.5h10" />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M0 0h24v24H0V0zm15.42 18.06c.92 0 1.64-.34 2.14-1.02.48-.65.71-1.57.71-2.73v-4.14h-2.14v4.14c0 .66-.09 1.13-.27 1.41-.18.28-.48.42-.9.42-.4 0-.7-.13-.88-.39-.18-.26-.27-.67-.27-1.23h-2.14c0 1.1.28 1.95.84 2.54.56.6 1.34 1 2.33 1h.58zm-7.61 0c1.07 0 1.89-.35 2.47-1.04.57-.69.86-1.68.86-2.96v-.27h-2.14v.27c0 .73-.13 1.25-.39 1.57-.26.31-.67.47-1.24.47-.5 0-.89-.14-1.17-.42-.28-.28-.42-.7-.42-1.26 0-.58.17-1.04.51-1.39.34-.35.91-.71 1.71-1.08 1.16-.54 1.99-1.08 2.5-1.63.5-.55.76-1.28.76-2.18 0-1.12-.34-2-1.03-2.63-.69-.63-1.65-.95-2.88-.95-1.15 0-2.03.35-2.64 1.05-.6.7-.91 1.68-.91 2.94h2.14c0-.75.12-1.28.36-1.59.24-.31.63-.47 1.17-.47.46 0 .82.13 1.08.39.26.26.39.63.39 1.12 0 .52-.16.94-.48 1.25-.32.31-.87.64-1.65 1-1.16.54-2.01 1.1-2.54 1.69-.53.58-.8 1.35-.8 2.3 0 1.19.34 2.11 1.02 2.76.68.65 1.62.98 2.82.98h.48z" />
      </svg>
    ),
  },
  {
    name: "Framer Motion",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
      </svg>
    ),
  },
  {
    name: "Git",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23.546 10.93L13.067.452a1.5 1.5 0 0 0-2.124 0L8.831 2.564l3.12 3.12a1.777 1.777 0 0 1 2.247 2.259l3.003 3.003a1.776 1.776 0 1 1-1.066 1.042l-2.823-2.824v5.42a1.778 1.778 0 1 1-1.5 0v-5.61a1.776 1.776 0 0 1-.958-2.327L7.747 3.65.454 10.942a1.5 1.5 0 0 0 0 2.124l10.48 10.48a1.5 1.5 0 0 0 2.123 0l10.489-10.49a1.5 1.5 0 0 0 0-2.126z" />
      </svg>
    ),
  },
  {
    name: "Vercel",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 1L24 22H0L12 1z" />
      </svg>
    ),
  },
  {
    name: "HTML5 & CSS3",
    icon: (
      <svg className="w-4 h-4 fill-none stroke-current stroke-[1.8]" viewBox="0 0 24 24" aria-hidden="true">
        <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
      </svg>
    ),
  },
];

function MarqueeRow({ items, direction = "left" }: { items: ToolItem[]; direction?: "left" | "right" }) {
  const animClass = direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div className="overflow-hidden w-full relative touch-pan-y">
      <div className={`${animClass} gap-2.5 sm:gap-3`}>
        {/* Track A */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          {items.map((tool) => (
            <div
              key={tool.name}
              className="inline-flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-pill border hairline border-line text-xs sm:text-sm text-fg font-medium tracking-tight shadow-sm hover:border-lineStrong hover:scale-[1.02] active:scale-[0.98] transition-all select-none group/pill cursor-default"
            >
              <span className="text-fg/80 group-hover/pill:text-fg group-hover/pill:scale-110 transition-transform">
                {tool.icon}
              </span>
              <span>{tool.name}</span>
            </div>
          ))}
        </div>

        {/* Track B (Duplicate for seamless infinite loop) */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0" aria-hidden="true">
          {items.map((tool, idx) => (
            <div
              key={`${tool.name}-dup-${idx}`}
              className="inline-flex items-center gap-2.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-pill border hairline border-line text-xs sm:text-sm text-fg font-medium tracking-tight shadow-sm hover:border-lineStrong hover:scale-[1.02] active:scale-[0.98] transition-all select-none group/pill cursor-default"
            >
              <span className="text-fg/80 group-hover/pill:text-fg group-hover/pill:scale-110 transition-transform">
                {tool.icon}
              </span>
              <span>{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section className="mx-auto max-w-content px-4 sm:px-6 md:px-10 py-6 md:py-8">
      {/* Title with exact section-heading underline styling */}
      <div className="mb-4 sm:mb-5 md:mb-6">
        <h2 className="section-heading text-2xl sm:text-3xl">Tools that I have used</h2>
      </div>

      {/* Dual Marquee Container with smooth edge vignetting and pause on hover/touch */}
      <div className="marquee-container marquee-mask space-y-2.5 sm:space-y-3.5 py-1">
        <MarqueeRow items={row1} direction="left" />
        <MarqueeRow items={row2} direction="right" />
      </div>
    </section>
  );
}

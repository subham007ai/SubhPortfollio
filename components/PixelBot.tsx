"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ease } from "@/lib/motion";

/*  A small pixel robot, built from the same cell primitives as the
    contribution heatmap in GitHubActivity — rounded squares, `--line`
    for the body (an inactive day), `--signal` + gaussian glow for the
    eyes and antenna (an active day). It reads as the design system
    expressing itself rather than a mascot imported from elsewhere.

    Always rendered as a "peek": the wrapper is shorter than the sprite
    and clips the bottom, so the bot appears to be rising from behind
    whatever hairline sits directly beneath it.

    Legend — '.' empty · '1' body · '2' eye (blinks) · '3' antenna (pulses) */

type Variant = "idle" | "confused";

const SPRITES: Record<Variant, string[]> = {
  idle: [
    "....3....",
    "....1....",
    ".1111111.",
    "111111111",
    "112111211",
    "111111111",
    ".1111111.",
    ".11...11.",
  ],
  // 404 flavour — antenna knocked askew, so the two bots on that page
  // read as characterful rather than as a duplicate.
  confused: [
    ".....3...",
    "....1....",
    ".1111111.",
    "111111111",
    "112111211",
    "111111111",
    ".1111111.",
    ".11...11.",
  ],
};

export default function PixelBot({
  cell = 6,
  gap = 2,
  variant = "idle",
  peek = 0.72,
  className = "",
}: {
  cell?: number;
  gap?: number;
  variant?: Variant;
  /** fraction of the sprite left visible above the clip (0–1) */
  peek?: number;
  className?: string;
}) {
  // useId() yields ':r0:' — colons break url(#…) references, so strip them.
  const glowId = `bot-glow-${useId().replace(/:/g, "")}`;
  const reduce = useReducedMotion();

  const sprite = SPRITES[variant];
  const step = cell + gap;
  const pad = Math.round(cell * 0.7); // breathing room so the glow isn't clipped

  const spriteW = sprite[0].length * step - gap;
  const spriteH = sprite.length * step - gap;
  const svgW = spriteW + pad * 2;
  const svgH = spriteH + pad * 2;
  const visibleH = Math.round(pad + spriteH * peek);

  return (
    <div
      className={className}
      style={{ width: svgW, height: visibleH, overflow: "hidden" }}
      aria-hidden="true"
    >
      <motion.svg
        width={svgW}
        height={svgH}
        viewBox={`0 0 ${svgW} ${svgH}`}
        initial={{ y: reduce ? 0 : cell * 1.6, opacity: reduce ? 1 : 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: reduce ? 0 : 0.55, ease }}
        style={{ display: "block", overflow: "visible" }}
      >
        <defs>
          <filter id={glowId} x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation={cell * 0.13} result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {sprite.flatMap((row, r) =>
          row.split("").map((ch, c) => {
            if (ch === ".") return null;
            const live = ch === "2" || ch === "3";
            return (
              <rect
                key={`${r}-${c}`}
                x={pad + c * step}
                y={pad + r * step}
                width={cell}
                height={cell}
                rx={Math.max(2, Math.round(cell * 0.22))}
                fill={live ? "var(--signal)" : "var(--line)"}
                filter={live ? `url(#${glowId})` : undefined}
                className={ch === "2" ? "bot-eye" : ch === "3" ? "bot-antenna" : undefined}
              />
            );
          })
        )}
      </motion.svg>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { profile } from "@/content/profile";

type Day = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };
type ApiResponse = { total?: { lastYear?: number }; contributions?: Day[] };
type Data = { days: Day[]; total: number };

const USERNAME = "subham007ai";
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
/* fill opacity per contribution level 1–4; level 0 uses --line */
const OPACITY = [0, 0.22, 0.45, 0.7, 1];

const CELL = 10;
const GAP = 2;
const STEP = CELL + GAP;
const TOP = 18; // room for month labels
/* Heatmap SVG dimensions are ~53 weeks * 12px + 18px header — reserve
   this height on the skeleton so layout doesn't jump when data arrives. */
const RESERVED_H = TOP + 7 * STEP - GAP;

export default function GitHubActivity() {
  const [data, setData] = useState<Data | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`,
          { cache: "no-store" }
        );
        if (!res.ok) throw new Error("bad status");
        const json: ApiResponse = await res.json();
        const days = json.contributions ?? [];
        if (days.length === 0) throw new Error("empty");
        const total = json.total?.lastYear ?? days.reduce((s, d) => s + d.count, 0);
        if (!cancelled) setData({ days, total });
      } catch {
        if (!cancelled) setFailed(true);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  // Silently hide the section if the API is unreachable — no error splash on Home.
  if (failed) return null;

  return (
    <section className="mx-auto max-w-content px-6 md:px-10 py-12 md:py-16">
      <div className="flex items-end justify-between mb-8">
        <div>
          <div className="dot-matrix mb-3">Activity · @{USERNAME}</div>
          <h2 className="font-display tracking-tightest text-3xl md:text-5xl leading-none">
            Proof of work.
          </h2>
        </div>
        <a
          href={profile.socials.github}
          target="_blank"
          rel="noreferrer"
          className="dot-matrix hover:text-fg"
          style={{ color: "var(--muted)" }}
        >
          GitHub →
        </a>
      </div>

      <div
        className="border hairline border-line rounded-2xl p-5 md:p-6 overflow-x-auto no-scrollbar transition-opacity duration-500"
        style={{ opacity: data ? 1 : 0.5, minHeight: RESERVED_H + 40 }}
      >
        {data ? <Heatmap data={data} /> : <Skeleton />}
      </div>

      <div className="mt-4 flex items-center justify-between flex-wrap gap-3">
        <span className="dot-matrix">
          {data ? `${data.total} contributions · last 12 months` : "Loading activity…"}
        </span>
        <span className="flex items-center gap-1.5" aria-hidden="true">
          <span className="dot-matrix mr-1">Less</span>
          {[0, 1, 2, 3, 4].map(l => (
            <svg key={l} width={CELL} height={CELL}>
              <rect
                width={CELL}
                height={CELL}
                rx={2}
                fill={l === 0 ? "var(--line)" : "var(--signal)"}
                fillOpacity={l === 0 ? 1 : OPACITY[l]}
              />
            </svg>
          ))}
          <span className="dot-matrix ml-1">More</span>
        </span>
      </div>
    </section>
  );
}

function Skeleton() {
  // 53 weeks * 7 days ≈ standard heatmap grid — render as an empty grid of --line cells.
  const cells = [];
  for (let wi = 0; wi < 53; wi++) {
    for (let di = 0; di < 7; di++) {
      cells.push(
        <rect
          key={`${wi}-${di}`}
          x={wi * STEP}
          y={TOP + di * STEP}
          width={CELL}
          height={CELL}
          rx={2}
          fill="var(--line)"
        />
      );
    }
  }
  const width = 53 * STEP - GAP;
  return (
    <svg width={width} height={RESERVED_H} viewBox={`0 0 ${width} ${RESERVED_H}`} aria-hidden="true">
      {cells}
    </svg>
  );
}

function Heatmap({ data }: { data: Data }) {
  const { days, total } = data;
  // pad the front so the first column starts on Sunday
  const firstDow = new Date(days[0].date).getDay();
  const cells: (Day | null)[] = [...Array<null>(firstDow).fill(null), ...days];
  const weeks: (Day | null)[][] = [];
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));

  const width = weeks.length * STEP - GAP;
  const height = TOP + 7 * STEP - GAP;

  // label month changes only — the partial starting month stays unlabeled
  const monthLabels: { x: number; label: string }[] = [];
  let lastMonth = -1;
  weeks.forEach((week, wi) => {
    const first = week.find((d): d is Day => d !== null);
    if (!first) return;
    const m = new Date(first.date).getMonth();
    if (wi === 0) {
      lastMonth = m;
      return;
    }
    if (m !== lastMonth) {
      monthLabels.push({ x: wi * STEP, label: MONTHS[m] });
      lastMonth = m;
    }
  });

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      role="img"
      aria-label={`GitHub contribution heatmap: ${total} contributions in the last 12 months`}
    >
      {monthLabels.map(({ x, label }) => (
        <text
          key={`${label}-${x}`}
          x={x}
          y={10}
          fontSize={9}
          letterSpacing={1}
          fill="var(--muted)"
          fontFamily="var(--font-mono), monospace"
        >
          {label.toUpperCase()}
        </text>
      ))}
      {weeks.map((week, wi) =>
        week.map((day, di) => {
          if (!day) return null;
          return (
            <rect
              key={day.date}
              x={wi * STEP}
              y={TOP + di * STEP}
              width={CELL}
              height={CELL}
              rx={2}
              fill={day.level === 0 ? "var(--line)" : "var(--signal)"}
              fillOpacity={day.level === 0 ? 1 : OPACITY[day.level]}
            >
              <title>{`${day.date} · ${day.count} contribution${day.count === 1 ? "" : "s"}`}</title>
            </rect>
          );
        })
      )}
    </svg>
  );
}

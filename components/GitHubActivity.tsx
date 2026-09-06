"use client";

import { useEffect, useState, useMemo, useRef } from "react";
import { profile } from "@/content/profile";

type Day = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };
type ApiResponse = { total?: { lastYear?: number }; contributions?: Day[] };

type Metrics = {
  total: number;
  currentStreak: number;
  longestStreak: number;
  peakDay: { count: number; date: string };
  activeDays: number;
};

const USERNAME = "subham007ai";
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const DAY_LABELS = [
  { index: 1, label: "Mon" },
  { index: 3, label: "Wed" },
  { index: 5, label: "Fri" }
];

/* Fill opacity per level 1–4; level 0 uses line color */
const OPACITY = [0, 0.35, 0.6, 0.85, 1];

export default function GitHubActivity() {
  const [allDays, setAllDays] = useState<Day[] | null>(null);
  const [range, setRange] = useState<"6m" | "1y">("6m");
  const [failed, setFailed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [tooltip, setTooltip] = useState<{ day: Day; x: number; y: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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
        if (!cancelled) {
          setAllDays(days);
          setLoading(false);
        }
      } catch {
        if (!cancelled) {
          setFailed(true);
          setLoading(false);
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  // Filter days based on selected range (26 weeks for 6m, 52 weeks for 1y)
  const days = useMemo(() => {
    if (!allDays) return [];
    if (range === "6m") {
      // 26 weeks = 182 days
      return allDays.slice(-182);
    }
    return allDays;
  }, [allDays, range]);

  // Calculate live metrics across the selected days
  const metrics: Metrics = useMemo(() => {
    if (!days.length) {
      return { total: 0, currentStreak: 0, longestStreak: 0, peakDay: { count: 0, date: "" }, activeDays: 0 };
    }

    let total = 0;
    let peakDay = { count: 0, date: "" };
    let longestStreak = 0;
    let tempStreak = 0;
    let activeDays = 0;

    days.forEach((d) => {
      total += d.count;
      if (d.count > 0) {
        activeDays++;
        if (d.count > peakDay.count) {
          peakDay = { count: d.count, date: d.date };
        }
        tempStreak++;
        if (tempStreak > longestStreak) longestStreak = tempStreak;
      } else {
        tempStreak = 0;
      }
    });

    // Current streak (working backwards from the most recent day)
    let currentStreak = 0;
    for (let i = days.length - 1; i >= 0; i--) {
      // If today has 0 so far, don't break streak if yesterday was active
      if (i === days.length - 1 && days[i].count === 0) continue;
      if (days[i].count > 0) {
        currentStreak++;
      } else {
        break;
      }
    }

    return { total, currentStreak, longestStreak, peakDay, activeDays };
  }, [days]);

  if (failed) return null;

  // Grid layout metrics based on range
  const CELL = range === "6m" ? 13 : 11;
  const GAP = range === "6m" ? 3.5 : 2.5;
  const STEP = CELL + GAP;
  const LEFT_PAD = 32;
  const TOP = 24;

  // Pad the front of the list so column 0 starts on Sunday
  const firstDow = days.length ? new Date(days[0].date).getDay() : 0;
  const paddedDays: (Day | null)[] = days.length
    ? [...Array<null>(firstDow).fill(null), ...days]
    : [];
  const weeks: (Day | null)[][] = [];
  for (let i = 0; i < paddedDays.length; i += 7) {
    weeks.push(paddedDays.slice(i, i + 7));
  }

  const svgWidth = LEFT_PAD + weeks.length * STEP;
  const svgHeight = TOP + 7 * STEP;

  // Month headers
  const monthLabels: { x: number; label: string }[] = [];
  let lastMonth = -1;
  weeks.forEach((week, wi) => {
    const first = week.find((d): d is Day => d !== null);
    if (!first) return;
    const m = new Date(first.date).getMonth();
    if (m !== lastMonth) {
      monthLabels.push({ x: LEFT_PAD + wi * STEP, label: MONTHS[m] });
      lastMonth = m;
    }
  });

  const handleMouseEnter = (day: Day, e: React.MouseEvent<SVGRectElement>) => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left - containerRect.left + rect.width / 2;
    const y = rect.top - containerRect.top;
    setTooltip({ day, x, y });
  };

  return (
    <section className="mx-auto max-w-content px-6 md:px-10 py-16 md:py-24">
      {/* Glow Filter */}
      <svg width="0" height="0" className="absolute invisible" aria-hidden="true">
        <defs>
          <filter id="cell-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="1.8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-8">
        <div>
          <div className="dot-matrix mb-3 flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-signal shadow-[0_0_8px_var(--signal)] animate-pulse" />
            <span>Activity · @{USERNAME}</span>
          </div>
          <h2 className="font-display font-normal text-3xl md:text-5xl tracking-tight leading-none">
            GitHub Activity
          </h2>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          {/* 6M vs 1Y Toggle */}
          <div className="flex items-center p-1 rounded-full border hairline border-line bg-card/80">
            <button
              onClick={() => setRange("6m")}
              className="dot-matrix text-xs px-3 py-1.5 rounded-full transition-all duration-200"
              style={{
                background: range === "6m" ? "var(--fg)" : "transparent",
                color: range === "6m" ? "var(--bg)" : "var(--muted)",
                fontWeight: range === "6m" ? 600 : 400
              }}
            >
              Last 6 Months
            </button>
            <button
              onClick={() => setRange("1y")}
              className="dot-matrix text-xs px-3 py-1.5 rounded-full transition-all duration-200"
              style={{
                background: range === "1y" ? "var(--fg)" : "transparent",
                color: range === "1y" ? "var(--bg)" : "var(--muted)",
                fontWeight: range === "1y" ? 600 : 400
              }}
            >
              Full Year
            </button>
          </div>

          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            className="editorial-link text-sm hidden sm:inline-flex items-center gap-1"
          >
            GitHub ↗
          </a>
        </div>
      </div>

      {/* Metrics Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 mb-6">
        <div className="p-4 rounded-xl bg-card border hairline border-line">
          <div className="dot-matrix text-[11px] text-muted mb-1">Total Contributions</div>
          <div className="font-display font-normal text-2xl sm:text-3xl text-fgWarm">
            {loading ? "—" : metrics.total}
          </div>
          <div className="text-[11px] text-muted/70 mt-1 font-mono">
            {range === "6m" ? "Past 6 months" : "Past 365 days"}
          </div>
        </div>

        <div className="p-4 rounded-xl bg-card border hairline border-line">
          <div className="dot-matrix text-[11px] text-muted mb-1">Current Streak</div>
          <div className="font-display font-normal text-2xl sm:text-3xl text-fgWarm">
            {loading ? "—" : `${metrics.currentStreak} ${metrics.currentStreak === 1 ? "day" : "days"}`}
          </div>
          <div className="text-[11px] text-muted/70 mt-1 font-mono">Consistent commits</div>
        </div>

        <div className="p-4 rounded-xl bg-card border hairline border-line">
          <div className="dot-matrix text-[11px] text-muted mb-1">Longest Streak</div>
          <div className="font-display font-normal text-2xl sm:text-3xl text-fgWarm">
            {loading ? "—" : `${metrics.longestStreak} days`}
          </div>
          <div className="text-[11px] text-muted/70 mt-1 font-mono">Peak momentum</div>
        </div>

        <div className="p-4 rounded-xl bg-card border hairline border-line">
          <div className="dot-matrix text-[11px] text-muted mb-1">Most Active Day</div>
          <div className="font-display font-normal text-2xl sm:text-3xl text-fgWarm">
            {loading ? "—" : `${metrics.peakDay.count} commits`}
          </div>
          <div className="text-[11px] text-muted/70 mt-1 font-mono">
            {loading || !metrics.peakDay.date ? "—" : formatShortDate(metrics.peakDay.date)}
          </div>
        </div>
      </div>

      {/* Heatmap Card with Floating Tooltip */}
      <div
        ref={containerRef}
        className="relative border hairline border-line rounded-2xl p-5 md:p-6 bg-card/40 backdrop-blur-sm overflow-x-auto no-scrollbar transition-all duration-300"
        onMouseLeave={() => setTooltip(null)}
      >
        {/* Floating Tooltip */}
        {tooltip && (
          <div
            className="pointer-events-none absolute z-30 transform -translate-x-1/2 -translate-y-full mb-2 px-3 py-2 rounded-lg bg-card/95 border hairline border-line-strong shadow-2xl backdrop-blur-md whitespace-nowrap transition-transform duration-75"
            style={{
              left: tooltip.x,
              top: tooltip.y - 6
            }}
          >
            <div className="flex items-center gap-2">
              <span
                className="inline-block w-2.5 h-2.5 rounded-full"
                style={{
                  background: tooltip.day.level === 0 ? "var(--line-strong)" : "var(--signal)",
                  boxShadow: tooltip.day.level >= 2 ? "0 0 8px var(--signal)" : "none"
                }}
              />
              <span className="font-mono text-xs font-semibold text-fg">
                {tooltip.day.count} {tooltip.day.count === 1 ? "contribution" : "contributions"}
              </span>
            </div>
            <div className="dot-matrix text-[10px] text-muted mt-0.5">
              {formatFullDate(tooltip.day.date)}
            </div>
          </div>
        )}

        {loading ? (
          <div className="py-12 flex items-center justify-center">
            <span className="dot-matrix text-muted animate-pulse">Loading live activity stream…</span>
          </div>
        ) : (
          <svg
            width={svgWidth}
            height={svgHeight}
            viewBox={`0 0 ${svgWidth} ${svgHeight}`}
            role="img"
            aria-label={`GitHub contribution heatmap: ${metrics.total} contributions`}
            style={{ overflow: "visible" }}
            className="select-none"
          >
            {/* Day of Week Labels */}
            {DAY_LABELS.map(({ index, label }) => (
              <text
                key={label}
                x={0}
                y={TOP + index * STEP + CELL * 0.8}
                fontSize={9}
                fill="var(--muted)"
                fontFamily="var(--font-mono), monospace"
                className="opacity-70"
              >
                {label}
              </text>
            ))}

            {/* Month Labels */}
            {monthLabels.map(({ x, label }) => (
              <text
                key={`${label}-${x}`}
                x={x}
                y={14}
                fontSize={10}
                letterSpacing={0.5}
                fill="var(--muted)"
                fontFamily="var(--font-mono), monospace"
                className="opacity-80"
              >
                {label}
              </text>
            ))}

            {/* Weeks & Cells */}
            {weeks.map((week, wi) =>
              week.map((day, di) => {
                if (!day) return null;
                const isHovered = tooltip?.day.date === day.date;
                return (
                  <rect
                    key={day.date}
                    x={LEFT_PAD + wi * STEP}
                    y={TOP + di * STEP}
                    width={CELL}
                    height={CELL}
                    rx={3}
                    fill={day.level === 0 ? "var(--line)" : "var(--signal)"}
                    fillOpacity={day.level === 0 ? 0.6 : OPACITY[day.level]}
                    filter={day.level >= 2 ? "url(#cell-glow)" : undefined}
                    className="cursor-pointer transition-all duration-150"
                    style={{
                      transformOrigin: `${LEFT_PAD + wi * STEP + CELL / 2}px ${TOP + di * STEP + CELL / 2}px`,
                      transform: isHovered ? "scale(1.25)" : "scale(1)",
                      stroke: isHovered ? "var(--fg)" : "transparent",
                      strokeWidth: isHovered ? 1 : 0
                    }}
                    onMouseEnter={(e) => handleMouseEnter(day, e)}
                  />
                );
              })
            )}
          </svg>
        )}
      </div>

      {/* Footer / Legend */}
      <div className="mt-5 flex items-center justify-between flex-wrap gap-4">
        <span className="dot-matrix text-muted text-xs">
          {range === "6m" ? "Highlighting recent shipping sprints" : "Complete annual development cadence"} · Live sync with GitHub
        </span>

        <div className="flex items-center gap-2" aria-hidden="true">
          <span className="dot-matrix text-muted text-xs">Less</span>
          <div className="flex items-center gap-1">
            {[0, 1, 2, 3, 4].map((lvl) => (
              <span
                key={lvl}
                className="inline-block w-3 h-3 rounded-[3px] border border-line"
                style={{
                  background: lvl === 0 ? "var(--line)" : "var(--signal)",
                  opacity: lvl === 0 ? 0.6 : OPACITY[lvl],
                  boxShadow: lvl >= 2 ? "0 0 6px rgba(34, 197, 94, 0.4)" : "none"
                }}
              />
            ))}
          </div>
          <span className="dot-matrix text-muted text-xs">More</span>
        </div>
      </div>
    </section>
  );
}

function formatShortDate(dateStr: string): string {
  if (!dateStr) return "";
  const [year, month, day] = dateStr.split("-").map(Number);
  const d = new Date(year, month - 1, day);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function formatFullDate(dateStr: string): string {
  if (!dateStr) return "";
  const [year, month, day] = dateStr.split("-").map(Number);
  const d = new Date(year, month - 1, day);
  return d.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}

import { profile } from "@/content/profile";

type Day = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };
type ApiResponse = { total?: { lastYear?: number }; contributions?: Day[] };

const USERNAME = "subham007ai";
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
/* fill opacity per contribution level 1–4; level 0 uses --line */
const OPACITY = [0, 0.22, 0.45, 0.7, 1];

const CELL = 10;
const GAP = 2;
const STEP = CELL + GAP;
const TOP = 18; // room for month labels

async function getContributions(): Promise<{ days: Day[]; total: number } | null> {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    const data: ApiResponse = await res.json();
    const days = data.contributions ?? [];
    if (days.length === 0) return null;
    const total = data.total?.lastYear ?? days.reduce((s, d) => s + d.count, 0);
    return { days, total };
  } catch {
    return null;
  }
}

export default async function GitHubActivity() {
  const data = await getContributions();
  if (!data) return null;
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

      <div className="border hairline border-line rounded-2xl p-5 md:p-6 overflow-x-auto no-scrollbar">
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
      </div>

      <div className="mt-4 flex items-center justify-between flex-wrap gap-3">
        <span className="dot-matrix">{total} contributions · last 12 months</span>
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

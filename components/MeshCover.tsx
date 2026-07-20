function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export default function MeshCover({ seed, className = "" }: { seed: string; className?: string }) {
  const h = hash(seed);
  const freqX = 0.006 + ((h % 30) / 1000); // 0.006 – 0.036
  const freqY = 0.008 + (((h >> 5) % 25) / 1000);
  const oct = 2 + (h % 3);
  const blur = 8 + ((h >> 8) % 18);
  const rot = (h % 360);
  const id = `mesh-${seed}`;

  return (
    <svg
      className={className}
      viewBox="0 0 400 300"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <filter id={`${id}-f`} x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency={`${freqX} ${freqY}`} numOctaves={oct} seed={h % 10000} />
          <feGaussianBlur stdDeviation={blur} />
          <feColorMatrix type="matrix" values={`
            0 0 0 0 0
            0 0 0 0 0
            0 0 0 0 0
            0 0 0 ${1.6 + ((h >> 12) % 8) / 10} -0.3
          `} />
          <feComposite in2="SourceGraphic" operator="in" />
        </filter>
        <linearGradient id={`${id}-g`} x1="0" y1="0" x2="1" y2="1" gradientTransform={`rotate(${rot} 0.5 0.5)`}>
          <stop offset="0%" stopColor="var(--fg)" stopOpacity="1" />
          <stop offset="100%" stopColor="var(--fg)" stopOpacity="0.35" />
        </linearGradient>
        <pattern id={`${id}-dots`} width="14" height="14" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="0.9" fill="var(--muted)" opacity="0.35" />
        </pattern>
      </defs>
      <rect width="400" height="300" fill="var(--line)" />
      <rect width="400" height="300" fill={`url(#${id}-dots)`} />
      <g filter={`url(#${id}-f)`} opacity="0.7">
        <rect width="400" height="300" fill={`url(#${id}-g)`} />
      </g>
      <g style={{ mixBlendMode: "screen" }}>
        <ellipse cx={200 + ((h % 100) - 50)} cy={150 + (((h >> 6) % 80) - 40)} rx="160" ry="80" fill="var(--fg)" opacity="0.08" />
      </g>
    </svg>
  );
}

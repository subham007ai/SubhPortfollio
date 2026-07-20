import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-content px-6 md:px-10 py-32 text-center dot-grid">
      <h1
        className="font-display font-extrabold tracking-tightest leading-none"
        style={{
          fontSize: "clamp(120px, 30vw, 360px)",
          WebkitTextStroke: "1.5px var(--fg)",
          color: "transparent"
        }}
      >
        404
      </h1>
      <div className="dot-matrix mt-6">ROUTE NOT FOUND · NOTHING HERE</div>
      <Link
        href="/"
        className="inline-block mt-10 dot-matrix border hairline border-line rounded-full px-5 py-2.5 hover:bg-fg hover:text-bg transition-colors"
      >
        ← BACK TO INDEX
      </Link>
    </div>
  );
}

const capabilities = [
  ["Applied AI", "Python, computer vision, LLM workflows"],
  ["Web products", "Next.js, React, TypeScript"],
  ["Data systems", "PostgreSQL, APIs, automation"],
  ["Design execution", "Tailwind, motion, responsive UI"],
];

export default function TechStack() {
  return (
    <section className="mx-auto max-w-content px-6 md:px-10 py-12 md:py-16 border-y hairline border-y-line">
      <div className="grid grid-cols-1 md:grid-cols-[0.85fr_2fr] gap-8 md:gap-12">
        <div>
          <p className="dot-matrix mb-3">Capabilities</p>
          <h2 className="font-display text-3xl md:text-4xl tracking-tight leading-none">A focused toolkit.</h2>
        </div>
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-7">
          {capabilities.map(([name, detail]) => (
            <div key={name} className="border-t hairline border-t-line pt-3">
              <dt className="font-display text-xl tracking-tight">{name}</dt>
              <dd className="mt-1 text-sm leading-relaxed text-muted">{detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

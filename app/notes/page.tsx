import type { Metadata } from "next";
import { notes } from "@/content/notes";

export const metadata: Metadata = {
  title: "Notes — Subham Sarangi",
  description: "Short writing from the build — what worked, what broke, what I'd do differently."
};

export default function NotesPage() {
  return (
    <div className="mx-auto max-w-content px-6 md:px-10 pt-16 md:pt-24 pb-24">
      <div className="dot-matrix mb-4">Index · 004</div>
      <h1 className="font-display tracking-tightest text-5xl md:text-7xl leading-[0.9] mb-4">
        Notes from<br /><span className="text-fg/60">the build.</span>
      </h1>
      <p className="text-muted max-w-xl mb-16">
        Short writing as the AI/ML arc unfolds — what worked, what broke, what I&apos;d do differently.
      </p>

      {notes.length === 0 ? (
        <div className="border hairline border-line rounded-2xl p-12 md:p-20 text-center">
          <div className="font-display text-[18vw] md:text-[10vw] leading-none text-fg/15 select-none">—</div>
          <div className="dot-matrix mt-6">First note coming soon</div>
          <p className="text-muted mt-2 max-w-md mx-auto">
            Currently in deep learning · writing comes after the Image Classifier ships.
          </p>
        </div>
      ) : (
        <ul className="divide-y hairline divide-line border-y hairline border-y-line">
          {notes.map(n => (
            <li key={n.slug} className="py-6 grid grid-cols-12 gap-4 items-baseline">
              <div className="dot-matrix col-span-3 md:col-span-2">{n.date}</div>
              <div className="col-span-9 md:col-span-10">
                <h2 className="font-display text-2xl md:text-3xl tracking-tight mb-1">{n.title}</h2>
                <p className="text-muted">{n.dek}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/content/projects";
import { scrollReveal } from "@/lib/motion";
import MeshCover from "./MeshCover";

export default function FeaturedWork() {
  const featured = projects.filter(p => p.featured).slice(0, 3);
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const step = (track: HTMLDivElement) => {
    const card = track.querySelector<HTMLElement>("[data-card]");
    if (!card) return 1;
    const gap = parseFloat(getComputedStyle(track).columnGap || "16");
    return card.offsetWidth + gap;
  };

  const onScroll = () => {
    const t = trackRef.current;
    if (!t) return;
    if (t.scrollLeft > 8 && !scrolled) setScrolled(true);
    const i = Math.round(t.scrollLeft / step(t));
    setActive(Math.min(featured.length - 1, Math.max(0, i)));
  };

  const jumpTo = (i: number) => {
    const t = trackRef.current;
    if (!t) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    t.scrollTo({ left: i * step(t), behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <section className="mx-auto max-w-content px-6 md:px-10 py-12 md:py-16">
      <div className="flex items-end justify-between mb-12">
        <div>
          <div className="dot-matrix mb-3">Selected work · 01 → 03</div>
          <h2 className="font-display tracking-tightest text-4xl md:text-6xl leading-none">
            Built things.<br /><span className="text-fg/60">Not just notebooks.</span>
          </h2>
        </div>
        <Link href="/work" className="dot-matrix underline-offset-4 hover:text-fg" style={{ color: "var(--muted)" }}>
          All work →
        </Link>
      </div>

      <motion.div
        variants={scrollReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <div
          ref={trackRef}
          onScroll={onScroll}
          role="list"
          aria-label="Featured projects"
          className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-px-6 md:scroll-px-10 -mx-6 md:-mx-10 px-6 md:px-10"
        >
          {featured.map((p, i) => (
            <div key={p.id} data-card role="listitem" className="snap-start shrink-0 w-[80vw] md:w-[42vw] max-w-[540px]">
              <Link
                href={`/work?p=${p.id}`}
                className="group block border hairline border-line rounded-2xl p-5 md:p-6 h-full hover:bg-line/40 transition-colors"
              >
                <div className="aspect-[16/10] rounded-xl bg-line/40 mb-5 overflow-hidden relative">
                  {p.cover ? (
                    <Image
                      src={p.cover}
                      alt={p.title}
                      fill
                      sizes="(min-width: 768px) 42vw, 80vw"
                      className="object-cover transition-transform duration-700 ease-out scale-100 group-hover:scale-[1.04]"
                    />
                  ) : (
                    <MeshCover seed={p.id} className="absolute inset-0 w-full h-full" />
                  )}
                  <div className="absolute inset-0 flex items-end p-5 pointer-events-none">
                    <span className="font-display text-7xl text-fg/25 leading-none mix-blend-difference">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between dot-matrix mb-2">
                  <span>{p.kind}</span>
                  <span>{p.year}</span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl tracking-tight mb-2">{p.title}</h3>
                <p className="text-muted text-sm md:text-base leading-relaxed">{p.one}</p>
                <div className="mt-5 flex gap-2 flex-wrap">
                  {p.stack.slice(0, 3).map(s => (
                    <span key={s} className="dot-matrix border hairline border-line rounded-full px-2.5 py-1">{s}</span>
                  ))}
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            {featured.map((p, i) => (
              <button
                key={p.id}
                onClick={() => jumpTo(i)}
                aria-label={`Go to project ${i + 1}: ${p.title}`}
                aria-current={active === i}
                className="w-2 h-2 rounded-full transition-colors"
                style={{ background: active === i ? "var(--fg)" : "var(--line)" }}
              />
            ))}
          </div>
          {!scrolled && (
            <span className="dot-matrix hidden md:block" aria-hidden="true">
              Scroll →
            </span>
          )}
        </div>
      </motion.div>
    </section>
  );
}

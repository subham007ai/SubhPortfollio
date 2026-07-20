"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/content/projects";
import { scrollReveal } from "@/lib/motion";
import MeshCover from "./MeshCover";

export default function FeaturedWork() {
  const featured = projects.filter(p => p.featured).slice(0, 3);
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {featured.map((p, i) => (
          <motion.div
            key={p.id}
            variants={scrollReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.08 }}
          >
            <Link href={`/work?p=${p.id}`} className="group block border hairline border-line rounded-2xl p-6 h-full hover:bg-line/40 transition-colors">
              <div className="aspect-[4/3] rounded-xl bg-line/40 mb-5 overflow-hidden relative">
                {p.cover ? (
                  <Image
                    src={p.cover}
                    alt={p.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out scale-100 group-hover:scale-[1.03]"
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
              <h3 className="font-display text-2xl tracking-tight mb-2">{p.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{p.one}</p>
              <div className="mt-5 flex gap-2 flex-wrap">
                {p.stack.slice(0, 3).map(s => (
                  <span key={s} className="dot-matrix border hairline border-line rounded-full px-2.5 py-1">{s}</span>
                ))}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

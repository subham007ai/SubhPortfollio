"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects, type Project } from "@/content/projects";
import { ease } from "@/lib/motion";
import MeshCover from "@/components/MeshCover";

const FILTERS = ["All", ...Array.from(new Set(projects.map(p => p.kind)))];

export default function WorkClient() {
  const [filter, setFilter] = useState("All");

  const list = useMemo(
    () => projects.filter(p => filter === "All" || p.kind === filter),
    [filter]
  );

  return (
    <div className="mx-auto max-w-content px-6 md:px-10 pt-16 md:pt-24 pb-24">
      <div className="dot-matrix mb-4">Index · 002</div>
      <h1 className="font-display tracking-tightest text-5xl md:text-7xl leading-[0.9] mb-10">
        Work that ships,<br /><span className="text-fg/60">not screenshots.</span>
      </h1>

      <div className="flex flex-wrap gap-2 mb-10">
        {FILTERS.map(f => {
          const active = f === filter;
          return (
            <button
              key={f}
              onClick={() => setFilter(f)}
              aria-pressed={active}
              className="dot-matrix px-3 py-1.5 rounded-full border hairline border-line transition-colors"
              style={{
                color: active ? "var(--bg)" : "var(--muted)",
                background: active ? "var(--fg)" : "transparent"
              }}
            >
              {f}
            </button>
          );
        })}
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {list.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ project: p, index }: { project: Project; index: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease, delay: index * 0.06 }}
      className="border hairline border-line rounded-2xl overflow-hidden bg-bg"
    >
      <Link href={`/work/${p.id}`} className="group block relative aspect-[16/9] overflow-hidden">
        {p.cover ? (
          <Image
            src={p.cover}
            alt={p.title}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        ) : (
          <MeshCover seed={p.id} className="absolute inset-0 w-full h-full" />
        )}
        <div className="absolute left-5 top-5 dot-matrix bg-bg/70 backdrop-blur px-3 py-1.5 rounded-full border hairline border-line">
          {p.kind} · {p.year}
        </div>
        {p.status === "in-progress" && (
          <div className="absolute right-5 top-5 dot-matrix bg-bg/70 backdrop-blur px-3 py-1.5 rounded-full border hairline border-line flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--signal)" }} />
            LIVE · IN PROGRESS
          </div>
        )}
      </Link>

      <div className="p-6 md:p-7">
        <Link href={`/work/${p.id}`} className="block group">
          <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-3 group-hover:underline underline-offset-4">{p.title}</h2>
        </Link>
        <p className="text-fg/80 mb-5">{p.one}</p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {p.stack.map(s => (
            <span key={s} className="dot-matrix border hairline border-line rounded-full px-2.5 py-1">{s}</span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          <Link
            href={`/work/${p.id}`}
            className="dot-matrix border hairline border-line rounded-full px-4 py-2 hover:bg-fg hover:text-bg transition-colors"
          >
            Read case study →
          </Link>
          {p.links.map(l => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="dot-matrix border hairline border-line rounded-full px-4 py-2 hover:bg-fg hover:text-bg transition-colors"
            >
              {l.label} ↗
            </a>
          ))}
        </div>
      </div>
    </motion.li>
  );
}

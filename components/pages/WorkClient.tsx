"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects, type Project } from "@/content/projects";
import { ease } from "@/lib/motion";
import { GitHubIcon, GlobeIcon, ExternalLinkIcon } from "@/components/SocialDock";

const FILTERS = ["All", ...Array.from(new Set(projects.map(p => p.kind)))];

export default function WorkClient() {
  const [filter, setFilter] = useState("All");

  const list = useMemo(
    () => projects.filter(p => filter === "All" || p.kind === filter),
    [filter]
  );

  return (
    <div className="mx-auto max-w-content px-4 sm:px-6 md:px-10 pt-10 sm:pt-16 md:pt-24 pb-20 sm:pb-24">
      <div className="dot-matrix mb-3 sm:mb-4">Portfolio</div>
      <h1 className="font-display font-normal tracking-tight text-4xl sm:text-5xl md:text-7xl leading-[0.9] mb-8 sm:mb-10">
        All Projects
      </h1>

      <div className="flex flex-wrap gap-2 mb-8 sm:mb-10">
        {FILTERS.map(f => {
          const active = f === filter;
          return (
            <button
              key={f}
              onClick={() => setFilter(f)}
              aria-pressed={active}
              className="dot-matrix px-3.5 py-1.5 min-h-[36px] flex items-center rounded-full border hairline border-line transition-all active:scale-95 select-none"
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
      className={p.cover ? "border hairline border-line overflow-hidden bg-card rounded-2xl card-elevation" : "border-t hairline border-t-line pt-5"}
      style={p.cover ? { borderRadius: "16px", overflow: "hidden" } : undefined}
    >
      {p.cover && (
        <Link
          href={`/work/${p.id}`}
          className="group block p-2 sm:p-2.5 rounded-t-2xl bg-card border-b hairline border-b-line"
        >
          <div
            className="relative aspect-[3/2] w-full rounded-xl overflow-hidden bg-bg/40 isolate"
            style={{ borderRadius: "10px", overflow: "hidden" }}
          >
            <Image
              src={p.cover}
              alt={p.title}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
          </div>
        </Link>
      )}

      <div className={p.cover ? "p-6 md:p-7" : "pt-1 pb-3"}>
        <div className="flex items-baseline justify-between gap-4 mb-3">
          <p className="dot-matrix">{p.kind} · {p.year}</p>
          {p.status === "in-progress" && <p className="dot-matrix">In progress</p>}
        </div>
        <Link href={`/work/${p.id}`} className="block group">
          <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-3 group-hover:underline underline-offset-4">{p.title}</h2>
        </Link>
        <p className="text-fg/80 mb-5">{p.one}</p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {p.stack.slice(0, 5).map(s => (
            <span key={s} className="dot-matrix border hairline border-line rounded-full px-2.5 py-1">{s}</span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-1">
          <Link
            href={`/work/${p.id}`}
            className="dot-matrix border hairline border-line rounded-full px-4 py-2 min-h-[40px] inline-flex items-center hover:bg-fg hover:text-bg active:scale-95 transition-all text-xs tracking-wider mr-1"
          >
            Read case study →
          </Link>
          {p.links.map(l => {
            const isGit = l.label.toLowerCase().includes("git");
            const isLive = l.label.toLowerCase().includes("live");
            return (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                title={`${l.label} — ${p.title}`}
                aria-label={`${l.label} link for ${p.title}`}
                className="p-2 inline-flex items-center justify-center text-muted hover:text-fg hover:scale-115 active:scale-90 transition-all duration-200 group"
              >
                {isGit ? (
                  <GitHubIcon className="w-[19px] h-[19px] transition-transform duration-200 group-hover:scale-110" />
                ) : isLive ? (
                  <GlobeIcon className="w-[19px] h-[19px] transition-transform duration-200 group-hover:scale-110" />
                ) : (
                  <ExternalLinkIcon className="w-[19px] h-[19px] transition-transform duration-200 group-hover:scale-110" />
                )}
                <span className="sr-only">{l.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </motion.li>
  );
}

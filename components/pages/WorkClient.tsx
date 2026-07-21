"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { projects, type Project } from "@/content/projects";
import { ease } from "@/lib/motion";
import MeshCover from "@/components/MeshCover";
import Lightbox, { type LightboxPhoto } from "@/components/Lightbox";

const FILTERS = ["All", ...Array.from(new Set(projects.map(p => p.kind)))];

export default function WorkClient() {
  const searchParams = useSearchParams();
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState<string | null>(null);
  const [box, setBox] = useState<LightboxPhoto | null>(null);
  const deepLinked = useRef(false);

  useEffect(() => {
    if (deepLinked.current) return;
    const p = searchParams.get("p");
    if (p && projects.some(pr => pr.id === p)) {
      deepLinked.current = true;
      setOpen(p);
      setTimeout(() => {
        document.getElementById(`project-${p}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 150);
    }
  }, [searchParams]);

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
          <ProjectCard
            key={p.id}
            project={p}
            index={i}
            open={open === p.id}
            onToggle={() => setOpen(open === p.id ? null : p.id)}
            onPhoto={setBox}
          />
        ))}
      </ul>
      <Lightbox photo={box} onClose={() => setBox(null)} />
    </div>
  );
}

function ProjectCard({ project: p, open, onToggle, index, onPhoto }: { project: Project; open: boolean; onToggle: () => void; index: number; onPhoto: (ph: LightboxPhoto) => void }) {
  return (
    <motion.li
      id={`project-${p.id}`}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease, delay: index * 0.06 }}
      className="border hairline border-line rounded-2xl overflow-hidden bg-bg scroll-mt-20"
    >
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="w-full text-left hover:bg-line/30 transition-colors"
      >
        <div className="relative aspect-[16/9] overflow-hidden">
          {p.cover ? (
            <Image
              src={p.cover}
              alt={p.title}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
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
        </div>
        <div className="p-6 md:p-7">
          <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-3">{p.title}</h2>
          <p className="text-fg/80">{p.one}</p>
          <div className="mt-5 flex justify-between items-center">
            <div className="flex flex-wrap gap-1.5">
              {p.stack.slice(0, 4).map(s => (
                <span key={s} className="dot-matrix border hairline border-line rounded-full px-2.5 py-1">{s}</span>
              ))}
            </div>
            <span className="dot-matrix">{open ? "Collapse —" : "Expand +"}</span>
          </div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease }}
            className="overflow-hidden border-t hairline border-t-line"
          >
            <div className="p-6 md:p-7 space-y-6">
              {(p.client || p.role || p.timeline) && (
                <dl className="grid grid-cols-1 md:grid-cols-3 gap-4 border-b hairline border-b-line pb-6">
                  {p.client && (<div><dt className="dot-matrix mb-1.5">Client</dt><dd className="text-fg/90 text-sm">{p.client}</dd></div>)}
                  {p.role && (<div><dt className="dot-matrix mb-1.5">Role</dt><dd className="text-fg/90 text-sm">{p.role}</dd></div>)}
                  {p.timeline && (<div><dt className="dot-matrix mb-1.5">Timeline</dt><dd className="text-fg/90 text-sm">{p.timeline}</dd></div>)}
                </dl>
              )}
              <Block label="Problem" value={p.problem} />
              <Block label="Approach" value={p.approach} />
              <Block label="Outcome" value={p.outcome} />
              <div>
                <div className="dot-matrix mb-3">Full stack</div>
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map(s => (
                    <span key={s} className="dot-matrix border hairline border-line rounded-full px-2.5 py-1">{s}</span>
                  ))}
                </div>
              </div>
              {p.screenshots && p.screenshots.length > 0 && (
                <div>
                  <div className="dot-matrix mb-3">Screenshots</div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {p.screenshots.map((s, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => { e.stopPropagation(); onPhoto(s); }}
                        aria-label={`Open screenshot: ${s.caption}`}
                        className="group relative aspect-[4/3] rounded-lg overflow-hidden border hairline border-line bg-line/40"
                      >
                        <Image
                          src={s.src}
                          alt={s.caption}
                          fill
                          sizes="(min-width:768px) 12vw, 50vw"
                          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <div className="flex gap-3 pt-2">
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
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
}

function Block({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="dot-matrix mb-2">{label}</div>
      <p className="text-fg/90 leading-relaxed">{value}</p>
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/content/projects";
import { scrollReveal } from "@/lib/motion";
import Lightbox, { type LightboxPhoto } from "@/components/Lightbox";

export default function CaseStudyClient({ project: p, next }: { project: Project; next: Project }) {
  const [box, setBox] = useState<LightboxPhoto | null>(null);

  return (
    <div className="pb-24">
      {/* Back link */}
      <div className="mx-auto max-w-content px-4 sm:px-6 md:px-10 pt-6 sm:pt-8 md:pt-12">
        <Link href="/work" className="dot-matrix hover:text-fg py-1 inline-block transition-colors" style={{ color: "var(--muted)" }}>
          ← All work
        </Link>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-content px-4 sm:px-6 md:px-10 pt-6 sm:pt-8 md:pt-12">
        <div className="dot-matrix mb-4">
          {p.kind} · {p.year}
          {p.status === "in-progress" && (
            <>
              {" · "}
              <span style={{ color: "var(--signal)" }}>● Live · In progress</span>
            </>
          )}
        </div>
        <h1 className="font-display tracking-tightest text-4xl md:text-7xl leading-[0.95] mb-8">
          {p.title}
        </h1>
        {p.cover && (
          <div
            className="rounded-2xl overflow-hidden border hairline border-line bg-card p-2 sm:p-3 card-elevation isolate"
            style={{ borderRadius: "16px" }}
          >
            <div
              className="relative aspect-[3/2] w-full rounded-xl overflow-hidden bg-bg/40 isolate"
              style={{ borderRadius: "10px", overflow: "hidden" }}
            >
              <Image
                src={p.cover}
                alt={p.title}
                fill
                sizes="(min-width: 768px) 1200px, 100vw"
                priority
                className="object-contain"
              />
            </div>
          </div>
        )}
      </section>

      {/* Meta strip */}
      {(p.client || p.role || p.timeline) && (
        <motion.section
          variants={scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="mx-auto max-w-content px-4 sm:px-6 md:px-10 pt-12 sm:pt-16"
        >
          <dl className="grid grid-cols-1 md:grid-cols-3 gap-6 border-y hairline border-y-line py-6 sm:py-8">
            {p.client && (
              <div>
                <dt className="dot-matrix mb-2">Client</dt>
                <dd className="text-fg/90">{p.client}</dd>
              </div>
            )}
            {p.role && (
              <div>
                <dt className="dot-matrix mb-2">Role</dt>
                <dd className="text-fg/90">{p.role}</dd>
              </div>
            )}
            {p.timeline && (
              <div>
                <dt className="dot-matrix mb-2">Timeline</dt>
                <dd className="text-fg/90">{p.timeline}</dd>
              </div>
            )}
          </dl>
        </motion.section>
      )}

      {/* Overview / lead */}
      <motion.section
        variants={scrollReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto max-w-content px-4 sm:px-6 md:px-10 pt-12 sm:pt-16 md:pt-24"
      >
        <p className="font-display tracking-tight text-2xl md:text-4xl leading-[1.15] max-w-3xl">
          {p.one}
        </p>
      </motion.section>

      {/* Case Study Pending Notice */}
      {!p.problem && !p.approach && !p.outcome && (
        <motion.section
          variants={scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-content px-4 sm:px-6 md:px-10 pt-10 sm:pt-12"
        >
          <div className="p-6 rounded-2xl border hairline border-line bg-card/60 max-w-3xl">
            <div className="dot-matrix mb-2 text-muted">Case Study · Coming Soon</div>
            <p className="text-fg/80 text-base leading-relaxed">
              Detailed technical breakdown and architecture deep-dive are currently in preparation. In the meantime, explore the live deployment and source repository via the links below.
            </p>
          </div>
        </motion.section>
      )}

      {/* Problem */}
      <Section label="Problem" body={p.problem} />

      {/* Approach */}
      <Section label="Approach" body={p.approach} />

      {/* Screenshots gallery — full-width, stacked */}
      {p.screenshots && p.screenshots.length > 0 && (
        <section className="mx-auto max-w-content px-4 sm:px-6 md:px-10 pt-12 sm:pt-16 md:pt-24">
          <div className="dot-matrix mb-4 sm:mb-6">Screenshots · {p.screenshots.length}</div>
          <div className="space-y-4 md:space-y-6">
            {p.screenshots.map((s) => (
              <motion.figure
                key={s.src}
                variants={scrollReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
              >
                <button
                  onClick={() => setBox(s)}
                  aria-label={`Open screenshot: ${s.caption}`}
                  className="group block w-full relative aspect-[16/9] rounded-2xl overflow-hidden border hairline border-line bg-line/40 active:scale-[0.99] transition-transform"
                >
                  <Image
                    src={s.src}
                    alt={s.caption}
                    fill
                    sizes="(min-width: 768px) 1200px, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                </button>
                <figcaption className="dot-matrix mt-2.5 sm:mt-3 text-[10px] sm:text-[11px]">{s.caption}</figcaption>
              </motion.figure>
            ))}
          </div>
        </section>
      )}

      {/* Outcome */}
      <Section label="Outcome" body={p.outcome} />

      {/* Stack */}
      <motion.section
        variants={scrollReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto max-w-content px-4 sm:px-6 md:px-10 pt-12 sm:pt-16 md:pt-24"
      >
        <div className="dot-matrix mb-4">Full stack</div>
        <div className="flex flex-wrap gap-2">
          {p.stack.map(s => (
            <span key={s} className="dot-matrix border hairline border-line rounded-full px-3 py-1.5">{s}</span>
          ))}
        </div>
      </motion.section>

      {/* Links */}
      {p.links.length > 0 && (
        <motion.section
          variants={scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-content px-4 sm:px-6 md:px-10 pt-8 sm:pt-10"
        >
          <div className="flex flex-wrap gap-3">
            {p.links.map(l => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="dot-matrix border hairline border-line rounded-full px-4 py-2 min-h-[40px] inline-flex items-center hover:bg-fg hover:text-bg active:scale-95 transition-all"
              >
                {l.label} ↗
              </a>
            ))}
          </div>
        </motion.section>
      )}

      {/* Next project */}
      <motion.section
        variants={scrollReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto max-w-content px-4 sm:px-6 md:px-10 pt-16 sm:pt-24 md:pt-32"
      >
        <Link
          href={`/work/${next.id}`}
          className="group block border hairline border-line rounded-2xl p-5 sm:p-6 md:p-8 hover:bg-line/40 active:scale-[0.99] transition-all"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="dot-matrix text-[10px] sm:text-[11px]">Next · {next.kind} · {next.year}</span>
            <span className="dot-matrix group-hover:text-fg transition-colors" style={{ color: "var(--muted)" }}>
              Read case study →
            </span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl md:text-5xl tracking-tightest leading-none">{next.title}</h3>
          <p className="text-muted mt-2.5 sm:mt-3 max-w-2xl text-sm sm:text-base leading-relaxed">{next.one}</p>
        </Link>
      </motion.section>

      <Lightbox photo={box} onClose={() => setBox(null)} />
    </div>
  );
}

function Section({ label, body }: { label: string; body?: string }) {
  if (!body || !body.trim()) return null;
  return (
    <motion.section
      variants={scrollReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="mx-auto max-w-content px-4 sm:px-6 md:px-10 pt-12 sm:pt-16 md:pt-24"
    >
      <div className="dot-matrix mb-3 sm:mb-4">{label}</div>
      <div className="text-fg/90 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl space-y-4">
        {body.split("\n\n").map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </motion.section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/content/profile";
import { scrollReveal } from "@/lib/motion";

export default function ContactClient() {
  const [copied, setCopied] = useState(false);
  const [cvNote, setCvNote] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };
  const onCv = () => {
    setCvNote(true);
    setTimeout(() => setCvNote(false), 2200);
  };

  return (
    <div className="relative mx-auto max-w-content px-6 md:px-10 pt-16 md:pt-24 pb-24 dot-grid">
      <div className="dot-matrix mb-4">Index · 005</div>
      <h1 className="font-display tracking-tightest text-5xl md:text-7xl leading-[0.9] mb-6">
        Say hello.<br /><span className="text-fg/60">No form. No funnel.</span>
      </h1>
      <p className="text-muted max-w-xl mb-16">
        Tap the address to copy. Or find me elsewhere — DMs open.
      </p>

      <button
        onClick={copy}
        className="block w-full text-left group"
        data-cursor="hover"
      >
        <span className="font-display tracking-tightest break-all leading-[0.95] block text-[10vw] md:text-[7vw] font-extrabold underline-offset-[0.12em] group-hover:underline">
          {profile.email}
        </span>
        <div className="dot-matrix mt-4 flex items-center gap-3">
          <AnimatePresence mode="wait" initial={false}>
            {copied ? (
              <motion.span
                key="copied"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                style={{ color: "var(--signal)" }}
              >
                ● Copied to clipboard
              </motion.span>
            ) : (
              <motion.span
                key="tap"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
              >
                ⌘ Click anywhere on the address to copy
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </button>

      <div className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <SocialLink label="GitHub" href={profile.socials.github} handle="@subham007ai" />
        <SocialLink label="LinkedIn" href={profile.socials.linkedin} handle="in/subham-sarangi007" />
        <SocialLink label="X / Twitter" href={profile.socials.x} handle="@subhamxai" />
      </div>

      {/* CV button */}
      <div className="mt-12 border hairline border-line rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <div>
          <div className="dot-matrix mb-2">Resume · CV</div>
          <div className="font-display text-2xl md:text-3xl tracking-tight">
            One page. The whole arc.
          </div>
          <p className="text-muted mt-1">PDF — direct download, no email gate.</p>
        </div>
        <div className="flex flex-col items-start md:items-end gap-2">
          <button
            onClick={onCv}
            data-cursor="hover"
            className="inline-flex items-center gap-3 dot-matrix border hairline border-line rounded-full px-5 py-3 hover:bg-fg hover:text-bg transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
            Download CV (PDF)
          </button>
          <AnimatePresence>
            {cvNote && (
              <motion.span
                key="cvnote"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                className="dot-matrix"
                style={{ color: "var(--signal)" }}
              >
                ● COMING SOON · CHECK BACK
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Closing wordmark — Contact page only */}
      <motion.div
        variants={scrollReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-28 md:mt-40 -mx-6 md:-mx-10"
      >
        <h2
          className="font-display font-extrabold leading-[0.82] tracking-tightest text-center break-words select-none cursor-default"
          style={{
            fontSize: "clamp(48px, 16vw, 220px)",
            WebkitTextStroke: "1px var(--fg)",
            color: "transparent",
            transition: "color 0.5s ease"
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--fg)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "transparent"; }}
        >
          SUBHAM<br />SARANGI
        </h2>
      </motion.div>
    </div>
  );
}

function SocialLink({ label, href, handle }: { label: string; href: string; handle: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group block border hairline border-line rounded-2xl p-6 hover:bg-line/40 transition-colors"
    >
      <div className="dot-matrix mb-3 flex items-center justify-between">
        <span>{label}</span>
        <span className="opacity-50 group-hover:opacity-100 transition-opacity">↗</span>
      </div>
      <div className="font-display text-xl tracking-tight">{handle}</div>
    </a>
  );
}

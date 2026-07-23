"use client";

import { motion } from "framer-motion";
import { charItem, charStagger, ease } from "@/lib/motion";
import { profile } from "@/content/profile";

const FIRST = "Subham";
const LAST = "Sarangi";

export default function Hero() {
  return (
    <section className="relative pt-20 md:pt-32 pb-12 md:pb-16 dot-grid">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <motion.div
          className="dot-matrix flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="w-2 h-2 rounded-full" style={{ background: "var(--signal)" }} />
          <span>Available · {profile.availability} · {new Date().getFullYear()}</span>
        </motion.div>

        <motion.h1
          variants={charStagger}
          initial="hidden"
          animate="visible"
          aria-label="Subham Sarangi"
          className="mt-6 font-display tracking-tightest leading-[0.85] text-[14vw] md:text-[10vw] lg:text-[9vw] font-extrabold"
        >
          <span aria-hidden="true" className="block overflow-hidden">
            <Word word={FIRST} />
          </span>
          <span aria-hidden="true" className="block overflow-hidden text-fg/70">
            <Word word={LAST} />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.6 }}
          className="mt-10 text-fg text-xl md:text-2xl leading-snug max-w-xl"
        >
          AI engineering student at SOA. Shipping Python, ML and web in public — because your life won&rsquo;t change until you become the priority.
        </motion.p>
      </div>
    </section>
  );
}

function Word({ word }: { word: string }) {
  return (
    <span className="inline-block">
      {word.split("").map((c, i) => (
        <motion.span key={i} variants={charItem} className="inline-block">
          {c}
        </motion.span>
      ))}
    </span>
  );
}

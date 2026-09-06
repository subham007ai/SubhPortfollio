"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profile } from "@/content/profile";
import { now } from "@/content/now";
import { topSkills, languages } from "@/content/skills";
import { scrollReveal, ease } from "@/lib/motion";
import SkillsGrid from "@/components/SkillsGrid";

export default function AboutClient() {
  return (
    <div className="mx-auto max-w-content px-4 sm:px-6 md:px-10 pt-10 sm:pt-16 md:pt-24 pb-16">
      <div className="dot-matrix mb-3 sm:mb-4">About</div>
      <h1 className="font-display tracking-tightest text-4xl sm:text-5xl md:text-7xl leading-[0.9] mb-8 sm:mb-10">
        About me.<br /><span className="text-fg/60">Building, learning, and shipping.</span>
      </h1>

      {/* Long bio */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-24">
        <div className="md:col-span-3">
          <motion.div
            variants={scrollReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="relative w-48 md:w-full max-w-[220px] aspect-[4/5]"
          >
            <Image
              src="/portrait-dark.webp"
              alt="Subham Sarangi — line art portrait"
              fill
              sizes="220px"
              className="object-contain dark-only"
              priority
            />
            <Image
              src="/portrait-light.webp"
              alt="Subham Sarangi — line art portrait"
              fill
              sizes="220px"
              className="object-contain light-only"
              priority
            />
          </motion.div>
        </div>
        <div className="md:col-span-9 space-y-5 max-w-2xl">
          {profile.longBio.map((p, i) => (
            <motion.p
              key={i}
              variants={scrollReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.06 }}
              className={i === 0 ? "text-2xl md:text-3xl text-fg leading-snug font-display tracking-tight" : "text-fg/90 text-base md:text-lg leading-relaxed"}
            >
              {p}
            </motion.p>
          ))}
        </div>
      </section>

      {/* Top skills strip */}
      <section className="mb-24">
        <div className="dot-matrix mb-6">Key Focus Areas</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line border hairline border-line rounded-2xl overflow-hidden">
          {topSkills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: i * 0.08 }}
              className="bg-bg p-6 md:p-8"
            >
              <div className="dot-matrix mb-3" style={{ color: "var(--signal)" }}>0{i + 1}</div>
              <div className="font-display text-2xl md:text-3xl tracking-tight leading-tight mb-3">{s.name}</div>
              <p className="text-muted leading-relaxed text-sm md:text-base">{s.meaning}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Full stack */}
      <section className="mb-24">
        <div className="dot-matrix mb-6">Technologies &amp; Tools</div>
        <SkillsGrid />
      </section>

      {/* Languages + Now */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <div className="border hairline border-line rounded-2xl p-6 md:p-8">
          <div className="dot-matrix mb-6">Spoken Languages</div>
          <ul className="space-y-4">
            {languages.map(l => (
              <li key={l.name} className="flex items-baseline justify-between border-b hairline border-b-line pb-3">
                <span className="font-display text-xl tracking-tight">{l.name}</span>
                <span className="dot-matrix">{l.level}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="border hairline border-line rounded-2xl p-6 md:p-8">
          <div className="dot-matrix mb-6">Currently Working On</div>
          <ul className="space-y-4">
            {now.workingOn.map((item, i) => (
              <li key={i} className="border-b hairline border-b-line pb-3 text-fg/90 leading-relaxed text-sm md:text-base">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
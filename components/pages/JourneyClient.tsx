"use client";

import { motion } from "framer-motion";
import { journey } from "@/content/journey";
import { certs } from "@/content/roadmap";
import HackathonGallery from "@/components/HackathonGallery";
import { scrollReveal } from "@/lib/motion";

export default function JourneyClient() {
  return (
    <div className="mx-auto max-w-content px-6 md:px-10 pt-16 md:pt-24 pb-24">
      <div className="dot-matrix mb-4">Index · 003</div>
      <h1 className="font-display tracking-tightest text-5xl md:text-7xl leading-[0.9] mb-4">
        A quiet path,<br /><span className="text-fg/60">deliberately taken.</span>
      </h1>
      <p className="text-muted max-w-xl mb-16">
        Four schools, one university, two hackathons, and a roadmap measured in months, not tutorials watched.
      </p>

      {/* Timeline */}
      <section className="mb-24">
        <div className="dot-matrix mb-6">01 · Schooling → SOA</div>
        <ol className="relative pl-8 border-l hairline border-l-line space-y-12">
          {journey.map((stop, i) => (
            <motion.li
              key={stop.id}
              variants={scrollReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.05 }}
              className="relative"
            >
              <span className="absolute -left-[37px] top-1.5 w-3 h-3 rounded-full bg-fg border-4 border-bg" />
              <div className="dot-matrix mb-2">{stop.year}</div>
              <h3 className="font-display text-2xl md:text-3xl tracking-tight mb-1">{stop.school}</h3>
              <p className="text-fg/90">{stop.detail}</p>
              {stop.note && <p className="text-muted italic mt-2">{stop.note}</p>}
            </motion.li>
          ))}
        </ol>
      </section>

      {/* Hackathons */}
      <section className="mb-24">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="dot-matrix mb-2">02 · Hackathons · Gallery</div>
            <h2 className="font-display text-3xl md:text-5xl tracking-tightest leading-[0.95]">
              Two rooms,<br /><span className="text-fg/60">two lessons.</span>
            </h2>
          </div>
          <span className="dot-matrix hidden md:block">B&W on rest · colour on hover</span>
        </div>
        <HackathonGallery />
      </section>

      {/* Certifications */}
      <section>
        <div className="dot-matrix mb-6">03 · Certifications</div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {certs.map(c => (
            <li key={c.name} className="border hairline border-line rounded-xl p-4 flex items-center justify-between">
              <div>
                <div className="font-display text-lg tracking-tight">{c.name}</div>
                <div className="dot-matrix mt-1">{c.by}</div>
              </div>
              <div className="dot-matrix">{c.date}</div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

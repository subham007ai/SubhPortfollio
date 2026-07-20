"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { hackathons } from "@/content/hackathons";
import { ease, scrollReveal } from "@/lib/motion";
import Lightbox, { type LightboxPhoto } from "./Lightbox";

export default function HackathonGallery() {
  const [box, setBox] = useState<LightboxPhoto | null>(null);

  return (
    <>
      <div className="space-y-28 md:space-y-32">
        {hackathons.map((h, i) => {
          const reversed = i % 2 === 1;
          return (
            <motion.article
              key={h.id}
              variants={scrollReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start"
            >
              {/* Photos */}
              <div className={`md:col-span-7 ${reversed ? "md:order-2" : ""}`}>
                {h.photos[0] && (
                  <div className="relative">
                    <button
                      onClick={() => setBox(h.photos[0])}
                      className="group block w-full text-left"
                      data-cursor="hover"
                      aria-label={`Open ${h.name} photo`}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border hairline border-line bg-line/40">
                        <Image
                          src={h.photos[0].src}
                          alt={h.photos[0].caption}
                          fill
                          sizes="(min-width: 768px) 60vw, 100vw"
                          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out scale-100 group-hover:scale-[1.02]"
                        />
                        <div className="absolute inset-0 ring-1 ring-inset ring-white/5 pointer-events-none" />
                        <div className="absolute left-4 bottom-4 dot-matrix bg-bg/70 backdrop-blur px-3 py-1.5 rounded-full border hairline border-line">
                          ↗ Expand
                        </div>
                        <div className="absolute right-4 top-4 dot-matrix bg-bg/70 backdrop-blur px-3 py-1.5 rounded-full border hairline border-line">
                          {String(i + 1).padStart(2, "0")} / {String(hackathons.length).padStart(2, "0")}
                        </div>
                      </div>
                    </button>

                    {/* Secondary offset thumb */}
                    {h.photos[1] && (
                      <motion.button
                        onClick={() => setBox(h.photos[1])}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6, ease, delay: 0.2 }}
                        className={`group hidden md:block absolute -bottom-10 ${reversed ? "-left-6" : "-right-6"} w-1/3 aspect-square rounded-xl overflow-hidden border hairline border-line bg-line/40 shadow-2xl shadow-black/60`}
                        data-cursor="hover"
                        aria-label={`Open secondary photo of ${h.name}`}
                      >
                        <Image
                          src={h.photos[1].src}
                          alt={h.photos[1].caption}
                          fill
                          sizes="33vw"
                          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none" />
                        <div className="absolute right-2 top-2 dot-matrix bg-bg/70 backdrop-blur px-2 py-1 rounded-full border hairline border-line text-[9px]">
                          +1
                        </div>
                      </motion.button>
                    )}

                    {/* Mobile secondary stacked */}
                    {h.photos[1] && (
                      <button
                        onClick={() => setBox(h.photos[1])}
                        className="group md:hidden block w-full text-left mt-4"
                      >
                        <div className="relative aspect-[4/3] rounded-xl overflow-hidden border hairline border-line bg-line/40">
                          <Image
                            src={h.photos[1].src}
                            alt={h.photos[1].caption}
                            fill
                            sizes="100vw"
                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                          />
                        </div>
                      </button>
                    )}

                    <div className="dot-matrix mt-3 flex items-center justify-between">
                      <span>{h.photos[0].caption}</span>
                      <span className="opacity-60">{h.venue}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Detail */}
              <div className={`md:col-span-5 ${reversed ? "md:order-1" : ""}`}>
                <div className="dot-matrix mb-3">{h.year} · {h.venue}</div>
                <h3 className="font-display text-3xl md:text-4xl tracking-tight leading-[1.05] mb-3">
                  {h.name}
                </h3>
                <div className="inline-flex items-center gap-2 dot-matrix mb-6 px-3 py-1.5 rounded-full border hairline border-line"
                     style={{ color: "var(--signal)" }}>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--signal)" }} />
                  {h.result}
                </div>

                <Row label="Problem" value={h.problem} />
                <Row label="Team" value={h.team.join(" · ")} />
                <Row label="Takeaway" value={h.takeaway} muted />
              </div>
            </motion.article>
          );
        })}
      </div>

      <Lightbox photo={box} onClose={() => setBox(null)} />
    </>
  );
}

function Row({ label, value, muted = false }: { label: string; value: string; muted?: boolean }) {
  return (
    <div className="border-t hairline border-t-line py-4">
      <div className="dot-matrix mb-2">{label}</div>
      <p className={muted ? "text-muted italic" : "text-fg/90 leading-relaxed"}>{value}</p>
    </div>
  );
}

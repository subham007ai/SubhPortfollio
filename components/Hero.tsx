"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { profile } from "@/content/profile";
import HeroAvatar from "./HeroAvatar";

export default function Hero() {
  return (
    <section className="mx-auto max-w-content px-6 md:px-10 pt-16 md:pt-24 pb-16 md:pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        <motion.div className="lg:col-span-7" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
          <p className="dot-matrix mb-5">Bhubaneswar, India · Available for select work</p>
          <h1 className="font-display font-normal text-6xl sm:text-7xl md:text-8xl tracking-tight leading-[0.95] text-fgWarm"><span className="italic font-light">Hi,</span> I&apos;m {profile.name.split(" ")[0]}.</h1>
          <p className="mt-5 max-w-xl text-xl md:text-2xl leading-snug text-fg/90 font-light">I design and build thoughtful web products and applied AI systems.</p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted font-normal">Recent work includes Minskey (an AI-driven verifiable skill passport for IdeaThon 2026), the Odisha International Short Film Festival platform, and computer-vision engineering.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#selected-work" className="editorial-button editorial-button--primary">View selected work</Link>
            <Link href="/contact" className="editorial-button">Start a conversation</Link>
          </div>
        </motion.div>
        <motion.div className="lg:col-span-5 flex justify-center lg:justify-end" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}>
          <HeroAvatar imageSrc="/avatar.png" alt={profile.name} />
        </motion.div>
      </div>
    </section>
  );
}

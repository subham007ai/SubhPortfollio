"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { profile } from "@/content/profile";
import HeroAvatar from "./HeroAvatar";

export default function Hero() {
  return (
    <section className="mx-auto max-w-content px-6 md:px-10 pt-10 md:pt-14 pb-4 md:pb-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <motion.div
          className="lg:col-span-7 space-y-3.5"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-display font-normal text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.08] text-fgWarm">
            hi, Subham here
          </h1>

          <p className="text-base sm:text-lg font-medium text-fg/90 tracking-tight">
            Full-Stack &amp; Applied AI Developer.
          </p>

          <p className="text-sm sm:text-[15px] leading-relaxed text-muted">
            I spend most of my time building production AI systems and high-craft web interfaces, things like computer vision pipelines, multi-model verification architectures, and full-stack Next.js platforms that actually ship and work in the real world.
          </p>

          <p className="text-sm sm:text-[15px] leading-relaxed text-muted">
            What I have shipped: <strong className="font-semibold text-fg">Minskey</strong>, an AI-driven verifiable career identity platform built for IdeaThon 2026 &amp; SIH with 3-model anti-cheat verification (<a href="https://credo2-gamma.vercel.app/" target="_blank" rel="noreferrer" className="underline underline-offset-4 decoration-muted/60 hover:decoration-fg hover:text-fg transition-colors">demo</a> · <a href="https://github.com/Credo-Organization/credo2" target="_blank" rel="noreferrer" className="underline underline-offset-4 decoration-muted/60 hover:decoration-fg hover:text-fg transition-colors">repo</a>).
          </p>

          <p className="text-sm sm:text-[15px] leading-relaxed text-muted">
            Shipped the full web platform for <strong className="font-semibold text-fg">Odisha International Short Film Festival</strong> (<a href="https://www.odishafilmsociety.in/" target="_blank" rel="noreferrer" className="underline underline-offset-4 decoration-muted/60 hover:decoration-fg hover:text-fg transition-colors">live</a>) during a 6-week studio internship, and built a real-time <strong className="font-semibold text-fg">Face Mask Detection system</strong> on 30 FPS CPU (<a href="https://github.com/subham007ai/Face-Mask-detection" target="_blank" rel="noreferrer" className="underline underline-offset-4 decoration-muted/60 hover:decoration-fg hover:text-fg transition-colors">repo</a>).
          </p>

          <p className="text-sm sm:text-[15px] leading-relaxed text-muted">
            Outside of my CS-AIML coursework at SOA University, I build bespoke client web apps, freelance on full-stack projects like <a href="https://websiteagencydesign.vercel.app/" target="_blank" rel="noreferrer" className="underline underline-offset-4 decoration-muted/60 hover:decoration-fg hover:text-fg transition-colors">Sitora</a>, and share what I&apos;m building on X as <a href="https://x.com/subhamxai" target="_blank" rel="noreferrer" className="underline underline-offset-4 decoration-muted/60 hover:decoration-fg hover:text-fg transition-colors">@subhamxai</a>.
          </p>

          <p className="text-sm sm:text-[15px] leading-relaxed text-muted">
            When I&apos;m not shipping, I&apos;m either doing gym or sleeping.
          </p>

          <p className="text-sm sm:text-[15px] leading-relaxed text-fg pt-1">
            <strong className="font-semibold">Open to Work:</strong> Freelance, Internships, or Collabs. <Link href="/contact" className="underline underline-offset-4 decoration-accent hover:text-accent font-medium transition-colors">Start a conversation</Link> · <Link href="#selected-work" className="underline underline-offset-4 decoration-muted/60 hover:decoration-fg hover:text-fg transition-colors">View selected work</Link>.
          </p>
        </motion.div>

        <motion.div
          className="lg:col-span-5 flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <HeroAvatar imageSrc="/avatar.png" alt={profile.name} />
        </motion.div>
      </div>
    </section>
  );
}

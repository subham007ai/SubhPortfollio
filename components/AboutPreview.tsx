"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { profile } from "@/content/profile";
import { scrollReveal } from "@/lib/motion";

export default function AboutPreview() {
  return (
    <section className="mx-auto max-w-content px-6 md:px-10 py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
      <motion.div
        variants={scrollReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="md:col-span-8"
      >
        <div className="dot-matrix mb-4">About · 001</div>
        <p className="font-display tracking-tightest text-3xl md:text-5xl leading-[1.1] mb-8">
          {profile.longBio[0]}
        </p>
        <Link
          href="/about"
          className="inline-flex items-center gap-2 dot-matrix border hairline border-line rounded-full px-4 py-2 hover:bg-fg hover:text-bg transition-colors"
          data-cursor="hover"
        >
          Read the long version →
        </Link>
      </motion.div>

      <motion.dl
        variants={scrollReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="md:col-span-4 border-t md:border-t-0 md:border-l hairline border-line md:pl-8 pt-8 md:pt-0 space-y-4"
      >
        <Row k="Role" v={profile.role} />
        <Row k="Location" v={profile.location} />
        <Row k="Status" v="Building in public" />
        <Row k="Available" v="Freelance · Internship" signal />
      </motion.dl>
    </section>
  );
}

function Row({ k, v, signal = false }: { k: string; v: string; signal?: boolean }) {
  return (
    <div className="border-b hairline border-b-line pb-3">
      <dt className="dot-matrix mb-1">{k}</dt>
      <dd className="text-fg" style={{ color: signal ? "var(--signal)" : "var(--fg)" }}>{v}</dd>
    </div>
  );
}

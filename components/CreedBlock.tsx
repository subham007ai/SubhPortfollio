"use client";

import { motion } from "framer-motion";
import { profile } from "@/content/profile";
import { scrollReveal } from "@/lib/motion";

export default function CreedBlock() {
  return (
    <motion.section
      variants={scrollReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="my-32 dot-grid py-20 border-y hairline border-y-line"
    >
      <div className="mx-auto max-w-4xl text-center">
        <div className="dot-matrix mb-6">Creed</div>
        <p className="font-display tracking-tightest text-4xl md:text-6xl leading-[1.05]">
          &ldquo;{profile.creed}&rdquo;
        </p>
      </div>
    </motion.section>
  );
}

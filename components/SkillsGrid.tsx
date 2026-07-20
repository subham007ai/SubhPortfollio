"use client";

import { motion } from "framer-motion";
import { fullStack } from "@/content/skills";
import { scrollReveal, ease } from "@/lib/motion";

export default function SkillsGrid() {
  return (
    <div className="space-y-10">
      {fullStack.map((group, gi) => (
        <motion.div
          key={group.label}
          variants={scrollReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start border-t hairline border-t-line pt-6"
        >
          <div className="md:col-span-3">
            <div className="dot-matrix mb-1">{String(gi + 1).padStart(2, "0")}</div>
            <div className="font-display text-2xl tracking-tight">{group.label}</div>
          </div>
          <div className="md:col-span-9 flex flex-wrap gap-2">
            {group.items.map((item, i) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, ease, delay: i * 0.025 }}
                className="dot-matrix border hairline border-line rounded-full px-3 py-1.5 text-[11px]"
                style={{ color: "var(--fg)" }}
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

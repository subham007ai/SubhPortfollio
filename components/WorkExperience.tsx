"use client";

import { motion } from "framer-motion";
import { scrollReveal } from "@/lib/motion";

type Experience = {
  id: string;
  company: string;
  role: string;
  period?: string;
  description: string;
  tags: string[];
  active?: boolean;
};

const experiences: Experience[] = [
  {
    id: "freelance",
    company: "Freelance AI & Web Consultant",
    role: "Full-Stack Design & Applied Engineering",
    period: "2025 – Present",
    description:
      "Built and delivered custom digital platforms for cultural organizations and client ventures. Architected the Odisha International Short Film Festival (OISFF) web platform with bespoke design systems and production-grade responsive architecture.",
    tags: ["#NextJS", "#TailwindCSS", "#Python", "#FastAPI", "#DesignSystems", "#FramerMotion"],
    active: true
  },
  {
    id: "soa-aiml",
    company: "Siksha 'O' Anusandhan University",
    role: "B.Tech Computer Science · Artificial Intelligence & ML",
    period: "Oct 2024 – 2028",
    description:
      "Focused on statistical machine learning, neural architectures, data preprocessing pipelines, and practical model deployment. Building in public and shipping production code alongside coursework.",
    tags: ["#Python", "#MachineLearning", "#PyTorch", "#Algorithms", "#DataStack"],
    active: false
  },
  {
    id: "cv-projects",
    company: "Computer Vision & Edge ML Projects",
    role: "Lead Researcher & Engineer",
    period: "2025",
    description:
      "Benchmarked three CNN architectures (EfficientNetB0, MobileNetV2, ResNet50) on 1,700+ held-out test frames. Engineered an asynchronous MJPEG video streaming server in Flask for real-time CPU webcam inference with zero GPU dependencies.",
    tags: ["#ComputerVision", "#OpenCV", "#TensorFlow", "#EfficientNet", "#Flask"],
    active: false
  },
  {
    id: "creative-eng",
    company: "Open Source & Creative Engineering",
    role: "Frontend Architect",
    period: "2024 – 2026",
    description:
      "Designed and developed highly responsive, micro-animated web interfaces including the Sitora Creative Agency platform. Created custom procedural SVG visual generators (MeshCover) and dynamic intersection-observer color palettes.",
    tags: ["#React", "#TypeScript", "#FramerMotion", "#Zod", "#TailwindCSS"],
    active: false
  }
];

export default function WorkExperience() {
  return (
    <section className="relative mx-auto max-w-content px-6 md:px-10 py-12 md:py-16 overflow-hidden">
      {/* Subtle Constellation Lines on the Right Side (Inspired by Screenshot) */}
      <div className="absolute right-0 top-1/4 w-80 h-96 pointer-events-none opacity-20 hidden md:block">
        <svg className="w-full h-full text-zinc-500" viewBox="0 0 300 400" fill="none">
          <circle cx="80" cy="50" r="2" fill="currentColor" />
          <circle cx="220" cy="120" r="2" fill="currentColor" />
          <circle cx="160" cy="240" r="2" fill="currentColor" />
          <circle cx="270" cy="310" r="2" fill="currentColor" />
          <circle cx="110" cy="360" r="2" fill="currentColor" />
          <line x1="80" y1="50" x2="220" y2="120" stroke="currentColor" strokeWidth="0.6" />
          <line x1="220" y1="120" x2="160" y2="240" stroke="currentColor" strokeWidth="0.6" strokeDasharray="3 3" />
          <line x1="160" y1="240" x2="270" y2="310" stroke="currentColor" strokeWidth="0.6" />
          <line x1="160" y1="240" x2="110" y2="360" stroke="currentColor" strokeWidth="0.6" />
        </svg>
      </div>

      {/* Section Heading */}
      <motion.div
        variants={scrollReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="mb-10"
      >
        <h2 className="section-heading text-2xl sm:text-3xl">
          Work Experience
        </h2>
      </motion.div>

      {/* Vertical Timeline */}
      <div className="relative pl-6 sm:pl-8 border-l border-zinc-800 space-y-12">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.id}
            variants={scrollReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: idx * 0.1 }}
            className="relative group"
          >
            {/* Timeline Node Marker */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1 flex items-center justify-center">
              {exp.active ? (
                <span className="relative flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-black border-2 border-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
                </span>
              ) : (
                <span className="w-3.5 h-3.5 rounded-full bg-black border-2 border-zinc-600 group-hover:border-zinc-300 transition-colors" />
              )}
            </div>

            {/* Entry Content */}
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-serif text-lg sm:text-xl text-zinc-100 font-medium tracking-wide">
                  {exp.company}
                </h3>
                {exp.period && (
                  <span className="text-xs font-mono text-zinc-500">
                    {exp.period}
                  </span>
                )}
              </div>

              <p className="mt-1 text-sm font-sans font-medium text-zinc-300">
                {exp.role}
              </p>

              <p className="mt-2.5 text-sm sm:text-[14.5px] leading-relaxed text-zinc-400 font-sans">
                {exp.description}
              </p>

              {/* Hashtag Stack Pills */}
              <div className="mt-3.5 flex flex-wrap gap-2">
                {exp.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-xs font-mono text-zinc-400/90 hover:text-zinc-200 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

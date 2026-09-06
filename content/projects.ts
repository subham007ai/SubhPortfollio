export type Project = {
  id: string;
  title: string;
  kind: "ML" | "AI" | "Web" | "Automation";
  year: string;
  one: string;
  problem: string;
  approach: string;
  outcome: string;
  stack: string[];
  links: { label: string; href: string }[];
  featured?: boolean;
  cover?: string;
  screenshots?: { src: string; caption: string }[];
  client?: string;
  role?: string;
  timeline?: string;
  status?: "live" | "in-progress" | "shipped";
  metrics?: { highlight: string; detail: string };
};

export const projects: Project[] = [
  {
    id: "minskey",
    title: "Minskey — AI Skill Passport",
    kind: "AI",
    year: "2026",
    one: "A verifiable career identity platform built for IdeaThon 2026 & SIH, featuring multi-model anti-cheat verification and cryptographic certificate proofs.",
    problem:
      "Traditional resumes and skill certificates make it easy to exaggerate skills or cheat during automated testing. For IdeaThon 2026 and the Smart India Hackathon (SIH), our team wanted to create an authentic, verifiable skill certification platform with real-time test integrity checks.",
    approach:
      "Built a full-stack Next.js and FastAPI application with a 6-person team. We integrated multi-model evaluation agents using LangGraph and FastAPI, built real-time webcam and audio anti-cheat monitoring to verify exam sessions, and implemented cryptographic certificate validation with Supabase storage and auth.",
    outcome:
      "A working, deployed platform (credo2-gamma.vercel.app) selected for competition at IdeaThon 2026 and SIH, offering instant credentials and automated test integrity scores.",
    stack: ["Next.js 14", "Python", "FastAPI", "TypeScript", "LangGraph", "Supabase", "Tailwind CSS", "Framer Motion"],
    links: [
      { label: "Live", href: "https://credo2-gamma.vercel.app/" },
      { label: "GitHub", href: "https://github.com/Credo-Organization/credo2" }
    ],
    featured: true,
    cover: "/projects/minskey/cover.webp",
    client: "IdeaThon 2026 · Smart India Hackathon (SIH)",
    role: "Full-Stack & AI Engineering (Team of 6)",
    timeline: "2026 · Hackathon Project",
    status: "live",
    metrics: { highlight: "IdeaThon 2026", detail: "3-Model Anti-Cheat AI" }
  },
  {
    id: "oisff",
    title: "Odisha International Short Film Festival",
    kind: "Web",
    year: "2026",
    one: "The official web platform for Odisha's first international short film festival, designed with cultural Odishan motifs and built during a 6-week studio internship.",
    problem:
      "Odisha's first international short film festival needed an official web home ahead of its inaugural edition. The site had to serve filmmakers, sponsors, and attendees, present festival schedules and initiatives, handle submissions, and convey a cultural feel without using generic templates.",
    approach:
      "Designed and developed the website from scratch using Next.js, React, and Tailwind CSS. Combined warm bronze, vermilion, and gold accents on a deep dark ground with custom Sanskrit-inspired typography and Konark chakra iconography. Built 8 complete responsive sections including mission, festival programs, film categories, photo gallery, countdown timer, and an intake form for film submissions.",
    outcome:
      "Delivered and launched the live website (odishafilmsociety.in) within a 6-week internship sprint, giving the festival an authentic digital presence and active intake system.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Custom design system"],
    links: [
      { label: "Live", href: "https://www.odishafilmsociety.in/" }
    ],
    featured: true,
    client: "Intern @ [Studio — name available on request]",
    role: "Full stack — design + build",
    timeline: "2026 · Shipped · 6-week sprint",
    status: "live",
    cover: "/projects/oisff/cover.webp",
    screenshots: [
      { src: "/projects/oisff/site-hero.webp", caption: "Live site · Hero section with countdown and festival branding" },
      { src: "/projects/oisff/site-about.webp", caption: "About · Mission grid and festival initiatives" },
      { src: "/projects/oisff/site-mid.webp", caption: "Programs · Community cinema, workshops, and feature-film incubator" },
      { src: "/projects/oisff/site-categories.webp", caption: "Submissions · Category directory and entry forms" }
    ]
  },
  {
    id: "face-mask-detection",
    title: "Face Mask Detection",
    kind: "ML",
    year: "2025",
    one: "Real-time webcam face mask detection benchmarking EfficientNetB0, MobileNetV2, and ResNet50, running at 30 FPS on CPU via Flask.",
    problem:
      "College 4th-semester group project to build a fast, reliable face mask detection system that runs efficiently on standard CPU hardware without requiring a dedicated GPU.",
    approach:
      "Four students with clear responsibilities. I handled data preprocessing and dataset curation: cleaning class distributions, building data generators, and preparing a 1,726-image held-out test set (863 images per class). We trained and benchmarked EfficientNetB0, MobileNetV2, and ResNet50 across accuracy, precision, recall, F1, and ROC-AUC. We then deployed the best model into an asynchronous Flask server with MJPEG streaming and frame-skipping to achieve smooth 30 FPS webcam inference.",
    outcome:
      "EfficientNetB0 was chosen as the final deployment model because it delivered strong accuracy while maintaining a lightweight footprint (~49 MB vs ResNet50's 283 MB). The completed app streams live webcam video with real-time bounding boxes and confidence scores directly in the browser.",
    stack: ["Python", "TensorFlow/Keras", "OpenCV", "Flask", "EfficientNet", "Pandas"],
    links: [
      { label: "GitHub", href: "https://github.com/subham007ai/Face-Mask-detection" }
    ],
    featured: true,
    cover: "/projects/face-mask-detection/cover.webp",
    metrics: { highlight: "EfficientNetB0 · High AUC", detail: "30 FPS CPU Real-Time" },
    screenshots: [
      { src: "/projects/face-mask-detection/eda_sample_grid.webp", caption: "Dataset distribution & EDA preprocessing grid" },
      { src: "/projects/face-mask-detection/radar_chart.webp", caption: "Model radar · three CNNs compared across five metrics" },
      { src: "/projects/face-mask-detection/roc_curve_comparison.webp", caption: "ROC curves · Model evaluation on held-out test set" },
      { src: "/projects/face-mask-detection/pr_curve_comparison.webp", caption: "Precision–Recall curves" },
      { src: "/projects/face-mask-detection/metrics_heatmap.webp", caption: "Metrics heatmap · head-to-head across accuracy, F1, recall" }
    ]
  },
  {
    id: "sitora",
    title: "Sitora — Creative Agency",
    kind: "Web",
    year: "2025",
    one: "A modern creative agency web application built with scroll-driven color themes, procedural SVG artwork, and an interactive scope calculator.",
    problem:
      "I wanted to push my frontend development skills by building an atmospheric agency portfolio completely from scratch—no templates, no component libraries—focusing on fluid motion, custom state management, and real interactive tools.",
    approach:
      "Built with Next.js App Router, React, and Tailwind CSS. Implemented a scroll-driven dynamic accent system using IntersectionObserver that smoothly shifts root CSS color variables without re-rendering components. Built procedural SVG art generators for unique cover backgrounds, kinetic text reveals, and an interactive scope-and-cost calculator with currency toggles that feed directly into a Zod-validated contact form with honeypot spam protection.",
    outcome:
      "A fast, responsive web application that proves high-craft design and custom UI logic without relying on off-the-shelf templates.",
    stack: ["Next.js 15", "React 19", "Tailwind 3", "Framer Motion", "Lenis", "Zod"],
    links: [
      { label: "Live", href: "https://websiteagencydesign.vercel.app/" },
      { label: "GitHub", href: "https://github.com/subham007ai/websiteagencydesign" }
    ],
    featured: true,
    cover: "/projects/sitora/cover.webp",
    screenshots: [
      { src: "/projects/sitora/site-hero.webp", caption: "Live site — Hero section with kinetic reveals" },
      { src: "/projects/sitora/site-pricing.webp", caption: "Pricing — Interactive slider-driven cost calculator" },
      { src: "/projects/sitora/site-mid.webp", caption: "Selected work — Case study grid" }
    ]
  }
];

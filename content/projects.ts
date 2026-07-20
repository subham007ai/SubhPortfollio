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
  client?: string;    // e.g. "Client · under NDA" or "Intern @ Studio"
  role?: string;      // e.g. "Full stack — design + build"
  timeline?: string;  // e.g. "2026 · In progress"
  status?: "live" | "in-progress" | "shipped";
};

export const projects: Project[] = [
  {
    id: "blue-water-films",
    title: "Blue Water Film Productions",
    kind: "Web",
    year: "2026",
    one: "Official site for a social-impact cinema studio — deep-navy and gold cinematic brand system, 12-section single-page build.",
    problem:
      "Blue Water Film Productions International (BWFPI) — a social-impact cinema studio — needed an official site that could sell an ambitious slate to partners and investors: the flagship OTT action-thriller PRAHARI, three upcoming productions, full production services and leadership, all under a strict brand book.",
    approach:
      "A 12-section single-page cinematic site in Next.js 16 + Tailwind CSS 4, following the BWFPI brand book strictly — Cinzel display type, Montserrat body, deep-navy / ocean-blue / metallic-gold palette. Ken Burns hero, live scroll-progress indicator, custom Reveal scroll-in system, film-strip section dividers, per-film feature sections with budget/runtime stat rows, and a project-enquiry form.",
    outcome:
      "A live studio site that reads like a film pitch deck — atmospheric, brand-faithful, and built to convert partnership enquiries. Second real client build shipped in 2026.",
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Lucide", "Custom scroll system"],
    links: [
      { label: "Live", href: "https://blue-water-films.vercel.app/" },
      { label: "GitHub", href: "https://github.com/sreyanw/blue-water-films" }
    ],
    featured: true,
    client: "Blue Water Film Productions Intl. (BWFPI)",
    role: "Full stack — design + build",
    timeline: "2026 · Shipped",
    status: "live",
    cover: "/projects/blue-water-films/site-hero.webp",
    screenshots: [
      { src: "/projects/blue-water-films/site-mid.webp", caption: "PRAHARI — flagship OTT action-thriller feature section with budget + runtime stats" },
      { src: "/projects/blue-water-films/site-lower.webp", caption: "Services — 'From first idea to final frame' production-capabilities grid" },
      { src: "/projects/blue-water-films/site-contact.webp", caption: "Contact — 'Bring us the story. We'll build the world.' enquiry flow" }
    ]
  },
  {
    id: "oisff",
    title: "Odisha International Short Film Festival",
    kind: "Web",
    year: "2026",
    one: "The official site for Odisha's first international short-film festival — bronze-gold editorial system, Sanskrit-serif type.",
    problem:
      "Odisha's first international short film festival needed a site that read as a real cultural institution the moment it loaded — old-world film-poster grandeur, but built like a modern web app that handles submissions, programs, gallery and news feeds.",
    approach:
      "Full stack — design + build, as an internship over a 6-week sprint starting 20 July. Built a bespoke editorial system in Next.js: a bronze / vermilion / gold palette on a deep espresso ground, custom Cinzel-style serif for headings, Konark-chakra iconography, ornamental gold dividers. Countdown, mission grid ('Not just a festival. A movement.'), programs matrix, cultural preservation strip, film-categories directory, gallery, news, and film-submission intake — all responsive across 375/768/1440+.",
    outcome:
      "A live festival site that feels earned rather than templated — atmospheric, culturally rooted, and shippable at scale. First serious client work in the wild.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Custom design system"],
    links: [
      { label: "Live", href: "https://www.odishafilmsociety.in/" }
    ],
    featured: true,
    client: "Intern @ [Studio — name available on request]",
    role: "Full stack — design + build",
    timeline: "2026 · Shipped · 6-week sprint",
    status: "live",
    cover: "/projects/oisff/site-hero.webp",
    screenshots: [
      { src: "/projects/oisff/site-about.webp", caption: "About · 'Not just a festival. A movement.' — mission grid" },
      { src: "/projects/oisff/site-mid.webp", caption: "Programs · community cinema, workshops, feature-film incubator, cultural preservation" },
      { src: "/projects/oisff/site-categories.webp", caption: "Submissions · 'Nomination Forms Launching Soon' + festival footer" }
    ]
  },
  {
    id: "face-mask-detection",
    title: "Face Mask Detection",
    kind: "ML",
    year: "2025",
    one: "Real-time mask detection — 3 CNNs benchmarked, EfficientNetB0 wins.",
    problem:
      "A real-time face mask detection web app for a 4-person 4th-semester project — built so anyone could point a webcam at a face and get an instant prediction with confidence.",
    approach:
      "Owned the data and EDA layer: class distribution, image preprocessing pipeline, and the data generators feeding into transfer-learning runs of EfficientNetB0, MobileNetV2 and ResNet50. Models compared head-to-head on a held-out test set of 1,726 images, then served live via a Flask + MJPEG streaming app with OpenCV Haar-cascade face detection.",
    outcome:
      "EfficientNetB0 scored a suspiciously clean 100% on the held-out set — we treated that as a flag, not a win: checked the split for leakage and re-ran evaluation before trusting it. MobileNetV2 (99.59%) was the honest runner-up. EfficientNetB0 still shipped on size-to-accuracy: ~49MB weights vs ResNet50's 283MB, smooth real-time inference in the browser.",
    stack: ["Python", "TensorFlow/Keras", "OpenCV", "Flask", "EfficientNet", "Pandas"],
    links: [
      { label: "GitHub", href: "https://github.com/subham007ai/Face-Mask-detection" }
    ],
    featured: true,
    cover: "/projects/face-mask-detection/eda_sample_grid.webp",
    screenshots: [
      { src: "/projects/face-mask-detection/radar_chart.webp", caption: "Model radar · three CNNs compared across five metrics" },
      { src: "/projects/face-mask-detection/roc_curve_comparison.webp", caption: "ROC curves · EfficientNetB0 sits at 1.000 AUC" },
      { src: "/projects/face-mask-detection/pr_curve_comparison.webp", caption: "Precision–Recall · all three models near-perfect" },
      { src: "/projects/face-mask-detection/metrics_heatmap.webp", caption: "Metrics heatmap · head-to-head across accuracy, F1, recall" }
    ]
  },
  {
    id: "sitora",
    title: "Sitora — Creative Agency",
    kind: "Web",
    year: "2025",
    one: "Premium agency site — scroll-driven accent themes, generative covers.",
    problem:
      "A high-end web design studio portfolio that had to feel premium on every section — not a generic Tailwind template.",
    approach:
      "Built dynamic accent theming via IntersectionObserver — sections declare colour palettes via data attributes, root CSS variables transition on scroll. Layered with filmic grain, custom radial Aurora glows, generative SVG cover art (turbulence + gaussian blur composite matrices), Lenis-smoothed scrolling, and an interactive scope-cost calculator that feeds straight into a multi-step contact form (Zod + React Hook Form).",
    outcome:
      "Atmospheric, distinctive portfolio that doesn't read like an agency template. Real estimator and intake flow — not a brochure.",
    stack: ["Next.js 15", "React 19", "Tailwind 3", "Framer Motion", "Lenis", "Zod"],
    links: [
      { label: "Live", href: "https://websiteagencydesign.vercel.app/" },
      { label: "GitHub", href: "https://github.com/subham007ai/websiteagencydesign" }
    ],
    featured: true,
    cover: "/projects/sitora/site-hero.webp",
    screenshots: [
      { src: "/projects/sitora/site-pricing.webp", caption: "Pricing — INR/USD toggle + slider-driven cost calculator" },
      { src: "/projects/sitora/site-mid.webp", caption: "Selected work — 'Proof, not promises' case grid" }
    ]
  },
  {
    id: "kalinga-fitness",
    title: "Kalinga Fitness Gym",
    kind: "Web",
    year: "2025",
    one: "Static, SEO-tuned gym site with a WhatsApp lead engine.",
    problem:
      "Small local gym near SUM Hospital needed a real lead-capture site without a backend or per-month hosting cost.",
    approach:
      "Static HTML export off Next.js 16 — sitemaps, JSON-LD HealthClub schema, semantic landmarks. Trial signup goes serverless: form data is URL-encoded into a pre-filled WhatsApp message to the gym owner. Dedicated /visit page targets local search. Interactive before/after slider via clip-path; Google reviews carousel via stateful intervals. Animations use raw IntersectionObserver — zero React state overhead, honours prefers-reduced-motion.",
    outcome:
      "100% static, zero-cost hosting, real warm leads routed straight to the owner's phone.",
    stack: ["Next.js 16", "Tailwind 4", "TypeScript", "next-sitemap", "IntersectionObserver"],
    links: [
      { label: "Live", href: "https://kalinga-fitness-gym-weld.vercel.app/" },
      { label: "GitHub", href: "https://github.com/subham007ai/kalinga-fitness-gym" }
    ],
    cover: "/projects/kalinga-fitness/site-hero.webp",
    screenshots: [
      { src: "/projects/kalinga-fitness/site-mid.webp", caption: "Programs section — dark editorial layout, volt accent" },
      { src: "/projects/kalinga-fitness/site-visit.webp", caption: "/visit — dedicated local-SEO page with map + tap-to-call" },
      { src: "/projects/kalinga-fitness/member-before.webp", caption: "Before — one half of the drag-clip transformation slider" },
      { src: "/projects/kalinga-fitness/member-after.webp", caption: "After — the slider's payoff" }
    ]
  },
  {
    id: "utkal-dental",
    title: "Utkal Dental Care",
    kind: "Web",
    year: "2025",
    one: "Atelier-style concept redesign for a Bhubaneswar dental clinic.",
    problem:
      "A patient-facing site that needed to feel warm and clinical at the same time — most dental sites swing too far one way.",
    approach:
      "Built the Atelier design system — warm cream/bone tones, near-black warm ink type, vermilion clay accent. Stats counters, vertical-to-horizontal visit timeline, drag-enabled before/after slider for treatments, scroll reveals. Pixel-perfect across 375/768/1240+.",
    outcome:
      "Calm, professional clinic site that still has visual personality.",
    stack: ["Next.js 14", "Tailwind", "Tabler Icons", "TypeScript"],
    links: [
      { label: "Live", href: "https://dental-website-design-2.vercel.app/" },
      { label: "GitHub", href: "https://github.com/subham007ai/dental-website-design-2" }
    ],
    cover: "/projects/utkal-dental/site-hero.webp",
    screenshots: [
      { src: "/projects/utkal-dental/site-mid.webp", caption: "Services — editorial grid over the Atelier cream system" },
      { src: "/projects/utkal-dental/hero_family.webp", caption: "Patient-first imagery used across the site" },
      { src: "/projects/utkal-dental/dr_sahu.webp", caption: "Founder portrait — Dr. Sahu" }
    ]
  }
];

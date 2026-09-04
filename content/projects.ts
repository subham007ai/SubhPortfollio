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
  metrics?: { highlight: string; detail: string };
};

export const projects: Project[] = [
  {
    id: "minskey",
    title: "Minskey — AI Skill Passport",
    kind: "AI",
    year: "2026",
    one: "An AI-driven verifiable career identity platform built for IdeaThon 2026 & SIH — multi-model anti-cheat verification, cryptographic certificate proofs, and dual-layer AI orchestration.",
    problem: "",
    approach: "",
    outcome: "",
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
    one: "The web home of Odisha's first international short-film festival — bronze, vermilion, gold on deep espresso, Sanskrit-serif type, Konark-chakra iconography.",
    problem:
      "Odisha's first international short-film festival needed a web home before it ran its first edition — not a placeholder, a real one, the studio's face when it went out to filmmakers, sponsors and audiences. Cultural-institution vibes, not startup vibes. And I had six weeks.",
    approach:
      "Bronze, vermilion, and gold on a deep espresso ground. Custom Sanskrit-serif headings so the type carries the weight of the tradition the festival is representing. Konark-chakra iconography — a nod to Odishan cultural history that lives in the site's DNA, not just its palette. Ornamental gold dividers, atmospheric hero, countdown timer counting down to the first edition. The section list was long: mission grid ('Not just a festival. A movement.'), programs matrix (community cinema, workshops, feature-film incubator, cultural preservation), film-categories directory, gallery, news feed, and a film-submission intake form that will start collecting real entries soon. All of it responsive across 375, 768 and 1440+. Built as an internship — my first real client work in the wild, on a six-week sprint.",
    outcome:
      "A live festival site that feels earned rather than templated. Culturally rooted, atmospheric, and built so submissions can actually start coming in. The tag on my homepage reads 'freelance & internships' — this is the project that put it there.",
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
    one: "Point a webcam at a face, get 'Mask' or 'No Mask' in real time. Fourth-semester group project — three CNNs benchmarked, EfficientNetB0 shipped.",
    problem:
      "Fourth semester. Four of us in a group project that needed to actually work — not just compile, actually work. Point a webcam at a face, get 'Mask' or 'No Mask' in real time with a confidence score. Textbook idea. But the textbook doesn't tell you what to do when your model returns 100% accuracy on the test set.",
    approach:
      "Four people, four honest roles. I owned the data and EDA layer — class distribution, image preprocessing pipeline, and the data generators that fed transfer-learning runs of EfficientNetB0, MobileNetV2 and ResNet50 (Avijit trained; I made sure the plates arrived clean). Soumya built the Flask app with async inference in a background thread, frame-skipping every 3rd frame, and half-resolution face detection so the whole thing runs at 30-ish FPS on CPU — no GPU required. Sreyan ran the comparative evaluation on a 1,726-image held-out test set (863 per class): accuracy, precision, recall, F1, ROC-AUC, PR curves, confusion matrices, the whole battery.\n\nEfficientNetB0's numbers came back suspiciously perfect. 100% across the board. First instinct in a college project is to celebrate; the honest instinct is to check for leakage in your train/test split. We did — the split was clean, the labels weren't contaminated, and the model just happened to be that well-suited to a class-balanced, image-clean binary task. MobileNetV2's 99.59% was the more emotionally believable number.",
    outcome:
      "EfficientNetB0 shipped as the production model — not because it scored highest, but because it hit the best size-to-accuracy ratio: ~49 MB of weights vs ResNet50's 283 MB. MobileNetV2 stays in the repo as the honest runner-up. The Flask app streams annotated video via MJPEG with a live bounding box and confidence score in the browser. It's a group project I'm actually proud of — because it works, and because we didn't fake the numbers to make them look better.",
    stack: ["Python", "TensorFlow/Keras", "OpenCV", "Flask", "EfficientNet", "Pandas"],
    links: [
      { label: "GitHub", href: "https://github.com/subham007ai/Face-Mask-detection" }
    ],
    featured: true,
    cover: "/projects/face-mask-detection/cover.webp",
    metrics: { highlight: "EfficientNetB0 · 100% AUC", detail: "30 FPS CPU Real-Time" },
    screenshots: [
      { src: "/projects/face-mask-detection/eda_sample_grid.webp", caption: "Dataset distribution & EDA preprocessing grid" },
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
    one: "A fictional creative agency portfolio built to see if I could hit premium without a template. Scroll-driven accent themes, generative cover art, a real cost calculator.",
    problem:
      "Wanted to see if I could build a portfolio for a fictional creative agency that felt genuinely premium — not premium in the Bootstrap-template way, premium in the way a real studio's site feels when you land on it and immediately trust them. High bar. Also: if I could build this from scratch, no template, I'd know I could build one for a real client.",
    approach:
      "Next.js 15 App Router, React 19, Tailwind 3. The centerpiece is a dynamic accent-theme system driven by IntersectionObserver — sections declare their palette via `data-accent` and `data-accent-2` attributes, and root CSS variables (--accent, --accent-rgb) transition on the fly as you scroll. No re-renders, just live color inheritance across the whole page.\n\nLayered a filmic grain overlay across the whole page and custom radial Aurora glows behind hero moments — the kind of atmospheric depth you see in high-end developer consoles. Built a MeshCover component that generates deterministic seeded SVG cover art per project using turbulence, gaussian blur, and composite color matrices — organic, unique, no stock images. Lenis for kinetic smooth scroll. Mask-clipped kinetic text reveals. Magnetic hover states.\n\nThe interactive scope-cost calculator on /pricing was the piece I cared about most — three sliders (project complexity from landing page to custom platform, motion fidelity from static to immersive GSAP, backend integrations from none to complex APIs), an INR ↔ USD toggle with GST handling on Indian pricing, and the estimated budget + timeline flow straight into the multi-step contact form on the next click. Contact form is Zod-validated, React Hook Form-powered, with a hidden honeypot field (website_hp) that silently filters bot submissions.",
    outcome:
      "An atmospheric portfolio that doesn't read like an agency template — because it isn't one. Every module (calculator, form, MeshCover, accent theme) is bespoke. This is the project where I stopped writing HTML and started building interfaces.",
    stack: ["Next.js 15", "React 19", "Tailwind 3", "Framer Motion", "Lenis", "Zod"],
    links: [
      { label: "Live", href: "https://websiteagencydesign.vercel.app/" },
      { label: "GitHub", href: "https://github.com/subham007ai/websiteagencydesign" }
    ],
    featured: true,
    cover: "/projects/sitora/cover.webp",
    screenshots: [
      { src: "/projects/sitora/site-hero.webp", caption: "Live site — Aurora hero with kinetic text reveals" },
      { src: "/projects/sitora/site-pricing.webp", caption: "Pricing — INR/USD toggle + slider-driven cost calculator" },
      { src: "/projects/sitora/site-mid.webp", caption: "Selected work — 'Proof, not promises' case grid" }
    ]
  }
];

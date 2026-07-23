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
    one: "Official web home of a social-impact cinema studio — deep-navy and gold, twelve deliberate sections, a flagship film called PRAHARI.",
    problem:
      "BWFPI came to us with the kind of brief that's exciting and terrifying at the same time — build the official web home of a social-impact cinema studio whose slate reads like it belongs on a Cannes wall: a flagship OTT global action-thriller called PRAHARI, three upcoming productions (Market, Medical Secrets, Common Man), a chairman, a director, real ambition. The site had to sell an idea. Investors, festival partners and eventual audiences would meet the studio here first — and studios don't get a second chance to feel small.",
    approach:
      "Twelve deliberate sections in a single cinematic scroll — hero, studio philosophy, six thematic pillars of impact films, the PRAHARI feature block, three upcoming productions, global vision, services, a manifesto, leadership, contact. Next.js 16 App Router with Turbopack, React 19, Tailwind 4. Held the brand book strict — deep navy #021633 base, ocean blue #0A3D7A, sky blue #4DA9E6 for CTAs, metallic gold #D4AF37 for accents. Cinzel Bold for headlines and film titles so the type carries the weight of a poster; Montserrat everywhere else so paragraphs actually read. Built a custom Reveal scroll-in component, Ken-Burns hero animation, a live scroll-progress indicator in the header, pulse-ring and shimmer accents on the gold. The PRAHARI section shows real numbers because the ambition is real — ₹110 Cr production, ₹60 Cr VFX, 2h 40m runtime — and hiding that behind vague copy would have undersold the film.",
    outcome:
      "A studio site that reads like it was made by the studio, not for it. Chairman's enquiry form is wired end-to-end, live at blue-water-films.vercel.app. Second real client build I've shipped in 2026 — and the one where I stopped thinking of myself as someone practicing web design and started thinking of myself as someone who ships it.",
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
    one: "A neighbourhood gym near SUM Hospital — 100% static, zero backend, and every trial signup lands as a pre-filled WhatsApp message on the owner's phone.",
    problem:
      "A small neighbourhood gym near SUM Hospital in Bhubaneswar. The owner didn't want a monthly-hosting-fee CMS thing. He wanted a website that could get warm leads to his phone. That's the whole requirement — turn a stranger visiting the site into a WhatsApp conversation with him.",
    approach:
      "Next.js 16 with `output: \"export\"` — 100% static HTML, hosted for free. No backend, no database, no leads table to babysit. The trial signup form URL-encodes name + phone + fitness goal into a pre-filled WhatsApp message that opens the gym owner's chat directly on the tap. Warm lead in one click.\n\nBuilt a dedicated /visit page targeting local search — Google Maps embed, tap-to-call `tel:` link, email link, structured JSON-LD HealthClub schema, semantic HTML5 landmarks. Sitemap auto-generated via next-sitemap. Scroll animations use raw IntersectionObserver (zero React state, zero re-renders) and honour prefers-reduced-motion. Dark editorial theme — ink backgrounds (#0A0A0B, #101012, #17171A) with a single volt accent (#CCFF3E) reserved for CTAs and active UI. Anton for display type, Space Grotesk for headings, Inter for body — WCAG AA compliant contrast throughout. Interactive before/after transformation slider using a clip-path clip track driven by a range input. Google Reviews carousel with stateful React intervals, fade transitions, and manual dot navigation.",
    outcome:
      "Zero-cost hosting, real warm leads routing straight to the gym owner's phone. My first project where the business logic wasn't the code — it was the choice not to write code at all. Serverless in the truest sense.",
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
    one: "A concept redesign for a Bhubaneswar dental, skin, and hair clinic — warm cream, near-black ink, one vermilion accent, and a first-visit timeline that reads like a hand-hold.",
    problem:
      "Most dental clinic websites swing to one of two extremes — sterile and cold like a hospital, or oversold and cheerful like a spa. I wanted to try a concept redesign that could sit exactly in the middle. Warm, but clinical. Professional, but not intimidating. A patient facing the site should feel taken care of — not sold to.",
    approach:
      "Built the Atelier design system from scratch — cream backgrounds (#F3F0E9) with warm ink type (#15130F), soft paper surfaces (#FBF9F3) for cards, and a single vibrant vermilion accent (#E4572E) reserved for CTAs and step badges. Soft-shadow component widgets for treatment cards. Next.js 14 App Router with Tailwind and Tabler Icons.\n\nStats dashboard widgets with hover translations. A visit timeline that goes vertical on mobile and horizontal on desktop, walking a patient through what a first appointment actually feels like — check-in, consultation, diagnosis, treatment plan. Drag-enabled before/after slider for showcasing dental, skin, and hair treatment transformations. Scroll-reveal micro-interactions on every section. A unified sticky header and structured footer with contact details, business hours, and every internal route. Pixel-perfect across 375, 768, and 1240+.",
    outcome:
      "A calm, professional clinic site that still has visual personality. This one taught me that restraint is a design decision — every time I wanted to add another accent color or another shadow, cutting it made the page better.",
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

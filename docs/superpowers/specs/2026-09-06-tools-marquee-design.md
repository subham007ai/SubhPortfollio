# Design Specification: Authentic "Tools that I have used" Marquee Section

**Date:** 2026-09-06  
**Status:** Approved by User  
**Target:** Replace existing `TechStack.tsx` ("A focused toolkit") with an authentic dual-row marquee badge section ("Tools that I have used") matching the user's reference design.

---

## 1. Objectives & Requirements
- **Goal:** Replace the current static 4-column capabilities list (`TechStack.tsx`) on the homepage with an authentic infinite-scrolling marquee section titled **"Tools that I have used"**.
- **Authenticity Constraint:** The technologies displayed must strictly represent the languages, frameworks, libraries, and tools actually used in Subham's GitHub repositories and live portfolio websites (`Face-Mask-detection`, `websiteagencydesign`, `oisff`, `credo2`, `SubhPortfollio`, `truptee-veg-restaurant`, `kalinga-fitness-gym`). Unused buzzwords are explicitly excluded.
- **Aesthetic Fidelity:** Replicate the reference image layout:
  - Heading in `Instrument Serif` (`.section-heading`) with the distinct underline accent.
  - Two rows of capsule pill badges (`rounded-full`) with dark backgrounds (`var(--bg-pill)` / `var(--bg-card)`), hairline border (`var(--line)`), and monochrome SVG brand icons.
  - Smooth continuous horizontal loop with soft gradient fade masks on the left and right container edges.
  - Hover-to-pause and `prefers-reduced-motion` compliance.

---

## 2. Information Architecture & Content

### Selected Stack Items (Strictly Verified)
| Row | Technology | Category | Provenance / Real Project |
| :--- | :--- | :--- | :--- |
| **Row 1** | Python | Language | Face Mask Detection, Smart-attened, Credo backend |
| **Row 1** | Next.js | Framework | Portfolio, Sitora, OISFF, Credo |
| **Row 1** | TypeScript | Language | Portfolio, Sitora, Dental, Kalinga, Credo |
| **Row 1** | React | Library | Sitora, OISFF, Credo, Portfolio |
| **Row 1** | Tailwind CSS | Styling | Across all web projects |
| **Row 1** | FastAPI | Backend | Credo AI verification backend |
| **Row 1** | PostgreSQL | Database | Credo platform & SQL foundations |
| **Row 1** | Supabase | BaaS / Auth | Credo cryptographic proofs & storage |
| **Row 2** | OpenCV | Computer Vision | Face Mask Detection webcam pipeline |
| **Row 2** | TensorFlow | Deep Learning | EfficientNet & MobileNet CNN training |
| **Row 2** | Flask | Backend / ML | MJPEG real-time streaming server |
| **Row 2** | JavaScript | Language | Truptee restaurant & web foundations |
| **Row 2** | Framer Motion | Motion | Sitora, OISFF, Portfolio interactions |
| **Row 2** | Git | Version Control | All GitHub repositories |
| **Row 2** | Vercel | Deployment | All live production web applications |
| **Row 2** | HTML5 & CSS3 | Foundation | Core web architecture |

---

## 3. Component Architecture & Implementation Details

### `components/TechStack.tsx` (Refactored Drop-in)
- **Container**:
  - `section` with classes `mx-auto max-w-content px-6 md:px-10 py-12 md:py-16 border-y hairline border-y-line overflow-hidden`.
- **Heading**:
  - `<h2 className="section-heading text-2xl sm:text-3xl">Tools that I have used</h2>` with `mb-8`.
- **Marquee Wrapper**:
  - A relative container with linear gradient mask at the edges:
    `[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]`
- **Marquee Rows**:
  - Two rows running in alternating or staggered directions (Row 1 left, Row 2 right).
  - Infinite CSS loop using `@keyframes marquee-left` and `@keyframes marquee-right`.
  - Pause on hover (`group-hover:[animation-play-state:paused]`).
  - Duplicated item arrays to create a seamless infinite loop without visual jumps.
- **Pill Badge Component**:
  - `div` with `inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-pill border hairline border-line text-sm text-fg font-medium tracking-tight shadow-sm hover:border-lineStrong transition-colors select-none`.
  - Inline SVG icons with `w-4 h-4 text-fg/80` or subtle brand accents that adapt cleanly to dark and light modes.
- **Reduced Motion Fallback**:
  - Wrapped in media query `prefers-reduced-motion` so animation is disabled and items wrap cleanly into a static badge cloud.

---

## 4. Verification Plan
1. **Build & Typecheck**: Run `npm run build` or `npx tsc --noEmit` to verify type safety and compilation.
2. **Local Dev Server**: Launch `npm run dev` on `localhost:3000` as requested by the user.
3. **User Manual Inspection**: User will manually open and preview `localhost:3000` to confirm aesthetics, dark/light theme switching, and smooth animation.

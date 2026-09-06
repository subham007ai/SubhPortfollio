# Authentic Tools Marquee Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the static "A focused toolkit" capabilities grid in `components/TechStack.tsx` with a dual-row infinite marquee titled "Tools that I have used" populated strictly with authentic technologies from Subham's GitHub projects.

**Architecture:** A lightweight, pure-CSS infinite scrolling marquee component rendered on the homepage. Brand SVGs are inlined to prevent external dependency or asset load failures. The marquee uses hardware-accelerated CSS animations with edge fade masks, pause-on-hover, and reduced-motion fallback.

**Tech Stack:** Next.js 14/15, React, TypeScript, Tailwind CSS, Vanilla CSS animations.

## Global Constraints
- Only use technologies verified from Subham's projects and GitHub repos (`Face-Mask-detection`, `websiteagencydesign`, `oisff`, `credo2`, `SubhPortfollio`, `truptee-veg-restaurant`, `kalinga-fitness-gym`).
- Do not add fabricated buzzwords (e.g., no Django, pgvector, LangChain, etc.).
- Comply with dark and light mode themes using CSS custom properties (`--bg-pill`, `--line`, `--fg`, etc.).
- Do not push or commit to remote git without explicit user permission.
- User will manually preview `localhost:3000` — do not attempt automated browser preview.

---

### Task 1: Add Marquee Keyframe Animations to `app/globals.css`

**Files:**
- Modify: `app/globals.css`

- [ ] **Step 1: Add marquee animation keyframes and utility classes in `app/globals.css`**

Add the `@keyframes marquee-left`, `@keyframes marquee-right`, and utility animation rules with pause-on-hover and reduced-motion media queries:

```css
@keyframes marquee-left {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
}

@keyframes marquee-right {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0%); }
}

.animate-marquee-left {
  display: flex;
  width: max-content;
  animation: marquee-left 32s linear infinite;
}

.animate-marquee-right {
  display: flex;
  width: max-content;
  animation: marquee-right 32s linear infinite;
}

.marquee-pause:hover .animate-marquee-left,
.marquee-pause:hover .animate-marquee-right {
  animation-play-state: paused;
}

@media (prefers-reduced-motion: reduce) {
  .animate-marquee-left,
  .animate-marquee-right {
    animation: none;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
  }
}
```

- [ ] **Step 2: Verify CSS syntax and styles load without issues**

---

### Task 2: Implement the Authentic Tools Marquee Component in `components/TechStack.tsx`

**Files:**
- Modify: `components/TechStack.tsx`

- [ ] **Step 1: Define the authentic stack items with brand SVGs and verified project provenance**

Stack items:
- Row 1: Python, Next.js, TypeScript, React, Tailwind CSS, FastAPI, PostgreSQL, Supabase
- Row 2: OpenCV, TensorFlow, Flask, JavaScript, Framer Motion, Git, Vercel, HTML5 & CSS3

- [ ] **Step 2: Replace `TechStack.tsx` content with the heading "Tools that I have used" and the dual-row marquee container**

Include:
- `<h2 className="section-heading text-2xl sm:text-3xl">Tools that I have used</h2>`
- Pill badges with `rounded-full bg-pill border hairline border-line text-sm text-fg px-4 py-2 flex items-center gap-2.5`
- Gradient edge mask `[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]`
- Duplicated item lists per row to ensure seamless infinite looping.

---

### Task 3: Update Test Suite and Verify Integrity

**Files:**
- Modify: `tests/editorial-portfolio.test.mjs`

- [ ] **Step 1: Add a test verifying `TechStack.tsx` renders "Tools that I have used" and does not contain fabricated languages**

```javascript
test("tech stack showcases authentic tools and excludes fabricated skills", async () => {
  const techStack = await read("components/TechStack.tsx");
  assert.match(techStack, /Tools that I have used/);
  assert.match(techStack, /Python/);
  assert.match(techStack, /TypeScript/);
  assert.match(techStack, /OpenCV/);
  assert.doesNotMatch(techStack, /Django/);
  assert.doesNotMatch(techStack, /pgvector/);
});
```

- [ ] **Step 2: Run test suite**

Run: `npm test`
Expected: 6 passing tests, 0 failures.

---

### Task 4: Validate Production Build and Start Local Dev Server for User Preview

- [ ] **Step 1: Run Next.js typecheck and build validation**

Run: `npm run build`
Expected: Successful compile and static export/page generation.

- [ ] **Step 2: Start Next.js development server on `localhost:3000`**

Run: `npm run dev` (run in background)
Notify user that `http://localhost:3000` is ready for their manual confirmation.

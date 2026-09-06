import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (file) => readFile(new URL(`../${file}`, import.meta.url), "utf8");

test("home is a focused editorial entry point", async () => {
  const page = await read("app/page.tsx");

  assert.match(page, /GitHubActivity/);
  assert.doesNotMatch(page, /ContactSection/);
  assert.match(page, /FeaturedWork/);
});

test("the hero offers direct, professional next steps without a novelty mode", async () => {
  const hero = await read("components/Hero.tsx");
  const avatar = await read("components/HeroAvatar.tsx");

  assert.match(hero, /View selected work/);
  assert.match(hero, /Start a conversation/);
  assert.doesNotMatch(avatar, /Aura Mode|🐈‍⬛|✨/);
});

test("unfinished public content is honest and cannot masquerade as a download", async () => {
  const contact = await read("components/pages/ContactClient.tsx");
  const notes = await read("app/notes/page.tsx");

  assert.match(contact, /Resume is in preparation/);
  assert.doesNotMatch(contact, /Download CV \(PDF\)/);
  assert.match(notes, /In progress/);
});

test("footer removes fabricated visitor telemetry", async () => {
  const footer = await read("components/Footer.tsx");

  assert.doesNotMatch(footer, /Visitors:|Last visit:|ROUTES ·/);
});

test("project links do not label a generic GitHub profile as a live preview", async () => {
  const projects = await read("content/projects.ts");

  assert.doesNotMatch(projects, /label: "Live Preview", href: "https:\/\/github\.com\/subham007ai"/);
});

test("tech stack showcases authentic tools marquee and excludes unverified skills", async () => {
  const techStack = await read("components/TechStack.tsx");

  assert.match(techStack, /Tools that I have used/);
  assert.match(techStack, /Python/);
  assert.match(techStack, /TypeScript/);
  assert.match(techStack, /OpenCV/);
  assert.match(techStack, /FastAPI/);
  assert.match(techStack, /Framer Motion/);
  assert.doesNotMatch(techStack, /Django/);
  assert.doesNotMatch(techStack, /pgvector/);
});


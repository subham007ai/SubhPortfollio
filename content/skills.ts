export type SkillGroup = { label: string; items: string[] };

export const topSkills = [
  { name: "Exploratory Data Analysis", meaning: "Loading, cleaning, charting — the first 80% of any model worth shipping." },
  { name: "Computer Vision", meaning: "Mask detection · classification · transfer learning with PyTorch and OpenCV." },
  { name: "Git", meaning: "Real branches, real PRs, real history — not just `git add .`." }
];

export const fullStack: SkillGroup[] = [
  { label: "Languages", items: ["Python", "TypeScript", "JavaScript", "HTML", "CSS", "SQL"] },
  { label: "Data & ML", items: ["NumPy", "Pandas", "scikit-learn", "PyTorch", "TensorFlow / Keras", "OpenCV", "EfficientNet", "Matplotlib", "Seaborn"] },
  { label: "Web", items: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Lenis", "Zod", "React Hook Form"] },
  { label: "Backend / Infra", items: ["Flask", "FastAPI", "Node", "Docker", "REST"] },
  { label: "Tools", items: ["Git", "GitHub", "VS Code", "Jupyter", "Vercel", "Figma"] }
];

export const languages = [
  { name: "English", level: "Professional Working" },
  { name: "Hindi", level: "Professional Working" },
  { name: "Odia", level: "Native" }
];

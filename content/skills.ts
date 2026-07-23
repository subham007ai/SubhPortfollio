export type SkillGroup = { label: string; items: string[] };

export const topSkills = [
  { name: "Web Engineering", meaning: "Next.js, React, TypeScript, Tailwind. Client sites that ship on time and load fast." },
  { name: "Computer Vision", meaning: "Transfer learning · model comparison · honest evaluation. Where 100% accuracy is a warning, not a win." },
  { name: "Design Systems", meaning: "A bespoke palette, type stack and motion language per client — Konark chakra for OISFF, Cinzel gold for BWFPI." }
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

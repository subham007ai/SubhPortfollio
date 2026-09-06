export type SkillGroup = { label: string; items: string[] };

export const topSkills = [
  { name: "Web Development", meaning: "Full-stack web applications with Next.js, React, TypeScript, and Tailwind CSS. Responsive, fast, and structured cleanly." },
  { name: "Computer Vision & ML", meaning: "Image preprocessing pipelines, CNN transfer learning (EfficientNet, MobileNet), and real-time model deployment." },
  { name: "Interface Design", meaning: "Custom UI components, fluid micro-interactions with Framer Motion, and consistent design systems without templates." }
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

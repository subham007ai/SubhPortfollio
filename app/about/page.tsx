import type { Metadata } from "next";
import AboutClient from "@/components/pages/AboutClient";

export const metadata: Metadata = {
  title: "About — Subham Sarangi",
  description: "Quiet builder, sharp ambition. B.Tech CS-AIML at SOA University — the skills, the stack, and the creed."
};

export default function AboutPage() {
  return <AboutClient />;
}

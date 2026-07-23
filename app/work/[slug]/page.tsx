import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/content/projects";
import CaseStudyClient from "@/components/pages/CaseStudyClient";

export function generateStaticParams() {
  return projects.map(p => ({ slug: p.id }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = projects.find(x => x.id === params.slug);
  if (!p) return { title: "Not found — Subham Sarangi" };
  const title = `${p.title} — Subham Sarangi`;
  return {
    title,
    description: p.one,
    openGraph: { title, description: p.one }
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const index = projects.findIndex(p => p.id === params.slug);
  if (index === -1) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];
  return <CaseStudyClient project={project} next={next} />;
}

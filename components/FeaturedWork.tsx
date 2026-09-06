import Link from "next/link";
import Image from "next/image";
import { projects } from "@/content/projects";

const selectedProjects = projects.filter((project) => project.cover).slice(0, 3);

export default function FeaturedWork() {
  return (
    <section id="selected-work" className="mx-auto max-w-content px-6 md:px-10 pt-6 md:pt-8 pb-16 md:pb-24">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-6 md:mb-8">
        <div>
          <p className="dot-matrix mb-3">Selected work · 03</p>
          <h2 className="font-display font-normal text-4xl md:text-5xl tracking-tight leading-none">Top projects.</h2>
        </div>
        <Link href="/work" className="editorial-link text-sm">Browse all projects →</Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {selectedProjects.map((project) => (
          <article key={project.id} className="group">
            <Link
              href={`/work/${project.id}`}
              className="block rounded-2xl overflow-hidden bg-card border hairline border-line p-2 sm:p-2.5 card-elevation group-hover:border-lineStrong isolate"
              style={{ borderRadius: "16px" }}
            >
              <div
                className="relative aspect-[3/2] w-full rounded-xl overflow-hidden bg-bg/40 isolate"
                style={{ borderRadius: "10px", overflow: "hidden" }}
              >
                <Image
                  src={project.cover!}
                  alt={project.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </Link>
            <div className="mt-4 flex items-baseline justify-between gap-4">
              <p className="dot-matrix">{project.kind} · {project.year}</p>
              {project.status === "in-progress" && <p className="dot-matrix">In progress</p>}
            </div>
            <h3 className="mt-2 font-sans font-semibold text-xl md:text-2xl tracking-tight leading-tight"><Link href={`/work/${project.id}`} className="editorial-link">{project.title}</Link></h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{project.one}</p>
          </article>
        ))}
      </div>
      <div className="mt-16 border-t hairline border-t-line pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <p className="font-display font-normal text-2xl md:text-3xl tracking-tight">Have a project in mind?</p>
        <Link href="/contact" className="editorial-button">Start a conversation</Link>
      </div>
    </section>
  );
}

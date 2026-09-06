import { profile } from "@/content/profile";

export default function Footer() {
  return (
    <footer className="border-t hairline border-t-line">
      <div className="mx-auto max-w-content px-4 sm:px-6 md:px-10 py-8 sm:py-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 sm:gap-8">
        <div>
          <p className="dot-matrix mb-2.5 sm:mb-3">Based in Bhubaneswar, India</p>
          <a href={`mailto:${profile.email}`} className="font-display text-2xl sm:text-3xl md:text-4xl tracking-tight editorial-link break-all">
            {profile.email}
          </a>
        </div>
        <div className="flex gap-4 sm:gap-5 dot-matrix flex-wrap">
          <a href={profile.socials.github} target="_blank" rel="noreferrer" className="hover:text-fg py-1.5 inline-block active:opacity-70">GitHub ↗</a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-fg py-1.5 inline-block active:opacity-70">LinkedIn ↗</a>
          <a href={profile.socials.x} target="_blank" rel="noreferrer" className="hover:text-fg py-1.5 inline-block active:opacity-70">X ↗</a>
        </div>
      </div>
      <div className="border-t hairline border-t-line">
        <div className="mx-auto max-w-content px-4 sm:px-6 md:px-10 py-4 flex flex-wrap justify-between items-center gap-3 dot-matrix text-[10px] sm:text-[11px]">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>Available for select freelance work</span>
        </div>
      </div>
    </footer>
  );
}

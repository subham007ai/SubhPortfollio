import { profile } from "@/content/profile";

export default function Footer() {
  return (
    <footer className="border-t hairline border-t-line">
      <div className="mx-auto max-w-content px-6 md:px-10 py-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8">
        <div><p className="dot-matrix mb-3">Based in Bhubaneswar, India</p><a href={`mailto:${profile.email}`} className="font-display text-2xl md:text-4xl tracking-tight editorial-link break-all">{profile.email}</a></div>
        <div className="flex gap-5 dot-matrix"><a href={profile.socials.github} target="_blank" rel="noreferrer" className="hover:text-fg">GitHub ↗</a><a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-fg">LinkedIn ↗</a><a href={profile.socials.x} target="_blank" rel="noreferrer" className="hover:text-fg">X ↗</a></div>
      </div>
      <div className="border-t hairline border-t-line"><div className="mx-auto max-w-content px-6 md:px-10 py-4 flex flex-wrap justify-between gap-3 dot-matrix"><span>© {new Date().getFullYear()} {profile.name}</span><span>Available for select freelance work</span></div></div>
    </footer>
  );
}

import { profile } from "@/content/profile";
import SocialDock from "./SocialDock";

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
        <SocialDock />
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

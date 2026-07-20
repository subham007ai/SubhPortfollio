"use client";

import { useEffect, useState } from "react";
import { profile } from "@/content/profile";
import { routes } from "@/lib/routes";

export default function Footer() {
  const [theme, setTheme] = useState<"DRK" | "LGT">("DRK");
  useEffect(() => {
    const read = () =>
      setTheme(document.documentElement.dataset.theme === "light" ? "LGT" : "DRK");
    read();
    const obs = new MutationObserver(read);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => obs.disconnect();
  }, []);

  return (
    <footer className="relative">
      {/* Top hairline label */}
      <div className="flex items-center gap-4 px-6 md:px-10 max-w-content mx-auto pt-12">
        <span className="flex-1 h-px bg-line" />
        <span className="dot-matrix">[ END · OF · PAGE ]</span>
        <span className="flex-1 h-px bg-line" />
      </div>

      {/* WRITE + ELSEWHERE */}
      <div className="mx-auto max-w-content px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 py-10">
        <div className="md:col-span-7">
          <div className="dot-matrix mb-3">Write</div>
          <a
            href={`mailto:${profile.email}`}
            className="font-display tracking-tight text-2xl md:text-4xl underline-offset-4 hover:underline break-all"
            data-cursor="hover"
          >
            {profile.email}
          </a>
        </div>
        <div className="md:col-span-5">
          <div className="dot-matrix mb-3">Elsewhere</div>
          <ul className="space-y-2">
            <li>
              <a href={profile.socials.github} target="_blank" rel="noreferrer" className="dot-matrix inline-flex items-center gap-2 hover:text-fg">
                GitHub · @subham007ai <span>↗</span>
              </a>
            </li>
            <li>
              <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="dot-matrix inline-flex items-center gap-2 hover:text-fg">
                LinkedIn · in/subham-sarangi007 <span>↗</span>
              </a>
            </li>
            <li>
              <a href={profile.socials.x} target="_blank" rel="noreferrer" className="dot-matrix inline-flex items-center gap-2 hover:text-fg">
                X · @subhamxai <span>↗</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Coordinate strip */}
      <div className="border-y hairline border-y-line">
        <div className="mx-auto max-w-content px-6 md:px-10 py-3 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 dot-matrix">
          <span>20.2961° N · 85.8245° E</span>
          <span>SOA · 2024–2028</span>
          <span>BUILD · {new Date().getFullYear()}</span>
          <span>THEME · {theme}</span>
          <span>ROUTES · {String(routes.length).padStart(2, "0")}</span>
        </div>
      </div>

      {/* Signal line */}
      <div className="py-6 text-center">
        <span className="dot-matrix inline-flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--signal)" }} />
          AVAILABLE FOR FREELANCE
        </span>
      </div>

      {/* Bottom hairline + © */}
      <div className="border-t hairline border-t-line">
        <div className="mx-auto max-w-content px-6 md:px-10 py-5 text-center dot-matrix">
          © SUBHAM SARANGI · MADE IN BHUBANESWAR
        </div>
      </div>
    </footer>
  );
}

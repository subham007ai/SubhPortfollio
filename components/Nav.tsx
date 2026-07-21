"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { profile } from "@/content/profile";
import { ease } from "@/lib/motion";
import { routes, type IconName } from "@/lib/routes";

function Glyph({ name, className = "" }: { name: IconName; className?: string }) {
  const common = {
    width: 18, height: 18, viewBox: "0 0 24 24",
    fill: "none", stroke: "currentColor", strokeWidth: 1.8,
    strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
    className
  };
  switch (name) {
    case "index":   return (<svg {...common}><path d="M3 11l9-8 9 8" /><path d="M5 10v10h14V10" /></svg>);
    case "about":   return (<svg {...common}><circle cx="12" cy="8" r="3.5" /><path d="M5 21c1.2-3.6 4-5.5 7-5.5s5.8 1.9 7 5.5" /></svg>);
    case "work":    return (<svg {...common}><rect x="3" y="7" width="14" height="12" rx="2" /><path d="M7 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><path d="M21 11v8a2 2 0 0 1-2 2H9" /></svg>);
    case "journey": return (<svg {...common}><path d="M3 20h4v-4H3zM10 20h4v-9h-4zM17 20h4V6h-4z" /></svg>);
    case "notes":   return (<svg {...common}><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" /><path d="M14 3v6h6" /><path d="M8 13h8M8 17h5" /></svg>);
    case "contact": return (<svg {...common}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>);
    case "mail":    return (<svg {...common}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>);
    case "github":  return (<svg {...common}><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.94.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2z" /></svg>);
    case "x":       return (<svg {...common}><path d="M4 4l16 16M20 4L4 20" /></svg>);
  }
}

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    // Hide header if scrolling down past 100px. Reveal if scrolling up.
    // Also, never hide if the mobile menu is open.
    if (latest > 100 && latest > previous && !open) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = prev; };
    }
  }, [open]);

  return (
    <>
      <motion.header 
        variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="sticky top-0 z-40 backdrop-blur-md bg-bg/70 border-b hairline border-b-line"
      >
        <div className="mx-auto max-w-content px-5 md:px-10 h-14 flex items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <motion.span
              className="block w-2 h-2 rounded-full bg-fg"
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="dot-matrix text-fg/90 whitespace-nowrap">
              <span className="hidden md:inline">SUBHAM · S</span>
              <span className="inline md:hidden">SS</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {routes.map(r => {
              const active = r.href === "/" ? pathname === "/" : pathname.startsWith(r.href);
              return (
                <Link
                  key={r.href}
                  href={r.href}
                  className="relative px-3 py-1.5 dot-matrix whitespace-nowrap"
                  style={{ color: active ? "var(--fg)" : "var(--muted)" }}
                >
                  {r.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-2 right-2 -bottom-px h-px bg-fg"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="md:hidden flex items-center gap-2 dot-matrix border hairline border-line rounded-full px-2.5 py-1.5"
              style={{ color: "var(--fg)" }}
            >
              <span className="flex flex-col gap-[3px]">
                <span className="block w-3.5 h-px bg-current" />
                <span className="block w-3.5 h-px bg-current" />
                <span className="block w-3.5 h-px bg-current" />
              </span>
              <span>MENU</span>
            </button>
          </div>
        </div>
      </motion.header>

      {mounted && createPortal(
        <AnimatePresence>
          {open && (
            <motion.div
              key="scrim"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease }}
              className="fixed inset-0 z-[60] md:hidden"
              style={{ background: "var(--bg)" }}
              onClick={() => setOpen(false)}
            >
              <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
              <motion.div
                initial={{ y: -12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -8, opacity: 0 }}
                transition={{ duration: 0.4, ease }}
                className="relative h-full flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Top bar */}
                <div className="h-14 px-5 flex items-center justify-between border-b hairline border-b-line">
                  <span className="flex items-center gap-2.5 dot-matrix" style={{ color: "var(--fg)" }}>
                    <span className="block w-2 h-2 rounded-full bg-fg" />
                    SS
                  </span>
                  <button
                    onClick={() => setOpen(false)}
                    aria-label="Close menu"
                    className="dot-matrix border hairline border-line rounded-full px-3 py-1.5 flex items-center gap-2"
                    style={{ color: "var(--fg)" }}
                  >
                    <span className="text-base leading-none">×</span>
                    CLOSE
                  </button>
                </div>

                {/* Routes */}
                <nav className="flex-1 overflow-y-auto px-3 sm:px-5 py-6">
                  <ul className="space-y-1.5">
                    {routes.map((r, i) => {
                      const active = r.href === "/" ? pathname === "/" : pathname.startsWith(r.href);
                      return (
                        <motion.li
                          key={r.href}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.35, ease, delay: 0.05 + i * 0.04 }}
                        >
                          <Link
                            href={r.href}
                            onClick={() => setOpen(false)}
                            className="group flex items-center gap-4 rounded-full pl-4 pr-3 py-3.5 transition-colors"
                            style={{
                              background: active ? "var(--fg)" : "transparent",
                              color: active ? "var(--bg)" : "var(--fg)"
                            }}
                          >
                            <Glyph name={r.icon} className="shrink-0" />
                            <span className="font-display text-2xl tracking-tight leading-none">{r.label}</span>
                            <span className="ml-auto flex items-center gap-2 dot-matrix" style={{ color: active ? "var(--bg)" : "var(--muted)" }}>
                              {active ? "HERE" : ""}
                              <span className="text-base leading-none">→</span>
                            </span>
                          </Link>
                        </motion.li>
                      );
                    })}
                  </ul>

                  {/* Divider */}
                  <div className="mt-8 mb-3 flex items-center gap-3">
                    <span className="flex-1 h-px bg-line" />
                    <span className="dot-matrix">GET IN TOUCH</span>
                    <span className="flex-1 h-px bg-line" />
                  </div>

                  {/* CTAs */}
                  <ul className="space-y-1.5">
                    <CtaRow
                      href={`mailto:${profile.email}`}
                      icon="mail"
                      label="Email Subham"
                      sub={profile.email}
                      onTap={() => setOpen(false)}
                      signal
                    />
                    <CtaRow
                      href={profile.socials.github}
                      icon="github"
                      label="Open GitHub"
                      sub="@subham007ai"
                      onTap={() => setOpen(false)}
                    />
                    <CtaRow
                      href={profile.socials.x}
                      icon="x"
                      label="DM on X"
                      sub="@subhamxai"
                      onTap={() => setOpen(false)}
                    />
                  </ul>
                </nav>

                {/* Footer */}
                <div className="px-5 py-4 border-t hairline border-t-line flex items-center justify-between dot-matrix">
                  <span>BHUBANESWAR · IN</span>
                  <span>{new Date().getFullYear()} ©</span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}

function CtaRow({
  href, icon, label, sub, onTap, signal = false
}: {
  href: string; icon: IconName; label: string; sub: string; onTap: () => void; signal?: boolean;
}) {
  const external = href.startsWith("http") || href.startsWith("mailto:");
  return (
    <li>
      <a
        href={href}
        onClick={onTap}
        target={external && href.startsWith("http") ? "_blank" : undefined}
        rel={external && href.startsWith("http") ? "noreferrer" : undefined}
        className="group flex items-center gap-4 rounded-2xl px-4 py-3 border hairline border-line"
        style={{ color: "var(--fg)" }}
      >
        <span style={{ color: signal ? "var(--signal)" : "var(--fg)" }} className="shrink-0">
          <Glyph name={icon} />
        </span>
        <span className="flex flex-col">
          <span className="font-display text-lg tracking-tight leading-none">{label}</span>
          <span className="dot-matrix mt-1 normal-case">{sub}</span>
        </span>
        <span className="ml-auto dot-matrix">↗</span>
      </a>
    </li>
  );
}

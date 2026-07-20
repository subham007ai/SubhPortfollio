"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { getStoredTheme, setStoredTheme, type Theme } from "@/lib/theme";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTheme(getStoredTheme());
    setMounted(true);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    setStoredTheme(next);
  };

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      data-cursor="hover"
      className="relative group flex items-center gap-2 dot-matrix px-2.5 py-1.5 rounded-full border hairline border-line overflow-hidden"
      style={{ color: "var(--fg)" }}
    >
      <span className="relative w-3.5 h-3.5 inline-block">
        <AnimatePresence mode="wait" initial={false}>
          {mounted && theme === "dark" ? (
            <motion.svg
              key="moon"
              initial={{ opacity: 0, rotate: -45, scale: 0.7 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 45, scale: 0.7 }}
              transition={{ duration: 0.3 }}
              viewBox="0 0 24 24" className="absolute inset-0 w-full h-full"
              fill="none" stroke="currentColor" strokeWidth="2"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </motion.svg>
          ) : (
            <motion.svg
              key="sun"
              initial={{ opacity: 0, rotate: -45, scale: 0.7 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 45, scale: 0.7 }}
              transition={{ duration: 0.3 }}
              viewBox="0 0 24 24" className="absolute inset-0 w-full h-full"
              fill="none" stroke="currentColor" strokeWidth="2"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
            </motion.svg>
          )}
        </AnimatePresence>
      </span>
      <span className="hidden sm:inline">{theme === "dark" ? "DRK" : "LGT"}</span>
    </button>
  );
}

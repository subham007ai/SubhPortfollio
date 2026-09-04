"use client";

import { useEffect, useState } from "react";
import { PullCord } from "pullcord";
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

  if (!mounted) return null;

  return (
    <PullCord
      onPull={toggle}
      pulled={theme === "light"}
      ariaLabel="Toggle theme"
      config={{
        gravity: 1250,
        damping: 0.94,
        iterations: 20,
        stretchMax: 26,
      }}
    />
  );
}


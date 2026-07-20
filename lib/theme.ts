export type Theme = "dark" | "light";
export const THEME_KEY = "subham-theme";

export const themeInitScript = `(() => {
  try {
    const t = localStorage.getItem('${THEME_KEY}');
    const sys = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    const theme = t === 'light' || t === 'dark' ? t : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();`;

export function getStoredTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  const t = window.localStorage.getItem(THEME_KEY);
  return t === "light" ? "light" : "dark";
}

export function setStoredTheme(t: Theme) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(THEME_KEY, t);
  document.documentElement.setAttribute("data-theme", t);
}

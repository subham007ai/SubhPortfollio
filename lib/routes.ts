export type IconName = "index" | "about" | "work" | "journey" | "notes" | "contact" | "mail" | "github" | "x";

export const routes: { href: string; label: string; icon: IconName }[] = [
  { href: "/",        label: "Index",   icon: "index" },
  { href: "/about",   label: "About",   icon: "about" },
  { href: "/work",    label: "Work",    icon: "work" },
  { href: "/journey", label: "Journey", icon: "journey" },
  { href: "/notes",   label: "Notes",   icon: "notes" },
  { href: "/contact", label: "Contact", icon: "contact" }
];

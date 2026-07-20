import type { Variants } from "framer-motion";

export const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* Horizontal wipe — new page reveals left-to-right, old page fades under it.
   clip-path insets must keep identical units (%) or framer can't interpolate. */
export const pageTransition: Variants = {
  initial: { clipPath: "inset(0% 100% 0% 0%)" },
  enter:   { clipPath: "inset(0% 0% 0% 0%)", transition: { duration: 0.6, ease } },
  exit:    { opacity: 0, scale: 0.98, transition: { duration: 0.3, ease } }
};

/* prefers-reduced-motion: instant swap, no wipe */
export const pageTransitionReduced: Variants = {
  initial: { opacity: 0 },
  enter:   { opacity: 1, transition: { duration: 0.01 } },
  exit:    { opacity: 0, transition: { duration: 0.01 } }
};

export const revealUp: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } }
};

export const charStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.025, delayChildren: 0.1 } }
};

export const charItem: Variants = {
  hidden:  { y: "110%", opacity: 0 },
  visible: { y: "0%", opacity: 1, transition: { duration: 0.7, ease } }
};

export const scrollReveal: Variants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } }
};

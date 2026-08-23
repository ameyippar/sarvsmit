import type { Transition, Variants } from "framer-motion";

export const ease: Transition["ease"] = [0.22, 1, 0.36, 1];

export const duration = {
  fast: 0.35,
  base: 0.7,
  slow: 0.95,
} as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
};

export const viewport = { once: true, margin: "-80px" as const };

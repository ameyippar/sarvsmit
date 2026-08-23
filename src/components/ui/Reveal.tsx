"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { duration, ease, fadeUp, viewport } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article" | "li";
};

export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();
  const Tag = motion[as];

  return (
    <Tag
      className={className}
      variants={fadeUp}
      initial={reduce ? "visible" : "hidden"}
      whileInView="visible"
      viewport={viewport}
      transition={{ duration: reduce ? 0 : duration.base, delay, ease }}
    >
      {children}
    </Tag>
  );
}

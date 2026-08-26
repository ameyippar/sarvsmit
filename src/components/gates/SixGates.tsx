"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Boxes,
  RotateCcw,
  Settings2,
  Scale,
  Users,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";
import { Container } from "@/components/ui";
import { duration, ease, fadeUp, stagger, viewport } from "@/lib/motion";

const gates = [
  {
    gate: "01",
    title: "Volume Scalability",
    criterion: "Able to scale production 10x without recipe reformulation or custom equipment overhauls.",
    icon: Boxes,
  },
  {
    gate: "02",
    title: "Batch Repeatability",
    criterion: "Strict consistency tolerances across different production runs and co-packer facilities.",
    icon: RotateCcw,
  },
  {
    gate: "03",
    title: "Plant Line Practicality",
    criterion: "Engineered to run seamlessly on standard commercial food manufacturing and packaging lines.",
    icon: Settings2,
  },
  {
    gate: "04",
    title: "Healthy Unit Economics",
    criterion: "Target COGS structured to deliver healthy gross margins across distributors and retail tiers.",
    icon: Scale,
  },
  {
    gate: "05",
    title: "Consumer Taste Preference",
    criterion: "Rigorous blind sensory panels confirming consumer preference and repeat purchase appeal over incumbents.",
    icon: Users,
  },
  {
    gate: "06",
    title: "Ambient Shelf Stability",
    criterion: "12 to 18+ months of real-world ambient shelf life verified through accelerated stability testing.",
    icon: ShieldCheck,
  },
];

export function SixGates() {
  const reduce = useReducedMotion();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      id="six-gates"
      className="relative overflow-hidden bg-gradient-to-b from-[#d8dfeb] via-[#eaeff7] to-[#d6dce6] py-24 sm:py-32 lg:py-40 border-t border-[#b8c4d6]/60"
    >
      {/* Background Lighting */}
      <div className="pointer-events-none absolute inset-0 select-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-[20%] right-[10%] h-[550px] w-[550px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.9),transparent_70%)] blur-3xl" />
        <div className="absolute bottom-[10%] left-[5%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(190,202,218,0.4),transparent_70%)] blur-3xl" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(rgba(20, 30, 50, 0.4) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8fa0b8]/40 to-transparent" />
      </div>

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl">
          <motion.div
            variants={fadeUp}
            initial={reduce ? "visible" : "hidden"}
            whileInView="visible"
            viewport={viewport}
            transition={{ duration: duration.base, ease }}
            className="metallic-badge inline-flex items-center gap-2 rounded-full px-3.5 py-1 backdrop-blur-sm"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-black">
              Commercial Verification Protocol
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            initial={reduce ? "visible" : "hidden"}
            whileInView="visible"
            viewport={viewport}
            transition={{ duration: duration.base, delay: 0.1, ease }}
            className="mt-6 font-serif text-3xl font-medium leading-[1.12] tracking-tight text-black sm:text-4xl md:text-5xl lg:text-6xl"
          >
            6 Gates to Commercial Viability
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial={reduce ? "visible" : "hidden"}
            whileInView="visible"
            viewport={viewport}
            transition={{ duration: duration.base, delay: 0.2, ease }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-graphite/90 sm:text-xl font-normal font-sans"
          >
            Every product formulation must clear 6 rigorous commercial viability gates before moving to consumer shelves.
          </motion.p>
        </div>

        {/* 6 Gates Grid */}
        <motion.div
          variants={stagger}
          initial={reduce ? "visible" : "hidden"}
          whileInView="visible"
          viewport={viewport}
          className="mt-16 sm:mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {gates.map((item, idx) => {
            const Icon = item.icon;
            const isHovered = hoveredIdx === idx;

            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                transition={{ duration: duration.base, ease }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`metallic-card group relative flex flex-col justify-between rounded-xl p-5 xs:p-6 sm:p-7 lg:p-8 backdrop-blur-md transition-all duration-300 ${
                  isHovered
                    ? "border-[#8a9cb5] shadow-[0_15px_40px_rgba(20,25,35,0.09)] translate-y-[-4px]"
                    : ""
                }`}
              >
                {/* Glowing Top Indicator */}
                <div
                  className={`absolute inset-x-0 -top-px h-[2px] transition-all duration-500 ${
                    isHovered
                      ? "w-full bg-gradient-to-r from-transparent via-black to-transparent opacity-100"
                      : "w-0 opacity-0"
                  }`}
                />

                <div>
                  {/* Gate Label & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-[#b8c2d1]/70 bg-white/70 px-2.5 py-0.5 font-mono text-[11px] font-bold text-[#5c6778] transition-colors group-hover:text-black">
                      <span>GATE</span>
                      <span>{item.gate}</span>
                    </div>

                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-lg border transition-all duration-300 ${
                        isHovered
                          ? "border-[#8a9cb5] bg-white text-black shadow-[0_2px_8px_rgba(0,0,0,0.08),inset_0_1px_0_#ffffff]"
                          : "border-[#b8c4d6] bg-white/70 text-graphite shadow-[inset_0_1px_0_#ffffff]"
                      }`}
                    >
                      <Icon strokeWidth={1.5} className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 font-sans text-xl font-bold tracking-tight text-black transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Criterion Quote */}
                  <p className="mt-3 text-sm leading-relaxed text-graphite/90 transition-colors duration-300 font-medium">
                    {item.criterion}
                  </p>
                </div>

                {/* Footer */}
                <div className="mt-8 pt-4 border-t border-[#b8c2d1]/40 flex items-center justify-between text-[11px] font-semibold tracking-wider text-[#4d5666] transition-colors duration-300 group-hover:text-black">
                  <span>Pre-Launch Verification</span>
                  <ArrowUpRight strokeWidth={1.5} className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-black" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}

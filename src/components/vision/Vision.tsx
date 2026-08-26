"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Container } from "@/components/ui";
import { LogoMark } from "@/components/brand/LogoMark";
import { duration, fadeUp, viewport } from "@/lib/motion";

const pillars = ["Ideate", "Innovate", "Create", "Scale", "Impact"];

export function Vision() {
  const reduce = useReducedMotion();

  return (
    <section
      id="vision"
      className="relative overflow-hidden bg-gradient-to-b from-[#d6dce6] via-[#e4eaf4] to-[#cfd6e4] py-20 sm:py-32 lg:py-44 border-t border-[#b8c4d6]/60 text-center"
    >
      {/* Dramatic Cosmic & Orbital Metallic Lighting */}
      <div className="pointer-events-none absolute inset-0 select-none overflow-hidden" aria-hidden="true">
        {/* Specular Central Chrome Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[550px] w-[550px] sm:h-[750px] sm:w-[950px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.95),transparent_70%)] blur-3xl" />
        
        {/* Orbital Precision Rings */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative h-[340px] w-[340px] sm:h-[650px] sm:w-[650px] md:h-[800px] md:w-[800px] rounded-full border border-[#9eaec4]/35">
            <div className="absolute inset-8 sm:inset-16 rounded-full border border-[#9eaec4]/25 border-dashed animate-[spin_180s_linear_infinite]" />
            <div className="absolute inset-16 sm:inset-32 rounded-full border border-[#9eaec4]/20" />
          </div>
        </div>

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
        {/* Eyebrow */}
        <motion.div
          variants={fadeUp}
          initial={reduce ? "visible" : "hidden"}
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: duration.base, ease: "easeOut" }}
          className="metallic-badge inline-flex items-center gap-2 rounded-full px-3.5 py-1 sm:px-4 sm:py-1.5 backdrop-blur-md"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-black">
            Our Long-Term Vision
          </span>
        </motion.div>

        {/* Dramatic Main Headline */}
        <motion.h2
          variants={fadeUp}
          initial={reduce ? "visible" : "hidden"}
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: duration.slow, delay: 0.1, ease: "easeOut" }}
          className="mt-6 sm:mt-8 mx-auto max-w-5xl font-serif text-[32px] sm:text-5xl md:text-7xl lg:text-8xl font-normal leading-[1.08] tracking-tight text-black"
        >
          Building the Future of FMCG Innovation
        </motion.h2>

        {/* Pillar Sequence: "Ideate. Innovate. Create. Scale. Impact." */}
        <motion.div
          variants={fadeUp}
          initial={reduce ? "visible" : "hidden"}
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: duration.base, delay: 0.2, ease: "easeOut" }}
          className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-4"
        >
          {pillars.map((pillar, idx) => (
            <div key={pillar} className="flex items-center gap-2 sm:gap-4">
              <span className="metallic-card rounded-full px-3.5 py-1 sm:px-4 sm:py-1.5 font-sans text-xs sm:text-sm font-semibold uppercase tracking-wider text-black shadow-[0_2px_10px_rgba(0,0,0,0.04)] backdrop-blur-sm transition-all duration-300 hover:border-[#7b8ea8]">
                {pillar}
              </span>
              {idx < pillars.length - 1 && (
                <span className="h-1 w-1 rounded-full bg-black/40" />
              )}
            </div>
          ))}
        </motion.div>

        {/* Dramatic Statement Monolith with Prominent Central Logo */}
        <motion.div
          variants={fadeUp}
          initial={reduce ? "visible" : "hidden"}
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: duration.slow, delay: 0.3, ease: "easeOut" }}
          className="mt-12 sm:mt-16 lg:mt-20 mx-auto max-w-4xl"
        >
          <div className="group relative overflow-hidden rounded-2xl border border-[#b4c0d2] bg-gradient-to-br from-white/95 via-[#ebf0f8] to-[#d8e0ec] p-6 sm:p-10 lg:p-14 backdrop-blur-2xl shadow-[0_20px_60px_rgba(20,25,35,0.1),inset_0_1px_1px_#ffffff]">
            {/* Top Glowing Indicator */}
            <div className="absolute inset-x-0 -top-px h-[2px] bg-gradient-to-r from-transparent via-black to-transparent opacity-80" />

            <div className="relative z-10 flex flex-col items-center">
              {/* Prominent Central 3D Chrome Sarvsmit Emblem */}
              <div className="mb-5 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full border border-[#a8b6cb] bg-gradient-to-br from-white via-[#dde4f0] to-[#b6c2d4] p-3.5 shadow-[0_10px_30px_rgba(20,25,35,0.12),inset_0_2px_4px_#ffffff]">
                <LogoMark className="h-full w-full drop-shadow-[0_4px_10px_rgba(0,0,0,0.25)]" />
              </div>

              <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#4d5666]">
                Vision
              </span>

              {/* Exact Vision Statement */}
              <p className="mt-4 sm:mt-5 font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed tracking-tight text-black max-w-3xl">
                &ldquo;To become a globally recognized FMCG innovation and commercialization partner delivering next-generation food systems for modern consumers.&rdquo;
              </p>

              <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-2 text-[10.5px] sm:text-xs font-semibold tracking-wider text-[#4d5666] uppercase">
                <span>Sarvsmit Global Enterprise</span>
                <span className="h-1 w-1 rounded-full bg-black/40" />
                <span>Global Reach</span>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui";
import { duration, ease, fadeUp, stagger, viewport } from "@/lib/motion";

const disciplines = [
  {
    number: "01",
    tag: "CHEMISTRY & NUTRITION",
    title: "Food Science",
    benchmark: "Bench Formulation",
    description:
      "Formulation chemistry, functional ingredient interaction, sensory optimization, and active nutritional profiling.",
  },
  {
    number: "02",
    tag: "SENSORY BENCHMARKING",
    title: "Consumer Insights",
    benchmark: "Hedonic Mapping",
    description:
      "Sensory validation, competitive taste benchmarking, aroma profiling, and quantitative consumer repeat-purchase mapping.",
  },
  {
    number: "03",
    tag: "PLANT-FLOOR FEASIBILITY",
    title: "Manufacturing Practicality",
    benchmark: "Co-Packer Auditing",
    description:
      "Factory trial management, toll-manufacturing qualification, continuous line feasibility, and industrial batch stability.",
  },
  {
    number: "04",
    tag: "THERMODYNAMICS & KINETICS",
    title: "Process Engineering",
    benchmark: "Yield Kinetics",
    description:
      "Thermal processing curves, fluid rheology, high-shear mixing parameters, and active barrier shelf-life preservation.",
  },
  {
    number: "05",
    tag: "UNIT ECONOMICS & COGS",
    title: "Commercial Strategy",
    benchmark: "Margin Engineering",
    description:
      "Granular ingredient cost modeling, channel margin structuring, regulatory compliance, and turnkey retail launch sequencing.",
  },
];

export function About() {
  const reduce = useReducedMotion();

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-[#d6dce6] via-[#e5ebf4] to-[#d8dfeb] py-24 sm:py-32 lg:py-36 border-t border-[#b8c4d6]/60"
    >
      {/* Background Ambient Imagery & Precision Lighting */}
      <div className="pointer-events-none absolute inset-0 select-none overflow-hidden" aria-hidden="true">
        {/* Fading High-End Food Science Lab Background */}
        <div className="absolute inset-0 opacity-[0.12] mix-blend-multiply">
          <Image
            src="/images/hero-lab.jpg"
            alt="Food Science Laboratory Background"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority={false}
          />
        </div>

        {/* Ambient Specular Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[600px] w-[950px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.95),transparent_70%)] blur-3xl" />

        {/* Technical Grid Overlay */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(rgba(20, 30, 50, 0.4) 1px, transparent 1px)`,
            backgroundSize: "36px 36px",
          }}
        />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8fa0b8]/40 to-transparent" />
      </div>

      <Container className="relative z-10">
        {/* Editorial Section Header (No Generic AI Pill Badge) */}
        <div className="max-w-4xl">
          <motion.div
            variants={fadeUp}
            initial={reduce ? "visible" : "hidden"}
            whileInView="visible"
            viewport={viewport}
            transition={{ duration: duration.base, ease }}
            className="flex items-center gap-3 border-b border-[#a8b8cc]/70 pb-3"
          >
            <span className="font-mono text-xs font-bold tracking-[0.24em] text-black uppercase">
              {"//"} 01 · INSTITUTIONAL PROFILE
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-[#8a9bb2]/60 to-transparent" />
            <span className="text-[10.5px] font-mono tracking-widest text-[#556072] uppercase hidden sm:inline">
              R&amp;D · PILOT SCALE · COMMERCIALIZATION
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            initial={reduce ? "visible" : "hidden"}
            whileInView="visible"
            viewport={viewport}
            transition={{ duration: duration.base, delay: 0.1, ease }}
            className="mt-6 font-serif text-3xl font-medium leading-[1.08] tracking-tight text-black sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Building the Next Generation of FMCG Products
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial={reduce ? "visible" : "hidden"}
            whileInView="visible"
            viewport={viewport}
            transition={{ duration: duration.base, delay: 0.18, ease }}
            className="mt-6 max-w-3xl text-base sm:text-lg md:text-xl leading-relaxed text-graphite/90 font-normal font-sans"
          >
            Sarvsmit’s Consulting arm is a product innovation and commercialization consultancy focused on helping brands build scalable, differentiated FMCG products.
          </motion.p>
        </div>

        {/* Five Disciplines Matrix (Bespoke Laboratory Specification Layout) */}
        <div className="mt-14 sm:mt-18">
          <div className="mb-6 flex items-center justify-between">
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-[#4d5666]">
              Core Integrated Disciplines (01 — 05)
            </span>
            <div className="hidden h-px flex-1 bg-[#a8b6cb]/50 ml-6 sm:block" />
          </div>

          <motion.div
            variants={stagger}
            initial={reduce ? "visible" : "hidden"}
            whileInView="visible"
            viewport={viewport}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5"
          >
            {disciplines.map((item) => {
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  transition={{ duration: duration.base, ease }}
                  className="metallic-card group relative flex flex-col justify-between rounded-xl p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#8e9eb5] hover:shadow-[0_16px_40px_rgba(20,25,35,0.09)] hover:translate-y-[-3px]"
                >
                  {/* Glowing top line on hover */}
                  <div className="absolute inset-x-0 -top-px h-[2px] w-0 bg-gradient-to-r from-transparent via-black to-transparent transition-all duration-500 group-hover:w-full" />

                  <div>
                    {/* Top Row: Index + Technical Tag */}
                    <div className="flex items-center justify-between border-b border-[#b8c2d1]/40 pb-3">
                      <span className="font-mono text-xs font-bold tracking-widest text-black">
                        {item.number}
                      </span>
                      <span className="font-mono text-[9px] font-bold tracking-wider text-[#5c6778] uppercase">
                        {item.benchmark}
                      </span>
                    </div>

                    {/* Discipline Title */}
                    <div className="mt-5">
                      <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-[#556072]">
                        {item.tag}
                      </span>
                      <h3 className="mt-1 font-serif text-2xl font-bold tracking-tight text-black transition-colors duration-300">
                        {item.title}
                      </h3>
                    </div>

                    {/* Technical Subtext */}
                    <p className="mt-3.5 text-xs leading-relaxed text-[#495362] font-medium transition-colors duration-300 group-hover:text-graphite">
                      {item.description}
                    </p>
                  </div>

                  {/* Card Bottom Spec Indicator */}
                  <div className="mt-6 pt-3 border-t border-[#b8c2d1]/40 flex items-center justify-between text-[9.5px] font-mono uppercase tracking-wider text-[#5c6778]">
                    <span>Standardized Protocol</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-black/40 group-hover:bg-black transition-colors" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Closing Outcome Lockup (Executive Monolith) */}
        <motion.div
          variants={fadeUp}
          initial={reduce ? "visible" : "hidden"}
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: duration.base, delay: 0.25, ease }}
          className="mt-12 sm:mt-16"
        >
          <div className="relative overflow-hidden rounded-2xl border border-[#b4c0d2] bg-gradient-to-r from-white/95 via-[#ebf0f8] to-[#d8e0ec] p-6 sm:p-8 backdrop-blur-xl shadow-[0_12px_35px_rgba(20,25,35,0.06),inset_0_1px_1px_#ffffff]">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start sm:items-center gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/15 bg-black text-white shadow-[0_2px_10px_rgba(0,0,0,0.15)]">
                  <ArrowRight className="h-4.5 w-4.5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#4d5666]">
                    The Strategic Outcome
                  </span>
                  <p className="font-serif text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight text-black mt-0.5">
                    To transform ideas into market-ready products.
                  </p>
                </div>
              </div>

              <div className="metallic-badge inline-flex items-center gap-2 self-start sm:self-center rounded-full px-4 py-1.5 text-xs text-black font-semibold shrink-0">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                <span>Ideation to Scale</span>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

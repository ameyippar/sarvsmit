"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  FlaskConical,
  Users,
  Factory,
  Cpu,
  TrendingUp,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui";
import { duration, ease, fadeUp, stagger, viewport } from "@/lib/motion";

const disciplines = [
  {
    number: "01",
    title: "Food Science",
    icon: FlaskConical,
    description: "Formulation chemistry, ingredient functionality, taste optimization, and nutritional profiling.",
  },
  {
    number: "02",
    title: "Consumer Insights",
    icon: Users,
    description: "Sensory validation, market-driven demand mapping, and consumer sensory benchmarking.",
  },
  {
    number: "03",
    title: "Manufacturing Practicality",
    icon: Factory,
    description: "Plant-floor feasibility, co-packer qualification, line trial management, and scale readiness.",
  },
  {
    number: "04",
    title: "Process Engineering",
    icon: Cpu,
    description: "Thermal processing, rheology, mixing thermodynamics, scale-up kinetics, and shelf-life stability.",
  },
  {
    number: "05",
    title: "Commercial Strategy",
    icon: TrendingUp,
    description: "Cost-of-goods modeling, unit economics, regulatory compliance, and go-to-market execution.",
  },
];

export function About() {
  const reduce = useReducedMotion();

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-[#d6dce6] via-[#e8edf5] to-[#dce2ec] py-24 sm:py-32 lg:py-40 border-t border-[#b8c4d6]/60"
    >
      {/* Ambient background glow & grid lines */}
      <div className="pointer-events-none absolute inset-0 select-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.9),transparent_70%)] blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(rgba(20, 30, 50, 0.4) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8fa0b8]/40 to-transparent" />
      </div>

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl">
          <motion.div
            variants={fadeUp}
            initial={reduce ? "visible" : "hidden"}
            whileInView="visible"
            viewport={viewport}
            transition={{ duration: duration.base, ease }}
            className="metallic-badge inline-flex items-center gap-2 rounded-full px-3.5 py-1 backdrop-blur-sm"
          >
            <Sparkles className="h-3 w-3 text-metal" />
            <span className="text-[10.5px] font-bold uppercase tracking-[0.28em] text-black">
              About Sarvsmit Consulting
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
            Building the Next Generation of FMCG Products
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial={reduce ? "visible" : "hidden"}
            whileInView="visible"
            viewport={viewport}
            transition={{ duration: duration.base, delay: 0.2, ease }}
            className="mt-6 max-w-3xl text-lg leading-relaxed text-graphite/90 sm:text-xl font-normal font-sans"
          >
            Sarvsmit’s Consulting arm is a product innovation and commercialization consultancy focused on helping brands build scalable, differentiated FMCG products.
          </motion.p>
        </div>

        {/* Five Disciplines Grid */}
        <div className="mt-16 sm:mt-20">
          <div className="mb-6 flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#4d5666]">
              Core Integrated Disciplines
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
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  transition={{ duration: duration.base, ease }}
                  className="metallic-card group relative flex flex-col justify-between rounded-xl p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#8e9eb5] hover:shadow-[0_12px_35px_rgba(20,25,35,0.08)] hover:translate-y-[-3px]"
                >
                  {/* Subtle top indicator line on hover */}
                  <div className="absolute inset-x-0 -top-px h-[2px] w-0 bg-gradient-to-r from-transparent via-black to-transparent transition-all duration-500 group-hover:w-full" />

                  <div>
                    {/* Top Row: Index & Icon */}
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold tracking-widest text-[#5c6778] transition-colors duration-300 group-hover:text-black">
                        {item.number}
                      </span>
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#b8c4d6] bg-white/70 text-graphite shadow-[inset_0_1px_0_#ffffff] transition-all duration-300 group-hover:border-[#96a4b8] group-hover:text-black group-hover:bg-white">
                        <Icon className="h-4.5 w-4.5" />
                      </div>
                    </div>

                    {/* Discipline Title */}
                    <h3 className="mt-6 font-serif text-xl font-bold tracking-tight text-black transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>

                  {/* Technical Subtext */}
                  <p className="mt-4 text-xs leading-relaxed text-[#505a6b] transition-colors duration-300 group-hover:text-graphite">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Closing Outcome Lockup */}
        <motion.div
          variants={fadeUp}
          initial={reduce ? "visible" : "hidden"}
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: duration.base, delay: 0.3, ease }}
          className="mt-12 sm:mt-16"
        >
          <div className="relative overflow-hidden rounded-2xl border border-[#b4c0d2] bg-gradient-to-r from-white/95 via-[#ebf0f8] to-[#d8e0ec] p-6 sm:p-8 backdrop-blur-md shadow-[0_10px_35px_rgba(20,25,35,0.06),inset_0_1px_0_#ffffff]">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/15 bg-black text-white shadow-[0_2px_10px_rgba(0,0,0,0.15)]">
                  <ArrowRight className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#4d5666]">
                    The Outcome
                  </span>
                  <p className="font-serif text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight text-black mt-0.5">
                    To transform ideas into market-ready products.
                  </p>
                </div>
              </div>

              <div className="metallic-badge inline-flex items-center gap-2 self-start sm:self-center rounded-full px-4 py-1.5 text-xs text-black font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse" />
                <span>Ideation to Scale</span>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Compass,
  FlaskConical,
  Factory,
  Store,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/ui";
import { duration, ease, fadeUp, stagger, viewport } from "@/lib/motion";

const stages = [
  {
    id: "ideation",
    step: "01",
    phaseTag: "Discovery Phase",
    title: "Concept Ideation",
    icon: Compass,
    items: [
      "Consumer Insight Discovery",
      "Retail Category Benchmarking",
      "Sensory Whitespace Mapping",
      "Ingredient Innovation Scouting",
    ],
  },
  {
    id: "product-development",
    step: "02",
    phaseTag: "Formulation Phase",
    title: "Product Formulation",
    icon: FlaskConical,
    items: [
      "Kitchen-Bench Prototypes",
      "Clean-Label Ingredient Balancing",
      "Texture & Mouthfeel Optimization",
      "Structured Sensory Tasting Panels",
      "Initial Stability Verification",
    ],
  },
  {
    id: "process-development",
    step: "03",
    phaseTag: "Manufacturing Phase",
    title: "Process & Scale-Up",
    icon: Factory,
    items: [
      "Industrial Plant Line Feasibility",
      "Thermal Processing & Continuous Mixing",
      "Batch Yield & Scrap Optimization",
      "Co-Packer Handover Procedures",
      "Food Safety & FSSAI Compliance",
    ],
  },
  {
    id: "market-launch",
    step: "04",
    phaseTag: "Commercialization Phase",
    title: "Market Launch",
    icon: Store,
    items: [
      "Go-To-Market Execution Plan",
      "Packaging Freshness & Barrier Selection",
      "Distributor COGS & Margin Alignment",
      "First Commercial Production Supervision",
      "Retail Rollout Support",
    ],
  },
];

export function InnovationProcess() {
  const reduce = useReducedMotion();
  const [activeStage, setActiveStage] = useState<string | null>(null);

  return (
    <section
      id="innovation-process"
      className="relative overflow-hidden bg-gradient-to-b from-[#d8dfeb] via-[#e8edf5] to-[#d6dce6] py-24 sm:py-32 lg:py-40 border-t border-[#b8c4d6]/60"
    >
      {/* Dynamic Background Effects */}
      <div className="pointer-events-none absolute inset-0 select-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-[15%] left-1/2 -translate-x-1/2 h-[650px] w-[900px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.9),transparent_70%)] blur-3xl" />
        
        {/* Subtle grid pattern */}
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
            <span className="text-[10.5px] font-bold uppercase tracking-[0.22em] text-black">
              Lifecycle Execution
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
            From First Concept to Factory Floor
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial={reduce ? "visible" : "hidden"}
            whileInView="visible"
            viewport={viewport}
            transition={{ duration: duration.base, delay: 0.2, ease }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-graphite/90 sm:text-xl font-normal font-sans"
          >
            A systematic four-phase process designed to take novel food concepts from test-bench prototypes to full retail readiness.
          </motion.p>
        </div>

        {/* Visual Pipeline Flow Ribbon */}
        <motion.div
          variants={fadeUp}
          initial={reduce ? "visible" : "hidden"}
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: duration.base, delay: 0.25, ease }}
          className="metallic-card mt-14 sm:mt-16 overflow-hidden rounded-xl p-3 sm:p-4 backdrop-blur-md"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 lg:flex-nowrap">
            {stages.map((stg, idx) => (
              <div key={stg.id} className="flex flex-1 items-center min-w-[200px] lg:min-w-0">
                <div
                  className={`flex flex-1 items-center gap-2.5 rounded-lg px-3 py-2 transition-all duration-300 ${
                    activeStage === stg.id
                      ? "bg-black text-white shadow-[0_2px_10px_rgba(0,0,0,0.15)]"
                      : "text-black/85 hover:bg-white/60"
                  }`}
                >
                  <span className={`font-mono text-xs font-bold ${activeStage === stg.id ? "text-white" : "text-[#556072]"}`}>
                    {stg.step}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] truncate">
                    {stg.title}
                  </span>
                </div>
                {idx < stages.length - 1 && (
                  <ArrowRight className="mx-2 hidden h-4 w-4 shrink-0 text-black/30 lg:block" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* 4 Process Stages Grid */}
        <motion.div
          variants={stagger}
          initial={reduce ? "visible" : "hidden"}
          whileInView="visible"
          viewport={viewport}
          className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stages.map((stage, idx) => {
            const Icon = stage.icon;
            const isActive = activeStage === stage.id;

            return (
              <motion.div
                key={stage.id}
                variants={fadeUp}
                transition={{ duration: duration.base, ease }}
                onMouseEnter={() => setActiveStage(stage.id)}
                onMouseLeave={() => setActiveStage(null)}
                className={`metallic-card group relative flex flex-col justify-between rounded-xl p-6 sm:p-7 backdrop-blur-md transition-all duration-300 ${
                  isActive
                    ? "border-[#8a9cb5] shadow-[0_15px_35px_rgba(20,25,35,0.09)] translate-y-[-4px]"
                    : ""
                }`}
              >
                {/* Glowing Top Indicator */}
                <div
                  className={`absolute inset-x-0 -top-px h-[2px] transition-all duration-500 ${
                    isActive
                      ? "w-full bg-gradient-to-r from-transparent via-black to-transparent opacity-100"
                      : "w-0 opacity-0"
                  }`}
                />

                <div>
                  {/* Stage Number & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-[#b8c2d1]/70 bg-white/70 px-2.5 py-0.5 font-mono text-[11px] font-bold text-[#5c6778] transition-colors group-hover:text-black">
                      <span>PHASE</span>
                      <span>{stage.step}</span>
                    </div>

                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-lg border transition-all duration-300 ${
                        isActive
                          ? "border-[#8a9cb5] bg-white text-black shadow-[0_2px_8px_rgba(0,0,0,0.08),inset_0_1px_0_#ffffff]"
                          : "border-[#b8c4d6] bg-white/70 text-graphite shadow-[inset_0_1px_0_#ffffff]"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Stage Title */}
                  <div className="mt-6">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#556072]">
                      {stage.phaseTag}
                    </span>
                    <h3 className="mt-1 font-sans text-xl font-bold tracking-tight text-black transition-colors duration-300">
                      {stage.title}
                    </h3>
                  </div>

                  {/* Divider */}
                  <div className="my-5 h-px w-full bg-[#b8c2d1]/50 transition-colors duration-300 group-hover:bg-[#9aa8be]/60" />

                  {/* Stage Deliverables & Milestones */}
                  <ul className="space-y-2.5" role="list">
                    {stage.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 text-xs sm:text-[13px] leading-relaxed text-graphite/90 transition-colors duration-200 group-hover:text-black font-medium"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#556072] transition-colors duration-200 group-hover:text-black" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Progress Indicator Footer */}
                <div className="mt-8 pt-4 border-t border-[#b8c2d1]/40 flex items-center justify-between text-[10.5px] font-semibold tracking-wider text-[#4d5666]">
                  <span>
                    Phase {idx + 1} of {stages.length}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-black/40 group-hover:bg-black group-hover:scale-125 transition-all" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}

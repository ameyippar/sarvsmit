"use client";

import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import {
  Compass,
  LineChart,
  FlaskConical,
  Factory,
  ShieldCheck,
  PackageCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/ui";
import { duration, ease, fadeUp, stagger, viewport } from "@/lib/motion";

const stages = [
  {
    step: "01",
    name: "Research",
    icon: Compass,
    subtitle: "Market & Consumer Intelligence",
    details:
      "Deep category analysis and consumer insight mapping to identify clean-label ingredient opportunities, benchmark competitive products, and pinpoint distinct white space.",
    deliverables: [
      "Ingredient & Scientific Sourcing",
      "Consumer Taste & Texture Demands",
      "Competitive Product Benchmarking",
      "Commercial Feasibility Audit",
    ],
  },
  {
    step: "02",
    name: "Strategy",
    icon: LineChart,
    subtitle: "Product Architecture & Target COGS",
    details:
      "Formulating differentiated product positioning, target cost-of-goods (COGS) architecture, nutritional targets, and commercial pathway roadmaps before test kitchen trials.",
    deliverables: [
      "Product Concept Blueprint",
      "COGS & Distributor Margin Modeling",
      "Flavor & Nutritional Profile Targets",
      "Commercial Feasibility Milestones",
    ],
  },
  {
    step: "03",
    name: "Formulation",
    icon: FlaskConical,
    subtitle: "Test-Bench Recipe Development",
    details:
      "Hands-on prototype formulation, clean-label ingredient synergy, texture calibration, sensory tasting panels, and initial room-temperature stability testing.",
    deliverables: [
      "Bench-Top Recipe Prototypes",
      "Sensory Calibration Rounds",
      "Clean-Label Ingredient Balancing",
      "Initial Shelf-Stability Testing",
    ],
  },
  {
    step: "04",
    name: "Scale Up",
    icon: Factory,
    subtitle: "Plant Trials & Line Optimization",
    details:
      "Translating kitchen formulations into factory-floor realities—verifying continuous industrial mixing, thermal bake curves, line speed, and batch yield efficiency.",
    deliverables: [
      "Pilot Line Commercial Batches",
      "Factory Processing Parameters",
      "Batch Yield Optimization",
      "Contract Manufacturer Qualification",
    ],
  },
  {
    step: "05",
    name: "Validation",
    icon: ShieldCheck,
    subtitle: "Shelf-Life & Food Safety QA",
    details:
      "Rigorous accelerated and real-time shelf-life testing, moisture migration barriers, microbiological food safety assurance, and FSSAI/regulatory compliance.",
    deliverables: [
      "Accelerated Shelf-Life Validation",
      "Packaging Barrier Optimization",
      "Nutritional Labeling & Compliance",
      "Quality Assurance SOPs",
    ],
  },
  {
    step: "06",
    name: "Commercialization",
    icon: PackageCheck,
    subtitle: "Factory Handover & Launch",
    details:
      "Final handover of validated master formulations, complete factory standard operating procedures (SOPs), vendor locking, and supervision of the first commercial run.",
    deliverables: [
      "Master Production SOP Manual",
      "Vendor Sourcing & Supply Locking",
      "First Commercial Production Run",
      "Full Launch Readiness Handover",
    ],
  },
];

export function InnovationFramework() {
  const reduce = useReducedMotion();
  const [selectedStage, setSelectedStage] = useState<number>(0);

  return (
    <section
      id="framework"
      className="relative overflow-hidden bg-gradient-to-b from-[#d6dce6] via-[#e6ebf2] to-[#d8dfeb] py-24 sm:py-32 lg:py-40 border-t border-[#b8c4d6]/60"
    >
      {/* Background Lighting */}
      <div className="pointer-events-none absolute inset-0 select-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-[20%] right-[15%] h-[550px] w-[550px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.9),transparent_70%)] blur-3xl" />
        <div className="absolute bottom-[10%] left-[10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(190,202,218,0.4),transparent_70%)] blur-3xl" />

        {/* Subtle grid overlay */}
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
              Structured Methodology
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
            Our Innovation Framework
          </motion.h2>
        </div>

        {/* Interactive Visual Framework Pipeline */}
        <motion.div
          variants={stagger}
          initial={reduce ? "visible" : "hidden"}
          whileInView="visible"
          viewport={viewport}
          className="mt-16 sm:mt-20 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
        >
          {stages.map((stg, idx) => {
            const Icon = stg.icon;
            const isSelected = selectedStage === idx;

            return (
              <motion.button
                key={stg.name}
                variants={fadeUp}
                transition={{ duration: duration.base, ease }}
                onClick={() => setSelectedStage(idx)}
                onMouseEnter={() => setSelectedStage(idx)}
                type="button"
                className={`metallic-card group relative flex flex-col justify-between rounded-xl p-5 sm:p-6 text-left backdrop-blur-sm transition-all duration-300 ${
                  isSelected
                    ? "border-[#7b8ea8] shadow-[0_12px_35px_rgba(20,25,35,0.1)] translate-y-[-4px]"
                    : ""
                }`}
              >
                {/* Glowing Top Indicator */}
                <div
                  className={`absolute inset-x-0 -top-px h-[2px] transition-all duration-500 ${
                    isSelected
                      ? "w-full bg-gradient-to-r from-transparent via-black to-transparent opacity-100"
                      : "w-0 opacity-0"
                  }`}
                />

                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#5c6778] transition-colors duration-300 group-hover:text-black">
                      {stg.step}
                    </span>
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-lg border transition-all duration-300 ${
                        isSelected
                          ? "border-[#8a9cb5] bg-white text-black shadow-[0_2px_8px_rgba(0,0,0,0.08),inset_0_1px_0_#ffffff]"
                          : "border-[#b8c4d6] bg-white/70 text-graphite shadow-[inset_0_1px_0_#ffffff]"
                      }`}
                    >
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                  </div>

                  {/* Stage Name */}
                  <h3 className="mt-6 font-sans text-base sm:text-lg font-bold tracking-tight text-black transition-colors duration-200">
                    {stg.name}
                  </h3>
                </div>

                {/* Subtitle / Active Marker */}
                <div className="mt-4 pt-3 border-t border-[#b8c2d1]/40 flex items-center justify-between text-[10px] uppercase tracking-[0.16em] text-[#4d5666] font-semibold transition-colors duration-300 group-hover:text-black">
                  <span>Phase {idx + 1}</span>
                  <div
                    className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                      isSelected ? "bg-black scale-125" : "bg-black/30"
                    }`}
                  />
                </div>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Dynamic Expanded Stage Detail Showcase */}
        <motion.div
          variants={fadeUp}
          initial={reduce ? "visible" : "hidden"}
          whileInView="visible"
          viewport={viewport}
          transition={{ duration: duration.base, delay: 0.2, ease }}
          className="mt-10"
        >
          <div className="relative overflow-hidden rounded-2xl border border-[#b4c0d2] bg-gradient-to-br from-white/95 via-[#ebf0f8] to-[#d8e0ec] p-7 sm:p-10 backdrop-blur-xl shadow-[0_15px_40px_rgba(20,25,35,0.08),inset_0_1px_1px_#ffffff]">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedStage}
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="grid gap-8 lg:grid-cols-12 lg:gap-12 items-start"
              >
                {/* Left Side: Overview & Description (7 cols) */}
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#5c6778]">
                      Phase 0{selectedStage + 1}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-black/40" />
                    <span className="text-xs uppercase tracking-[0.16em] text-black font-bold">
                      {stages[selectedStage].subtitle}
                    </span>
                  </div>

                  <h4 className="mt-3 font-sans text-2xl sm:text-3xl font-bold tracking-tight text-black">
                    {stages[selectedStage].name}
                  </h4>

                  <p className="mt-3 text-base leading-relaxed text-graphite/90 sm:text-lg font-normal">
                    {stages[selectedStage].details}
                  </p>
                </div>

                {/* Right Side: Key Deliverables (5 cols) */}
                <div className="lg:col-span-5 rounded-xl border border-[#b8c4d6]/80 bg-white/70 p-6 shadow-[inset_0_1px_0_#ffffff]">
                  <div className="flex items-center gap-2 mb-4">
                    <ArrowRight className="h-4 w-4 text-black" />
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-black">
                      Key Milestone Deliverables
                    </span>
                  </div>

                  <ul className="space-y-3" role="list">
                    {stages[selectedStage].deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-graphite/90 font-medium"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-black mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

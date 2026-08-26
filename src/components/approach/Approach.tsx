"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Compass,
  Users,
  FlaskConical,
  Scale,
  Store,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/ui";
import { duration, ease, fadeUp, stagger, viewport } from "@/lib/motion";

const approachSteps = [
  {
    step: "01",
    title: "Market Insights",
    icon: Compass,
    descriptor: "Category Whitespace",
  },
  {
    step: "02",
    title: "Consumer Demand",
    icon: Users,
    descriptor: "Taste & Preferences",
  },
  {
    step: "03",
    title: "Technical Science",
    icon: FlaskConical,
    descriptor: "Formulation & Chemistry",
  },
  {
    step: "04",
    title: "Unit Economics",
    icon: Scale,
    descriptor: "COGS & Feasibility",
  },
  {
    step: "05",
    title: "Commercial Launch",
    icon: Store,
    descriptor: "Factory Handover & Shelf",
  },
];

export function Approach() {
  const reduce = useReducedMotion();
  const [activeStep, setActiveStep] = useState<string | null>(null);

  return (
    <section
      id="approach"
      className="relative overflow-hidden bg-gradient-to-b from-[#d6dce6] via-[#e6ecf4] to-[#d8dfeb] py-24 sm:py-32 lg:py-40 border-t border-[#b8c4d6]/60"
    >
      {/* Background radial glow */}
      <div className="pointer-events-none absolute inset-0 select-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-[25%] left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.9),transparent_70%)] blur-3xl" />
        
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
            <span className="text-[10.5px] font-bold uppercase tracking-[0.22em] text-black">
              Integrated Methodology
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
            Our Approach
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial={reduce ? "visible" : "hidden"}
            whileInView="visible"
            viewport={viewport}
            transition={{ duration: duration.base, delay: 0.2, ease }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-black/90 sm:text-xl font-bold font-sans"
          >
            Science-Led. Consumer-Focused. Commercially Built.
          </motion.p>
        </div>

        {/* 5-Step Process Visual Flow */}
        <div className="mt-16 sm:mt-20">
          <div className="mb-6 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#4d5666]">
              Strategic Progression
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
            {approachSteps.map((stepItem, index) => {
              const Icon = stepItem.icon;
              const isActive = activeStep === stepItem.step;

              return (
                <div key={stepItem.step} className="relative flex flex-col">
                  <motion.div
                    variants={fadeUp}
                    transition={{ duration: duration.base, ease }}
                    onMouseEnter={() => setActiveStep(stepItem.step)}
                    onMouseLeave={() => setActiveStep(null)}
                    className={`metallic-card group relative flex flex-1 flex-col justify-between rounded-xl p-6 backdrop-blur-sm transition-all duration-300 ${
                      isActive
                        ? "border-[#8a9cb5] shadow-[0_12px_35px_rgba(20,25,35,0.09)] translate-y-[-3px]"
                        : ""
                    }`}
                  >
                    {/* Top glow line */}
                    <div
                      className={`absolute inset-x-0 -top-px h-[2px] transition-all duration-500 ${
                        isActive
                          ? "w-full bg-gradient-to-r from-transparent via-black to-transparent opacity-100"
                          : "w-0 opacity-0"
                      }`}
                    />

                    <div>
                      {/* Step Number and Icon */}
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-bold tracking-widest text-[#5c6778] transition-colors duration-300 group-hover:text-black">
                          {stepItem.step}
                        </span>
                        <div
                          className={`flex h-9 w-9 items-center justify-center rounded-lg border transition-all duration-300 ${
                            isActive
                              ? "border-[#8a9cb5] bg-white text-black shadow-[0_2px_8px_rgba(0,0,0,0.08),inset_0_1px_0_#ffffff]"
                              : "border-[#b8c4d6] bg-white/70 text-graphite shadow-[inset_0_1px_0_#ffffff]"
                          }`}
                        >
                          <Icon className="h-4.5 w-4.5" />
                        </div>
                      </div>

                      {/* Step Title */}
                      <h3 className="mt-6 font-sans text-lg font-bold tracking-tight text-black transition-colors duration-200">
                        {stepItem.title}
                      </h3>
                    </div>

                    {/* Step Subtext & Flow Indicator */}
                    <div className="mt-6 pt-3 border-t border-[#b8c2d1]/40 flex items-center justify-between text-[10.5px] uppercase tracking-[0.18em] text-[#4d5666] font-semibold transition-colors duration-300 group-hover:text-black">
                      <span>{stepItem.descriptor}</span>
                      {index < approachSteps.length - 1 && (
                        <ArrowRight className="h-3.5 w-3.5 text-black/30 hidden lg:block" />
                      )}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

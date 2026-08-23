"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui";
import { duration, ease, fadeUp, stagger, viewport } from "@/lib/motion";

const capabilitiesList = [
  { name: "Scale-up workflows", category: "Kinetics" },
  { name: "Yield optimization", category: "Efficiency" },
  { name: "Production efficiency", category: "Plant Ops" },
  { name: "Packaging optimization", category: "Barrier Sci" },
  { name: "Supply chain alignment", category: "Sourcing" },
  { name: "Bench formulation", category: "Chemistry" },
  { name: "Ingredient systems", category: "Functional" },
  { name: "Texture optimization", category: "Rheology" },
  { name: "Stability testing", category: "Shelf-Life" },
];

export function Capabilities() {
  const reduce = useReducedMotion();

  return (
    <section
      id="capabilities"
      className="relative overflow-hidden bg-gradient-to-b from-[#d6dce6] via-[#e6ebf2] to-[#d8dfeb] py-24 sm:py-32 lg:py-36 border-t border-[#b8c4d6]/60"
    >
      {/* Background Lighting & Fading Lab Texture */}
      <div className="pointer-events-none absolute inset-0 select-none overflow-hidden" aria-hidden="true">
        {/* Fading High-Tech Formulation Science Lab Background */}
        <div className="absolute inset-0 opacity-[0.10] mix-blend-multiply">
          <Image
            src="/images/capabilities-lab.jpg"
            alt="Food Formulation Science Laboratory Background"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority={false}
          />
        </div>

        <div className="absolute top-[20%] left-[10%] h-[550px] w-[550px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.9),transparent_70%)] blur-3xl" />
        <div className="absolute bottom-[10%] right-[10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(190,202,218,0.4),transparent_70%)] blur-3xl" />

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
        {/* Editorial Section Header */}
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
              {"//"} 05 · R&amp;D &amp; INDUSTRIAL CAPABILITIES
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-[#8a9bb2]/60 to-transparent" />
            <span className="text-[10.5px] font-mono tracking-widest text-[#556072] uppercase hidden sm:inline">
              PILOT TESTING · CO-PACKER INTEGRATION · EPS &amp; CCM
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
            R&D + Manufacturing Capabilities
          </motion.h2>
        </div>

        {/* Main Grid: 9 Capabilities (Left 8 cols) + EPS / CCM Monoliths (Right 4 cols) */}
        <div className="mt-14 sm:mt-18 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* 9 Capabilities Grid */}
          <div className="lg:col-span-8">
            <div className="mb-6 flex items-center justify-between">
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-[#4d5666]">
                Core Competencies (01 — 09)
              </span>
              <div className="h-px flex-1 bg-[#a8b6cb]/50 ml-6" />
            </div>

            <motion.div
              variants={stagger}
              initial={reduce ? "visible" : "hidden"}
              whileInView="visible"
              viewport={viewport}
              className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 md:grid-cols-3"
            >
              {capabilitiesList.map((cap, idx) => {
                return (
                  <motion.div
                    key={cap.name}
                    variants={fadeUp}
                    transition={{ duration: duration.base, ease }}
                    className="metallic-card group relative flex flex-col justify-between rounded-xl p-5 backdrop-blur-sm transition-all duration-300 hover:border-[#8e9eb5] hover:shadow-[0_14px_32px_rgba(20,25,35,0.08)] hover:translate-y-[-2px]"
                  >
                    <div className="flex items-center justify-between border-b border-[#b8c2d1]/40 pb-2.5">
                      <span className="font-mono text-[10.5px] font-bold text-black">
                        0{idx + 1}
                      </span>
                      <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-[#5c6778]">
                        {cap.category}
                      </span>
                    </div>

                    <div className="mt-5 flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-black" />
                      <h3 className="font-sans text-sm font-semibold leading-snug text-black transition-colors">
                        {cap.name}
                      </h3>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* EPS & CCM Dedicated Displays */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6">
            <div>
              <div className="mb-6 flex items-center justify-between">
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-[#4d5666]">
                  Platforms &amp; Systems
                </span>
                <div className="h-px flex-1 bg-[#a8b6cb]/50 ml-6" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {/* EPS Card */}
                <motion.div
                  variants={fadeUp}
                  initial={reduce ? "visible" : "hidden"}
                  whileInView="visible"
                  viewport={viewport}
                  transition={{ duration: duration.base, delay: 0.15, ease }}
                  className="group relative overflow-hidden rounded-2xl border border-[#b4c0d2] bg-gradient-to-br from-white/95 via-[#ebf0f8] to-[#d8e0ec] p-7 backdrop-blur-xl shadow-[0_10px_35px_rgba(20,25,35,0.08),inset_0_1px_1px_#ffffff] transition-all duration-300 hover:border-[#7b8ea8] hover:shadow-[0_15px_45px_rgba(20,25,35,0.12)]"
                >
                  <div className="absolute inset-x-0 -top-px h-[2px] bg-gradient-to-r from-transparent via-black to-transparent opacity-80" />

                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#4d5666]">
                      Proprietary Platform
                    </span>
                    <span className="h-2 w-2 rounded-full bg-black/40" />
                  </div>

                  <div className="mt-5 flex items-baseline gap-3">
                    <h3 className="font-serif text-5xl font-bold tracking-tight text-black">
                      EPS
                    </h3>
                  </div>

                  <p className="mt-3.5 text-xs text-graphite/90 leading-relaxed font-medium">
                    Dedicated platform architecture deployed across product innovation and manufacturing scale-up streams.
                  </p>
                </motion.div>

                {/* CCM Card */}
                <motion.div
                  variants={fadeUp}
                  initial={reduce ? "visible" : "hidden"}
                  whileInView="visible"
                  viewport={viewport}
                  transition={{ duration: duration.base, delay: 0.25, ease }}
                  className="group relative overflow-hidden rounded-2xl border border-[#b4c0d2] bg-gradient-to-br from-white/95 via-[#ebf0f8] to-[#d8e0ec] p-7 backdrop-blur-xl shadow-[0_10px_35px_rgba(20,25,35,0.08),inset_0_1px_1px_#ffffff] transition-all duration-300 hover:border-[#7b8ea8] hover:shadow-[0_15px_45px_rgba(20,25,35,0.12)]"
                >
                  <div className="absolute inset-x-0 -top-px h-[2px] bg-gradient-to-r from-transparent via-black to-transparent opacity-80" />

                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#4d5666]">
                      Proprietary Platform
                    </span>
                    <span className="h-2 w-2 rounded-full bg-black/40" />
                  </div>

                  <div className="mt-5 flex items-baseline gap-3">
                    <h3 className="font-serif text-5xl font-bold tracking-tight text-black">
                      CCM
                    </h3>
                  </div>

                  <p className="mt-3.5 text-xs text-graphite/90 leading-relaxed font-medium">
                    Dedicated commercialization methodology powering factory integration, pilot validation, and supply chain alignment.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

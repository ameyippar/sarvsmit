"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui";
import { duration, ease, fadeUp, stagger, viewport } from "@/lib/motion";

const failurePoints = [
  {
    number: "01",
    title: "Unclear Market Differentiation",
    category: "Product Positioning",
    severity: "High Risk",
    impact: "Blends into crowded supermarket shelves without a distinct taste, texture profile, or clear reason for consumers to switch.",
  },
  {
    number: "02",
    title: "Formulations That Fail at Scale",
    category: "R&D & Plant Trials",
    severity: "Critical",
    impact: "A recipe perfected in small bowls separates, burns, or stiffens when subjected to industrial mixers, thermal cookers, and continuous extruders.",
  },
  {
    number: "03",
    title: "Factory Floor Scrap & Downtime",
    category: "Plant Operations",
    severity: "Operational",
    impact: "Batter sticking to conveyors, nozzle clogging, and uneven bake cycles trigger slow line speeds, high batch scrap rates, and co-packer friction.",
  },
  {
    number: "04",
    title: "Shelf-Life & Texture Breakdown",
    category: "Quality & Freshness",
    severity: "Critical",
    impact: "Products lose their crunch, dry out, or develop off-flavors after just a few weeks in retail distribution warehouses without clean-label stabilizers.",
  },
  {
    number: "05",
    title: "Rushed Commercial Readiness",
    category: "Go-To-Market",
    severity: "Strategic",
    impact: "Vague co-packer handover SOPs, missing nutritional or regulatory clearances, and missed retail distribution onboarding windows.",
  },
  {
    number: "06",
    title: "Eroded Unit Margins (COGS)",
    category: "Unit Economics",
    severity: "Financial",
    impact: "Overly expensive specialty ingredients or inefficient pack sizes eliminate distributor and retail margins, making sustainable growth impossible.",
  },
  {
    number: "07",
    title: "Raw Material Batch Inconsistency",
    category: "Supply Chain",
    severity: "Quality Control",
    impact: "Natural seasonal variations in agricultural ingredients alter final texture, snap, aroma, and consumer taste from one production batch to the next.",
  },
];

const consequences = [
  {
    number: "01",
    title: "Delayed Retail Launches",
    badge: "Timeline Risk",
    description: "Extended formulation iterations cause brands to miss key seasonal sales and supermarket onboarding windows.",
  },
  {
    number: "02",
    title: "Lost Repeat Customers",
    badge: "Customer Retention",
    description: "First-time buyers don't return when the packaged product delivered on shelves doesn't match the promise.",
  },
  {
    number: "03",
    title: "High Production Waste",
    badge: "Plant Waste",
    description: "Uncalibrated factory line speeds and recipe trial errors trigger discarded batches and wasted working capital.",
  },
  {
    number: "04",
    title: "Shrinking Profit Margins",
    badge: "Financial Strain",
    description: "Unmanaged ingredient and co-packer processing costs squeeze gross margins before reaching sustainable scale.",
  },
];

export function Problem() {
  const reduce = useReducedMotion();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="problem"
      className="relative overflow-hidden bg-gradient-to-b from-[#d6dce6] via-[#e5ebf3] to-[#d8dfeb] py-24 sm:py-32 lg:py-36 border-t border-[#b8c4d6]/60"
    >
      {/* Background Lighting, Manufacturing Imagery & Metallic Texture */}
      <div className="pointer-events-none absolute inset-0 select-none overflow-hidden" aria-hidden="true">
        {/* Fading Industrial Manufacturing Plant Background */}
        <div className="absolute inset-0 opacity-[0.10] mix-blend-multiply">
          <Image
            src="/images/manufacturing-line.jpg"
            alt="FMCG Manufacturing Line Background"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority={false}
          />
        </div>

        <div className="absolute top-[10%] right-[-5%] h-[650px] w-[650px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.95),transparent_70%)] blur-3xl" />
        <div className="absolute bottom-[10%] -left-[10%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.06),transparent_70%)] blur-3xl" />

        {/* Diagonal Tech Hatching Lines */}
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
        {/* ========================================================= */}
        {/* Editorial Diagnostic Header & Benchmark Monolith */}
        {/* ========================================================= */}
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 items-end">
          <div className="lg:col-span-8">
            <motion.div
              variants={fadeUp}
              initial={reduce ? "visible" : "hidden"}
              whileInView="visible"
              viewport={viewport}
              transition={{ duration: duration.base, ease }}
              className="flex items-center gap-3 border-b border-red-300/60 pb-3"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50/90 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-red-700">
                The Scaling Reality
              </span>
              <span className="h-px flex-1 bg-gradient-to-r from-red-300/40 to-transparent" />
              <span className="text-xs font-semibold tracking-wider text-[#556072] hidden sm:inline">
                Where FMCG Concepts Face Plant-Floor Friction
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              initial={reduce ? "visible" : "hidden"}
              whileInView="visible"
              viewport={viewport}
              transition={{ duration: duration.base, delay: 0.1, ease }}
              className="mt-6 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.08] tracking-tight text-black"
            >
              Most Food Products Fail Before They Scale
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial={reduce ? "visible" : "hidden"}
              whileInView="visible"
              viewport={viewport}
              transition={{ duration: duration.base, delay: 0.15, ease }}
              className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-graphite/90 font-normal font-sans"
            >
              Taking a recipe from test-kitchen benchtop to commercial factory production is where most food brands hit unexpected friction. Without targeted formulation science and plant-floor engineering, brands encounter 7 common scale barriers.
            </motion.p>
          </div>

          {/* Diagnostic Key Metrics Monolith (Right 4 cols) */}
          <motion.div
            variants={fadeUp}
            initial={reduce ? "visible" : "hidden"}
            whileInView="visible"
            viewport={viewport}
            transition={{ duration: duration.base, delay: 0.2, ease }}
            className="lg:col-span-4"
          >
            <div className="rounded-2xl border border-[#b4c0d2] bg-gradient-to-br from-white/95 via-[#ebf0f8] to-[#d8e0ec] p-6 backdrop-blur-xl shadow-[0_10px_30px_rgba(20,25,35,0.06),inset_0_1px_1px_#ffffff]">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#556072]">
                  Industry Reality
                </span>
                <span className="h-2 w-2 rounded-full bg-red-600/90" />
              </div>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="font-sans text-4xl sm:text-5xl font-bold tracking-tight text-black">
                  80–85%
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-red-700">
                  Pre-Scale Failure Rate
                </span>
              </div>
              <p className="mt-2 text-xs text-[#556072] leading-relaxed font-medium">
                Products stumble during factory trials due to unexpected texture shifts, short shelf life, or unviable ingredient costs.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ========================================================= */}
        {/* 7 Critical Friction Points (Structured & Balanced Grid) */}
        {/* ========================================================= */}
        <div className="mt-14 sm:mt-18">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-red-700">01 — 07</span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#4d5666]">
                Common Scale Barriers
              </span>
            </div>
            <div className="hidden h-px flex-1 bg-[#a8b6cb]/50 ml-6 sm:block" />
          </div>

          <motion.div
            variants={stagger}
            initial={reduce ? "visible" : "hidden"}
            whileInView="visible"
            viewport={viewport}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {failurePoints.map((item, index) => {
              const isHovered = hoveredIndex === index;

              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  transition={{ duration: duration.base, ease }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`metallic-card group relative flex flex-col justify-between rounded-xl p-6 backdrop-blur-sm transition-all duration-300 ${
                    index === 6 ? "sm:col-span-2 lg:col-span-3 xl:col-span-1" : ""
                  } ${
                    isHovered
                      ? "border-red-400/80 shadow-[0_15px_35px_rgba(20,25,35,0.1)] translate-y-[-3px]"
                      : ""
                  }`}
                >
                  {/* Glowing Top Indicator */}
                  <div
                    className={`absolute inset-x-0 -top-px h-[2px] transition-all duration-500 ${
                      isHovered
                        ? "w-full bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-100"
                        : "w-0 opacity-0"
                    }`}
                  />

                  <div>
                    {/* Top Row: Index + Risk Tag */}
                    <div className="flex items-center justify-between border-b border-[#b8c2d1]/40 pb-3">
                      <span className="font-mono text-xs font-bold text-black">
                        {item.number}
                      </span>
                      <span className="rounded-full border border-red-300/70 bg-red-50/80 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-red-700">
                        {item.severity}
                      </span>
                    </div>

                    {/* Category & Title */}
                    <div className="mt-5">
                      <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#556072]">
                        {item.category}
                      </span>
                      <h3 className="mt-1 font-sans text-lg sm:text-[19px] font-bold leading-snug text-black transition-colors duration-200">
                        {item.title}
                      </h3>
                    </div>

                    {/* Impact Explanation */}
                    <p className="mt-3 text-xs leading-relaxed text-[#495362] font-medium">
                      {item.impact}
                    </p>
                  </div>

                  {/* Card Bottom Progress Accent */}
                  <div className="mt-5 pt-3 border-t border-[#b8c2d1]/40 flex items-center justify-between text-[10.5px] uppercase tracking-wider text-[#5c6778] font-semibold">
                    <span>Friction Point {item.number}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-red-600/40 group-hover:bg-red-600 transition-colors" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* ========================================================= */}
        {/* Downstream Consequences Dashboard & Solution Bridge */}
        {/* ========================================================= */}
        <div className="mt-16 sm:mt-24">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="h-2 w-2 rounded-full bg-red-600/90" />
              <span className="text-xs font-bold uppercase tracking-wider text-black">
                The Downstream Consequences of Unplanned Scale
              </span>
            </div>
            <div className="hidden h-px flex-1 bg-[#a8b6cb]/50 ml-6 sm:block" />
          </div>

          <motion.div
            variants={stagger}
            initial={reduce ? "visible" : "hidden"}
            whileInView="visible"
            viewport={viewport}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {consequences.map((item) => {
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  transition={{ duration: duration.base, ease }}
                  className="metallic-card group relative overflow-hidden rounded-xl border-red-300/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-red-400/90 hover:shadow-[0_15px_35px_rgba(20,25,35,0.09)] hover:translate-y-[-3px]"
                >
                  <div className="flex items-center justify-between border-b border-red-200/60 pb-3">
                    <span className="font-mono text-xs font-bold text-red-700">
                      {item.number}
                    </span>
                    <span className="rounded-full border border-red-300/80 bg-red-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-red-700">
                      {item.badge}
                    </span>
                  </div>

                  <div className="mt-5">
                    <h4 className="font-sans text-lg sm:text-xl font-bold tracking-tight text-black">
                      {item.title}
                    </h4>
                    <p className="mt-2.5 text-xs text-[#495362] leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Solution Bridge Monolith Banner */}
          <motion.div
            variants={fadeUp}
            initial={reduce ? "visible" : "hidden"}
            whileInView="visible"
            viewport={viewport}
            transition={{ duration: duration.base, delay: 0.25, ease }}
            className="mt-10 overflow-hidden rounded-2xl border border-[#b4c0d2] bg-gradient-to-r from-white/95 via-[#ebf0f8] to-[#d8e0ec] p-6 sm:p-8 backdrop-blur-xl shadow-[0_10px_35px_rgba(20,25,35,0.06),inset_0_1px_1px_#ffffff]"
          >
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black text-white shadow-[0_2px_10px_rgba(0,0,0,0.18)]">
                  <ShieldCheck strokeWidth={1.5} className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10.5px] font-semibold uppercase tracking-wider text-[#556072]">
                    De-Risking Commercial Scale
                  </span>
                  <p className="mt-0.5 font-sans text-lg sm:text-xl font-bold text-black">
                    Engineered through science. Validated across 6 commercial viability gates.
                  </p>
                </div>
              </div>

              <a
                href="#services"
                onClick={(e) => handleSmoothScroll(e, "services")}
                className="inline-flex items-center justify-center gap-2 self-start md:self-center rounded-lg bg-black px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white shadow-md transition-all hover:bg-black/80 hover:translate-x-0.5 shrink-0"
              >
                <span>Explore Solutions</span>
                <ArrowRight strokeWidth={1.5} className="h-3.5 w-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Cookie,
  Zap,
  Sparkles,
  ArrowUpRight,
  Layers,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { Container } from "@/components/ui";
import { duration, ease, fadeUp, stagger, viewport } from "@/lib/motion";
import { CulturedCookieLogo } from "@/components/brand/CulturedCookieLogo";

const caseStudies = [
  {
    number: "01",
    tag: "Flagship Venture · Bakery & Texture",
    title: "Cultured Cookie Co.",
    subtitle: "New York-Style Sourdough Cookie Platform",
    url: "https://www.culturedcookieco.com/",
    isChildCompany: true,
    description:
      "Incubated, formulated, and scaled as Sarvsmit's flagship venture. Engineered an ambient-stable 72-hour sourdough inclusion matrix delivering chunky NY-style texture, shelf-life moisture retention, and turnkey commercial manufacturing.",
    highlights: [
      "72-Hour Sourdough Culture Matrix",
      "Moisture-migration barrier technology",
      "Zero-to-Scale Turnkey Commercialization",
    ],
    icon: Cookie,
  },
  {
    number: "02",
    tag: "Active Nutrition & Beverages",
    title: "Functional Coffee Shot Platform",
    subtitle: "Clean-Label Nootropic Liquid System",
    description:
      "Formulated a clean-label functional liquid shot with active nootropics, balanced bitterness masking, and thermal processing stability.",
    highlights: [
      "Bitterness-masking architecture",
      "Thermal processing stability",
      "Accelerated shelf-life validation",
    ],
    icon: Zap,
  },
  {
    number: "03",
    tag: "Indulgence & Healthy Formats",
    title: "Better-for-You Product Architecture",
    subtitle: "Sugar Reduction & Rheology System",
    description:
      "Re-engineered indulgence categories by replacing refined sweeteners and unhealthy fats while preserving mouthfeel, snap, and consumer sensory delight.",
    highlights: [
      "Clean-label fat replacers",
      "Natural glycemic sweeteners",
      "Sensory panel calibration",
    ],
    icon: Sparkles,
  },
];

export function CaseStudies() {
  const reduce = useReducedMotion();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      id="case-studies"
      className="relative overflow-hidden bg-gradient-to-b from-[#d8dfeb] via-[#eaeff7] to-[#d6dce6] py-24 sm:py-32 lg:py-40 border-t border-[#b8c4d6]/60"
    >
      {/* Background Lighting */}
      <div className="pointer-events-none absolute inset-0 select-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-[20%] right-[10%] h-[550px] w-[550px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.9),transparent_70%)] blur-3xl" />
        <div className="absolute bottom-[10%] left-[10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(190,202,218,0.4),transparent_70%)] blur-3xl" />

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
            <Layers className="h-3 w-3 text-metal" />
            <span className="text-[10.5px] font-bold uppercase tracking-[0.28em] text-black">
              Platform Innovations & Ventures
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
            Case Studies
          </motion.h2>
        </div>

        {/* 3 Premium Cards Grid */}
        <motion.div
          variants={stagger}
          initial={reduce ? "visible" : "hidden"}
          whileInView="visible"
          viewport={viewport}
          className="mt-16 sm:mt-20 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {caseStudies.map((study, idx) => {
            const Icon = study.icon;
            const isHovered = hoveredIdx === idx;

            return (
              <motion.div
                key={study.title}
                variants={fadeUp}
                transition={{ duration: duration.base, ease }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`metallic-card group relative flex flex-col justify-between rounded-xl p-7 sm:p-8 backdrop-blur-md transition-all duration-300 ${
                  study.isChildCompany ? "border-[#9bb0cc] shadow-[0_15px_40px_rgba(20,25,35,0.08)]" : ""
                } ${
                  isHovered
                    ? "border-[#8a9cb5] shadow-[0_15px_40px_rgba(20,25,35,0.1)] translate-y-[-4px]"
                    : ""
                }`}
              >
                {/* Glowing Top Indicator Line */}
                <div
                  className={`absolute inset-x-0 -top-px h-[2px] transition-all duration-500 ${
                    isHovered
                      ? "w-full bg-gradient-to-r from-transparent via-black to-transparent opacity-100"
                      : "w-0 opacity-0"
                  }`}
                />

                <div>
                  {/* Header: Number & Icon / Logo */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold tracking-widest text-[#5c6778] transition-colors duration-300 group-hover:text-black">
                      {study.number}
                    </span>
                    <div
                      className={`flex h-10 min-w-10 px-2 items-center justify-center rounded-lg border transition-all duration-300 ${
                        isHovered
                          ? "border-[#8a9cb5] bg-white text-black shadow-[0_2px_8px_rgba(0,0,0,0.08),inset_0_1px_0_#ffffff]"
                          : "border-[#b8c4d6] bg-white/70 text-graphite shadow-[inset_0_1px_0_#ffffff]"
                      }`}
                    >
                      {study.isChildCompany ? (
                        <CulturedCookieLogo className="h-5 w-auto text-black" />
                      ) : (
                        <Icon className="h-5 w-5" />
                      )}
                    </div>
                  </div>

                  {/* Tag & Title */}
                  <div className="mt-8">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4d5666]">
                        {study.tag}
                      </span>
                    </div>

                    {study.isChildCompany ? (
                      <div className="mt-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-serif text-2xl font-bold tracking-tight text-black transition-colors duration-300">
                            {study.title}
                          </h3>
                          <a
                            href={study.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 rounded-full border border-black/15 bg-white/80 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-black hover:bg-black hover:text-white transition-colors"
                          >
                            <span>Live Brand</span>
                            <ExternalLink className="h-2.5 w-2.5" />
                          </a>
                        </div>
                        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#5c6778] mt-0.5">
                          {study.subtitle}
                        </p>
                      </div>
                    ) : (
                      <div className="mt-2">
                        <h3 className="font-serif text-2xl font-bold tracking-tight text-black transition-colors duration-300">
                          {study.title}
                        </h3>
                        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#5c6778] mt-0.5">
                          {study.subtitle}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Divider */}
                  <div className="my-6 h-px w-full bg-[#b8c2d1]/50 transition-colors duration-300 group-hover:bg-[#9aa8be]/60" />

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-graphite/90 font-medium">
                    {study.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="mt-6 space-y-2">
                    {study.highlights.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-xs text-graphite/90 font-medium"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-black" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                {study.isChildCompany ? (
                  <a
                    href={study.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 pt-4 border-t border-[#b8c2d1]/40 flex items-center justify-between text-[11px] font-bold tracking-wider text-black transition-colors hover:text-black/80"
                  >
                    <span>Visit culturedcookieco.com</span>
                    <ExternalLink className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ) : (
                  <div className="mt-8 pt-4 border-t border-[#b8c2d1]/40 flex items-center justify-between text-[11px] font-semibold tracking-wider text-[#4d5666] transition-colors duration-300 group-hover:text-black">
                    <span>Platform System</span>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-black" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}

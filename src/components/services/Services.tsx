"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Sparkles,
  FlaskConical,
  Factory,
  Store,
  Check,
  ArrowUpRight,
  Layers,
} from "lucide-react";
import { Container } from "@/components/ui";
import { duration, ease, fadeUp, stagger, viewport } from "@/lib/motion";

const services = [
  {
    id: "product-innovation",
    number: "01",
    title: "Product Innovation",
    icon: Sparkles,
    tagline: "Market-Defining Concepts",
    items: [
      "Concept ideation & whitespace",
      "Competitive product positioning",
      "Sensory & flavor architecture",
      "Clean-label functional innovation",
    ],
  },
  {
    id: "technical-rd",
    number: "02",
    title: "Technical R&D",
    icon: FlaskConical,
    tagline: "Formulation Science & Texture",
    items: [
      "Bench-top recipe formulation",
      "Texture & mouthfeel engineering",
      "Shelf-life & stability testing",
      "Functional ingredient chemistry",
    ],
  },
  {
    id: "manufacturing-scale-up",
    number: "03",
    title: "Manufacturing & Scale-Up",
    icon: Factory,
    tagline: "Plant-Floor Integration",
    items: [
      "Continuous process optimization",
      "Factory pilot run execution",
      "Line speed & yield optimization",
      "Packaging barrier systems",
      "Raw ingredient vendor locking",
    ],
  },
  {
    id: "commercialization",
    number: "04",
    title: "Commercialization",
    icon: Store,
    tagline: "Market Execution",
    items: [
      "Full launch readiness audit",
      "Packaging & FSSAI regulatory compliance",
      "First production run supervision",
      "Turnkey manufacturing handover",
    ],
  },
];

export function Services() {
  const reduce = useReducedMotion();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-b from-[#dce2ec] via-[#eaeff7] to-[#d8dfeb] py-24 sm:py-32 lg:py-40 border-t border-[#b8c4d6]/60"
    >
      {/* Background Lighting Effects */}
      <div className="pointer-events-none absolute inset-0 select-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-[20%] right-[10%] h-[550px] w-[550px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.9),transparent_70%)] blur-3xl" />
        <div className="absolute bottom-[10%] left-[5%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(190,202,218,0.4),transparent_70%)] blur-3xl" />
        
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
        {/* Header Lockup */}
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
              Consultancy Capabilities
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
            Core Consultancy Services
          </motion.h2>
        </div>

        {/* 4 Interactive Service Cards Grid */}
        <motion.div
          variants={stagger}
          initial={reduce ? "visible" : "hidden"}
          whileInView="visible"
          viewport={viewport}
          className="mt-16 sm:mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => {
            const Icon = service.icon;
            const isHovered = hoveredId === service.id;

            return (
              <motion.div
                key={service.id}
                variants={fadeUp}
                transition={{ duration: duration.base, ease }}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`metallic-card group relative flex flex-col justify-between rounded-xl p-7 sm:p-8 backdrop-blur-md transition-all duration-300 ${
                  isHovered
                    ? "border-[#8a9cb5] shadow-[0_15px_40px_rgba(20,25,35,0.1)] translate-y-[-4px]"
                    : ""
                }`}
              >
                {/* Top Glowing Indicator Line */}
                <div
                  className={`absolute inset-x-0 -top-px h-[2px] transition-all duration-500 ${
                    isHovered
                      ? "w-full bg-gradient-to-r from-transparent via-black to-transparent opacity-100"
                      : "w-0 opacity-0"
                  }`}
                />

                <div>
                  {/* Card Header: Step number & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold tracking-widest text-[#5c6778] transition-colors duration-300 group-hover:text-black">
                      {service.number}
                    </span>
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-lg border transition-all duration-300 ${
                        isHovered
                          ? "border-[#8a9cb5] bg-white text-black shadow-[0_2px_10px_rgba(0,0,0,0.08),inset_0_1px_0_#ffffff]"
                          : "border-[#b8c4d6] bg-white/70 text-graphite shadow-[inset_0_1px_0_#ffffff]"
                      }`}
                    >
                      <Icon strokeWidth={1.5} className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div className="mt-6">
                    <span className="text-[10.5px] font-semibold uppercase tracking-wider text-[#4d5666]">
                      {service.tagline}
                    </span>
                    <h3 className="mt-1 font-sans text-xl font-bold tracking-tight text-black transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>

                  {/* Divider */}
                  <div className="my-6 h-px w-full bg-[#b8c2d1]/50 transition-colors duration-300 group-hover:bg-[#9aa8be]/60" />

                  {/* Service Items List */}
                  <ul className="space-y-3" role="list">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-graphite/90 transition-colors duration-200 group-hover:text-black font-medium"
                      >
                        <div className="mt-1 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border border-[#a8b6cb] bg-white/80 text-black shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
                          <Check strokeWidth={2} className="h-2.5 w-2.5" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Card Footer */}
                <div className="mt-8 pt-4 border-t border-[#b8c2d1]/40 flex items-center justify-between text-[11px] font-semibold tracking-wider text-[#4d5666] transition-colors duration-300 group-hover:text-black">
                  <span>Integrated Offering</span>
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

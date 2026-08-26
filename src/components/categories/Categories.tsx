"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Cookie,
  CupSoda,
  Candy,
  Zap,
  Factory,
  Flame,
  Leaf,
  Snowflake,
  Sparkles,
  FlaskConical,
  Layers,
  ArrowUpRight,
} from "lucide-react";
import { Container } from "@/components/ui";
import { duration, ease, fadeUp, stagger, viewport } from "@/lib/motion";

const categories = [
  {
    number: "01",
    name: "Bakery",
    icon: Cookie,
    tag: "Grains & Bakes",
  },
  {
    number: "02",
    name: "Beverages",
    icon: CupSoda,
    tag: "Liquid Formulations",
  },
  {
    number: "03",
    name: "Confections",
    icon: Candy,
    tag: "Sweet Formats",
  },
  {
    number: "04",
    name: "Functional Foods",
    icon: Zap,
    tag: "Active Nutrition",
  },
  {
    number: "05",
    name: "Manufacturing",
    icon: Factory,
    tag: "Scale & Processing",
  },
  {
    number: "06",
    name: "Sauces & Seasonings",
    icon: Flame,
    tag: "Flavor Systems",
  },
  {
    number: "07",
    name: "Plant-Based",
    icon: Leaf,
    tag: "Alternative Proteins",
  },
  {
    number: "08",
    name: "Frozen & Cold",
    icon: Snowflake,
    tag: "Cold Chain Formats",
  },
  {
    number: "09",
    name: "Indulgence",
    icon: Sparkles,
    tag: "Premium Treats",
  },
  {
    number: "10",
    name: "Flavors & Aromatics",
    icon: FlaskConical,
    tag: "Sensory Chemistry",
  },
];

export function Categories() {
  const reduce = useReducedMotion();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="categories"
      className="relative overflow-hidden bg-gradient-to-b from-[#d8dfeb] via-[#e8edf5] to-[#d6dce6] py-24 sm:py-32 lg:py-40 border-t border-[#b8c4d6]/60"
    >
      {/* Ambient background lighting */}
      <div className="pointer-events-none absolute inset-0 select-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-[20%] left-[10%] h-[550px] w-[550px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.9),transparent_70%)] blur-3xl" />
        <div className="absolute bottom-[20%] right-[10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(190,202,218,0.4),transparent_70%)] blur-3xl" />
        
        {/* Subtle grid */}
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
              Sector Expertise
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
            Categories We Specialize In
          </motion.h2>
        </div>

        {/* 10 Categories Responsive Grid */}
        <motion.div
          variants={stagger}
          initial={reduce ? "visible" : "hidden"}
          whileInView="visible"
          viewport={viewport}
          className="mt-14 sm:mt-18 lg:mt-20 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-5"
        >
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            const isHovered = hoveredIndex === idx;

            return (
              <motion.div
                key={cat.name}
                variants={fadeUp}
                transition={{ duration: duration.base, ease }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`metallic-card group relative flex flex-col justify-between rounded-xl p-4 sm:p-5 md:p-6 backdrop-blur-sm transition-all duration-300 ${
                  isHovered
                    ? "border-[#8a9cb5] shadow-[0_12px_35px_rgba(20,25,35,0.09)] translate-y-[-3px]"
                    : ""
                }`}
              >
                {/* Top glow line */}
                <div
                  className={`absolute inset-x-0 -top-px h-[2px] transition-all duration-500 ${
                    isHovered
                      ? "w-full bg-gradient-to-r from-transparent via-black to-transparent opacity-100"
                      : "w-0 opacity-0"
                  }`}
                />

                {/* Top Row: Index and Icon */}
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#5c6778] transition-colors duration-300 group-hover:text-black">
                      {cat.number}
                    </span>
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-lg border transition-all duration-300 ${
                        isHovered
                          ? "border-[#8a9cb5] bg-white text-black shadow-[0_2px_8px_rgba(0,0,0,0.08),inset_0_1px_0_#ffffff]"
                          : "border-[#b8c4d6] bg-white/70 text-graphite shadow-[inset_0_1px_0_#ffffff]"
                      }`}
                    >
                      <Icon strokeWidth={1.5} className="h-4.5 w-4.5" />
                    </div>
                  </div>

                  {/* Category Name */}
                  <h3 className="mt-6 font-sans text-base sm:text-lg font-bold tracking-tight text-black transition-colors duration-200">
                    {cat.name}
                  </h3>
                </div>

                {/* Subtag / Arrow */}
                <div className="mt-4 pt-3 border-t border-[#b8c2d1]/40 flex items-center justify-between text-[10.5px] font-semibold text-[#4d5666] transition-colors duration-300 group-hover:text-black">
                  <span>{cat.tag}</span>
                  <ArrowUpRight strokeWidth={1.5} className="h-3 w-3 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-black" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}

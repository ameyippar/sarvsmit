"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { Button, Container } from "@/components/ui";
import { LogoMark } from "@/components/brand/LogoMark";
import { site } from "@/lib/site";
import { duration, ease } from "@/lib/motion";

export function Hero() {
  const reduce = useReducedMotion();

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.hash = `#${targetId}`;
    }
  };

  const lifecycleStages = [
    { label: "Concept", step: "01" },
    { label: "Development", step: "02" },
    { label: "Manufacturing", step: "03" },
    { label: "Scale", step: "04" },
  ];

  const pillars = [
    "Innovation",
    "Manufacturing",
    "FMCG R&D",
    "Brand Development",
  ];

  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden bg-gradient-to-b from-[#f8f9fb] via-[#e6ebf2] to-[#d6dce6] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center"
    >
      {/* Background Lighting & Metallic Grey Grid Effects */}
      <div className="pointer-events-none absolute inset-0 select-none overflow-hidden" aria-hidden="true">
        {/* Luminous Specular Radial Glows */}
        <div className="absolute -top-[10%] right-[10%] h-[750px] w-[750px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.95),transparent_70%)] blur-3xl" />
        <div className="absolute top-[30%] -left-[10%] h-[650px] w-[650px] rounded-full bg-[radial-gradient(circle_at_center,rgba(195,205,220,0.5),transparent_70%)] blur-3xl" />
        
        {/* Brushed Metal Diagonal Reflective Sheen */}
        <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.4)_30%,transparent_60%)] opacity-40" />

        {/* Tech Grid / Mesh subtle overlay */}
        <div 
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(rgba(20, 30, 50, 0.4) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />

        {/* Precision Lines and Metallic Rings */}
        <div className="absolute right-[5%] top-1/2 -translate-y-1/2 hidden xl:block">
          <div className="relative h-[620px] w-[620px] rounded-full border border-[#9eaec4]/30">
            <div className="absolute inset-8 rounded-full border border-[#9eaec4]/20 border-dashed animate-[spin_120s_linear_infinite]" />
            <div className="absolute inset-20 rounded-full border border-[#9eaec4]/15" />
          </div>
        </div>

        {/* Ambient Top & Bottom Divider Lines */}
        <div className="absolute inset-x-0 top-20 h-px bg-gradient-to-r from-transparent via-[#9eaec4]/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#7b8ea8]/40 to-transparent" />
      </div>

      <Container className="relative z-10 w-full">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Main Hero Content (Left 7-8 cols on large screens) */}
          <div className="lg:col-span-7 xl:col-span-8">
            {/* Top Positioning Badge */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: duration.base, ease }}
              className="metallic-badge inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-black" />
              </span>
              <span className="text-[10.5px] font-semibold uppercase tracking-[0.26em] text-black sm:text-[11.5px]">
                {site.positioning}
              </span>
            </motion.div>

            {/* Brand Title Lockup & Tagline */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: duration.base, delay: 0.08, ease }}
              className="mt-6 flex flex-col"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.38em] text-[#4d5666] sm:text-sm">
                {site.shortName} {site.subName}
              </span>
              <span className="mt-1 text-sm italic tracking-[0.14em] text-graphite sm:text-base font-serif">
                &ldquo;{site.tagline}&rdquo;
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: duration.slow, delay: 0.14, ease }}
              className="mt-6 font-serif text-3xl font-medium leading-[1.08] tracking-tight text-black sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem]"
            >
              Developing the best products from{" "}
              <span className="metallic-text italic font-normal">
                Ideation to Commercialization.
              </span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: duration.base, delay: 0.22, ease }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-graphite/90 sm:text-lg font-normal"
            >
              {site.supportingCopy}
            </motion.p>

            {/* Value Chain / Lifecycle Pipeline */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: duration.base, delay: 0.28, ease }}
              className="metallic-card mt-8 rounded-xl p-4 sm:p-5 backdrop-blur-md max-w-2xl"
            >
              <div className="flex items-center justify-between gap-2 overflow-x-auto pb-1 text-xs">
                {lifecycleStages.map((stage, idx) => (
                  <div key={stage.label} className="flex items-center gap-2 shrink-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[9px] font-mono text-[#5f697a] font-semibold">{stage.step}</span>
                      <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-black">
                        {stage.label}
                      </span>
                    </div>
                    {idx < lifecycleStages.length - 1 && (
                      <ChevronRight className="h-3.5 w-3.5 text-[#7a889e] shrink-0" />
                    )}
                  </div>
                ))}
              </div>

              {/* Pillars list */}
              <div className="mt-3.5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[#b8c2d1]/50 pt-3 text-[10.5px] uppercase tracking-[0.2em] text-[#333a46] font-semibold">
                {pillars.map((pillar, i) => (
                  <span key={pillar} className="flex items-center gap-2">
                    {i > 0 && <span className="h-1 w-1 rounded-full bg-black/30" />}
                    <span>{pillar}</span>
                  </span>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: duration.base, delay: 0.34, ease }}
              className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              {/* Primary CTA */}
              <Button
                href="#capabilities"
                variant="primary"
                className="group relative overflow-hidden px-8 py-4 text-xs font-semibold tracking-[0.22em] shadow-[0_4px_16px_rgba(0,0,0,0.18)]"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleSmoothScroll(e, "capabilities")}
              >
                <span className="relative z-10">Explore Our Capabilities</span>
                <ArrowUpRight className="relative z-10 ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>

              {/* Secondary CTA */}
              <Button
                href="#contact"
                variant="secondary"
                className="group px-8 py-4 text-xs font-semibold tracking-[0.22em] border-[#aab5c6] bg-white/70 text-black shadow-[inset_0_1px_0_#ffffff] hover:bg-white"
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleSmoothScroll(e, "contact")}
              >
                <span>Start a Project</span>
                <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>

          {/* Right Visual Chrome Emblem Showcase */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: duration.slow, delay: 0.2, ease }}
            className="lg:col-span-5 xl:col-span-4 flex flex-col items-center justify-center relative"
          >
            <div className="relative flex w-full max-w-[380px] lg:max-w-[420px] flex-col items-center">
              {/* Glowing Halo Backdrop */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white via-[#b8c6dc]/40 to-transparent blur-2xl -z-10" />
              
              {/* Brushed Metallic Glass Frame */}
              <div className="relative w-full rounded-2xl border border-[#b8c4d6] bg-gradient-to-b from-white/95 via-[#ebf0f7] to-[#d3dce8] p-8 sm:p-10 backdrop-blur-xl shadow-[0_20px_50px_rgba(20,25,35,0.1),inset_0_1px_1px_#ffffff] text-center">
                {/* 3D Chrome Emblem with subtle float */}
                <motion.div
                  animate={reduce ? undefined : { y: [-6, 6, -6] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="mx-auto flex h-36 w-36 sm:h-44 sm:w-44 items-center justify-center rounded-full border border-[#a8b6cb] bg-gradient-to-br from-white via-[#dde4f0] to-[#b6c2d4] p-6 shadow-[0_15px_35px_rgba(0,0,0,0.15),inset_0_2px_4px_#ffffff]"
                >
                  <LogoMark className="h-full w-full drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)]" />
                </motion.div>

                {/* Monogram Brand Header */}
                <div className="mt-6">
                  <h2 className="font-serif text-2xl font-bold tracking-[0.24em] text-black">
                    {site.shortName}
                  </h2>
                  <p className="mt-1 text-[9.5px] uppercase tracking-[0.36em] text-[#4d5666] font-bold">
                    {site.subName}
                  </p>
                </div>

                {/* Micro Metrics / Highlights */}
                <div className="mt-6 grid grid-cols-2 gap-3 border-t border-[#b8c2d1]/60 pt-5 text-left">
                  <div className="rounded-lg border border-[#b8c4d6]/60 bg-white/70 p-3 shadow-[inset_0_1px_0_#ffffff]">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-[#555f70] font-bold">Formulation</span>
                    <p className="mt-0.5 text-xs font-bold text-black">R&D to Scale</p>
                  </div>
                  <div className="rounded-lg border border-[#b8c4d6]/60 bg-white/70 p-3 shadow-[inset_0_1px_0_#ffffff]">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-[#555f70] font-bold">Execution</span>
                    <p className="mt-0.5 text-xs font-bold text-black">Turnkey FMCG</p>
                  </div>
                </div>

                {/* Motto */}
                <div className="mt-5 text-[10px] uppercase tracking-[0.28em] text-[#495260] font-bold">
                  Innovate &bull; Build &bull; Scale &bull; Impact
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import { corporateNavItems, site, NavItem } from "@/lib/site";
import { LogoMark } from "@/components/brand/LogoMark";
import { CulturedCookieLogo } from "@/components/brand/CulturedCookieLogo";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isExternal?: boolean) => {
    if (isExternal) {
      setOpen(false);
      setActiveDropdown(null);
      return;
    }
    setOpen(false);
    setActiveDropdown(null);
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.hash = href;
      }
    }
  };

  const handleMouseEnter = (label: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-[#b0bac9]/60 bg-[#e6ebf3]/95 backdrop-blur-2xl shadow-[0_4px_25px_rgba(20,25,35,0.06)]"
          : "border-b border-[#c2ccdc]/35 bg-[#edf1f8]/85 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo Lockup */}
        <Link
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="group flex items-center gap-2.5 transition-opacity duration-200 hover:opacity-90"
        >
          <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded border border-[#b8c2d1] bg-gradient-to-b from-white via-[#e8edf5] to-[#ced6e5] shadow-[0_2px_8px_rgba(0,0,0,0.06),inset_0_1px_0_#ffffff] transition-all duration-300 group-hover:border-[#9aa7bb]">
            <LogoMark className="h-6 w-6 drop-shadow-[0_1px_3px_rgba(0,0,0,0.15)]" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-sans text-[15px] font-bold tracking-wider text-black transition-colors">
              {site.shortName}
            </span>
            <span className="mt-0.5 text-[9px] font-semibold tracking-wider text-[#556072] uppercase">
              {site.subName}
            </span>
          </div>
        </Link>

        {/* Corporate Desktop Navigation (Kraft Heinz Style) */}
        <nav
          className="hidden items-center gap-1 md:gap-2 lg:gap-2.5 lg:flex"
          aria-label="Primary Navigation"
        >
          {corporateNavItems.map((item: NavItem) => {
            const hasChildren = (item.children && item.children.length > 0) || item.isMegaMenu;
            const isOpen = activeDropdown === item.label;

            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => hasChildren && handleMouseEnter(item.label)}
                onMouseLeave={() => hasChildren && handleMouseLeave()}
              >
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-[13px] font-semibold tracking-wide transition-all duration-200",
                    isOpen
                      ? "text-black bg-white/70 shadow-sm"
                      : "text-[#2c303b] hover:text-black hover:bg-white/40",
                  )}
                >
                  <span>{item.label}</span>
                  {hasChildren && (
                    <ChevronDown
                      strokeWidth={1.5}
                      className={cn(
                        "h-3.5 w-3.5 transition-transform duration-200",
                        isOpen ? "rotate-180 text-black" : "text-[#6b7588]",
                      )}
                    />
                  )}
                </a>

                {/* Dropdown Menu Container */}
                {hasChildren && (
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.98 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className={cn(
                          "absolute top-full pt-1.5 z-50",
                          item.isMegaMenu ? "left-0 sm:-left-12 min-w-[360px] max-w-[420px]" : "left-0 min-w-[270px]",
                        )}
                      >
                        <div className="overflow-hidden rounded-2xl border border-[#b4c0d2] bg-gradient-to-br from-white/95 via-[#ebf0f8] to-[#d8e0ec] p-2 shadow-[0_20px_50px_rgba(20,25,35,0.15),inset_0_1px_1px_#ffffff] backdrop-blur-2xl">
                          {/* Dedicated MegaMenu for Brands (Cultured Cookie Co. Glimpse Showcase) */}
                          {item.isMegaMenu && item.brandPreview ? (
                            <div className="p-3">
                              {/* Top Preview Card */}
                              <div className="relative overflow-hidden rounded-xl border border-[#b8c4d6] bg-[#f5f0e8] p-5 shadow-sm">
                                {/* Subtle Background texture */}
                                <div className="absolute inset-x-0 -top-px h-[2px] bg-gradient-to-r from-transparent via-[#253135] to-transparent opacity-40" />

                                <div className="flex items-center justify-between">
                                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#253135]/20 bg-white/80 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#253135]">
                                    <span>{item.brandPreview.badge}</span>
                                  </span>
                                  <span className="text-[10px] font-bold tracking-widest text-[#253135]/60 uppercase">
                                    01 · VENTURE
                                  </span>
                                </div>

                                {/* Prominent Logo */}
                                <div className="my-4 flex items-center justify-center py-2">
                                  <CulturedCookieLogo className="h-12 sm:h-14 w-auto" />
                                </div>

                                {/* Tagline */}
                                <div className="text-center">
                                  <p className="font-serif text-sm font-bold text-[#253135]">
                                    &ldquo;{item.brandPreview.tagline}&rdquo;
                                  </p>
                                  <p className="mt-1 text-[11px] text-[#253135]/80 leading-relaxed font-medium">
                                    {item.brandPreview.description}
                                  </p>
                                </div>

                                {/* Highlight Pills */}
                                <div className="mt-4 flex flex-wrap items-center justify-center gap-1.5 border-t border-[#253135]/15 pt-3">
                                  {item.brandPreview.highlights.map((hl) => (
                                    <span
                                      key={hl}
                                      className="rounded-md border border-[#253135]/10 bg-white/70 px-2 py-0.5 text-[9.5px] font-bold uppercase tracking-wider text-[#253135]"
                                    >
                                      {hl}
                                    </span>
                                  ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="mt-4 grid grid-cols-2 gap-2">
                                  <a
                                    href={item.brandPreview.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => handleNavClick(e, item.brandPreview!.url, true)}
                                    className="flex items-center justify-center gap-1.5 rounded-lg bg-[#253135] px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-[#F5F0E8] transition-colors hover:bg-black"
                                  >
                                    <span>Visit Brand</span>
                                    <ExternalLink strokeWidth={1.5} className="h-3 w-3" />
                                  </a>
                                  <a
                                    href="#case-studies"
                                    onClick={(e) => handleNavClick(e, "#case-studies")}
                                    className="flex items-center justify-center gap-1.5 rounded-lg border border-[#253135]/30 bg-white/80 px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-[#253135] transition-colors hover:bg-white"
                                  >
                                    <span>Case Study</span>
                                    <ArrowRight strokeWidth={1.5} className="h-3 w-3" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          ) : (
                            /* Standard Corporate Dropdown Menu */
                            <div className="space-y-0.5">
                              {item.children?.map((sub) => (
                                <a
                                  key={sub.label}
                                  href={sub.href}
                                  {...(sub.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                  onClick={(e) => handleNavClick(e, sub.href, sub.isExternal)}
                                  className="group flex items-start gap-2.5 rounded-lg p-2.5 transition-colors hover:bg-white"
                                >
                                  <div className="mt-1 flex h-1.5 w-1.5 shrink-0 rounded-full bg-black/40 transition-all group-hover:bg-black group-hover:scale-125" />
                                  <div>
                                    <div className="text-[12.5px] font-bold text-black transition-colors group-hover:text-black">
                                      {sub.label}
                                    </div>
                                    {sub.description && (
                                      <div className="text-[10.5px] text-[#556072] font-medium leading-tight mt-0.5">
                                        {sub.description}
                                      </div>
                                    )}
                                  </div>
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center lg:hidden">
          <button
            type="button"
            className="relative inline-flex h-9 w-9 items-center justify-center rounded-md border border-[#b8c2d1] bg-white/70 text-black shadow-[inset_0_1px_0_#ffffff] transition-colors hover:bg-white"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-[#b8c2d1]/60 bg-[#eef2f8]/98 backdrop-blur-2xl lg:hidden max-h-[85vh] overflow-y-auto"
          >
            <div className="mx-auto max-w-7xl px-5 py-5 sm:px-8">
              <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation">
                {corporateNavItems.map((item: NavItem) => {
                  const hasChildren = (item.children && item.children.length > 0) || item.isMegaMenu;
                  const isExpanded = mobileExpanded === item.label;

                  return (
                    <div key={item.label} className="border-b border-[#b8c2d1]/30 pb-2">
                      <div className="flex items-center justify-between">
                        <a
                          href={item.href}
                          onClick={(e) => handleNavClick(e, item.href)}
                          className="py-1.5 text-[13.5px] font-bold text-black transition-colors"
                        >
                          {item.label}
                        </a>
                        {hasChildren && (
                          <button
                            type="button"
                            onClick={() =>
                              setMobileExpanded((prev) =>
                                prev === item.label ? null : item.label,
                              )
                            }
                            className="p-2 text-[#556072] hover:text-black"
                            aria-label={`Toggle ${item.label} submenu`}
                          >
                            <ChevronDown
                              strokeWidth={1.5}
                              className={cn(
                                "h-4 w-4 transition-transform duration-200",
                                isExpanded ? "rotate-180" : "",
                              )}
                            />
                          </button>
                        )}
                      </div>

                      {/* Sub-items or Brand Preview in mobile */}
                      {hasChildren && isExpanded && (
                        <div className="ml-2 mt-2 space-y-2 border-l-2 border-[#b8c4d6] pl-3 py-1">
                          {item.isMegaMenu && item.brandPreview ? (
                            <div className="rounded-xl border border-[#b8c4d6] bg-[#f5f0e8] p-4 text-center">
                              <div className="flex justify-center mb-2">
                                <CulturedCookieLogo className="h-10 w-auto" />
                              </div>
                              <p className="text-xs font-bold text-[#253135]">
                                {item.brandPreview.tagline}
                              </p>
                              <div className="mt-3 flex gap-2 justify-center">
                                <a
                                  href={item.brandPreview.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={(e) => handleNavClick(e, item.brandPreview!.url, true)}
                                  className="inline-flex items-center gap-1 rounded bg-[#253135] px-3 py-1.5 text-[10.5px] font-bold uppercase text-[#F5F0E8]"
                                >
                                  <span>Visit Site</span>
                                  <ExternalLink strokeWidth={1.5} className="h-3 w-3" />
                                </a>
                                <a
                                  href="#case-studies"
                                  onClick={(e) => handleNavClick(e, "#case-studies")}
                                  className="inline-flex items-center gap-1 rounded border border-[#253135]/30 bg-white/80 px-3 py-1.5 text-[10.5px] font-bold uppercase text-[#253135]"
                                >
                                  <span>Case Study</span>
                                </a>
                              </div>
                            </div>
                          ) : (
                            item.children?.map((sub) => (
                              <a
                                key={sub.label}
                                href={sub.href}
                                {...(sub.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                onClick={(e) => handleNavClick(e, sub.href, sub.isExternal)}
                                className="block py-1.5 text-xs font-semibold text-[#434b58] hover:text-black"
                              >
                                <div className="flex items-center gap-1.5">
                                  <ArrowRight strokeWidth={1.5} className="h-3 w-3 text-black/50" />
                                  <span>{sub.label}</span>
                                </div>
                              </a>
                            ))
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

"use client";

import Link from "next/link";
import { Mail, Phone, Globe } from "lucide-react";
import { Container } from "@/components/ui";
import { LogoMark } from "@/components/brand/LogoMark";

const companyLinks = [
  { label: "About", href: "#about" },
  { label: "Our Approach", href: "#approach" },
  { label: "Vision", href: "#vision" },
  { label: "Capabilities", href: "#capabilities" },
];

const serviceLinks = [
  { label: "Product Innovation", href: "#services" },
  { label: "Technical R&D", href: "#services" },
  { label: "Manufacturing & Scale-Up", href: "#services" },
  { label: "Commercialization", href: "#services" },
];

const exploreLinks = [
  { label: "Cultured Cookie Co. ↗", href: "https://www.culturedcookieco.com/", isExternal: true },
  { label: "Categories", href: "#categories" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Who We Work With", href: "#who-we-work-with" },
];

export function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isExternal?: boolean) => {
    if (isExternal) return;
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

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#d4dce8] via-[#cad2df] to-[#beccd8] text-black pt-20 pb-12 border-t border-[#a8b8cc]">
      {/* Subtle top divider lighting */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80" />

      <Container>
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 pb-16">
          {/* Brand Col (4 cols) */}
          <div className="lg:col-span-4">
            <Link
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="group inline-flex items-center gap-3 transition-opacity duration-300 hover:opacity-90"
            >
              <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded border border-[#a8b6cb] bg-gradient-to-b from-white via-[#dde4f0] to-[#b6c2d4] shadow-[0_2px_10px_rgba(0,0,0,0.08),inset_0_1px_0_#ffffff] transition-all duration-300 group-hover:border-[#7b8ea8]">
                <LogoMark className="h-7 w-7 drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-serif text-base font-bold tracking-[0.24em] text-black">
                  SARVSMIT
                </span>
                <span className="mt-1 text-[9px] font-bold tracking-[0.34em] text-[#4d5666] uppercase">
                  GLOBAL ENTERPRISE
                </span>
              </div>
            </Link>

            <p className="mt-6 font-serif text-xl sm:text-2xl text-black font-medium leading-snug max-w-sm">
              &ldquo;Engineering the Future of Consumption&rdquo;
            </p>

            <p className="mt-4 text-xs text-[#434b58] leading-relaxed max-w-sm font-medium">
              Product innovation and commercialization consultancy helping brands build scalable, differentiated FMCG products.
            </p>
          </div>

          {/* Col 1: Company (2 cols) */}
          <div className="lg:col-span-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-black">
              Company
            </span>
            <ul className="mt-5 space-y-3" role="list">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-sm text-[#38404d] font-medium transition-colors duration-200 hover:text-black"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Services (2 cols) */}
          <div className="lg:col-span-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-black">
              Services
            </span>
            <ul className="mt-5 space-y-3" role="list">
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-sm text-[#38404d] font-medium transition-colors duration-200 hover:text-black"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Explore (2 cols) */}
          <div className="lg:col-span-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-black">
              Explore & Portfolio
            </span>
            <ul className="mt-5 space-y-3" role="list">
              {exploreLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    {...(item.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    onClick={(e) => handleNavClick(e, item.href, item.isExternal)}
                    className="inline-flex items-center gap-1 text-sm text-[#38404d] font-medium transition-colors duration-200 hover:text-black"
                  >
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact (2 cols) */}
          <div className="lg:col-span-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-black">
              Contact
            </span>
            <ul className="mt-5 space-y-3 text-sm text-[#38404d] font-medium" role="list">
              <li>
                <a
                  href="mailto:info@sarvsmitglobalenterprise.com"
                  className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-black break-all"
                >
                  <Mail className="h-3.5 w-3.5 shrink-0 text-[#4d5666]" />
                  <span>info@sarvsmitglobalenterprise.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+919272417391"
                  className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-black"
                >
                  <Phone className="h-3.5 w-3.5 shrink-0 text-[#4d5666]" />
                  <span>+91-9272417391</span>
                </a>
              </li>
              <li>
                <a
                  href="https://sarvsmitglobalenterprise.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-black"
                >
                  <Globe className="h-3.5 w-3.5 shrink-0 text-[#4d5666]" />
                  <span>sarvsmitglobalenterprise.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="h-px w-full bg-[#9aaac0]/50" />

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col gap-4 text-xs text-[#434b58] sm:flex-row sm:items-center sm:justify-between font-medium">
          <p>© 2026 Sarvsmit Global Enterprise. All Rights Reserved.</p>
          <p className="font-sans uppercase tracking-[0.2em] text-black font-bold">
            Ideate · Innovate · Create · Scale · Impact
          </p>
        </div>
      </Container>
    </footer>
  );
}

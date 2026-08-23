import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type CardTone = "dark" | "light";

type CardProps = {
  children: ReactNode;
  className?: string;
  tone?: CardTone;
};

const tones: Record<CardTone, string> = {
  dark: "border-white/12 bg-black-soft/40 text-silver-bright",
  light: "border-black/10 bg-white text-black",
};

export function Card({ children, className, tone = "dark" }: CardProps) {
  return (
    <article
      className={cn(
        "rounded-sm border p-6 transition-colors duration-300 sm:p-8",
        tones[tone],
        className,
      )}
    >
      {children}
    </article>
  );
}

type CardMetaProps = {
  children: ReactNode;
  className?: string;
};

export function CardEyebrow({ children, className }: CardMetaProps) {
  return (
    <p
      className={cn(
        "text-[11px] uppercase tracking-[0.24em] text-muted",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function CardTitle({ children, className }: CardMetaProps) {
  return (
    <h3
      className={cn(
        "mt-3 font-serif text-2xl leading-tight tracking-tight sm:text-3xl",
        className,
      )}
    >
      {children}
    </h3>
  );
}

export function CardBody({ children, className }: CardMetaProps) {
  return (
    <div className={cn("mt-4 text-sm leading-relaxed text-silver/80", className)}>
      {children}
    </div>
  );
}

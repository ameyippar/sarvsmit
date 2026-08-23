import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn("max-w-4xl", align === "center" && "mx-auto text-center")}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-4 text-[11px] font-medium uppercase tracking-[0.32em]",
            light ? "text-muted" : "text-silver/80",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-serif text-4xl leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl",
          light ? "text-black" : "metallic-text",
        )}
      >
        {title}
      </h2>
      {description ? (
        <div
          className={cn(
            "mt-6 max-w-2xl text-base leading-relaxed sm:text-lg",
            align === "center" && "mx-auto",
            light ? "text-black/70" : "text-silver/80",
          )}
        >
          {description}
        </div>
      ) : null}
    </div>
  );
}

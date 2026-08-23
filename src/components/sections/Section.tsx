import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui";

type SectionTone = "dark" | "light";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: SectionTone;
  bordered?: boolean;
};

const tones: Record<SectionTone, string> = {
  dark: "bg-black text-silver-bright",
  light: "bg-offwhite text-black",
};

export function Section({
  id,
  children,
  className,
  tone = "dark",
  bordered = true,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-24 lg:py-32",
        tones[tone],
        bordered && (tone === "light" ? "border-y border-black/10" : "border-t border-white/10"),
        className,
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}

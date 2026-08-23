import { cn } from "@/lib/cn";

type DividerProps = {
  className?: string;
  soft?: boolean;
};

export function Divider({ className, soft = false }: DividerProps) {
  return (
    <hr
      className={cn(
        "border-0 border-t",
        soft ? "border-white/8" : "border-white/10",
        className,
      )}
    />
  );
}

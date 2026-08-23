import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variants: Record<ButtonVariant, string> = {
  primary:
    "border border-black bg-[#0d0e12] text-white hover:bg-[#22242c] shadow-[0_4px_16px_rgba(0,0,0,0.12)]",
  secondary:
    "border border-black/20 bg-white/80 text-black hover:border-black/50 hover:bg-white backdrop-blur-sm",
  ghost:
    "border border-transparent text-black hover:bg-black/5",
};

type Common = {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = Common &
  ComponentProps<"button"> & { href?: undefined };

type ButtonAsLink = Common & { href: string } & Omit<
    ComponentProps<"a">,
    "href" | "className" | "children"
  >;

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonAsButton | ButtonAsLink) {
  const classes = cn(
    "inline-flex min-h-12 cursor-pointer items-center justify-center rounded-sm px-7 text-[11px] font-medium uppercase tracking-[0.22em] transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-50",
    variants[variant],
    className,
  );

  if ("href" in props && props.href) {
    const { href, ...rest } = props;
    const isHash = href.startsWith("#");
    const isInternal = href.startsWith("/");

    if (isHash || isInternal) {
      return (
        <Link href={href} className={classes} {...rest}>
          {children}
        </Link>
      );
    }

    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ComponentProps<"button">)}>
      {children}
    </button>
  );
}

import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type FieldProps = {
  id: string;
  label: string;
  error?: string;
  className?: string;
};

type InputProps = FieldProps & ComponentProps<"input">;
type TextareaProps = FieldProps & ComponentProps<"textarea">;

const fieldClass =
  "w-full rounded-none border-0 border-b border-black/20 bg-transparent py-3 text-black outline-none transition-colors placeholder:text-black/40 focus:border-black";

export function Input({
  id,
  label,
  error,
  className,
  ...props
}: InputProps) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="text-[11px] uppercase tracking-[0.2em] text-muted"
      >
        {label}
      </label>
      <input
        id={id}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(fieldClass, error && "border-red-300/60")}
        {...props}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-xs text-red-300">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function Textarea({
  id,
  label,
  error,
  className,
  rows = 5,
  ...props
}: TextareaProps) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="text-[11px] uppercase tracking-[0.2em] text-muted"
      >
        {label}
      </label>
      <textarea
        id={id}
        rows={rows}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(fieldClass, "resize-y", error && "border-red-300/60")}
        {...props}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-xs text-red-300">
          {error}
        </p>
      ) : null}
    </div>
  );
}

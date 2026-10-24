import React from "react";
import { cn } from "@/lib/utils";

export interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "soft" | "primary" | "success" | "outline";
  size?: "sm" | "md";
  icon?: React.ReactNode;
}

export const Chip: React.FC<ChipProps> = ({
  className,
  variant = "default",
  size = "md",
  icon,
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-colors select-none";

  const sizeStyles = {
    sm: "px-2.5 py-1 text-xs gap-1.5",
    md: "px-3.5 py-1.5 text-sm gap-2",
  }[size];

  const variantStyles = {
    default: "bg-surface border border-border text-ink shadow-sm",
    soft: "bg-surfaceSoft text-primary border border-border/60",
    primary: "bg-primary text-white border border-primary",
    success: "bg-success/10 text-success border border-success/20 font-semibold",
    outline: "bg-transparent border border-border text-inkMuted hover:text-ink hover:border-inkMuted",
  }[variant];

  return (
    <span
      className={cn(baseStyles, sizeStyles, variantStyles, className)}
      {...props}
    >
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};

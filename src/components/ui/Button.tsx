import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  download?: boolean | string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      download,
      target,
      rel,
      icon,
      iconPosition = "right",
      fullWidth = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none min-h-[44px]";

    const sizeStyles = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-2.5 text-base",
      lg: "px-8 py-3.5 text-lg",
    }[size];

    const variantStyles = {
      primary:
        "bg-accent text-white hover:bg-[#F25A37] active:scale-[0.98] shadow-sm hover:shadow-md",
      secondary:
        "border-2 border-primary text-primary hover:bg-primary/5 active:scale-[0.98] bg-transparent",
      ghost:
        "text-ink hover:text-primary hover:bg-surfaceSoft active:scale-[0.98]",
    }[variant];

    const widthStyle = fullWidth ? "w-full" : "";

    const combinedClassName = cn(
      baseStyles,
      sizeStyles,
      variantStyles,
      widthStyle,
      className
    );

    const content = (
      <>
        {icon && iconPosition === "left" && <span className="mr-2 inline-flex items-center">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === "right" && <span className="ml-2 inline-flex items-center">{icon}</span>}
      </>
    );

    if (href) {
      const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
      if (isExternal || download) {
        return (
          <a
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={href}
            download={download}
            target={target || (isExternal && !href.startsWith("mailto:") && !href.startsWith("tel:") ? "_blank" : undefined)}
            rel={rel || (isExternal ? "noopener noreferrer" : undefined)}
            className={combinedClassName}
          >
            {content}
          </a>
        );
      }
      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={combinedClassName}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={combinedClassName}
        disabled={disabled}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";

import React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}) => {
  return (
    <div
      className={cn(
        "mb-8 sm:mb-12",
        align === "center" ? "text-center mx-auto" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "text-xs sm:text-sm font-semibold tracking-wider uppercase text-primary mb-2 flex items-center gap-2",
            align === "center" && "justify-center"
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 inline-block" />
          <span>{eyebrow}</span>
        </div>
      )}
      <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-ink tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-inkMuted text-base sm:text-lg max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface StatCardProps {
  value: string;
  numericValue: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sub: string;
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  value,
  numericValue,
  prefix = "",
  suffix = "",
  label,
  sub,
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const shouldReduceMotion = useReducedMotion();
  const [displayCount, setDisplayCount] = useState<number>(0);

  useEffect(() => {
    if (!isInView) return;
    if (shouldReduceMotion) {
      setDisplayCount(numericValue);
      return;
    }

    const duration = 1200; // 1.2s count up
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOut * numericValue);
      setDisplayCount(current);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDisplayCount(numericValue);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, numericValue, shouldReduceMotion]);

  return (
    <div
      ref={ref}
      className={cn(
        "bg-surface rounded-card p-5 sm:p-6 border border-border shadow-soft hover:shadow-hover transition-all duration-300 flex flex-col justify-between",
        className
      )}
    >
      <div>
        <div className="text-3xl sm:text-4xl font-heading font-bold text-primary tracking-tight">
          {isInView ? (
            <>
              {prefix}
              {displayCount}
              {suffix}
            </>
          ) : (
            value
          )}
        </div>
        <div className="mt-2 text-base font-semibold text-ink">{label}</div>
      </div>
      <p className="mt-2 text-xs sm:text-sm text-inkMuted leading-relaxed">
        {sub}
      </p>
    </div>
  );
};

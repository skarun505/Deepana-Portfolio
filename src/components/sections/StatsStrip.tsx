import React from "react";
import { stats } from "@/data/content";
import { StatCard } from "@/components/ui/StatCard";
import { Reveal } from "@/components/ui/Reveal";

export const StatsStrip: React.FC = () => {
  return (
    <section className="py-8 sm:py-12 bg-surfaceSoft/50 border-y border-border/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                value={stat.value}
                numericValue={stat.numericValue}
                prefix={stat.prefix}
                suffix={stat.suffix}
                label={stat.label}
                sub={stat.sub}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

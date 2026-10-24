import React from "react";
import { industries } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export const Industries: React.FC = () => {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Market Verticals"
            title="Industries Managed"
            description="Experience deploying ad spend across 8 distinct business models with a cumulative monthly budget of ₹25.0 Lakh."
          />
        </Reveal>

        {/* Mobile: horizontal scroll chip strip with no scrollbar overflow; Desktop: wrapping grid */}
        <Reveal delay={0.1}>
          <div className="flex overflow-x-auto pb-4 pt-1 gap-3.5 no-scrollbar sm:grid sm:grid-cols-2 md:grid-cols-4 sm:overflow-visible">
            {industries.map((ind) => (
              <div
                key={ind.id}
                className="shrink-0 min-w-[240px] sm:min-w-0 bg-surface rounded-card p-4 border border-border shadow-soft hover:border-primary/40 hover:shadow-hover transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-semibold text-primary px-2 py-0.5 rounded-full bg-primary/10">
                      #{ind.id}
                    </span>
                    <span className="text-xs font-bold text-ink bg-surfaceSoft px-2.5 py-0.5 rounded-full border border-border/70">
                      {ind.budget} / mo
                    </span>
                  </div>
                  <h3 className="font-heading font-semibold text-base text-ink line-clamp-1">
                    {ind.name}
                  </h3>
                </div>

                <div className="mt-4 pt-2.5 border-t border-border/60 flex items-center gap-1.5 flex-wrap">
                  {ind.platforms.map((plat) => (
                    <span
                      key={plat}
                      className="text-[11px] font-medium text-inkMuted bg-surfaceSoft px-2 py-0.5 rounded-md"
                    >
                      {plat}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

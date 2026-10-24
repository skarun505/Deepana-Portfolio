"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, Target, Wallet, Layers, Info } from "lucide-react";
import { caseStudies } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export const CaseStudies: React.FC = () => {
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="work" className="py-16 sm:py-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Proven Impact"
            title="Performance Case Studies"
            description="Campaign frameworks, testing methodologies, and conversion outcomes achieved across multiple agency clients."
          />
        </Reveal>

        {/* Confidentiality notice */}
        <div className="mb-8 p-3.5 sm:p-4 rounded-xl bg-surfaceSoft border border-border/80 flex items-start gap-3 text-xs sm:text-sm text-inkMuted">
          <Info className="w-4 h-4 text-primary shrink-0 mt-0.5" />
          <p>
            <strong className="text-ink font-medium">Agency Confidentiality: </strong>
            Client brand identities are anonymized under agency non-disclosure agreements. Metrics reflect representative 8–12 week campaign performance across multi-channel client accounts.
          </p>
        </div>

        {/* 6 Case Study Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((cs, idx) => {
            const isExpanded = !!expandedIds[cs.id];

            return (
              <Reveal key={cs.id} delay={idx * 0.07}>
                <div className="bg-surface rounded-card border border-border shadow-soft hover:shadow-hover transition-all duration-300 flex flex-col justify-between overflow-hidden h-full">
                  <div className="p-5 sm:p-6">
                    {/* Header: Industry & Budget */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                        {cs.industry}
                      </span>
                      <span className="text-xs font-semibold text-ink px-2.5 py-1 rounded-full bg-surfaceSoft border border-border/70 flex items-center gap-1">
                        <Wallet className="w-3 h-3 text-inkMuted" />
                        {cs.budget}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-heading font-bold text-lg text-ink mb-2">
                      {cs.title}
                    </h3>

                    {/* Platforms */}
                    <div className="flex items-start gap-1.5 text-xs text-inkMuted mb-4">
                      <Layers className="w-3.5 h-3.5 shrink-0 mt-0.5 text-primary" />
                      <span>{cs.platforms}</span>
                    </div>

                    {/* Goal */}
                    <div className="p-3 rounded-lg bg-surfaceSoft/60 border border-border/60 text-xs text-ink mb-4 flex items-start gap-2">
                      <Target className="w-3.5 h-3.5 shrink-0 text-accent mt-0.5" />
                      <div>
                        <span className="font-medium text-inkMuted">Goal: </span>
                        <span>{cs.goal}</span>
                      </div>
                    </div>

                    {/* Headline Result in Success Color */}
                    <div className="pt-3 pb-2 border-t border-border/60">
                      <div className="text-xs uppercase tracking-wider font-semibold text-inkMuted mb-1">
                        Headline Result
                      </div>
                      <div className="text-lg sm:text-xl font-heading font-bold text-success">
                        {cs.headlineResult}
                      </div>
                    </div>

                    {/* Metric Pills */}
                    <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-border/60">
                      {cs.results.map((res, rIdx) => (
                        <div
                          key={rIdx}
                          className="bg-surfaceSoft/80 rounded-lg p-2 text-center border border-border/40"
                        >
                          <div className="text-[10px] uppercase tracking-wide text-inkMuted truncate">
                            {res.label}
                          </div>
                          <div className="text-xs font-bold text-success mt-0.5">
                            {res.change}
                          </div>
                          {res.before && res.after && (
                            <div className="text-[9px] text-inkMuted truncate mt-0.5">
                              {res.before}→{res.after}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Expandable "What I did" container */}
                    {isExpanded && (
                      <div className="mt-4 pt-4 border-t border-border/80 text-sm text-ink leading-relaxed animate-in fade-in duration-200 bg-surfaceSoft/40 -mx-5 -mb-5 p-5">
                        <div className="font-semibold text-xs uppercase tracking-wider text-primary mb-1.5">
                          Strategy & Execution:
                        </div>
                        <p className="text-xs sm:text-sm text-inkMuted leading-normal">
                          {cs.whatIDid}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Toggle Button */}
                  <button
                    type="button"
                    onClick={() => toggleExpand(cs.id)}
                    className="w-full py-3 px-5 border-t border-border text-xs font-semibold text-primary hover:bg-surfaceSoft flex items-center justify-center gap-1.5 transition-colors min-h-[44px]"
                    aria-expanded={isExpanded}
                  >
                    <span>{isExpanded ? "Hide Strategy Details" : "View What I Did"}</span>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

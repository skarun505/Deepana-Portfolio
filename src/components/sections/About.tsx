import React from "react";
import { CheckCircle2, TrendingUp, BarChart2 } from "lucide-react";
import { about } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Who I Am"
            title={about.title}
            className="mb-6 sm:mb-8"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="bg-surface rounded-card p-6 sm:p-10 border border-border shadow-soft">
            <div className="max-w-prose">
              {about.paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  className="text-lg sm:text-xl text-ink leading-relaxed font-normal"
                >
                  {p}
                </p>
              ))}
            </div>

            {/* Quick Pillars */}
            <div className="mt-8 pt-8 border-t border-border/80 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-ink">Clean Tracking</h3>
                  <p className="text-xs text-inkMuted mt-0.5">Pixel, CAPI, GTM & GA4</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-success/10 text-success flex items-center justify-center shrink-0 mt-0.5">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-ink">Tight CPL & ROAS</h3>
                  <p className="text-xs text-inkMuted mt-0.5">Systematic testing & scaling</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 mt-0.5">
                  <BarChart2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-ink">Actionable Reports</h3>
                  <p className="text-xs text-inkMuted mt-0.5">Metrics clients actually read</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

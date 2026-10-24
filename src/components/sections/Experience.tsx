import React from "react";
import { ExternalLink, Calendar, MapPin, Briefcase, CheckCircle2 } from "lucide-react";
import { experience } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 sm:py-24 bg-surfaceSoft/30 border-y border-border/60 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Work History"
            title="Experience"
            description="Real agency client execution handling live ad spend across multiple industries."
          />
        </Reveal>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-primary/20 space-y-12">
          {experience.map((exp, index) => (
            <Reveal key={index} delay={0.1}>
              <div className="relative group">
                {/* Timeline node/dot on the left */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full border-4 border-surface bg-primary shadow-sm" />

                <div className="bg-surface rounded-card p-6 sm:p-8 border border-border shadow-soft group-hover:shadow-hover transition-all duration-300">
                  {/* Role & Company Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-border/70">
                    <div>
                      <h3 className="font-heading font-bold text-xl sm:text-2xl text-ink">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="font-semibold text-primary text-base">
                          {exp.company}
                        </span>
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-xs text-primary hover:text-primaryDark hover:underline"
                          aria-label={`Visit ${exp.company} website`}
                        >
                          <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                        </a>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-inkMuted">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period} ({exp.duration})
                      </span>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Visible About Subix Callout */}
                  <div className="my-5 p-4 rounded-xl bg-surfaceSoft border border-primary/15 text-sm leading-relaxed">
                    <div className="flex items-start gap-2.5">
                      <Briefcase className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-ink">About Subix: </span>
                        <span className="text-inkMuted">{exp.aboutSubix}</span>
                        {" — "}
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-primary hover:underline inline-flex items-center gap-1 ml-1"
                        >
                          subix.in
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-3 my-5">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3 text-sm sm:text-base text-ink leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tools used */}
                  <div className="pt-4 border-t border-border/70 flex flex-wrap items-center gap-2 text-xs text-inkMuted">
                    <span className="font-semibold text-ink">Tools & Tech:</span>
                    <span>{exp.tools}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

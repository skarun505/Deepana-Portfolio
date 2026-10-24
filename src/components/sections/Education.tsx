import React from "react";
import { GraduationCap, Award, Calendar, Building2 } from "lucide-react";
import { education } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Chip } from "@/components/ui/Chip";
import { Reveal } from "@/components/ui/Reveal";

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 sm:py-24 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Academic & Professional"
            title="Education & Certifications"
            description="Engineering background with technical problem-solving foundation combined with direct digital media certifications."
          />
        </Reveal>

        <div className="space-y-6">
          {/* Degree Card */}
          <Reveal delay={0.1}>
            <div className="bg-surface rounded-card p-6 sm:p-8 border border-border shadow-soft flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-ink">
                    {education.degree}
                  </h3>
                  <div className="flex items-center gap-1.5 text-sm text-inkMuted mt-1">
                    <Building2 className="w-4 h-4 text-primary shrink-0" />
                    <span>{education.institution}</span>
                  </div>
                </div>
              </div>

              <div className="sm:text-right shrink-0">
                <span className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-full bg-surfaceSoft border border-border text-ink">
                  <Calendar className="w-3.5 h-3.5 text-primary" />
                  Graduating {education.graduationYear}
                </span>
              </div>
            </div>
          </Reveal>

          {/* Certifications Card */}
          <Reveal delay={0.2}>
            <div className="bg-surface rounded-card p-6 sm:p-8 border border-border shadow-soft">
              <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-border/70">
                <Award className="w-5 h-5 text-accent" />
                <h3 className="font-heading font-bold text-lg text-ink">
                  Certifications
                </h3>
              </div>

              <p className="text-xs text-inkMuted mb-4 italic">
                {education.certificationsPlaceholder}
              </p>

              <div className="flex flex-wrap gap-2.5">
                {education.certifications.map((cert, cIdx) => (
                  <Chip
                    key={cIdx}
                    variant="soft"
                    size="md"
                    className="text-xs sm:text-sm font-medium"
                  >
                    {cert}
                  </Chip>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

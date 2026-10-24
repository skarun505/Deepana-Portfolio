import React from "react";
import { Monitor, Compass, LineChart, FileSpreadsheet, Wrench } from "lucide-react";
import { skills } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Chip } from "@/components/ui/Chip";
import { Reveal } from "@/components/ui/Reveal";

const categoryIcons: Record<string, React.ReactNode> = {
  Platforms: <Monitor className="w-4 h-4 text-primary" />,
  Strategy: <Compass className="w-4 h-4 text-primary" />,
  Analytics: <LineChart className="w-4 h-4 text-primary" />,
  Reporting: <FileSpreadsheet className="w-4 h-4 text-primary" />,
  Tools: <Wrench className="w-4 h-4 text-primary" />,
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 sm:py-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Core Competencies"
            title="Skills & Tooling"
            description="Hands-on experience managing paid traffic, analytical tracking, and multi-channel creative strategies."
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, index) => (
            <Reveal key={category.category} delay={index * 0.08}>
              <div className="bg-surface rounded-card p-6 border border-border shadow-soft hover:shadow-hover transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-border/70">
                  <div className="w-8 h-8 rounded-full bg-surfaceSoft flex items-center justify-center shrink-0">
                    {categoryIcons[category.category] || (
                      <Monitor className="w-4 h-4 text-primary" />
                    )}
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-ink">
                    {category.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {category.skills.map((skill, sIdx) => {
                    const isPlatform = category.category === "Platforms";
                    return (
                      <Chip
                        key={sIdx}
                        variant={isPlatform ? "soft" : "default"}
                        size="md"
                        className={isPlatform ? "font-semibold" : ""}
                      >
                        {skill}
                      </Chip>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

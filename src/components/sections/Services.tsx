import React from "react";
import {
  Sliders,
  Split,
  TrendingUp,
  Activity,
  BarChart3,
  Layout,
} from "lucide-react";
import { services } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const iconMap: Record<string, React.ReactNode> = {
  Sliders: <Sliders className="w-5 h-5 text-primary" />,
  Split: <Split className="w-5 h-5 text-primary" />,
  TrendingUp: <TrendingUp className="w-5 h-5 text-primary" />,
  Activity: <Activity className="w-5 h-5 text-primary" />,
  BarChart3: <BarChart3 className="w-5 h-5 text-primary" />,
  Layout: <Layout className="w-5 h-5 text-primary" />,
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 sm:py-24 bg-surfaceSoft/30 border-y border-border/60 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Capabilities"
            title="What I Can Do For You"
            description="From technical tracking foundations to high-velocity creative testing and scalable media spend."
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, index) => (
            <Reveal key={svc.title} delay={index * 0.07}>
              <div className="bg-surface rounded-card p-6 border border-border shadow-soft hover:shadow-hover hover:border-primary/40 transition-all duration-300 flex flex-col justify-between h-full">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-surfaceSoft border border-border flex items-center justify-center mb-4">
                    {iconMap[svc.iconName] || (
                      <Sliders className="w-5 h-5 text-primary" />
                    )}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-ink mb-2">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-inkMuted leading-relaxed">
                    {svc.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

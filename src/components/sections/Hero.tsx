import React from "react";
import Image from "next/image";
import { Download, MessageCircle, Sparkles } from "lucide-react";
import { hero } from "@/data/content";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 lg:py-0 lg:min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Subtle background glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 lg:py-16">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            <Reveal delay={0.1}>
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surfaceSoft border border-border text-xs sm:text-sm font-semibold text-primary mb-4 sm:mb-6">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                <span>{hero.eyebrow}</span>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              {/* Headline */}
              <h1 className="font-heading font-bold text-[34px] leading-[1.15] sm:text-5xl md:text-6xl text-ink tracking-tight mb-4 sm:mb-6">
                {hero.headline}
              </h1>
            </Reveal>

            <Reveal delay={0.3}>
              {/* Subline */}
              <p className="text-base sm:text-lg md:text-xl text-inkMuted leading-relaxed max-w-2xl mb-6 sm:mb-8 font-normal">
                {hero.subline}
              </p>
            </Reveal>

            <Reveal delay={0.4} className="w-full">
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 w-full sm:w-auto">
                <Button
                  href={hero.primaryCta.href}
                  download="Deepana_Chandrasekar_Resume.pdf"
                  variant="primary"
                  size="md"
                  fullWidth
                  icon={<Download className="w-4 h-4" />}
                  iconPosition="left"
                  className="sm:w-auto"
                >
                  {hero.primaryCta.label}
                </Button>

                <Button
                  href={hero.secondaryCta.href}
                  variant="secondary"
                  size="md"
                  fullWidth
                  icon={<MessageCircle className="w-4 h-4" />}
                  iconPosition="left"
                  className="sm:w-auto"
                >
                  {hero.secondaryCta.label}
                </Button>
              </div>
            </Reveal>

            {/* Quick stats pills */}
            <Reveal delay={0.5} className="w-full">
              <div className="mt-8 pt-6 border-t border-border/80 flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 text-xs sm:text-sm text-inkMuted">
                {hero.quickStats.map((item, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface border border-border/80 font-medium text-ink shadow-xs"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right Column (Top on mobile): Profile Image */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <Reveal delay={0.2} duration={0.6}>
              <div className="relative">
                {/* Decorative border circle */}
                <div className="relative w-40 h-40 sm:w-60 sm:h-60 lg:w-72 lg:h-72 rounded-full p-2 bg-gradient-to-tr from-primary/30 via-surface to-accent/30 shadow-soft">
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-surfaceSoft border-2 border-white shadow-inner">
                    <Image
                      src="/images/profile.webp"
                      alt="Deepana Chandrasekar - Performance Marketer"
                      fill
                      priority
                      sizes="(max-width: 640px) 160px, (max-width: 1024px) 240px, 288px"
                      className="object-cover object-top"
                    />
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-2 -right-2 sm:bottom-2 sm:right-0 bg-surface border border-border rounded-full py-1.5 px-3 shadow-soft flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-success animate-pulse" />
                  <span className="text-xs font-semibold text-ink">
                    Open to roles
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

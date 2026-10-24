import React from "react";
import {
  Mail,
  MessageCircle,
  FileText,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { contact } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const LinkedInIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-surfaceSoft/50 border-t border-border/70 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-border text-xs sm:text-sm font-semibold text-primary mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span>Ready for Immediate Opportunity</span>
          </div>
          <SectionHeading
            align="center"
            title="Let's Build Growth Together"
            description="Open to Junior Performance Marketer and Paid Media Executive roles. Reach out directly via WhatsApp, Email, or LinkedIn."
            className="mb-8 sm:mb-12"
          />
        </Reveal>

        {/* 3 Large Action Cards / Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {/* WhatsApp Card */}
          <Reveal delay={0.1}>
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-surface rounded-card p-6 border border-border shadow-soft hover:shadow-hover hover:border-primary transition-all duration-300 flex flex-col items-center justify-center min-h-[140px] text-center"
            >
              <div className="w-12 h-12 rounded-full bg-success/10 text-success flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-base text-ink flex items-center gap-1 group-hover:text-primary transition-colors">
                <span>WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 text-inkMuted group-hover:text-primary" />
              </h3>
              <p className="text-xs text-inkMuted mt-1">Instant chat & responses</p>
              <span className="text-xs font-semibold text-primary mt-2">
                {contact.phoneDisplay}
              </span>
            </a>
          </Reveal>

          {/* Email Card */}
          <Reveal delay={0.2}>
            <a
              href={`mailto:${contact.email}`}
              className="group bg-surface rounded-card p-6 border border-border shadow-soft hover:shadow-hover hover:border-primary transition-all duration-300 flex flex-col items-center justify-center min-h-[140px] text-center"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-base text-ink flex items-center gap-1 group-hover:text-primary transition-colors">
                <span>Email</span>
                <ArrowUpRight className="w-4 h-4 text-inkMuted group-hover:text-primary" />
              </h3>
              <p className="text-xs text-inkMuted mt-1">Direct job enquiries</p>
              <span className="text-xs font-semibold text-primary mt-2 break-all">
                {contact.email}
              </span>
            </a>
          </Reveal>

          {/* LinkedIn Card */}
          <Reveal delay={0.3}>
            <a
              href={contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-surface rounded-card p-6 border border-border shadow-soft hover:shadow-hover hover:border-primary transition-all duration-300 flex flex-col items-center justify-center min-h-[140px] text-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <LinkedInIcon className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-base text-ink flex items-center gap-1 group-hover:text-primary transition-colors">
                <span>LinkedIn</span>
                <ArrowUpRight className="w-4 h-4 text-inkMuted group-hover:text-primary" />
              </h3>
              <p className="text-xs text-inkMuted mt-1">Connect professionally</p>
              <span className="text-xs font-semibold text-primary mt-2">
                Deepana Chandrasekar
              </span>
            </a>
          </Reveal>
        </div>

        {/* Primary Download Resume Banner */}
        <Reveal delay={0.4}>
          <div className="bg-surface rounded-card p-6 sm:p-8 border border-border shadow-soft flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-lg text-ink">
                  Detailed Resume (PDF)
                </h4>
                <p className="text-xs sm:text-sm text-inkMuted mt-0.5">
                  Complete breakdown of campaigns, budgets, and technical tools.
                </p>
              </div>
            </div>

            <a
              href={contact.resumeUrl}
              download="Deepana_Chandrasekar_Resume.pdf"
              className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-accent text-white font-medium text-base shadow-sm hover:bg-[#F25A37] active:scale-[0.98] transition-all text-center select-none"
            >
              <FileText className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

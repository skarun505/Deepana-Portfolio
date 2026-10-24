import React from "react";
import { FileText, MessageCircle } from "lucide-react";
import { contact } from "@/data/content";

export const MobileActionBar: React.FC = () => {
  return (
    <aside
      aria-label="Quick contact actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-surface/95 backdrop-blur-md border-t border-border px-4 py-2.5 pb-[calc(0.65rem+env(safe-area-inset-bottom))] shadow-[0_-4px_16px_rgba(20,20,43,0.08)]"
    >
      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
        {/* Resume Button */}
        <a
          href={contact.resumeUrl}
          download="Deepana_Chandrasekar_Resume.pdf"
          className="min-h-[44px] flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-accent text-white font-medium text-sm shadow-sm hover:bg-[#F25A37] active:scale-[0.98] transition-all text-center select-none"
        >
          <FileText className="w-4 h-4 shrink-0" />
          <span>Resume</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-[44px] flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border-2 border-primary text-primary bg-surface font-medium text-sm hover:bg-primary/5 active:scale-[0.98] transition-all text-center select-none"
        >
          <MessageCircle className="w-4 h-4 shrink-0" />
          <span>WhatsApp</span>
        </a>
      </div>
    </aside>
  );
};

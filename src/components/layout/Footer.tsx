import React from "react";
import { contact } from "@/data/content";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border bg-surface py-8 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-primary/10 text-primary font-bold text-xs flex items-center justify-center">
            DC
          </span>
          <p className="text-sm text-inkMuted">
            © 2026 Deepana Chandrasekar. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6 text-sm">
          <a
            href={contact.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-inkMuted hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="text-inkMuted hover:text-primary transition-colors"
          >
            Email
          </a>
          <a
            href={contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-inkMuted hover:text-primary transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
};

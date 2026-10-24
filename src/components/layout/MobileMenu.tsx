"use client";

import React, { useEffect, useRef } from "react";
import { X, FileText, MessageCircle, ArrowRight } from "lucide-react";
import { contact } from "@/data/content";
import { Button } from "@/components/ui/Button";

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { label: string; href: string }[];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  navLinks,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);

  // Close on Escape & trap focus
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
      if (e.key === "Tab" && menuRef.current) {
        const focusables = menuRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          last.focus();
          e.preventDefault();
        } else if (!e.shiftKey && document.activeElement === last) {
          first.focus();
          e.preventDefault();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    // Lock body scroll
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={menuRef}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      className="fixed inset-0 z-50 bg-surface/98 backdrop-blur-xl flex flex-col justify-between p-6 sm:p-8 animate-in fade-in duration-200"
    >
      {/* Header with Close */}
      <div className="flex items-center justify-between">
        <a
          href="#"
          onClick={onClose}
          className="font-heading font-bold text-xl text-ink tracking-tight flex items-center gap-2"
        >
          <span className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
            DC
          </span>
          <span>Deepana C.</span>
        </a>

        <button
          onClick={onClose}
          aria-label="Close menu"
          className="w-11 h-11 flex items-center justify-center rounded-full bg-surfaceSoft text-ink hover:bg-border transition-colors min-h-[44px] min-w-[44px]"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Nav Links */}
      <nav className="my-auto flex flex-col gap-5">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="group flex items-center justify-between text-2xl font-heading font-semibold text-ink hover:text-primary transition-colors py-2"
          >
            <span>{link.label}</span>
            <ArrowRight className="w-5 h-5 text-inkMuted group-hover:text-primary group-hover:translate-x-1 transition-all" />
          </a>
        ))}
      </nav>

      {/* Bottom Actions */}
      <div className="flex flex-col gap-3 pt-6 border-t border-border">
        <Button
          href={contact.resumeUrl}
          download="Deepana_Chandrasekar_Resume.pdf"
          variant="primary"
          fullWidth
          icon={<FileText className="w-4 h-4" />}
          iconPosition="left"
          onClick={onClose}
        >
          Download Resume
        </Button>
        <Button
          href={contact.whatsappUrl}
          variant="secondary"
          fullWidth
          icon={<MessageCircle className="w-4 h-4" />}
          iconPosition="left"
          onClick={onClose}
        >
          Chat on WhatsApp
        </Button>
      </div>
    </div>
  );
};

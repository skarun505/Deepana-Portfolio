"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, FileText } from "lucide-react";
import { MobileMenu } from "./MobileMenu";
import { contact } from "@/data/content";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-surface/90 backdrop-blur-md shadow-sm border-b border-border/70 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo "DC" */}
          <Link
            href="#"
            className="group flex items-center gap-2.5 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full px-1"
          >
            <div className="w-10 h-10 rounded-full bg-primary text-white font-heading font-bold text-sm flex items-center justify-center shadow-sm group-hover:bg-primaryDark transition-colors">
              DC
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-base tracking-tight text-ink group-hover:text-primary transition-colors">
                Deepana C.
              </span>
              <span className="text-[11px] font-medium text-inkMuted tracking-wide">
                Performance Marketer
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-inkMuted hover:text-primary transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              href={contact.resumeUrl}
              download="Deepana_Chandrasekar_Resume.pdf"
              variant="primary"
              size="sm"
              icon={<FileText className="w-4 h-4" />}
              iconPosition="left"
            >
              Resume
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open navigation menu"
            className="md:hidden w-11 h-11 flex items-center justify-center rounded-full bg-surfaceSoft border border-border/60 text-ink hover:text-primary hover:bg-border transition-colors min-h-[44px] min-w-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Full-screen Mobile Menu Sheet */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
};

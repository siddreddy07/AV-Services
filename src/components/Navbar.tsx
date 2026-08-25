import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Instagram, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Services', href: '#services', number: '01' },
    { label: 'Residential & Commercial', href: '#residential-commercial', number: '02' },
    { label: 'Selected Work', href: '#work', number: '03' },
    { label: 'Coverage Areas', href: '#areas', number: '04' },
  ];

  return (
    <>
      <header
        className={`fixed top-3 sm:top-5 left-0 right-0 z-50 w-[calc(100%-24px)] sm:w-[calc(100%-48px)] max-w-[1400px] mx-auto rounded-[10px] sm:rounded-[12px] border border-[#E2E4E8] transition-all duration-300 ease-out ${
          scrolled
            ? 'bg-[#FFFFFF]/98 backdrop-blur-md shadow-[0_4px_24px_rgba(18,19,22,0.08)] py-2.5 sm:py-2.5 px-4 sm:px-6'
            : 'bg-[#FFFFFF]/94 backdrop-blur-md shadow-[0_2px_14px_rgba(18,19,22,0.04)] py-3 sm:py-3.5 px-4 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Wordmark */}
          <a
            href="#"
            className="flex items-center gap-2.5 sm:gap-3.5 group text-[#121316] no-underline select-none"
            aria-label="AV Services Home"
          >
            {/* Logo Image without border */}
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-[6px] overflow-hidden shrink-0">
              <img
                src="/logo.jpg"
                alt="AV Services Logo"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>

            {/* Wordmark + Tagline */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2 leading-none">
                <span className="font-bold text-sm sm:text-base tracking-tight text-[#121316]">
                  AV SERVICES
                </span>
              </div>
              <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.16em] uppercase text-[#C31F21] mt-0.5 leading-none font-bold">
                PRESSURE WASH & RESTORATION
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-micro-link text-xs lg:text-sm"
              >
                <span className="nav-text">{link.label}</span>
              </a>
            ))}
          </nav>

          {/* Desktop Right Action Area */}
          <div className="hidden md:flex items-center gap-3">
            {/* Instagram Link with Handle */}
            <a
              href="https://instagram.com/avpressurewash"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-[4px] border border-[#E2E4E8] bg-[#FFFFFF] text-[#58585A] hover:text-[#C31F21] hover:border-[#C31F21] transition-all text-xs font-mono shadow-2xs group"
              aria-label="Follow on Instagram"
            >
              <Instagram className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" strokeWidth={2} />
              <span className="hidden lg:inline">@avpressurewash</span>
            </a>

            {/* Primary Quote CTA Button */}
            <button
              type="button"
              onClick={onOpenQuote}
              className="btn-brand-primary px-4 py-2 text-xs font-semibold tracking-wider uppercase shadow-xs"
            >
              <span>Get Estimate</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1 cta-arrow" strokeWidth={2} />
            </button>
          </div>

          {/* Mobile Right Control: Ultra-Clean Menu Toggle Only (No duplicate buttons) */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 sm:px-3 sm:py-1.5 rounded-[4px] border border-[#E2E4E8] bg-[#FFFFFF] text-[#121316] hover:border-[#C31F21] transition-colors flex items-center gap-1.5 text-xs font-mono font-medium shadow-2xs active:scale-95"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <>
                  <X className="w-4 h-4 text-[#C31F21]" strokeWidth={2.5} />
                  <span>CLOSE</span>
                </>
              ) : (
                <>
                  <Menu className="w-4 h-4 text-[#121316]" strokeWidth={2} />
                  <span>MENU</span>
                </>
              )}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#121316]/60 backdrop-blur-xs md:hidden animate-in fade-in duration-200"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed top-18 left-3 right-3 bg-[#FFFFFF] border border-[#E2E4E8] rounded-[12px] shadow-2xl p-5 sm:p-6 animate-in slide-in-from-top-3 duration-250 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header info in panel */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E2E4E8]">
              <span className="font-mono text-[11px] text-[#58585A] uppercase tracking-widest font-medium">
                Menu & Directory
              </span>
              <span className="font-mono text-[11px] text-[#C31F21] font-bold">
                Houston · Katy, TX
              </span>
            </div>

            {/* Navigation links */}
            <nav className="flex flex-col space-y-2 mb-5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-2.5 rounded-[4px] bg-[#F4F5F7] hover:bg-[#121316] text-[#121316] hover:text-[#FFFFFF] transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-[11px] font-bold text-[#C31F21] group-hover:text-[#FFFFFF]">
                      {link.number}
                    </span>
                    <span className="text-sm font-medium">
                      {link.label}
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#58585A] group-hover:text-[#FFFFFF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              ))}
            </nav>

            {/* Quick Contact & Instagram in Drawer */}
            <div className="pt-3 border-t border-[#E2E4E8] space-y-2.5">
              <a
                href="https://instagram.com/avpressurewash"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-[4px] border border-[#E2E4E8] text-xs font-mono text-[#58585A] hover:text-[#C31F21] hover:border-[#C31F21] transition-colors"
              >
                <span className="inline-flex items-center gap-2">
                  <Instagram className="w-4 h-4 text-[#C31F21]" />
                  <span>@avpressurewash on Instagram</span>
                </span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full btn-brand-primary py-3 text-xs uppercase tracking-wider font-semibold"
              >
                <span>Jump to Estimate Form</span>
                <ArrowUpRight className="w-4 h-4 ml-1 cta-arrow" strokeWidth={2} />
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

import React, { useState, useEffect, useCallback } from 'react';
import { ArrowUpRight, Instagram, X, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenQuote: () => void;
}

const NAV_LINKS = [
  { label: 'Services', href: '#services', sectionId: 'services' },
  { label: 'Residential & Commercial', href: '#residential-commercial', sectionId: 'residential-commercial' },
  { label: 'Selected Work', href: '#selected-work', sectionId: 'selected-work' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.sectionId);

    const getAbsoluteTop = (el: HTMLElement): number => {
      let top = 0;
      let cur: HTMLElement | null = el;
      while (cur) {
        top += cur.offsetTop;
        cur = cur.offsetParent as HTMLElement | null;
      }
      return top;
    };

    const onScroll = () => {
      const scrollPos = window.scrollY + 200;
      const docHeight = document.documentElement.scrollHeight;
      const atBottom = window.scrollY + window.innerHeight >= docHeight - 100;

      if (atBottom) {
        setActiveSection(ids[ids.length - 1]);
        return;
      }

      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (getAbsoluteTop(el) <= scrollPos) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const closeMobile = useCallback(() => setMobileMenuOpen(false), []);

  const scrollToHref = useCallback((href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
        {/* Accent line when scrolled */}
        <div
          className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C31F21] to-transparent transition-opacity duration-500 ${
            scrolled ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <div
          className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            scrolled
              ? 'mx-auto max-w-[1400px] w-[calc(100%-24px)] sm:w-[calc(100%-40px)] mt-3 sm:mt-4 rounded-[14px] sm:rounded-[16px] bg-[#FFFFFF]/95 backdrop-blur-xl shadow-[0_8px_40px_rgba(18,19,22,0.06),0_1px_3px_rgba(18,19,22,0.04)] px-4 sm:px-5 lg:px-6 py-2.5 sm:py-2.5'
              : 'mx-0 px-5 sm:px-8 lg:px-12 py-4 sm:py-5 bg-transparent'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Brand */}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="flex items-center gap-2.5 sm:gap-3 group text-[#121316] no-underline select-none relative z-10"
              aria-label="AV Services Home"
            >
              <div className={`relative overflow-hidden shrink-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                scrolled ? 'w-8 h-8 sm:w-8 sm:h-8 rounded-[7px]' : 'w-9 h-9 sm:w-10 sm:h-10 rounded-[8px]'
              }`}>
                <img
                  src={`${import.meta.env.BASE_URL}logo.jpg`}
                  alt="AV Services Logo"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/[0.06] rounded-[inherit] pointer-events-none" />
              </div>

              <div className="flex flex-col">
                <span className={`font-bold tracking-[-0.02em] text-[#121316] leading-none transition-all duration-500 ${
                  scrolled ? 'text-[13px] sm:text-sm' : 'text-sm sm:text-[15px]'
                }`}>
                  AV SERVICES
                </span>
                <span className={`font-mono uppercase font-semibold text-[#C31F21] leading-none transition-all duration-500 ${
                  scrolled ? 'text-[7px] sm:text-[8px] tracking-[0.2em] mt-[3px]' : 'text-[8px] sm:text-[9px] tracking-[0.18em] mt-1'
                }`}>
                  PRESSURE WASH & RESTORATION
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center">
              <div className="flex items-center gap-0.5 bg-[#F4F5F7]/60 rounded-full px-1 py-1">
                {NAV_LINKS.map((link) => {
                  const isActive = activeSection === link.sectionId;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); scrollToHref(link.href); }}
                      className={`relative px-3.5 xl:px-4 py-[7px] rounded-full text-[13px] font-medium transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isActive
                          ? 'text-[#121316] bg-[#FFFFFF] shadow-[0_1px_4px_rgba(18,19,22,0.06)]'
                          : 'text-[#58585A] hover:text-[#121316] hover:bg-[#FFFFFF]/60'
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <span className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-4 h-[2px] rounded-full bg-[#C31F21]" />
                      )}
                    </a>
                  );
                })}
              </div>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-2.5">
              <a
                href="https://instagram.com/avpressurewash"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center text-[#58585A] hover:text-[#C31F21] hover:bg-[#C31F21]/[0.04] transition-all duration-300"
                aria-label="Follow on Instagram"
              >
                <Instagram className="w-4 h-4" strokeWidth={1.75} />
              </a>

              <button
                type="button"
                onClick={onOpenQuote}
                className="inline-flex items-center gap-2 px-5 py-[9px] bg-[#121316] hover:bg-[#C31F21] text-[#FFFFFF] rounded-full text-[13px] font-semibold tracking-wide transition-all duration-300 shadow-[0_2px_8px_rgba(18,19,22,0.12)] hover:shadow-[0_4px_16px_rgba(195,31,33,0.3)] hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Get Estimate</span>
                <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2.5} />
              </button>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="relative w-10 h-10 rounded-full bg-[#121316] text-[#FFFFFF] flex items-center justify-center transition-all duration-300 hover:bg-[#C31F21] active:scale-95 shadow-[0_2px_8px_rgba(18,19,22,0.15)]"
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
              >
                <div className="relative w-4 h-4">
                  <span className={`absolute inset-0 h-[1.5px] bg-current rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${mobileMenuOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-[3px]'}`} />
                  <span className={`absolute inset-0 h-[1.5px] bg-current rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${mobileMenuOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-[3px]'}`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className={`absolute inset-0 bg-[#121316]/40 backdrop-blur-sm transition-opacity duration-500 ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeMobile}
        />

        <div
          className={`absolute top-0 right-0 bottom-0 w-full max-w-[380px] bg-[#FFFFFF] shadow-[-20px_0_60px_rgba(18,19,22,0.15)] flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between px-6 pt-6 pb-5 border-b border-[#E2E4E8]">
            <div className="flex items-center gap-2.5">
              <img src={`${import.meta.env.BASE_URL}logo.jpg`} alt="" className="w-8 h-8 rounded-[6px] object-cover" />
              <div>
                <span className="text-[13px] font-bold text-[#121316] tracking-tight block leading-none">AV SERVICES</span>
                <span className="font-mono text-[7px] tracking-[0.2em] uppercase text-[#C31F21] font-bold leading-none mt-[2px] block">MENU</span>
              </div>
            </div>
            <button
              type="button"
              onClick={closeMobile}
              className="w-10 h-10 rounded-full bg-[#F4F5F7] flex items-center justify-center text-[#58585A] hover:text-[#C31F21] transition-all duration-300 active:scale-95"
              aria-label="Close menu"
            >
              <X className="w-4 h-4" strokeWidth={2} />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex-1 overflow-y-auto px-5 py-6">
            <div className="space-y-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    closeMobile();
                    setTimeout(() => scrollToHref(link.href), 300);
                  }}
                  className="group flex items-center gap-4 px-4 py-3.5 rounded-[10px] hover:bg-[#F4F5F7] transition-all duration-300"
                >
                  <span className="w-8 h-8 rounded-full bg-[#F4F5F7] group-hover:bg-[#C31F21] flex items-center justify-center text-[10px] font-mono font-bold text-[#C31F21] group-hover:text-[#FFFFFF] transition-all duration-300 border border-[#E2E4E8] group-hover:border-[#C31F21] shrink-0">
                    {NAV_LINKS.indexOf(link) + 1 < 10 ? `0${NAV_LINKS.indexOf(link) + 1}` : NAV_LINKS.indexOf(link) + 1}
                  </span>
                  <div className="flex-1">
                    <span className="text-[15px] font-medium text-[#121316] group-hover:text-[#C31F21] transition-colors duration-200">
                      {link.label}
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#C31F21]/0 group-hover:text-[#C31F21]/60 transition-all duration-300 group-hover:translate-x-0.5" />
                </a>
              ))}
            </div>

            {/* Instagram Link */}
            <div className="mt-6 pt-5 border-t border-[#E2E4E8]">
              <a
                href="https://instagram.com/avpressurewash"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobile}
                className="group flex items-center gap-3 px-4 py-3 rounded-[10px] hover:bg-[#F4F5F7] transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C31F21] to-[#E4484A] flex items-center justify-center">
                  <Instagram className="w-4 h-4 text-[#FFFFFF]" strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <span className="text-[13px] font-medium text-[#121316] block">Follow @avpressurewash</span>
                  <span className="text-[11px] font-mono text-[#58585A]">Daily transformations</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#58585A] group-hover:text-[#C31F21] transition-colors" />
              </a>
            </div>
          </nav>

          {/* Drawer Footer */}
          <div className="px-5 pb-6 pt-4 border-t border-[#E2E4E8] bg-[#FAFAFA]/50">
            <button
              type="button"
              onClick={() => {
                closeMobile();
                setTimeout(onOpenQuote, 300);
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#121316] hover:bg-[#C31F21] text-[#FFFFFF] rounded-full text-[13px] font-semibold tracking-wide transition-all duration-300 shadow-[0_2px_12px_rgba(18,19,22,0.12)] hover:shadow-[0_4px_20px_rgba(195,31,33,0.3)] active:scale-[0.98]"
            >
              <span>Request Free Estimate</span>
              <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
            </button>
            <p className="text-center text-[11px] font-mono text-[#A0A2A8] mt-3 tracking-wide">
              Houston & Katy, TX
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

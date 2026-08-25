import React from 'react';
import { ArrowUp, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#1C1E24] py-12 sm:py-16 bg-[#121316] text-[#A0A2A8] text-xs sm:text-sm">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2.5 mb-1.5">
              <img
                src="/logo.jpg"
                alt="AV Services Logo"
                className="w-7 h-7 object-contain rounded-[2px]"
              />
              <span className="text-base sm:text-lg font-bold text-[#FFFFFF] tracking-tight">
                AV SERVICES
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#A0A2A8]">
              Exterior pressure washing & soft wash restoration for Houston and Katy.
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-5 sm:gap-8 text-xs sm:text-sm font-medium">
            <a href="#services" className="hover:text-[#C31F21] transition-colors">
              Services
            </a>
            <a href="#work" className="hover:text-[#C31F21] transition-colors">
              Transformation
            </a>
            <a href="#residential-commercial" className="hover:text-[#C31F21] transition-colors">
              Residential & Commercial
            </a>
            <a href="#areas" className="hover:text-[#C31F21] transition-colors">
              Service Areas
            </a>
            <a
              href="https://instagram.com/avpressurewash"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#C31F21] hover:text-[#FFFFFF] transition-colors"
            >
              <Instagram className="w-4 h-4" />
              <span>@avpressurewash</span>
            </a>
          </nav>
        </div>

        <div className="border-t border-[#FFFFFF]/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-[#A0A2A8]/70">
          <p>© {new Date().getFullYear()} AV Services. All rights reserved. Houston & Katy, TX.</p>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 text-[#C31F21] hover:text-[#FFFFFF] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

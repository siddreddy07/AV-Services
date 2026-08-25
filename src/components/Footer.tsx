import React from 'react';
import { ArrowUp, ArrowUpRight, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#121316] text-[#A0A2A8] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16 pt-20 sm:pt-28 lg:pt-36 pb-8 sm:pb-10">

        {/* Brand */}
        <div className="mb-12 sm:mb-14 lg:mb-16">
          <div className="flex items-center gap-3 mb-5 sm:mb-6">
            <img src={`${import.meta.env.BASE_URL}logo.jpg`} alt="AV Services" className="w-12 h-12 sm:w-14 sm:h-14 object-cover rounded-[8px]" />
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold text-[#FFFFFF] tracking-tight leading-none">AV SERVICES</span>
              <span className="font-mono text-[8px] sm:text-[9px] tracking-[0.2em] uppercase text-[#C31F21] font-bold mt-[3px] leading-none">
                PRESSURE WASH & RESTORATION
              </span>
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#FFFFFF] leading-[1.1] tracking-[-0.02em] max-w-lg">
            A cleaner property<br />
            <span className="text-[#C31F21]">changes everything.</span>
          </h2>
        </div>

        {/* Social */}
        <div className="mb-12 sm:mb-14">
          <a
            href="https://instagram.com/avpressurewash"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full border border-[#FFFFFF]/[0.1] group-hover:border-[#C31F21]/40 flex items-center justify-center transition-all duration-300 group-hover:bg-[#C31F21]/[0.06]">
              <Instagram className="w-4 h-4 text-[#58585A] group-hover:text-[#C31F21] transition-colors" strokeWidth={1.75} />
            </div>
            <span className="text-sm text-[#58585A] group-hover:text-[#C31F21] transition-colors">@avpressurewash</span>
          </a>
        </div>

        {/* CTA */}
        <div className="mb-14 sm:mb-16">
          <a
            href="#quote"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#C31F21] hover:bg-[#FFFFFF] text-[#FFFFFF] hover:text-[#121316] rounded-full text-[13px] font-semibold uppercase tracking-wider transition-all duration-300 shadow-[0_2px_20px_rgba(195,31,33,0.25)] hover:shadow-none"
          >
            Get a Free Estimate
            <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#FFFFFF]/[0.06] flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-[11px] text-[#58585A]/60">
            <span>&copy; {new Date().getFullYear()} AV Services</span>
            <span className="text-[#FFFFFF]/10">·</span>
            <span>All rights reserved</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 text-[11px] font-mono text-[#58585A] hover:text-[#C31F21] transition-colors duration-200 cursor-pointer"
          >
            <span className="uppercase tracking-widest">Back to top</span>
            <div className="w-7 h-7 rounded-full border border-[#FFFFFF]/[0.08] group-hover:border-[#C31F21]/30 flex items-center justify-center transition-all duration-200">
              <ArrowUp className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" strokeWidth={2} />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
};

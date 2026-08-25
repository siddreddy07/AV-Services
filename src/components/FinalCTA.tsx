import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FinalCTAProps {
  onOpenQuote: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenQuote }) => {
  return (
    <section className="py-14 sm:py-20 lg:py-24 border-t border-[#E2E4E8] bg-[#F4F5F7]">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16">
        
        {/* Full-Width Transformation Photograph */}
        <div className="w-full aspect-[16/9] sm:aspect-[21/9] max-h-[520px] overflow-hidden rounded-[4px] border border-[#E2E4E8] mb-8 sm:mb-12 bg-[#FFFFFF] shadow-xs">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2200&q=90"
            alt="Pristine residential estate, clean concrete approach and immaculate perimeter"
            className="w-full h-full object-cover object-center"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Headline & Actions */}
        <div className="max-w-3xl">
          <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-[#58585A] uppercase inline-flex items-center gap-2 mb-2 sm:mb-3">
            <span className="text-[#FFFFFF] bg-[#C31F21] px-1.5 py-0.5 rounded-[2px] font-bold text-xs">
              10
            </span>
            <span>/ Next Step</span>
          </span>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium text-[#121316] leading-[1.08] tracking-tight mb-6">
            Your property could<br />
            <span className="text-[#C31F21]">look different tomorrow.</span>
          </h2>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <button
              type="button"
              onClick={onOpenQuote}
              className="btn-forest-primary px-6 sm:px-8 py-3.5 text-sm sm:text-[15px]"
            >
              <span>Request an Estimate</span>
              <ArrowUpRight className="w-4 h-4 ml-2 cta-arrow" strokeWidth={2} />
            </button>

            <a
              href="https://instagram.com/avpressurewash"
              target="_blank"
              rel="noopener noreferrer"
              className="clean-secondary-link text-sm sm:text-[15px] text-[#121316] hover:text-[#C31F21] font-semibold"
            >
              <span>Follow @avpressurewash on Instagram</span>
              <ArrowUpRight className="w-4 h-4 arrow-icon text-[#C31F21]" strokeWidth={2} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

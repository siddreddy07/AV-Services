import React from 'react';

export const BusinessProof: React.FC = () => {
  return (
    <section id="what-we-do" className="py-12 sm:py-16 lg:py-20 border-t border-[#E2E4E8] bg-[#FFFFFF]">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16">
        
        {/* Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-10 sm:mb-12">
          
          {/* Left Column: Numbered Category Label with Crimson Accent */}
          <div className="lg:col-span-4">
            <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-[#58585A] uppercase inline-flex items-center gap-2">
              <span className="text-[#FFFFFF] bg-[#C31F21] px-1.5 py-0.5 rounded-[2px] font-bold text-xs">
                01
              </span>
              <span>/ What we do</span>
            </span>
          </div>

          {/* Right Column: Large Confident Statement & Narrow Supporting Context */}
          <div className="lg:col-span-8">
            <h2 className="text-2xl sm:text-4xl lg:text-[46px] font-medium text-[#121316] leading-[1.12] tracking-tight mb-4 sm:mb-6">
              We remove the years<br />
              your property has collected.
            </h2>

            <p className="text-base sm:text-lg text-[#58585A] leading-relaxed max-w-xl font-normal">
              Driveways, siding, patios, fences, and exterior surfaces professionally cleaned throughout Houston and Katy.
            </p>
          </div>

        </div>

        {/* 4-Item Proof Bar with Thin Dividers & Red Accents */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-[#E2E4E8]">
          <div className="space-y-1">
            <p className="font-mono text-[11px] sm:text-xs text-[#58585A] uppercase tracking-wider">Coverage</p>
            <p className="text-sm sm:text-base font-semibold text-[#121316] tracking-tight">Houston + Katy</p>
          </div>

          <div className="space-y-1">
            <p className="font-mono text-[11px] sm:text-xs text-[#58585A] uppercase tracking-wider">Scope</p>
            <p className="text-sm sm:text-base font-semibold text-[#121316] tracking-tight">Residential + Commercial</p>
          </div>

          <div className="space-y-1">
            <p className="font-mono text-[11px] sm:text-xs text-[#58585A] uppercase tracking-wider">Operations</p>
            <p className="text-sm sm:text-base font-semibold text-[#121316] tracking-tight">Fully Mobile Setup</p>
          </div>

          <div className="space-y-1">
            <p className="font-mono text-[11px] sm:text-xs text-[#58585A] uppercase tracking-wider">Equipment</p>
            <p className="text-sm sm:text-base font-semibold text-[#C31F21] tracking-tight">Commercial Rotary Rig</p>
          </div>
        </div>

      </div>
    </section>
  );
};

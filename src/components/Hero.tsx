import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';

interface HeroProps {
  onOpenQuote: () => void;
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote, onExploreWork }) => {
  // Clean line sweep progress (0% = dirty/before, 100% = clean/after)
  const [wipeProgress, setWipeProgress] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const heroImageRef = useRef<HTMLDivElement>(null);

  // Trigger the clean line wipe smoothly once on load / initial scroll
  useEffect(() => {
    const timer = setTimeout(() => {
      let start: number | null = null;
      const duration = 1400; // 1.4s smooth sweep

      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const elapsed = timestamp - start;
        const progress = Math.min(1, elapsed / duration);
        // easeOutCubic
        const ease = 1 - Math.pow(1 - progress, 3);
        setWipeProgress(ease * 100);

        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setHasAnimated(true);
        }
      };

      window.requestAnimationFrame(step);
    }, 450);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="pt-28 sm:pt-36 lg:pt-40 pb-10 sm:pb-16 bg-[#F4F5F7]">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16">
        
        {/* Asymmetrical Header & Intro Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end mb-8 sm:mb-12">
          
          {/* Main Title & Kicker */}
          <div className="lg:col-span-7">
            <div className="mb-3 sm:mb-4">
              <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#C31F21] uppercase">
                Exterior cleaning · Houston + Katy
              </p>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[68px] font-medium text-[#121316] leading-[1.06] tracking-tight">
              A cleaner property<br />
              <span className="inline-block sm:pl-6 text-[#C31F21]">
                changes everything.
              </span>
            </h1>
          </div>

          {/* Supporting Copy & Distinct Action Hierarchy */}
          <div className="lg:col-span-5 flex flex-col justify-end lg:pb-2">
            <p className="text-sm sm:text-base text-[#58585A] leading-relaxed mb-6 font-normal max-w-md">
              Specialized pressure washing and low-pressure soft washing for driveways, siding, patios, fences, and commercial properties.
            </p>

            {/* Clear Primary vs Secondary CTA Hierarchy */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <button
                type="button"
                onClick={onOpenQuote}
                className="btn-brand-primary px-5 sm:px-6 py-3 text-sm sm:text-[15px]"
              >
                <span>Request a quote</span>
                <ArrowUpRight className="w-4 h-4 ml-2 cta-arrow" strokeWidth={2} />
              </button>

              <button
                type="button"
                onClick={onExploreWork}
                className="clean-secondary-link text-sm sm:text-[15px] cursor-pointer text-[#58585A] hover:text-[#121316]"
              >
                <span>View our work</span>
                <ArrowDown className="w-3.5 h-3.5 arrow-icon text-[#C31F21]" />
              </button>
            </div>
          </div>

        </div>

        {/* Hero The Clean Line Reveal Photograph */}
        <div className="relative">
          
          {/* Metadata Top Bar */}
          <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-[#58585A] uppercase tracking-wider mb-2 px-1">
            <span>
              Weathered Surface / Before
            </span>
            <span className="text-[#C31F21] font-semibold">
              Pressure Cleaned / After
            </span>
          </div>

          {/* Image Container with Clean Line Reveal */}
          <div
            ref={heroImageRef}
            className="relative w-full aspect-[16/10] sm:aspect-[21/9] max-h-[580px] overflow-hidden rounded-[4px] border border-[#E2E4E8] bg-[#FFFFFF] shadow-sm select-none"
          >
            {/* Base Layer: Weathered / Dirty Driveway (BEFORE) */}
            <img
              src="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=2200&q=90"
              alt="Weathered driveway surface before pressure wash"
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
              loading="eager"
              referrerPolicy="no-referrer"
            />

            {/* Revealing Layer: Clean Driveway (AFTER) with animated clipPath */}
            <div
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{
                clipPath: `inset(0 0 0 ${100 - wipeProgress}%)`
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1584463623578-3019d5ef8d08?auto=format&fit=crop&w=2200&q=90"
                alt="Deeply cleaned residential concrete driveway and approach in Houston"
                className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
                loading="eager"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Sweeping Clean Line Divider during transition */}
            {wipeProgress > 0 && wipeProgress < 100 && (
              <div
                className="absolute top-0 bottom-0 pointer-events-none transition-none"
                style={{ left: `${wipeProgress}%` }}
              >
                <div className="w-[2px] h-full bg-[#C31F21] shadow-[0_0_14px_rgba(195,31,33,0.85)] relative -translate-x-1/2">
                  <span className="absolute top-4 -left-11 font-mono text-[9px] uppercase tracking-widest text-[#FFFFFF] bg-[#C31F21] font-bold px-2 py-0.5 rounded-[2px] shadow-xs">
                    CLEAN
                  </span>
                </div>
              </div>
            )}

            {/* Bottom Metadata Bar */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
              <span className="text-[10px] sm:text-[11px] font-mono text-[#FFFFFF] bg-[#121316]/90 backdrop-blur-xs px-2.5 py-1 rounded-[3px] tracking-wide border border-white/10">
                HOUSTON, TX · CINCO RANCH
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono text-[#FFFFFF] bg-[#C31F21] font-semibold px-2.5 py-1 rounded-[3px] tracking-wide hidden sm:inline-block shadow-xs">
                EXTERIOR RESTORATION
              </span>
            </div>

          </div>

          {/* Replay Clean Line Sweep Button */}
          {hasAnimated && (
            <div className="flex justify-end mt-2">
              <button
                type="button"
                onClick={() => {
                  setWipeProgress(0);
                  let start: number | null = null;
                  const duration = 1200;
                  const step = (timestamp: number) => {
                    if (!start) start = timestamp;
                    const elapsed = timestamp - start;
                    const progress = Math.min(1, elapsed / duration);
                    const ease = 1 - Math.pow(1 - progress, 3);
                    setWipeProgress(ease * 100);
                    if (progress < 1) window.requestAnimationFrame(step);
                  };
                  window.requestAnimationFrame(step);
                }}
                className="text-[11px] font-mono text-[#58585A] hover:text-[#C31F21] transition-colors cursor-pointer inline-flex items-center gap-1"
              >
                <span>↻ Replay clean line reveal</span>
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

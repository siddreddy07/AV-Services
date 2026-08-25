import React, { useRef, useState, useEffect } from 'react';

export const VisualBreak: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const totalDist = windowHeight + rect.height;
      const currentPos = windowHeight - rect.top;
      const progress = Math.max(0, Math.min(1, currentPos / totalDist));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const revealPercentage = Math.min(100, Math.max(15, scrollProgress * 110));

  return (
    <section
      ref={containerRef}
      className="relative w-full py-16 sm:py-24 lg:py-28 border-t border-[#1C1E24] overflow-hidden bg-[#121316]"
    >
      {/* Background Weathered / Grimy Layer */}
      <img
        src="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=2400&q=85"
        alt="Weathered surface texture"
        className="absolute inset-0 w-full h-full object-cover opacity-25 brightness-75 pointer-events-none"
        loading="lazy"
        referrerPolicy="no-referrer"
      />

      {/* Foreground Cleaned Layer revealed via scroll Progress Clip */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none transition-all duration-100 ease-out"
        style={{
          clipPath: `inset(0 0 0 ${100 - revealPercentage}%)`
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2400&q=85"
          alt="Cleaned surface and estate grounds"
          className="absolute inset-0 w-full h-full object-cover opacity-85 pointer-events-none"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Clean Line Sweep Bar with Crimson Glow */}
      <div
        className="absolute top-0 bottom-0 pointer-events-none transition-all duration-100 ease-out"
        style={{ left: `${revealPercentage}%` }}
      >
        <div className="w-[2px] h-full bg-[#C31F21] shadow-[0_0_18px_rgba(195,31,33,0.85)] relative -translate-x-1/2" />
      </div>

      {/* Editorial Typographic Statement */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16 pointer-events-none">
        <div className="max-w-2xl">
          <p className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-[#C31F21] uppercase mb-3">
            The Clean Standard
          </p>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium text-[#FFFFFF] leading-[1.08] tracking-tight">
            Clean is<br />
            easy to notice.
          </h2>
        </div>
      </div>
    </section>
  );
};

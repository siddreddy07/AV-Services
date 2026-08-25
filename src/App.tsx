import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BusinessProof } from './components/BusinessProof';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { ServicesEditorial } from './components/ServicesEditorial';
import { ResidentialCommercial } from './components/ResidentialCommercial';
import { VisualBreak } from './components/VisualBreak';
import { MobileService } from './components/MobileService';
import { SelectedWork } from './components/SelectedWork';
import { InstagramSection } from './components/InstagramSection';
import { QuoteSection } from './components/QuoteSection';
import { ServiceArea } from './components/ServiceArea';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';

export default function App() {
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [selectedCategory, setSelectedCategory] = useState<'residential' | 'commercial' | undefined>(undefined);

  const scrollToQuote = () => {
    const el = document.getElementById('quote');
    if (el) {
      const yOffset = -40;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const scrollToWork = () => {
    const el = document.getElementById('work');
    if (el) {
      const yOffset = -40;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    scrollToQuote();
  };

  const handleSelectCategory = (category: 'residential' | 'commercial') => {
    setSelectedCategory(category);
    scrollToQuote();
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#121316] selection:bg-[#C31F21] selection:text-[#FFFFFF] pb-16 md:pb-0">
      
      {/* 03. Navigation */}
      <Navbar onOpenQuote={scrollToQuote} />

      <main>
        {/* 04. Hero */}
        <Hero
          onOpenQuote={scrollToQuote}
          onExploreWork={scrollToWork}
        />

        {/* 05. Immediate Business Proof */}
        <BusinessProof />

        {/* 06. The Core Visual Moment (Dark Transformation Section in Deep Forest) */}
        <BeforeAfterSlider />

        {/* 07. Services (Editorial Numbered Layout with Dynamic Image Switch) */}
        <ServicesEditorial onSelectService={handleSelectService} />

        {/* 08. Residential / Commercial (Side-by-side Typography Split) */}
        <ResidentialCommercial onSelectCategory={handleSelectCategory} />

        {/* The Clean Standard (Scroll-Revealed Visual Break) */}
        <VisualBreak />

        {/* 09. Mobile Service (We bring the equipment to your location) */}
        <MobileService />

        {/* 10. Selected Work (Uneven Editorial Gallery with Fresh Lime Badges) */}
        <SelectedWork />

        {/* 11. Instagram (Follow the daily transformations) */}
        <InstagramSection />

        {/* 12. Quote (Tell us what needs cleaning) */}
        <QuoteSection
          initialService={selectedService}
          initialCategory={selectedCategory}
        />

        {/* 13. Location (Houston. Katy. And nearby.) */}
        <ServiceArea />

        {/* 14. Final CTA (Your property could look different tomorrow) */}
        <FinalCTA onOpenQuote={scrollToQuote} />
      </main>

      {/* Footer */}
      <Footer />

      {/* 18. Mobile Sticky Bottom Action */}
      <MobileBottomBar onOpenQuote={scrollToQuote} />

    </div>
  );
}

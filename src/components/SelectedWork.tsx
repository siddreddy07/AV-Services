import React, { useState } from 'react';
import { X } from 'lucide-react';

interface ProjectItem {
  id: string;
  number: string;
  title: string;
  location: string;
  year: string;
  image: string;
  alt: string;
  scope: string;
}

const PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    number: '01',
    title: 'Concrete Driveway Restoration',
    location: 'Katy, TX',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1605146768851-eda79da39897?auto=format&fit=crop&w=2200&q=90',
    alt: 'Clean driveway restoration in Cinco Ranch Katy',
    scope: 'Deep rotary surface cleaning lifting 4 years of embedded mildew, tire marks, and algae.'
  },
  {
    id: 'proj-2',
    number: '02',
    title: 'Flagstone Patio & Pool Surround',
    location: 'Memorial, Houston',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1584738766473-61c083514bf4?auto=format&fit=crop&w=1600&q=85',
    alt: 'Natural stone patio and pool deck after treatment',
    scope: 'Soft wash chemical treatment restoring natural stone color without high-pressure surface pitting.'
  },
  {
    id: 'proj-3',
    number: '03',
    title: 'Commercial Plaza & Approach',
    location: 'West Houston, TX',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2400&q=90',
    alt: 'Clean commercial grounds and entryway walkways',
    scope: 'Complete exterior wash and gum/oil spot removal across 6,000 sq ft of high-traffic concrete.'
  }
];

export const SelectedWork: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  return (
    <section id="selected-work" className="py-14 sm:py-20 lg:py-24 border-t border-[#E2E4E8] bg-[#FFFFFF]">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16">

        {/* Section Header */}
        <div className="mb-8 sm:mb-12">
          <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-[#58585A] uppercase inline-flex items-center gap-2 mb-2 sm:mb-3">
            <span className="text-[#FFFFFF] bg-[#C31F21] px-1.5 py-0.5 rounded-[2px] font-bold text-xs">06</span>
            <span>/ Selected Work</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#121316] leading-[1.08] tracking-tight mb-3">
            Proof is better<br />than promises.
          </h2>
          <p className="text-sm sm:text-base text-[#58585A] leading-relaxed max-w-xl">
            Real exterior transformations across Katy, Memorial, and Greater West Houston.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveModalProject(project)}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[4px] border border-[#E2E4E8] bg-[#F4F5F7]">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[#121316]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none">
                  <span className="px-4 py-2 rounded-full bg-[#C31F21] text-[#FFFFFF] font-mono text-[10px] font-bold tracking-wider shadow-lg">
                    VIEW PROJECT
                  </span>
                </div>
              </div>
              <div className="mt-3">
                <span className="text-sm font-medium text-[#121316] group-hover:text-[#C31F21] transition-colors block">
                  {project.title}
                </span>
                <span className="text-xs font-mono text-[#58585A] mt-0.5 block">
                  {project.location} · {project.year}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeModalProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#121316]/80 backdrop-blur-xs p-4 sm:p-6"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-[#FFFFFF] border border-[#E2E4E8] rounded-[8px] overflow-hidden shadow-2xl p-5 sm:p-7"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveModalProject(null)}
              className="absolute top-4 right-4 p-2 text-[#58585A] hover:text-[#121316] rounded-full transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[16/10] overflow-hidden rounded-[4px] border border-[#E2E4E8] mb-4 bg-[#F4F5F7]">
              <img
                src={activeModalProject.image}
                alt={activeModalProject.alt}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-[#58585A]">
                <span className="text-[#C31F21] font-semibold">{activeModalProject.number} / {activeModalProject.location}</span>
                <span>COMPLETED {activeModalProject.year}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-medium text-[#121316]">{activeModalProject.title}</h3>
              <p className="text-sm text-[#58585A] leading-relaxed">{activeModalProject.scope}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

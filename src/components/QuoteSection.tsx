import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowUpRight, Check, ChevronRight, Image as ImageIcon, MapPin, ShieldCheck, Sparkles, X, Zap } from 'lucide-react';
import { QuoteFormData } from '../types';

interface QuoteSectionProps {
  initialService?: string;
  initialCategory?: 'residential' | 'commercial';
}

const AVAILABLE_SURFACES = [
  { id: 'driveway', label: 'Driveways & Concrete', desc: 'Slabs, sidewalks & garage aprons' },
  { id: 'house', label: 'House Soft Wash', desc: 'Stucco, vinyl, brick & siding' },
  { id: 'patio', label: 'Patios & Pool Decks', desc: 'Travertine, flagstone & pavers' },
  { id: 'fence', label: 'Fence Brightening', desc: 'Cedar, pine & perimeter wood' },
  { id: 'commercial', label: 'Commercial Walkways', desc: 'Storefronts & high-traffic aprons' },
  { id: 'gutters', label: 'Gutters & Eaves', desc: 'Tiger stripe & oxidation removal' },
];

const SIZE_OPTIONS: Array<{ value: QuoteFormData['size']; label: string; desc: string }> = [
  { value: 'Small', label: 'Standard / Small', desc: '1-2 car driveway or single patio' },
  { value: 'Medium', label: 'Medium', desc: 'Typical 2-story home or 3-car driveway' },
  { value: 'Large', label: 'Large / Commercial', desc: 'Large estate, multiple surfaces, commercial' },
  { value: 'Not sure', label: 'Not Sure', desc: 'We will assess via satellite or photo' },
];

const TIMELINE_OPTIONS = [
  { id: 'asap', label: 'ASAP (Next 1-3 Days)' },
  { id: 'weeks', label: 'Within 1-2 Weeks' },
  { id: 'flexible', label: 'Flexible / Gathering Quotes' },
];

export const QuoteSection: React.FC<QuoteSectionProps> = ({ initialService }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedServices, setSelectedServices] = useState<string[]>(
    initialService ? [initialService] : ['Driveways & Concrete']
  );
  
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    phone: '',
    email: '',
    location: '',
    services: initialService ? [initialService] : ['Driveways & Concrete'],
    size: 'Medium',
    message: ''
  });

  const [timeline, setTimeline] = useState<string>('Within 1-2 Weeks');
  const [showPhotoUpload, setShowPhotoUpload] = useState<boolean>(false);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [stepError, setStepError] = useState<string>('');

  useEffect(() => {
    if (initialService) {
      setSelectedServices([initialService]);
      setFormData(prev => ({
        ...prev,
        services: [initialService]
      }));
    }
  }, [initialService]);

  const toggleService = (label: string) => {
    setStepError('');
    setSelectedServices(prev => {
      const exists = prev.includes(label);
      const next = exists ? prev.filter(s => s !== label) : [...prev, label];
      setFormData(f => ({ ...f, services: next }));
      return next;
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const fileNames = Array.from(e.target.files).map((f: File) => f.name);
      setUploadedFiles(prev => [...prev, ...fileNames]);
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const validateAndNext = () => {
    setStepError('');
    if (currentStep === 1) {
      if (selectedServices.length === 0) {
        setStepError('Please select at least one surface to continue.');
        return;
      }
      setCurrentStep(2);
    } else if (currentStep === 2) {
      if (!formData.location.trim()) {
        setStepError('Please enter your neighborhood, address, or ZIP code.');
        return;
      }
      setCurrentStep(3);
    }
  };

  const handlePrev = () => {
    setStepError('');
    setCurrentStep(prev => Math.max(1, prev - 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setStepError('Please provide your name and phone number to receive your estimate.');
      return;
    }
    setSubmitted(true);
  };

  const steps = [
    { number: 1, title: 'Surfaces', shortTitle: '01 Surfaces' },
    { number: 2, title: 'Property & Scope', shortTitle: '02 Property' },
    { number: 3, title: 'Contact', shortTitle: '03 Contact' },
  ];

  return (
    <section id="quote" className="py-14 sm:py-20 lg:py-24 border-t border-[#E2E4E8] bg-[#FFFFFF]">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Left Column: Heading & Context */}
          <div className="lg:col-span-5">
            <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-[#58585A] uppercase inline-flex items-center gap-2 mb-2 sm:mb-3">
              <span className="text-[#FFFFFF] bg-[#C31F21] px-1.5 py-0.5 rounded-[2px] font-bold text-xs">
                08
              </span>
              <span>/ Quick Estimate</span>
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium text-[#121316] leading-[1.08] tracking-tight mb-4">
              Get an instant<br />
              custom estimate.
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-[#58585A] leading-relaxed font-normal mb-6">
              Complete our 3-step estimator. We review satellite imaging and surface materials to provide guaranteed pricing with zero obligations.
            </p>

            <div className="p-4 bg-[#F4F5F7] border border-[#E2E4E8] rounded-[4px] space-y-3 text-xs font-mono text-[#58585A]">
              <div className="flex items-center gap-2 text-[#121316] font-semibold">
                <Zap className="w-4 h-4 text-[#C31F21]" />
                <span>Fast Turnaround Guarantee</span>
              </div>
              <p className="leading-relaxed">
                Receive an itemized quote via SMS or email within 2 hours during business hours.
              </p>
              <div className="pt-2 border-t border-[#E2E4E8] flex items-center gap-1.5 text-[#121316]">
                <MapPin className="w-3.5 h-3.5 text-[#C31F21]" />
                <span>Serving Houston, Katy, Memorial, River Oaks & surrounding areas.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Multi-Step Form Stepper */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="py-10 border border-[#E2E4E8] bg-[#F4F5F7] p-6 sm:p-10 rounded-[6px] shadow-xs animate-in fade-in duration-300">
                <div className="w-12 h-12 rounded-full bg-[#121316] text-[#C31F21] flex items-center justify-center mb-5 font-bold">
                  <Check className="w-6 h-6" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-medium text-[#121316] tracking-tight mb-2">
                  Estimate Request Confirmed, {formData.name}!
                </h3>
                <p className="text-sm sm:text-base text-[#58585A] leading-relaxed mb-5">
                  We've received your request for <strong className="text-[#121316]">{selectedServices.join(', ')}</strong> in <span className="font-medium text-[#121316]">{formData.location}</span>. Our team will send your quote to <span className="font-mono font-medium text-[#121316]">{formData.phone}</span> shortly.
                </p>

                <div className="p-4 bg-[#FFFFFF] border border-[#E2E4E8] rounded-[4px] mb-6 flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#C31F21] shrink-0" />
                  <span className="text-xs font-mono text-[#58585A]">
                    No spam guarantee: Your phone number and details are used solely to deliver your quote.
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setCurrentStep(1);
                    setFormData({
                      name: '',
                      phone: '',
                      email: '',
                      location: '',
                      services: ['Driveways & Concrete'],
                      size: 'Medium',
                      message: ''
                    });
                    setUploadedFiles([]);
                    setShowPhotoUpload(false);
                  }}
                  className="clean-secondary-link text-xs sm:text-sm font-mono text-[#121316] hover:text-[#C31F21] font-semibold cursor-pointer"
                >
                  <span>Submit another request</span>
                  <ArrowUpRight className="w-3.5 h-3.5 arrow-icon text-[#C31F21]" />
                </button>
              </div>
            ) : (
              <div className="bg-[#F4F5F7] p-5 sm:p-8 rounded-[6px] border border-[#E2E4E8] shadow-2xs">
                
                {/* Stepper Progress Bar Header */}
                <div className="mb-6 pb-5 border-b border-[#E2E4E8]">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#121316]">
                      Step {currentStep} of 3: {steps[currentStep - 1].title}
                    </span>
                    <span className="text-xs font-mono text-[#58585A]">
                      {Math.round((currentStep / 3) * 100)}% Completed
                    </span>
                  </div>

                  {/* Visual Stepper Indicators */}
                  <div className="grid grid-cols-3 gap-2">
                    {steps.map((s) => {
                      const isComplete = currentStep > s.number;
                      const isCurrent = currentStep === s.number;
                      return (
                        <div key={s.number} className="flex flex-col gap-1.5">
                          <div
                            className={`h-1.5 w-full rounded-[2px] transition-colors duration-300 ${
                              isComplete || isCurrent
                                ? 'bg-[#C31F21]'
                                : 'bg-[#E2E4E8]'
                            }`}
                          />
                          <span
                            className={`text-[10px] font-mono uppercase tracking-wider truncate ${
                              isCurrent
                                ? 'font-bold text-[#121316]'
                                : isComplete
                                ? 'text-[#C31F21]'
                                : 'text-[#58585A]'
                            }`}
                          >
                            {s.shortTitle}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Validation Error Alert */}
                {stepError && (
                  <div className="mb-5 p-3 rounded-[3px] bg-[#C31F21]/10 border border-[#C31F21]/30 text-xs font-mono text-[#C31F21] flex items-center gap-2">
                    <span className="font-bold">Notice:</span> {stepError}
                  </div>
                )}

                {/* Step 1: Surfaces & Scope */}
                {currentStep === 1 && (
                  <div className="space-y-6 animate-in fade-in duration-200">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#58585A] mb-2.5 font-medium">
                        1. Select All Surfaces You Need Washed *
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {AVAILABLE_SURFACES.map((srv) => {
                          const isSelected = selectedServices.includes(srv.label);
                          return (
                            <button
                              key={srv.id}
                              type="button"
                              onClick={() => toggleService(srv.label)}
                              className={`p-3 text-left rounded-[4px] border transition-all cursor-pointer flex items-start gap-2.5 ${
                                isSelected
                                  ? 'bg-[#121316] text-[#FFFFFF] border-[#121316] shadow-xs'
                                  : 'bg-[#FFFFFF] text-[#121316] border-[#E2E4E8] hover:border-[#C31F21]'
                              }`}
                            >
                              <div
                                className={`w-4 h-4 rounded-[2px] mt-0.5 border flex items-center justify-center shrink-0 transition-colors ${
                                  isSelected
                                    ? 'bg-[#C31F21] border-[#C31F21] text-[#FFFFFF]'
                                    : 'border-[#58585A]/40 bg-transparent'
                                }`}
                              >
                                {isSelected && <Check className="w-3 h-3" strokeWidth={3} />}
                              </div>
                              <div>
                                <span className="text-xs font-semibold block leading-tight">
                                  {srv.label}
                                </span>
                                <span
                                  className={`text-[10px] block mt-0.5 font-mono ${
                                    isSelected ? 'text-[#E2E4E8]' : 'text-[#58585A]'
                                  }`}
                                >
                                  {srv.desc}
                                </span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#58585A] mb-2 font-medium">
                        2. Approximate Project Scale
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {SIZE_OPTIONS.map((opt) => {
                          const isSelected = formData.size === opt.value;
                          return (
                            <button
                              key={opt.value}
                              type="button"
                              onClick={() => setFormData({ ...formData, size: opt.value })}
                              className={`p-2.5 text-left rounded-[3px] border transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-[#121316] text-[#FFFFFF] border-[#121316] font-semibold'
                                  : 'bg-[#FFFFFF] text-[#58585A] border-[#E2E4E8] hover:border-[#C31F21] hover:text-[#121316]'
                              }`}
                            >
                              <span className="text-xs font-mono block leading-tight">{opt.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Step 1 Actions */}
                    <div className="pt-3 border-t border-[#E2E4E8] flex items-center justify-between">
                      <span className="text-xs font-mono text-[#58585A]">
                        {selectedServices.length} surface{selectedServices.length !== 1 ? 's' : ''} selected
                      </span>
                      <button
                        type="button"
                        onClick={validateAndNext}
                        className="btn-brand-primary px-5 py-2.5 text-xs uppercase tracking-wider font-semibold cursor-pointer inline-flex items-center gap-1.5"
                      >
                        <span>Next: Property Details</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 2: Property Info & Timeline */}
                {currentStep === 2 && (
                  <div className="space-y-5 animate-in fade-in duration-200">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#58585A] mb-1.5 font-medium">
                        Property Address, Neighborhood or ZIP Code *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.location}
                        onChange={(e) => {
                          setStepError('');
                          setFormData({ ...formData, location: e.target.value });
                        }}
                        placeholder="e.g. Cinco Ranch, Katy, TX or 77450"
                        className="w-full px-3.5 py-2.5 bg-[#FFFFFF] border border-[#E2E4E8] focus:border-[#C31F21] focus:ring-1 focus:ring-[#C31F21] focus:outline-none text-[#121316] rounded-[3px] text-sm"
                        autoFocus
                      />
                      <p className="text-[11px] font-mono text-[#58585A] mt-1">
                        Allows us to inspect surface dimensions via aerial mapping for fast quoting.
                      </p>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#58585A] mb-1.5 font-medium">
                        Desired Service Timeline
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {TIMELINE_OPTIONS.map((t) => {
                          const isSelected = timeline === t.label;
                          return (
                            <button
                              key={t.id}
                              type="button"
                              onClick={() => setTimeline(t.label)}
                              className={`px-3 py-2 text-left rounded-[3px] border transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-[#121316] text-[#FFFFFF] border-[#121316] font-semibold text-xs'
                                  : 'bg-[#FFFFFF] text-[#58585A] border-[#E2E4E8] hover:border-[#C31F21] hover:text-[#121316] text-xs'
                              }`}
                            >
                              <span className="font-mono">{t.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Optional Photo Attachment */}
                    <div>
                      {!showPhotoUpload ? (
                        <button
                          type="button"
                          onClick={() => setShowPhotoUpload(true)}
                          className="text-xs font-mono text-[#58585A] hover:text-[#C31F21] inline-flex items-center gap-1.5 cursor-pointer transition-colors"
                        >
                          <ImageIcon className="w-3.5 h-3.5" />
                          <span>+ Attach property photos (optional)</span>
                        </button>
                      ) : (
                        <div className="p-3.5 bg-[#FFFFFF] border border-[#E2E4E8] rounded-[3px]">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-mono text-[#58585A]">Upload property or stain photos:</span>
                            <button
                              type="button"
                              onClick={() => setShowPhotoUpload(false)}
                              className="text-xs font-mono text-[#58585A] hover:text-[#C31F21] cursor-pointer"
                            >
                              Hide
                            </button>
                          </div>
                          <input
                            type="file"
                            multiple
                            accept="image/*"
                            onChange={handleFileUpload}
                            className="text-xs font-mono text-[#58585A] file:mr-2 file:py-1 file:px-2.5 file:rounded-[2px] file:border file:border-[#E2E4E8] file:text-xs file:font-mono file:bg-[#F4F5F7] file:text-[#121316] hover:file:bg-[#E2E4E8] cursor-pointer"
                          />
                          {uploadedFiles.length > 0 && (
                            <div className="mt-2 flex flex-wrap gap-1.5">
                              {uploadedFiles.map((file, idx) => (
                                <span
                                  key={idx}
                                  className="inline-flex items-center gap-1 text-[11px] font-mono bg-[#F4F5F7] border border-[#E2E4E8] px-2 py-0.5 rounded-[2px] text-[#121316]"
                                >
                                  <span className="truncate max-w-[120px]">{file}</span>
                                  <button
                                    type="button"
                                    onClick={() => removeFile(idx)}
                                    className="hover:text-[#C31F21] cursor-pointer"
                                  >
                                    <X className="w-3 h-3" />
                                  </button>
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Step 2 Actions */}
                    <div className="pt-3 border-t border-[#E2E4E8] flex items-center justify-between">
                      <button
                        type="button"
                        onClick={handlePrev}
                        className="px-3.5 py-2 text-xs font-mono text-[#58585A] hover:text-[#121316] inline-flex items-center gap-1 cursor-pointer"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Back</span>
                      </button>
                      <button
                        type="button"
                        onClick={validateAndNext}
                        className="btn-brand-primary px-5 py-2.5 text-xs uppercase tracking-wider font-semibold cursor-pointer inline-flex items-center gap-1.5"
                      >
                        <span>Next: Contact Details</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Contact & Delivery */}
                {currentStep === 3 && (
                  <form onSubmit={handleSubmit} className="space-y-4 animate-in fade-in duration-200">
                    
                    {/* Summary Badge of Scope */}
                    <div className="p-3 bg-[#FFFFFF] border border-[#E2E4E8] rounded-[4px] text-xs font-mono space-y-1">
                      <div className="flex items-center justify-between text-[#121316] font-semibold">
                        <span>Estimate Scope:</span>
                        <button
                          type="button"
                          onClick={() => setCurrentStep(1)}
                          className="text-[#C31F21] hover:underline font-normal text-[11px] cursor-pointer"
                        >
                          Edit
                        </button>
                      </div>
                      <p className="text-[#58585A] truncate">
                        {selectedServices.join(', ')} · {formData.size} scale
                      </p>
                      <p className="text-[#58585A] truncate">
                        Location: {formData.location} ({timeline})
                      </p>
                    </div>

                    {/* Contact Inputs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-wider text-[#58585A] mb-1 font-medium">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => {
                            setStepError('');
                            setFormData({ ...formData, name: e.target.value });
                          }}
                          placeholder="e.g. David Harrison"
                          className="w-full px-3 py-2 bg-[#FFFFFF] border border-[#E2E4E8] focus:border-[#C31F21] focus:ring-1 focus:ring-[#C31F21] focus:outline-none text-[#121316] rounded-[3px] text-sm"
                          autoFocus
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-wider text-[#58585A] mb-1 font-medium">
                          Phone Number (for SMS quote) *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => {
                            setStepError('');
                            setFormData({ ...formData, phone: e.target.value });
                          }}
                          placeholder="(281) 000-0000"
                          className="w-full px-3 py-2 bg-[#FFFFFF] border border-[#E2E4E8] focus:border-[#C31F21] focus:ring-1 focus:ring-[#C31F21] focus:outline-none text-[#121316] rounded-[3px] text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#58585A] mb-1 font-medium">
                        Email Address (Optional for itemized PDF)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full px-3 py-2 bg-[#FFFFFF] border border-[#E2E4E8] focus:border-[#C31F21] focus:ring-1 focus:ring-[#C31F21] focus:outline-none text-[#121316] rounded-[3px] text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-[#58585A] mb-1 font-medium">
                        Additional Notes (Optional)
                      </label>
                      <input
                        type="text"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Specific stain concerns, gates, water access details..."
                        className="w-full px-3 py-2 bg-[#FFFFFF] border border-[#E2E4E8] focus:border-[#C31F21] focus:ring-1 focus:ring-[#C31F21] focus:outline-none text-[#121316] rounded-[3px] text-sm"
                      />
                    </div>

                    {/* Step 3 Actions & Submission */}
                    <div className="pt-3 border-t border-[#E2E4E8] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={handlePrev}
                        className="px-3 py-2 text-xs font-mono text-[#58585A] hover:text-[#121316] inline-flex items-center gap-1 cursor-pointer"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Back</span>
                      </button>

                      <button
                        type="submit"
                        className="btn-brand-primary px-6 py-3 text-xs sm:text-sm uppercase tracking-wider font-semibold cursor-pointer inline-flex items-center justify-center gap-1.5"
                      >
                        <span>Submit Estimate Request</span>
                        <ArrowUpRight className="w-4 h-4 cta-arrow" strokeWidth={2} />
                      </button>
                    </div>

                  </form>
                )}

              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

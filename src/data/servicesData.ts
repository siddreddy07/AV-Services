import { ServiceItem } from '../types';

export interface CleanService {
  id: string;
  number: string;
  title: string;
  category: 'residential' | 'commercial';
  summary: string;
  surfaceTypes: string;
  keyFeatures: string[];
  image: string;
  alt: string;
}

export const CLEAN_SERVICES: CleanService[] = [
  {
    id: 'driveways-concrete',
    number: '01',
    title: 'Driveways & Concrete',
    category: 'residential',
    summary: 'Deep rotary surface cleaning to lift embedded grime, tire marks, and dark algae from driveways and walkways.',
    surfaceTypes: 'Driveways, sidewalks, garage aprons & curbs',
    keyFeatures: ['Enclosed Rotary Cleaner', 'Even Streak-Free Finish', 'Algae & Oil Removal'],
    image: 'https://images.unsplash.com/photo-1605146768851-eda79da39897?auto=format&fit=crop&w=1600&q=85',
    alt: 'Clean concrete driveway and sidewalk'
  },
  {
    id: 'house-washing',
    number: '02',
    title: 'House Soft Wash',
    category: 'residential',
    summary: 'Low-pressure detergent wash safely eradicating mold, mildew spores, and dirt without harming paint or stucco.',
    surfaceTypes: 'Stucco, vinyl, Hardie board & painted brick',
    keyFeatures: ['Low-Pressure Treatment', 'Safe on Siding & Paint', 'Mold & Spore Removal'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    alt: 'Clean modern residential home siding'
  },
  {
    id: 'patios-pool-decks',
    number: '03',
    title: 'Patios & Pool Decks',
    category: 'residential',
    summary: 'Gentle restoration for natural stone and pavers, eliminating slippery biofilm while protecting grout and sand joints.',
    surfaceTypes: 'Travertine, flagstone, pavers & stamped concrete',
    keyFeatures: ['Stone-Safe Calibration', 'Slip-Resistant Finish', 'Mineral & Ring Removal'],
    image: 'https://images.unsplash.com/photo-1584738766473-61c083514bf4?auto=format&fit=crop&w=1600&q=85',
    alt: 'Clean outdoor patio and pool deck stones'
  },
  {
    id: 'fences',
    number: '04',
    title: 'Wood & Fence Brightening',
    category: 'residential',
    summary: 'Restores gray weathered wood fences and pergolas back to their natural cedar and pine tones ready for sealing.',
    surfaceTypes: 'Cedar, pine privacy fences & wooden pergolas',
    keyFeatures: ['Wood-Safe Low Flow', 'Strips Gray UV Layer', 'Prepares for Staining'],
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85',
    alt: 'Clean wood fence and perimeter'
  },
  {
    id: 'commercial',
    number: '05',
    title: 'Commercial Walkways & Storefronts',
    category: 'commercial',
    summary: 'Scheduled exterior maintenance for retail centers, corporate entrances, dumpster pads, and high-traffic plazas.',
    surfaceTypes: 'Retail aprons, customer entrances & parking pads',
    keyFeatures: ['Commercial High GPM', 'Off-Hours Scheduling', 'Gum & Grease Wash'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85',
    alt: 'Commercial storefront walkways and plaza'
  },
  {
    id: 'roofs-gutters',
    number: '06',
    title: 'Gutters & Fascia Detailing',
    category: 'residential',
    summary: 'Exterior gutter face scrubbing to remove black tiger striping, oxidation, and roof runoff stains.',
    surfaceTypes: 'Aluminum gutters, soffits, downspouts & eaves',
    keyFeatures: ['Non-Abrasive Scrubbing', 'Tiger Stripe Removal', 'Soffit & Eave Wash'],
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
    alt: 'Clean exterior gutters and roofline'
  }
];

export const BEFORE_AFTER_ITEMS = [
  {
    id: 'driveway-transformation',
    title: 'Concrete Driveway & Approach',
    location: 'Katy, TX · Cinco Ranch',
    surface: 'Poured Concrete & Slabs',
    stats: '8 Years of Grime Removed',
    note: 'Deep rotary surface cleaning',
    beforeImage: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1605146768851-eda79da39897?auto=format&fit=crop&w=1800&q=85',
    beforeLabel: 'Before: Heavy black algae, tire tracks & oil staining',
    afterLabel: 'After: Bright, uniform concrete restored to like-new'
  },
  {
    id: 'patio-transformation',
    title: 'Flagstone Patio & Pool Surround',
    location: 'Houston, TX · Memorial',
    surface: 'Natural Flagstone & Coping',
    stats: 'Slip Hazard Eliminated',
    note: 'Stone-safe low pressure wash',
    beforeImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1584738766473-61c083514bf4?auto=format&fit=crop&w=1800&q=85',
    beforeLabel: 'Before: Slippery green biofilm and mineral haze',
    afterLabel: 'After: Vibrant stone color and slip-resistant texture'
  },
  {
    id: 'commercial-transformation',
    title: 'Commercial Plaza Walkway',
    location: 'Houston, TX · Westchase',
    surface: 'Aggregate Pavers & Apron',
    stats: '12,000 Sq Ft Cleaned',
    note: 'High-traffic surface degreasing',
    beforeImage: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=85',
    beforeLabel: 'Before: Heavy foot traffic grime and spills',
    afterLabel: 'After: Crisp storefront appeal welcoming customers'
  }
];


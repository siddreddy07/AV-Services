export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortLabel?: string;
  category: 'residential' | 'commercial' | 'both';
  description: string;
  method: string;
  pressureRating: string;
  targetStains: string[];
  bestFor: string;
  image: string;
  alt: string;
}

export interface TransformationItem {
  id: string;
  title: string;
  location: string;
  beforeImage: string;
  afterImage: string;
  description?: string;
}

export interface QuoteFormData {
  name: string;
  phone: string;
  email: string;
  location: string;
  services: string[];
  size: 'Small' | 'Medium' | 'Large' | 'Not sure';
  message: string;
}

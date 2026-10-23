export interface NavItem {
  label: string;
  href: string;
  icon?: string;
}

export interface Product {
  id: string; // URL slug
  title: string;
  category: 'Adhesives' | 'Epoxy Grout' | 'Primers' | 'Waterproofing';
  subtitle: string;
  description: string;
  image: string;
  badgeColor?: string;
  packaging: string;
  features: string[];
  applications: string[];
  substrates: string[];
  technicalSpecs: { [key: string]: string };
  mixingAndApplication?: string;
  storageAndHandling?: string;
  brochurePdf?: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  category: string;
}

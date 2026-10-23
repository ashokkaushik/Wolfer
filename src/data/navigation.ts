import { NavItem } from '@/types';

export const primaryNavItems: NavItem[] = [
  { label: 'Products', href: '/products' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const footerNavItems: {
  navigation: NavItem[];
  productLines: string[];
  compliance: NavItem[];
} = {
  navigation: [
    { label: 'Products Catalog', href: '/products' },
    { label: 'Services & Support', href: '/services' },
    { label: 'Brand Story', href: '/about' },
    { label: 'Direct Enquiry', href: '/contact' },
  ],
  productLines: [
    'Polymer Tile Adhesives',
    '100% Solids Epoxy Grouts',
    'Bonding Primers',
    'Waterproofing Membranes',
  ],
  compliance: [
    { label: 'Technical Data', href: '/services/technical-data' },
    { label: 'CSI 3-Part Specs', href: '/services/csi-specs' },
    { label: 'Contractor QA', href: '/services/contractor-qa' },
  ],
};

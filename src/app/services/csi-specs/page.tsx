import React from 'react';
import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'CSI 3-Part Specifications | WOLFER TILE SOLUTION',
  description:
    'Comprehensive architectural specification documents tailored for MasterFormat Section 09 30 00 (Tiling) and Section 09 30 19 (Ceramic Tiling).',
};

const specSections = [
  {
    part: 'PART 1',
    title: 'General',
    items: [
      'Scope of Work & Related Sections',
      'Applicable Standards (ANSI, ASTM, ISO)',
      'Submittals & Product Data Requirements',
      'Quality Assurance & Installer Qualifications',
      'Delivery, Storage & Handling Protocols',
      'Warranty & Performance Guarantees',
    ],
  },
  {
    part: 'PART 2',
    title: 'Products',
    items: [
      'Manufacturer Information & Contact',
      'Product Designation & Classification',
      'Physical & Chemical Properties',
      'Acceptable Substrates & Limitations',
      'Color Range & Custom Matching',
      'Packaging, Labeling & Shelf Life',
    ],
  },
  {
    part: 'PART 3',
    title: 'Execution',
    items: [
      'Substrate Preparation Requirements',
      'Mixing Ratios & Application Methods',
      'Curing Conditions & Protection Protocols',
      'Inspection & Testing Procedures',
      'Cleaning & Post-Installation Care',
      'Field Quality Control & Documentation',
    ],
  },
];

export default function CSISpecsPage() {
  return (
    <div className="py-16 md:py-24 bg-surface pb-24 md:pb-32">
      <Container>
        <SectionHeading
          eyebrow="Architectural Documentation"
          title="CSI 3-Part Specifications"
          description="MasterFormat-aligned specification documents covering General requirements, Product data, and Execution procedures for all Wolfer systems."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {specSections.map((section) => (
            <div
              key={section.part}
              className="bg-white p-8 border border-[#e9e8e6] shadow-industrial flex flex-col justify-between"
            >
              <div>
                <span className="font-headline text-3xl font-bold text-[#ba0013] block mb-2">
                  {section.part}
                </span>
                <h3 className="font-headline text-xl font-bold text-[#1a1c1b] mb-6 uppercase">
                  {section.title}
                </h3>
                <ul className="space-y-3 border-t border-[#efeeec] pt-4">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start text-sm font-body text-[#1a1c1b]">
                      <span className="w-1.5 h-1.5 bg-[#ba0013] mr-2.5 mt-1.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-[#efeeec] flex justify-between items-center text-xs font-mono text-[#757474]">
                <span>MASTERFORMAT 09 30 00</span>
                <span className="text-[#ba0013] font-bold">CSI</span>
              </div>
            </div>
          ))}
        </div>

        {/* Request Specification CTA */}
        <div className="mt-16 bg-[#1a1a1a] text-white p-8 md:p-12 shadow-industrial border-t-4 border-[#e31e24] flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h3 className="font-headline text-2xl font-bold uppercase mb-2">
              Request Project-Specific Specifications
            </h3>
            <p className="font-body text-sm text-[#dadad8] max-w-xl">
              Our technical team authors custom CSI 3-part specifications tailored to your project&apos;s substrate conditions, tile format, and performance requirements.
            </p>
          </div>
          <Button href="/contact" size="lg" variant="brand">
            Request Spec Package
          </Button>
        </div>
      </Container>
    </div>
  );
}

import React from 'react';
import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Technical Data Sheets | WOLFER TILE SOLUTION',
  description:
    'Access comprehensive technical data sheets covering polymer-modified adhesive performance, epoxy grout chemical resistance, and primer penetration depths.',
};

const dataSheets = [
  {
    title: 'Wolfer Pro-Bond TDS',
    desc: 'Polymer-modified tile adhesive covering tensile bond strength, open time, pot life, compressive strength, and substrate compatibility charts.',
    specs: ['Tensile Bond: ≥ 1.0 MPa', 'Open Time: 30 mins', 'Pot Life: 4 hrs', 'Coverage: 3–5 kg/m²'],
  },
  {
    title: 'Wolfer Epoxy Grout TDS',
    desc: '100% solids reactive resin system data including chemical resistance matrix, stain resistance ratings, and curing profiles.',
    specs: ['Compressive Strength: ≥ 70 MPa', 'Chemical Resistance: Class A', 'Water Absorption: 0.01%', 'Cure Time: 24 hrs'],
  },
  {
    title: 'Wolfer Prime-Seal TDS',
    desc: 'Deep-penetrating primer performance data for porous screeds, concrete substrates, and cementitious surfaces.',
    specs: ['Penetration Depth: 10 mm', 'Dry Time: 20 mins', 'Coverage: 5–8 m²/L', 'Substrate Compatibility: Universal'],
  },
];

export default function TechnicalDataPage() {
  return (
    <div className="py-16 md:py-24 bg-surface pb-24 md:pb-32">
      <Container>
        <SectionHeading
          eyebrow="Engineering Documentation"
          title="Technical Data Sheets"
          description="Comprehensive performance documentation for every Wolfer product — tensile values, cure profiles, chemical resistance matrices, and application parameters."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {dataSheets.map((sheet) => (
            <div
              key={sheet.title}
              className="bg-white p-8 border border-[#e9e8e6] shadow-industrial flex flex-col justify-between"
            >
              <div>
                <h3 className="font-headline text-xl font-bold text-[#1a1c1b] mb-4 uppercase">
                  {sheet.title}
                </h3>
                <p className="font-body text-sm text-[#5d3f3c] leading-relaxed mb-6">
                  {sheet.desc}
                </p>
                <ul className="space-y-2 border-t border-[#efeeec] pt-4 mb-6">
                  {sheet.specs.map((spec) => (
                    <li key={spec} className="flex items-center text-xs font-body text-[#1a1c1b]">
                      <span className="w-1.5 h-1.5 bg-[#ba0013] mr-2.5 flex-shrink-0" />
                      <span className="font-mono">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-4 border-t border-[#efeeec]">
                <Button href="/contact" size="sm" variant="secondary" fullWidth>
                  Request Full TDS
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Brochure Download Band */}
        <div className="mt-16 bg-[#1a1a1a] text-white p-8 md:p-12 shadow-industrial border-t-4 border-[#e31e24] flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h3 className="font-headline text-2xl font-bold uppercase mb-2">
              Download Full Product Brochure
            </h3>
            <p className="font-body text-sm text-[#dadad8] max-w-xl">
              A comprehensive PDF covering all Wolfer products, technical specifications, application guidelines, and substrate compatibility charts.
            </p>
          </div>
          <a
            href="/brochures/WOLFER_BROCHER.pdf"
            download
            className="inline-flex items-center justify-center font-headline uppercase font-bold tracking-[0.1em] transition-all duration-200 rounded-none select-none cursor-pointer text-sm px-8 py-4 bg-[#E31E24] text-white hover:bg-white hover:text-[#1A1A1A] shadow-industrial flex-shrink-0"
          >
            ↓ Download Brochure PDF
          </a>
        </div>
      </Container>
    </div>
  );
}

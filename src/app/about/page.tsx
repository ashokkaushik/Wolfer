import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

export default function AboutPage() {
  return (
    <div className="py-16 md:py-24 bg-surface pb-24 md:pb-32">
      <Container>
        <SectionHeading
          eyebrow="Company Ethos & Engineering"
          title="About Wolfer Tile Solution"
          description="Built on a relentless standard of structural integrity, chemical engineering, and architectural precision."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mt-12 items-center">
          <div className="lg:col-span-7 space-y-6 font-body text-body-md text-[#5d3f3c] leading-relaxed">
            <h3 className="font-headline text-3xl font-bold text-on-surface uppercase">
              BUILT FOR THE SURFACE. ENGINEERED FOR THE BOND.
            </h3>
            <p>
              Wolfer Tile Solution manufactures high-performance polymer-modified tile adhesives, reactive resin epoxy grouts, and surface primers engineered to withstand extreme shear stresses, thermal dynamics, and heavy commercial live loads.
            </p>
            <p>
              As large-format vitrified porcelain slabs and dense natural stones replace traditional ceramics, standard mortars prove vulnerable to deflection and delamination. Wolfer formulates high-tenacity bonding matrices that absorb substrate movement and eliminate structural voids.
            </p>
            <p className="font-semibold text-[#1a1c1b]">
              Contact us for technical specifications, product data sheets, or architectural submittals.
            </p>
            <div className="pt-4">
              <Button href="/contact" variant="brand">
                Contact Technical Team
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#1a1a1a] text-white p-8 md:p-12 shadow-industrial border-t-4 border-[#e31e24]">
            <h4 className="font-headline text-2xl font-bold uppercase mb-4">
              The Wolfer Principles
            </h4>
            <ul className="space-y-4 text-sm font-body text-[#dadad8]">
              <li className="flex items-start">
                <span className="font-headline text-[#e31e24] font-bold mr-3 text-lg">01</span>
                <span><strong>Zero Compromise on Raw Polymers:</strong> Exclusively high-grade resins ensuring predictable curing and bond tenacity.</span>
              </li>
              <li className="flex items-start">
                <span className="font-headline text-[#e31e24] font-bold mr-3 text-lg">02</span>
                <span><strong>Strict Rectilinear Architecture:</strong> Engineered to match 0px tolerance standards demanded by precision tile layers.</span>
              </li>
              <li className="flex items-start">
                <span className="font-headline text-[#e31e24] font-bold mr-3 text-lg">03</span>
                <span><strong>Architectural Transparency:</strong> Grounded data sheets, verifiable application limits, and direct engineering support.</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}

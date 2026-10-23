import React from 'react';
import type { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Contractor QA Reviews | WOLFER TILE SOLUTION',
  description:
    'On-site application training, notch-trowel coverage audits, and quality assurance inspections ensuring complete manufacturer warranty compliance.',
};

const qaServices = [
  {
    num: '01',
    title: 'Pre-Installation Substrate Audit',
    desc: 'Comprehensive field evaluation of substrate flatness, deflection limits, moisture vapor emission rates, and surface tensile pull-off strength before any adhesive deployment.',
    deliverables: ['Moisture Test Report', 'Substrate Flatness Map', 'Pull-off Strength Values'],
  },
  {
    num: '02',
    title: 'Application Training & Certification',
    desc: 'Hands-on training sessions covering proper mixing ratios, notch trowel selection, back-buttering techniques for large-format slabs, and epoxy grout application methodology.',
    deliverables: ['Training Certificate', 'Best Practice Manual', 'Video Documentation'],
  },
  {
    num: '03',
    title: 'In-Progress Coverage Verification',
    desc: 'On-site trowel coverage audits during installation verifying minimum 95% adhesive contact behind tiles, with photographic documentation and corrective action guidance.',
    deliverables: ['Coverage Audit Report', 'Photo Evidence Log', 'Corrective Action Plan'],
  },
  {
    num: '04',
    title: 'Final QA Walk-Through & Sign-Off',
    desc: 'Post-installation quality assurance inspection covering grout joint integrity, tile alignment, lippage measurement, and comprehensive warranty compliance verification.',
    deliverables: ['QA Sign-Off Certificate', 'Warranty Compliance Report', 'Punch List (if applicable)'],
  },
];

export default function ContractorQAPage() {
  return (
    <div className="py-16 md:py-24 bg-surface pb-24 md:pb-32">
      <Container>
        <SectionHeading
          eyebrow="Field Quality Assurance"
          title="Contractor QA Reviews & Site Inspection"
          description="Comprehensive on-site quality assurance programs ensuring every Wolfer installation meets manufacturer standards and warranty compliance requirements."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {qaServices.map((service) => (
            <div
              key={service.num}
              className="bg-white p-8 border border-[#e9e8e6] shadow-industrial flex flex-col justify-between"
            >
              <div>
                <span className="font-headline text-4xl font-bold text-[#ba0013] block mb-4">
                  {service.num}
                </span>
                <h3 className="font-headline text-xl font-bold text-[#1a1c1b] mb-4 uppercase">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-[#5d3f3c] leading-relaxed mb-6">
                  {service.desc}
                </p>

                {/* Deliverables */}
                <div className="border-t border-[#efeeec] pt-4">
                  <span className="font-headline text-xs tracking-widest text-[#8c4f00] uppercase font-bold block mb-3">
                    Deliverables
                  </span>
                  <ul className="space-y-2">
                    {service.deliverables.map((d) => (
                      <li key={d} className="flex items-center text-xs font-body text-[#1a1c1b]">
                        <span className="w-1.5 h-1.5 bg-[#2e7d32] mr-2.5 flex-shrink-0" />
                        <span className="font-mono">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#efeeec] flex justify-between items-center text-xs font-mono text-[#757474]">
                <span>QA STAGE {service.num}</span>
                <span className="text-[#2e7d32] font-bold">CERTIFIED</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-[#1a1a1a] text-white p-8 md:p-12 shadow-industrial border-t-4 border-[#e31e24] flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h3 className="font-headline text-2xl font-bold uppercase mb-2">
              Schedule a QA Inspection
            </h3>
            <p className="font-body text-sm text-[#dadad8] max-w-xl">
              Request an on-site visit from our field engineering team. Available for pre-installation audits, in-progress reviews, and final sign-off inspections.
            </p>
          </div>
          <Button href="/contact" size="lg" variant="brand">
            Request QA Visit
          </Button>
        </div>
      </Container>
    </div>
  );
}

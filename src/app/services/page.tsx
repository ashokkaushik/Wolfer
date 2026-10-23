import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

export default function ServicesPage() {
  const services = [
    {
      num: '01',
      title: 'On-Site Substrate Diagnostic & Moisture Testing',
      desc: 'Field inspection and quantitative testing evaluating tensile pull-off limits, relative humidity vapor emissions, and structural deflection before installation.',
    },
    {
      num: '02',
      title: 'CSI 3-Part Specification Authoring',
      desc: 'Comprehensive architectural specification documents tailored specifically for MasterFormat Section 09 30 00 (Tiling) and Section 09 30 19 (Ceramic Tiling).',
    },
    {
      num: '03',
      title: 'Contractor QA Reviews & Site Inspection',
      desc: 'On-site hands-on application training, notch-trowel coverage audits, and quality assurance walk-throughs ensuring complete manufacturer warranty compliance.',
    },
  ];

  return (
    <div className="py-16 md:py-24 bg-surface pb-24 md:pb-32">
      <Container>
        <SectionHeading
          eyebrow="Architectural Consultation"
          title="Technical Engineering Services"
          description="Comprehensive on-site support, submittal documentation, and field diagnostic reviews for architects, specifiers, and general contractors."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {services.map((s) => (
            <div
              key={s.num}
              className="bg-white p-8 border border-[#e9e8e6] shadow-industrial flex flex-col justify-between"
            >
              <div>
                <span className="font-headline text-3xl font-bold text-[#ba0013] block mb-4">
                  {s.num}
                </span>
                <h3 className="font-headline text-xl font-bold text-[#1a1c1b] mb-4 uppercase">
                  {s.title}
                </h3>
                <p className="font-body text-sm text-[#5d3f3c] leading-relaxed">
                  {s.desc}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#efeeec]">
                <Button href="/contact" size="sm" variant="secondary" fullWidth>
                  Request Service
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

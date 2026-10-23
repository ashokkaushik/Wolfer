'use client';

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="py-16 md:py-24 bg-surface pb-24 md:pb-32">
      <Container>
        <SectionHeading
          eyebrow="Direct Technical Desk"
          title="Project Specification & Enquiry"
          description="Submit your architectural project requirements, request physical product sample kits, or consult with our chemical engineering team."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mt-12">
          {/* Contact Form */}
          <div className="lg:col-span-8 bg-white p-8 md:p-12 border border-[#e9e8e6] shadow-industrial">
            {submitted ? (
              <div className="p-8 bg-surface-container-low border border-[#2e7d32] text-center">
                <span className="font-headline text-2xl text-[#2e7d32] font-bold block mb-2 uppercase">
                  Enquiry Received
                </span>
                <p className="font-body text-sm text-[#1a1c1b]">
                  Thank you for contacting Wolfer Tile Solution. Our architectural engineering team will review your specifications and respond shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-body text-xs font-bold uppercase tracking-wider text-on-surface mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      className="w-full bg-[#faf9f7] border border-outline/40 p-3.5 font-body text-sm text-on-surface focus:outline-none focus:border-[#ba0013]"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-xs font-bold uppercase tracking-wider text-on-surface mb-2">
                      Architectural Firm / Company *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Studio Arc Design"
                      className="w-full bg-[#faf9f7] border border-outline/40 p-3.5 font-body text-sm text-on-surface focus:outline-none focus:border-[#ba0013]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-body text-xs font-bold uppercase tracking-wider text-on-surface mb-2">
                      Professional Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="architect@firm.com"
                      className="w-full bg-[#faf9f7] border border-outline/40 p-3.5 font-body text-sm text-on-surface focus:outline-none focus:border-[#ba0013]"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-xs font-bold uppercase tracking-wider text-on-surface mb-2">
                      Area of Interest
                    </label>
                    <select className="w-full bg-[#faf9f7] border border-outline/40 p-3.5 font-body text-sm text-on-surface focus:outline-none focus:border-[#ba0013]">
                      <option>Commercial Tile Adhesives</option>
                      <option>100% Solids Epoxy Grouts</option>
                      <option>Substrate Primers & Prep</option>
                      <option>Sample Kit & Submittals Request</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-body text-xs font-bold uppercase tracking-wider text-on-surface mb-2">
                    Project Scope & Technical Details *
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Specify tile dimensions (e.g. 1200x2400mm), substrate type (concrete screed, cement board), interior/exterior location, and estimated square footage..."
                    className="w-full bg-[#faf9f7] border border-outline/40 p-3.5 font-body text-sm text-on-surface focus:outline-none focus:border-[#ba0013]"
                  />
                </div>

                <div>
                  <Button type="submit" variant="brand" size="lg">
                    Submit Technical Enquiry
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Contact Details Card */}
          <div className="lg:col-span-4 bg-[#1a1a1a] text-white p-8 md:p-12 shadow-industrial flex flex-col justify-between border-t-4 border-[#e31e24]">
            <div>
              <h3 className="font-headline text-2xl font-bold uppercase mb-6">
                Technical Consultation Desk
              </h3>
              <p className="font-body text-sm text-[#dadad8] mb-8 leading-relaxed">
                Direct communication with Wolfer specification engineers for ASTM / ANSI benchmark alignment, custom color matching, and on-site testing.
              </p>

              <div className="space-y-4 text-sm font-body">
                <div>
                  <span className="font-headline text-xs tracking-widest text-[#e31e24] uppercase block">
                    Product Inquiries
                  </span>
                  <span className="text-white">info@wolfer.com</span>
                </div>
                <div>
                  <span className="font-headline text-xs tracking-widest text-[#e31e24] uppercase block">
                    Physical Samples
                  </span>
                  <span className="text-white">Sample kits shipped to architectural offices nationwide.</span>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-[#333] mt-8 text-xs font-mono text-[#757474]">
              Zero Compromise Engineering
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

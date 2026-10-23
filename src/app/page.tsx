import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { productsData } from '@/data/products';

export default function HomePage() {
  const stages = [
    {
      num: '01',
      title: 'Substrate Diagnosis',
      desc: 'Rigorous field inspection verifying substrate deflection, tensile pull-off limits, and relative humidity vapor emissions before adhesive deployment.',
    },
    {
      num: '02',
      title: 'Surface Priming',
      desc: 'Application of deep-penetration multi-substrate primers to suppress dust and form a high-tenacity mechanical keying layer.',
    },
    {
      num: '03',
      title: 'Polymer Bedding',
      desc: 'Deployment of high-performance polymer-modified thin-set mortars formulated for large-format slabs and zero vertical slip.',
    },
    {
      num: '04',
      title: 'Slab Precision Placement',
      desc: 'Mechanical alignment and uniform trowel transfer ensuring 100% continuous void-free adhesive coverage under load.',
    },
    {
      num: '05',
      title: 'Epoxy Joint Fusion',
      desc: '100% solids reactive resin epoxy grout installation delivering zero water absorption, chemical immunity, and permanent color fastness.',
    },
    {
      num: '06',
      title: 'Architectural Sealing',
      desc: 'Integration of perimeter and field movement joints accommodating structural settlement and thermal expansion cycles.',
    },
    {
      num: '07',
      title: 'QA Handover',
      desc: 'Comprehensive tensile pull-off verification and final architectural specification compliance sign-off.',
    },
  ];

  return (
    <div className="pb-12 md:pb-0">
      {/* 1. Hero Section — Industrial Material Zone */}
      <section className="relative w-full min-h-[85vh] lg:min-h-screen flex items-center bg-[#1A1A1A] text-white border-b border-[#2F3130] overflow-hidden">
        {/* Background Subtle Architectural Texture & Overlay */}
        <div className="absolute inset-0 z-0 opacity-20 mix-blend-luminosity">
          <div className="absolute inset-0 bg-[radial-gradient(#ba0013_1px,transparent_1px)] [background-size:32px_32px]" />
        </div>

        <Container className="relative z-10 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 border border-[#e31e24] px-3.5 py-1 mb-6 bg-[#e31e24]/10">
                <span className="w-2 h-2 bg-[#e31e24]" />
                <span className="font-body text-xs font-bold uppercase tracking-[0.2em] text-[#ffdad6]">
                  Architectural Bonding Systems
                </span>
              </div>

              <h1 className="font-headline text-display-lg-mobile md:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase leading-[0.95] tracking-tight mb-6">
                PRECISION IN <br />
                <span className="text-[#e31e24]">EVERY BOND.</span>
              </h1>

              <p className="font-headline text-lg sm:text-xl lg:text-2xl text-[#dadad8] uppercase tracking-wider mb-6">
                BUILT FOR THE SURFACE. ENGINEERED FOR THE BOND.
              </p>

              <p className="font-body text-body-md sm:text-body-lg text-[#c8c6c5] max-w-2xl leading-relaxed mb-10">
                High-performance polymer-modified tile adhesives and 100% solids reactive resin epoxy grouts engineered for zero failure across demanding commercial architectures.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button href="/products" size="lg" variant="brand">
                  Explore Catalog
                </Button>
                <Button href="/services" size="lg" variant="outline">
                  Technical Specifications
                </Button>
              </div>
            </div>

            {/* Right Product Spotlight Image */}
            <div className="lg:col-span-4 mt-12 lg:mt-0 flex justify-center">
              <div className="relative w-full max-w-[420px] aspect-[4/5] bg-white/5 border border-white/10 p-6 shadow-2xl">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/products/product-adhesive.jpeg"
                    alt="Wolfer Tile Solution High-Performance Polymer Adhesive Packaging"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-[#1A1A1A]/95 p-3 border-l-2 border-[#e31e24]">
                  <p className="font-headline text-xs tracking-wider text-white uppercase font-bold">
                    Official Product Packaging
                  </p>
                  <p className="font-body text-[11px] text-[#dadad8]">
                    High-Yield Polymer Modified Mortar
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Architectural Benchmark Band */}
      <section className="bg-[#ba0013] text-white px-margin-mobile md:px-margin-desktop py-6">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <span className="font-headline text-base md:text-xl tracking-wider uppercase font-semibold">
              Zero Void Tolerance • 100% Solid Reactive Epoxy • High Tensile Bond Strength
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-[#ffdad6] border border-[#ffdad6]/40 px-3 py-1">
              Industrial Architecture Grade
            </span>
          </div>
        </Container>
      </section>

      {/* 3. Section: "The Wolfer Standard" */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            {/* Left Narrative */}
            <div className="md:col-span-6 lg:col-span-5 flex flex-col gap-6 order-2 md:order-1">
              <span className="font-body text-label-caps uppercase tracking-[0.2em] font-bold text-[#8c4f00]">
                Engineering Philosophy
              </span>
              <h2 className="font-headline text-headline-xl md:text-5xl font-bold text-on-surface uppercase leading-none">
                The Wolfer Standard
              </h2>
              <p className="font-body text-body-lg text-tertiary leading-relaxed">
                Engineered for absolute structural integrity. Our manufacturing processes prioritize rigorous tolerance levels and uncompromising material strength. Designed specifically for architects, specifiers, and contractors who demand technical perfection on challenging substrates.
              </p>
              <div className="pt-2">
                <Button href="/about" variant="secondary">
                  Learn About Our Process
                </Button>
              </div>
            </div>

            {/* Right Industrial Image Card */}
            <div className="md:col-span-6 lg:col-span-7 order-1 md:order-2">
              <div className="relative w-full aspect-[16/10] bg-[#e9e8e6] border border-outline/30 overflow-hidden shadow-industrial">
                <Image
                  src="/images/products/product-pack-1.jpeg"
                  alt="Wolfer Packaging & Industrial Material Integrity"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-[#1a1c1b]/80 p-4 text-white">
                  <p className="font-headline text-xs uppercase tracking-widest font-bold">
                    Rigorous Manufacturing & Testing
                  </p>
                  <p className="font-body text-xs text-[#dadad8]">
                    Strict Quality Assurance on every production batch
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Section: The 7-Stage Architectural Journey */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-[#f4f3f1] border-t border-b border-[#e7bdb8]/40">
        <Container>
          <SectionHeading
            eyebrow="Systematic Application Sequence"
            title="The 7-Stage Architectural Journey"
            description="A disciplined, sequence-governed methodology engineered to eliminate installation failure on large-format vitrified slabs and architectural stone."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stages.map((stage) => (
              <div
                key={stage.num}
                className="bg-white p-8 border border-[#e9e8e6] shadow-industrial flex flex-col justify-between"
              >
                <div>
                  <span className="font-headline text-4xl font-bold text-[#ba0013] block mb-4">
                    {stage.num}
                  </span>
                  <h3 className="font-headline text-xl font-bold text-[#1a1c1b] mb-3 uppercase">
                    {stage.title}
                  </h3>
                  <p className="font-body text-sm text-[#5d3f3c] leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-[#efeeec] flex justify-between items-center text-xs font-mono text-[#757474]">
                  <span>STAGE {stage.num}</span>
                  <span className="text-[#ba0013] font-bold">SPECIFIED</span>
                </div>
              </div>
            ))}

            {/* Summary Specification Card */}
            <div className="bg-[#1a1a1a] text-white p-8 shadow-industrial flex flex-col justify-between border-t-4 border-[#e31e24]">
              <div>
                <span className="font-headline text-4xl font-bold text-[#e31e24] block mb-4">
                  END-TO-END
                </span>
                <h3 className="font-headline text-xl font-bold mb-3 uppercase">
                  Project Guarantee
                </h3>
                <p className="font-body text-sm text-[#dadad8] leading-relaxed">
                  Our technical engineers consult across all 7 stages to formulate tailored CSI 3-part architectural specifications.
                </p>
              </div>
              <div className="mt-8">
                <Button href="/services" size="sm" variant="brand" fullWidth>
                  Consult Engineering
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Section: Solutions for Every Surface (Core Products Portfolio) */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="font-body text-label-caps uppercase tracking-[0.2em] font-bold text-[#ba0013] block mb-2">
                Core Formulations
              </span>
              <h2 className="font-headline text-headline-xl md:text-display-lg-mobile font-bold text-on-surface uppercase leading-none">
                Solutions for Every Surface
              </h2>
            </div>
            <Link
              href="/products"
              className="font-headline text-sm font-bold tracking-widest text-[#ba0013] hover:text-[#1a1a1a] uppercase transition-colors"
            >
              View Full Catalog &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productsData.map((prod) => (
              <div
                key={prod.id}
                className="bg-white border border-[#e9e8e6] shadow-industrial flex flex-col justify-between overflow-hidden"
              >
                {/* Product Image */}
                <div className="relative w-full aspect-[4/3] bg-[#f9f8f6] p-6 border-b border-[#efeeec]">
                  <Image
                    src={prod.image}
                    alt={prod.title}
                    fill
                    className="object-contain p-4"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className="px-2.5 py-1 text-xs font-mono font-bold text-white uppercase tracking-wider"
                      style={{ backgroundColor: prod.badgeColor || '#1A1A1A' }}
                    >
                      {prod.category}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-headline text-2xl font-bold text-on-surface mb-2 uppercase">
                      {prod.title}
                    </h3>
                    <p className="font-headline text-xs tracking-wider text-[#8c4f00] uppercase font-semibold mb-4">
                      {prod.subtitle}
                    </p>
                    <p className="font-body text-sm text-[#5d3f3c] leading-relaxed mb-6">
                      {prod.description}
                    </p>

                    {prod.features && (
                      <ul className="space-y-2 mb-6 border-t border-[#efeeec] pt-4">
                        {prod.features.slice(0, 3).map((f) => (
                          <li key={f} className="flex items-center text-xs font-body text-[#1a1c1b]">
                            <span className="w-1.5 h-1.5 bg-[#ba0013] mr-2.5 flex-shrink-0" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="pt-4 border-t border-[#efeeec] flex items-center justify-between">
                    <Link
                      href={`/products/${prod.id}`}
                      className="font-headline text-xs font-bold text-[#ba0013] hover:text-[#1a1a1a] uppercase tracking-wider"
                    >
                      View Specs &rarr;
                    </Link>
                    <Link
                      href="/contact"
                      className="font-headline text-xs font-bold text-on-surface hover:text-[#ba0013] uppercase tracking-wider"
                    >
                      Enquire
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. Section: Architectural Consultation CTA Band */}
      <section className="bg-[#1A1A1A] text-white px-margin-mobile md:px-margin-desktop py-20 border-t border-[#2F3130]">
        <Container>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            <div className="max-w-2xl">
              <span className="font-body text-label-caps uppercase tracking-[0.2em] font-bold text-[#e31e24] block mb-2">
                Technical Partnership
              </span>
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight mb-4">
                Ready to specify Wolfer on your next project?
              </h2>
              <p className="font-body text-sm sm:text-base text-[#dadad8] leading-relaxed">
                Connect with our technical engineering desk for project submittals, testing documentation, substrate review, or physical sample kits.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <Button href="/contact" size="lg" variant="brand">
                Request Consultation
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

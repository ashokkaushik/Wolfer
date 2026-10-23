import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { productsData } from '@/data/products';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

interface ProductDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return productsData.map((product) => ({
    slug: product.id,
  }));
}

export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const product = productsData.find((p) => p.id === params.slug);
  if (!product) {
    return {
      title: 'Product Not Found | Wolfer Tile Solution',
    };
  }
  return {
    title: `${product.title} | ${product.subtitle} | Wolfer Tile Solution`,
    description: product.description,
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = productsData.find((p) => p.id === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-surface pb-24 md:pb-32">
      {/* 1. Architectural Breadcrumb Header */}
      <section className="bg-surface-container border-b border-[#e7bdb8]/40 py-6 px-margin-mobile md:px-margin-desktop">
        <Container>
          <nav className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#757474]">
            <Link href="/" className="hover:text-on-surface transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-on-surface transition-colors">
              Products
            </Link>
            <span>/</span>
            <span className="text-[#ba0013] font-bold">{product.title}</span>
          </nav>
        </Container>
      </section>

      {/* 2. Primary Product Showcase */}
      <section className="py-12 md:py-20 px-margin-mobile md:px-margin-desktop">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
            {/* Left: Product Image & Packshot */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="relative w-full aspect-[4/3] bg-white border border-[#e9e8e6] shadow-industrial p-8 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <span
                    className="px-3 py-1 font-mono text-xs font-bold text-white uppercase tracking-wider"
                    style={{ backgroundColor: product.badgeColor || '#1A1A1A' }}
                  >
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Packaging Specification Card */}
              <div className="bg-white border border-[#e9e8e6] p-6 shadow-industrial">
                <span className="font-mono text-xs text-[#757474] uppercase tracking-wider block mb-1">
                  Packaging Specification
                </span>
                <p className="font-headline text-lg font-bold text-on-surface uppercase">
                  {product.packaging}
                </p>
                {product.brochurePdf && (
                  <div className="mt-4 pt-4 border-t border-[#efeeec]">
                    <a
                      href={product.brochurePdf}
                      download="WOLFER_TECHNICAL_BROCHURE.pdf"
                      className="inline-flex items-center gap-2 font-headline text-xs font-bold text-[#ba0013] hover:text-on-surface uppercase tracking-wider transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download Technical Brochure (PDF)
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Technical Specs & Details */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <span className="font-body text-label-caps uppercase tracking-[0.2em] font-bold text-[#ba0013] block mb-2">
                  {product.category} Series
                </span>
                <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-on-surface mb-3 leading-none">
                  {product.title}
                </h1>
                <p className="font-headline text-lg sm:text-xl text-[#8c4f00] uppercase tracking-wider font-semibold mb-6">
                  {product.subtitle}
                </p>
                <p className="font-body text-body-lg text-[#5d3f3c] leading-relaxed mb-8">
                  {product.description}
                </p>

                {/* Key Engineered Features */}
                <div className="mb-8">
                  <h3 className="font-headline text-sm uppercase tracking-widest text-on-surface font-bold mb-4">
                    Key Performance Attributes
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {product.features.map((feature) => (
                      <div
                        key={feature}
                        className="bg-white p-3.5 border border-[#e9e8e6] flex items-start gap-3"
                      >
                        <span className="w-2 h-2 bg-[#ba0013] mt-1.5 flex-shrink-0" />
                        <span className="font-body text-xs font-semibold text-on-surface">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-[#e7bdb8]/40">
                  <Button href="/contact" size="lg" variant="brand">
                    Request Specification / Quote
                  </Button>
                  <Button href="/contact" size="lg" variant="secondary">
                    Request Physical Sample Kit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Architectural Technical Data Table */}
      <section className="py-12 md:py-16 px-margin-mobile md:px-margin-desktop bg-[#f4f3f1] border-t border-b border-[#e7bdb8]/40">
        <Container>
          <div className="mb-8">
            <span className="font-body text-label-caps uppercase tracking-[0.2em] font-bold text-[#8c4f00] block mb-2">
              Performance Verification
            </span>
            <h2 className="font-headline text-3xl md:text-4xl font-bold uppercase tracking-tight text-on-surface">
              Technical Specification Parameters
            </h2>
            <p className="font-body text-sm text-[#5d3f3c] mt-2">
              Architectural data benchmarks. Contact Wolfer technical engineering for project-specific test certificates.
            </p>
          </div>

          <div className="bg-white border border-[#e9e8e6] shadow-industrial overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#1a1a1a] text-white font-headline text-xs tracking-widest uppercase">
                  <th className="py-4 px-6 font-semibold w-1/3 border-b border-[#333]">
                    Parameter
                  </th>
                  <th className="py-4 px-6 font-semibold border-b border-[#333]">
                    Specification Specification / Value
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#efeeec] font-body text-sm">
                {Object.entries(product.technicalSpecs).map(([param, value]) => (
                  <tr key={param} className="hover:bg-[#faf9f7] transition-colors">
                    <td className="py-4 px-6 font-semibold text-on-surface font-headline uppercase tracking-wider text-xs">
                      {param}
                    </td>
                    <td className="py-4 px-6 text-[#5d3f3c]">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* 4. Substrate Compatibility & Applications Matrix */}
      <section className="py-12 md:py-16 px-margin-mobile md:px-margin-desktop">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Suitable Substrates */}
            <div className="bg-white p-8 border border-[#e9e8e6] shadow-industrial">
              <span className="font-headline text-xs font-bold text-[#ba0013] uppercase tracking-widest block mb-2">
                Compatibility Matrix
              </span>
              <h3 className="font-headline text-2xl font-bold uppercase text-on-surface mb-6">
                Suitable Substrates
              </h3>
              <ul className="space-y-3 font-body text-sm text-[#5d3f3c]">
                {product.substrates.map((sub) => (
                  <li key={sub} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#2e7d32] flex-shrink-0" />
                    <span>{sub}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recommended Applications */}
            <div className="bg-white p-8 border border-[#e9e8e6] shadow-industrial">
              <span className="font-headline text-xs font-bold text-[#1a237e] uppercase tracking-widest block mb-2">
                Specification Scope
              </span>
              <h3 className="font-headline text-2xl font-bold uppercase text-on-surface mb-6">
                Recommended Applications
              </h3>
              <ul className="space-y-3 font-body text-sm text-[#5d3f3c]">
                {product.applications.map((app) => (
                  <li key={app} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#1a237e] flex-shrink-0" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Mixing, Application & Handling Protocol */}
      {(product.mixingAndApplication || product.storageAndHandling) && (
        <section className="py-12 md:py-16 px-margin-mobile md:px-margin-desktop bg-[#efeeec] border-t border-b border-[#e3e2e0]">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {product.mixingAndApplication && (
                <div className="bg-white p-8 border-t-4 border-t-[#ba0013] shadow-industrial">
                  <h4 className="font-headline text-xl font-bold uppercase text-on-surface mb-3">
                    Mixing & Application Guidelines
                  </h4>
                  <p className="font-body text-sm text-[#5d3f3c] leading-relaxed">
                    {product.mixingAndApplication}
                  </p>
                </div>
              )}
              {product.storageAndHandling && (
                <div className="bg-white p-8 border-t-4 border-t-[#8c4f00] shadow-industrial">
                  <h4 className="font-headline text-xl font-bold uppercase text-on-surface mb-3">
                    Storage & Shelf Life Protocol
                  </h4>
                  <p className="font-body text-sm text-[#5d3f3c] leading-relaxed">
                    {product.storageAndHandling}
                  </p>
                </div>
              )}
            </div>
          </Container>
        </section>
      )}

      {/* 6. Technical Engineering Consultation CTA */}
      <section className="bg-[#1a1a1a] text-white px-margin-mobile md:px-margin-desktop py-16 mt-16">
        <Container>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            <div>
              <h2 className="font-headline text-3xl font-bold uppercase tracking-tight mb-2">
                Need specification submittals for {product.title}?
              </h2>
              <p className="font-body text-sm text-[#dadad8] max-w-xl leading-relaxed">
                Our technical specification desk provides project-specific CSI 3-part docs, pull-off calculations, and on-site testing support.
              </p>
            </div>
            <Button href="/contact" size="lg" variant="brand">
              Contact Engineering Desk
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}

'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { productsData } from '@/data/products';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Adhesives', 'Epoxy Grout', 'Primers'];

  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.features.some((f) =>
          f.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="py-16 md:py-24 bg-surface pb-24 md:pb-32">
      <Container>
        {/* Header & Brochure Download */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-6 border-b border-[#e7bdb8]/40 pb-8">
          <div>
            <SectionHeading
              eyebrow="Architectural Catalog"
              title="Engineered Products Portfolio"
              description="High-performance polymer-modified thin-set mortars, 100% solids reactive resin epoxy grouts, and substrate preparation primers."
              className="mb-0"
            />
          </div>
          <div>
            <a
              href="/docs/wolfer-brochure.pdf"
              download="WOLFER_TECHNICAL_BROCHURE.pdf"
              className="inline-flex items-center gap-2.5 bg-[#1a1a1a] text-white hover:bg-[#ba0013] px-6 py-3.5 font-headline text-xs font-bold tracking-widest uppercase transition-colors shadow-industrial"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Brochure (PDF)
            </a>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 mb-10 bg-white p-4 border border-[#e9e8e6] shadow-industrial">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`font-headline text-xs font-bold uppercase tracking-wider px-5 py-2.5 transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#1a1a1a] text-white'
                    : 'bg-[#f4f3f1] text-on-surface hover:bg-[#e9e8e6]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="w-full md:w-72">
            <input
              type="text"
              placeholder="Search specifications..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#faf9f7] border border-outline/40 p-2.5 font-body text-xs text-on-surface focus:outline-none focus:border-[#ba0013]"
            />
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white border border-[#e9e8e6] p-8 shadow-industrial">
            <h3 className="font-headline text-2xl uppercase text-on-surface mb-2 font-bold">
              No matching products found
            </h3>
            <p className="font-body text-sm text-[#5d3f3c] mb-6">
              Try adjusting your category filter or search keywords.
            </p>
            <Button onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }} variant="secondary">
              Reset Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                className="bg-white border border-[#e9e8e6] shadow-industrial flex flex-col justify-between overflow-hidden hover:border-[#ba0013]/60 transition-colors"
              >
                {/* Image Section */}
                <Link
                  href={`/products/${prod.id}`}
                  className="relative w-full aspect-[4/3] bg-[#f9f8f6] p-6 border-b border-[#efeeec] block"
                >
                  <Image
                    src={prod.image}
                    alt={prod.title}
                    fill
                    className="object-contain p-4 transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className="px-2.5 py-1 text-xs font-mono font-bold text-white uppercase tracking-wider"
                      style={{ backgroundColor: prod.badgeColor || '#1A1A1A' }}
                    >
                      {prod.category}
                    </span>
                  </div>
                </Link>

                {/* Content Section */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[11px] text-[#757474] uppercase tracking-wider block mb-1">
                      {prod.packaging}
                    </span>
                    <h3 className="font-headline text-2xl font-bold text-on-surface mb-2 uppercase">
                      <Link href={`/products/${prod.id}`} className="hover:text-[#ba0013] transition-colors">
                        {prod.title}
                      </Link>
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

                  <div className="pt-4 border-t border-[#efeeec] flex items-center justify-between gap-4">
                    <Link
                      href={`/products/${prod.id}`}
                      className="font-headline text-xs font-bold text-[#ba0013] hover:text-on-surface uppercase tracking-wider"
                    >
                      View Full Specs &rarr;
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
        )}
      </Container>
    </div>
  );
}

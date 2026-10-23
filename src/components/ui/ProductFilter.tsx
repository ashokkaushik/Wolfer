'use client';

import React, { useState, useEffect } from 'react';
import { productsData } from '@/data/products';
import { Product } from '@/types';

interface FilterProps {
  onFilterChange: (filtered: Product[]) => void;
}

export const ProductFilter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPackaging, setSelectedPackaging] = useState<string[]>([]);

  const categories = Array.from(new Set(productsData.map((p) => p.category)));
  const packagingOptions = Array.from(
    new Set(productsData.map((p) => p.packaging).filter(Boolean) as string[])
  );

  const handleCategoryToggle = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const handlePackagingToggle = (pack: string) => {
    setSelectedPackaging((prev) =>
      prev.includes(pack) ? prev.filter((p) => p !== pack) : [...prev, pack]
    );
  };

  useEffect(() => {
    let filtered = productsData;
    if (selectedCategories.length) {
      filtered = filtered.filter((p) => selectedCategories.includes(p.category));
    }
    if (selectedPackaging.length) {
      filtered = filtered.filter((p) => p.packaging && selectedPackaging.includes(p.packaging));
    }
    onFilterChange(filtered);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategories, selectedPackaging]);

  const hasActiveFilters = selectedCategories.length > 0 || selectedPackaging.length > 0;

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedPackaging([]);
  };

  return (
    <div className="mb-10 p-6 bg-white border border-[#e9e8e6] shadow-industrial">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-headline text-sm tracking-widest uppercase font-bold text-on-surface">
          Filter Catalog
        </h3>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="font-body text-xs text-[#ba0013] hover:text-[#1a1a1a] uppercase tracking-wider font-bold transition-colors cursor-pointer"
          >
            Clear All
          </button>
        )}
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Category Filter */}
        <div>
          <p className="font-body text-xs font-bold uppercase tracking-wider text-[#8c4f00] mb-3">
            Category
          </p>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isActive = selectedCategories.includes(cat);
              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryToggle(cat)}
                  className={`px-3 py-1.5 text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer border ${
                    isActive
                      ? 'bg-[#1a1a1a] text-white border-[#1a1a1a]'
                      : 'bg-transparent text-[#1a1c1b] border-[#e9e8e6] hover:border-[#1a1a1a]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Packaging Filter */}
        <div>
          <p className="font-body text-xs font-bold uppercase tracking-wider text-[#8c4f00] mb-3">
            Packaging
          </p>
          <div className="flex flex-wrap gap-2">
            {packagingOptions.map((pack) => {
              const isActive = selectedPackaging.includes(pack);
              return (
                <button
                  key={pack}
                  onClick={() => handlePackagingToggle(pack)}
                  className={`px-3 py-1.5 text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer border ${
                    isActive
                      ? 'bg-[#1a1a1a] text-white border-[#1a1a1a]'
                      : 'bg-transparent text-[#1a1c1b] border-[#e9e8e6] hover:border-[#1a1a1a]'
                  }`}
                >
                  {pack}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

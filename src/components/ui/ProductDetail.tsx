import React from 'react';
import Image from 'next/image';
import { Product } from '@/types';

interface ProductDetailProps {
  product: Product;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-white/80 backdrop-blur-sm border border-[#e9e8e6] shadow-industrial rounded-lg">
      {/* Hero Image */}
      <div className="relative w-full aspect-[4/3] bg-[#f9f8f6] mb-6 rounded">
        <Image src={product.image} alt={product.title} fill className="object-contain" />
        {product.badgeColor && (
          <span
            className="absolute top-4 left-4 px-2.5 py-1 text-xs font-mono font-bold text-white uppercase tracking-wider"
            style={{ backgroundColor: product.badgeColor }}
          >
            {product.category}
          </span>
        )}
      </div>
      {/* Title & Subtitle */}
      <h1 className="font-headline text-4xl font-bold text-on-surface mb-2 uppercase">{product.title}</h1>
      <p className="font-headline text-sm tracking-wider text-[#8c4f00] uppercase font-semibold mb-4">
        {product.subtitle}
      </p>
      {/* Description */}
      <p className="font-body text-base text-[#5d3f3c] leading-relaxed mb-6">{product.description}</p>
      {/* Features */}
      {product.features && (
        <ul className="space-y-2 mb-6 border-t border-[#efeeec] pt-4">
          {product.features.map((f, i) => (
            <li key={i} className="flex items-center text-sm font-body text-[#1a1c1b]">
              <span className="w-1.5 h-1.5 bg-[#ba0013] mr-2.5 flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>
      )}
      {/* Technical Specs */}
      {product.technicalSpecs && (
        <div className="mb-6">
          <h2 className="font-headline text-xl mb-2">Technical Specifications</h2>
          <table className="w-full border border-[#e9e8e6]">
            <tbody>
              {Object.entries(product.technicalSpecs).map(([key, value]) => (
                <tr key={key} className="border-b border-[#e9e8e6]">
                  <td className="p-2 font-mono text-sm bg-[#f5f5f5]">{key}</td>
                  <td className="p-2 font-mono text-sm">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {/* Brochure PDF */}
      {product.brochurePdf && (
        <div className="mb-6">
          <h2 className="font-headline text-xl mb-2">Product Brochure</h2>
          <iframe
            src={product.brochurePdf}
            className="w-full h-96 border border-[#e9e8e6]"
            title="Product brochure"
          />
          <a
            href={product.brochurePdf}
            download
            className="inline-block mt-2 btn-primary"
          >
            Download Brochure
          </a>
        </div>
      )}
    </div>
  );
};

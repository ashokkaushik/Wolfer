import React from 'react';
import Link from 'next/link';

export const MobileActionBar: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-surface border-t border-outline-variant/60 p-3 flex gap-3 shadow-[0_-4px_16px_rgba(0,0,0,0.08)]">
      <Link
        href="/products"
        className="flex-1 bg-surface-container-high text-on-surface text-center font-headline text-xs font-bold tracking-wider py-3.5 uppercase border border-outline/30 hover:bg-surface-variant transition-colors"
      >
        Products
      </Link>
      <Link
        href="/contact"
        className="flex-1 bg-[#ba0013] text-white text-center font-headline text-xs font-bold tracking-wider py-3.5 uppercase hover:bg-[#e31e24] transition-colors shadow-industrial"
      >
        Request Quote
      </Link>
    </div>
  );
};

import React from 'react';
import Link from 'next/link';
import { footerNavItems } from '@/data/navigation';
import { Container } from '@/components/ui/Container';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-inverse-surface text-surface py-section-gap border-t border-[#2F3130] pb-[100px] md:pb-section-gap">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Brand Col */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <div className="font-headline text-3xl font-bold tracking-tighter text-surface-bright uppercase">
                WOLFER<span className="text-[#e31e24]">.</span>
              </div>
              <p className="font-headline text-sm tracking-widest text-[#e31e24] uppercase mt-2">
                Built for the surface. Engineered for the bond.
              </p>
              <p className="font-body text-body-md text-[#dadad8] mt-6 leading-relaxed max-w-sm">
                Engineered tile adhesives and 100% solids epoxy grout formulations developed for architects, structural engineers, and high-performance commercial construction.
              </p>
            </div>
            <div className="mt-8 font-mono text-xs text-[#757474] uppercase tracking-widest">
              Industrial Architecture Grade
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 md:col-start-6">
            <h4 className="font-headline text-sm tracking-widest text-surface-bright uppercase mb-6 font-bold">
              Site Navigation
            </h4>
            <ul className="space-y-3 font-body text-sm text-[#dadad8]">
              {footerNavItems.navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Series */}
          <div className="md:col-span-2">
            <h4 className="font-headline text-sm tracking-widest text-surface-bright uppercase mb-6 font-bold">
              Product Series
            </h4>
            <ul className="space-y-3 font-body text-sm text-[#dadad8]">
              {footerNavItems.productLines.map((prod) => (
                <li key={prod}>
                  <span className="text-surface-dim">{prod}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Support */}
          <div className="md:col-span-2">
            <h4 className="font-headline text-sm tracking-widest text-surface-bright uppercase mb-6 font-bold">
              Technical QA
            </h4>
            <ul className="space-y-3 font-body text-sm text-[#dadad8]">
              {footerNavItems.compliance.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#2F3130] flex flex-col md:flex-row justify-between items-start md:items-center text-xs font-mono text-[#757474] gap-4">
          <p>© 2026 WOLFER TILE SOLUTION. INDUSTRIAL STRENGTH. ARCHITECTURAL PRECISION.</p>
          <p>Strict Rectilinear Architecture • 0px Tolerance</p>
        </div>
      </Container>
    </footer>
  );
};

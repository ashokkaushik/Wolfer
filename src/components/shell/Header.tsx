'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { primaryNavItems } from '@/data/navigation';
import { Button } from '@/components/ui/Button';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-50 w-full h-20 bg-surface border-b border-[#e7bdb8]/40 px-margin-mobile md:px-margin-desktop flex items-center justify-between transition-all">
        {/* Brand Logo */}
        <Link
          href="/"
          className="font-headline text-2xl md:text-headline-xl font-bold tracking-tighter text-on-surface uppercase select-none"
        >
          WOLFER<span className="text-[#e31e24]">.</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 font-body text-label-caps uppercase tracking-[0.1em] font-bold">
          {primaryNavItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors duration-200 ${
                  isActive
                    ? 'text-[#ba0013] border-b-2 border-[#ba0013] pb-1'
                    : 'text-on-surface hover:text-[#ba0013]'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Primary CTA */}
        <div className="hidden md:block">
          <Button href="/contact" size="sm">
            Request Quote
          </Button>
        </div>

        {/* Mobile Hamburger Trigger */}
        <div className="md:hidden flex items-center gap-3">
          <Button href="/contact" size="sm">
            Quote
          </Button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-on-surface focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Slide-in Drawer */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      <nav
        className={`fixed top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-surface z-50 shadow-2xl border-r border-outline transition-transform duration-300 ease-in-out md:hidden flex flex-col justify-between ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div>
          {/* Mobile Drawer Header */}
          <div className="p-6 border-b border-[#e7bdb8]/40 flex justify-between items-center">
            <div>
              <div className="font-headline text-2xl font-bold tracking-tighter text-on-surface uppercase">
                WOLFER<span className="text-[#e31e24]">.</span>
              </div>
              <div className="font-body text-xs text-tertiary uppercase tracking-widest mt-1">
                Architectural Solutions
              </div>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-on-surface"
              aria-label="Close Navigation Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Nav Links */}
          <div className="py-4">
            {primaryNavItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center px-6 py-4 font-headline text-lg uppercase tracking-wider transition-colors ${
                    isActive
                      ? 'bg-surface-container text-[#ba0013] font-bold border-l-4 border-[#ba0013]'
                      : 'text-on-surface hover:bg-surface-container'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Mobile Drawer Footer CTA */}
        <div className="p-6 border-t border-[#e7bdb8]/40 bg-surface-container-low">
          <Button href="/contact" fullWidth onClick={() => setIsMobileMenuOpen(false)}>
            Request Quote
          </Button>
          <p className="font-body text-xs text-center text-tertiary mt-4">
            Technical Support Desk Available
          </p>
        </div>
      </nav>
    </>
  );
};

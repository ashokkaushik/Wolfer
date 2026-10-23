import type { Metadata } from 'next';
import { Oswald, Public_Sans } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/shell/Header';
import { Footer } from '@/components/shell/Footer';
import { MobileActionBar } from '@/components/shell/MobileActionBar';

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-headline',
  display: 'swap',
});

const publicSans = Public_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'WOLFER TILE SOLUTION | Precision in Every Bond',
  description:
    'BUILT FOR THE SURFACE. ENGINEERED FOR THE BOND. High-performance tile adhesives, reactive resin epoxy grouts, and architectural bonding systems.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${oswald.variable} ${publicSans.variable}`}>
      <body className="min-h-screen flex flex-col bg-surface text-on-surface antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}

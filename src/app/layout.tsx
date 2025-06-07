
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { SearchModalProvider } from '@/contexts/SearchModalContext';
import GlobalSearchModalListener from '@/components/search/GlobalSearchModalListener';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '700'],
  variable: '--font-inter',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  variable: '--font-playfair-display',
});

export const metadata: Metadata = {
  title: 'Portfolio | Jayin Khanna',
  description: 'Personal website of Jayin Khanna - Researcher in AI, Mathematics, and Mind.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable} dark`}>
      {/* The <head> tag is automatically managed by Next.js using the metadata export */}
      <body className="font-body antialiased bg-background text-foreground min-h-screen flex flex-col">
        <SearchModalProvider>
          <GlobalSearchModalListener />
          <Header />
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
          <Toaster />
        </SearchModalProvider>
      </body>
    </html>
  );
}

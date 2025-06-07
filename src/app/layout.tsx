import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { SearchModalProvider } from '@/contexts/SearchModalContext';
import GlobalSearchModalListener from '@/components/search/GlobalSearchModalListener';

export const metadata: Metadata = {
  title: 'Verity Vista | Jayin Khanna',
  description: 'Personal website of Jayin Khanna - Researcher in AI, Mathematics, and Mind.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet" />
      </head>
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


"use client";
import Link from 'next/link';
import { NAV_LINKS } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Search, Menu } from 'lucide-react';
import { useSearchModal } from '@/hooks/useSearchModal';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';

const Header = () => {
  const { openModal } = useSearchModal();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        {/* Group for Name and Navigation Links */}
        <div className="flex items-center space-x-6"> {/* This space-x will be between Name and Nav block */}
          <Link href="/" className="font-headline text-2xl font-bold text-primary">
            Jayin Khanna
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium"> {/* This space-x is between nav links */}
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    className="absolute bottom-[-4px] left-0 right-0 h-[2px] bg-primary"
                    layoutId="underline"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>
        </div>

        {/* Group for Icons (Search and Mobile Menu) */}
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" onClick={openModal} aria-label="Open search">
            <Search className="h-5 w-5" />
          </Button>
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background p-6">
                <nav className="flex flex-col space-y-4 mt-8">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg text-foreground/80 hover:text-primary transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

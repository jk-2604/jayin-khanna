
"use client";
import RotatingSubtitles from './RotatingSubtitles';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <motion.section 
      className="min-h-screen flex flex-col justify-center items-center py-20 md:py-32"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="container mx-auto max-w-4xl text-center"> {/* Changed from text-right to text-center, added mx-auto */}
        <h1 className="font-headline text-5xl md:text-7xl font-bold mb-6">
          Jayin Khanna
        </h1>
        <RotatingSubtitles />
        <div className="mt-10 space-x-0 space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row justify-center items-center"> {/* Changed from justify-end to justify-center */}
          <Button asChild size="lg" className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/resume">View Resume</Link>
          </Button>
          <Button asChild variant="secondary" size="lg" className="w-full md:w-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground">
            <Link href="/#projects-section">Explore Projects</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full md:w-auto border-primary text-primary hover:bg-primary/10">
            <Link href="/thoughts">Read My Blog</Link>
          </Button>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;

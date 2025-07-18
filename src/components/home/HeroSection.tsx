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
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h1 className="font-headline text-5xl md:text-7xl font-bold mb-4">
          Jayin Khanna
        </h1>
        <h2 className="text-2xl md:text-3xl font-headline mb-6 tracking-wider text-gradient-dreams">
          A HEAD FULL OF DREAMS
        </h2>
        <RotatingSubtitles />
        <div className="mt-10 max-w-lg mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/thoughts">Read My Blog</Link>
          </Button>
          <Button asChild variant="secondary" size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
            <Link href="/#projects-section">Explore Projects</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full border-primary text-primary hover:bg-primary/10">
            <Link href="/articles">Read My Articles</Link>
          </Button>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;

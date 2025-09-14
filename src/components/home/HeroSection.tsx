
"use client";
import RotatingSubtitles from './RotatingSubtitles';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <motion.section
      className="relative min-h-screen flex flex-col justify-center items-center py-20 md:py-32 overflow-hidden" // Added relative and overflow-hidden
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* Background Image */}
      <Image
        src="/images/Lib.jpeg"
        alt="Architectural background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="z-0"
        data-ai-hint="architecture building night"
        priority // Helps with LCP (Largest Contentful Paint)
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/50 z-10"></div>

      {/* Content */}
      <div className="container relative z-20 mx-auto px-4 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
        >
          <h1 className="font-headline text-5xl md:text-7xl font-bold mb-4 text-foreground">
            Jayin Khanna
          </h1>
          <h2 
            className="text-xl md:text-2xl font-headline font-bold mb-6 tracking-wider text-gradient-dreams"
          >
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
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;

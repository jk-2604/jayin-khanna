
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CalendarPlus } from 'lucide-react';
import { motion } from 'framer-motion';

const CalendlyButton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed bottom-6 right-20 z-50" // Positioned to the left of the ScrollToTopButton
      // If ScrollToTopButton is at right-6, right-20 for this button places it to the left.
    >
      <Button
        asChild
        variant="default" // You can change variant (e.g., "secondary", "outline")
        size="icon" // Standard icon button size
        className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg w-14 h-14" // Custom size for FAB
        aria-label="Schedule a meeting on Calendly"
        title="Schedule a meeting"
      >
        <Link href="https://calendly.com/jayin-research/30min" target="_blank" rel="noopener noreferrer">
          <CalendarPlus className="h-6 w-6" />
        </Link>
      </Button>
    </motion.div>
  );
};

export default CalendlyButton;

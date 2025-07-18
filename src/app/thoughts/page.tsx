
"use client";
import { motion } from 'framer-motion';
import { Lightbulb } from 'lucide-react'; // Changed icon to Lightbulb

const sectionAnimationProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeInOut" },
};

const ThoughtsPage = () => {
  return (
    <div className="container mx-auto py-20 md:py-32 flex flex-col items-center justify-center text-center min-h-[calc(100vh-10rem)]">
      <motion.div {...sectionAnimationProps}>
        <Lightbulb className="h-24 w-24 text-primary mb-8" /> {/* Using Lightbulb icon */}
        <h1 className="text-4xl md:text-5xl font-headline mb-6 text-primary">
          Blog
        </h1>
        <p className="text-2xl md:text-3xl text-muted-foreground">
          Coming Soon!
        </p>
        <p className="text-lg text-muted-foreground mt-4">
          Explore my thoughts and add yours too. Please check back later for blog posts.
        </p>
      </motion.div>
    </div>
  );
};

export default ThoughtsPage;

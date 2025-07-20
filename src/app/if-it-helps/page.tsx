
"use client";
import { motion } from 'framer-motion';
import { Bookmark } from 'lucide-react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const sectionAnimationProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeInOut" },
};

const IfItHelpsPage = () => {
  return (
    <div className="container mx-auto py-12 md:py-20">
      <motion.header 
        {...sectionAnimationProps}
        className="text-center mb-12"
      >
        <Bookmark className="h-16 w-16 text-primary mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-headline mb-4 text-primary">
          If It Helps
        </h1>
        <p className="text-lg text-muted-foreground">
          Everything and anything that has ever helped me.
        </p>
        <p className="text-lg text-muted-foreground">
          Hope you get something out of it.
        </p>
      </motion.header>

      <motion.div 
        {...sectionAnimationProps}
        transition={{...sectionAnimationProps.transition, delay: 0.2}}
        className="max-w-4xl mx-auto"
      >
        <Card className="shadow-lg overflow-hidden">
          <CardContent className="p-4 md:p-6">
            <Image
              src="/images/squirrels-comic.png"
              alt="A comic about purpose and finding squirrels"
              width={1076}
              height={441}
              layout="responsive"
              className="rounded-md"
              data-ai-hint="philosophy comic"
            />
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default IfItHelpsPage;

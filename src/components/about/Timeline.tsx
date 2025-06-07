"use client";
import type { TimelineItem as TimelineItemType } from '@/lib/types';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

interface TimelineProps {
  items: TimelineItemType[];
  title: string;
}

const Timeline = ({ items, title }: TimelineProps) => {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-headline text-center mb-10 text-primary">{title}</h2>
      <div className="relative container max-w-3xl">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-border/50 transform -translate-x-1/2 hidden md:block" aria-hidden="true"></div>
        
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            className={`mb-8 flex md:items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="hidden md:flex w-1/2"></div> {/* Spacer for desktop layout */}
            <div className="w-full md:w-1/2 md:px-4">
              <Card className="shadow-lg border-border hover:border-primary transition-colors duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-1">
                    <CardTitle className="text-xl text-primary">{item.title}</CardTitle>
                    {item.icon && <span className="text-accent">{item.icon}</span>}
                  </div>
                  <p className="text-sm text-muted-foreground">{item.date}</p>
                  {item.subtitle && <CardDescription>{item.subtitle}</CardDescription>}
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/90">{item.description}</p>
                </CardContent>
              </Card>
            </div>
             {/* Dot on the line for desktop */}
            <div className="hidden md:block absolute left-1/2 top-1/2 w-4 h-4 bg-primary rounded-full border-2 border-background transform -translate-x-1/2 -translate-y-1/2"
                 style={{ top: `calc(${index * (100 / items.length)}% + ${(100 / items.length / 2)}%)` }} // Approximate vertical positioning
            ></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;

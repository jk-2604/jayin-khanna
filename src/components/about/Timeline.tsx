
"use client";
import type { TimelineItem as TimelineItemType } from '@/lib/types';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { GraduationCap, Lightbulb, Briefcase, ChevronRight, BookOpen, Cpu, TrendingUp, Award, Users, FileText, Percent } from 'lucide-react'; // Import necessary icons

interface TimelineProps {
  items: TimelineItemType[];
  title: string;
}

const mainIconComponents: Record<string, React.ElementType> = {
  GraduationCap: GraduationCap,
  Lightbulb: Lightbulb,
  Briefcase: Briefcase,
  Default: Briefcase, // Fallback main icon
};

const detailIconComponents: Record<string, React.ElementType> = {
  ChevronRight: ChevronRight,
  BookOpen: BookOpen,
  Cpu: Cpu,
  TrendingUp: TrendingUp,
  Award: Award,
  Users: Users,
  FileText: FileText,
  Percent: Percent,
  Default: ChevronRight, // Fallback detail icon
};


const Timeline = ({ items, title }: TimelineProps) => {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-headline text-center mb-10 text-primary">{title}</h2>
      <div className="relative container max-w-3xl">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-border/50 transform -translate-x-1/2 hidden md:block" aria-hidden="true"></div>
        
        {items.map((item, index) => {
          const MainIconComponent = item.iconIdentifier ? mainIconComponents[item.iconIdentifier] || mainIconComponents.Default : null;
          return (
            <motion.div
              key={item.id}
              className={`mb-8 flex md:items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
              initial={{ opacity: 0, y: 50 }} // Added y-offset
              whileInView={{ opacity: 1, y: 0 }} // Animate to y: 0
              viewport={{ once: true, amount: 0.3 }} // Key change: once: true
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="hidden md:flex w-1/2"></div> {/* Spacer for desktop layout */}
              <div className="w-full md:w-1/2 md:px-4">
                <Card className="shadow-lg border-border hover:border-primary transition-colors duration-300 text-center">
                  <CardHeader className="items-center">
                    <div className="flex flex-col items-center mb-2">
                      {MainIconComponent && (
                        <span className="text-accent mb-2">
                          <MainIconComponent size={24} />
                        </span>
                      )}
                      <CardTitle className="text-xl text-primary">{item.title}</CardTitle>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.date}</p>
                    {item.subtitle && <CardDescription className="mt-1">{item.subtitle}</CardDescription>}
                  </CardHeader>
                  <CardContent>
                    {item.details && item.details.length > 0 ? (
                      <ul className="space-y-2 text-left">
                        {item.details.map((detail, detailIndex) => {
                          const DetailIcon = detail.iconName ? detailIconComponents[detail.iconName] || detailIconComponents.Default : detailIconComponents.Default;
                          return (
                            <li key={detailIndex} className="flex items-start space-x-2 text-foreground/90">
                              <DetailIcon size={16} className="flex-shrink-0 mt-1 text-accent" />
                              <span>{detail.text}</span>
                            </li>
                          );
                        })}
                      </ul>
                    ) : (
                      <p className="text-foreground/90">{item.description}</p>
                    )}
                  </CardContent>
                </Card>
              </div>
              {/* Dot on the line for desktop */}
              <div className="hidden md:block absolute left-1/2 top-1/2 w-4 h-4 bg-primary rounded-full border-2 border-background transform -translate-x-1/2 -translate-y-1/2"
                   style={{ top: `calc(${index * (100 / items.length)}% + ${(100 / items.length / 2)}%)` }} 
              ></div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Timeline;


"use client";
import type { Skill } from '@/lib/types';
import { skillsData } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cpu, Wrench, Code, Terminal, BarChartBig, BrainCircuit, Layers, Camera, Shapes, Sigma, Table, LineChart, BarChartHorizontalBig, FunctionSquare, TrendingUp, GanttChartSquare } from 'lucide-react'; // Added GanttChartSquare as a fallback
import type { ElementType } from 'react';
import { motion } from 'framer-motion';

// Define a mapping from iconName in data to actual Lucide components
const iconComponents: Record<string, ElementType> = {
  Code,
  Terminal,
  BarChartBig,
  BrainCircuit,
  Layers,
  Camera,
  Shapes,
  Sigma,
  Table,
  LineChart,
  BarChartHorizontalBig,
  FunctionSquare,
  TrendingUp,
  Cpu, // For categories if needed, or as a fallback
  Wrench, // For categories if needed, or as a fallback
  Default: GanttChartSquare, // A generic fallback icon
};


const SkillsPage = () => {
  const groupedSkills: Record<string, Skill[]> = skillsData.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  // Icons for categories (can be different from skill icons)
  const categoryPageIcons: Record<string, React.ReactNode> = {
    'Programming Languages': <Cpu className="h-8 w-8 text-primary" />,
    'Tools & Libraries': <Wrench className="h-8 w-8 text-primary" />,
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <div className="container py-12 md:py-20">
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-headline mb-4">My Skills & Expertise</h1>
        <p className="text-xl text-muted-foreground">A Detailed Look at My Technical Capabilities</p>
      </header>

      {Object.entries(groupedSkills).map(([category, skillsInCategory]) => (
        <section key={category} className="mb-12">
          <div className="flex items-center space-x-4 mb-8">
            {categoryPageIcons[category] || <GanttChartSquare className="h-8 w-8 text-primary" />}
            <h2 className="text-3xl font-headline text-primary">{category}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsInCategory.map((skill, index) => {
              const IconComponent = iconComponents[skill.iconName] || iconComponents.Default;
              return (
                <motion.div
                  key={skill.id}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="h-full" // Ensure motion.div takes full height for proper card display
                >
                  <Card className="shadow-lg border-border hover:border-primary transition-all duration-300 hover:shadow-primary/20 flex flex-col h-full">
                    <CardHeader className="flex-row items-start space-x-4 pb-3">
                      <IconComponent className="h-10 w-10 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <CardTitle className="text-xl text-primary mb-1">{skill.name}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow pt-0">
                      <p className="text-foreground/80 text-sm leading-relaxed">{skill.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
};

export default SkillsPage;

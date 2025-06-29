
"use client";
import type { Skill } from '@/lib/types';
import { skillsData } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Cpu, Wrench, Code, Terminal, BarChartBig, BrainCircuit, Layers, Camera, Shapes, Sigma, Table, LineChart, BarChartHorizontalBig, FunctionSquare, TrendingUp, GanttChartSquare } from 'lucide-react';
import type { ElementType } from 'react';
import { motion } from 'framer-motion';


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
  Cpu, 
  Wrench, 
  Default: GanttChartSquare, 
};

const sectionAnimationProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeInOut" },
};

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: {
    delay: 0.1,
    duration: 0.5,
    ease: "easeInOut",
  },
};

const SkillsPage = () => {
  const groupedSkills: Record<string, Skill[]> = skillsData.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const categoryPageIcons: Record<string, React.ReactNode> = {
    'Programming Languages': <Cpu className="h-8 w-8 text-primary" />,
    'Tools & Libraries': <Wrench className="h-8 w-8 text-primary" />,
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <motion.header {...sectionAnimationProps} className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-headline mb-4">My Skills & Expertise</h1>
        <p className="text-xl text-muted-foreground">A Detailed Look at My Technical Capabilities</p>
      </motion.header>

      {Object.entries(groupedSkills).map(([category, skillsInCategory], categoryIndex) => (
        <motion.section 
          key={category} 
          className="mb-12"
          custom={categoryIndex} 
          variants={sectionAnimationProps}
          initial="initial"
          whileInView="whileInView"
          viewport={sectionAnimationProps.viewport}
        >
          <div className="flex items-center space-x-4 mb-8">
            {categoryPageIcons[category] || <GanttChartSquare className="h-8 w-8 text-primary" />}
            <h2 className="text-3xl font-headline text-primary">{category}</h2>
          </div>

          {category === 'Tools & Libraries' ? (
            <motion.div
              className="flex flex-wrap gap-4"
              variants={{
                whileInView: {
                  transition: { staggerChildren: 0.05 },
                },
              }}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, amount: 0.2 }}
            >
              {skillsInCategory.map((skill) => {
                const IconComponent = iconComponents[skill.iconName] || iconComponents.Default;
                return (
                  <TooltipProvider key={skill.id}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <motion.div
                          variants={cardVariants} // Re-using card animation variant
                          className="flex items-center gap-2 p-3 rounded-lg bg-card border border-border cursor-pointer hover:bg-secondary hover:border-primary transition-all"
                        >
                          <IconComponent className="h-5 w-5 text-accent flex-shrink-0" />
                          <span className="font-medium text-card-foreground">{skill.name}</span>
                        </motion.div>
                      </TooltipTrigger>
                      <TooltipContent className="bg-popover text-popover-foreground border-border max-w-xs">
                        <p>{skill.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                );
              })}
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillsInCategory.map((skill, index) => {
                const IconComponent = iconComponents[skill.iconName] || iconComponents.Default;
                return (
                  <motion.div
                    key={skill.id}
                    custom={index} 
                    variants={cardVariants} 
                    initial="initial"
                    whileInView="whileInView"
                    viewport={cardVariants.viewport}
                    className="h-full" 
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
          )}
        </motion.section>
      ))}
    </div>
  );
};

export default SkillsPage;

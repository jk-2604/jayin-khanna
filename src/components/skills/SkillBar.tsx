"use client";
import type { Skill } from '@/lib/types';
import { motion } from 'framer-motion';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface SkillBarProps {
  skill: Skill;
  index: number;
}

const SkillBar = ({ skill, index }: SkillBarProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-foreground/90">{skill.name}</span>
              <span className="text-sm font-medium text-primary">{skill.level}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2.5">
              <motion.div
                className="bg-primary h-2.5 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.3, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        </TooltipTrigger>
        <TooltipContent className="bg-popover text-popover-foreground border-border">
          <p>{skill.category}: {skill.name} - {skill.level}% proficiency</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default SkillBar;

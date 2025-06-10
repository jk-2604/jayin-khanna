
"use client"; // <-- Add this directive

import HeroSection from '@/components/home/HeroSection';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';

// Import new "About" sub-components
import AboutIntro from '@/components/about/AboutIntro';
import AboutEducation from '@/components/about/AboutEducation';
import AboutCollaborations from '@/components/about/AboutCollaborations';
import AboutHobbies from '@/components/about/AboutHobbies';
import AboutAchievements from '@/components/about/AboutAchievements';

// Import other page components that were previously rendering full pages
import ExperiencePageContent from '@/app/experience/page'; 
import SkillsPageContent from '@/app/skills/page'; 
import ProjectsPageContent from '@/app/projects/page'; 


const sectionAnimationProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeInOut" },
};

export default function HomePage() { // <-- Remove async
  return (
    <div className="flex flex-col">
      <HeroSection />
      <Separator className="my-12 md:my-16 bg-border/40" />

      {/* 1. About me (Intro) */}
      <motion.header {...sectionAnimationProps} className="text-center mb-8 container mx-auto">
        <h1 className="text-4xl md:text-5xl font-headline mb-4">About Me</h1>
        <p className="text-xl text-muted-foreground">A Glimpse into My Journey</p>
      </motion.header>
      <motion.section {...sectionAnimationProps} id="about-intro-section" className="container mx-auto">
        <AboutIntro />
      </motion.section>
      <Separator className="my-12 md:my-16 bg-border/40" />

      {/* 2. Education */}
      <motion.section {...sectionAnimationProps} id="education-section" className="container mx-auto">
        <AboutEducation />
      </motion.section>
      <Separator className="my-12 md:my-16 bg-border/40" />

      {/* 3. My Experience */}
      <motion.section {...sectionAnimationProps} id="experience-section">
        <ExperiencePageContent />
      </motion.section>
      <Separator className="my-12 md:my-16 bg-border/40" />

      {/* 4. Collaborations & Affiliations */}
      <motion.section {...sectionAnimationProps} id="collaborations-section" className="container mx-auto">
        <AboutCollaborations />
      </motion.section>
      <Separator className="my-12 md:my-16 bg-border/40" />

      {/* 5. My Skills & Expertise */}
      <motion.section {...sectionAnimationProps} id="skills-section">
        <SkillsPageContent />
      </motion.section>
      <Separator className="my-12 md:my-16 bg-border/40" />

      {/* 6. Research & Projects */}
      <motion.section {...sectionAnimationProps} id="projects-section">
        <ProjectsPageContent />
      </motion.section>
      <Separator className="my-12 md:my-16 bg-border/40" />
      
      {/* 7. Hobbies & Interests */}
      <motion.section {...sectionAnimationProps} id="hobbies-section" className="container mx-auto">
        <AboutHobbies />
      </motion.section>
      <Separator className="my-12 md:my-16 bg-border/40" />

      {/* 8. Achievements */}
      <motion.section {...sectionAnimationProps} id="achievements-section" className="container mx-auto pb-12 md:pb-16">
        <AboutAchievements />
      </motion.section>
    </div>
  );
}

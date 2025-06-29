
"use client";

import HeroSection from '@/components/home/HeroSection';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';

// Import new "About" sub-components
import AboutIntro from '@/components/about/AboutIntro';
import AboutCollaborations from '@/components/about/AboutCollaborations';
import AboutHobbies from '@/components/about/AboutHobbies';
import AboutJourney from '@/components/about/AboutJourney'; // Added for combined section

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

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <Separator className="my-12 md:my-16 bg-border/40" />

      {/* This header is intentionally not 100vh */}
      <motion.header {...sectionAnimationProps} className="text-center mb-8 container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-headline mb-4">About Me</h1>
      </motion.header>
      <motion.section {...sectionAnimationProps} id="about-intro-section" className="container mx-auto px-4 min-h-screen flex flex-col justify-center">
        <AboutIntro />
      </motion.section>
      <Separator className="my-12 md:my-16 bg-border/40" />

      <motion.section {...sectionAnimationProps} id="experience-section" className="min-h-screen flex flex-col justify-center">
        {/* ExperiencePageContent itself has a container with px-4, so not needed directly on motion.section if ExperiencePageContent is the sole child filling it */}
        <ExperiencePageContent />
      </motion.section>
      <Separator className="my-12 md:my-16 bg-border/40" />

      <motion.section {...sectionAnimationProps} id="collaborations-section" className="container mx-auto px-4 min-h-screen flex flex-col justify-center">
        <AboutCollaborations />
      </motion.section>
      <Separator className="my-12 md:my-16 bg-border/40" />

      <motion.section {...sectionAnimationProps} id="skills-section" className="min-h-screen flex flex-col justify-center">
        {/* SkillsPageContent itself has a container with px-4 */}
        <SkillsPageContent />
      </motion.section>
      <Separator className="my-12 md:my-16 bg-border/40" />

      <motion.section {...sectionAnimationProps} id="projects-section" className="min-h-screen flex flex-col justify-center">
        {/* ProjectsPageContent itself has a container with px-4 */}
        <ProjectsPageContent />
      </motion.section>
      <Separator className="my-12 md:my-16 bg-border/40" />

      <motion.section {...sectionAnimationProps} id="hobbies-section" className="container mx-auto px-4 min-h-screen flex flex-col justify-center">
        <AboutHobbies />
      </motion.section>
      <Separator className="my-12 md:my-16 bg-border/40" />

      <motion.section {...sectionAnimationProps} id="journey-section" className="container mx-auto px-4 min-h-screen flex flex-col justify-center">
        <AboutJourney />
      </motion.section>
    </div>
  );
}

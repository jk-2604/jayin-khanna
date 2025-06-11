
"use client";
import { motion } from 'framer-motion';

// Import newly created sub-components
import AboutIntro from '@/components/about/AboutIntro';
import AboutEducation from '@/components/about/AboutEducation';
import AboutCollaborations from '@/components/about/AboutCollaborations';
import AboutHobbies from '@/components/about/AboutHobbies';
import AboutAchievements from '@/components/about/AboutAchievements';

const sectionAnimationProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeInOut" },
};

// This page component will now assemble the "About" related content using the new sub-components.
// The order here reflects a dedicated "About" page, which might be slightly different from the homepage flow.
const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <motion.header {...sectionAnimationProps} className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-headline mb-4">About Me</h1>
        <p className="text-xl text-muted-foreground">A Glimpse into My Journey</p>
      </motion.header>

      {/* Wrap each sub-component in motion.section if individual animation control is desired,
          or apply a single motion wrapper to the whole group.
          For consistency with how they might be used on the homepage,
          let's assume the motion wrapper is handled by the parent where fine-grained control is needed.
          Here, we'll use motion on the main sections for the dedicated about page.
      */}
      
      <motion.div {...sectionAnimationProps}>
        <AboutIntro />
      </motion.div>
      
      <motion.div {...sectionAnimationProps} className="mt-16"> {/* Added margin top for spacing */}
        <AboutEducation />
      </motion.div>

      <motion.div {...sectionAnimationProps} className="mt-16"> {/* Added margin top for spacing */}
        <AboutCollaborations />
      </motion.div>

      <motion.div {...sectionAnimationProps} className="mt-16"> {/* Added margin top for spacing */}
        <AboutHobbies />
      </motion.div>

      <motion.div {...sectionAnimationProps} className="mt-16"> {/* Added margin top for spacing */}
        <AboutAchievements />
      </motion.div>
    </div>
  );
};

export default AboutPage;

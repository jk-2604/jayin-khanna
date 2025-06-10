
"use client";
import Timeline from '@/components/about/Timeline';
import { educationTimelineData } from '@/lib/data';
// motion will be applied by the parent page if needed for the whole section
// import { motion } from 'framer-motion';

// const sectionAnimationProps = {
//   initial: { opacity: 0, y: 20 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true, amount: 0.2 },
//   transition: { duration: 0.6, ease: "easeInOut" },
// };

const AboutEducation = () => {
  return (
    // The motion.div wrapper will be applied in the parent page
    <Timeline items={educationTimelineData} title="Education" />
  );
};
export default AboutEducation;

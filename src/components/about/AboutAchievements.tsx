
"use client";
import Timeline from '@/components/about/Timeline';
import { achievementTimelineData } from '@/lib/data';
// import { motion } from 'framer-motion';

// const sectionAnimationProps = {
//   initial: { opacity: 0, y: 20 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true, amount: 0.2 },
//   transition: { duration: 0.6, ease: "easeInOut" },
// };

const AboutAchievements = () => {
  return (
    // The motion.div wrapper will be applied in the parent page
    <Timeline items={achievementTimelineData} title="Achievements" />
  );
};
export default AboutAchievements;

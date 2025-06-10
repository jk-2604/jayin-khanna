
"use client"; // <-- Add this directive
import Image from 'next/image';
import { motion } from 'framer-motion';

// const sectionAnimationProps = {
//   initial: { opacity: 0, y: 20 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true, amount: 0.2 },
//   transition: { duration: 0.6, ease: "easeInOut" },
// };

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

const institutionLogos = [
  { name: "DRDO", src: "/images/drdo-inmas-logo.png", alt: "DRDO INMAS Logo", dataAiHint: "government research" },
  { name: "UCSC", src: "/images/UCSC.png", alt: "UCSC Logo", dataAiHint: "university campus" },
];

const AboutCollaborations = () => {
  return (
    // The motion.section wrapper will be applied in the parent page
    <>
      <h2 className="text-3xl font-headline text-center mb-10 text-primary">Collaborations &amp; Affiliations</h2>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {institutionLogos.map((logo, index) => (
           <motion.div
            key={logo.name}
            custom={index}
            variants={cardVariants}
            viewport={{ once: true, amount: 0.2 }}
            initial="initial"
            whileInView="whileInView"
            className="grayscale hover:grayscale-0 transition-all duration-300">
            <Image src={logo.src} alt={logo.alt} width={120} height={60} objectFit="contain" data-ai-hint={logo.dataAiHint}/>
          </motion.div>
        ))}
      </div>
    </>
  );
};
export default AboutCollaborations;

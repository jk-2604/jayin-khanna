
"use client";
import type { TimelineItem as TimelineItemType } from '@/lib/types'; // Keep this if used by Timeline
import Timeline from '@/components/about/Timeline';
import { educationTimelineData, achievementTimelineData } from '@/lib/data';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Zap, BookOpen, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

// Metadata removed as this is now a client component

const sectionAnimationProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeInOut" },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeInOut" },
  }),
};

const AboutPage = () => {
  const institutionLogos = [
    { name: "DRDO", src: "https://placehold.co/100x50.png?text=DRDO", alt: "DRDO Logo", dataAiHint: "organization logo" },
    { name: "UCSC", src: "https://placehold.co/100x50.png?text=UCSC", alt: "UCSC Logo", dataAiHint: "university logo" },
  ];

  const hobbies = [
    { name: "Football", icon: <Zap size={24} />, description: "Passionate about the beautiful game, both playing and watching." },
    { name: "Teaching", icon: <GraduationCap size={24} />, description: "Enjoy sharing knowledge and mentoring aspiring minds." },
    { name: "Content Writing", icon: <BookOpen size={24} />, description: "Crafting articles on tech, philosophy, and learning." },
  ];


  return (
    <div className="container py-12 md:py-20">
      <motion.header {...sectionAnimationProps} className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-headline mb-4">About Me</h1>
        <p className="text-xl text-muted-foreground">A Glimpse into My Journey</p>
      </motion.header>

      <motion.section {...sectionAnimationProps} className="mb-16">
        <Card className="overflow-hidden shadow-xl">
          <div className="md:flex">
            <div className="md:w-1/3 relative min-h-[300px] md:min-h-0">
              <Image
                src="https://placehold.co/400x500.png"
                alt="Jayin Khanna"
                layout="fill"
                objectFit="cover"
                className="filter grayscale hover:grayscale-0 transition-all duration-500"
                data-ai-hint="professional portrait"
              />
            </div>
            <div className="md:w-2/3 p-8 md:p-12">
              <h2 className="text-3xl font-headline mb-6 text-primary">Jayin Khanna</h2>
              <p className="text-lg mb-4 text-foreground/90">
                Driven by an insatiable curiosity, I navigate the fascinating intersections of Artificial Intelligence, Mathematics, and the intricate workings of the Mind. My academic and research pursuits are dedicated to unraveling the complexities of learning, cognition, and systemic behaviors.
              </p>
              <p className="text-lg mb-4 text-foreground/90">
                With a strong foundation in deep learning and a philosophical lens, I am passionate about developing AI solutions that are not only technologically advanced but also ethically grounded and beneficial to society. My work spans across financial AI, neuroscience-inspired models, and fundamental AI research.
              </p>
              <p className="text-lg text-foreground/90">
                Beyond research, I am an avid learner, a keen observer of markets, and someone who believes in the power of interdisciplinary dialogue to spark innovation.
              </p>
            </div>
          </div>
        </Card>
      </motion.section>
      
      <motion.section {...sectionAnimationProps} className="mb-16 py-12 bg-card/30 rounded-lg">
        <h2 className="text-3xl font-headline text-center mb-10 text-primary">By The Numbers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center container">
          <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} variants={cardVariants}>
            <p className="text-5xl font-bold text-secondary">3.9</p>
            <p className="text-muted-foreground">GPA (Illustrative)</p>
          </motion.div>
          <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} variants={cardVariants}>
            <p className="text-5xl font-bold text-secondary">10+</p>
            <p className="text-muted-foreground">Research Projects</p>
          </motion.div>
          <motion.div custom={2} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} variants={cardVariants}>
            <p className="text-5xl font-bold text-secondary">3</p>
            <p className="text-muted-foreground">Institutes Collaborated With</p>
          </motion.div>
        </div>
      </motion.section>

      <motion.div {...sectionAnimationProps}>
        <Timeline items={educationTimelineData} title="Education" />
      </motion.div>
      <motion.div {...sectionAnimationProps}>
        <Timeline items={achievementTimelineData} title="Achievements" />
      </motion.div>

      <motion.section {...sectionAnimationProps} className="py-12 mb-16">
        <h2 className="text-3xl font-headline text-center mb-10 text-primary">Hobbies & Interests</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.name}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={cardVariants}
            >
              <Card className="text-center p-6 shadow-lg border-border hover:border-primary transition-colors duration-300 h-full">
                <div className="text-accent mx-auto mb-4 w-fit p-3 bg-primary/10 rounded-full">{hobby.icon}</div>
                <CardTitle className="text-xl mb-2">{hobby.name}</CardTitle>
                <CardContent>
                  <p className="text-muted-foreground">{hobby.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section {...sectionAnimationProps} className="py-12">
        <h2 className="text-3xl font-headline text-center mb-10 text-primary">Collaborations & Affiliations</h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 container">
          {institutionLogos.map((logo, index) => (
             <motion.div 
              key={logo.name} 
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={cardVariants}
              className="grayscale hover:grayscale-0 transition-all duration-300">
              <Image src={logo.src} alt={logo.alt} width={120} height={60} objectFit="contain" data-ai-hint={logo.dataAiHint} />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;

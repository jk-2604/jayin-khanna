
"use client";
import type { TimelineItem as TimelineItemType } from '@/lib/types'; // Keep this if used by Timeline
import Timeline from '@/components/about/Timeline';
import { educationTimelineData, achievementTimelineData } from '@/lib/data';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, GraduationCap, Sigma, Brain, Lightbulb, Music, Footprints } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

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


const AboutPage = () => {
  const [expandedHobbyName, setExpandedHobbyName] = useState<string | null>(null);
  const [currentImageIndices, setCurrentImageIndices] = useState<Record<string, number>>({});

  const institutionLogos = [
    { name: "DRDO", src: "/images/drdo-inmas-logo.png", alt: "DRDO INMAS Logo", dataAiHint: "government research" },
    { name: "UCSC", src: "/images/UCSC.png", alt: "UCSC Logo", dataAiHint: "university campus" },
  ];

  const hobbies = [
    { 
      name: "Football & Running", 
      icon: <Footprints size={24} />, 
      description: "If you love running till you can't think anymore, let's run together!",
      imageUrls: [
        "https://placehold.co/400x300.png",
        "https://placehold.co/400x300.png",
        "https://placehold.co/400x300.png",
      ],
      dataAiHints: ["trail running", "football stadium", "marathon finish"]
    },
    { name: "Reading", icon: <BookOpen size={24} />, description: "I can't seem to put a label on the genre but it's broadly Philosophy, Psychology, self-help, Auto-Biographies and some niche topics. Reader? I'd love to know what you read." },
    { name: "Mathematics", icon: <Sigma size={24} />, description: "Exploring the beauty, rigor, and diverse applications of mathematical concepts and theories." },
    { name: "Philosophy & Psychology", icon: <Brain size={24} />, description: "Pondering philosophical questions and exploring the intricacies of the human mind and behavior." },
    { name: "Learning", icon: <Lightbulb size={24} />, description: "A lifelong passion for acquiring new knowledge and skills across a multitude of domains." },
    { name: "Coldplay", icon: <Music size={24} />, description: "I mean, what is the point of life if you can't even listen to the most beautiful band in 'My Universe' under a 'sky full of stars' with 'Charlie Brown'. Trust me, It's 'Paradise', because it 'feels like I am falling in love'." },
  ];

  useEffect(() => {
    const initialIndices: Record<string, number> = {};
    hobbies.forEach(hobby => {
      if (hobby.imageUrls && hobby.imageUrls.length > 0) {
        initialIndices[hobby.name] = 0;
      }
    });
    setCurrentImageIndices(initialIndices);
  }, []); 

  useEffect(() => {
    const activeIntervals: NodeJS.Timeout[] = [];

    hobbies.forEach(hobby => {
      if (hobby.imageUrls && hobby.imageUrls.length > 0) {
        const isExpanded = expandedHobbyName === hobby.name;
        const intervalTime = isExpanded ? 1500 : 3000; 

        const interval = setInterval(() => {
          setCurrentImageIndices(prevIndices => {
            const currentIdx = prevIndices[hobby.name] ?? 0;
            const nextIdx = (currentIdx + 1) % (hobby.imageUrls!.length);
            return {
              ...prevIndices,
              [hobby.name]: nextIdx,
            };
          });
        }, intervalTime);
        activeIntervals.push(interval);
      }
    });

    return () => {
      activeIntervals.forEach(clearInterval);
    };
  }, [expandedHobbyName, hobbies]);


  const handleHobbyClick = (hobbyName: string) => {
    const hobby = hobbies.find(h => h.name === hobbyName);
    if (hobby && hobby.imageUrls && hobby.imageUrls.length > 0) {
      setExpandedHobbyName(prev => (prev === hobbyName ? null : hobbyName));
    }
  };

  return (
    <div className="container mx-auto py-12 md:py-20">
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
      
      <motion.div {...sectionAnimationProps} initial="initial" whileInView="whileInView" viewport={{ once: true, amount: 0.2 }}>
        <Timeline items={educationTimelineData} title="Education" />
      </motion.div>
      <motion.div {...sectionAnimationProps} initial="initial" whileInView="whileInView" viewport={{ once: true, amount: 0.2 }}>
        <Timeline items={achievementTimelineData} title="Achievements" />
      </motion.div>

      <motion.section {...sectionAnimationProps} className="py-12 mb-16">
        <h2 className="text-3xl font-headline text-center mb-10 text-primary">Hobbies & Interests</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
          {hobbies.map((hobby, index) => {
            const isExpanded = expandedHobbyName === hobby.name;
            const currentImageIndex = currentImageIndices[hobby.name] ?? 0;
            const hasImages = hobby.imageUrls && hobby.imageUrls.length > 0;

            return (
              <motion.div
                key={hobby.name}
                custom={index}
                variants={cardVariants}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true, amount: 0.2 }}
                layout 
              >
                <Card
                  className={`shadow-lg border-border hover:border-primary transition-all duration-300 h-full flex flex-col relative overflow-hidden ${hasImages ? 'cursor-pointer' : ''}`}
                  onClick={() => handleHobbyClick(hobby.name)}
                  style={{ minHeight: '250px' }} 
                >
                  {hasImages && hobby.imageUrls && (
                    <div className={`absolute inset-0 z-0 ${isExpanded ? '' : 'opacity-60 group-hover:opacity-80 transition-opacity'}`}>
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={`${hobby.name}-${currentImageIndex}`}
                          src={hobby.imageUrls[currentImageIndex]}
                          alt={hobby.dataAiHints && hobby.dataAiHints[currentImageIndex] ? hobby.dataAiHints[currentImageIndex] : `${hobby.name} image ${currentImageIndex + 1}`}
                          data-ai-hint={hobby.dataAiHints ? hobby.dataAiHints[currentImageIndex % hobby.dataAiHints.length] : "hobby activity"}
                          initial={{ opacity: 0, scale: isExpanded ? 1.1 : 1.0 }}
                          animate={{ opacity: 1, scale: 1.0 }}
                          exit={{ opacity: 0, scale: isExpanded ? 1.0 : 1.1 }}
                          transition={{ duration: isExpanded ? 0.7 : 1.2, ease: "easeInOut" }}
                          className="w-full h-full object-cover"
                        />
                      </AnimatePresence>
                    </div>
                  )}

                  <div className={`relative z-10 flex flex-col items-center justify-center flex-grow p-4 ${hasImages ? (isExpanded ? 'bg-black/60' : 'bg-black/30 hover:bg-black/50') : ''} transition-colors duration-300`}>
                    {(!isExpanded || !hasImages) && hobby.icon && (
                      <div className="text-accent mx-auto mb-3 w-fit p-3 bg-primary/20 rounded-full backdrop-blur-sm">
                        {hobby.icon}
                      </div>
                    )}
                    {(!isExpanded || !hasImages) && (
                       <CardTitle className={`text-xl mb-2 ${hasImages ? 'text-white [text-shadow:_0_1px_3px_rgba(0,0,0,0.7)]' : 'text-primary'}`}>
                        {hobby.name}
                      </CardTitle>
                    )}
                    
                    <CardContent className="pt-0 flex-grow flex items-center justify-center">
                      <p className={`${hasImages ? 'text-white/90 text-center [text-shadow:_0_1px_2px_rgba(0,0,0,0.6)]' : 'text-muted-foreground'} ${isExpanded && hasImages ? 'text-lg' : ''}`}>
                        {hobby.description}
                      </p>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      <motion.section {...sectionAnimationProps} className="py-12">
        <h2 className="text-3xl font-headline text-center mb-10 text-primary">Collaborations & Affiliations</h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 container mx-auto">
          {institutionLogos.map((logo, index) => (
             <motion.div 
              key={logo.name} 
              custom={index} 
              variants={cardVariants}
              viewport={{ once: true, amount: 0.2 }}
              initial="initial"
              whileInView="whileInView"
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

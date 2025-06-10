
"use client"; // <-- Add this directive
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { BookOpen, Brain, Lightbulb, Music, Footprints, Sigma, GraduationCap, ChevronRight } from 'lucide-react'; // Added GraduationCap and ChevronRight
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link'; // Import Link for external links

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

interface HobbyDetailLink {
  text: string;
  url: string;
  iconName?: string; // e.g., 'ChevronRight'
}

interface Hobby {
  name: string;
  icon: React.ReactNode;
  description: string;
  imageUrls?: string[];
  dataAiHints?: string[];
  detailLinks?: HobbyDetailLink[];
}

const hobbiesData: Hobby[] = [
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
    { 
      name: "Education", 
      icon: <GraduationCap size={24} />, 
      description: "Learning from the Best",
      detailLinks: [
        { text: '3Blue1Brown', url: 'https://www.youtube.com/c/3blue1brown', iconName: 'ChevronRight' },
        { text: 'Dr. Amber Habib', url: 'https://snu.edu.in/faculty/amber-habib/', iconName: 'ChevronRight' },
        { text: 'Dr. Satyanarayana Reddy', url: 'https://snu.edu.in/faculty/satyanarayana-reddy/', iconName: 'ChevronRight' },
        { text: 'Anil Kumar Yadav (Physics Blog)', url: 'https://anilyadav1882.weebly.com/blog/physics', iconName: 'ChevronRight' },
      ]
    },
    { name: "Coldplay", icon: <Music size={24} />, description: "I mean, what is the point of life if you can't even listen to the most beautiful band in 'My Universe' under a 'sky full of stars' with 'Charlie Brown'. Trust me, It's 'Paradise', because it 'feels like I am falling in love'." },
];


const AboutHobbies = () => {
  const [expandedHobbyName, setExpandedHobbyName] = useState<string | null>(null);
  const [currentImageIndices, setCurrentImageIndices] = useState<Record<string, number>>({});

  useEffect(() => {
    const initialIndices: Record<string, number> = {};
    hobbiesData.forEach(hobby => {
      if (hobby.imageUrls && hobby.imageUrls.length > 0) {
        initialIndices[hobby.name] = 0;
      }
    });
    setCurrentImageIndices(initialIndices);
  }, []);

  useEffect(() => {
    const activeIntervals: NodeJS.Timeout[] = [];
    hobbiesData.forEach(hobby => {
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
  }, [expandedHobbyName]);

  const handleHobbyClick = (hobbyName: string) => {
    const hobby = hobbiesData.find(h => h.name === hobbyName);
    if (hobby && hobby.imageUrls && hobby.imageUrls.length > 0) {
      setExpandedHobbyName(prev => (prev === hobbyName ? null : hobbyName));
    }
  };

  return (
    // The motion.section wrapper will be applied in the parent page
    <>
      <h2 className="text-3xl font-headline text-center mb-10 text-primary">Hobbies &amp; Interests</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {hobbiesData.map((hobby, index) => {
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
                     <CardTitle className={`text-xl mb-2 ${hasImages ? 'text-white [text-shadow:_0_1px_3px_rgba(0,0,0,0.7)]' : 'text-primary text-center'}`}>
                      {hobby.name}
                    </CardTitle>
                  )}
                  <CardContent className="pt-0 flex-grow flex flex-col items-center justify-center w-full">
                    <p className={`${hasImages ? 'text-white/90 text-center [text-shadow:_0_1px_2px_rgba(0,0,0,0.6)]' : 'text-muted-foreground text-center'} ${isExpanded && hasImages ? 'text-lg' : 'text-sm'}`}>
                      {hobby.description}
                    </p>
                    {hobby.detailLinks && hobby.detailLinks.length > 0 && (
                      <ul className={`mt-3 space-y-1.5 text-sm w-full ${hasImages ? 'text-white/90 [text-shadow:_0_1px_2px_rgba(0,0,0,0.6)]' : 'text-muted-foreground'}`}>
                        {hobby.detailLinks.map(link => (
                          <li key={link.url} className="flex items-center justify-center">
                            <Link href={link.url} target="_blank" rel="noopener noreferrer" className={`flex items-center space-x-1.5 ${hasImages ? 'hover:underline' : 'text-accent hover:underline'}`}>
                              {link.iconName === 'ChevronRight' && <ChevronRight size={16} className="flex-shrink-0" />}
                              <span>{link.text}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};
export default AboutHobbies;


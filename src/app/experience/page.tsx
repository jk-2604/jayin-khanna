
"use client";

import Image from 'next/image';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

// Updated experience data based on user input
const experienceData = [
  {
    id: 'exp_jk_1',
    role: 'Machine Learning Research Intern',
    institution: 'Institute of Nuclear Medicine and Allied Sciences-DRDO, Ministry of Defence',
    logoSrc: '/images/drdo-inmas-logo.png', // Assuming this path is correct in public/images
    logoAlt: 'DRDO INMAS Logo',
    dataAiHint: 'government research',
    supervisor: 'Dr. Shilpi Modi, Sc.’E’',
    period: '2024',
    description: [
      'Developed a Convolutional Neural Network (CNN) ResNet model for classifying sEMG stress measurements, focusing on improving accuracy and generalization.',
      'Preprocessed sEMG data using PyEMGPipeline, determining that raw data provided better performance for CNN classification.',
      'Improved model accuracy from 91% to 97.98% with ResNet architecture, achieving 98% overall accuracy and near-perfect precision, recall, and F1 scores.',
      'Implemented AlexNet architecture into the model to further enhance accuracy.',
      'Currently incorporating and optimizing sequence models such as RNNs and LSTMs to improve classification performance and generalizability with expanded and reacquired datasets.',
      'Research work selected for a presentation in the SUMMIT 2.0 Conference.'
    ],
    links: [
      { label: 'Certificate', url: '#' },
      { label: 'Project Report', url: '#' },
      { label: 'Conference Certificate', url: '#' }
    ],
    badges: ['Machine Learning', 'CNN', 'sEMG Classification', 'ResNet', 'RNNs', 'LSTMs']
  },
  {
    id: 'exp_jk_2',
    role: 'Machine Learning Research Intern',
    institution: 'Institute of Nuclear Medicine and Allied Sciences-DRDO, Ministry of Defence',
    logoSrc: '/images/drdo-inmas-logo.png', // Assuming this path
    logoAlt: 'DRDO INMAS Logo',
    dataAiHint: 'government research',
    supervisor: 'Dr. Shilpi Modi, Sc.’E’',
    period: 'Present',
    description: [
      'Working on the application of network control theory to understand cognitive state transitions in the brain.',
      'Developing deep learning models to extract insights from diffusion spectrum imaging (DSI) and diffusion tensor imaging (DTI) data.',
      'Implementing graph neural networks (GNNs) to study the role of hubs and weakly connected regions in cognitive function.'
    ],
    links: [],
    badges: ['Cognitive Neuroscience', 'Deep Learning', 'GNNs', 'DSI/DTI Analysis', 'Network Control Theory']
  },
  {
    id: 'exp_jk_3',
    role: 'Statistics Research Intern',
    institution: 'University of California Santa Cruz, CA (ISRP)',
    logoSrc: '/.png', // Updated UCSC logo path
    logoAlt: 'UCSC Logo',
    dataAiHint: 'university campus',
    supervisor: 'Prof. Bruno Sansó',
    period: '2024',
    description: [
      'Conducted advanced research in Analysis of Time-Varying Quantiles for Environmental Variables, under the mentorship of Professor Dr. Bruno Sansó.',
      'Focused on developing and applying statistical methodologies to environmental data, specifically in the context of Atmospheric Rivers along the California coast.',
      'Gained expertise in data analysis, statistical modelling, and interpretation of time-varying quantiles.',
      'Performed data pre-processing and statistical analysis of time series data of NetCDF files using Python libraries: statsmodels, NumPy, Pandas, Matplotlib.'
    ],
    links: [],
    badges: ['Statistics', 'Environmental Data', 'Time Series Analysis', 'Python', 'NetCDF']
  },
  {
    id: 'exp_jk_4',
    role: 'Machine Learning Intern',
    institution: 'RightProfile by Syntellect',
    logoSrc: 'https://placehold.co/80x40.png?text=RightProfile',
    logoAlt: 'RightProfile Logo',
    dataAiHint: 'tech company',
    supervisor: undefined, // Explicitly undefined as per original
    period: 'Dec 2024 – Present',
    description: [
      'Part of the Research and Development team to develop Computer Vision and Deep Learning models to automate the annotation of 10,000+ raw images.',
      'Conducting R&D on object detection models such as YOLOv8, YOLOv5, Detectron2, and Faster R-CNN to retrain and enhance performance of the existing model.'
    ],
    links: [],
    badges: ['Computer Vision', 'Object Detection', 'Deep Learning', 'YOLO', 'Detectron2']
  },
  {
    id: 'exp_jk_5',
    role: 'Machine Learning Intern',
    institution: 'The Habitats Trust',
    logoSrc: 'https://placehold.co/80x40.png?text=HabitatsTrust',
    logoAlt: 'The Habitats Trust Logo',
    dataAiHint: 'conservation organization',
    supervisor: undefined, // Explicitly undefined
    period: 'Dec 2024 – Present',
    description: [
      'Conducting research and development on modern Computer Vision and object detection models such as MegaDetector, Zamba, and Timelapse to classify and analyze wildlife in camera trap images.',
      'Part of the Tech4Conservation Project.'
    ],
    links: [{ label: 'Certificate', url: '#' }],
    badges: ['Wildlife AI', 'Computer Vision', 'Conservation Tech', 'Object Detection', 'MegaDetector']
  },
  {
    id: 'exp_jk_6',
    role: 'Summer Research Intern',
    institution: 'Polymath Jr.',
    logoSrc: 'https://placehold.co/80x40.png?text=PolymathJr',
    logoAlt: 'Polymath Jr. Logo',
    dataAiHint: 'education program',
    supervisor: 'Prof. Petronela Radu & Prof. Mikil Foss (University of Nebraska Lincoln)',
    period: 'June 2024 – Aug 2024',
    description: [
      'Engaged in research on Non-Local Models.',
      'Collaborated with Professors Petronela Radu and Mikil Foss from the University of Nebraska Lincoln.',
      'Focused on developing and analyzing mathematical models that incorporate non-local interactions.'
    ],
    links: [],
    badges: ['Mathematical Modeling', 'Non-Local Models', 'Research Collaboration']
  },
  {
    id: 'exp_jk_7',
    role: 'Selected Participant',
    institution: 'Mathematics Training and Talent Search Program (MTTS 24)',
    logoSrc: 'https://placehold.co/80x40.png?text=MTTS',
    logoAlt: 'MTTS Program Logo',
    dataAiHint: 'math program',
    supervisor: 'Mentors: Prof. Arusha C (IIT Bombay), Dr. A. Satyanarayana Reddy (IIT Kanpur), Dr. Ajit Kumar (ICT Mumbai)',
    period: '2024',
    description: [
      'Selected from over 3,000 applicants all over India for one of 180 seats.',
      'Mentored by Professor Arusha C (IIT Bombay), Dr. A. Satyanarayana Reddy (IIT Kanpur), and Dr. Ajit Kumar (ICT Mumbai).',
      'Completed rigorous coursework and led discussions in Linear Algebra, Real Analysis, Proof writing and Number Theory.'
    ],
    links: [{ label: 'Certificate', url: '#' }],
    badges: ['Mathematics', 'Proof Writing', 'Linear Algebra', 'Real Analysis', 'Number Theory']
  },
  {
    id: 'exp_jk_8',
    role: 'Teaching Assistant for MAT161: Applied Linear Algebra',
    institution: 'Academic Institution (Assumed)', // Kept as placeholder
    logoSrc: 'https://placehold.co/80x40.png?text=University',
    logoAlt: 'Academic Institution Logo',
    dataAiHint: 'university building',
    supervisor: undefined, // Explicitly undefined
    period: '2025',
    description: [
      'I provide video solutions to undergraduate students for important problems and quizzes, breaking down concepts intuitively.',
      'I help students understand not just the solutions but also how to approach problems and develop mathematical intuition.'
    ],
    links: [],
    badges: ['Teaching Assistant', 'Linear Algebra', 'Mathematics Education', 'Intuitive Learning']
  }
];

type ExperienceItem = typeof experienceData[0];

const sectionAnimationProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 }, // once: true for single animation
  transition: { duration: 0.6, ease: "easeInOut" },
};

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 }, // once: true for single animation for cards
  transition: {
    delay: 0.1, // Base delay, actual stagger handled by custom prop
    duration: 0.5,
    ease: "easeInOut",
  },
};


const ExperiencePageContent = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentExperience, setCurrentExperience] = useState<ExperienceItem | null>(null);

  const handleOpenDialog = (exp: ExperienceItem) => {
    setCurrentExperience(exp);
    setDialogOpen(true);
  };

  return (
    <div className="container mx-auto py-12 md:py-20">
      <motion.header {...sectionAnimationProps} className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-headline mb-4">My Experience</h1>
        <p className="text-xl text-muted-foreground">A Journey Through Research and Internships</p>
      </motion.header>
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {experienceData.map((exp, index) => (
          <motion.div
            key={exp.id}
            custom={index} // For potential stagger if variants were more complex
            variants={cardVariants} // Use the cardVariants which now has once: true
            // Removed individual initial/whileInView/viewport
            className="h-full flex flex-col" 
          >
            <div 
              className="p-6 rounded-lg border border-border bg-card shadow-lg hover:shadow-primary/20 hover:border-primary transition-all duration-300 cursor-pointer flex-grow flex flex-col"
              onClick={() => handleOpenDialog(exp)}
            >
              <div className="flex items-start space-x-4 mb-2">
                {exp.logoSrc && (
                  <div className="flex-shrink-0">
                    <Image 
                      src={exp.logoSrc} 
                      alt={exp.logoAlt || `${exp.institution} logo`} 
                      width={80} 
                      height={40} 
                      className="rounded object-contain"
                      data-ai-hint={exp.dataAiHint}
                    />
                  </div>
                )}
                <div className="flex-grow">
                  <h2 className="text-2xl font-headline text-primary mb-1">{exp.role}</h2>
                  <p className="text-lg text-foreground/80 mb-1">{exp.institution}</p>
                </div>
              </div>
              {exp.supervisor && <p className="text-sm text-muted-foreground mb-1">Supervisor: {exp.supervisor}</p>}
              <p className="text-sm text-muted-foreground mb-1">Period: {exp.period}</p>
              <p className="text-sm text-foreground/90 line-clamp-3 mt-2 flex-grow"> 
                {exp.description[0]} 
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {exp.badges.slice(0, 3).map(badge => (
                  <span key={badge} className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-full">{badge}</span>
                ))}
                {exp.badges.length > 3 && <span className="px-2 py-1 text-xs bg-secondary/70 text-secondary-foreground rounded-full">...</span>}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {currentExperience && (
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="sm:max-w-2xl">
            <DialogHeader>
              <div className="flex items-start space-x-4 mb-2">
                {currentExperience.logoSrc && (
                  <div className="flex-shrink-0 pt-1">
                    <Image 
                      src={currentExperience.logoSrc} 
                      alt={currentExperience.logoAlt || `${currentExperience.institution} logo`} 
                      width={100} 
                      height={50} 
                      className="rounded object-contain"
                      data-ai-hint={currentExperience.dataAiHint}
                    />
                  </div>
                )}
                <div className="flex-grow">
                  <DialogTitle className="text-2xl font-headline text-primary mb-1">{currentExperience.role}</DialogTitle>
                  <DialogDescription className="text-lg text-foreground/80">
                    {currentExperience.institution}
                  </DialogDescription>
                </div>
              </div>
              {currentExperience.supervisor && <p className="text-sm text-muted-foreground mt-1">Supervisor: {currentExperience.supervisor}</p>}
              <p className="text-sm text-muted-foreground">Period: {currentExperience.period}</p>
            </DialogHeader>
            
            <ScrollArea className="max-h-[50vh] pr-4 my-4 text-sm">
              <ul className="list-disc list-outside pl-5 space-y-1.5 text-foreground/90">
                {currentExperience.description.map((point, i) => <li key={i}>{point}</li>)}
              </ul>
              {currentExperience.links && currentExperience.links.length > 0 && (
                <div className="mt-4 pt-3 border-t border-border/50">
                  <h4 className="font-semibold mb-2 text-foreground">Links:</h4>
                  {currentExperience.links.map((link, i) => (
                    <Button key={i} asChild variant="link" className="text-accent p-0 h-auto mr-4 mb-1">
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.label} &rarr;
                        </a>
                    </Button>
                  ))}
                </div>
              )}
              <div className="mt-4 pt-3 border-t border-border/50">
                 <h4 className="font-semibold mb-2 text-foreground">Key Areas:</h4>
                <div className="flex flex-wrap gap-2">
                    {currentExperience.badges.map(badge => (
                    <span key={badge} className="px-2.5 py-1 text-xs bg-secondary text-secondary-foreground rounded-full">{badge}</span>
                    ))}
                </div>
              </div>
            </ScrollArea>
            <DialogFooter>
              <Button variant="outline" onClick={() => setDialogOpen(false)}>Close</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default ExperiencePageContent;

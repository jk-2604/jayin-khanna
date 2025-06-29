
"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import Link from "next/link";
import type { Project } from "@/lib/types";
import { useState } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from 'framer-motion';
import { GraduationCap } from "lucide-react";
import ProjectCarousel from "@/components/projects/ProjectCarousel"; // Import the carousel

const projectsData: Project[] = [
  {
    slug: 'domain-adaptation-medical-imaging',
    title: 'OUR: Domain Adaptation Techniques in Medical Imaging',
    year: '2024-2025',
    supervisorName: 'Dr. Saurabh Janardan Shigwan',
    supervisorLink: '#', 
    tags: ['#UDA', '#MedicalImaging', '#CT', '#MRI', '#DeepLearning', '#Research'],
    shortAbstract: `• Conducting Research on Unsupervised Domain Adaptation (UDA) Techniques for Medical Imaging Applications in CT and MRI.
• Implemented the Geodesic Flow Kernel on Grassmann manifolds to extract domain-invariant fea
tures, enabling effective cross-modality image analysis.
• Using Correlation Alignment (CORAL) and Maximum Mean Discrepancy (MMD) with geometric
 transformations to reduce domain shift.
• Previously worked on deep learning models to correct MRI motion artifacts in real-time using
 k-space data.`
  },
  {
    slug: 'investor-behavior-analysis-dl',
    title: 'Research Assistant: Investor Behavior Analysis using Deep Learning',
    year: '2024-2025',
    supervisorName: 'Dr. Ashish Vazirani',
    supervisorLink: '#', 
    tags: ['#DeepLearning', '#OpenCV', '#NLP', '#EmotionRecognition', '#SentimentAnalysis', '#Research'],
    shortAbstract: `• Developed a Deep Learning and OpenCV-based framework to analyze investor emotions, stance,
 and decision-making patterns in Shark Tank videos.
• Utilized EmotioNet for facial expression recognition and NLP models for the analysis of sentiment
 and intent from textual transcripts.
• Integrated multimodal data (visual and textual) to predict key factors influencing investment de
cisions.`
  },
  {
    slug: 'financial-markets-time-series-sentiment',
    title: 'Time Series and Sentiment Analysis in US Financial Markets using Deep Learning',
    year: '2024-2025',
    supervisorName: 'Dr. Charu Sharma (Mathematics Dept, SNU)',
    supervisorLink: 'https://snu.edu.in/faculty/charu-sharma/', 
    tags: ['#TimeSeries', '#SentimentAnalysis', '#FinancialMarkets', '#DeepLearning', '#ML', '#Research'],
    shortAbstract: `• Analyzing Time series Patterns and sentiment in US financial markets.
• Implemented Sequential Deep learning and ML models to understand market sentiment and its
 impact on financial trends.
• Working with the past 5-7 years of daily data of 31 potential financial indicators to predict financial
 trends. Applying Dimensionality Reduction Techniques, Statistical Time-Series Analysis, and DL
 Sequential Models`
  },
  {
    slug: 'filtering-recommendation-model',
    title: 'Filtering-Based Recommendation ML Model',
    year: '2024',
    tags: ['#RecommendationSystem', '#ML', '#CosineSimilarity', '#Ideathon'],
    shortAbstract: `• Developed a recommendation system using Cosine Similarity and Pearson correlation for Capital
 Connect, a matchmaking platform for investors and startups.
• Developed an algorithm that analyzes investor criteria and recommends startups, assigning a simi
larity score to each match. This project secured a Top 16 position in the SNU Ideathon competition.`
  },
  {
    slug: 'self-directed-learning-advanced-ai',
    title: 'Self-Directed Learning: Advanced AI Implementations',
    year: 'Ongoing',
    tags: ['#LLMs', '#NeuralTemporalPointProcesses', '#Dehazing', '#ComputerVision', '#GameAI'],
    shortAbstract: `Reading Projects:
• LLMs from Scratch
• Neural Temporal Point Processes
• Image and Video Dehazing models

Other Projects:
• AI Othello game from scratch
• Computer Vision Dehazing models implementation
• LLMs hard-coded from scratch`
  },
  {
    slug: 'nidar-drone-challenge',
    title: 'NIDAR Drone Innovation Challenge: Perception and Autonomy',
    year: 'Ongoing', 
    supervisorName: 'Prof Jyoti Sinha',
    supervisorLink: 'https://rocketreach.co/jyoti-sinha-email_38111920',
    tags: ['#DroneChallenge', '#ComputerVision', '#RL', '#Autonomy', '#DisasterManagement'],
    shortAbstract: `Part of the Perception and Autonomy team of the SNU team for the NIDAR Drone Innovation challenge. Working to build Computer vision and RL models for the 'Disaster Management' challenge.`
  }
];

const sectionAnimationProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeInOut" },
};

const ProjectsPage = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);

  const handleOpenDialog = (proj: Project) => {
    setCurrentProject(proj);
    setDialogOpen(true);
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <motion.header {...sectionAnimationProps} className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-headline mb-4">Research & Projects</h1>
        <p className="text-xl text-muted-foreground">How I managed not to stay bored</p>
      </motion.header>
      
      <ProjectCarousel projects={projectsData} onProjectClick={handleOpenDialog} />

      {currentProject && (
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="sm:max-w-xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-headline text-primary mb-1">{currentProject.title}</DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground">
                {currentProject.year}
                {currentProject.supervisorName && (
                  <div className="mt-2 text-sm text-muted-foreground flex items-start">
                    <GraduationCap className="mr-2 h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="mr-1">Supervisor: </span>
                    {currentProject.supervisorLink && currentProject.supervisorLink !== '#' ? (
                      <Link href={currentProject.supervisorLink} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline inline-block">
                        {currentProject.supervisorName}
                      </Link>
                    ) : (
                      <span className="inline-block">{currentProject.supervisorName}</span>
                    )}
                  </div>
                )}
                <div className="flex flex-wrap gap-2 mt-3">
                  {currentProject.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 text-xs bg-secondary text-secondary-foreground rounded-full">{tag}</span>
                  ))}
                </div>
              </DialogDescription>
            </DialogHeader>
            
            <ScrollArea className="max-h-[50vh] pr-4 my-4 text-sm">
              <p className="text-foreground/90 leading-relaxed whitespace-pre-line">{currentProject.shortAbstract}</p>
            </ScrollArea>
            
            <DialogFooter className="sm:justify-between items-center">
               <Button asChild variant="link" className="text-accent p-0 hover:underline mt-2 sm:mt-0">
                <Link href={`/projects/${currentProject.slug}`}>View Full Project Page &rarr;</Link>
              </Button>
              <Button variant="outline" onClick={() => setDialogOpen(false)} className="mt-4 sm:mt-0">Close</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default ProjectsPage;

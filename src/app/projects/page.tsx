
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import type { Project } from "@/lib/types";
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from 'framer-motion';

const projectsData: Project[] = [
  {
    slug: 'domain-adaptation-medical-imaging',
    title: 'OUR: Domain Adaptation Techniques in Medical Imaging',
    year: '2024-2025',
    tags: ['#UDA', '#MedicalImaging', '#CT', '#MRI', '#DeepLearning', '#Research'],
    shortAbstract: `Research Supervisor: Dr. Saurabh Janardan Shigwan

• Conducting Research on Unsupervised Domain Adaptation (UDA) Techniques for Medical Imaging Applications in CT and MRI.
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
    tags: ['#DeepLearning', '#OpenCV', '#NLP', '#EmotionRecognition', '#SentimentAnalysis', '#Research'],
    shortAbstract: `Research Supervisor: Dr. Ashish Vazirani

• Developed a Deep Learning and OpenCV-based framework to analyze investor emotions, stance,
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
    tags: ['#TimeSeries', '#SentimentAnalysis', '#FinancialMarkets', '#DeepLearning', '#ML', '#Research'],
    shortAbstract: `Research Supervisor: Dr. Charu Sharma (Mathematics Dept, SNU)

• Analyzing Time series Patterns and sentiment in US financial markets.
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
  }
];

const sectionAnimationProps = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeInOut" },
};

const cardVariants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeInOut" },
  }),
};

const ProjectsPage = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);

  const handleOpenDialog = (proj: Project) => {
    setCurrentProject(proj);
    setDialogOpen(true);
  };

  return (
    <div className="container py-12 md:py-20">
      <motion.header {...sectionAnimationProps} className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-headline mb-4">Research & Projects</h1>
        <p className="text-xl text-muted-foreground">Exploring Innovations at the Forefront of AI and Science</p>
      </motion.header>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projectsData.map((project, index) => (
          <motion.div
            key={project.slug}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={cardVariants}
          >
            <Card 
              onClick={() => handleOpenDialog(project)}
              className="flex flex-col justify-between shadow-lg border-border hover:border-primary transition-all duration-300 hover:shadow-primary/20 cursor-pointer h-full"
            >
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{project.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{project.year}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 text-xs bg-secondary text-secondary-foreground rounded-full">{tag}</span>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-foreground/80 line-clamp-4">
                  {project.shortAbstract.split('\n')[0]} 
                  {project.shortAbstract.split('\n')[1] && ` ${project.shortAbstract.split('\n')[1]}`}
                  {project.shortAbstract.split('\n')[2] && ` ${project.shortAbstract.split('\n')[2]}`}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <span className="text-sm text-primary">Click to learn more</span>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {currentProject && (
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="sm:max-w-xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-headline text-primary mb-1">{currentProject.title}</DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground">
                {currentProject.year}
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

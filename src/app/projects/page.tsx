"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const projectsData = [
  {
    slug: 'domain-adaptation-medical-imaging',
    title: 'OUR: Domain Adaptation Techniques in Medical Imaging',
    year: '2024–2025',
    supervisorName: 'Dr. Saurabh Janardan Shigwan',
    supervisorLink: '#',
    tags: ['#UDA', '#MedicalImaging', '#CT', '#MRI', '#DeepLearning', '#Research'],
    abstract: `Conducting research on Unsupervised Domain Adaptation (UDA) techniques for medical imaging applications in CT and MRI. Implemented the Geodesic Flow Kernel on Grassmann manifolds to extract domain-invariant features, enabling effective cross-modality image analysis. Using Correlation Alignment (CORAL) and Maximum Mean Discrepancy (MMD) with geometric transformations to reduce domain shift. Previously worked on deep learning models to correct MRI motion artifacts in real-time using k-space data.`,
  },
  {
    slug: 'investor-behavior-analysis-dl',
    title: 'Research Assistant: Investor Behavior Analysis using Deep Learning',
    year: '2024–2025',
    supervisorName: 'Dr. Ashish Vazirani',
    supervisorLink: '#',
    tags: ['#DeepLearning', '#OpenCV', '#NLP', '#EmotionRecognition', '#SentimentAnalysis', '#Research'],
    abstract: `Developed a Deep Learning and OpenCV-based framework to analyze investor emotions, stance, and decision-making patterns in Shark Tank videos. Utilized EmotioNet for facial expression recognition and NLP models for sentiment and intent analysis from textual transcripts. Integrated multimodal data (visual and textual) to predict key factors influencing investment decisions.`,
  },
  {
    slug: 'financial-markets-time-series-sentiment',
    title: 'Time Series and Sentiment Analysis in US Financial Markets using Deep Learning',
    year: '2024–2025',
    supervisorName: 'Dr. Charu Sharma (Mathematics Dept, SNU)',
    supervisorLink: 'https://snu.edu.in/faculty/charu-sharma/',
    tags: ['#TimeSeries', '#SentimentAnalysis', '#FinancialMarkets', '#DeepLearning', '#ML', '#Research'],
    abstract: `Analyzing time series patterns and sentiment in US financial markets. Implemented sequential deep learning and ML models to understand market sentiment and its impact on financial trends. Working with 5–7 years of daily data across 31 financial indicators, applying Dimensionality Reduction, Statistical Time-Series Analysis, and DL Sequential Models.`,
  },
  {
    slug: 'filtering-recommendation-model',
    title: 'Filtering-Based Recommendation ML Model',
    year: '2024',
    supervisorName: null,
    supervisorLink: null,
    tags: ['#RecommendationSystem', '#ML', '#CosineSimilarity', '#Ideathon'],
    abstract: `Developed a recommendation system using Cosine Similarity and Pearson correlation for Capital Connect, a matchmaking platform for investors and startups. Built an algorithm that analyzes investor criteria and recommends startups with a similarity score. Secured Top 16 position in the SNU Ideathon competition.`,
  },
  {
    slug: 'self-directed-learning-advanced-ai',
    title: 'Self-Directed Learning: Advanced AI Implementations',
    year: 'Ongoing',
    supervisorName: null,
    supervisorLink: null,
    tags: ['#LLMs', '#NeuralTemporalPointProcesses', '#Dehazing', '#ComputerVision', '#GameAI'],
    abstract: `Reading projects include LLMs from Scratch, Neural Temporal Point Processes, and Image/Video Dehazing models. Implementation projects include an AI Othello game built from scratch, Computer Vision Dehazing models, and LLMs hard-coded from scratch.`,
  },
  {
    slug: 'nidar-drone-challenge',
    title: 'NIDAR Drone Innovation Challenge: Perception and Autonomy',
    year: 'Ongoing',
    supervisorName: 'Prof. Jyoti Sinha',
    supervisorLink: 'https://rocketreach.co/jyoti-sinha-email_38111920',
    tags: ['#DroneChallenge', '#ComputerVision', '#RL', '#Autonomy', '#DisasterManagement'],
    abstract: `Part of the Perception and Autonomy team representing SNU in the NIDAR Drone Innovation Challenge. Working to build Computer Vision and Reinforcement Learning models for the Disaster Management challenge track.`,
  },
];

const sectionAnimationProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.6, ease: "easeInOut" },
};

const ProjectsPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-headline mb-4">Projects</h1>
        <p className="text-xl text-muted-foreground">
          Research projects, collaborations, and independent work.
        </p>
      </motion.header>

      <div className="space-y-8">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.slug}
            {...sectionAnimationProps}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="border border-border/60 rounded-xl p-6 md:p-8 hover:border-primary/60 transition-all duration-300 bg-card"
          >
            {/* Header row */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
              <h2 className="text-xl font-semibold text-foreground leading-snug">
                {project.title}
              </h2>
              <span className="text-sm text-muted-foreground whitespace-nowrap md:ml-4 mt-1 md:mt-0">
                {project.year}
              </span>
            </div>

            {/* Supervisor */}
            {project.supervisorName && (
              <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                <GraduationCap className="h-4 w-4 text-accent flex-shrink-0" />
                <span>Supervisor: </span>
                {project.supervisorLink && project.supervisorLink !== '#' ? (
                  <a
                    href={project.supervisorLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    {project.supervisorName}
                  </a>
                ) : (
                  <span>{project.supervisorName}</span>
                )}
              </div>
            )}

            {/* Abstract */}
            <p className="text-foreground/80 text-sm leading-relaxed mb-4">
              {project.abstract}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs bg-secondary text-secondary-foreground rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Link */}
            <Link
              href={`/projects/${project.slug}/`}
              className="text-primary text-sm font-medium hover:underline underline-offset-4"
            >
              View Full Project →
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;

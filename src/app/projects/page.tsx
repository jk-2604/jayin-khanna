
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import type { Project } from "@/lib/types";
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const projectsData: Project[] = [
  {
    slug: 'project-alpha',
    title: 'Project Alpha: Advanced GNNs for Financial Forecasting',
    year: 2023,
    tags: ['#GNN', '#Finance', '#DeepLearning'],
    shortAbstract: 'An innovative approach using Graph Neural Networks to predict stock market trends with higher accuracy. Leveraged temporal graph embeddings and attention mechanisms.'
  },
  {
    slug: 'project-beta',
    title: 'Project Beta: MRI Brain Scans Analysis with Non-local Models',
    year: 2022,
    tags: ['#MRI', '#Neuroscience', '#NonLocalModels'],
    shortAbstract: 'Utilized non-local deep learning models to identify early indicators of neurodegenerative diseases from MRI scans. Showcased improved sensitivity over traditional methods.'
  },
  {
    slug: 'project-gamma',
    title: 'Project Gamma: Domain Adaptation for Cross-Lingual NLP',
    year: 2023,
    tags: ['#NLP', '#DomainAdaptation', '#AI'],
    shortAbstract: 'Developed techniques for adapting NLP models to new languages with limited labeled data, enhancing performance in low-resource scenarios.'
  }
];


const ProjectsPage = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);

  const handleOpenDialog = (proj: Project) => {
    setCurrentProject(proj);
    setDialogOpen(true);
  };

  return (
    <div className="container py-12 md:py-20">
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-headline mb-4">Research & Projects</h1>
        <p className="text-xl text-muted-foreground">Exploring Innovations at the Forefront of AI and Science</p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <Card 
            key={project.slug} 
            onClick={() => handleOpenDialog(project)}
            className="flex flex-col justify-between shadow-lg border-border hover:border-primary transition-all duration-300 hover:shadow-primary/20 cursor-pointer"
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
            <CardContent>
              <CardDescription className="text-foreground/80 line-clamp-4">{project.shortAbstract}</CardDescription>
            </CardContent>
            <CardFooter>
              <span className="text-sm text-primary">Click to learn more</span>
            </CardFooter>
          </Card>
        ))}
      </div>

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

    
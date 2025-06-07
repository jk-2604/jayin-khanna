import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import type { Project } from "@/lib/types";

export const metadata = {
  title: 'Projects | Jayin Khanna',
  description: 'A collection of Jayin Khanna\'s research projects and personal endeavors.',
};

// Placeholder project data
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
  return (
    <div className="container py-12 md:py-20">
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-headline mb-4">Research & Projects</h1>
        <p className="text-xl text-muted-foreground">Exploring Innovations at the Forefront of AI and Science</p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <Card key={project.slug} className="flex flex-col justify-between shadow-lg border-border hover:border-primary transition-all duration-300 hover:shadow-primary/20">
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
              <CardDescription className="text-foreground/80">{project.shortAbstract}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button asChild variant="link" className="text-primary p-0 hover:underline">
                <Link href={`/projects/${project.slug}`}>Read More &rarr;</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* 
        Implementation details:
        - Grid of cards with staggered fade-in animation on scroll.
        - Each card links to /projects/[slug].
      */}
    </div>
  );
};

export default ProjectsPage;

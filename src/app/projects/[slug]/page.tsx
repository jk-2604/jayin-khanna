import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Link as LinkIcon, FileText } from "lucide-react";
import Link from "next/link";

// Placeholder for fetching project data by slug
async function getProjectData(slug: string) {
  // In a real app, fetch this from a database or MDX files
  if (slug === 'project-alpha') {
    return {
      slug: 'project-alpha',
      title: 'Project Alpha: Advanced GNNs for Financial Forecasting',
      year: 2023,
      tags: ['#GNN', '#Finance', '#DeepLearning'],
      fullWriteUp: `
        <p>Project Alpha aimed to revolutionize financial forecasting by leveraging the power of Graph Neural Networks (GNNs). Traditional time-series models often fail to capture the complex interdependencies between financial instruments and market entities. This project proposed a novel GNN architecture that models the stock market as a dynamic graph, where nodes represent assets and edges represent their relationships (e.g., correlations, sector-based connections, supply chain links).</p>
        <h3 class="text-xl font-headline mt-4 mb-2 text-primary">Methodology</h3>
        <p>We employed temporal graph embeddings to capture the evolving nature of these relationships. An attention mechanism was integrated to allow the model to focus on the most influential connections at any given time. The input features included historical price data, trading volumes, news sentiment scores, and macroeconomic indicators.</p>
        <p class="mt-2">The model was trained on a vast dataset spanning over a decade of market data from multiple international exchanges. Rigorous backtesting was performed to validate its performance against various benchmarks.</p>
        <h3 class="text-xl font-headline mt-4 mb-2 text-primary">Results & Impact</h3>
        <p>Project Alpha demonstrated a significant improvement in prediction accuracy for short-term and medium-term stock price movements compared to baseline models like ARIMA and LSTMs. The ability to interpret learned graph structures also provided valuable insights into market dynamics and risk propagation.</p>
        <pre class="bg-muted p-4 rounded-md my-4 overflow-x-auto"><code class="language-python"># Example: LaTeX for a simple equation
# E = mc^2
# This would be rendered by a LaTeX library
# \\( E = mc^2 \\)
</code></pre>
        <p>Future work includes incorporating more granular data sources and exploring real-time deployment strategies.</p>
      `,
      paperLink: '#',
      githubLink: '#',
      datasetLink: '#',
    };
  }
  return null;
}


export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = await getProjectData(params.slug);
  if (!project) {
    return { title: 'Project Not Found' }
  }
  return {
    title: `${project.title} | Projects`,
    description: `Details for project: ${project.title}`,
  };
}


export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = await getProjectData(params.slug);

  if (!project) {
    return <div className="container py-20 text-center text-muted-foreground">Project not found.</div>;
  }

  return (
    <div className="container py-12 md:py-20 max-w-4xl mx-auto">
      <header className="mb-10">
        <h1 className="text-4xl md:text-5xl font-headline mb-3 text-primary">{project.title}</h1>
        <p className="text-lg text-muted-foreground">Published: {project.year}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {project.tags.map(tag => (
            <span key={tag} className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full">{tag}</span>
          ))}
        </div>
      </header>

      <article className="prose prose-invert prose-lg max-w-none text-foreground/90 
                        prose-headings:text-primary prose-a:text-accent prose-strong:text-foreground 
                        prose-blockquote:border-primary prose-blockquote:text-muted-foreground
                        prose-code:bg-muted prose-code:p-1 prose-code:rounded-md prose-code:text-sm prose-code:font-code
                        prose-pre:bg-muted prose-pre:p-4 prose-pre:rounded-lg prose-pre:text-sm prose-pre:font-code">
        {/* Content will be rendered from MDX or HTML string */}
        {/* For now, using dangerouslySetInnerHTML for the placeholder HTML string */}
        <div dangerouslySetInnerHTML={{ __html: project.fullWriteUp }} />
      </article>

      <Separator className="my-12 bg-border/40" />

      <section className="mb-12">
        <h2 className="text-2xl font-headline mb-6 text-primary">Resources & Links</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {project.paperLink && (
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Link href={project.paperLink} target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-5 w-5" /> Read Paper
              </Link>
            </Button>
          )}
          {project.githubLink && (
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" /> View on GitHub
              </Link>
            </Button>
          )}
          {project.datasetLink && (
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Link href={project.datasetLink} target="_blank" rel="noopener noreferrer">
                <LinkIcon className="mr-2 h-5 w-5" /> Access Dataset
              </Link>
            </Button>
          )}
        </div>
      </section>
      
      {/* Placeholder for "Learn More" widget */}
      <section>
        <h3 className="text-xl font-headline mb-4 text-primary">Continue Exploring</h3>
        <p className="text-muted-foreground">
          Discover other related projects or articles. (Widget to be implemented)
        </p>
      </section>
    </div>
  );
}

// This is needed for dynamic routes in Next.js App Router to pre-render paths at build time
// In a real app, you'd fetch all project slugs.
export async function generateStaticParams() {
  const projectSlugs = ['project-alpha', 'project-beta', 'project-gamma']; // Example slugs
  return projectSlugs.map(slug => ({ slug }));
}

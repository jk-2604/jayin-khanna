
import HeroSection from '@/components/home/HeroSection';
import QuoteCarousel from '@/components/home/QuoteCarousel';
import { curateQuotes } from '@/ai/flows/curate-quotes';
import { Separator } from '@/components/ui/separator';

// Import page components to be used as sections
import AboutPageContent from '@/app/about/page';
import ExperiencePageContent from '@/app/experience/page';
import SkillsPageContent from '@/app/skills/page';
import ProjectsPageContent from '@/app/projects/page';

export const revalidate = 3600; // Revalidate quotes every hour

async function getQuotes() {
  try {
    const curated = await curateQuotes({
      topic: "philosophy, science, and learning",
      numberOfQuotes: 4,
    });
    return curated.quotes;
  } catch (error) {
    console.error(`Failed to fetch quotes. Details: ${error instanceof Error ? `${error.message}${error.stack ? `\nStack: ${error.stack}` : ''}` : String(error)}`);
    return [
      "The only true wisdom is in knowing you know nothing. - Socrates",
      "The important thing is not to stop questioning. Curiosity has its own reason for existing. - Albert Einstein",
      "Strive not to be a success, but rather to be of value. - Albert Einstein",
      "The mind is everything. What you think you become. - Buddha"
    ]; // Fallback quotes
  }
}

export default async function HomePage() {
  const quotes = await getQuotes();

  return (
    <div className="flex flex-col">
      <HeroSection />
      <Separator className="my-12 md:my-16 bg-border/40" />
      <QuoteCarousel initialQuotes={quotes} />
      <Separator className="my-12 md:my-16 bg-border/40" />

      <section id="about-section" className="py-12 md:py-16">
        <AboutPageContent />
      </section>
      <Separator className="my-12 md:my-16 bg-border/40" />

      <section id="experience-section" className="py-12 md:py-16">
        <ExperiencePageContent />
      </section>
      <Separator className="my-12 md:my-16 bg-border/40" />

      <section id="skills-section" className="py-12 md:py-16">
        <SkillsPageContent />
      </section>
      <Separator className="my-12 md:my-16 bg-border/40" />

      <section id="projects-section" className="py-12 md:py-16">
        <ProjectsPageContent />
      </section>
    </div>
  );
}

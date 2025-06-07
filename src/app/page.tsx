
import HeroSection from '@/components/home/HeroSection';
import QuoteCarousel from '@/components/home/QuoteCarousel';
import { curateQuotes } from '@/ai/flows/curate-quotes';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

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

const internalPageLinks = [
  { href: '/about', label: 'About Me' },
  { href: '/experience', label: 'Experience' },
  { href: '/skills', label: 'Skills' },
  { href: '/projects', label: 'Projects' },
];

export default async function HomePage() {
  const quotes = await getQuotes();

  return (
    <div className="flex flex-col">
      <HeroSection />
      <Separator className="my-8 md:my-12 bg-border/40" />
      <QuoteCarousel initialQuotes={quotes} />
      <Separator className="my-8 md:my-12 bg-border/40" />
      <section className="py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-3xl font-headline mb-8 text-primary">More to Explore</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {internalPageLinks.map((link) => (
              <Button key={link.href} asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary-foreground">
                <Link href={link.href}>
                  {link.label}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

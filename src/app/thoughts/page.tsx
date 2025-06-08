
"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { MessageCircle, Heart, Lightbulb } from "lucide-react";
import { motion } from 'framer-motion';

const sectionAnimationProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeInOut" },
};

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: {
    delay: 0.1, // Base delay
    duration: 0.5,
    ease: "easeInOut",
  },
};

const blogPosts = [
  {
    slug: 'the-nature-of-consciousness-in-ai',
    title: 'The Nature of Consciousness in AI: A Philosophical Inquiry',
    date: 'October 26, 2023',
    excerpt: 'Exploring the deep philosophical questions surrounding artificial consciousness, drawing parallels with human cognition and challenging current paradigms in AI development.',
    tags: ['AI', 'Philosophy', 'Consciousness'],
    reactions: { heart: 15, bulb: 8, cross: 2 },
    commentsCount: 5,
  },
  {
    slug: 'ethics-of-autonomous-systems',
    title: 'Navigating the Ethical Maze of Autonomous Systems',
    date: 'September 15, 2023',
    excerpt: 'A critical look at the ethical frameworks needed for increasingly autonomous AI systems, from self-driving cars to automated decision-making in critical sectors.',
    tags: ['Ethics', 'AI', 'Autonomous Systems'],
    reactions: { heart: 22, bulb: 12, cross: 1 },
    commentsCount: 8,
  },
];

const ThoughtsPage = () => {
  return (
    <div className="container mx-auto py-12 md:py-20">
      <motion.header {...sectionAnimationProps} className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-headline mb-4">Philosophical Thoughts</h1>
        <p className="text-xl text-muted-foreground">Musings on AI, Mind, and the Fabric of Reality</p>
      </motion.header>

      <div className="max-w-3xl mx-auto space-y-12">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.slug}
            custom={index} // For stagger
            variants={cardVariants}
            // Removed individual animation props to use variants
          >
            <Card className="shadow-lg border-border hover:border-primary transition-all duration-300 hover:shadow-primary/20 overflow-hidden">
              <CardHeader>
                <Link href={`/thoughts/${post.slug}`} className="hover:no-underline">
                  <CardTitle className="text-3xl text-primary hover:underline">{post.title}</CardTitle>
                </Link>
                <p className="text-sm text-muted-foreground">{post.date}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 text-xs bg-secondary text-secondary-foreground rounded-full">{tag}</span>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-foreground/80 leading-relaxed line-clamp-4">{post.excerpt}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <Button asChild variant="link" className="text-accent p-0 hover:underline">
                  <Link href={`/thoughts/${post.slug}`}>Continue Reading &rarr;</Link>
                </Button>
                <div className="flex items-center space-x-4 text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Heart size={16} className={post.reactions.heart > 0 ? 'text-red-500' : ''} /> <span>{post.reactions.heart}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Lightbulb size={16} className={post.reactions.bulb > 0 ? 'text-yellow-500' : ''} /> <span>{post.reactions.bulb}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MessageCircle size={16} /> <span>{post.commentsCount}</span>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
      
      <motion.div {...sectionAnimationProps} transition={{ ...sectionAnimationProps.transition, delay: 0.4 }} className="mt-16 text-center">
        <p className="text-lg text-muted-foreground">
          This blog will feature interactive comments (Firebase/Supabase), footnotes, blockquotes, and "Further Reading" sections.
        </p>
         <Button variant="outline" size="lg" className="mt-6 border-primary text-primary hover:bg-primary/10">
          View All Posts (Coming Soon)
        </Button>
      </motion.div>
    </div>
  );
};

export default ThoughtsPage;

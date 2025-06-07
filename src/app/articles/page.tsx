
"use client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { BookOpen, Filter, Brain, Atom, BarChartBig } from "lucide-react";
import type { Article } from "@/lib/types";
import { motion } from 'framer-motion';

const sectionAnimationProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeInOut" },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeInOut" },
  }),
};

// Placeholder articles data
const articlesData: Article[] = [
  { slug: 'intro-to-gnns', title: 'Understanding Graph Neural Networks', category: 'AI/ML', readingTime: '15 min', difficulty: 'Intermediate' },
  { slug: 'philosophy-of-infinity', title: 'The Concept of Infinity in Mathematics', category: 'Philosophy of Math', readingTime: '20 min', difficulty: 'Advanced' },
  { slug: 'market-efficiency-hypothesis', title: 'Exploring the Efficient Market Hypothesis', category: 'Markets', readingTime: '12 min', difficulty: 'Intermediate' },
  { slug: 'cognitive-biases-in-ai', title: 'Cognitive Biases and Their Impact on AI Systems', category: 'Neuroscience', readingTime: '18 min', difficulty: 'Advanced' },
];

const categories = [
  { name: 'AI/ML', icon: <Brain size={20}/>, count: articlesData.filter(a => a.category === 'AI/ML').length },
  { name: 'Philosophy of Math', icon: <Atom size={20}/>, count: articlesData.filter(a => a.category === 'Philosophy of Math').length },
  { name: 'Markets', icon: <BarChartBig size={20}/>, count: articlesData.filter(a => a.category === 'Markets').length },
  { name: 'Neuroscience', icon: <BookOpen size={20}/>, count: articlesData.filter(a => a.category === 'Neuroscience').length },
];

const ArticlesPage = () => {
  return (
    <div className="container py-12 md:py-20">
      <motion.header {...sectionAnimationProps} className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-headline mb-4">Learning Vault</h1>
        <p className="text-xl text-muted-foreground">A Curated Collection of Knowledge and Insights</p>
      </motion.header>

      <div className="flex flex-col md:flex-row gap-12">
        <motion.aside {...sectionAnimationProps} transition={{ ...sectionAnimationProps.transition, delay: 0.2 }} className="w-full md:w-1/4 lg:w-1/5">
          <div className="sticky top-20">
            <h2 className="text-2xl font-headline mb-4 text-primary">Categories</h2>
            <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
              {categories.map((category, index) => (
                <AccordionItem value={`item-${index}`} key={category.name}>
                  <AccordionTrigger className="text-lg hover:text-accent">
                    <div className="flex items-center space-x-2">
                      {category.icon}
                      <span>{category.name} ({category.count})</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 pl-4">
                      {articlesData.filter(a => a.category === category.name).map(article => (
                         <li key={article.slug}>
                           <Link href={`/articles/${article.slug}`} className="text-muted-foreground hover:text-primary transition-colors">
                             {article.title}
                           </Link>
                         </li>
                       ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="mt-8">
              <h3 className="text-xl font-headline mb-3 text-primary">Filter</h3>
              <Input placeholder="Search articles..." className="bg-input border-input-border focus:border-primary" />
            </div>
          </div>
        </motion.aside>

        <motion.main {...sectionAnimationProps} transition={{ ...sectionAnimationProps.transition, delay: 0.4 }} className="w-full md:w-3/4 lg:w-4/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articlesData.map((article, index) => (
              <motion.div
                key={article.slug}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
              >
                <Card className="shadow-lg border-border hover:border-primary transition-all duration-300 hover:shadow-primary/20 h-full flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{article.title}</CardTitle>
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>{article.category}</span>
                      <span>{article.readingTime} read</span>
                      <span>Difficulty: {article.difficulty}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-foreground/80 line-clamp-3">
                      This is a short placeholder description for the article "{article.title}". Full MDX content with auto-generated ToC and glossary highlights will be available on the article page.
                    </CardDescription>
                  </CardContent>
                  <div className="p-6 pt-0 mt-auto">
                     <Link href={`/articles/${article.slug}`} className="text-accent font-medium hover:underline">
                      Read Article &rarr;
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
           <p className="mt-12 text-center text-muted-foreground">
            Individual article pages will feature MDX-powered content, auto-generated Table of Contents, and hover highlights for glossary terms.
          </p>
        </motion.main>
      </div>
    </div>
  );
};

export default ArticlesPage;

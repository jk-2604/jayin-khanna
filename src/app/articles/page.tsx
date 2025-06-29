"use client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { BookOpen, Brain, Layers, SigmaSquare } from "lucide-react";
import type { Article } from "@/lib/types";
import { motion } from 'framer-motion';
import React from 'react';

const ArticlesPage: React.FC = () => {
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
            delay: 0.1,
            duration: 0.5,
            ease: "easeInOut",
        },
    };

    const articlesData: Article[] = [
        { slug: 'sequential-models', title: 'Sequential Models: RNNs Overview', category: 'AI/ML', readingTime: '25 min', difficulty: 'Advanced' },
        { slug: 'principal-component-analysis', title: 'Principal Component Analysis', category: 'AI/ML', readingTime: '20 min', difficulty: 'Intermediate' },
        { slug: 'neural-networks-fundamentals', title: 'Neural Networks: Foundations and Architectures', category: 'AI/ML', readingTime: '30 min', difficulty: 'Advanced' },
    ];
    
    const categories = [
        { name: 'AI/ML', icon: Brain, count: articlesData.filter(a => a.category === 'AI/ML').length },
    ];

    function getArticleIcon(slug: string) {
        if (slug.includes('sequential-models') || slug.includes('neural-networks')) {
            return <Layers size={18} className="mr-2 text-accent" />;
        }
        if (slug.includes('principal-component-analysis')) {
            return <SigmaSquare size={18} className="mr-2 text-accent" />;
        }
        return <BookOpen size={18} className="mr-2 text-accent" />;
    }

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <motion.header {...sectionAnimationProps} className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-headline mb-4">Learning Vault</h1>
        <p className="text-xl text-muted-foreground">
          Curated and documented all the material that has helped me over the years. Wanna add something?{' '}
          <Link href="/contact" className="text-accent hover:underline">
            let me know
          </Link>
          !
        </p>
      </motion.header>

      <div className="flex flex-col md:flex-row gap-12">
        <motion.aside
          {...sectionAnimationProps}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ ...sectionAnimationProps.transition, delay: 0.2 }}
          className="w-full md:w-1/4 lg:w-1/5"
        >
          <div className="sticky top-20">
            <h2 className="text-2xl font-headline mb-4 text-primary">Categories</h2>
            <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
              {categories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <AccordionItem value={`item-${index}`} key={category.name}>
                    <AccordionTrigger className="text-lg hover:text-accent">
                      <div className="flex items-center space-x-2">
                        <Icon size={20} />
                        <span>{category.name} ({category.count})</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 pl-4">
                        {articlesData.filter(a => a.category === category.name).map(article => (
                          <li key={article.slug}>
                            <Link href={`/articles/${article.slug}`} className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                              {getArticleIcon(article.slug)}
                              <span className="truncate w-full">{article.title}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
            <div className="mt-8">
              <h3 className="text-xl font-headline mb-3 text-primary">Filter</h3>
              <Input placeholder="Search articles..." className="bg-input border-input-border focus:border-primary" />
            </div>
          </div>
        </motion.aside>

        <motion.main
          {...sectionAnimationProps}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ ...sectionAnimationProps.transition, delay: 0.4 }}
          className="w-full md:w-3/4 lg:w-4/5"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articlesData.map((article, index) => (
              <motion.div
                key={article.slug}
                custom={index}
                variants={cardVariants}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true, amount: 0.2 }}
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
                      {article.slug === 'sequential-models'
                        ? "A comprehensive mathematical overview of Recurrent Neural Networks, exploring their history, structure, training, and challenges. Full content in PDF."
                        : article.slug === 'principal-component-analysis'
                          ? "Dive into Principal Component Analysis, understanding its mathematical foundations and applications. Full content in PDF."
                          : article.slug === 'neural-networks-fundamentals'
                            ? "Explore the core concepts and diverse architectures of Neural Networks. Full content in PDF."
                            : `This is a short placeholder description for the article "${article.title}". Full MDX content with auto-generated ToC and glossary highlights will be available on the article page.`
                      }
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
            Individual article pages may feature MDX-powered content, auto-generated Table of Contents, and hover highlights for glossary terms, or embedded PDFs.
          </p>
        </main>
      </div>
    </div>
  );
};

export default ArticlesPage;
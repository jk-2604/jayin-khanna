
"use client";
import Link from "next/link";
import { Brain, Layers, SigmaSquare } from "lucide-react";
import { motion } from 'framer-motion';
import React from 'react';

const ArticlesPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <motion.header 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="text-center mb-16">
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
        {/* --- Sidebar --- */}
        <motion.aside
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
          className="w-full md:w-1/4 lg:w-1/5"
        >
          <div className="sticky top-20">
            <h2 className="text-2xl font-headline mb-4 text-primary">Categories</h2>
            {/* Using divs instead of Accordion for simplicity to fix build */}
            <div className="w-full border-b">
                <div className="flex flex-1 items-center justify-between py-4 font-medium hover:underline">
                    <div className="flex items-center space-x-2">
                        <Brain size={20} />
                        <span>AI/ML (3)</span>
                    </div>
                </div>
                <div className="overflow-hidden text-sm pb-4 pt-0">
                    <ul className="space-y-2 pl-4">
                        <li>
                        <Link href={`/articles/sequential-models`} className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                            <Layers size={18} className="mr-2 text-accent" />
                            <span className="truncate w-full">Sequential Models: RNNs Overview</span>
                        </Link>
                        </li>
                        <li>
                        <Link href={`/articles/principal-component-analysis`} className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                            <SigmaSquare size={18} className="mr-2 text-accent" />
                            <span className="truncate w-full">Principal Component Analysis</span>
                        </Link>
                        </li>
                        <li>
                        <Link href={`/articles/neural-networks-fundamentals`} className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                            <Layers size={18} className="mr-2 text-accent" />
                            <span className="truncate w-full">Neural Networks: Foundations and Architectures</span>
                        </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-headline mb-3 text-primary">Filter</h3>
              <input placeholder="Search articles..." className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-input border-input-border focus:border-primary" />
            </div>
          </div>
        </motion.aside>

        {/* --- Main Content --- */}
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.4 }}
          className="w-full md:w-3/4 lg:w-4/5"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Article Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5, ease: "easeInOut" }}
            >
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm shadow-lg border-border hover:border-primary transition-all duration-300 hover:shadow-primary/20 h-full flex flex-col">
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="text-2xl font-semibold leading-none tracking-tight text-xl text-primary">Sequential Models: RNNs Overview</h3>
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>AI/ML</span>
                    <span>25 min read</span>
                    <span>Difficulty: Advanced</span>
                  </div>
                </div>
                <div className="p-6 pt-0 flex-grow">
                  <p className="text-sm text-muted-foreground text-foreground/80 line-clamp-3">
                    A comprehensive mathematical overview of Recurrent Neural Networks, exploring their history, structure, training, and challenges. Full content in PDF.
                  </p>
                </div>
                <div className="p-6 pt-0 mt-auto">
                  <Link href={`/articles/sequential-models`} className="text-accent font-medium hover:underline">
                    Read Article &rarr;
                  </Link>
                </div>
              </div>
            </motion.div>
            
            {/* Article Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5, ease: "easeInOut" }}
            >
               <div className="rounded-lg border bg-card text-card-foreground shadow-sm shadow-lg border-border hover:border-primary transition-all duration-300 hover:shadow-primary/20 h-full flex flex-col">
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="text-2xl font-semibold leading-none tracking-tight text-xl text-primary">Principal Component Analysis</h3>
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>AI/ML</span>
                    <span>20 min read</span>
                    <span>Difficulty: Intermediate</span>
                  </div>
                </div>
                <div className="p-6 pt-0 flex-grow">
                  <p className="text-sm text-muted-foreground text-foreground/80 line-clamp-3">
                    Dive into Principal Component Analysis, understanding its mathematical foundations and applications. Full content in PDF.
                  </p>
                </div>
                <div className="p-6 pt-0 mt-auto">
                  <Link href={`/articles/principal-component-analysis`} className="text-accent font-medium hover:underline">
                    Read Article &rarr;
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Article Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5, ease: "easeInOut" }}
            >
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm shadow-lg border-border hover:border-primary transition-all duration-300 hover:shadow-primary/20 h-full flex flex-col">
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="text-2xl font-semibold leading-none tracking-tight text-xl text-primary">Neural Networks: Foundations and Architectures</h3>
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>AI/ML</span>
                    <span>30 min read</span>
                    <span>Difficulty: Advanced</span>
                  </div>
                </div>
                <div className="p-6 pt-0 flex-grow">
                  <p className="text-sm text-muted-foreground text-foreground/80 line-clamp-3">
                    Explore the core concepts and diverse architectures of Neural Networks. Full content in PDF.
                  </p>
                </div>
                <div className="p-6 pt-0 mt-auto">
                  <Link href={`/articles/neural-networks-fundamentals`} className="text-accent font-medium hover:underline">
                    Read Article &rarr;
                  </Link>
                </div>
              </div>
            </motion.div>
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

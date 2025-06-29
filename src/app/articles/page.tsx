"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Brain, Sigma } from 'lucide-react';

// This page is now static and won't cause build errors.
const ArticlesPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <motion.header 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-headline mb-4">Learning Vault</h1>
        <p className="text-xl text-muted-foreground">
          A curated collection of my seminar reports and topic explorations.
        </p>
      </motion.header>

      <div className="space-y-12">
        {/* Category: Deep Learning */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <div className="flex items-center space-x-3 mb-6">
            <Brain size={28} className="text-primary" />
            <h2 className="text-3xl font-headline text-primary">Deep Learning</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm hover:border-primary transition-all duration-300">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight">Sequential Models: RNNs Overview</h3>
                <p className="text-sm text-muted-foreground">Beginner | 5 min read</p>
              </div>
              <div className="p-6 pt-0">
                <Link href="/articles/sequential-models" className="text-primary underline-offset-4 hover:underline text-sm font-medium">Read Article &rarr;</Link>
              </div>
            </div>
            {/* Card 2 */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm hover:border-primary transition-all duration-300">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight">Neural Networks: Foundations and Architectures</h3>
                <p className="text-sm text-muted-foreground">Intermediate | 8 min read</p>
              </div>
              <div className="p-6 pt-0">
                <Link href="/articles/neural-networks-fundamentals" className="text-primary underline-offset-4 hover:underline text-sm font-medium">Read Article &rarr;</Link>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Category: Statistics & ML */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <div className="flex items-center space-x-3 mb-6">
            <Sigma size={28} className="text-primary" />
            <h2 className="text-3xl font-headline text-primary">Statistics &amp; ML</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 3 */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm hover:border-primary transition-all duration-300">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight">Principal Component Analysis</h3>
                <p className="text-sm text-muted-foreground">Intermediate | 6 min read</p>
              </div>
              <div className="p-6 pt-0">
                <Link href="/articles/principal-component-analysis" className="text-primary underline-offset-4 hover:underline text-sm font-medium">Read Article &rarr;</Link>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ArticlesPage;
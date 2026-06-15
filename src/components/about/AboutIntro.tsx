
"use client";
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutIntro = () => {
  return (
    <Card className="overflow-hidden shadow-xl">
      <div className="flex flex-col items-center">
        <div className="relative w-full max-w-xs aspect-[3/4] mx-auto mb-6 overflow-hidden rounded-lg shadow-lg mt-8">
          <Image
            src="/images/my-photo.jpeg"
            alt="Jayin Khanna"
            fill
            className="object-cover"
            data-ai-hint="professional portrait"
          />
        </div>
        <div className="p-8 md:p-12 text-center md:text-left w-full">
          <h2 className="text-3xl font-headline mb-6 text-primary text-center">Jayin Khanna</h2>
          
          <div className="space-y-4 text-lg text-foreground/90">
            <p>
              I am a graduate of Shiv Nadar Institution of Eminence, where I was the recipient of the Program Batch Topper award for the Bachelor of Science (Research) in Mathematics in May 2026, with a minor in CSE and double specialisations in AI & ML and Mathematical Finance. I am concurrently pursuing an online BS in Data Science and Applications from the Indian Institute of Technology, Madras.
            </p>

            <p>
              I have been working as an active researcher in AI and DL for the past 4 years, with a particular 
              interest in Generative Models- Applications or Core formulations of Diffusion, Flow Matching; Self-Supervised Learning, Interpretability and LLMs with applications in Computer Vision, NLP and Speech processing. 
            </p>

            <p>
              I am looking to work on a long-term project and aiming for a potential publication in one of the top conferences, such as ICLR, ICML, NeurIPS and TMLR. 
            </p>

            <p>
              I regularly document everything I learn — through detailed LaTeX notes & Notion write-ups which I post on <Link href="https://jayin-khanna.vercel.app/articles" className="text-purple-600 font-medium hover:underline">My Research Page</Link>.
            </p>

            <p>
              Check out my <Link href="/articles/thesis-poster" className="text-primary font-medium hover:underline">Thesis Poster</Link> and latest notes on <Link href="/articles/ddpm-notes" className="text-primary font-medium hover:underline">DDPMs</Link>, <Link href="/articles/variational-autoencoders" className="text-primary font-medium hover:underline">VAEs</Link>, <Link href="/articles/generative-models-overview" className="text-primary font-medium hover:underline">GANs</Link>, and <Link href="/articles/contrastive-learning-simclr-ijepa" className="text-primary font-medium hover:underline">Contrastive Learning</Link> in the Research section!
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-border/40 pt-8">
            <div>
              <h3 className="text-xl font-headline text-primary mb-4">My Research Interests</h3>
              <ul className="list-disc pl-5 space-y-1.5 text-foreground/80 text-base">
                <li>Core & applications of Generative Models (DDPMs, Flow matching); T2I and T2V models</li>
                <li>Unsupervised and self-supervised learning</li>
                <li>Representation learning</li>
                <li>Speech processing using DL</li>
                <li>Deep Learning Applications in Time Series</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-headline text-primary mb-4">Very Enthusiastic about</h3>
              <ul className="list-disc pl-5 space-y-1.5 text-foreground/80 text-base">
                <li>Mechanistic Interpretability</li>
                <li>Geometric Deep Learning</li>
                <li>Graph Machine Learning</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 space-y-6 text-lg text-foreground/90 border-t border-border/40 pt-8">
            <p>
              I love doing research! You can see more in <Link href="/#journey-section" className="text-primary font-medium hover:underline">My Journey</Link>.
            </p>

            <p>
              Beyond academics, I love playing football and running. I also love reading- mainly psychology and philosophy but I explore other genres as well.
            </p>

            <p>
              If you have cool project ideas, or want to discuss thought experiments or ideologies - regardless of the domain, and want to collaborate, <Link href="/contact" className="text-primary font-medium hover:underline">ping me</Link>! I am always looking forward to interesting stuff!
            </p>
          </div>

          <div className="mt-10 flex justify-center md:justify-start">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/contact">
                Let's Connect! <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};
export default AboutIntro;

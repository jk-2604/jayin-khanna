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

          <div className="space-y-6 text-lg text-foreground/90">

            {/* Education & Honours block */}
            <div className="space-y-4">

              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-primary/70 mb-2">Education</p>
                <ul className="space-y-2 text-base text-foreground/85">
                  <li>
                    <span className="font-medium">BSc (Research) in Mathematics</span> — SNIoE, May 2026
                    <br />
                    <span className="text-sm text-muted-foreground pl-4">Minor in CSE · Specialisations: AI &amp; ML · Mathematical Finance</span>
                  </li>
                  <li>
                    <span className="font-medium">BS in Data Science &amp; Applications</span> — IIT Madras (ongoing)
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-primary/70 mb-2">Honours &amp; Credits</p>
                <ul className="space-y-1.5 text-base text-foreground/85">
                  <li>Program Batch Topper — SNIoE</li>
                  <li>2nd Prize, Best Thesis — SNIoE</li>
                  <li>
                    238 credits across 4 years (176 SNIoE + 52 IIT Madras) —{' '}
                    <a
                      href="https://drive.google.com/file/d/1FCkHxOlw0dFiy0MQkJ5pmZrJQER-XM9r/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-medium hover:underline"
                    >
                      view course list
                    </a>
                  </li>
                </ul>
              </div>

            </div>

            <p>
              I have been working as an active researcher in AI and deep learning for the past 4
              years. My primary interest lies in Generative Models — both core formulations
              (Diffusion, Flow Matching) and applications in T2I and T2V systems — alongside
              Self-Supervised Learning, Mechanistic Interpretability, and LLMs, with applications
              spanning Computer Vision, NLP, and Speech Processing.
            </p>

            <p>
              I am actively looking to work on a long-term research project with the aim of
              publishing at a top venue — ICLR, ICML, NeurIPS, or TMLR.
            </p>

            <p>
              I regularly document everything I learn through detailed LaTeX notes and Notion
              write-ups, posted on{' '}
              <Link href="/articles" className="text-primary font-medium hover:underline">
                My Research Page
              </Link>
              . Check out my{' '}
              <Link href="/articles/thesis-poster/" className="text-primary font-medium hover:underline">
                Thesis Poster
              </Link>{' '}
              and latest notes on{' '}
              <Link href="/articles/ddpm-notes/" className="text-primary font-medium hover:underline">
                DDPMs
              </Link>
              ,{' '}
              <Link href="/articles/variational-autoencoders/" className="text-primary font-medium hover:underline">
                VAEs
              </Link>
              ,{' '}
              <Link href="/articles/generative-models-overview/" className="text-primary font-medium hover:underline">
                GANs
              </Link>
              , and{' '}
              <Link href="/articles/contrastive-learning-simclr-ijepa/" className="text-primary font-medium hover:underline">
                Contrastive Learning
              </Link>
              .
            </p>

          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-border/40 pt-8">
            <div>
              <h3 className="text-xl font-headline text-primary mb-4">My Research Interests</h3>
              <ul className="list-disc pl-5 space-y-1.5 text-foreground/80 text-base">
                <li>Core &amp; applications of Generative Models (DDPMs, Flow Matching); T2I and T2V models</li>
                <li>Unsupervised and self-supervised learning</li>
                <li>Representation learning</li>
                <li>Speech processing using DL</li>
                <li>Deep Learning Applications in Time Series</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-headline text-primary mb-4">Exploring</h3>
              <ul className="list-disc pl-5 space-y-1.5 text-foreground/80 text-base">
                <li>Mechanistic Interpretability</li>
                <li>Geometric Deep Learning</li>
                <li>Graph Machine Learning</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 space-y-6 text-lg text-foreground/90 border-t border-border/40 pt-8">
            <p>
              I love doing research! You can see more in{' '}
              <Link href="/#journey-section" className="text-primary font-medium hover:underline">
                My Journey
              </Link>
              .
            </p>

            <p>
              Beyond academics, I love playing football and running. I also love reading — mainly
              psychology and philosophy, but I explore other genres as well.
            </p>

            <p>
              If you have cool project ideas, or want to discuss thought experiments or ideologies —
              regardless of the domain — and want to collaborate,{' '}
              <Link href="/contact" className="text-primary font-medium hover:underline">
                ping me
              </Link>
              ! I am always looking forward to interesting stuff!
            </p>
          </div>

          <div className="mt-10 flex justify-center md:justify-start">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/contact">
                Let&apos;s Connect! <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

        </div>
      </div>
    </Card>
  );
};

export default AboutIntro;

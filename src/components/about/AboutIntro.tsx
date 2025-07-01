
"use client";
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Props for animation, to be passed from parent or defined if static
const sectionAnimationProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeInOut" },
};

const AboutIntro = () => {
  return (
    // The motion.section wrapper will be applied in the parent page (src/app/page.tsx or src/app/about/page.tsx)
    // This component now returns the direct content of the intro card.
    <Card className="overflow-hidden shadow-xl">
      <div className="flex flex-col items-center"> {/* Changed to flex-col for vertical stacking */}
        <div className="relative w-full max-w-xs aspect-[3/4] mx-auto mb-6 overflow-hidden rounded-lg shadow-lg"> {/* Adjusted container for image */}
          <Image
            src="/images/photo .jpg"
            alt="Your Photo" // Alt text is important for accessibility
            layout="fill" // Use layout fill to cover the container
            objectFit="cover" // Ensure aspect ratio is maintained and covers the area
            data-ai-hint="professional portrait"
          />
        </div>
        <div className="p-8 md:p-12"> {/* Padding for the text content */}
          <h2 className="text-3xl font-headline mb-6 text-primary">Jayin Khanna</h2>
          <p className="text-lg mb-4 text-foreground/90">
            I'm currently in my fourth year of a B.Sc. (Research) in Mathematics, with a minor in Computer Science and Engineering at Shiv Nadar Institute of Eminence, Noida. I am specializing in Artificial Intelligence, Machine Learning, and Mathematical Finance. I am also pursuing an Online degree in BS in Data Science and Applications from IIT Madras.
          </p>
          <p className="text-lg mb-4 text-foreground/90">
 I previously worked as a Machine Learning Research Intern at the Institute of Nuclear Medicine and Allied Sciences (INMAS), DRDO, New Delhi, under Dr. Shilpi Modi (Scientist 'E'), and am currently continuing a new research project under her guidance. I was also selected for the ISRP program at University of California, Santa Cruz. I worked as a Statistics Research intern under Dr. Bruno Sanso in Time series analysis of Environmental variables. 
To get a taste of what the industry is like, I interned at Syntellect by Right Profile as an R&D Intern in ML and Computer Vision, and also worked briefly with The Habitats Trust on CV-based projects as part of the Tech4Conservation initiative. You can see more in <Link href="/#journey-section" className="text-primary hover:underline font-medium">My Journey</Link>.
          </p>
          <p className="text-lg mb-4 text-foreground/90">
            I love doing research!
          </p>
          <h3 className="text-2xl font-headline mt-6 mb-3 text-primary/90">My Research Interests</h3>
          <ul className="list-disc list-inside space-y-1 text-lg mb-4 text-foreground/90">
            <li>Geometric Deep Learning</li>
            <li>Graph Machine Learning</li>
            <li>Domain Adaptation and Transfer Learning</li>
            <li>Deep Learning Applications in Time Series</li>
            <li>RL also seems interesting, but still exploring</li>
          </ul>
          <p className="text-lg mb-4 text-foreground/90">
            Beyond academics, I love playing football and running. I also love reading- mainly psychology and philosophy but I explore other genres as well.
          </p>
          <p className="text-lg mb-6 text-foreground/90">
            If you have cool project ideas, or want to discuss thought experiments or ideologies - regardless of the domain, and want to collaborate, ping me! I am always looking forward to interesting stuff!
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/contact">
              Let's Connect! <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
};
export default AboutIntro;

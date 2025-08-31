
"use client";
import { motion } from 'framer-motion';
import { Bookmark } from 'lucide-react';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from '@/components/ui/card';

const sectionAnimationProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeInOut" },
};

const IfItHelpsPage = () => {
  const kiplingPoem = `If you can keep your head when all about you
   Are losing theirs and blaming it on you;
If you can trust yourself when all men doubt you,
   But make allowance for their doubting too;
If you can wait and not be tired by waiting,
   Or, being lied about, don’t deal in lies,
Or, being hated, don’t give way to hating,
   And yet don’t look too good, nor talk too wise;

If you can dream—and not make dreams your master;
   If you can think—and not make thoughts your aim;
If you can meet with triumph and disaster
   And treat those two impostors just the same;
If you can bear to hear the truth you’ve spoken
   Twisted by knaves to make a trap for fools,
Or watch the things you gave your life to broken,
   And stoop and build ’em up with wornout tools;

If you can make one heap of all your winnings
   And risk it on one turn of pitch-and-toss,
And lose, and start again at your beginnings
   And never breathe a word about your loss;
If you can force your heart and nerve and sinew
   To serve your turn long after they are gone,
And so hold on when there is a nothing in you
   Except the Will which says to them: “Hold on”;

If you can talk with crowds and keep your virtue,
   Or walk with kings—nor lose the common touch;
If neither foes nor loving friends can hurt you;
   If all men count with you, but none too much;
If you can fill the unforgiving minute
With sixty seconds’ worth of distance run—
   Yours is the Earth and everything that’s in it,
And—which is more—you’ll be a Man, my son!`;

  const bukowskiPoem = `invent yourself and then reinvent yourself,
don’t swim in the same slough.
invent yourself and then reinvent yourself
and
stay out of the clutches of mediocrity.

invent yourself and then reinvent yourself,
change your tone and shape so often that they can
never
categorize you.

reinvigorate yourself and
accept what is
but only on the terms that you have invented
and reinvented.

be self-taught.

and reinvent your life because you must;
it is your life and
its history
and the present
belong only to
you.`;

  return (
    <div className="container mx-auto py-12 md:py-20">
      <motion.header 
        {...sectionAnimationProps}
        className="text-center mb-12"
      >
        <Bookmark className="h-16 w-16 text-primary mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-headline mb-4 text-primary">
          If It Helps
        </h1>
        <p className="text-lg text-muted-foreground">
          What I wish I had known and understood sooner. What I would give to my younger self.
        </p>
        <p className="text-lg text-muted-foreground">
          Hope you get something out of it ;)
        </p>
      </motion.header>

      <motion.div 
        {...sectionAnimationProps}
        transition={{...sectionAnimationProps.transition, delay: 0.2}}
        className="max-w-4xl mx-auto"
      >
        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1" className="border rounded-lg shadow-lg bg-card overflow-hidden">
            <AccordionTrigger className="text-xl font-headline text-primary hover:no-underline px-6 py-4">
              A comic about finding purpose
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
               <div className="rounded-md overflow-hidden border">
                  <Image
                    src="/images/squirrels-comic.jpeg"
                    alt="A comic about purpose and finding squirrels"
                    width={1076}
                    height={441}
                    layout="responsive"
                    data-ai-hint="philosophy comic"
                  />
                </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border rounded-lg shadow-lg bg-card overflow-hidden">
            <AccordionTrigger className="text-xl font-headline text-primary hover:no-underline px-6 py-4">
              IF— by Rudyard Kipling
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <pre className="whitespace-pre-wrap font-serif text-lg leading-relaxed text-foreground/90">
                {kiplingPoem}
              </pre>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border rounded-lg shadow-lg bg-card overflow-hidden">
            <AccordionTrigger className="text-xl font-headline text-primary hover:no-underline px-6 py-4">
              No Leaders Please — by Charles Bukowski
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <pre className="whitespace-pre-wrap font-serif text-lg leading-relaxed text-foreground/90">
                {bukowskiPoem}
              </pre>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4" className="border rounded-lg shadow-lg bg-card overflow-hidden">
            <AccordionTrigger className="text-xl font-headline text-primary hover:no-underline px-6 py-4">
              Insatiables
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <blockquote className="border-l-4 border-primary pl-4 italic my-4 py-2">
                <p className="text-xl font-serif leading-relaxed text-foreground/90">
                  “I know of no better life purpose than to perish in attempting the great and the impossible.”
                </p>
                <footer className="text-right mt-4 text-md font-serif text-muted-foreground">
                  — Friedrich Wilhelm Nietzsche
                </footer>
              </blockquote>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>
    </div>
  );
};

export default IfItHelpsPage;

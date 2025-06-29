
"use client";
import Timeline from '@/components/about/Timeline';
import { educationTimelineData, achievementTimelineData } from '@/lib/data';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AboutJourney = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-headline text-center mb-12">My Journey</h2>
      <Accordion type="multiple" className="w-full space-y-4" defaultValue={['education', 'achievements']}>
        <AccordionItem value="education" className="border-b-0 rounded-lg shadow-sm bg-card overflow-hidden">
          <AccordionTrigger className="text-3xl font-headline text-primary hover:no-underline justify-center py-4 px-6">
            Education
          </AccordionTrigger>
          <AccordionContent className="px-6">
            <Timeline items={educationTimelineData} title="" />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="achievements" className="border-b-0 rounded-lg shadow-sm bg-card overflow-hidden">
          <AccordionTrigger className="text-3xl font-headline text-primary hover:no-underline justify-center py-4 px-6">
            Achievements
          </AccordionTrigger>
          <AccordionContent className="px-6">
            <Timeline items={achievementTimelineData} title="" />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
export default AboutJourney;

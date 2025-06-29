
"use client";
import Timeline from '@/components/about/Timeline';
import { achievementTimelineData } from '@/lib/data';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AboutAchievements = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-b-0">
            <AccordionTrigger className="text-3xl font-headline text-primary hover:no-underline justify-center py-4">
              Achievements
            </AccordionTrigger>
            <AccordionContent>
              {/* The Timeline component now handles not rendering the title if it's an empty string */}
              <Timeline items={achievementTimelineData} title="" />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
    </div>
  );
};
export default AboutAchievements;

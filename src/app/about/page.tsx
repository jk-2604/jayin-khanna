import Timeline from '@/components/about/Timeline';
import { educationTimelineData, achievementTimelineData } from '@/lib/data';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Zap, BookOpen } from 'lucide-react';

export const metadata = {
  title: 'About Me | Jayin Khanna',
  description: 'Learn more about Jayin Khanna, his background, education, and interests.',
};

const AboutPage = () => {
  const institutionLogos = [
    { name: "DRDO", src: "https://placehold.co/100x50.png?text=DRDO", alt: "DRDO Logo", dataAiHint: "organization logo" },
    { name: "UCSC", src: "https://placehold.co/100x50.png?text=UCSC", alt: "UCSC Logo", dataAiHint: "university logo" },
  ];

  const hobbies = [
    { name: "Football", icon: <Zap size={24} />, description: "Passionate about the beautiful game, both playing and watching." },
    { name: "Teaching", icon: <GraduationCap size={24} />, description: "Enjoy sharing knowledge and mentoring aspiring minds." },
    { name: "Content Writing", icon: <BookOpen size={24} />, description: "Crafting articles on tech, philosophy, and learning." },
  ];


  return (
    <div className="container py-12 md:py-20">
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-headline mb-4">About Me</h1>
        <p className="text-xl text-muted-foreground">A Glimpse into My Journey</p>
      </header>

      <section className="mb-16">
        <Card className="overflow-hidden shadow-xl">
          <div className="md:flex">
            <div className="md:w-1/3 relative min-h-[300px] md:min-h-0">
              <Image
                src="https://placehold.co/400x500.png"
                alt="Jayin Khanna"
                layout="fill"
                objectFit="cover"
                className="filter grayscale hover:grayscale-0 transition-all duration-500"
                data-ai-hint="professional portrait"
              />
            </div>
            <div className="md:w-2/3 p-8 md:p-12">
              <h2 className="text-3xl font-headline mb-6 text-primary">Jayin Khanna</h2>
              <p className="text-lg mb-4 text-foreground/90">
                Driven by an insatiable curiosity, I navigate the fascinating intersections of Artificial Intelligence, Mathematics, and the intricate workings of the Mind. My academic and research pursuits are dedicated to unraveling the complexities of learning, cognition, and systemic behaviors.
              </p>
              <p className="text-lg mb-4 text-foreground/90">
                With a strong foundation in deep learning and a philosophical lens, I am passionate about developing AI solutions that are not only technologically advanced but also ethically grounded and beneficial to society. My work spans across financial AI, neuroscience-inspired models, and fundamental AI research.
              </p>
              <p className="text-lg text-foreground/90">
                Beyond research, I am an avid learner, a keen observer of markets, and someone who believes in the power of interdisciplinary dialogue to spark innovation.
              </p>
            </div>
          </div>
        </Card>
      </section>
      
      {/* Placeholder for Animated Counters */}
      <section className="mb-16 py-12 bg-card/30 rounded-lg">
        <h2 className="text-3xl font-headline text-center mb-10 text-primary">By The Numbers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center container">
          <div>
            <p className="text-5xl font-bold text-secondary">3.9</p>
            <p className="text-muted-foreground">GPA (Illustrative)</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-secondary">10+</p>
            <p className="text-muted-foreground">Research Projects</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-secondary">3</p>
            <p className="text-muted-foreground">Institutes Collaborated With</p>
          </div>
        </div>
      </section>

      <Timeline items={educationTimelineData} title="Education" />
      <Timeline items={achievementTimelineData} title="Achievements" />

      <section className="py-12 mb-16">
        <h2 className="text-3xl font-headline text-center mb-10 text-primary">Hobbies & Interests</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container">
          {hobbies.map(hobby => (
            <Card key={hobby.name} className="text-center p-6 shadow-lg border-border hover:border-primary transition-colors duration-300">
              <div className="text-accent mx-auto mb-4 w-fit p-3 bg-primary/10 rounded-full">{hobby.icon}</div>
              <CardTitle className="text-xl mb-2">{hobby.name}</CardTitle>
              <CardContent>
                <p className="text-muted-foreground">{hobby.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-headline text-center mb-10 text-primary">Collaborations & Affiliations</h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 container">
          {institutionLogos.map(logo => (
            <div key={logo.name} className="grayscale hover:grayscale-0 transition-all duration-300">
              <Image src={logo.src} alt={logo.alt} width={120} height={60} objectFit="contain" data-ai-hint={logo.dataAiHint} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

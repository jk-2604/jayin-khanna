
import SkillBar from '@/components/skills/SkillBar';
import { skillsData } from '@/lib/data';
import type { Skill } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, Cpu, Sigma, Wrench } from 'lucide-react'; // Example icons

export const metadata = {
  title: 'Skills | Jayin Khanna',
  description: 'Explore Jayin Khanna\'s technical skills, tools, and areas of expertise.',
};

const SkillsPage = () => {
  const groupedSkills: Record<string, Skill[]> = skillsData.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const categoryIcons: Record<string, React.ReactNode> = {
    'Programming Languages': <Cpu className="h-6 w-6 text-accent" />,
    'Tools & Libraries': <Wrench className="h-6 w-6 text-accent" />,
    // Removed 'Mathematical Domains' and 'Research Areas' as they are not in the new skillsData
    // 'Mathematical Domains': <Sigma className="h-6 w-6 text-accent" />,
    // 'Research Areas': <BarChart3 className="h-6 w-6 text-accent" />,
  };

  return (
    <div className="container py-12 md:py-20">
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-headline mb-4">My Skills</h1>
        <p className="text-xl text-muted-foreground">A Showcase of My Technical Prowess</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {Object.entries(groupedSkills).map(([category, skillsInCategory], groupIndex) => (
          <Card key={category} className="shadow-xl border-border hover:border-primary transition-colors duration-300">
            <CardHeader>
              <div className="flex items-center space-x-3">
                {categoryIcons[category] || <BarChart3 className="h-6 w-6 text-accent" /> /* Fallback icon */}
                <CardTitle className="text-2xl text-primary">{category}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-2">
              {skillsInCategory.map((skill, skillIndex) => (
                <SkillBar key={skill.id} skill={skill} index={skillIndex} />
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Placeholder for Radar Chart */}
      <section className="mt-16 py-12 text-center">
        <h2 className="text-3xl font-headline mb-6 text-primary">Skills Overview</h2>
        <Card className="p-6 max-w-2xl mx-auto shadow-lg border-border">
          <CardContent>
            <p className="text-muted-foreground">
              A radar chart visualization of skills will be displayed here, offering a holistic view of proficiency across different domains.
              (Radar chart component to be implemented)
            </p>
            <div className="mt-4 h-64 bg-muted rounded-md flex items-center justify-center">
              <p className="text-foreground/50">Radar Chart Placeholder</p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default SkillsPage;

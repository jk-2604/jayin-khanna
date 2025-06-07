export const metadata = {
  title: 'Experience | Jayin Khanna',
  description: 'Details of Jayin Khanna\'s internships and research experience.',
};

// Placeholder data for experience items
const experienceData = [
  {
    id: 'exp1',
    role: 'AI Research Intern',
    institution: 'FutureTech Labs',
    supervisor: 'Dr. Evelyn Reed',
    period: 'Summer 2023',
    description: [
      'Developed novel algorithms for anomaly detection in financial markets.',
      'Contributed to a paper on reinforcement learning applications.',
      'Utilized Python, PyTorch, and Kafka for model development and deployment.'
    ],
    links: [{ label: 'Project Report', url: '#' }],
    badges: ['Deep Learning', 'Finance']
  },
  {
    id: 'exp2',
    role: 'Neuroscience Research Assistant',
    institution: 'Cognitive Science Institute',
    supervisor: 'Prof. Alan Grant',
    period: '2022 - 2023',
    description: [
      'Assisted in fMRI data analysis for studies on memory formation.',
      'Implemented data preprocessing pipelines using MATLAB and Python.',
      'Co-authored a poster presentation for an international conference.'
    ],
    links: [{ label: 'Certificate', url: '#' }],
    badges: ['Neuroscience', 'Data Analysis']
  }
];

const ExperiencePage = () => {
  return (
    <div className="container py-12 md:py-20">
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-headline mb-4">My Experience</h1>
        <p className="text-xl text-muted-foreground">A Journey Through Research and Internships</p>
      </header>
      <div className="text-center text-muted-foreground">
        <p className="text-lg">
          The experience page will feature a vertical animated timeline.
          Each item will expand on click to show details like role, institution, description, and links.
        </p>
        <p className="mt-4">This section is currently under development. Please check back soon!</p>
      </div>
      {/* 
        Implementation detail:
        - A VerticalTimeline component will be created.
        - Each item will be an expandable card.
        - Icons/badges for domains (Deep Learning, Finance, Neuroscience) will be included.
      */}
      <div className="mt-12 space-y-12 max-w-3xl mx-auto">
        {experienceData.map(exp => (
          <div key={exp.id} className="p-6 rounded-lg border border-border bg-card shadow-lg">
            <h2 className="text-2xl font-headline text-primary mb-1">{exp.role}</h2>
            <p className="text-lg text-foreground/80 mb-1">{exp.institution}</p>
            <p className="text-sm text-muted-foreground mb-1">Supervisor: {exp.supervisor} | {exp.period}</p>
            <ul className="list-disc list-inside space-y-1 my-3 text-foreground/90">
              {exp.description.map((point, i) => <li key={i}>{point}</li>)}
            </ul>
            <div className="flex space-x-2 mt-3">
              {exp.badges.map(badge => (
                <span key={badge} className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-full">{badge}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperiencePage;

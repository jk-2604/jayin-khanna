
export interface Quote {
  id: string;
  text: string;
  author?: string;
}

export interface TimelineItem {
  id: string;
  date: string;
  title: string;
  subtitle?: string;
  description: string;
  iconIdentifier?: string; // Changed from icon: React.ReactNode
}

export interface Skill {
  id: string;
  name: string;
  level: number; // Percentage 0-100
  category: string;
}

export interface Project {
  slug: string;
  title: string;
  year: string; // Changed from number to string to accommodate ranges like "2024-2025"
  tags: string[];
  shortAbstract: string;
  // Add more fields for full project details
  // fullWriteUp: string;
  // diagrams: string[]; // URLs or paths
  // paperLink?: string;
  // githubLink?: string;
  // datasetLink?: string;
}

export interface Article {
  slug: string;
  title: string;
  category: string;
  readingTime: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  // Add more fields for article content
  // content: string; // MDX content
  // tableOfContents: any[];
}

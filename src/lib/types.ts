
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
  category: string;
  description: string; // To describe experience with the skill
  iconName: string; // To specify a Lucide icon name
}

export interface Project {
  slug: string;
  title: string;
  year: string; 
  tags: string[];
  shortAbstract: string;
}

export interface Article {
  slug: string;
  title: string;
  category: string;
  readingTime: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

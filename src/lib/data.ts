import type { TimelineItem, Skill } from './types';
import { Briefcase, GraduationCap, Lightbulb } from 'lucide-react';

export const educationTimelineData: TimelineItem[] = [
  {
    id: 'edu1',
    date: '2018 - 2022',
    title: 'B.Tech in Computer Science',
    subtitle: 'XYZ University',
    description: 'Focused on AI and Machine Learning. Graduated with honors.',
    icon: <GraduationCap size={20} />,
  },
  {
    id: 'edu2',
    date: '2022 - Present',
    title: 'M.S. in Artificial Intelligence',
    subtitle: 'ABC Institute',
    description: 'Researching advanced topics in deep learning and cognitive science.',
    icon: <GraduationCap size={20} />,
  },
];

export const achievementTimelineData: TimelineItem[] = [
  {
    id: 'ach1',
    date: '2021',
    title: 'Best Paper Award',
    subtitle: 'National AI Conference',
    description: 'Awarded for research on novel GNN architectures.',
    icon: <Lightbulb size={20} />,
  },
  {
    id: 'ach2',
    date: '2023',
    title: 'Published in Top Journal',
    subtitle: 'Journal of Advanced AI',
    description: 'Co-authored a paper on domain adaptation in NLP.',
    icon: <Briefcase size={20} />,
  },
];


export const skillsData: Skill[] = [
  { id: 's1', name: 'Python', level: 95, category: 'Programming Languages' },
  { id: 's2', name: 'TypeScript', level: 85, category: 'Programming Languages' },
  { id: 's3', name: 'PyTorch', level: 90, category: 'Tools & Libraries' },
  { id: 's4', name: 'TensorFlow', level: 80, category: 'Tools & Libraries' },
  { id: 's5', name: 'Scikit-learn', level: 88, category: 'Tools & Libraries' },
  { id: 's6', name: 'Linear Algebra', level: 92, category: 'Mathematical Domains' },
  { id: 's7', name: 'Calculus', level: 90, category: 'Mathematical Domains' },
  { id: 's8', name: 'Probability & Statistics', level: 85, category: 'Mathematical Domains' },
  { id: 's9', name: 'Graph Neural Networks', level: 90, category: 'Research Areas' },
  { id: 's10', name: 'Domain Adaptation', level: 85, category: 'Research Areas' },
];


import type { TimelineItem, Skill } from './types';

export const educationTimelineData: TimelineItem[] = [
  {
    id: 'edu_snu',
    date: '2022 - 2026 (Expected)',
    title: 'B.Sc. (Research) in Mathematics & Computing',
    subtitle: 'Shiv Nadar University, Delhi-NCR',
    description: 'Minor in Computer Science and Engineering. Specializations in AI & ML, and Mathematical Finance. Dean\'s List. (Rank 1 - Certificate Link to be added)',
    iconIdentifier: 'GraduationCap',
  },
  {
    id: 'edu_iitm',
    date: '2023 - 2027 (Expected)',
    title: 'B.S. in Data Science and Applications',
    subtitle: 'IIT-Madras (Online Degree Program)',
    description: 'Currently pursuing. CGPA: 9.13. (Foundation Level Certificate to be added)',
    iconIdentifier: 'GraduationCap',
  },
  {
    id: 'edu_suncity_xii',
    date: 'Completed 2022', // Assuming completion based on university start
    title: 'Senior Secondary (Class XII - CBSE)',
    subtitle: 'Suncity School, Gurugram',
    description: 'Subjects: Physics, Mathematics, Chemistry, Economics, and English. Overall percentage: 94.3%. Received Certificate of Merit for scoring 100% in Mathematics.',
    iconIdentifier: 'GraduationCap',
  },
  {
    id: 'edu_suncity_x',
    date: 'Completed 2020', // Assuming 2 years before Class XII
    title: 'Secondary (Class X - CBSE)',
    subtitle: 'Suncity School, Gurugram',
    description: 'Overall percentage: 96.4%.',
    iconIdentifier: 'GraduationCap',
  },
];

export const achievementTimelineData: TimelineItem[] = [
  {
    id: 'ach1',
    date: '2021',
    title: 'Best Paper Award',
    subtitle: 'National AI Conference',
    description: 'Awarded for research on novel GNN architectures.',
    iconIdentifier: 'Lightbulb',
  },
  {
    id: 'ach2',
    date: '2023',
    title: 'Published in Top Journal',
    subtitle: 'Journal of Advanced AI',
    description: 'Co-authored a paper on domain adaptation in NLP.',
    iconIdentifier: 'Briefcase',
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

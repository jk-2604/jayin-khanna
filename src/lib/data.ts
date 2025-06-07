
import type { TimelineItem, Skill } from './types';

export const educationTimelineData: TimelineItem[] = [
  {
    id: 'edu_snu',
    date: '2022 - 2026 (Expected)',
    title: 'B.Sc. (Research) in Mathematics & Computing',
    subtitle: 'Shiv Nadar University, Delhi-NCR',
    description: 'Pursuing Bachelor of Science in Mathematics. Minor in Computer Science and Engineering. Specialisation in AI & ML, and Mathematical Finance. (Rank 1 Certificate Link to be added)',
    iconIdentifier: 'GraduationCap',
  },
  {
    id: 'edu_iitm',
    date: '2023 - 2027 (Expected)',
    title: 'B.S. in Data Science and Applications',
    subtitle: 'IIT-Madras (Online Degree Program)',
    description: 'Pursuing BS in Data Science and Applications. CGPA: 9.13. (Foundation Level Certificate to be added)',
    iconIdentifier: 'GraduationCap',
  },
  {
    id: 'edu_suncity_xii',
    date: 'Completed 2022',
    title: 'Senior Secondary (Class XII - CBSE)',
    subtitle: 'Suncity School, Gurugram',
    description: 'Subjects: Physics, Mathematics, Chemistry, Economics, and English. Overall percentage: 94.3%. Received Certificate of Merit for scoring 100% in Mathematics CBSE Class XII Board exams.',
    iconIdentifier: 'GraduationCap',
  },
  {
    id: 'edu_suncity_x',
    date: 'Completed 2020',
    title: 'Secondary (Class X - CBSE)',
    subtitle: 'Suncity School, Gurugram',
    description: 'Overall percentage: 96.4%.',
    iconIdentifier: 'GraduationCap',
  },
];

export const achievementTimelineData: TimelineItem[] = [
  {
    id: 'ach_rank_1',
    date: '2022 - 2026',
    title: 'Rank 1 - BSc (Research) in Mathematics',
    subtitle: 'Shiv Nadar University',
    description: 'Rank 1 out of all 19 students pursuing BSc (Research) in Mathematics (Expected 2026). (Certificate Link to be added)',
    iconIdentifier: 'Lightbulb',
  },
  {
    id: 'ach_summit_2_0',
    date: '2024', // Assuming a recent year for the conference
    title: 'Research Presentation at SUMMIT 2.0',
    subtitle: 'Shiv Nadar University',
    description: 'Research work on Preprocessing Pipeline and Application of CNNs for Surface Electromyography (sEMG) Signal Classification selected for a presentation. (Certificate: Link to be added)',
    iconIdentifier: 'Lightbulb',
  },
  {
    id: 'ach_cuet_math',
    date: '2022',
    title: 'Top 0.5% in CUET Mathematics Exam',
    subtitle: 'CUET 2022',
    description: 'Attained the 99.59 Percentile in CUET Mathematics Exam 2022 among 2.29 lakh students.',
    iconIdentifier: 'Lightbulb',
  },
  {
    id: 'ach_cbse_merit',
    date: '2022',
    title: 'CBSE Certificate of Merit - Mathematics',
    subtitle: 'Class XII Board Exams',
    description: 'Received for scoring 100% in the CBSE Class XII Mathematics Board exams. (Awarded to top 0.1% students)',
    iconIdentifier: 'Lightbulb',
  },
  {
    id: 'ach_snu_ideathon',
    date: '2023', // Assuming a year during university
    title: '11th Position in SNU Ideathon',
    subtitle: 'Startup Idea Competition, Shiv Nadar University',
    description: 'Secured 11th Position for Startup Idea among 350+ teams in SNU’s Ideathon competition.',
    iconIdentifier: 'Lightbulb',
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


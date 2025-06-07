
import type { TimelineItem, Skill } from './types';

export const educationTimelineData: TimelineItem[] = [
  {
    id: 'edu_snu',
    date: '2022 - 2026 (Expected)',
    title: 'B.Sc. (Research) in Mathematics & Computing',
    subtitle: 'Shiv Nadar University, Delhi-NCR',
    description: 'Pursuing Bachelor of Science in Mathematics. Minor in Computer Science and Engineering. Specialisation in AI & ML, and Mathematical Finance. (Rank 1 Certificate: Link to be added)',
    iconIdentifier: 'GraduationCap',
  },
  {
    id: 'edu_iitm',
    date: '2023 - 2027 (Expected)',
    title: 'B.S. in Data Science and Applications',
    subtitle: 'IIT-Madras (Online Degree Program)',
    description: 'Pursuing BS in Data Science and Applications. CGPA: 9.13. (Foundation Level Certificate: Link to be added)',
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
    date: '2026 (Expected)',
    title: 'Rank 1 - BSc (Research) in Mathematics',
    subtitle: 'Shiv Nadar University',
    description: 'Rank 1 out of all 19 students pursuing BSc (Research) in Mathematics.',
    iconIdentifier: 'Lightbulb',
  },
  {
    id: 'ach_summit_2_0',
    date: '2024',
    title: 'Research Presentation at SUMMIT 2.0',
    subtitle: 'Shiv Nadar University',
    description: 'Research work on Preprocessing Pipeline and Application of CNNs for Surface Electromyography (sEMG) Signal Classification selected for a presentation. (Certificate: Link to be provided)',
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
    date: '2023',
    title: '11th Position in SNU Ideathon',
    subtitle: 'Startup Idea Competition, Shiv Nadar University',
    description: 'Secured 11th Position for Startup Idea among 350+ teams in SNU’s Ideathon competition.',
    iconIdentifier: 'Lightbulb',
  },
];


export const skillsData: Skill[] = [
  // Programming Languages
  { id: 's_python', name: 'Python', category: 'Programming Languages', description: 'My experience with Python includes developing complex algorithms, data processing pipelines, and building machine learning models.', iconName: 'Code' },
  { id: 's_c', name: 'C', category: 'Programming Languages', description: 'Utilized C for performance-critical applications and understanding fundamental programming concepts.', iconName: 'Terminal' },
  { id: 's_r', name: 'R', category: 'Programming Languages', description: 'Applied R for statistical analysis, data visualization, and specific research projects requiring advanced statistical modeling.', iconName: 'BarChartBig' },

  // Tools & Libraries
  { id: 's_pytorch', name: 'PyTorch', category: 'Tools & Libraries', description: 'Extensive use of PyTorch for building and training deep neural networks, including CNNs, RNNs, and GNNs.', iconName: 'BrainCircuit' },
  { id: 's_tensorflow', name: 'TensorFlow', category: 'Tools & Libraries', description: 'Experience with TensorFlow and Keras API for developing and deploying machine learning models across various platforms.', iconName: 'Layers' },
  { id: 's_keras', name: 'Keras', category: 'Tools & Libraries', description: 'Leveraged Keras for rapid prototyping and building user-friendly deep learning models.', iconName: 'Layers' },
  { id: 's_opencv', name: 'OpenCV', category: 'Tools & Libraries', description: 'Applied OpenCV for computer vision tasks such as image processing, object detection, and video analysis.', iconName: 'Camera' },
  { id: 's_sklearn', name: 'scikit-learn', category: 'Tools & Libraries', description: 'Proficient with scikit-learn for classical machine learning algorithms, model evaluation, and data preprocessing.', iconName: 'Shapes' }, // Shapes is a generic icon
  { id: 's_numpy', name: 'NumPy', category: 'Tools & Libraries', description: 'Fundamental tool for numerical computations, array manipulations, and mathematical operations in Python projects.', iconName: 'Sigma' },
  { id: 's_pandas', name: 'Pandas', category: 'Tools & Libraries', description: 'Used Pandas extensively for data manipulation, cleaning, analysis, and working with structured datasets.', iconName: 'Table' },
  { id: 's_matplotlib', name: 'Matplotlib', category: 'Tools & Libraries', description: 'Created a wide range of static, animated, and interactive visualizations in Python using Matplotlib.', iconName: 'LineChart' },
  { id: 's_seaborn', name: 'Seaborn', category: 'Tools & Libraries', description: 'Utilized Seaborn for creating informative and attractive statistical graphics and visualizations.', iconName: 'BarChartHorizontalBig' },
  { id: 's_scipy', name: 'SciPy', category: 'Tools & Libraries', description: 'Leveraged SciPy for scientific and technical computing, including optimization, signal processing, and statistics.', iconName: 'FunctionSquare' },
  { id: 's_eviews', name: 'EViews', category: 'Tools & Libraries', description: 'Experience with EViews for econometric analysis, time series modeling, and forecasting.', iconName: 'TrendingUp' },
];

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: 'mobile' | 'web' | 'ai' | 'opensource';
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  // Mobile Apps
  {
    id: '1',
    title: 'TaskFlow Mobile',
    description: 'A comprehensive task management app built with Flutter',
    longDescription: 'TaskFlow is a feature-rich task management application that helps users organize their daily tasks, set priorities, and track progress. Built with Flutter for cross-platform compatibility.',
    category: 'mobile',
    technologies: ['Flutter', 'Dart', 'Firebase', 'SQLite'],
    image: '/projects/taskflow.jpg',
    githubUrl: 'https://github.com/username/taskflow',
    liveUrl: 'https://apps.apple.com/app/taskflow',
    featured: true,
  },
  {
    id: '2',
    title: 'FitTracker iOS',
    description: 'Native iOS fitness tracking app with HealthKit integration',
    longDescription: 'A native iOS application that leverages HealthKit to provide comprehensive fitness tracking, workout planning, and health insights.',
    category: 'mobile',
    technologies: ['Swift', 'SwiftUI', 'HealthKit', 'Core Data'],
    image: '/projects/fittracker.jpg',
    githubUrl: 'https://github.com/username/fittracker',
    liveUrl: 'https://apps.apple.com/app/fittracker',
    featured: true,
  },
  
  // Web Apps
  {
    id: '3',
    title: 'Portfolio Dashboard',
    description: 'Modern portfolio website with dark theme and animations',
    longDescription: 'A responsive portfolio website built with Next.js featuring a dark theme, smooth animations, and optimized performance.',
    category: 'web',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    image: '/projects/portfolio.jpg',
    githubUrl: 'https://github.com/username/portfolio',
    liveUrl: 'https://yourportfolio.com',
    featured: true,
  },
  {
    id: '4',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration',
    longDescription: 'A complete e-commerce platform with user authentication, product management, shopping cart, and secure payment processing.',
    category: 'web',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
    image: '/projects/ecommerce.jpg',
    githubUrl: 'https://github.com/username/ecommerce',
    liveUrl: 'https://ecommerce-demo.com',
    featured: false,
  },

  // AI Projects
  {
    id: '5',
    title: 'Smart Image Recognition',
    description: 'AI-powered image classification mobile app',
    longDescription: 'An intelligent mobile application that uses machine learning to classify and analyze images in real-time using on-device ML models.',
    category: 'ai',
    technologies: ['Flutter', 'TensorFlow Lite', 'ML Kit', 'Python'],
    image: '/projects/ai-image.jpg',
    githubUrl: 'https://github.com/username/smart-recognition',
    featured: true,
  },
  {
    id: '6',
    title: 'ChatBot Assistant',
    description: 'Intelligent chatbot with natural language processing',
    longDescription: 'A conversational AI assistant that understands natural language and provides helpful responses using advanced NLP techniques.',
    category: 'ai',
    technologies: ['Python', 'OpenAI API', 'FastAPI', 'React'],
    image: '/projects/chatbot.jpg',
    githubUrl: 'https://github.com/username/chatbot',
    liveUrl: 'https://chatbot-demo.com',
    featured: false,
  },

  // Open Source
  {
    id: '7',
    title: 'Flutter UI Components',
    description: 'Open source Flutter widget library',
    longDescription: 'A comprehensive collection of reusable Flutter UI components and widgets that help developers build beautiful apps faster.',
    category: 'opensource',
    technologies: ['Flutter', 'Dart', 'Documentation'],
    image: '/projects/flutter-components.jpg',
    githubUrl: 'https://github.com/username/flutter-ui-components',
    featured: true,
  },
  {
    id: '8',
    title: 'React Hooks Library',
    description: 'Collection of useful React hooks for common use cases',
    longDescription: 'A library of custom React hooks that solve common problems and enhance development productivity.',
    category: 'opensource',
    technologies: ['React', 'TypeScript', 'Jest', 'Storybook'],
    image: '/projects/react-hooks.jpg',
    githubUrl: 'https://github.com/username/react-hooks-library',
    featured: false,
  },
];

export const categories = [
  { id: 'all', label: 'All Projects', count: projects.length },
  { id: 'mobile', label: 'Mobile Apps', count: projects.filter(p => p.category === 'mobile').length },
  { id: 'web', label: 'Web Apps', count: projects.filter(p => p.category === 'web').length },
  { id: 'ai', label: 'AI Projects', count: projects.filter(p => p.category === 'ai').length },
  { id: 'opensource', label: 'Open Source', count: projects.filter(p => p.category === 'opensource').length },
];
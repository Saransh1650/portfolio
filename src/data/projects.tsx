export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'mobile' | 'web' | 'ai' | 'blockchain' | 'opensource';
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  stars: number;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'NFT MarketPlace',
    description: 'Flutter-based app that empowers users to create, buy, and explore unique Non-Fungible Tokens (NFTs) on the blockchain. Features WalletConnect integration for seamless Web3 interactions.',
    category: 'blockchain',
    technologies: ['Flutter', 'Dart', 'WalletConnect', 'Web3', 'Blockchain'],
    githubUrl: 'https://github.com/Saransh1650/NFT_MarketPlace',
    featured: true,
    stars: 1,
  },
  {
    id: '2',
    title: 'iOS HealthSync',
    description: 'Native iOS app that tracks health metrics using Apple\'s HealthKit framework and retrieves nutritional information using external APIs. Built with SwiftUI and SwiftData.',
    category: 'mobile',
    technologies: ['Swift', 'SwiftUI', 'HealthKit', 'SwiftData', 'REST API'],
    githubUrl: 'https://github.com/Saransh1650/iOS_-HealthSync',
    featured: true,
    stars: 2,
  },
  {
    id: '3',
    title: '3D Drawing App',
    description: 'SwiftUI-based drawing application for iOS featuring 3D drawing capabilities with ARKit integration for immersive AR experiences.',
    category: 'mobile',
    technologies: ['Swift', 'SwiftUI', 'ARKit', 'iOS', '3D Graphics'],
    githubUrl: 'https://github.com/Saransh1650/3D_draw_app_swift',
    featured: true,
    stars: 1,
  },
  {
    id: '4',
    title: 'OpenAI YouTube Meta Generator',
    description: 'Web application using OpenAI\'s GPT model to automatically generate captivating meta descriptions and titles for YouTube videos, helping content creators optimize their content.',
    category: 'ai',
    technologies: ['JavaScript', 'Node.js', 'OpenAI API', 'Express', 'HTML'],
    githubUrl: 'https://github.com/Saransh1650/OpenAi-Project',
    featured: true,
    stars: 6,
  },
  {
    id: '5',
    title: 'Flutter FilmXplorer',
    description: 'Captivating movie database application developed using Flutter, powered by TMDB API. Explore movies and TV shows with beautiful UI and real-time data.',
    category: 'mobile',
    technologies: ['Flutter', 'Dart', 'TMDB API', 'REST API', 'Material Design'],
    githubUrl: 'https://github.com/Saransh1650/Flutter_FilmXplorer_MovieDatabase',
    featured: false,
    stars: 3,
  },
  {
    id: '6',
    title: 'Blockchain Social Media',
    description: 'Web3 social media app built with Flutter and WalletConnect, featuring smart contracts written in Solidity for decentralized social interactions.',
    category: 'blockchain',
    technologies: ['Flutter', 'Solidity', 'WalletConnect', 'Web3', 'Smart Contracts'],
    githubUrl: 'https://github.com/Saransh1650/blockchain_social_media',
    featured: false,
    stars: 0,
  },
  {
    id: '7',
    title: 'Flutter AR Earth',
    description: 'Immersive Augmented Reality experience featuring an AR Earth sphere using Flutter and ARCore. Blends virtual content with the real world.',
    category: 'mobile',
    technologies: ['Flutter', 'ARCore', 'Dart', 'Android', 'Augmented Reality'],
    githubUrl: 'https://github.com/Saransh1650/Flutter_ArCore_Earth',
    featured: false,
    stars: 5,
  },
  {
    id: '8',
    title: 'Node.js Blogging Website',
    description: 'Full-featured blogging platform built with Node.js and MongoDB. Features blog creation, editing, deletion, and responsive design.',
    category: 'web',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JavaScript', 'HTML/CSS'],
    githubUrl: 'https://github.com/Saransh1650/Node.js_Blogging_Website',
    featured: false,
    stars: 1,
  },
  {
    id: '9',
    title: 'Flutter Chat Application',
    description: 'Real-time group chatting application built with Flutter and Firebase. Features authentication, real-time messaging, and message management.',
    category: 'mobile',
    technologies: ['Flutter', 'Firebase', 'Dart', 'Real-time Database', 'Authentication'],
    githubUrl: 'https://github.com/Saransh1650/Flutter_chatting_application',
    featured: false,
    stars: 1,
  },
  {
    id: '10',
    title: 'iOS Task Manager',
    description: 'iOS task management app that helps users stay organized. Built with SwiftUI and Firebase for cloud synchronization.',
    category: 'mobile',
    technologies: ['Swift', 'SwiftUI', 'Firebase', 'Firestore', 'iOS'],
    githubUrl: 'https://github.com/Saransh1650/iOS_Task_Manager_app',
    featured: false,
    stars: 0,
  },
  {
    id: '11',
    title: 'IPFS with Flutter',
    description: 'Learn to integrate IPFS (InterPlanetary File System) with Flutter for decentralized file storage and Web3 applications.',
    category: 'blockchain',
    technologies: ['Flutter', 'IPFS', 'Web3', 'Blockchain', 'Decentralized Storage'],
    githubUrl: 'https://github.com/Saransh1650/IPFS-with-Flutter',
    featured: false,
    stars: 1,
  },
  {
    id: '12',
    title: 'React Todo App',
    description: 'Simple and clean Todo application built with React Native framework, featuring task management and local storage.',
    category: 'mobile',
    technologies: ['React Native', 'JavaScript', 'React Hooks', 'Mobile Development'],
    githubUrl: 'https://github.com/Saransh1650/React-Todo-App',
    featured: false,
    stars: 1,
  },
];

export const categories = [
  { id: 'all', label: 'All Projects', count: projects.length },
  { id: 'mobile', label: 'Mobile Apps', count: projects.filter(p => p.category === 'mobile').length },
  { id: 'web', label: 'Web Apps', count: projects.filter(p => p.category === 'web').length },
  { id: 'ai', label: 'AI Projects', count: projects.filter(p => p.category === 'ai').length },
  { id: 'blockchain', label: 'Blockchain/Web3', count: projects.filter(p => p.category === 'blockchain').length },
];
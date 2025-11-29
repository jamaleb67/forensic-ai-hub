export interface ArticleMetadata {
  slug: string;
  title: string;
  description: string;
  category: 'study-resources' | 'forensic-science' | 'tech-skills' | 'career-pathways' | 'about';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  timeToRead: number; // minutes
  publishedAt: string; // ISO date
  updatedAt?: string; // ISO date
  tags: string[];
  author: string;
  featured: boolean;
  image?: string; // Optional cover image
}

export interface Article extends ArticleMetadata {
  content: string;
}

// Predefined articles for easy reference
export const ARTICLES: Record<string, ArticleMetadata> = {
  welcome: {
    slug: 'welcome',
    title: 'Welcome to Your Forensic Science Journey',
    description: 'Discover how this platform will help you succeed in forensic science, even if math isn\'t your strongest subject.',
    category: 'about',
    difficulty: 'beginner',
    timeToRead: 5,
    publishedAt: '2025-10-30',
    tags: ['introduction', 'getting started', 'platform overview'],
    author: 'Forensic AI Hub',
    featured: true,
  },
  'surviving-calculus-with-ai': {
    slug: 'surviving-calculus-with-ai',
    title: 'The Ultimate Guide to Surviving Calculus with AI',
    description: 'Learn how to use ChatGPT, Claude, and other AI tools to master calculus concepts and ace your exams.',
    category: 'study-resources',
    difficulty: 'intermediate',
    timeToRead: 12,
    publishedAt: '2025-10-30',
    tags: ['calculus', 'AI tools', 'study strategies', 'ChatGPT', 'Claude'],
    author: 'Forensic AI Hub',
    featured: true,
  },
  'math-you-actually-need': {
    slug: 'math-you-actually-need',
    title: 'The Math You Actually Need for a Career in Forensics',
    description: 'A realistic assessment of math requirements in different forensic careers, including tech-adjacent roles.',
    category: 'career-pathways',
    difficulty: 'beginner',
    timeToRead: 10,
    publishedAt: '2025-10-30',
    tags: ['careers', 'math requirements', 'job roles', 'career planning'],
    author: 'Forensic AI Hub',
    featured: true,
  },
  'dexter-fan-to-forensic-scientist': {
    slug: 'dexter-fan-to-forensic-scientist',
    title: 'From \'Dexter\' Fan to Forensic Scientist: A Realistic Roadmap',
    description: 'Bridge your love for Dexter to a real forensic science career with this comprehensive roadmap.',
    category: 'career-pathways',
    difficulty: 'beginner',
    timeToRead: 8,
    publishedAt: '2025-10-30',
    tags: ['Dexter', 'career roadmap', 'blood spatter', 'forensic science'],
    author: 'Forensic AI Hub',
    featured: true,
  },
  'mindgrasp-ai-review': {
    slug: 'mindgrasp-ai-review',
    title: 'Mindgrasp AI: Your New Best Friend for Forensic Science Studies',
    description: 'An in-depth review and tutorial for using Mindgrasp AI to study more effectively.',
    category: 'study-resources',
    difficulty: 'beginner',
    timeToRead: 8,
    publishedAt: '2025-10-30',
    tags: ['Mindgrasp', 'AI tools', 'study tools', 'productivity'],
    author: 'Forensic AI Hub',
    featured: false,
  },
};

// Helper function to get articles by category
export function getArticlesByCategory(category: ArticleMetadata['category']): ArticleMetadata[] {
  return Object.values(ARTICLES).filter(article => article.category === category);
}

// Helper function to get featured articles
export function getFeaturedArticles(): ArticleMetadata[] {
  return Object.values(ARTICLES).filter(article => article.featured);
}

// Helper function to get article by slug
export function getArticleBySlug(slug: string): ArticleMetadata | undefined {
  return ARTICLES[slug];
}

// Helper function to get all articles
export function getAllArticles(): ArticleMetadata[] {
  return Object.values(ARTICLES);
}

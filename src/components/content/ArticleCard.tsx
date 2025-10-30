import Link from 'next/link';
import { Clock, TrendingUp } from 'lucide-react';
import type { ArticleMetadata } from '@/lib/content/schema';

interface ArticleCardProps {
  article: ArticleMetadata;
}

const difficultyColors = {
  beginner: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
  intermediate: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
  advanced: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
};

const categoryColors = {
  'study-resources': 'text-blue-600 dark:text-blue-400',
  'forensic-science': 'text-blood-600 dark:text-blood-400',
  'tech-skills': 'text-purple-600 dark:text-purple-400',
  'career-pathways': 'text-green-600 dark:text-green-400',
  'about': 'text-gray-600 dark:text-gray-400',
};

export default function ArticleCard({ article }: ArticleCardProps) {
  const href = `/${article.category}/${article.slug}`;

  return (
    <Link href={href} className="group block">
      <article className="h-full rounded-lg border border-border bg-card p-6 transition-all hover:shadow-lg hover:border-blood-500 dark:hover:border-blood-600">
        {/* Category and Difficulty */}
        <div className="flex items-center justify-between mb-3">
          <span className={`text-sm font-semibold uppercase tracking-wide ${categoryColors[article.category]}`}>
            {article.category.replace('-', ' ')}
          </span>
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${difficultyColors[article.difficulty]}`}>
            {article.difficulty}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-blood-600 dark:group-hover:text-blood-500 transition-colors">
          {article.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {article.description}
        </p>

        {/* Metadata */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{article.timeToRead} min read</span>
          </div>
          {article.featured && (
            <div className="flex items-center gap-1 text-blood-600 dark:text-blood-500">
              <TrendingUp className="h-4 w-4" />
              <span className="font-medium">Featured</span>
            </div>
          )}
        </div>

        {/* Tags */}
        {article.tags && article.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {article.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </article>
    </Link>
  );
}

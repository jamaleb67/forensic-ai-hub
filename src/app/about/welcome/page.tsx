import { Clock, Calendar, User } from 'lucide-react';
import { getArticleBySlug } from '@/lib/content/schema';
import WelcomeMDX from '@/content/about/welcome.mdx';

export const metadata = {
  title: 'Welcome to Your Forensic Science Journey | Forensic AI Hub',
  description: 'Discover how this platform will help you succeed in forensic science, even if math isn\'t your strongest subject.',
};

export default function WelcomePage() {
  const article = getArticleBySlug('welcome');

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <article className="mx-auto max-w-4xl px-6 py-24">
      {/* Article Header */}
      <header className="mb-12">
        <div className="mb-4">
          <span className="text-sm font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400">
            {article.category}
          </span>
        </div>
        
        <h1 className="text-5xl font-bold tracking-tight text-foreground mb-6">
          {article.title}
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8">
          {article.description}
        </p>

        {/* Metadata */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-t border-b border-border py-4">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>{article.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <time dateTime={article.publishedAt}>
              {new Date(article.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{article.timeToRead} min read</span>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <WelcomeMDX />
      </div>

      {/* Tags */}
      {article.tags && article.tags.length > 0 && (
        <footer className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm px-3 py-1 rounded-full bg-muted text-muted-foreground"
              >
                #{tag}
              </span>
            ))}
          </div>
        </footer>
      )}
    </article>
  );
}

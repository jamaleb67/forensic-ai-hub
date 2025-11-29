import { notFound } from 'next/navigation';
import { Clock, Calendar, User } from 'lucide-react';
import { getArticleBySlug, getAllArticles } from '@/lib/content/schema';
import ArticleRecommendations from '@/components/content/ArticleRecommendations';

// Import MDX files dynamically
const articles = {
  'surviving-calculus-with-ai': () => import('@/content/study-resources/surviving-calculus-with-ai.mdx'),
  'mindgrasp-ai-review': () => import('@/content/study-resources/mindgrasp-ai-review.mdx'),
};

export async function generateStaticParams() {
  return [
    { slug: 'surviving-calculus-with-ai' },
    { slug: 'mindgrasp-ai-review' },
  ];
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  
  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: `${article.title} | Forensic AI Hub`,
    description: article.description,
    keywords: article.tags,
    authors: [{ name: article.author }],
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      publishedTime: article.publishedAt,
      authors: [article.author],
    },
  };
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  
  if (!article || !(params.slug in articles)) {
    notFound();
  }

  const MDXContent = (await articles[params.slug as keyof typeof articles]()).default;

  return (
    <article className="mx-auto max-w-4xl px-6 py-24">
      {/* Article Header */}
      <header className="mb-12">
        <div className="mb-4">
          <span className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
            {article.category.replace('-', ' ')}
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
        <MDXContent />
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

      {/* Article Recommendations */}
      <ArticleRecommendations
        currentArticleSlug={params.slug}
        allArticles={getAllArticles()}
        maxResults={3}
      />
    </article>
  );
}

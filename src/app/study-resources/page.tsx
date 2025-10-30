import ArticleCard from '@/components/content/ArticleCard';
import { getArticlesByCategory } from '@/lib/content/schema';

export const metadata = {
  title: 'Study Resources | Forensic AI Hub',
  description: 'AI-powered study tools and resources for forensic science students',
};

export default function StudyResourcesPage() {
  const articles = getArticlesByCategory('study-resources');

  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">Study Resources</h1>
        <p className="text-lg text-muted-foreground">
          AI-powered tools and strategies to help you master forensic science coursework
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}

import { ArticleMetadata } from '@/lib/content/schema';
import { getRelatedArticles } from '@/lib/content/recommendations';
import ArticleCard from './ArticleCard';

interface ArticleRecommendationsProps {
  currentArticleSlug: string;
  allArticles: ArticleMetadata[];
  maxResults?: number;
}

export default function ArticleRecommendations({
  currentArticleSlug,
  allArticles,
  maxResults = 3,
}: ArticleRecommendationsProps) {
  const recommendations = getRelatedArticles(
    currentArticleSlug,
    allArticles,
    maxResults
  );

  // Don't render if there are no recommendations
  if (recommendations.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 pt-12 border-t border-crime-700">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-blood-50 mb-2">
          You Might Also Like
        </h2>
        <p className="text-crime-300">
          Related articles based on similar topics and themes
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendations.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </section>
  );
}

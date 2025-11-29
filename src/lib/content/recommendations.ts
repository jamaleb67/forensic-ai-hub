import { ArticleMetadata } from './schema';

/**
 * Get related articles based on tags and category
 * @param currentArticleSlug - The slug of the current article
 * @param allArticles - Array of all articles
 * @param maxResults - Maximum number of recommendations to return (default: 3)
 * @returns Array of recommended articles
 */
export function getRelatedArticles(
  currentArticleSlug: string,
  allArticles: ArticleMetadata[],
  maxResults: number = 3
): ArticleMetadata[] {
  // Find the current article
  const currentArticle = allArticles.find(
    (article) => article.slug === currentArticleSlug
  );

  if (!currentArticle) {
    return [];
  }

  // Score and filter other articles
  const scoredArticles = allArticles
    .filter((article) => article.slug !== currentArticleSlug) // Exclude current article
    .map((article) => {
      let score = 0;

      // +2 points for each matching tag
      if (currentArticle.tags && article.tags) {
        const matchingTags = article.tags.filter((tag) =>
          currentArticle.tags?.includes(tag)
        );
        score += matchingTags.length * 2;
      }

      // +1 point for matching category
      if (currentArticle.category === article.category) {
        score += 1;
      }

      return {
        article,
        score,
      };
    })
    .filter((item) => item.score > 0) // Only include articles with at least some relevance
    .sort((a, b) => b.score - a.score); // Sort by score descending

  // Return top N results
  return scoredArticles.slice(0, maxResults).map((item) => item.article);
}

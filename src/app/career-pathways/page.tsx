import ArticleCard from '@/components/content/ArticleCard';
import { getArticlesByCategory } from '@/lib/content/schema';

export const metadata = {
  title: 'Career Pathways | Forensic AI Hub',
  description: 'Explore forensic science career options and find the path that matches your strengths',
};

export default function CareerPathwaysPage() {
  const articles = getArticlesByCategory('career-pathways');

  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">Career Pathways</h1>
        <p className="text-lg text-muted-foreground">
          Discover forensic careers that match your strengths and interests
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

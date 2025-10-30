import Link from 'next/link';
import { Brain, Microscope, Code, Briefcase, ArrowRight } from 'lucide-react';
import ArticleCard from '@/components/content/ArticleCard';
import { getFeaturedArticles } from '@/lib/content/schema';

export default function HomePage() {
  const featuredArticles = getFeaturedArticles();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-crime-950 to-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl mb-6">
              You Don't Need to Be a{' '}
              <span className="text-blood-500">Math Genius</span> to Master{' '}
              <span className="text-blood-500">Forensic Science</span>
            </h1>
            <p className="text-xl leading-8 text-muted-foreground mb-10">
              AI-powered learning tools and career guidance for forensic science students who
              struggle with math but love the science.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link
                href="/about/welcome"
                className="rounded-md bg-blood-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blood-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blood-600 transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="/study-resources"
                className="rounded-md border border-border bg-background px-6 py-3 text-base font-semibold text-foreground hover:bg-muted transition-colors"
              >
                Explore Resources
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Everything You Need to Succeed
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From AI study tools to career guidance, we've got you covered
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* AI Learning */}
            <div className="rounded-lg border border-border bg-card p-8 hover:shadow-lg transition-shadow">
              <div className="mb-4 inline-flex rounded-lg bg-blue-100 dark:bg-blue-900 p-3">
                <Brain className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">AI-Powered Learning</h3>
              <p className="text-muted-foreground mb-4">
                Master calculus and statistics with ChatGPT, Claude, and other AI tools designed
                for your success.
              </p>
              <Link
                href="/study-resources/surviving-calculus-with-ai"
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline inline-flex items-center gap-1"
              >
                Learn How <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Forensic Science */}
            <div className="rounded-lg border border-border bg-card p-8 hover:shadow-lg transition-shadow">
              <div className="mb-4 inline-flex rounded-lg bg-blood-100 dark:bg-blood-900 p-3">
                <Microscope className="h-6 w-6 text-blood-600 dark:text-blood-400" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Real Forensic Science</h3>
              <p className="text-muted-foreground mb-4">
                From Dexter fan to forensic scientist—learn what it really takes to work in the
                field.
              </p>
              <Link
                href="/career-pathways/dexter-fan-to-forensic-scientist"
                className="text-blood-600 dark:text-blood-400 font-medium hover:underline inline-flex items-center gap-1"
              >
                Explore Path <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Tech Skills */}
            <div className="rounded-lg border border-border bg-card p-8 hover:shadow-lg transition-shadow">
              <div className="mb-4 inline-flex rounded-lg bg-purple-100 dark:bg-purple-900 p-3">
                <Code className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Technology Skills</h3>
              <p className="text-muted-foreground mb-4">
                Build valuable tech skills for forensic careers that don't require advanced
                mathematics.
              </p>
              <Link
                href="/career-pathways"
                className="text-purple-600 dark:text-purple-400 font-medium hover:underline inline-flex items-center gap-1"
              >
                View Careers <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Career Pathways */}
            <div className="rounded-lg border border-border bg-card p-8 hover:shadow-lg transition-shadow">
              <div className="mb-4 inline-flex rounded-lg bg-green-100 dark:bg-green-900 p-3">
                <Briefcase className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Career Guidance</h3>
              <p className="text-muted-foreground mb-4">
                Discover the math you actually need for different forensic science careers.
              </p>
              <Link
                href="/career-pathways/math-you-actually-need"
                className="text-green-600 dark:text-green-400 font-medium hover:underline inline-flex items-center gap-1"
              >
                Read Guide <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-24 sm:py-32 bg-muted/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Featured Articles
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Start with these essential guides to transform your forensic science journey
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredArticles.slice(0, 3).map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/study-resources"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-6 py-3 text-base font-semibold text-foreground hover:bg-muted transition-colors"
            >
              View All Resources <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
              Built for Shayla, and Students Like Her
            </h2>
            <p className="text-lg leading-8 text-muted-foreground mb-10">
              This platform was created for forensic science majors at George Mason University and
              beyond who are passionate about the science but struggle with mathematics. If that's
              you, you're in the right place.
            </p>
            <Link
              href="/about/welcome"
              className="rounded-md bg-blood-600 px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-blood-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blood-600 transition-colors inline-block"
            >
              Start Your Journey
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

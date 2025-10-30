import Link from 'next/link';
import { ArrowRight, Brain, Microscope, Code, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl">
              You Don't Need to Be a{' '}
              <span className="text-blood-600 dark:text-blood-500">Math Genius</span>
              {' '}to Master Forensic Science
            </h1>
            <p className="mt-8 text-lg leading-8 text-muted-foreground sm:text-xl">
              Empower your forensic science education with AI-powered tools and resources. 
              Built for students who are passionate about forensic science but struggle with math.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/study-resources"
                className="rounded-md bg-blood-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blood-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blood-600 transition-colors"
              >
                Explore AI Tools
                <ArrowRight className="inline-block ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/about"
                className="text-base font-semibold leading-7 text-foreground hover:text-blood-600 dark:hover:text-blood-500 transition-colors"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Value Propositions */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blood-600 dark:text-blood-500">
            Everything You Need
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            AI-Powered Learning for Forensic Science
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Whether you're struggling with calculus, curious about blood spatter analysis, 
            or exploring tech careers in forensics, we've got you covered.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                <Brain className="h-5 w-5 flex-none text-blood-600 dark:text-blood-500" aria-hidden="true" />
                AI-Assisted Learning
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                <p className="flex-auto">
                  Learn how to use ChatGPT, Claude, and other AI tools to understand complex math concepts and ace your courses.
                </p>
                <p className="mt-6">
                  <Link href="/study-resources" className="text-sm font-semibold leading-6 text-blood-600 dark:text-blood-500 hover:text-blood-500">
                    Explore tools <span aria-hidden="true">→</span>
                  </Link>
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                <Microscope className="h-5 w-5 flex-none text-blood-600 dark:text-blood-500" aria-hidden="true" />
                Real Forensic Science
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                <p className="flex-auto">
                  Explore blood spatter analysis, crime scene investigation, and the science behind "Dexter" with interactive tools.
                </p>
                <p className="mt-6">
                  <Link href="/forensic-science" className="text-sm font-semibold leading-6 text-blood-600 dark:text-blood-500 hover:text-blood-500">
                    Dive in <span aria-hidden="true">→</span>
                  </Link>
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                <Code className="h-5 w-5 flex-none text-blood-600 dark:text-blood-500" aria-hidden="true" />
                Tech Skills
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                <p className="flex-auto">
                  Build technology skills that don't require advanced math. Learn no-code tools, data visualization, and more.
                </p>
                <p className="mt-6">
                  <Link href="/tech-skills" className="text-sm font-semibold leading-6 text-blood-600 dark:text-blood-500 hover:text-blood-500">
                    Start learning <span aria-hidden="true">→</span>
                  </Link>
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-foreground">
                <Users className="h-5 w-5 flex-none text-blood-600 dark:text-blood-500" aria-hidden="true" />
                Career Pathways
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                <p className="flex-auto">
                  Discover tech-enabled forensic careers that leverage your passion without requiring you to be a math expert.
                </p>
                <p className="mt-6">
                  <Link href="/career-pathways" className="text-sm font-semibold leading-6 text-blood-600 dark:text-blood-500 hover:text-blood-500">
                    Explore careers <span aria-hidden="true">→</span>
                  </Link>
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blood-600 dark:bg-blood-700">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Built for Shayla and students like her
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blood-100">
              This platform was created to help forensic science students at George Mason University 
              and beyond succeed with AI-powered learning tools and practical resources.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/about"
                className="rounded-md bg-white px-6 py-3 text-base font-semibold text-blood-600 shadow-sm hover:bg-blood-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
              >
                Read our story
              </Link>
              <Link
                href="/community"
                className="text-base font-semibold leading-7 text-white hover:text-blood-100 transition-colors"
              >
                Join the community <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

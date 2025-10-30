import Link from 'next/link';

const footerNavigation = {
  resources: [
    { name: 'AI Study Tools', href: '/study-resources/ai-tools' },
    { name: 'Subject Guides', href: '/study-resources/guides' },
    { name: 'Study Strategies', href: '/study-resources/strategies' },
  ],
  forensics: [
    { name: 'Blood Spatter Analysis', href: '/forensic-science/blood-spatter' },
    { name: 'Dexter vs. Reality', href: '/forensic-science/dexter' },
    { name: 'Interactive Learning', href: '/forensic-science/interactive' },
  ],
  careers: [
    { name: 'Traditional Roles', href: '/career-pathways/traditional' },
    { name: 'Tech-Adjacent Roles', href: '/career-pathways/tech' },
    { name: 'Success Stories', href: '/career-pathways/stories' },
  ],
  about: [
    { name: 'About This Site', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <span className="text-2xl font-bold text-blood-600 dark:text-blood-500">
              Forensic AI Hub
            </span>
            <p className="text-sm leading-6 text-muted-foreground">
              Empowering forensic science students to succeed with AI-powered learning tools and resources.
            </p>
            <p className="text-xs text-muted-foreground">
              Built with ❤️ for Shayla and students like her.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">Study Resources</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.resources.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-muted-foreground hover:text-foreground">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-foreground">Forensic Science</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.forensics.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-muted-foreground hover:text-foreground">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-foreground">Career Pathways</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.careers.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-muted-foreground hover:text-foreground">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-foreground">About</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.about.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-muted-foreground hover:text-foreground">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-border pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-muted-foreground">
            &copy; {new Date().getFullYear()} Forensic AI Hub. Built with Next.js, Firebase, and AI.
          </p>
        </div>
      </div>
    </footer>
  );
}

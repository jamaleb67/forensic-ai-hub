# BATCH 2: Core Content Creation & Landing Page

## Context

The project foundation is now established with Next.js, Firebase configuration, and Vercel deployment capability. The basic layout and navigation are functional. The site is running locally at http://localhost:3000 and can be accessed at the public URL.

**Batch 1 Completion Status**: ✅ All validation criteria met

## Objective

Create the landing page enhancements and publish the first 5 core content pieces using MDX, establishing the content creation pipeline and demonstrating the platform's value proposition.

## Prerequisites Met

- ✅ Next.js 15 project initialized and running
- ✅ Firebase configuration created
- ✅ Tailwind CSS with Dexter theme configured
- ✅ Header and Footer components functional
- ✅ Landing page with hero section deployed
- ✅ Git repository with 3 commits
- ✅ Development server running on port 3000

## Actionable Tasks

### 1. Install MDX Dependencies

```bash
cd /home/ubuntu/forensic-ai-hub
pnpm add @next/mdx @mdx-js/loader @mdx-js/react @types/mdx remark-gfm rehype-highlight rehype-slug rehype-autolink-headings
```

### 2. Configure MDX in Next.js

Create/update `next.config.ts`:
```typescript
import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeHighlight,
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: 'wrap' }]
    ],
  }
})

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}

export default withMDX(nextConfig)
```

### 3. Create Content Schema

File: `/src/lib/content/schema.ts`
```typescript
export interface ArticleMetadata {
  slug: string;
  title: string;
  description: string;
  category: 'study-resources' | 'forensic-science' | 'tech-skills' | 'career-pathways' | 'about';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  timeToRead: number; // minutes
  publishedAt: string; // ISO date
  updatedAt?: string; // ISO date
  tags: string[];
  author: string;
  featured: boolean;
}

export interface Article extends ArticleMetadata {
  content: string;
}
```

### 4. Create Content Directory Structure

```bash
mkdir -p /home/ubuntu/forensic-ai-hub/src/content/{study-resources,forensic-science,career-pathways,about}
```

### 5. Write Content Pieces

Create these 5 MDX files with full content:

#### A. `/src/content/about/welcome.mdx`
**Title**: "Welcome to Your Forensic Science Journey"
**Focus**: Introduction to the platform, the problem it solves, and how to use it
**Length**: 800-1000 words
**Key sections**:
- The Math Paradox in Forensic Science
- Why This Platform Exists
- What You'll Find Here
- How to Get Started

#### B. `/src/content/study-resources/surviving-calculus-with-ai.mdx`
**Title**: "The Ultimate Guide to Surviving Calculus with AI"
**Focus**: Practical guide to using ChatGPT, Claude, and Gemini for calculus
**Length**: 1500-2000 words
**Key sections**:
- Understanding Calculus Concepts with AI
- Step-by-Step Problem Solving
- Prompt Templates for Common Problems
- Practice Exercises
- Avoiding Common Pitfalls

#### C. `/src/content/career-pathways/math-you-actually-need.mdx`
**Title**: "The Math You Actually Need for a Career in Forensics"
**Focus**: Realistic assessment of math requirements in different forensic careers
**Length**: 1200-1500 words
**Key sections**:
- Traditional Forensic Roles (and their math requirements)
- Tech-Adjacent Forensic Roles (lower math requirements)
- The Role of AI in Modern Forensics
- Career Path Comparison Table

#### D. `/src/content/career-pathways/dexter-fan-to-forensic-scientist.mdx`
**Title**: "From 'Dexter' Fan to Forensic Scientist: A Realistic Roadmap"
**Focus**: Bridging pop culture interest to real career path
**Length**: 1000-1200 words
**Key sections**:
- What Dexter Gets Right (and Wrong)
- Real Blood Spatter Analysis
- Educational Requirements
- Career Timeline
- Day in the Life

#### E. `/src/content/study-resources/mindgrasp-ai-review.mdx`
**Title**: "Mindgrasp AI: Your New Best Friend for Forensic Science Studies"
**Focus**: Detailed review and tutorial for Mindgrasp AI
**Length**: 1000-1200 words
**Key sections**:
- What is Mindgrasp AI?
- Key Features for Forensic Science Students
- Step-by-Step Tutorial
- Use Cases (lecture notes, textbook chapters, research papers)
- Pricing and Alternatives
- Tips for Maximum Effectiveness

### 6. Create Content Display Components

#### A. ArticleCard Component
File: `/src/components/content/ArticleCard.tsx`
- Display article preview
- Show metadata (category, time to read, difficulty)
- Link to full article
- Hover effects

#### B. ArticleLayout Component
File: `/src/components/content/ArticleLayout.tsx`
- Full article wrapper
- Metadata display
- Table of contents (auto-generated from headings)
- Related articles section
- Social sharing buttons

#### C. TableOfContents Component
File: `/src/components/content/TableOfContents.tsx`
- Extract headings from MDX
- Sticky sidebar navigation
- Active section highlighting

#### D. RelatedArticles Component
File: `/src/components/content/RelatedArticles.tsx`
- Show 3 related articles
- Based on category and tags
- Card-based layout

### 7. Implement Content Routes

Create dynamic routes for each content category:

- `/src/app/study-resources/[slug]/page.tsx`
- `/src/app/forensic-science/[slug]/page.tsx`
- `/src/app/career-pathways/[slug]/page.tsx`
- `/src/app/about/[slug]/page.tsx`

Each route should:
- Load MDX content dynamically
- Render with ArticleLayout
- Include SEO metadata
- Handle 404 for invalid slugs

### 8. Create Content Index Pages

- `/src/app/study-resources/page.tsx` - List all study resource articles
- `/src/app/forensic-science/page.tsx` - List all forensic science articles
- `/src/app/career-pathways/page.tsx` - List all career articles

Each index page should:
- Display ArticleCard grid
- Filter by category
- Sort by date or popularity
- Include search functionality (basic)

### 9. Add SEO Metadata

For each article route, add:
```typescript
export const metadata: Metadata = {
  title: 'Article Title | Forensic AI Hub',
  description: 'Article description',
  keywords: ['forensic science', 'AI learning', 'specific topic'],
  authors: [{ name: 'Forensic AI Hub' }],
  openGraph: {
    title: 'Article Title',
    description: 'Article description',
    type: 'article',
    publishedTime: '2025-10-30',
    authors: ['Forensic AI Hub'],
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Article Title',
    description: 'Article description',
    images: ['/og-image.png'],
  }
}
```

### 10. Update Landing Page

Enhance the landing page with:
- Featured articles section (3 cards)
- "Latest from the blog" section
- Testimonial placeholder (for Shayla)
- Newsletter signup form (placeholder)

## Expected Artifacts

| File/Directory | Purpose |
|----------------|---------|
| `/src/content/*.mdx` | 5 complete articles in MDX format |
| `/src/lib/content/schema.ts` | TypeScript interfaces for content |
| `/src/components/content/` | Content display components (4 files) |
| `/src/app/*/[slug]/page.tsx` | Dynamic article routes (4 files) |
| `/src/app/*/page.tsx` | Category index pages (3 files) |
| `/public/images/articles/` | Article images and graphics |
| `/docs/batch-2-completion.md` | Completion report |
| `next.config.ts` | Updated with MDX configuration |

## Validation Criteria

- [ ] All 5 articles accessible via their routes
- [ ] MDX content renders correctly with formatting
- [ ] Code blocks have syntax highlighting
- [ ] Headings auto-generate table of contents
- [ ] Images display properly
- [ ] SEO metadata present on all pages
- [ ] Responsive design works on mobile
- [ ] Navigation links to all content pieces
- [ ] Related articles display correctly
- [ ] No console errors or warnings
- [ ] Build succeeds (`pnpm build`)

## Content Writing Guidelines

### Tone
- Empathetic and supportive
- Authoritative but accessible
- Inspirational and motivational
- Professional but conversational

### Structure
- Clear headings (H2, H3)
- Short paragraphs (3-4 sentences)
- Bullet points for lists
- Code blocks for examples
- Blockquotes for key insights
- Tables for comparisons

### SEO Best Practices
- Target keyword in title
- Target keyword in first paragraph
- Internal links to other articles
- External links to credible sources
- Alt text for all images
- Meta description under 160 characters

## Technical Notes

### MDX Features to Use
- **Frontmatter**: Metadata at top of file
- **Components**: Import and use React components in MDX
- **Code blocks**: With language specification for syntax highlighting
- **Tables**: Markdown table syntax
- **Links**: Both internal and external

### Performance Considerations
- Lazy load images
- Optimize image sizes
- Use Next.js Image component
- Implement reading progress indicator
- Cache MDX compilation results

## Timeline

- **Task 1-3**: 15 minutes (setup and configuration)
- **Task 4-5**: 2 hours (content writing)
- **Task 6-7**: 1 hour (component development)
- **Task 8-9**: 45 minutes (routing and SEO)
- **Task 10**: 30 minutes (landing page updates)
- **Total**: ~4.5 hours

## Next Prompt (Batch 3)

After completing Batch 2, the next prompt will be:

```
BATCH 3: Authentication & User Profiles

Context: The landing page and core content are now live. Users can browse articles but cannot yet create accounts or personalize their experience.

Task: Implement Firebase Authentication with Google Sign-In, create user profile pages, and build the foundation for personalized features...
```

## Success Metrics

- 5 high-quality articles published
- All routes functional and tested
- SEO metadata complete
- Mobile-responsive design verified
- Build and deployment successful
- Zero critical errors

## Resources

- MDX Documentation: https://mdxjs.com/
- Next.js MDX Guide: https://nextjs.org/docs/app/building-your-application/configuring/mdx
- Remark/Rehype Plugins: https://github.com/remarkjs/remark/blob/main/doc/plugins.md

---

**Ready to Execute**: Yes  
**Estimated Completion**: 4-5 hours  
**Difficulty**: Moderate  
**Dependencies**: None (Batch 1 complete)

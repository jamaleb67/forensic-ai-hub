# Forensic AI Hub

> AI-Powered Learning Platform for Forensic Science Students

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/jamaleb67/forensic-ai-hub)

**Live Site**: https://forensic-ai-hub.vercel.app (after deployment)  
**GitHub**: https://github.com/jamaleb67/forensic-ai-hub

---

## 🎯 Mission

Help forensic science students succeed in their studies, even if math isn't their strongest subject. Built with love for Shayla and students like her at George Mason University.

*"You don't need to be a math genius to master forensic science."*

## ✨ Features

- **AI-Powered Study Guides**: Learn how to use ChatGPT, Claude, and other AI tools to master calculus and statistics
- **Career Guidance**: Discover forensic careers that match your strengths, with realistic math requirements
- **Comprehensive Content**: 5+ in-depth articles covering study strategies, career paths, and tool reviews
- **Dexter-Inspired Design**: Dark, sophisticated aesthetic inspired by the show that sparked your interest
- **Mobile-First**: Fully responsive design that works on any device

## 📚 Content Library

### Study Resources
- **[The Ultimate Guide to Surviving Calculus with AI](/)** - 12 min read  
  Master calculus with AI tools, prompt templates, and a 30-day transformation plan
  
- **[Mindgrasp AI Review](/)** - 8 min read  
  Comprehensive review of Mindgrasp AI for forensic science students

### Career Pathways
- **[The Math You Actually Need for a Career in Forensics](/)** - 10 min read  
  Analysis of 8 forensic careers with math requirements and salary data
  
- **[From 'Dexter' Fan to Forensic Scientist](/)** - 8 min read  
  Realistic roadmap from TV show fan to real forensic scientist

### About
- **[Welcome to Your Forensic Science Journey](/)** - 5 min read  
  Introduction to the platform and how to use it effectively

**Total Content**: ~15,400 words | 43 minutes of reading

## 🚀 Quick Start

### Prerequisites

- Node.js 22.x or higher
- pnpm 10.x or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/jamaleb67/forensic-ai-hub.git
cd forensic-ai-hub

# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
pnpm build
pnpm start
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (React 19)
- **Styling**: Tailwind CSS v4
- **Content**: MDX for rich article content
- **Backend**: Firebase (Authentication, Firestore, Storage)
- **Deployment**: Vercel
- **Language**: TypeScript
- **Package Manager**: pnpm

## 📖 Documentation

- **[DEPLOY.md](./DEPLOY.md)** - Step-by-step deployment guide
- **[Deployment Guide](./docs/deployment-guide.md)** - Detailed Vercel setup
- **[Batch 1 Report](./docs/batch-1-completion.md)** - Project initialization
- **[Batch 2 Report](./docs/batch-2-completion.md)** - Content creation
- **[Project Status](./PROJECT_STATUS.md)** - Current status and roadmap

## 🎨 Design System

### Color Palette

**Blood** (Primary Brand Color):
- `blood-50` to `blood-950` - Red shades (#fef2f2 to #2d0505)

**Crime** (Backgrounds & Text):
- `crime-50` to `crime-950` - Gray shades (#f9fafb to #030712)

**Evidence** (Highlights):
- `evidence-yellow` (#fbbf24) - Crime scene tape color

### Typography

- **Headings**: Bold, tracking-tight, hierarchical sizing
- **Body**: 18px base, 1.75 line height for readability
- **Code**: Monospace with syntax highlighting

### Components

- **ArticleCard**: Preview cards with metadata
- **MDXComponents**: Styled MDX elements
- **Header**: Responsive navigation
- **Footer**: Four-column layout

## 🗂️ Project Structure

```
forensic-ai-hub/
├── src/
│   ├── app/                    # Next.js app router
│   │   ├── about/              # About pages
│   │   │   └── welcome/
│   │   ├── career-pathways/    # Career articles
│   │   │   ├── [slug]/
│   │   │   └── page.tsx
│   │   ├── study-resources/    # Study guides
│   │   │   ├── [slug]/
│   │   │   └── page.tsx
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Landing page
│   ├── components/
│   │   ├── content/            # Content components
│   │   │   ├── ArticleCard.tsx
│   │   │   └── MDXComponents.tsx
│   │   └── layout/             # Layout components
│   │       ├── Header.tsx
│   │       └── Footer.tsx
│   ├── content/                # MDX articles
│   │   ├── about/
│   │   │   └── welcome.mdx
│   │   ├── career-pathways/
│   │   │   ├── dexter-fan-to-forensic-scientist.mdx
│   │   │   └── math-you-actually-need.mdx
│   │   └── study-resources/
│   │       ├── mindgrasp-ai-review.mdx
│   │       └── surviving-calculus-with-ai.mdx
│   └── lib/
│       ├── content/            # Content utilities
│       │   └── schema.ts
│       ├── firebase/           # Firebase config
│       │   └── config.ts
│       └── utils/              # Helper functions
│           └── cn.ts
├── public/                     # Static assets
├── docs/                       # Documentation
├── mdx-components.tsx          # MDX configuration
├── next.config.ts              # Next.js config
├── tailwind.config.ts          # Tailwind config
├── vercel.json                 # Vercel config
└── README.md
```

## 🔥 Firebase Setup (Optional)

The site works without Firebase, but you can add it for authentication and user features:

1. Create a Firebase project at https://console.firebase.google.com
2. Enable Authentication (Google Sign-In)
3. Create Firestore database
4. Copy your Firebase config
5. Add environment variables to `.env.local`:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

## 📈 Development Roadmap

### ✅ Batch 1: Foundation (Complete)
- Next.js 15 project setup
- Dexter-inspired design system
- Responsive layout components
- Firebase configuration
- Git repository

### ✅ Batch 2: Content (Complete)
- 5 comprehensive articles (~15,400 words)
- MDX integration
- Content management system
- SEO optimization
- Featured articles section

### 🚧 Batch 3: Authentication (Next)
- Firebase Authentication
- Google Sign-In
- User profiles
- Bookmark functionality
- Reading progress tracking

### 📅 Batch 4-8: Advanced Features
- AI tutoring integration (GPT-4)
- Interactive learning modules
- Community forum
- Search functionality
- Content summarization (Claude)
- Analytics dashboard

## 🚀 Deployment

### Deploy to Vercel (Recommended)

**Easiest Method**: Click the button at the top of this README

**Manual Method**:
1. Go to https://vercel.com/new
2. Import your GitHub repository
3. Click "Deploy"
4. Done! Your site is live in 2-3 minutes

**See [DEPLOY.md](./DEPLOY.md) for detailed instructions**

### Continuous Deployment

Every push to `master` automatically deploys to production:

```bash
git add .
git commit -m "Update content"
git push origin master
```

Vercel will build and deploy automatically.

## 🤝 Contributing

This is a personal project built for Shayla, but suggestions and feedback are welcome!

### Adding Content

To add a new article:

1. Create MDX file: `src/content/{category}/{slug}.mdx`
2. Add metadata: `src/lib/content/schema.ts`
3. Update route: `src/app/{category}/[slug]/page.tsx`
4. Commit and push

### Reporting Issues

Found a bug or have a suggestion? Open an issue on GitHub!

## 📊 Project Stats

| Metric | Value |
|--------|-------|
| **Articles** | 5 |
| **Total Words** | ~15,400 |
| **Reading Time** | 43 minutes |
| **Components** | 4 |
| **Routes** | 8 |
| **Dependencies** | 496 packages |
| **Lines of Code** | ~10,000+ |
| **Development Time** | ~3 hours |
| **Git Commits** | 7 |

## 📄 License

MIT License - Feel free to use this as inspiration for your own projects!

## 💖 Acknowledgments

- **Shayla**: The inspiration for this platform
- **George Mason University**: Forensic Science Program
- **Dexter**: For making forensic science look cool
- **The forensic science community**: For their dedication to justice

## 🌐 Links

- **Live Site**: https://forensic-ai-hub.vercel.app (after deployment)
- **GitHub**: https://github.com/jamaleb67/forensic-ai-hub
- **Deployment Guide**: [DEPLOY.md](./DEPLOY.md)
- **Documentation**: [docs/](./docs/)

---

**Built with ❤️ for forensic science students who refuse to let math hold them back.**

*Ready to deploy? See [DEPLOY.md](./DEPLOY.md) for step-by-step instructions!*

# Forensic AI Hub

**AI-Powered Learning Platform for Forensic Science Students**

> You don't need to be a math genius to master forensic science.

## Overview

Forensic AI Hub is an educational platform designed to empower forensic science students, particularly those who struggle with mathematics, by providing AI-powered learning tools, practical resources, and career guidance. Built specifically for students at George Mason University and beyond.

## Features

### 🧠 AI-Assisted Learning
- Guides for using ChatGPT, Claude, and Gemini for studying
- Prompt templates for homework help
- AI-powered tutoring for math concepts

### 🔬 Real Forensic Science
- Interactive blood spatter analysis tool
- "Dexter vs. Reality" content series
- Case studies and crime scene investigation resources

### 💻 Tech Skills Development
- No-code tool tutorials
- Data visualization guides
- Technology career pathways in forensics

### 👥 Community & Support
- Discussion forums
- Study group matching
- Success stories and mentorship

## Tech Stack

- **Frontend**: Next.js 15 (React 19) with TypeScript
- **Styling**: Tailwind CSS v4 with custom Dexter-inspired theme
- **Backend**: Firebase (Firestore, Auth, Functions, Hosting)
- **AI Integration**: OpenAI GPT-4, Anthropic Claude, Google Gemini
- **Search**: Algolia
- **Deployment**: Vercel
- **Analytics**: Vercel Analytics + Google Analytics 4

## Getting Started

### Prerequisites

- Node.js 18+ installed
- pnpm package manager
- Firebase account
- Vercel account (for deployment)

### Installation

1. Install dependencies:
```bash
pnpm install
```

2. Set up environment variables:
```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your Firebase configuration values.

3. Run the development server:
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development Status

### Batch 1: Complete ✅
- Next.js project initialized
- Firebase configuration created
- Tailwind CSS with Dexter theme configured
- Header and Footer components built
- Landing page created
- Git repository initialized

### Next: Batch 2
Create the first 5 core content pieces using MDX.

## Built for Shayla

This project was created to help forensic science students at George Mason University and beyond succeed with AI-powered learning tools.

---

**Built with ❤️ using Next.js, Firebase, and AI**

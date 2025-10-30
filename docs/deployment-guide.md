# Deployment Guide: Vercel Setup

## Prerequisites

- GitHub account
- Vercel account (free tier is sufficient)
- Firebase project created and configured

## Step 1: Push to GitHub

1. Create a new repository on GitHub:
   - Go to https://github.com/new
   - Name: `forensic-ai-hub`
   - Description: "AI-Powered Learning Platform for Forensic Science Students"
   - Visibility: Public or Private (your choice)
   - Do NOT initialize with README (we already have one)

2. Add GitHub as remote and push:
```bash
cd /home/ubuntu/forensic-ai-hub
git remote add origin https://github.com/YOUR_USERNAME/forensic-ai-hub.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Vercel

### Option A: Via Vercel Dashboard (Recommended)

1. Go to https://vercel.com/new
2. Click "Import Project"
3. Select your GitHub repository (`forensic-ai-hub`)
4. Configure project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./`
   - **Build Command**: `pnpm build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
   - **Install Command**: `pnpm install` (auto-detected)

5. Add Environment Variables:
   Click "Environment Variables" and add:
   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   ```

6. Click "Deploy"

### Option B: Via Vercel CLI

1. Install Vercel CLI:
```bash
pnpm add -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
cd /home/ubuntu/forensic-ai-hub
vercel
```

4. Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - What's your project's name? `forensic-ai-hub`
   - In which directory is your code located? `./`
   - Want to override the settings? **N**

5. Add environment variables:
```bash
vercel env add NEXT_PUBLIC_FIREBASE_API_KEY
vercel env add NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
vercel env add NEXT_PUBLIC_FIREBASE_PROJECT_ID
vercel env add NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
vercel env add NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
vercel env add NEXT_PUBLIC_FIREBASE_APP_ID
```

6. Deploy to production:
```bash
vercel --prod
```

## Step 3: Configure Custom Domain (Optional)

1. In Vercel Dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Step 4: Enable Analytics

### Vercel Analytics (Free)

1. In Vercel Dashboard, go to your project
2. Click "Analytics" tab
3. Click "Enable Analytics"

### Google Analytics 4

1. Create GA4 property at https://analytics.google.com
2. Get Measurement ID (format: G-XXXXXXXXXX)
3. Add to Vercel environment variables:
```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```
4. Implement GA4 in `src/app/layout.tsx` (Batch 2)

## Step 5: Continuous Deployment

Vercel automatically deploys when you push to GitHub:

```bash
# Make changes
git add .
git commit -m "feat: Add new feature"
git push origin main
```

Vercel will:
1. Detect the push
2. Build the project
3. Run tests (if configured)
4. Deploy to production
5. Send deployment notification

## Deployment URLs

After deployment, you'll receive:
- **Production**: `https://forensic-ai-hub.vercel.app`
- **Preview**: Unique URL for each branch/PR
- **Custom domain**: Your configured domain (if set up)

## Troubleshooting

### Build Fails

**Error**: "Module not found"
- **Solution**: Ensure all dependencies are in `package.json`
- Run `pnpm install` locally to verify

**Error**: "Environment variable not found"
- **Solution**: Add missing variables in Vercel Dashboard

### Firebase Connection Issues

**Error**: "Firebase: Error (auth/invalid-api-key)"
- **Solution**: Verify Firebase config in Vercel environment variables
- Ensure all `NEXT_PUBLIC_` prefixes are correct

### Slow Build Times

- **Solution**: Vercel automatically uses Turbopack in production
- Ensure `next.config.ts` is optimized
- Consider enabling Edge Runtime for API routes

## Performance Optimization

### Recommended Vercel Settings

1. **Enable Edge Functions**: For API routes that don't need Node.js
2. **Enable Image Optimization**: Automatic (included)
3. **Enable Compression**: Automatic (included)
4. **Set Cache Headers**: Configure in `next.config.ts`

### Monitoring

- Check Vercel Analytics for:
  - Page load times
  - Core Web Vitals
  - User traffic patterns
  - Error rates

## Cost Estimation

### Vercel Hobby Plan (Free)
- Unlimited deployments
- 100 GB bandwidth/month
- Automatic HTTPS
- Analytics included
- **Cost**: $0/month

### Vercel Pro Plan ($20/month)
- Needed if:
  - Traffic exceeds 100 GB/month
  - Need team collaboration
  - Want advanced analytics
  - Need password protection

## Next Steps

After successful deployment:
1. ✅ Verify site loads at production URL
2. ✅ Test Firebase connection
3. ✅ Check mobile responsiveness
4. ✅ Verify SEO metadata
5. ✅ Set up monitoring alerts
6. ✅ Share URL with Shayla!

## Support

- Vercel Docs: https://vercel.com/docs
- Vercel Discord: https://vercel.com/discord
- Next.js Docs: https://nextjs.org/docs

---

**Deployment Status**: Ready for Batch 1  
**Estimated Time**: 10-15 minutes  
**Difficulty**: Easy

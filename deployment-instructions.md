# Deployment Instructions

## Repository Information
- **GitHub URL**: https://github.com/inflexion88/troy-assoignon-official
- **Live Domain**: troyassoignon.com (hosted on Namecheap)
- **Hosting Platform**: Vercel

## Deployment Workflow

### Standard Deployment (Automatic)
1. Commit changes locally:
   ```bash
   git add .
   git commit -m "Your commit message"
   ```

2. Push to GitHub:
   ```bash
   git push origin main
   ```

3. Vercel auto-deploys from GitHub push
   - Changes are automatically live within 1-2 minutes

### Manual Production Deployment (Vercel CLI)
If you need to trigger a deployment manually or if auto-deploy isn't working:

```bash
vercel --prod
```

### Local Testing Before Deployment
Always test changes locally before pushing:

```bash
npm run dev
```

Or to test the production build:

```bash
npm run build
npm run preview
```

## Domain Configuration
- Domain: troyassoignon.com
- DNS Provider: Namecheap
- Vercel handles SSL and CDN automatically

## Common Commands
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Deploy to production via Vercel CLI
vercel --prod

# Force refresh Vercel cache
# (Sometimes needed if changes don't appear immediately)
vercel --prod --force
```

## Troubleshooting

### Changes not appearing on live site
1. Wait 2-3 minutes for Vercel build/deployment
2. Hard refresh browser: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
3. Check Vercel dashboard for build status
4. If still not updating, try: `vercel --prod --force`

### Build failures
- Check the Vercel dashboard for error logs
- Ensure all dependencies are installed: `npm install`
- Test build locally first: `npm run build`

## Notes
- Always commit and push to GitHub for version control
- Vercel deployment typically takes 1-2 minutes
- Browser caching may require hard refresh to see changes
- Check localhost before pushing to production

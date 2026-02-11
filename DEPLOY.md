# 4marcus Website - Deployment Guide

Your 4marcus website is now complete and ready to deploy! Follow these simple steps to get your site live.

## Quick Start Deployment

### Option 1: Deploy to Vercel (Recommended - 2 minutes)

**Step 1: Download the project**
- Click the download button in v0 to get the ZIP file
- Extract it to your computer

**Step 2: Push to GitHub**
```bash
# Navigate to the project directory
cd your-4marcus-project

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial 4marcus website commit"

# Create a new repository on GitHub.com
# Then run:
git remote add origin https://github.com/yourusername/4marcus.git
git branch -M main
git push -u origin main
```

**Step 3: Connect to Vercel**
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import from GitHub and select your `4marcus` repository
4. Click "Deploy"
5. Your site is live! You'll get a URL like `4marcus.vercel.app`

### Option 2: Deploy Directly with Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Navigate to project directory
cd your-4marcus-project

# Deploy
vercel

# Follow the prompts and your site will be live!
```

### Option 3: Deploy to Netlify

**Step 1: Build the project**
```bash
npm run build
```

**Step 2: Deploy to Netlify**
1. Go to [netlify.com](https://netlify.com)
2. Click "Add New Site" → "Deploy manually"
3. Drag the `.next` folder (or entire project) into Netlify
4. Your site is live!

## Environment Setup (If Needed)

If you add any environment variables later, create a `.env.local` file:

```bash
# .env.local (don't commit this)
NEXT_PUBLIC_API_URL=https://api.example.com
```

## Custom Domain Setup

After deployment, add your own domain:

### For Vercel:
1. Go to Project Settings
2. Click "Domains"
3. Add your custom domain
4. Follow DNS instructions

### For Netlify:
1. Go to Site Settings
2. Click "Domain management"
3. Add your domain
4. Update DNS records

## Site Performance Check

After deployment, check your site performance:

- **Google PageSpeed**: https://pagespeed.web.dev
- **GTmetrix**: https://gtmetrix.com
- **WebPageTest**: https://webpagetest.org

## Making Updates

### Update Your Site Content

1. Edit files locally (e.g., change text in `/app/page.tsx`)
2. Commit changes:
```bash
git add .
git commit -m "Update homepage content"
git push origin main
```
3. Vercel automatically redeploys on push!

### Update Brand Colors

Edit `/app/globals.css` to change the color scheme:

```css
:root {
  --background: 220 25% 8%;      /* Your background color */
  --primary: 220 85% 55%;        /* Your primary color */
  --accent: 35 90% 55%;          /* Your accent color */
}
```

### Update Company Information

Find and update these sections in the respective files:

- **Footer links**: `/components/footer.tsx`
- **Navigation**: `/components/navigation.tsx`
- **Contact info**: `/app/contact/page.tsx`
- **Team info**: `/app/about/page.tsx`

## Important Files to Customize

1. **Homepage** (`/app/page.tsx`)
   - Company description
   - Statistics
   - Services overview
   - CTA text

2. **Services** (`/app/services/page.tsx`)
   - Service descriptions
   - Pricing (if applicable)

3. **About** (`/app/about/page.tsx`)
   - Team member names and roles
   - Company mission/vision
   - Company values

4. **Contact** (`/app/contact/page.tsx`)
   - Email address
   - Phone number
   - Office locations
   - Social media links

5. **Blog** (`/app/blog/page.tsx`)
   - Blog post content
   - Author information
   - Categories

## Monitoring & Maintenance

### Track Your Site
- **Vercel Analytics**: Built-in dashboard shows traffic
- **Google Analytics**: Add tracking for detailed insights
- **Sentry**: Monitor errors (optional)

### Regular Updates
- Update blog posts weekly
- Refresh case studies monthly
- Keep team information current

## Troubleshooting

### Site won't deploy?
- Check that all files are committed to git
- Verify Node version is 18+ (run `node --version`)
- Check build logs on Vercel/Netlify dashboard

### Animations not working?
- Clear browser cache (Ctrl+Shift+Delete / Cmd+Shift+Delete)
- Ensure JavaScript is enabled
- Check browser console for errors

### Styling looks wrong?
- Run `npm run build` locally to test
- Clear `.next` folder and rebuild: `rm -rf .next && npm run build`

## Analytics Setup (Optional)

### Add Google Analytics
1. Get your Google Analytics ID
2. Create a file `/app/analytics.tsx`
3. Add Google Analytics script
4. Import in layout.tsx

### Add Vercel Analytics
Automatically included if using Vercel!

## Backup & Version Control

```bash
# Always keep backups with git tags
git tag -a v1.0 -m "First production release"
git push origin v1.0

# Create branches for major updates
git checkout -b feature/new-services
# Make changes...
git push origin feature/new-services
# Create Pull Request on GitHub for review
```

## Performance Optimization

Your site already has:
- ✅ Image optimization
- ✅ Code splitting
- ✅ CSS minification
- ✅ Zero JavaScript on static pages
- ✅ Automatic compression

No additional setup needed!

## SSL/HTTPS

- **Vercel**: Automatic SSL certificate (included free)
- **Netlify**: Automatic SSL certificate (included free)
- Both services handle renewal automatically

## What's Included

- ✅ Fully responsive design
- ✅ Dark theme with premium colors
- ✅ Smooth animations and transitions
- ✅ Multiple pages with proper routing
- ✅ Contact form functionality
- ✅ Mobile navigation
- ✅ SEO optimized
- ✅ Performance optimized
- ✅ Accessibility compliant

## Support & Help

- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Docs**: https://vercel.com/docs
- **Tailwind Docs**: https://tailwindcss.com/docs
- **Framer Motion Docs**: https://www.framer.com/motion/

## Next Steps

1. ✅ Deploy to Vercel
2. ✅ Add your custom domain
3. ✅ Update all content
4. ✅ Set up analytics
5. ✅ Test on all devices
6. ✅ Submit to Google Search Console
7. ✅ Share with your team!

---

**Your website is ready to launch! Choose your deployment option above and go live in minutes.**

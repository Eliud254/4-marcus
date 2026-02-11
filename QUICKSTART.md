# 4marcus - Quick Start Guide

Get your website running in under 5 minutes!

## 1. Install & Run Locally (2 minutes)

```bash
# Download ZIP and extract to a folder
# Open terminal/command prompt in the folder

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000 in your browser
# Your site is now running!
```

## 2. Make Quick Edits (1 minute)

### Change your company name:
- Open `/components/navigation.tsx`
- Find `4marcus` and change to your name
- File auto-saves and page updates instantly!

### Update your email:
- Open `/app/contact/page.tsx`
- Find `hello@4marcus.com` 
- Change to your email
- Refresh browser

### Update main title:
- Open `/app/page.tsx`
- Find the `<h1>` heading
- Edit the text
- See changes instantly!

## 3. Customize Colors (1 minute)

Want different colors? Edit `/app/globals.css`:

```css
:root {
  --primary: 220 85% 55%;        /* Change this blue to your color */
  --accent: 35 90% 55%;          /* Change this gold to your accent */
}
```

Go to [hslpicker.com](https://hslpicker.com), pick a color, copy the HSL value.

## 4. Deploy to Vercel (1 minute)

### Option A: Push to GitHub First
```bash
git add .
git commit -m "My 4marcus website"
git remote add origin https://github.com/yourname/4marcus.git
git push -u origin main
```

### Option B: Deploy Direct
```bash
npm i -g vercel
vercel
# Follow prompts, done!
```

## 5. Celebrate! 🎉

Your site is now live!

You'll get a URL like: `4marcus.vercel.app`

---

## Key Files to Know

| File | What it does | Change this for |
|------|--------------|-----------------|
| `/app/page.tsx` | Homepage | Hero text, services, CTA |
| `/app/contact/page.tsx` | Contact page | Email, phone, locations |
| `/components/navigation.tsx` | Top menu | Logo, menu items |
| `/components/footer.tsx` | Footer | Links, social media |
| `/app/globals.css` | All colors | Brand colors |
| `/app/services/page.tsx` | Services list | Your services |
| `/app/about/page.tsx` | About page | Team, mission, values |
| `/app/work/page.tsx` | Portfolio | Your projects |
| `/app/blog/page.tsx` | Blog | Articles and insights |

## Useful Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run production build locally
npm start

# Fix code formatting
npm run lint
```

## Auto-Refresh During Editing

When you edit files, the browser automatically refreshes to show changes. No page reload needed!

Just edit → save → see changes appear instantly.

## Deployment in 30 Seconds

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts
4. Your site is live!

## Need to Change More?

See these guides:
- **Detailed Customization**: `CUSTOMIZE.md`
- **Deployment Options**: `DEPLOY.md`
- **Full Project Overview**: `PROJECT_SUMMARY.md`
- **Setup Help**: `README.md`

## Common Quick Changes

### Add a new service:
Edit `/app/services/page.tsx` and add to the `services` array.

### Update team member:
Edit `/app/about/page.tsx` and update the `team` array.

### Add blog post:
Edit `/app/blog/page.tsx` and add to the `posts` array.

### Change stats on homepage:
Edit `/app/page.tsx` and update the `stats` array.

## Stop Development Server

Press `Ctrl+C` in the terminal.

## Troubleshooting

**Port already in use?**
```bash
npm run dev -- -p 3001
# Runs on port 3001 instead
```

**Code won't save?**
- Make sure you're in the correct folder
- Check the terminal for error messages
- Restart the dev server: `Ctrl+C` then `npm run dev`

**Changes not showing?**
- Hard refresh: `Ctrl+Shift+R` (or `Cmd+Shift+R` on Mac)
- Check you saved the file

## Next Steps

1. ✅ Customize company name and email
2. ✅ Update brand colors (optional)
3. ✅ Edit homepage content
4. ✅ Deploy to Vercel (free!)
5. ✅ Add your domain
6. ✅ Update rest of pages
7. ✅ Share with team

## Support

- **Next.js Help**: https://nextjs.org/docs
- **Vercel Help**: https://vercel.com/docs
- **Tailwind Help**: https://tailwindcss.com/docs

---

**That's it! You're ready to launch your 4marcus website. Deploy in seconds, customize in hours, and grow your business!**

Questions? Check the full `README.md` or `CUSTOMIZE.md` guides.

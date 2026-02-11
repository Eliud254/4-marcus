# 4marcus - Customization Guide

Everything you need to personalize your 4marcus website.

## Quick Changes

### 1. Change Company Name
Replace `4marcus` throughout:
- `/components/navigation.tsx` - Logo text
- `/components/footer.tsx` - Brand name
- `/app/layout.tsx` - Metadata title
- All page files - Company references

**Quick Find & Replace:**
```bash
# In your editor, use Ctrl+H (or Cmd+H on Mac)
# Find: 4marcus
# Replace: YourCompanyName
```

### 2. Update Email & Contact Info

**File: `/app/contact/page.tsx`**
```javascript
const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'your-email@company.com',  // ← Change this
    href: 'mailto:your-email@company.com',
  },
  // ... more contact info
]
```

**File: `/components/footer.tsx`**
```javascript
// Update footer contact links
```

### 3. Update Social Media Links

**File: `/components/footer.tsx`**
```javascript
const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com/company/yourcompany', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/yourhandle', label: 'Twitter' },
  { icon: Github, href: 'https://github.com/yourorg', label: 'GitHub' },
]
```

### 4. Change Brand Colors

**File: `/app/globals.css`**

Edit the `:root` section to customize colors:

```css
:root {
  /* Background - Deep navy to light (adjust values) */
  --background: 220 25% 8%;
  
  /* Foreground - Text color */
  --foreground: 0 0% 98%;
  
  /* Primary - Main brand color */
  --primary: 220 85% 55%;  /* Change to your brand blue */
  
  /* Accent - Highlight color */
  --accent: 35 90% 55%;    /* Change to your accent color */
  
  /* Secondary - Secondary element color */
  --secondary: 220 15% 20%;
}
```

**How to choose colors:**
1. Go to [hslpicker.com](https://hslpicker.com)
2. Pick your color
3. Copy HSL values (e.g., `220 85% 55%`)
4. Paste into globals.css

### 5. Update Navigation Menu

**File: `/components/navigation.tsx`**

```javascript
const navItems = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]
```

To add a new menu item:
```javascript
{ label: 'Pricing', href: '/pricing' },
```

### 6. Update Homepage Content

**File: `/app/page.tsx`**

#### Change Hero Text:
```javascript
<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-balance leading-tight">
  Your New Title <span className="text-accent">Here</span>
</h1>

<p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto text-balance">
  Your new tagline here.
</p>
```

#### Update Statistics:
```javascript
const stats = [
  { number: '50+', label: 'Projects Delivered' },
  { number: '100+', label: 'Clients Served' },
  { number: '25+', label: 'Team Members' },
]
```

#### Update Services:
```javascript
const services = [
  { 
    icon: Brain, 
    title: 'Your Service', 
    description: 'Service description here' 
  },
  // ... more services
]
```

## Adding New Pages

### Create a New Page

1. **Create folder structure:**
```bash
mkdir -p app/resources
touch app/resources/page.tsx
```

2. **Add template to `/app/resources/page.tsx`:**
```typescript
'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { motion } from 'framer-motion'

export default function ResourcesPage() {
  return (
    <main className="bg-background">
      <Navigation />
      
      {/* Your page content here */}
      
      <Footer />
    </main>
  )
}
```

3. **Update Navigation:**
Edit `/components/navigation.tsx`:
```javascript
const navItems = [
  // ... existing items
  { label: 'Resources', href: '/resources' },
]
```

4. **Update Footer:**
Edit `/components/footer.tsx` if needed

## Content Updates

### Update Services Page

**File: `/app/services/page.tsx`**

```javascript
const services = [
  {
    icon: Brain,
    title: 'Digital Strategy',
    description: 'Transform your vision into actionable tech strategies',
    details: [
      'Technology roadmap planning',
      'Competitive analysis',
      'Market positioning',
    ],
  },
  // Add more services...
]
```

### Update Team Members

**File: `/app/about/page.tsx`**

```javascript
const team = [
  {
    name: 'John Doe',
    role: 'CEO & Founder',
    bio: 'Bio and experience here',
  },
  // Add more team members...
]
```

### Update Blog Posts

**File: `/app/blog/page.tsx`**

```javascript
const posts = [
  {
    id: 1,
    title: 'Your Blog Post Title',
    excerpt: 'Short excerpt of the blog post',
    author: 'Author Name',
    date: 'February 11, 2025',
    category: 'Technology',
    readTime: '8 min read',
    image: 'bg-gradient-to-br from-blue-900 to-blue-700',
  },
  // Add more posts...
]
```

### Update Case Studies

**File: `/app/work/page.tsx`**

```javascript
const caseStudies = [
  {
    id: 1,
    title: 'Project Name',
    category: 'Industry',
    description: 'Project description',
    results: ['Result 1', 'Result 2', 'Result 3'],
    image: 'bg-gradient-to-br from-blue-900 to-blue-700',
  },
  // Add more projects...
]
```

## Design Customization

### Change Font

**File: `/app/layout.tsx`**

```typescript
import { YourFont } from 'next/font/google'

const yourFont = YourFont({ subsets: ['latin'] })
```

Available Google Fonts: Any from [fonts.google.com](https://fonts.google.com)

### Adjust Spacing

Edit Tailwind config in `/tailwind.config.ts`:

```typescript
theme: {
  extend: {
    spacing: {
      // Add custom spacing values
      '18': '4.5rem',
    }
  }
}
```

### Add New Animations

**File: `/app/globals.css`**

Add in `@keyframes` section:

```css
@keyframes slideLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
```

Then add to tailwind config:

```typescript
animation: {
  'slide-left': 'slideLeft 0.6s ease-out',
}
```

## SEO Optimization

### Update Metadata

**File: `/app/layout.tsx`**

```typescript
export const metadata: Metadata = {
  title: '4marcus | Your Company Tagline',
  description: 'Your company description for search engines',
  // Add more metadata as needed
}
```

### Update Sitemap

**File: `/public/sitemap.xml`**

Add your new pages:

```xml
<url>
  <loc>https://4marcus.com/resources</loc>
  <lastmod>2025-02-11</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

## Forms & Submissions

The contact form is currently a frontend form. To handle submissions:

### Option 1: Vercel Functions
```typescript
// app/api/contact/route.ts
export async function POST(request: Request) {
  const data = await request.json()
  // Handle email sending here
  return Response.json({ success: true })
}
```

### Option 2: Third-party Service
- Use [Formspree.io](https://formspree.io)
- Use [EmailJS](https://www.emailjs.com)
- Use [Basin](https://usebasin.com)

## Performance Tips

1. **Optimize Images:**
   - Keep images under 200KB
   - Use modern formats (WebP)
   - Use Next.js Image component

2. **Lazy Load Content:**
   - Videos on demand
   - Heavy components with dynamic import

3. **Monitor Performance:**
   - Use Google PageSpeed Insights
   - Check Core Web Vitals

## Testing Changes Locally

```bash
# Install dependencies (if not done)
npm install

# Run development server
npm run dev

# Open http://localhost:3000
# Make changes and see them update live!

# Build for production
npm run build

# Start production server
npm start
```

## Deployment After Changes

```bash
# Commit your changes
git add .
git commit -m "Update services and team information"

# Push to GitHub
git push origin main

# Vercel automatically deploys on push!
# No additional steps needed
```

## Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Colors look wrong | Clear browser cache (Ctrl+Shift+Delete) |
| Changes not showing | Rebuild: `npm run build` |
| Page not found | Check file path and spelling |
| Navigation broken | Verify href paths match page routes |
| Animations choppy | Check browser performance settings |

## Need Help?

- **Next.js**: https://nextjs.org/docs
- **Tailwind**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/
- **Lucide Icons**: https://lucide.dev

---

**Start customizing your site now and make it truly yours!**

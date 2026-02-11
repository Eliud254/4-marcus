# 4marcus - Tech Consulting Website

A modern, full-featured website for 4marcus, a professional tech consulting firm. Built with Next.js, React, Tailwind CSS, and Framer Motion.

## Features

- **Responsive Design**: Mobile-first approach with perfect scaling across all devices
- **Motion Animations**: Smooth, professional animations using Framer Motion
- **Multi-page Structure**: 
  - Homepage with hero section and key statistics
  - Services page with comprehensive offerings
  - Portfolio/Work page showcasing case studies
  - About page with team and company values
  - Blog/Insights page with article listings
  - Contact page with form and location info
- **Premium Branding**: Dark theme with gold accents and professional color scheme
- **Performance Optimized**: Built on Next.js for optimal speed and SEO
- **Accessible**: Semantic HTML and ARIA-compliant components

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **UI Framework**: React 19
- **Styling**: Tailwind CSS with custom design tokens
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Geist (Google Fonts)

## Project Structure

```
/app
  ├── page.tsx              # Homepage
  ├── work/page.tsx         # Portfolio/Case Studies
  ├── services/page.tsx     # Services offering
  ├── about/page.tsx        # About & Team
  ├── blog/page.tsx         # Blog/Insights
  ├── contact/page.tsx      # Contact form
  ├── layout.tsx            # Root layout
  └── globals.css           # Global styles & animations

/components
  ├── navigation.tsx        # Top navigation bar
  ├── footer.tsx           # Footer with links
  └── ui/                  # shadcn/ui components

/public                     # Static assets

/styles
  └── globals.css          # Root styles
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone or download the project**

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open in browser**
Navigate to `http://localhost:3000`

## Building for Production

```bash
npm run build
npm start
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Click Deploy
4. Your site will be live with automatic deployments on every push

### Deploy to Other Platforms

The project is built with Next.js and can be deployed to:
- Netlify
- AWS Amplify
- DigitalOcean
- Heroku
- Any Node.js hosting provider

## Customization

### Updating Brand Colors

Edit `/app/globals.css` to customize the color scheme:

```css
:root {
  --background: 220 25% 8%;      /* Deep navy background */
  --foreground: 0 0% 98%;        /* Light text */
  --primary: 220 85% 55%;        /* Tech blue */
  --accent: 35 90% 55%;          /* Gold accent */
  /* ... more colors ... */
}
```

### Updating Content

- **Homepage**: Edit `/app/page.tsx`
- **Services**: Edit `/app/services/page.tsx`
- **Portfolio**: Edit `/app/work/page.tsx`
- **Team**: Edit `/app/about/page.tsx`
- **Blog Posts**: Edit `/app/blog/page.tsx`
- **Contact Info**: Edit `/app/contact/page.tsx`

### Adding New Pages

1. Create a new folder in `/app` (e.g., `/app/resources`)
2. Add `page.tsx` file with your content
3. Update Navigation in `/components/navigation.tsx`
4. Update Footer in `/components/footer.tsx`

## Page Routes

- `/` - Homepage
- `/work` - Portfolio & Case Studies
- `/services` - Services Offered
- `/about` - About & Team
- `/blog` - Blog & Insights
- `/contact` - Contact Form

## Performance Optimization

- Images are optimized with Next.js Image component
- Code splitting for faster initial load
- CSS is minified and optimized
- Animations use GPU acceleration
- Responsive images and lazy loading

## SEO

- Meta tags configured in layout.tsx
- Semantic HTML structure
- Mobile-responsive design
- Fast page load times
- Structured data ready for implementation

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

All rights reserved © 2025 4marcus

## Support

For questions or issues, please contact hello@4marcus.com

---

**Ready to deploy?** Push to GitHub and connect to Vercel for instant deployment!

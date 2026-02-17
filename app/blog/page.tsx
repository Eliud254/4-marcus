'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function BlogPage() {
  const posts = [
    {
      title: 'The Future of AI in Enterprise Solutions',
      excerpt: 'Explore how artificial intelligence is transforming business operations and creating competitive advantages.',
      author: 'Abel Amare',
      date: 'Feb 10, 2025',
      category: 'AI & Machine Learning',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800'
    },
    {
      title: 'Digital Transformation Strategy: A Guide',
      excerpt: 'A comprehensive roadmap for businesses looking to modernize their digital infrastructure.',
      author: 'Nelson Wamalwa',
      date: 'Feb 05, 2025',
      category: 'Strategy',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800'
    },
    {
      title: 'Building Scalable Cloud Architecture',
      excerpt: 'Best practices for designing cloud systems that grow with your business needs.',
      author: 'Joseph Akaro',
      date: 'Jan 30, 2025',
      category: 'Cloud Infrastructure',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800'
    },
    {
      title: 'Cybersecurity in 2025: Staying Ahead',
      excerpt: 'Stay ahead of emerging security threats and protect your business from cyber attacks.',
      author: 'Eliud Obure',
      date: 'Jan 25, 2025',
      category: 'Security',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800'
    }
  ]

  return (
    <main className="bg-[#fcfcfc] min-h-screen selection:bg-primary/20 text-[#1a1a1a]">
      <Navigation />

      {/* Editorial Hero */}
      <section className="relative pt-32 md:pt-48 pb-24 md:pb-32 px-4 md:px-6 lg:px-8 bg-white border-b border-black/[0.03]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <div className="flex items-center gap-3 mb-8 md:mb-10">
              <span className="w-12 h-[1px] bg-primary"></span>
              <span className="text-secondary-foreground/60 font-bold uppercase tracking-[0.3em] text-[10px]">
                Insights
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold mb-10 md:mb-12 tracking-tight leading-[0.85] text-balance">
              Thought <br />
              <span className="font-serif italic font-normal text-primary">leadership</span>.
            </h1>

            <p className="text-xl md:text-3xl text-muted-foreground font-light leading-relaxed max-w-3xl italic">
              Perspectives on the technological paradigms shaping the future of African commerce.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Feed - Minimalist Editorial List */}
      <section className="py-24 md:py-40 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-0">
            {posts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 py-12 md:py-20 border-b border-black/5 hover:bg-black/[0.01] transition-colors"
              >
                {/* Meta & Category */}
                <div className="lg:col-span-3 space-y-2 md:space-y-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">{post.category}</span>
                  <div className="text-[10px] font-bold text-muted-foreground/40 uppercase tracking-widest block">
                    {post.date} — {post.author}
                  </div>
                </div>

                {/* Content Area */}
                <div className="lg:col-span-6">
                  <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 md:mb-8 leading-tight group-hover:text-primary transition-colors cursor-pointer capitalize text-balance">
                    {post.title}
                  </h3>
                  <p className="text-lg md:text-xl text-muted-foreground/80 font-light leading-relaxed mb-8 md:mb-10">
                    {post.excerpt}
                  </p>
                  <Link href="#" className="inline-flex items-center gap-4 font-bold text-[10px] md:text-sm tracking-widest uppercase hover:gap-6 transition-all group/link">
                    Read Analysis <ArrowRight size={16} className="text-primary" />
                  </Link>
                </div>

                {/* Image Showcase */}
                <div className="lg:col-span-3">
                  <div className="aspect-[16/9] lg:aspect-square overflow-hidden bg-slate-100 rounded-sm">
                    <div
                      className="w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-in-out cursor-pointer"
                      style={{ backgroundImage: `url('${post.image}')` }}
                    ></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe - High End Layout */}
      <section className="py-24 md:py-40 px-4 md:px-6 lg:px-8 bg-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-center">
            <div className="lg:col-span-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-8 md:mb-12 block ml-1">Newsletter</span>
              <h3 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 md:mb-12 leading-[0.9] text-balance">Insights in your <span className="font-serif italic font-normal text-white/40">inbox</span>.</h3>
              <p className="text-lg md:text-xl text-white/50 font-light leading-relaxed max-w-xl">
                A monthly curation of our deep-dive technical analysis and strategic reports for regional partners.
              </p>
            </div>
            <div className="lg:col-span-6">
              <form className="space-y-12">
                <div className="flex flex-col space-y-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/60">Email Address</span>
                  <div className="flex flex-col sm:flex-row gap-8">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 bg-transparent border-b border-white/20 py-4 focus:border-primary focus:outline-none transition-all text-xl md:text-2xl font-light placeholder:text-white/10"
                      required
                    />
                    <motion.button
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-6 text-xl md:text-2xl font-bold tracking-tight group whitespace-nowrap"
                    >
                      <span>Subscribe</span>
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary text-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                        <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                      </div>
                    </motion.button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

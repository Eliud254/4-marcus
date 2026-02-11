'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function WorkPage() {
  const cases = [
    {
      title: 'Global E-Commerce Transformation',
      category: 'Retail Technology',
      description: 'A complete digital overhaul for East Africa\'s leading retail chain, integrating real-time stock management with a seamless mobile experience.',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=1200',
      size: 'large'
    },
    {
      title: 'Secured Mobile Banking Suite',
      category: 'Financial Services',
      description: 'Bank-grade mobile solutions focusing on accessibility and local currency integration.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800',
      size: 'medium'
    },
    {
      title: 'Enterprise Insights Dashboard',
      category: 'Data Infrastructure',
      description: 'Custom data visualization for government agencies to track ROI in real-time.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
      size: 'medium'
    },
    {
      title: 'Healthcare Platform Modernization',
      category: 'Healthcare Tech',
      description: 'Modernizing legacy clinical systems for faster operations and better patient care.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200',
      size: 'large'
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
                Portfolio
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold mb-10 md:mb-12 tracking-tight leading-[0.85] text-balance">
              Proof of <span className="font-serif italic font-normal text-primary">concept</span>.
            </h1>

            <p className="text-xl md:text-3xl text-muted-foreground font-light leading-relaxed max-w-3xl italic">
              A selection of our most impactful engagements across digital strategy and core infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Asymmetrical Case Studies Grid */}
      <section className="py-24 md:py-40 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-24 md:space-y-40">
            {cases.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                  }`}
              >
                <div className={`${project.size === 'large' ? 'lg:col-span-8' : 'lg:col-span-6'
                  } group overflow-hidden bg-slate-100 rounded-sm`}>
                  <div
                    className={`w-full bg-cover bg-center grayscale hover:grayscale-0 hover:scale-105 transition-all duration-1000 ease-in-out cursor-pointer ${project.size === 'large' ? 'aspect-[4/3] md:aspect-[21/9]' : 'aspect-[4/3]'
                      }`}
                    style={{ backgroundImage: `url('${project.image}')` }}
                  ></div>
                </div>
                <div className={`${project.size === 'large' ? 'lg:col-span-4' : 'lg:col-span-6'
                  } lg:pl-8`}>
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4 block">{project.category}</span>
                  <h4 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 md:mb-6 leading-tight text-balance">{project.title}</h4>
                  <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed mb-6 md:mb-8">
                    {project.description}
                  </p>
                  <Link href="#" className="inline-flex items-center gap-4 font-bold text-[10px] md:text-sm tracking-widest uppercase hover:gap-6 transition-all group">
                    Live Case Study <ArrowRight className="text-primary w-4 h-4 md:w-5 md:h-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative Section - Impact */}
      <section className="py-24 md:py-40 px-4 md:px-6 lg:px-8 bg-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-center">
            <div className="lg:col-span-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-8 md:mb-12 block ml-1">The Result</span>
              <h3 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 md:mb-12 leading-[1.1] text-balance">Engineering for massive <span className="font-serif italic font-normal text-white/40">scale</span>.</h3>
              <p className="text-lg md:text-xl text-white/50 font-light leading-relaxed max-w-xl">
                Our work isn't just about features; it's about building the resilience required to support millions of users across the East African digital ecosystem.
              </p>
            </div>
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-10 md:gap-12">
                <div>
                  <div className="text-4xl md:text-6xl font-bold tracking-tighter mb-2 md:mb-4 text-primary">40%</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">Avg Efficiency Gain</div>
                </div>
                <div>
                  <div className="text-4xl md:text-6xl font-bold tracking-tighter mb-2 md:mb-4 text-primary">99.9%</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">Infrastructure Uptime</div>
                </div>
                <div>
                  <div className="text-4xl md:text-6xl font-bold tracking-tighter mb-2 md:mb-4 text-primary">M+</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">Active Daily Users</div>
                </div>
                <div>
                  <div className="text-4xl md:text-6xl font-bold tracking-tighter mb-2 md:mb-4 text-primary">150+</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">Regional Launches</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-40 px-4 md:px-6 lg:px-8 bg-white border-t border-black/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.5em] text-primary mb-8 md:mb-12">Next Project</h2>
          <h3 className="text-5xl md:text-8xl font-bold tracking-tighter mb-10 md:mb-16 text-balance leading-tight">Your vision. <br />Our architects.</h3>
          <Link
            href="/contact"
            className="inline-flex flex-col md:flex-row items-center gap-6 text-xl md:text-2xl font-bold tracking-tight group"
          >
            <span>Start a Consultation</span>
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary text-white flex items-center justify-center group-hover:bg-black transition-colors">
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
            </div>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

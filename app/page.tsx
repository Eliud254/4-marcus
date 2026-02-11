'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  const stats = [
    { number: '50+', label: 'Projects Delivered' },
    { number: '100+', label: 'Clients Served' },
    { number: '25+', label: 'Team Members' },
  ]

  return (
    <main className="bg-[#fcfcfc] min-h-screen selection:bg-primary/20 text-[#1a1a1a]">
      <Navigation />

      {/* Editorial & Typography-Led Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white pt-24 pb-12">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent z-10 md:via-white/80"></div>
          <div className="absolute right-0 top-0 w-full md:w-1/2 h-full bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200')] bg-cover bg-center grayscale opacity-[0.05] md:opacity-10"></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="w-12 h-[1px] bg-primary"></span>
              <span className="text-secondary-foreground/60 font-bold uppercase tracking-[0.3em] text-[10px]">
                Solutions Engineers
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-10 tracking-tight leading-[0.85] text-foreground text-balance">
              Engineering <br />
              <span className="font-serif italic font-normal text-primary underline decoration-black/5 underline-offset-8">digital</span> futures.
            </h1>

            <p className="text-xl md:text-3xl text-muted-foreground/80 font-light leading-relaxed max-w-2xl mb-12 italic">
              A premier consulting firm delivering strategic digital innovation and custom infrastructure across East Africa.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-8"
            >
              <Link
                href="/contact"
                className="group flex items-center gap-6 bg-foreground text-background px-8 py-5 md:px-10 md:py-6 rounded-full font-bold text-base md:text-lg hover:bg-primary transition-all shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)]"
              >
                Start a Conversation
                <ArrowRight size={20} className="group-hover:translate-x-3 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Subtle Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block">
          <div className="flex flex-col items-center gap-3">
            <span className="text-[10px] uppercase tracking-widest font-bold opacity-20 rotate-90 mb-10 origin-left">Explore</span>
            <div className="w-[1px] h-16 bg-black/[0.05]"></div>
          </div>
        </div>
      </section>

      {/* Stats - Brutalist Minimalism */}
      <section className="py-24 border-b border-black/[0.03] bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 sm:gap-16 text-left">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col gap-4 border-l border-black/5 pl-8"
              >
                <div className="text-5xl md:text-6xl font-bold tracking-tighter text-foreground">{stat.number}</div>
                <div className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-primary">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work - Asymmetrical Layout */}
      <section className="py-40 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-24 md:mb-32 gap-8 md:gap-12"
          >
            <div className="max-w-3xl">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-6 md:mb-8 ml-1">Selected Works</h2>
              <h3 className="text-5xl md:text-8xl font-bold tracking-tight leading-[0.9]">Crafting high-performance <span className="font-serif italic font-normal text-muted-foreground/40">platforms</span>.</h3>
            </div>
            <Link href="/work" className="text-[10px] font-bold uppercase tracking-[0.2em] border-b-2 border-primary pb-2 hover:text-primary transition-all w-fit">
              View All Projects
            </Link>
          </motion.div>

          <div className="space-y-24 md:space-y-40">
            {/* Project 1 - Large */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-center"
            >
              <div className="lg:col-span-8 group overflow-hidden bg-slate-100 rounded-sm">
                <div
                  className="aspect-[4/3] md:aspect-[21/9] w-full bg-cover bg-center grayscale hover:grayscale-0 hover:scale-105 transition-all duration-1000 ease-in-out cursor-pointer"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1661956602116-aa6865609028?w=1200')" }}
                ></div>
              </div>
              <div className="lg:col-span-4 lg:pl-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4 block">Retail Technology</span>
                <h4 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 md:mb-6">Global E-Commerce Transformation</h4>
                <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed mb-6 md:mb-8">
                  A complete digital overhaul for East Africa's leading retail chain, integrating real-time stock management with a seamless mobile experience.
                </p>
                <Link href="#" className="inline-flex items-center gap-4 font-bold text-[10px] tracking-widest uppercase hover:gap-6 transition-all group">
                  Case Study <ArrowRight size={14} className="text-primary" />
                </Link>
              </div>
            </motion.div>

            {/* Project 2 & 3 - Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100 rounded-sm mb-10">
                  <div
                    className="w-full h-full bg-cover bg-center grayscale hover:grayscale-0 hover:scale-105 transition-all duration-1000 ease-in-out cursor-pointer"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800')" }}
                  ></div>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4 block">Financial Services</span>
                  <h4 className="text-3xl font-bold tracking-tight mb-4">Secured Mobile Banking Suite</h4>
                  <p className="text-muted-foreground/80 font-light leading-relaxed">
                    Bank-grade mobile solutions focusing on accessibility and local currency integration across regional markets.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "100px" }}
                transition={{ delay: 0.2 }}
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100 rounded-sm mb-10">
                  <div
                    className="w-full h-full bg-cover bg-center grayscale hover:grayscale-0 hover:scale-105 transition-all duration-1000 ease-in-out cursor-pointer"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800')" }}
                  ></div>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4 block">Data Infrastructure</span>
                  <h4 className="text-3xl font-bold tracking-tight mb-4">Enterprise Insights Dashboard</h4>
                  <p className="text-muted-foreground/80 font-light leading-relaxed">
                    A custom data visualization layer for government agencies to track infrastructure development ROI in real-time.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Editorial Style */}
      <section className="py-24 md:py-40 px-4 md:px-6 lg:px-8 bg-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 md:mb-32">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-8 block ml-1">Capabilities</span>
            <h3 className="text-5xl md:text-8xl font-bold tracking-tight max-w-4xl leading-[0.9]">
              Bridging the gap between <span className="font-serif italic font-normal text-white/40">ambition</span> and execution.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
            <div className="space-y-16 md:space-y-24">
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                <h4 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Custom Software Engineering</h4>
                <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed mb-8">
                  We build resilient infrastructure and user-centric applications that stand the test of time and scale with your user base.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="px-4 py-1 rounded-full border border-white/10 text-[10px] uppercase font-bold tracking-widest">Scalability</span>
                  <span className="px-4 py-1 rounded-full border border-white/10 text-[10px] uppercase font-bold tracking-widest">Security</span>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                <h4 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Digital Transformation Strategy</h4>
                <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed mb-8">
                  Our consultants help legacy organizations navigate the complexities of digital adoption with actionable roadmaps.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="px-4 py-1 rounded-full border border-white/10 text-[10px] uppercase font-bold tracking-widest">Consulting</span>
                  <span className="px-4 py-1 rounded-full border border-white/10 text-[10px] uppercase font-bold tracking-widest">ROI</span>
                </div>
              </motion.div>
            </div>

            <div className="relative pt-20 hidden lg:block">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[150px] rounded-full"></div>
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200"
                alt="Expertise"
                className="rounded-sm grayscale object-cover h-[600px] relative z-10 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Simplified Testimonials */}
      <section className="py-24 md:py-40 px-4 md:px-6 lg:px-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 items-top gap-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-8 md:mb-12 block ml-1">Client Voice</span>
              <blockquote className="text-3xl md:text-5xl font-light italic tracking-tight leading-snug text-foreground/90 text-balance">
                "4Marcus didn't just write code; they transformed how we think about our digital presence in the East African market. Their engineering rigor is second to none."
              </blockquote>
              <div className="mt-8 md:mt-12 flex items-center gap-6">
                <div className="w-12 md:w-16 h-[2px] bg-primary"></div>
                <div>
                  <div className="text-lg md:text-xl font-bold tracking-tight">Sarah Johnson</div>
                  <div className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/60">CTO, TechCorp Infrastructure</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

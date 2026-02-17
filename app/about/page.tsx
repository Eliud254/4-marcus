'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      title: 'Architectural Thinking',
      description: 'We approach every digital challenge with an engineer\'s precision and a strategist\'s foresight.',
    },
    {
      title: 'Global Reach',
      description: 'Leveraging diverse perspectives to scale local innovations into global solutions.',
    },
    {
      title: 'Radical Transparency',
      description: 'We believe in honest, clear communication about technical constraints and project timelines.',
    },
  ]

  const leadership = [
    {
      name: 'Abel Amare',
      role: 'Head of Development and Strategy',
      bio: '10+ years of leadership in enterprise architecture, driving digital transformation and technical innovation across global markets.',
    },
    {
      name: 'Nelson Wamalwa',
      role: 'Technical Operations Lead',
      bio: '8+ years of expertise in technical operations and strategic growth, specializing in scaling agile teams and optimizing digital ecosystems.',
    },
    {
      name: 'Joseph Akaro',
      role: 'Senior Software Engineer',
      bio: '7+ years engineering high-scale infrastructure solutions, with a deep focus on fintech systems and payment rails in emerging economies.',
    },
    {
      name: 'Eliud Obure',
      role: 'Software Engineer | Startup Strategy & Growth Advisor',
      bio: '5+ years architecting distributed cloud-native systems, whilst advising early-stage startups on scalable technology stacks and growth strategies.',
    },
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
                Our Philosophy
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold mb-10 md:mb-12 tracking-tight leading-[0.85] text-balance">
              Built on <span className="font-serif italic font-normal text-primary">engineering</span> rigor.
            </h1>

            <p className="text-xl md:text-4xl text-muted-foreground font-light leading-snug max-w-4xl italic">
              "We don't just solve technical problems; we build the digital infrastructure that empowers a continent's next generation of innovators."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-24 md:py-40 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
          <div className="lg:col-span-5">
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-8 md:mb-12">The Story</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 md:mb-10 leading-[1.1] text-balance">Bridging technical gaps globally since 2021.</h3>
            <p className="text-lg md:text-xl text-muted-foreground/80 font-light leading-relaxed mb-6">
              4Marcus was born from the vision of four friends across Kenya, Ethiopia, and South Sudan—software engineers united by a single mission: to build world-class digital infrastructure for a global stage.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground/80 font-light leading-relaxed">
              What started as a collaboration between friends has evolved into a strategic partner for organizations that require more than just vendors—they require architects.
            </p>
          </div>
          <div className="lg:col-span-1 border-l border-black/[0.03] hidden lg:block"></div>
          <div className="lg:col-span-6">
            <div className="aspect-[4/5] overflow-hidden rounded-sm bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200"
                alt="Collaboration"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            <div className="mt-8 grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-bold tracking-tighter mb-1">4+</div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Years in Market</div>
              </div>
              <div>
                <div className="text-4xl font-bold tracking-tighter mb-1">3</div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Global Hubs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Pillars */}
      <section className="py-24 md:py-40 px-4 md:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 md:mb-32 max-w-3xl mx-auto">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-8 md:mb-12">Core Values</h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] text-balance">The principles that drive our <span className="font-serif italic font-normal text-white/40">conviction</span>.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-primary font-serif italic text-3xl md:text-4xl mb-6 md:mb-8">0{i + 1}</div>
                <h4 className="text-xl md:text-2xl font-bold tracking-tight mb-4 md:mb-6">{v.title}</h4>
                <p className="text-white/50 text-base md:text-lg font-light leading-relaxed">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership - Minimalist List */}
      <section className="py-24 md:py-40 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 md:mb-32 text-center md:text-left">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-8 md:mb-12">Partners</h2>
            <h3 className="text-5xl md:text-6xl font-bold tracking-tight">Our <span className="font-serif italic font-normal text-muted-foreground/30">Leadership</span>.</h3>
          </div>

          <div className="space-y-0">
            {leadership.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="group grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 py-12 md:py-16 border-b border-black/5 hover:bg-black/[0.01] transition-colors"
              >
                <div className="md:col-span-4">
                  <h4 className="text-2xl md:text-3xl font-bold tracking-tight group-hover:text-primary transition-colors">{m.name}</h4>
                  <p className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-muted-foreground mt-2">{m.role}</p>
                </div>
                <div className="md:col-span-7">
                  <p className="text-lg md:text-xl font-light text-muted-foreground leading-relaxed italic border-l border-primary/20 pl-6 md:pl-8">
                    "{m.bio}"
                  </p>
                </div>
                <div className="md:col-span-1 flex items-center justify-end hidden md:flex">
                  <ArrowRight size={24} className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-primary" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-40 px-4 md:px-6 lg:px-8 bg-white border-t border-black/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.5em] text-primary mb-8 md:mb-12">Next Steps</h2>
          <h3 className="text-5xl md:text-8xl font-bold tracking-tighter mb-10 md:mb-16 text-balance leading-tight">Work with <br />experts.</h3>
          <Link
            href="/contact"
            className="inline-flex flex-col md:flex-row items-center gap-6 text-xl md:text-2xl font-bold tracking-tight group"
          >
            <span>Connect with a Lead</span>
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

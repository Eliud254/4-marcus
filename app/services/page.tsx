'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function ServicesPage() {
  const serviceGroups = [
    {
      category: 'Strategic Planning',
      services: [
        {
          title: 'Digital Transformation Roadmap',
          description: 'A comprehensive audit of legacy systems and the creation of a phased adoption strategy for modern digital infrastructure.',
          deliverables: ['Systems Audit', 'Maturity Assessment', 'Implementation Roadmap']
        },
        {
          title: 'Global Market Expansion Architecture',
          description: 'Specialized technical consulting for organizations looking to expand across complex international markets with unique regulatory and infrastructure requirements.',
          deliverables: ['Regulatory Tech Audit', 'Infrastructure Localization', 'Connectivity Strategy']
        }
      ]
    },
    {
      category: 'Engineering & Delivery',
      services: [
        {
          title: 'Enterprise Software Engineering',
          description: 'Building resilient, distributed systems using modern cloud-native architectures tailored for high-availability in emerging markets.',
          deliverables: ['Custom Application Suits', 'API Ecosystems', 'Cloud Migration']
        },
        {
          title: 'Data & Insights Infrastructure',
          description: 'Designing the pipelines and visualization layers necessary for real-time operational oversight and data-driven decision making.',
          deliverables: ['Data Lake Architecture', 'Real-time Dashboards', 'Predictive Modeling']
        }
      ]
    },
    {
      category: 'Resilience & Scale',
      services: [
        {
          title: 'Critical Infrastructure Security',
          description: 'Hardening digital assets against regional and global threats with enterprise-grade security protocols and continuous monitoring.',
          deliverables: ['Vulnerability Assessment', 'Hardening Protocols', 'Security Operations']
        },
        {
          title: 'Reliability Engineering (SRE)',
          description: 'Implementing the practices and tools necessary to maintain 99.9% uptime in complex infrastructure environments.',
          deliverables: ['CI/CD Optimization', 'Failover Architecture', 'Performance Tuning']
        }
      ]
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
                Our Expertise
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold mb-10 md:mb-12 tracking-tight leading-[0.85] text-balance">
              Strategic <span className="font-serif italic font-normal text-primary">solutions</span> for scale.
            </h1>

            <p className="text-xl md:text-3xl text-muted-foreground font-light leading-relaxed max-w-3xl italic">
              From initial strategy to deep technical implementation, we provide the architectural foundation for digital resilience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Narrative & List */}
      <section className="py-24 md:py-40 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-32 md:space-y-48">
            {serviceGroups.map((group, groupIdx) => (
              <div key={groupIdx}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-24 items-baseline">
                  <div className="lg:col-span-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-4 md:mb-6 block ml-1">{group.category}</span>
                  </div>
                  <div className="lg:col-span-8">
                    <div className="h-[1px] bg-black/5 w-full"></div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
                  {group.services.map((service, sIdx) => (
                    <motion.div
                      key={sIdx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: sIdx * 0.1 }}
                      className="space-y-6 md:space-y-10"
                    >
                      <h4 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">{service.title}</h4>
                      <p className="text-lg md:text-xl text-muted-foreground/80 font-light leading-relaxed">
                        {service.description}
                      </p>
                      <div className="pt-8 border-t border-black/[0.03]">
                        <h5 className="text-[10px] font-bold uppercase tracking-widest text-primary/60 mb-6">Deliverables</h5>
                        <div className="flex flex-wrap gap-x-8 md:gap-x-12 gap-y-4">
                          {service.deliverables.map((d, dIdx) => (
                            <div key={dIdx} className="flex items-center gap-3">
                              <div className="w-1.5 h-1.5 bg-primary/20 rounded-full"></div>
                              <span className="text-xs md:text-sm font-medium tracking-tight text-foreground/80">{d}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology - Branded Experience */}
      <section className="py-24 md:py-40 px-4 md:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-center">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-8 md:mb-12 block ml-1">The Methodology</span>
              <h3 className="text-5xl md:text-6xl font-bold tracking-tight mb-8 md:mb-12 leading-[1.1] text-balance">The Discovery-to-Scale <span className="font-serif italic font-normal text-white/40">Framework</span>.</h3>
              <p className="text-lg md:text-xl text-white/50 font-light leading-relaxed">
                We don't operate in silos. Every partnership begins with deep immersion into your operational realities, followed by rapid prototyping and industrial-grade deployment.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="space-y-4">
                {[
                  { step: 'Discovery', description: 'Intensive stakeholder workshops and systems auditing.' },
                  { step: 'Architecture', description: 'Detailed technical blueprints and strategic roadmapping.' },
                  { step: 'Execution', description: 'Agile sprints with continuous integration and stakeholder feedback.' },
                  { step: 'Resilience', description: 'Final hardening, SRE implementation, and handover.' }
                ].map((m, i) => (
                  <div key={i} className="group p-8 md:p-10 border border-white/5 hover:bg-white/[0.03] transition-colors rounded-sm flex items-center justify-between">
                    <div className="flex items-center gap-8 md:gap-12">
                      <span className="text-primary font-serif italic text-2xl md:text-3xl">0{i + 1}</span>
                      <div>
                        <h4 className="text-xl md:text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">{m.step}</h4>
                        <p className="text-white/30 text-[10px] md:text-sm mt-1">{m.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-40 px-4 md:px-6 lg:px-8 bg-white border-t border-black/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.5em] text-primary mb-8 md:mb-12">Engagement</h2>
          <h3 className="text-5xl md:text-8xl font-bold tracking-tighter mb-10 md:mb-16 text-balance leading-tight">Define your <br />roadmap.</h3>
          <Link
            href="/contact"
            className="inline-flex flex-col md:flex-row items-center gap-6 text-xl md:text-2xl font-bold tracking-tight group"
          >
            <span>Book a Discovery Call</span>
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

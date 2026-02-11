'use client'

import React, { useState } from "react"
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: '',
    service: 'Strategy',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you. We have received your inquiry.')
    setFormData({ name: '', email: '', company: '', industry: '', service: 'Strategy', message: '' })
  }

  const regionalOffices = [
    {
      country: 'Kenya',
      city: 'Nairobi',
      phones: ['+254 799 666 988', '+254 715 076 055'],
      address: 'Westlands Tech District'
    },
    {
      country: 'South Sudan',
      city: 'Juba',
      phones: ['+211 920 710 777'],
      address: 'Airport Road Business Center'
    },
    {
      country: 'Ethiopia',
      city: 'Addis Ababa',
      phones: ['+251 713 660 299'],
      address: 'Bole Innovation Hub'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <main className="bg-[#fcfcfc] min-h-screen selection:bg-primary/20 text-[#1a1a1a]">
      <Navigation />

      {/* Minimalism & Typography Hero */}
      <section className="relative pt-32 md:pt-48 pb-24 md:pb-32 px-4 md:px-6 lg:px-8 bg-white border-b border-black/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold mb-8 md:mb-10 tracking-tight leading-[0.85] text-balance">
              Let's build <span className="font-serif italic font-normal text-primary">something</span> that matters.
            </h1>
            <p className="text-xl md:text-3xl text-muted-foreground/80 font-light leading-relaxed max-w-3xl">
              From Nairobi to Juba, we bridge the gap between world-class engineering and local market realities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Strategic Contact Layout */}
      <section className="py-32 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">

            {/* Left: Regional Infrastructure */}
            <div className="lg:col-span-5 space-y-24">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
                className="space-y-16"
              >
                <div>
                  <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-8 md:mb-12">Regional Hubs</h2>

                  <div className="space-y-12 md:space-y-16">
                    {regionalOffices.map((office, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="group"
                      >
                        <div className="flex items-baseline justify-between mb-4 md:mb-6 border-b border-black/10 pb-4">
                          <h3 className="text-2xl md:text-3xl font-bold tracking-tighter">{office.city}</h3>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                            {office.country}
                          </span>
                        </div>
                        <div className="space-y-4">
                          <p className="text-[10px] md:text-sm font-medium text-muted-foreground/60 uppercase tracking-widest">{office.address}</p>
                          <div className="flex flex-col gap-2">
                            {office.phones.map((phone, pIdx) => (
                              <a
                                key={pIdx}
                                href={`tel:${phone.replace(/\s+/g, '')}`}
                                className="text-lg md:text-xl font-medium tracking-tight hover:text-primary transition-colors inline-flex items-center gap-2 group/link"
                              >
                                {phone}
                                <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-primary" />
                              </a>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 text-center lg:text-left">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground mb-4">Direct Inquiry</h4>
                  <a href="mailto:hello@4marcus.com" className="text-3xl md:text-5xl font-light hover:text-primary transition-colors tracking-tighter decoration-1 underline-offset-8 hover:underline block break-words">
                    hello@4marcus.com
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right: The Proposal Form */}
            <div className="lg:col-span-1 border-l border-black/[0.03] hidden lg:block"></div>

            <div className="lg:col-span-6">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="lg:sticky lg:top-40 bg-white p-8 md:p-16 rounded-[1.5rem] md:rounded-[2rem] border border-black/[0.03] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)]"
              >
                <div className="mb-12 md:mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Tell us your vision.</h2>
                  <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed">
                    Brief us on your requirements. Our partners will review and respond within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-12">
                  <div className="space-y-10">
                    <div className="flex flex-col space-y-2">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/60">Full Name</span>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-transparent border-b border-black/10 py-3 focus:border-primary focus:outline-none transition-all text-xl font-medium placeholder:text-black/10"
                        placeholder="e.g. Marcus Aurelius"
                      />
                    </div>

                    <div className="flex flex-col space-y-2">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/60">Email</span>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-transparent border-b border-black/10 py-3 focus:border-primary focus:outline-none transition-all text-xl font-medium placeholder:text-black/10"
                        placeholder="email@example.com"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div className="flex flex-col space-y-2">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/60">Organization</span>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="bg-transparent border-b border-black/10 py-3 focus:border-primary focus:outline-none transition-all text-xl font-medium placeholder:text-black/10"
                          placeholder="Your Company"
                        />
                      </div>
                      <div className="flex flex-col space-y-2">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/60">Area of Interest</span>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="bg-transparent border-b border-black/10 py-3 focus:border-primary focus:outline-none transition-all text-xl font-medium appearance-none cursor-pointer"
                        >
                          <option value="Strategy">Digital Strategy</option>
                          <option value="Development">Custom Development</option>
                          <option value="Infrastructure">Infrastructure</option>
                          <option value="Optimization">Growth Optimization</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col space-y-2">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/60">Project Outline</span>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={3}
                        className="bg-transparent border-b border-black/10 py-3 focus:border-primary focus:outline-none transition-all text-xl font-medium placeholder:text-black/10 resize-none"
                        placeholder="Tell us about your goals..."
                      />
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ x: 10 }}
                    type="submit"
                    className="flex flex-col md:flex-row items-center gap-6 text-xl md:text-2xl font-bold tracking-tight group"
                  >
                    <span>Send Inquiry</span>
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary text-white flex items-center justify-center group-hover:bg-black transition-colors">
                      <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                  </motion.button>
                </form>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

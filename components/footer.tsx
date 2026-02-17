'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react'
import Logo from './logo'

const Footer = () => {
  const services = [
    { label: 'Digital Strategy', href: '#' },
    { label: 'Custom Development', href: '#' },
    { label: 'Cloud Infrastructure', href: '#' },
    { label: 'Tech Consulting', href: '#' },
  ]

  const company = [
    { label: 'About Us', href: '/about' },
    { label: 'Our Work', href: '/work' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: '/contact' },
  ]



  return (
    <footer className="bg-[#0a0a0a] text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Logo dark className="mb-8" />
            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-md">
              A premier technology consulting firm delivering innovative digital solutions that drive business transformation and sustainable growth.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 text-sm text-white/60">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 text-accent flex-shrink-0" />
                <div>
                  <div className="text-white font-medium mb-1">Nairobi, Kenya</div>
                  <div>+254 799 666 988</div>
                  <div>+254 715 076 055</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 text-accent flex-shrink-0" />
                <div>
                  <div className="text-white font-medium mb-1">Juba, South Sudan</div>
                  <div>+211 920 710 777</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 text-accent flex-shrink-0" />
                <div>
                  <div className="text-white font-medium mb-1">Addis Ababa, Ethiopia</div>
                  <div>+251 713 660 299</div>
                </div>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <Mail size={16} className="text-accent flex-shrink-0" />
                <span>hello@4marcus.com</span>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-accent transition-colors inline-block hover:translate-x-1 duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-accent transition-colors inline-block hover:translate-x-1 duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-white/50">
            <p>© 2025 4marcus Consulting. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="#" className="hover:text-accent transition-colors">Privacy Policy</Link>
              <span className="text-white/30">•</span>
              <Link href="#" className="hover:text-accent transition-colors">Terms of Service</Link>
            </div>
          </div>

          {/* Social Links */}

        </div>
      </div>
    </footer>
  )
}

export default Footer

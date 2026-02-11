'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import Logo from './logo'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Work', href: '/work' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-black/[0.03]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center translate-y-[-2px]">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Logo />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="group flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] hover:text-primary transition-all"
            >
              Start a Conversation
              <div className="w-10 h-10 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                <ArrowRight size={14} />
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground/60 hover:text-primary transition-colors"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="overflow-hidden md:hidden bg-white border-t border-black/[0.03]"
        >
          <div className="py-8 space-y-6 flex flex-col items-center">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[11px] font-bold uppercase tracking-[0.3em] text-foreground/40 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-6 w-full border-t border-black/[0.03] flex justify-center">
              <Link
                href="/contact"
                className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-primary"
                onClick={() => setIsOpen(false)}
              >
                Start a Conversation <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </nav>
  )
}

export default Navigation

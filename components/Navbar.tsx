'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full bg-brand-dark backdrop-blur-sm z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-3">
            <button
              onClick={() => scrollToSection('hero')}
              className="flex items-center space-x-3"
            >
              <div className="relative w-10 h-10">
                <Image
                  src="/apex-logo.png"
                  alt="Apex Motor Intl Logo"
                  fill
                  className="object-contain"
                  onError={(e) => {
                    // Fallback to text brand mark if image fails to load
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>
              <span className="text-xl font-bold text-brand-accent">
                Apex Motor Intl
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('services')}
                className="text-brand-text hover:text-brand-accent transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-brand-text hover:text-brand-accent transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-brand-text hover:text-brand-accent transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-brand-dark">
            <button
              onClick={() => scrollToSection('services')}
              className="block px-3 py-2 text-brand-text hover:text-brand-accent transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block px-3 py-2 text-brand-text hover:text-brand-accent transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

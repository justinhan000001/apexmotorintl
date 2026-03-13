'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const nav = [
    { label: 'Home', href: '/en' },
    { label: 'Products', href: '/en/products' },
    { label: 'Dealers', href: '/en/dealers' },
    { label: 'Service', href: '/en/service' },
    { label: 'About', href: '/en/about' },
    { label: 'Contact', href: '/en/contact#contact' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-brand-black/85 backdrop-blur-md z-50 border-b border-white/10">
      <div className="container-page">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-3">
            <Link href="/en" className="flex items-center space-x-3">
              <div className="relative w-10 h-10">
                <Image
                  src="/apex-logo.png"
                  alt="Apex Motor Intl Logo"
                  fill
                  className="object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>
              <span className="text-lg sm:text-xl font-semibold tracking-tight text-brand-text">
                Apex Motor Intl
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-brand-muted hover:text-brand-text transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-brand-text hover:text-white transition-colors"
              aria-label="Toggle menu"
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-brand-black/95 border-b border-white/10">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-brand-text/90 hover:text-brand-text transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

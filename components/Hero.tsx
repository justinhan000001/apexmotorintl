'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-brand-light">
      {/* Top and bottom framing lines */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-brand-dark"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-dark"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-32 h-32">
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
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-brand-dark mb-6">
            Performance. Precision. Passion.
          </h1>
          
          <p className="text-xl sm:text-2xl lg:text-3xl text-brand-dark mb-8 font-light">
            Motorcycle Repair & Race Pit Service
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary text-lg"
            >
              Book Service
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

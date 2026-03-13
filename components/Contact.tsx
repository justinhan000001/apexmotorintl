'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [formStatus, setFormStatus] = useState<'idle' | 'sent'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const subject = encodeURIComponent(`Website inquiry from ${formData.name || 'Visitor'}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    )

    // Simple + deployable without extra services: opens the visitor’s email client.
    window.location.href = `mailto:apexmotorintl@gmail.com?subject=${subject}&body=${body}`
    setFormStatus('sent')
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container-page">
        <div className="text-center mb-14">
          <div className="section-kicker">Contact</div>
          <h2 className="section-title mt-3">Let’s talk.</h2>
          <p className="muted mt-4 max-w-2xl mx-auto">
            Questions about bikes, dealer partnerships, or service? Send a message and we’ll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="card">
              <h3 className="text-xl font-semibold tracking-tight text-brand-text">Contact Information</h3>

              <div className="mt-6 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center flex-shrink-0 border border-white/10">
                    <svg className="w-6 h-6 text-brand-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.14em] text-brand-muted">Name</div>
                    <div className="text-brand-text font-semibold">Bingyu Chen</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center flex-shrink-0 border border-white/10">
                    <svg className="w-6 h-6 text-brand-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <a
                      href="tel:909-656-2297"
                      className="text-brand-text hover:text-white transition-colors font-semibold"
                    >
                      909-656-2297
                    </a>
                    <div className="muted text-sm">Phone</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center flex-shrink-0 border border-white/10">
                    <svg className="w-6 h-6 text-brand-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <a
                      href="mailto:apexmotorintl@gmail.com"
                      className="text-brand-text hover:text-white transition-colors font-semibold break-all"
                    >
                      apexmotorintl@gmail.com
                    </a>
                    <div className="muted text-sm">Email</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center flex-shrink-0 border border-white/10">
                    <svg className="w-6 h-6 text-brand-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <a
                      href="https://maps.google.com/?q=720+Olive+Dr+Ste+F+Davis,+CA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-text hover:text-white transition-colors font-semibold"
                    >
                      720 Olive Dr Ste F
                      <br />
                      Davis, CA
                    </a>
                    <div className="muted text-sm">Address</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold tracking-tight text-brand-text mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-text/90 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-brand-text placeholder-white/35 focus:outline-none focus:border-white/25 focus:ring-1 focus:ring-white/15"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-text/90 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-brand-text placeholder-white/35 focus:outline-none focus:border-white/25 focus:ring-1 focus:ring-white/15"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-text/90 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-brand-text placeholder-white/35 focus:outline-none focus:border-white/25 focus:ring-1 focus:ring-white/15 resize-none"
                  placeholder="Tell us what you’re looking for (model interest, dealer inquiry, service need, etc.)"
                />
              </div>

              {formStatus === 'sent' && (
                <div className="rounded-lg border border-white/10 bg-white/5 p-4 text-sm text-brand-text/90">
                  Your email app should open. If it doesn’t, email us directly at{' '}
                  <a className="underline" href="mailto:apexmotorintl@gmail.com">
                    apexmotorintl@gmail.com
                  </a>
                  .
                </div>
              )}

              <button type="submit" className="w-full btn-primary text-lg">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
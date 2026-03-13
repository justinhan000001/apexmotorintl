import Link from 'next/link'
import Contact from '@/components/Contact'

export default function AboutPage() {
  return (
    <div className="pt-16">
      <section className="section-padding">
        <div className="container-page">
          <div className="max-w-3xl">
            <div className="section-kicker">About</div>
            <h1 className="mt-3 text-5xl font-semibold tracking-tight">Apex Motor Intl</h1>
            <p className="muted mt-4 leading-relaxed">
              We focus on electric motorcycles, dealer partnerships, and service support in the U.S. market.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card">
              <div className="text-sm font-semibold text-brand-text">Distributor</div>
              <p className="muted mt-2 text-sm leading-relaxed">
                We bring select electric motorcycles to the U.S. with clear positioning and straightforward communication.
              </p>
            </div>
            <div className="card">
              <div className="text-sm font-semibold text-brand-text">Dealer Network</div>
              <p className="muted mt-2 text-sm leading-relaxed">
                We’re expanding partnerships nationwide with qualified motorcycle and powersports businesses.
              </p>
            </div>
            <div className="card">
              <div className="text-sm font-semibold text-brand-text">Service Support</div>
              <p className="muted mt-2 text-sm leading-relaxed">
                After-sales support and local service capability designed to keep riders confident.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <Link href="#contact" className="btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  )
}


import Link from 'next/link'
import Contact from '@/components/Contact'

export default function AboutPage() {
  return (
    <div className="pt-16">
      <section className="section-padding">
        <div className="container-page">
          <div className="max-w-3xl">
            <div className="section-kicker">About</div>
            <h1 className="mt-3 text-5xl font-semibold tracking-tight">Apex Motor International</h1>
            <p className="muted mt-4 leading-relaxed">
              Apex Motor International is a U.S.-based distributor and service center focused on high-performance electric motorcycles. We support product sales, dealer development, and after-sales service for the U.S. market.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card">
              <div className="text-sm font-semibold text-brand-text">What We Do</div>
              <p className="muted mt-2 text-sm leading-relaxed">
                We represent electric motorcycle products in the U.S. market and support riders with direct product information and partner coordination.
              </p>
            </div>
            <div className="card">
              <div className="text-sm font-semibold text-brand-text">Dealer Development</div>
              <p className="muted mt-2 text-sm leading-relaxed">
                We work with motorcycle and powersports businesses that want to build long-term value in the electric segment.
              </p>
            </div>
            <div className="card">
              <div className="text-sm font-semibold text-brand-text">Rider and Partner Support</div>
              <p className="muted mt-2 text-sm leading-relaxed">
                We help coordinate after-sales support and technical communication so owners and partners can operate with confidence.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link href="#contact" className="btn-primary">Contact Us</Link>
            <Link href="#contact" className="btn-secondary">Email Us</Link>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  )
}


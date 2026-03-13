import Link from 'next/link'
import Contact from '@/components/Contact'

export default function DealersPage() {
  return (
    <div className="pt-16">
      <section className="section-padding">
        <div className="container-page">
          <div className="max-w-3xl">
            <div className="section-kicker">Dealers</div>
            <h1 className="mt-3 text-5xl font-semibold tracking-tight">Dealer Program</h1>
            <p className="muted mt-4 leading-relaxed">
              We are building a dealer network in the United States and welcome qualified partners.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="card">
              <div className="text-sm font-semibold text-brand-text">Why Partner With Us</div>
              <p className="muted mt-2 text-sm leading-relaxed">
                A focused electric motorcycle line, clean brand positioning, and support to help you sell and service confidently.
              </p>
            </div>
            <div className="card">
              <div className="text-sm font-semibold text-brand-text">Who We’re Looking For</div>
              <p className="muted mt-2 text-sm leading-relaxed">
                Motorcycle shops, powersports dealers, and service partners with strong local reach and a customer-first mindset.
              </p>
            </div>
            <div className="card">
              <div className="text-sm font-semibold text-brand-text">Dealer Inquiry</div>
              <p className="muted mt-2 text-sm leading-relaxed">
                Tell us your location, business type, and service capability. We’ll follow up with next steps.
              </p>
              <div className="mt-5">
                <Link href="#contact" className="btn-primary w-full">
                  Contact Us to Become a Dealer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  )
}


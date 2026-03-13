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

          <div className="mt-8 section-shell">
            <h2 className="text-xl font-semibold">Electric Motorcycle Market Opportunity</h2>
            <p className="muted mt-3 leading-relaxed">
              Electric motorcycles are gaining traction as riders look for modern performance platforms and lower mechanical complexity in daily operation. Dealers entering early can build regional leadership while the category is still forming.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="section-shell">
              <div className="text-sm font-semibold text-brand-text">Why Partner With Us</div>
              <ul className="muted mt-3 text-sm leading-relaxed space-y-2">
                <li>Growing electric motorcycle category</li>
                <li>Premium product opportunity</li>
                <li>Service and support coordination</li>
                <li>Long-term dealer growth potential</li>
              </ul>
            </div>
            <div className="section-shell">
              <div className="text-sm font-semibold text-brand-text">Who We’re Looking For</div>
              <ul className="muted mt-3 text-sm leading-relaxed space-y-2">
                <li>Motorcycle shops</li>
                <li>Powersports dealers</li>
                <li>Service centers</li>
                <li>Local riding community partners</li>
              </ul>
            </div>
            <div className="section-shell">
              <div className="text-sm font-semibold text-brand-text">Contact CTA</div>
              <p className="muted mt-2 text-sm leading-relaxed">
                Tell us your location, business type, and service capability. We’ll follow up with the next steps.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <Link href="#contact" className="btn-primary w-full">Contact Us</Link>
                <Link href="#contact" className="btn-secondary w-full">Email Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  )
}


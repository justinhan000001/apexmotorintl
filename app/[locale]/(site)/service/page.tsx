import Link from 'next/link'
import Contact from '@/components/Contact'

export default function ServicePage() {
  return (
    <div className="pt-16">
      <section className="section-padding">
        <div className="container-page">
          <div className="max-w-3xl">
            <div className="section-kicker">Service</div>
            <h1 className="mt-3 text-5xl font-semibold tracking-tight">Service & Support</h1>
            <p className="muted mt-4 leading-relaxed">
              Local service and technical support for owners and dealer partners.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Diagnostics',
              'Maintenance',
              'Repairs',
              'Warranty support',
              'Technical support',
            ].map((item) => (
              <div key={item} className="card">
                <div className="text-sm font-semibold text-brand-text">{item}</div>
                <p className="muted mt-2 text-sm leading-relaxed">
                  Contact us to confirm scheduling, parts, and turnaround based on your model and needs.
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <div className="card flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-brand-text">Need service?</div>
                <div className="muted mt-1 text-sm">Send us your model and issue description, and we’ll respond.</div>
              </div>
              <Link href="#contact" className="btn-primary">
                Contact Us for Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  )
}


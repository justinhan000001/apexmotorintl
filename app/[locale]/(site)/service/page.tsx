import Link from 'next/link'
import Contact from '@/components/Contact'

export default function ServicePage() {
  return (
    <div className="pt-16">
      <section className="section-padding">
        <div className="container-page">
          <div className="max-w-3xl">
            <div className="section-kicker">Service</div>
            <h1 className="mt-3 text-5xl font-semibold tracking-tight">Service Overview</h1>
            <p className="muted mt-4 leading-relaxed">
              Apex Motor International provides dependable after-sales and maintenance support for riders and partners.
            </p>
          </div>

          <div className="mt-8 section-shell">
            <h2 className="text-xl font-semibold">Electric Motorcycle Service Requires Specialized Knowledge</h2>
            <p className="muted mt-3 leading-relaxed">
              Electric platforms combine high-voltage systems, power electronics, software controls, and mechanical components. Apex helps coordinate service communication so riders and dealers get accurate technical direction.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Diagnostics',
              'Maintenance',
              'Repairs',
              'Technical support',
              'After-sales support',
            ].map((item) => (
              <div key={item} className="section-shell">
                <div className="text-sm font-semibold text-brand-text">Available Services</div>
                <div className="mt-2 font-medium">{item}</div>
                <p className="muted mt-2 text-sm leading-relaxed">
                  Contact us to confirm scheduling, parts, and turnaround based on your model and needs.
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="section-shell">
              <h3 className="text-base font-semibold">Technical Support</h3>
              <p className="muted mt-2 text-sm leading-relaxed">
                We assist with technical communication between riders, dealers, and service teams so issues are clearly documented and properly diagnosed.
              </p>
            </div>
            <div className="section-shell">
              <h3 className="text-base font-semibold">Maintenance Guidance</h3>
              <p className="muted mt-2 text-sm leading-relaxed">
                We provide practical guidance on routine checks, battery care, and service timing to improve long-term reliability.
              </p>
            </div>
            <div className="section-shell">
              <h3 className="text-base font-semibold">Diagnostics Assistance</h3>
              <p className="muted mt-2 text-sm leading-relaxed">
                We help collect key fault information and coordinate next-step diagnostics to reduce downtime and avoid guesswork.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <div className="section-shell flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-brand-text">Contact CTA</div>
                <div className="muted mt-1 text-sm">Send us your model and issue description, and we’ll respond.</div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="#contact" className="btn-primary">Contact Us</Link>
                <Link href="#contact" className="btn-secondary">Call Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  )
}


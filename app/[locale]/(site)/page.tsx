import Link from 'next/link'
import Image from 'next/image'
import Contact from '@/components/Contact'
import { products } from '@/data/products'

export default function HomePage() {
  const samurai = products.find((p) => p.id === 'samurai-noir')
  const skyleap = products.find((p) => p.id === 'skyleap')

  return (
    <>
      <div className="pt-16">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/media/hero-rain-bike.png"
              alt="Electric motorcycle in the rain"
              fill
              priority
              className="object-cover opacity-35"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-brand-black/70 via-brand-black/70 to-brand-black" />
            <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_20%_10%,rgba(201,166,107,0.22),transparent_60%),radial-gradient(800px_500px_at_80%_20%,rgba(255,255,255,0.08),transparent_60%)]" />
          </div>
          <div className="container-page section-padding relative">
            <div className="max-w-3xl">
              <div className="section-kicker">Electric motorcycles • Dealer network • Service support</div>
              <h1 className="mt-4 text-5xl sm:text-6xl font-semibold tracking-tight">
                Built for Real Riding
              </h1>
              <p className="muted mt-5 text-lg sm:text-xl leading-relaxed max-w-2xl">
                High-performance electric motorcycles engineered for real terrain and everyday riders.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link href="/en/products" className="btn-primary">Explore Bikes</Link>
                <Link href="#contact" className="btn-secondary">Become a Dealer</Link>
                <Link href="#contact" className="btn-secondary">Contact Us</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Models */}
        <section className="section-padding">
          <div className="container-page">
            <div className="flex items-end justify-between gap-6 flex-col sm:flex-row mb-10">
              <div>
                <div className="section-kicker">Featured Models</div>
                <h2 className="section-title mt-3">Two bikes. One standard.</h2>
              </div>
              <div className="muted text-sm max-w-xl">
                If any information is uncertain (price, availability, configurations), we don’t guess. We’ll confirm details directly.
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {samurai && (
                <div id={samurai.id} className="card">
                  <div className="aspect-[16/10] rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent">
                    <div className="w-full h-full p-6 flex items-end">
                      <div>
                        <div className="section-kicker">Model</div>
                        <div className="mt-2 text-3xl font-semibold tracking-tight">{samurai.name}</div>
                      </div>
                    </div>
                  </div>
                  <p className="muted mt-5 text-sm leading-relaxed">{samurai.description}</p>
                  {samurai.specs?.length ? (
                    <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
                      {samurai.specs.map((s) => (
                        <div key={s.label} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                          <div className="text-xs uppercase tracking-[0.14em] text-brand-muted">{s.label}</div>
                          <div className="mt-1 font-semibold text-brand-text">{s.value}</div>
                        </div>
                      ))}
                    </div>
                  ) : null}
                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <Link href="/en/products" className="btn-secondary">View on Products</Link>
                    <Link href="#contact" className="btn-primary">Contact Us</Link>
                  </div>
                </div>
              )}

              {skyleap && (
                <div id={skyleap.id} className="card">
                  <div className="aspect-[16/10] rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent">
                    <div className="w-full h-full p-6 flex items-end">
                      <div>
                        <div className="section-kicker">Model</div>
                        <div className="mt-2 text-3xl font-semibold tracking-tight">{skyleap.name}</div>
                      </div>
                    </div>
                  </div>
                  <p className="muted mt-5 text-sm leading-relaxed">{skyleap.description}</p>
                  <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="text-sm text-brand-text font-semibold">Key specs and availability are confirmed on request.</div>
                    <div className="muted mt-1 text-sm">Contact us for details.</div>
                  </div>
                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <Link href="/en/products" className="btn-secondary">View on Products</Link>
                    <Link href="#contact" className="btn-primary">Contact Us for Details</Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding">
          <div className="container-page">
            <div className="section-kicker">Why choose us</div>
            <h2 className="section-title mt-3">Built around performance and support.</h2>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card">
                <div className="text-sm font-semibold text-brand-text">Performance</div>
                <p className="muted mt-2 text-sm leading-relaxed">
                  High-torque electric motors designed for real riding.
                </p>
              </div>
              <div className="card">
                <div className="text-sm font-semibold text-brand-text">Lightweight</div>
                <p className="muted mt-2 text-sm leading-relaxed">
                  Advanced lightweight construction for better control.
                </p>
              </div>
              <div className="card">
                <div className="text-sm font-semibold text-brand-text">Service Support</div>
                <p className="muted mt-2 text-sm leading-relaxed">
                  Local service and technical support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Dealer Network */}
        <section className="section-padding">
          <div className="container-page">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="section-kicker">Dealer network</div>
                <h2 className="section-title mt-3">We’re expanding across the United States.</h2>
                <p className="muted mt-4 leading-relaxed">
                  Motorcycle shops, powersports dealers, and service partners are welcome to contact us.
                </p>
              </div>
              <div className="lg:col-span-5">
                <div className="card">
                  <div className="text-sm font-semibold text-brand-text">Become a Dealer</div>
                  <p className="muted mt-2 text-sm leading-relaxed">
                    Share your location, business type, and coverage area. We’ll follow up with next steps.
                  </p>
                  <div className="mt-5">
                    <Link href="#contact" className="btn-primary w-full">Become a Dealer</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Center */}
        <section className="section-padding">
          <div className="container-page">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="card">
                  <div className="text-sm font-semibold text-brand-text">Service Center</div>
                  <ul className="mt-4 space-y-2 text-sm text-brand-text/90">
                    <li className="muted">Diagnostics</li>
                    <li className="muted">Maintenance</li>
                    <li className="muted">Repairs</li>
                    <li className="muted">Technical support</li>
                    <li className="muted">After-sales support</li>
                  </ul>
                  <div className="mt-5">
                    <Link href="#contact" className="btn-primary w-full">Book Service</Link>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7 order-1 lg:order-2">
                <div className="section-kicker">Service</div>
                <h2 className="section-title mt-3">Support that keeps you riding.</h2>
                <p className="muted mt-4 leading-relaxed">
                  From diagnostics to after-sales support, our U.S. service capability helps owners and dealer partners stay confident.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </div>
    </>
  )
}

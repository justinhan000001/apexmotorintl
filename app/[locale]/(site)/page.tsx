import Link from 'next/link'
import Image from 'next/image'
import Contact from '@/components/Contact'
import { products } from '@/data/products'

export default function HomePage() {
  const samurai = products.find((p) => p.id === 'samurai-noir')
  const skyleap = products.find((p) => p.id === 'skyleap')

  return (
    <div className="pt-16">
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
          <div className="max-w-4xl py-6 sm:py-10">
            <h1 className="mt-4 text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.02]">
              Electric Motorcycles for the U.S. Market
            </h1>
            <p className="mt-6 text-brand-accent font-medium tracking-wide">
              Sales • Dealer Network • After-Sales Support
            </p>
            <p className="muted mt-5 text-lg leading-relaxed max-w-3xl">
              Apex Motor International connects riders, dealers, and service partners with performance-focused electric motorcycles built for modern riding.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Link href="#contact" className="btn-primary">Contact Us</Link>
              <Link href="/en/samurai-noir" className="btn-secondary">Explore Bikes</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-page">
          <div className="max-w-4xl">
            <h2 className="section-title mt-3">Built around three priorities: Product. Partnership. Support.</h2>
            <p className="muted mt-4 max-w-4xl leading-relaxed">
              This is not just about selling motorcycles. It is about building a stronger electric motorcycle presence through product distribution, dealer development, and dependable after-sales support.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-page">
          <div>
            <div className="section-kicker">Featured Models</div>
            <h2 className="section-title mt-3">Current Lineup</h2>
            <p className="muted mt-4 leading-relaxed max-w-3xl">
              Two platforms. Two different rider profiles. One focus on performance, usability, and long-term market potential.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {samurai && (
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-white/5">
                  <Image
                    src="/media/samurai-home.png"
                    alt="Samurai Noir"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight">Samurai Noir</h3>
                <p className="muted mt-3 leading-relaxed">
                  A lightweight electric motorcycle with premium construction, fast response, and strong road-focused performance.
                </p>
                <div className="mt-5">
                  <Link href="/en/samurai-noir" className="btn-primary">More Details</Link>
                </div>
              </div>
            )}
            {skyleap && (
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-white/5">
                  <Image
                    src="/media/skyleap-home.png"
                    alt="SkyLeap"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight">SkyLeap</h3>
                <p className="muted mt-3 leading-relaxed">
                  A versatile platform designed for riders seeking practical electric performance with broader use potential.
                </p>
                <div className="mt-5">
                  <Link href="/en/skyleap" className="btn-primary">More Details</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-page">
          <div className="border-t border-white/10 pt-8 sm:pt-10 max-w-5xl">
            <h2 className="section-title mt-3">More Than a Retail Website</h2>
            <p className="muted mt-4 leading-relaxed max-w-4xl">
              Apex Motor International is building a business platform around electric motorcycles in the United States.
            </p>
            <p className="muted mt-3 leading-relaxed max-w-4xl">
              We support direct customer interest, work with dealer partners, and help create the service structure needed for long-term market growth.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-white/10 pt-8 sm:pt-10">
            <div className="lg:col-span-8">
              <h2 className="section-title mt-3">Dealer Opportunities</h2>
              <p className="muted mt-4 leading-relaxed max-w-4xl">
                We are actively developing dealer relationships across the United States.
              </p>
              <p className="muted mt-3 leading-relaxed max-w-4xl">
                If you operate a motorcycle shop, powersports business, or service-capable location and want to explore the electric motorcycle category, we welcome the conversation.
              </p>
            </div>
            <div className="lg:col-span-4">
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                <div className="text-sm font-semibold text-brand-text">Partnership Inquiry</div>
                <p className="muted mt-2 text-sm leading-relaxed">
                  Connect with our team to discuss market fit and next steps.
                </p>
                <div className="mt-5">
                  <Link href="/en/dealers" className="btn-primary w-full">Become a Dealer</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-white/10 pt-8 sm:pt-10">
            <div className="lg:col-span-8">
              <h2 className="section-title mt-3">Support After the Sale</h2>
              <p className="muted mt-4 leading-relaxed max-w-4xl">
                Electric motorcycles do not just need interest at the point of sale. They need follow-through.
              </p>
              <p className="muted mt-3 leading-relaxed max-w-4xl">
                Apex supports customers and partners through service communication, maintenance coordination, and after-sales assistance designed to build long-term confidence.
              </p>
              <div className="mt-6 flex gap-3 flex-col sm:flex-row">
                <Link href="#contact" className="btn-primary">Contact Us</Link>
                <a href="mailto:apexmotorintl@gmail.com" className="btn-secondary">Email Us</a>
              </div>
            </div>
            <div className="lg:col-span-4">
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                <div className="text-sm font-semibold text-brand-text">Need support now?</div>
                <p className="muted mt-2 text-sm leading-relaxed">
                  Reach out and our team will respond within 24 hours.
                </p>
                <div className="mt-5">
                  <a href="tel:9096562297" className="btn-secondary w-full">Call Us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-page">
          <div className="border-t border-white/10 pt-10 sm:pt-12 text-center">
            <h2 className="section-title">Let’s Start the Conversation</h2>
            <p className="muted mt-3 max-w-3xl mx-auto">
              Whether you are interested in a motorcycle, a dealer opportunity, or service support, our team is available to help.
            </p>
            <p className="mt-2 text-brand-text">
              We respond within 24 hours.
            </p>
            <div className="mt-6 flex gap-3 justify-center flex-col sm:flex-row">
              <Link href="#contact" className="btn-primary">Contact Us</Link>
              <a href="tel:9096562297" className="btn-secondary">Call Us</a>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  )
}

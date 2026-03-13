import Link from 'next/link'
import Image from 'next/image'
import Contact from '@/components/Contact'
import { products } from '@/data/products'

export default function SkyLeapPage() {
  const bike = products.find((p) => p.id === 'skyleap')
  const storyImages = [
    '/media/skyleap/01.png',
    '/media/skyleap/02.png',
    '/media/skyleap/03.png',
    '/media/skyleap/04.png',
    '/media/skyleap/05.png',
    '/media/skyleap/06.png',
    '/media/skyleap/07.png',
    '/media/skyleap/08.png',
    '/media/skyleap/09.png',
    '/media/skyleap/10.png',
    '/media/skyleap/11.png',
  ]
  const detailedSpecs = [
    { label: 'Frame & Swingarm', value: 'High-strength carbon steel' },
    { label: 'Motor Type', value: 'Air-cooled PMSM (Permanent Magnet Synchronous Motor)' },
    { label: 'Controller Type', value: 'FOC vector control' },
    { label: 'Rated Voltage', value: '72V (DC)' },
    { label: 'Rated Power', value: '4000W' },
    { label: 'Peak Power', value: '15kW' },
    { label: 'Max Torque', value: '378 Nm' },
    { label: 'Gear Ratio', value: '1:8.68' },
    { label: '1st Drive', value: 'Chain drive' },
    { label: '2nd Drive', value: 'Chain drive' },
    { label: 'Battery Pack', value: '72V / 40Ah' },
    { label: 'Battery Cells', value: 'LG 21700' },
    { label: 'Front Suspension', value: 'High-end customized inverted fork; compression adjustment; rebound adjustment; travel 200 mm' },
    { label: 'Rear Suspension', value: 'High-end customized coil spring with gas-assisted shock; compression adjustment; rebound adjustment; travel 76 mm' },
    { label: 'Top Speed', value: '80 km/h (limited)' },
    { label: 'Range', value: '45 km/h · 100 km' },
    { label: 'Braking System', value: 'Front & rear dual-piston disc brakes' },
    { label: 'Net Weight', value: '75.8 kg (with battery)' },
    { label: 'Max Load', value: '120 kg' },
    { label: 'Dimensions (L×W×H)', value: '1850 × 780 × 1090 mm' },
    { label: 'Wheelbase', value: '1225 mm' },
    { label: 'Ground Clearance', value: '290 mm' },
    { label: 'Seat Height', value: '870 mm' },
  ]

  if (!bike) {
    return null
  }

  return (
    <div className="pt-16">
      <section className="section-padding">
        <div className="container-page">
          <div className="max-w-3xl">
            <div className="section-kicker">Model</div>
            <h1 className="mt-3 text-5xl font-semibold tracking-tight">SkyLeap</h1>
            <p className="mt-3 text-brand-accent">{bike.tagline}</p>
            <p className="muted mt-4 leading-relaxed">
              A versatile electric motorcycle platform designed for riders seeking practical electric performance and broader riding flexibility.
            </p>
          </div>

          <div className="mt-10 space-y-6">
            {storyImages.map((src, index) => (
              <div key={src} className="rounded-xl overflow-hidden border border-white/10 bg-white/[0.02]">
                <Image
                  src={src}
                  alt={`SkyLeap introduction ${index + 1}`}
                  width={1600}
                  height={1000}
                  className="w-full h-auto object-cover"
                  sizes="100vw"
                />
              </div>
            ))}
          </div>

          <div className="mt-10 section-shell">
            <h2 className="text-2xl font-semibold">Detailed Specifications</h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {detailedSpecs.map((spec) => (
                <div key={spec.label} className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">
                  <div className="text-xs uppercase tracking-[0.14em] text-brand-muted">{spec.label}</div>
                  <div className="mt-1 text-sm sm:text-base font-medium text-brand-text">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 section-shell">
            <p className="muted text-sm">Pricing and availability: Contact Us for Details.</p>
            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <Link href="#contact" className="btn-primary">Contact Us</Link>
              <a href="mailto:apexmotorintl@gmail.com" className="btn-secondary">Email Us</a>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  )
}

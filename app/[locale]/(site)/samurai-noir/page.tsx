import Link from 'next/link'
import Image from 'next/image'
import Contact from '@/components/Contact'
import { products } from '@/data/products'

export default function SamuraiNoirPage() {
  const bike = products.find((p) => p.id === 'samurai-noir')
  const storyImages = [
    '/media/samurai/01.png',
    '/media/samurai/02.png',
    '/media/samurai/03.png',
    '/media/samurai/04.png',
    '/media/samurai/05.png',
    '/media/samurai/06.png',
    '/media/samurai/07.png',
    '/media/samurai/08.png',
    '/media/samurai/09.png',
  ]
  const detailedSpecs = [
    { label: 'Frame & Swingarm', value: 'Carbon Fiber' },
    { label: 'Motor Type', value: 'PMSM (Permanent Magnet Synchronous Motor)' },
    { label: 'Motor Brand', value: 'DENZEL D7500 (Germany design)' },
    { label: 'Max Torque', value: '320 Nm' },
    { label: 'Controller', value: 'Denzel Orient DY300A (Germany design)' },
    { label: 'Control Features', value: 'Bluetooth enabled; Sport / ECO modes; Energy recovery; AEBS (analog electric brake)' },
    { label: 'Display', value: 'TFT Display with CAN Bus (Touch Screen)' },
    { label: 'Rated Voltage', value: '72V' },
    { label: 'Motor Power', value: '15kW peak' },
    { label: 'Dimensions (L×W×H)', value: '1992 × 815 × 1082 mm' },
    { label: 'Wheelbase', value: '1400 mm' },
    { label: 'Ground Clearance', value: '220 mm' },
    { label: 'Seat Height', value: '870 mm' },
    { label: 'Tires', value: '3.25-16 street tires' },
    { label: 'Front Suspension', value: 'Adjustable sport front fork' },
    { label: 'Rear Suspension', value: 'Adjustable sport rear shock' },
    { label: 'Top Speed', value: '45 km/h / 110 km/h' },
    { label: 'Climbing Ability', value: '≥45°' },
    { label: 'Braking System', value: 'Front & rear four-piston hydraulic brakes' },
    { label: 'Battery', value: 'Removable lithium battery, 72V 45Ah' },
    { label: 'Lighting', value: 'Full LED system' },
    { label: 'Vehicle Weight', value: '65 kg' },
    { label: 'Chassis Weight', value: '49.2 kg (without battery)' },
    { label: 'Max Load', value: '150 kg' },
    { label: 'Range', value: '130 km' },
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
            <h1 className="mt-3 text-5xl font-semibold tracking-tight">Samurai Noir</h1>
            <p className="mt-3 text-brand-accent">{bike.tagline}</p>
            <p className="muted mt-4 leading-relaxed">
              A lightweight electric motorcycle with premium construction, fast response, and strong road-focused performance.
            </p>
          </div>

          <div className="mt-10 space-y-6">
            {storyImages.map((src, index) => (
              <div key={src} className="rounded-xl overflow-hidden border border-white/10 bg-white/[0.02]">
                <Image
                  src={src}
                  alt={`Samurai Noir introduction ${index + 1}`}
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
              <a href="tel:9096562297" className="btn-secondary">Call Us</a>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  )
}

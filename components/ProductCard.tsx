import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@/data/products'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="card">
      <div className="aspect-[16/10] rounded-xl mb-5 overflow-hidden border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent">
        {product.imageSrc ? (
          <Image
            src={product.imageSrc}
            alt={product.name}
            width={1200}
            height={750}
            className="w-full h-full object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        ) : (
          <div className="w-full h-full p-6 flex items-end">
            <div>
              <div className="section-kicker">Featured Model</div>
              <div className="mt-2 text-2xl font-semibold tracking-tight">{product.name}</div>
            </div>
          </div>
        )}
      </div>
      
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-brand-text">{product.name}</h3>
          <p className="mt-1 text-sm text-brand-accent">{product.tagline}</p>
          <p className="muted mt-2 text-sm leading-relaxed">{product.description}</p>
        </div>
        
        {product.specs?.length ? (
          <div className="grid grid-cols-2 gap-3 text-sm">
            {product.specs.slice(0, 4).map((s) => (
              <div key={s.label} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                <div className="text-xs uppercase tracking-[0.14em] text-brand-muted">{s.label}</div>
                <div className="mt-1 font-semibold text-brand-text">{s.value}</div>
              </div>
            ))}
          </div>
        ) : null}

        <p className="muted text-sm">Pricing and availability: Contact Us for Details.</p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="#contact" className="btn-primary">Contact Us</Link>
          <Link href="#contact" className="btn-secondary">Email Us</Link>
        </div>
      </div>
    </div>
  )
}

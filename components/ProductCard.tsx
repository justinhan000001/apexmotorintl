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
          <p className="muted mt-2 text-sm leading-relaxed">{product.description}</p>
        </div>
        
        {product.isFullySpecified && product.specs?.length ? (
          <div className="grid grid-cols-2 gap-3 text-sm">
            {product.specs.map((s) => (
              <div key={s.label} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                <div className="text-xs uppercase tracking-[0.14em] text-brand-muted">{s.label}</div>
                <div className="mt-1 font-semibold text-brand-text">{s.value}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="text-sm text-brand-text font-semibold">Key specs available on request.</div>
            <div className="muted mt-1 text-sm">Contact us for details on configuration, availability, and options.</div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3">
          <Link href={`/en/products#${product.id}`} className="btn-secondary">
            View Details
          </Link>
          <Link href="#contact" className="btn-primary">
            {product.isFullySpecified ? 'Contact Us' : 'Contact Us for Details'}
          </Link>
        </div>
      </div>
    </div>
  )
}

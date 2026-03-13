import Contact from '@/components/Contact'
import ProductCard from '@/components/ProductCard'
import { products } from '@/data/products'

export default function ProductsPage() {
  return (
    <div className="pt-16">
      <section className="section-padding">
        <div className="container-page">
          <div className="max-w-2xl">
            <div className="section-kicker">Products</div>
            <h1 className="mt-3 text-5xl font-semibold tracking-tight">Electric Motorcycles</h1>
            <p className="muted mt-4 leading-relaxed">
              We currently feature two models. For availability, configurations, and pricing, please contact us directly.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product) => (
              <div key={product.id} id={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </div>
  )
}

import { redirect } from 'next/navigation'

interface ProductPageProps {
  params: { id: string }
}

export default function ProductPage({ params }: ProductPageProps) {
  // Keep URLs working while using a simple products page.
  redirect(`/en/products#${params.id}`)
}

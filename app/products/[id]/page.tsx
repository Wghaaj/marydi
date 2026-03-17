import products from "../../database/products.json"
import ProductClient from "./productClient"

type PageProps = {
  params: Promise<{
    id: string
  }>
}

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }))
}

export default async function DetailedProduct({ params }: PageProps) {
  const { id } = await params

  const product = products.find(
    (p) => p.id === Number(id)
  )

  if (!product) {
    return <p>Product not found</p>
  }

  return <ProductClient product={product} />
}
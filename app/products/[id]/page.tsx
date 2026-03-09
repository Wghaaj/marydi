import products from "../../database/products.json"
import ProductClient from "./productClient"

type PageProps = {
  params: {
    id: string
  }
}

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }))
}

export default function DetailedProduct({ params }: PageProps) {
  const product = products.find(
    (p) => p.id === Number(params.id)
  )

  if (!product) {
    return <p>Product not found</p>
  }

  return <ProductClient product={product} />
}
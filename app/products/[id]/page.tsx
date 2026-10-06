import prisma from "@/app/lib/prisma";
import ProductClient from "./productClient";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function DetailedProduct({ params }: PageProps) {
  const { id } = await params;

  const [product, colourOptions, scentOptions, relatedProducts] =
    await Promise.all([
      prisma.product.findUnique({
        where: {
          id: Number(id),
        },
      }),

      prisma.colour.findMany({
        orderBy: {
          id: "asc",
        },
      }),

      prisma.scent.findMany({
        orderBy: {
          id: "asc",
        },
      }),

      prisma.product.findMany({
        where: {
          id: {
            not: Number(id),
          },
        },
        orderBy: {
          id: "asc",
        },
        take: 4,
      }),
    ]);

  if (!product) {
    return <p>Product not found</p>;
  }

  const safeProduct = {
    ...product,
    price: Number(product.price),
  };

  const safeRelatedProducts = relatedProducts.map((product) => ({
    ...product,
    price: Number(product.price),
  }));

  return (
    <ProductClient
      product={safeProduct}
      colourOptions={colourOptions}
      scentOptions={scentOptions}
      relatedProducts={safeRelatedProducts}
    />
  );
}
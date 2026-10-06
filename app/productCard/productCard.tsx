"use client";

import Link from "next/link";
import { useState } from "react";

export default function ProductCard({ product }) {
  const [image, setImage] = useState(product.image1);

  return (
    <article className="w-full">
      <Link href={`/products/${product.id}`}>
        <div className="w-full aspect-[1/1.05] rounded-[18px] overflow-hidden bg-[#e8c6ce]">
          <img
            src={image}
            alt={product.name}
            onMouseEnter={() => product.image2 && setImage(product.image2)}
            onMouseLeave={() => setImage(product.image1)}
            className="w-full h-full object-cover transition duration-300 hover:scale-[1.02]"
          />
        </div>
      </Link>

      <div className="mt-4">
        <div className="flex items-start justify-between gap-3">
          <h2 className="font-serif text-lg leading-tight">{product.name}</h2>
          <p className="font-serif text-base whitespace-nowrap">£{product.price.toFixed(2)}</p>
        </div>

        <p className="text-xs sm:text-sm leading-5 text-black/55 mt-2 min-h-[40px]">
          {product.description.length > 100 ? `${product.description.slice(0, 100)}...` : product.description}
        </p>

        <Link href={`/products/${product.id}`} className="inline-block mt-3 text-xs font-semibold hover:text-[#8f506c]">
          View details →
        </Link>
      </div>
    </article>
  );
}
"use client"

import { useState } from "react";

export default function ProductCard({ product }) {
    const [image, ImageOnMove] = useState(product.coverImage);
    return (
      <div className="product-card flex flex-col w-[18rem] shadow-strange-pink shadow-xl/30 text-center">
        <img className="max-w-[18rem] max-h-[18rem] md:max-h-[20rem]" src={image} alt={product.productName} 
        onMouseEnter={() => ImageOnMove(product.image2)}
        onMouseLeave={() => ImageOnMove(product.coverImage)}
        />
        <div className="pl-[10px] py-[10px]">
            <p className="pb-[10px]">{product.productName}</p>
            <p className="pb-[10px]">£{product.price.toFixed(2)}</p>
            <a href={`/products/${product.id}`} className="underline pr-[10px] hover:text-strange-pink">
                <button className="py-[4px] px-[15px] bg-strange-pink rounded-4xl text-white">
                    View Details
                </button>
            </a> 
        </div>
      </div>
    );
  }
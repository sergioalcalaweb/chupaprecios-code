"use client"

import { useCart } from "@/hooks/useCart"
import { Product } from "../../types"
import Image from "next/image"

const ProductCard = ({ product }: { product: Product }) => {
  const { add } = useCart()
  return (
    <article className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
      <div className="p-5 flex flex-col justify-between h-full">
        <div>
          <Image
            src={product.thumbnail}
            width={150}
            height={150}
            alt="product"
            className="aspect-square w-full"
          />
          <h3 className="truncate text-xl font-semibold tracking-tight text-gray-900 mt-5">
            {product.title}
          </h3>
          <p className="mb-3 font-normal text-gray-700">
            {product.description}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 ">{`$ ${product.price}`}</span>
          <button
            onClick={add}
            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            Add to cart
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard

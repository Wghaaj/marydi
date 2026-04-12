"use client"

import { createContext, useContext, useEffect, useState } from "react"

type CartItem = {
  id: number
  name: string
  price: number
  image: string
  colors: string[]
  scent: string
  comment: string
  quantity: number
}

type CartContextType = {
    cart: CartItem[]
    addToCart: (item: CartItem) => void
    removeFromCart: (index: number) => void
    increaseQuantity: (index: number) => void
    decreaseQuantity: (index: number) => void
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {

  const [cart, setCart] = useState<CartItem[]>([])

  // load cart
  useEffect(() => {
      const stored = JSON.parse(localStorage.getItem("cart") || "[]")
      setCart(stored)
  }, [])

  // save cart
  useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  function addToCart(item: CartItem) {
      setCart(prev => [...prev, item])
  }

  function removeFromCart(index: number) {
      setCart(prev => prev.filter((_, i) => i !== index))
  }

  function increaseQuantity(index: number) {
      setCart(prev => prev.map((item, i) => i === index ? { ...item, quantity: item.quantity + 1 } : item))
  }

  function decreaseQuantity(index: number) {
      setCart(prev =>
          prev.map((item, i) =>
              i === index && item.quantity > 1
                  ? { ...item, quantity: item.quantity - 1 }
                  : item
          )
      )  
  }

    return (
      <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }}>
        {children}
      </CartContext.Provider>
    )
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error("useCart must be used within CartProvider")
  }

  return context
}
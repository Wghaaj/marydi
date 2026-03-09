"use client"

import { useState } from "react"

export default function ProductClient({ product }) {
    const [colors, setColors] = useState<string[]>([])
    const [comment, setComment] = useState("")
    const [size, setSize] = useState<string[]>([])

    function toggleColor(color: string) {
        if(colors.includes(color)) {
            setColors(colors.filter(c => c !== color))
            return
        }

        if(colors.length > 3) {
            setColors([...colors, color])
        }
    }

    const addToCart = () => {

    const cart = JSON.parse(localStorage.getItem("cart") || "[]")

    const newItem = {
      id: product.id,
      name: product.productName,
      price: product.price,
      colors:colors,
      size,
      comment:comment,
      quantity: 1
    }

    cart.push(newItem)

    localStorage.setItem("cart", JSON.stringify(cart))
  }

  return(
    <>
        <main className="py-[30px] md:py-[60px] text-sm md:text-base px-[30px] md:px-[60px]">
                <div className="flex gap-[15px] w-fit items-center hover:text-strange-pink m-[0]!">
                    <div>
                        <img className="w-[1.2rem]" src="/images/arrowLeft.png" alt="arrow left" />
                    </div>
                    <div>
                        <p>GO BACK</p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-[20px] mt-[30px]! max-w-[100%] lg:w-fit ">
                    <div className="">
                        <img src={product.coverImage} alt={product.productName} className="max-h-[30rem]" />
                    </div>
                    <div className="lg:m-0!">
                        <h1 className="text-2xl md:text-3xl">{product.productName.toUpperCase()}</h1>
                        <div className="mt-[20px]!">
                            <p>COLOUR&#40;choose up to three&#41;:</p>
                        </div>
                        <div className="grid grid-cols-2 gap-2 py-3! m-0!">
                            <div>
                                <button className="setBackground border rounded-4xl py-[4px] px-[1.5rem] hover:bg-strange-pink hover:text-white" onClick={() => toggleColor("Pink")}>Pink</button>
                            </div>
                            <div>
                                <button className="border rounded-4xl py-[4px] px-[1.5rem] hover:bg-strange-pink hover:text-white" onClick={() => toggleColor("Purple")}>Purple</button>
                            </div>
                            <div>
                                <button className="border rounded-4xl py-[4px] px-[1.5rem] hover:bg-strange-pink hover:text-white" onClick={() => toggleColor("White")}>White</button> 
                            </div>
                            <div>
                                <button className="border rounded-4xl py-[4px] px-[1.5rem] hover:bg-strange-pink hover:text-white" onClick={() => toggleColor("Pink")}>Red</button>
                            </div>
                            <div>
                                <button className="border rounded-4xl py-[4px] px-[1.5rem] hover:bg-strange-pink hover:text-white" onClick={() => toggleColor("Purple")}>Green</button>
                            </div>
                            <div>
                                <button className="border rounded-4xl py-[4px] px-[1.5rem] hover:bg-strange-pink hover:text-white" onClick={() => toggleColor("White")}>Custom</button>                    
                            </div>
                   
                        </div>
                        <div className="mt-[20px]!">
                            <p>SIZE:</p>
                        </div>
                        <div className="grid grid-cols-2 gap-2 py-3! m-0!">
                            <div>
                                <button className="border rounded-4xl py-[4px] px-[1.5rem] hover:bg-strange-pink hover:text-white" onClick={() => setSize("Large")}>Large</button>
                            </div>
                            <div>
                                <button className="border rounded-4xl py-[4px] px-[1.5rem] hover:bg-strange-pink hover:text-white" onClick={() => setSize("Medium")}>Medium</button>
                            </div>
                            <div>
                                <button className="border rounded-4xl py-[4px] px-[1.5rem] hover:bg-strange-pink hover:text-white" onClick={() => setSize("Small")}>Small</button> 
                            </div>
                            <div>
                                <button className="border rounded-4xl py-[4px] px-[1.5rem] hover:bg-strange-pink hover:text-white" onClick={() => setSize("Mini")}>Mini</button>
                            </div>
                   
                        </div>
                        <div>
                            <textarea
                                className="border mt-4 p-2 mt-3!"
                                placeholder="Add a comment"
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                            />
                        </div>
                       <div className="mt-3!">
                            <button onClick={addToCart} className="mt-4 bg-strange-pink text-white px-7 py-2 rounded-4xl">
                                Add to cart
                            </button>
                       </div>

                    </div>
                </div>
            </main>
    </>
  );
}
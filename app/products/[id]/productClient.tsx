"use client"

import { useState } from "react"
import { useCart } from "@/app/context/cartContext"

export default function ProductClient({ product }) {
    const [colors, setColors] = useState<string[]>([])
    const [comment, setComment] = useState("")
    const [scent, setScent] = useState("")
    const [bg, setBg ] = useState("bg-none")
    const { addToCart } = useCart()
    const [added, setAdded] = useState(false)


    const handleClick = () => {
        if(bg === "bg-none") {
            setBg("bg-strange-pink")
        } else {
            setBg("bg-none")
        }
    }

    function toggleColor(color: string) {
        if(colors.includes(color)) {
            setColors(colors.filter(c => c !== color))
            return
        }

        if(colors.length < 3) {
            setColors([...colors, color])
        }
    }

    const addItem = () => {
        console.log("item added")
    addToCart({
        id: product.id,
        name: product.productName,
        image: product.coverImage,
        price: product.price,
        colors,
        scent,
        comment,
        quantity: 1
    })
    setAdded(true)

    setTimeout(() => {
        setAdded(false)
    }, 2000)
}

  return(
    <>
        <main className="py-[30px] md:py-[60px] text-sm md:text-base px-[30px] md:px-[60px]">
            <div className="flex gap-[15px] w-fit items-center hover:text-strange-pink m-[0]!" onClick={() => window.history.back()}>
                <div>
                    <img className="w-[1.2rem]" src="/images/arrowLeft.png" alt="arrow left" />
                </div>
                <div>
                    <p>GO BACK</p>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-[3rem] mt-[30px]! max-w-[100%] lg:w-fit m-0!">
                <div className="m-0! flex flex-col w-fit gap-[15px] md:flex-col">
                    <img src={product.coverImage} alt={product.productName} className="max-h-[30rem] m-0!" />
                    <div className="flex flex-row gap-5 ">
                        <div>
                            <img className="w-[6.9rem]" src={product.image2} alt={product.productName} />
                        </div>
                        <div>
                            <img className="w-[6.9rem]" src={product.image3} alt={product.productName} />
                        </div>
                        <div>
                            <img className="w-[6.9rem]" src={product.image4} alt={product.productName} />
                        </div>
                    </div>
                </div>
                <div className="m-0!">
                    <h1 className="text-2xl md:text-3xl">{product.productName.toUpperCase()}</h1>
                    <h1 className="text-2xl pt-3"> £{product.price.toFixed(2)}</h1>

                    <div className="mt-[20px]!">
                        <p>COLOUR&#40;choose up to three&#41;:</p>
                    </div>
                    <div className="grid grid-cols-2 gap-2 py-3! m-0! w-fit">
                        <div>
                            <button className={`${colors.includes("Pink") ? "bg-strange-pink text-white" : ""} border rounded-4xl py-[4px] px-[1.5rem] hover:bg-strange-pink hover:text-white`} onClick={() => {handleClick(); toggleColor("Pink")}}>Pink</button>
                        </div>
                        <div>
                            <button className={`${colors.includes("Purple") ? "bg-strange-pink text-white" : ""} border rounded-4xl py-[4px] px-[1.5rem] hover:bg-strange-pink hover:text-white`} onClick={() => {handleClick(); toggleColor("Purple")}}>Purple</button>
                        </div>
                        <div>
                            <button className={`${colors.includes("White") ? "bg-strange-pink text-white" : ""} border rounded-4xl py-[4px] px-[1.5rem] hover:bg-strange-pink hover:text-white`} onClick={() => {handleClick(); toggleColor("White")}}>White</button> 
                        </div>
                        <div>
                            <button className={`${colors.includes("Red") ? "bg-strange-pink text-white" : ""} border rounded-4xl py-[4px] px-[1.5rem] hover:bg-strange-pink hover:text-white`} onClick={() => {handleClick(); toggleColor("Red")}}>Red</button>
                        </div>
                        <div>
                            <button className={`${colors.includes("Green") ? "bg-strange-pink text-white" : ""} border rounded-4xl py-[4px] px-[1.5rem] hover:bg-strange-pink hover:text-white`} onClick={() => {handleClick(); toggleColor("Green")}}>Green</button>
                        </div>
                        <div>
                            <button className={`${colors.includes("Custom") ? "bg-strange-pink text-white" : ""} border rounded-4xl py-[4px] px-[1.5rem] hover:bg-strange-pink hover:text-white`} onClick={() => {handleClick(); toggleColor("Custom")}}>Custom</button>                    
                        </div>
            
                    </div>
                    <div className="mt-[20px]!">
                        <p>SCENT:</p>
                    </div>
                    <div className="grid grid-cols-2 gap-2 py-3! m-0! w-fit">
                        <div>
                            <button className={`${scent.includes("Unscented") ? "bg-strange-pink text-white" : ""} border rounded-4xl py-[4px] px-[1.5rem] hover:bg-strange-pink hover:text-white`} onClick={() => {handleClick(); setScent("Unscented")}}>Unscented</button>
                        </div>
                        <div>
                            <button className={`${scent.includes("Peony") ? "bg-strange-pink text-white" : ""} border rounded-4xl py-[4px] px-[1.5rem] hover:bg-strange-pink hover:text-white`} onClick={() => {handleClick(); setScent("Peony")}}>Peony</button>
                        </div>
                        <div>
                            <button className={`${scent.includes("Sandalwood") ? "bg-strange-pink text-white" : ""} border rounded-4xl py-[4px] px-[1.5rem] hover:bg-strange-pink hover:text-white`} onClick={() => {handleClick(); setScent("Sandalwood")}}>Sandalwood</button> 
                        </div>
                        <div>
                            <button className={`${scent.includes("Custom") ? "bg-strange-pink text-white" : ""} border rounded-4xl py-[4px] px-[1.5rem] hover:bg-strange-pink hover:text-white`} onClick={() => {handleClick(); setScent("Custom")}}>Custom</button>
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
                        <button onClick={addItem} className="mt-4 bg-black text-white px-7 py-2 rounded-4xl hover:bg-strange-pink">
                            Add to cart
                        </button>

                        {added && <p className="text-green-500 mt-2">✓ Item added to cart!</p>}
                    </div>
                </div>
            </div>
            <hr className="border-black mt-[30px]! w-full" />
            <div>
                <h2 className="text-xl md:text-2xl mt-[20px]!">ITEM DETAILS</h2>
                <p className="pt-[8px]"><span className="font-bold">Wax Type:</span> {product.description.type}</p>
                <p className="pt-[8px]"><span className="font-bold">Item Width:</span> {product.description.width}</p>
                <p className="pt-[8px]"><span className="font-bold">Item Height:</span> {product.description.height}</p>
                <p className="pt-[8px]">{product.description.description}</p>
                
                <hr className="border-black w-[2rem] m-0! mt-[20px]!" />

                <br />
                <p className="font-bold">Why choose a candles bouquet instead of fresh flowers?</p>
                <ul className="pl-[15px]">
                    <li className="list-disc">{product.description.choose[0]}</li>
                    <li className="list-disc">{product.description.choose[1]}</li>
                    <li className="list-disc">{product.description.choose[2]}</li>
                    <li className="list-disc">{product.description.choose[3]}</li>
                </ul>

                <hr className="border-black w-[2rem] m-0! mt-[20px]!" />
                
                <br />
                <p className="font-bold">Candle Use & Care</p>
                <ul className="pl-[15px]">
                    <li className="list-disc">{product.description.use[0]}</li>
                    <li className="list-disc">{product.description.use[1]}</li>
                    <li className="list-disc">{product.description.use[2]}</li>
                    <li className="list-disc">{product.description.use[3]}</li>
                    <li className="list-disc">{product.description.use[4]}</li>
                </ul>
            </div>
                
            </main>
    </>

  );
  
}
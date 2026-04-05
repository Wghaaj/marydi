"use client"
import { useCart } from "@/app/context/cartContext"
import { useRouter } from "next/navigation";
import { Router } from "next/router";
import { use } from "react";


export default function CartPage() {
    const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();
    const router = useRouter();
    return(
        <>
            <main className="py-[30px]"> 
                <hr className="w-[30%] m-0!" />

                <div className="px-[30px] md:pl-[60px] mt-[15px]!">
                    <h1 className="text-2xl">Cart</h1>
                    <p>Your items:</p>
                    {cart.length === 0 && <p>Your cart is empty</p> }
                    {cart.map((item, index) => (
                    <div key={index} className="flex m-0! border p-3 rounded-xl w-fit mt-4!">
                        <div className="m-0!">
                            <img className="h-[10rem] m-0!" src={item.image} alt={item.name} />
                            <p className="pt-[10px]">{item.name}</p>
                            <p>£{item.price.toFixed(2)}</p>
                            <div className="py-[10px]">
                                <p><span className="font-bold">Colors:</span> {item.colors.join(", ")}</p>
                                <p><span className="font-bold">Scent:</span> {item.scent}</p>
                                <p className="w-[10rem] m-0! break-all "><span className="font-bold">Comment:</span> {item.comment}</p>
                            </div>
                            <div className="flex w-fit items-center m-0!">
                            <button
                                onClick={() => decreaseQuantity(index)}
                                disabled={item.quantity <= 1}
                                className="w-7 h-7 flex items-center justify-center border rounded hover:bg-gray-200 disabled:opacity-40">
                                &#45; 
                            </button> 

                            <span className="w-6 text-center">{item.quantity}</span>

                            <button
                                onClick={() => increaseQuantity(index)}
                                className="w-7 h-7 flex items-center justify-center border rounded hover:bg-gray-200">
                                &#43;
                            </button>    
                            </div>
                            <button onClick={() => removeFromCart(index)} className="bg-strange-pink px-[15px] py-[4px] border text-white border-black rounded-4xl mt-[10px]!">Remove</button>
                        </div>
                    </div>
                    ))}

                    <p className="mt-[30px]!"> <span className="font-bold">Total:</span> £{cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</p>
                    <button 
                        disabled={cart.length === 0} 
                        onClick={() => {
                            if (cart.length === 0) {
                                alert("Your cart is empty");
                                return;
                            }
                            router.push("/form");
                        }} 
                        className="bg-strange-pink px-[2rem] text-white py-[4px] border border-black rounded-4xl mt-[10px]!">Checkout
                    </button>
                </div>
                    

            </main>
        </>
    );
}
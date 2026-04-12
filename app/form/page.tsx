"use client"
import emailjs from '@emailjs/browser';
import { useRef, useEffect } from 'react';
import { useCart } from '../context/cartContext';
import intlTelInput from "intl-tel-input";

export default function FormPage() {
    const formRef = useRef(null);
    const inputRef = useRef(null);


    const {cart} = useCart();
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity,0).toFixed(2);

    const handleSubmit = (e) => {
        e.preventDefault();

        //get cart data from localstorage
    }

    useEffect(() => {
    if (inputRef.current) {
      intlTelInput(inputRef.current, {
        initialCountry: "auto",
        geoIpLookup: (callback) => {
          fetch("https://ipapi.co/json")
            .then(res => res.json())
            .then(data => callback(data.country_code))
            .catch(() => callback("US"));
        },
      });
    }
  }, []);

    
    return(
        <>
            <main className="py-[30px] w-full md:py-[60px] px-[30px] md:px-[60px] w-screen">
                <h1 className="text-md md:text-lg">Please fill in the details below to complete your order</h1>
                <a href="/rules" className="text-sm underline underline-offset-2 text-strange-pink hover:text-red-900">
                    See how everything works before placing an order
                </a>

                <form action="SEND">
                    <div className="flex m-0! flex-col md:gap-5 mt-[20px]!">
                        
                        <label htmlFor="name" className="text-sm m-0! md:text-md">First Name:</label>
                        <input type="text" id="name" name="name" placeholder="Enter your name" className="rounded-md bg-strange-pink/40 m-0! p-[5px] text-sm md:text-md max-w-[50vw] md:max-w-[30vw]" required/>
                    
                        <label htmlFor="surname" className="text-sm m-0! md:text-md mr-2">Surname:</label>
                        <input type="text" id="surname" name="surname" placeholder="Enter your surname" className="rounded-md bg-strange-pink/40 m-0! p-[5px] text-sm md:text-md max-w-[50vw] md:max-w-[30vw]" required/>

                        <label htmlFor="phone" className="text-sm m-0! md:text-md mr-2">Tel:</label>
                        <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" className="rounded-md bg-strange-pink/40 m-0! p-[5px] text-sm md:text-md max-w-[50vw] md:max-w-[30vw]" required/>

                        <input ref={inputRef} type="tel" className="input" />

                        <label htmlFor="email" className="text-sm m-0! md:text-md mr-2">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email" className="rounded-md bg-strange-pink/40 m-0! p-[5px] text-sm md:text-md max-w-[50vw] md:max-w-[30vw]" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"/>
                        
                        <button type="submit" className="bg-strange-pink hover:bg-red-900 text-white font-bold py-2 px-4 rounded-md mt-[20px]!">
                            Submit Order
                        </button>
                    </div>
                </form>
            </main>
        </>
    );
}
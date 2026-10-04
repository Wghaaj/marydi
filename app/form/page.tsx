"use client"
import emailjs from '@emailjs/browser';
import { useRef, useEffect, type FormEvent } from 'react';
import { useCart } from '../context/cartContext';
import { supabase } from '../lib/supabaseClient';
import intlTelInput from "intl-tel-input/intlTelInputWithUtils";

export default function FormPage() {
    const inputRef = useRef<HTMLInputElement>(null);
    const itiRef = useRef<any>(null);
    const { cart } = useCart();

    useEffect(() => {
        if (inputRef.current) {
            itiRef.current = intlTelInput(inputRef.current, {
                initialCountry: "auto",
                geoIpLookup: (success: (iso2: string) => void) => {
                    fetch("https://ipapi.co/json")
                        .then(res => res.json())
                        .then(data => success(data.country_code))
                        .catch(() => success("gb"));
                },
            } as any);
        }
    }, []);

    const clearCart = () => {
        localStorage.removeItem("cart");
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget); // read synchronously, before any await

        const iti = itiRef.current;
        // make sure the utils script has finished loading before reading the number
        await iti?.promise;

        // reject invalid numbers so you don't save junk
        if (!iti?.isValidNumber()) {
            alert("Please enter a valid phone number, including the area code.");
            return;
        }

        // E.164 format, e.g. "+447911123456" — includes the country code
        const tel = iti.getNumber();

        const customer = {
            firstName: String(form.get("name") || ""),
            surname:   String(form.get("surname") || ""),
            email:     String(form.get("email") || ""),
            tel,
        };

        const items = cart.map(it => ({
            name:     it.name,
            colors:   Array.isArray(it.colors) ? it.colors.join(", ") : (it.colors ?? ""),
            scent:    it.scent ?? "",
            comment:  it.comment ?? "",
            price:    it.price,
            quantity: it.quantity,
        }));

        try {
            const customerId = crypto.randomUUID();

            const { error: custErr } = await supabase.from("customer").insert({
                id: customerId,
                first_name: customer.firstName,
                surname: customer.surname,
                tel: customer.tel,
                email: customer.email,
            });
            if (custErr) throw custErr;

            const { error: itemErr } = await supabase.from("item").insert(
                items.map(it => ({
                    customer_id: customerId,
                    item_name: it.name,
                    colors: it.colors,
                    scent: it.scent,
                    message: it.comment,
                    price: it.price,
                    quantity: it.quantity,
                }))
            );
            if (itemErr) throw itemErr;

            const orderSummary = items.map(it =>
`Item name: ${it.name}
Item colors: ${it.colors}
Item scent: ${it.scent}
Message: ${it.comment}
Quantity: ${it.quantity}
Price: ${it.price * it.quantity}
-----`).join("\n");

            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                {
                    first_name: customer.firstName,
                    surname:    customer.surname,
                    tel:        customer.tel,
                    email:      customer.email,
                    order_summary: orderSummary,
                },
                { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! }
            );

            window.location.href = "/submission";
        } catch (err) {
            console.error(err);
            alert("Something went wrong placing your order. Please try again.");
        }
    };

    return (
        <main className="py-[30px] w-full md:py-[60px] px-[30px] md:px-[60px] w-screen">
            <h1 className="text-md md:text-lg">Please fill in the details below to complete your order</h1>
            <a href="/rules" className="text-sm underline underline-offset-2 text-strange-pink hover:text-red-900">
                See how everything works before placing an order
            </a>

            <form onSubmit={handleSubmit}>
                <div className="flex m-0! flex-col md:gap-5 mt-[20px]!">
                    <label htmlFor="name" className="text-sm m-0! md:text-md">First Name:</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name" className="rounded-md bg-strange-pink/40 m-0! p-[5px] text-sm md:text-md max-w-[50vw] md:max-w-[30vw]" required/>

                    <label htmlFor="surname" className="text-sm m-0! md:text-md mr-2">Surname:</label>
                    <input type="text" id="surname" name="surname" placeholder="Enter your surname" className="rounded-md bg-strange-pink/40 m-0! p-[5px] text-sm md:text-md max-w-[50vw] md:max-w-[30vw]" required/>

                    <label htmlFor="phone" className="text-sm m-0! md:text-md mr-2">Tel:</label>
                    <input ref={inputRef} type="tel" placeholder='Please enter your phone number' className="rounded-md bg-strange-pink/40 m-0! p-[5px] text-sm md:text-md max-w-[50vw] md:max-w-[30vw]" required/>

                    <label htmlFor="email" className="text-sm m-0! md:text-md mr-2">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" className="rounded-md bg-strange-pink/40 m-0! p-[5px] text-sm md:text-md max-w-[50vw] md:max-w-[30vw]" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"/>

                    <button type="submit" onClick={clearCart} className="bg-strange-pink hover:bg-red-900 text-white font-bold py-2 px-4 rounded-md mt-[20px]!">
                        Submit Order
                    </button>
                </div>
            </form>
        </main>
    );
}
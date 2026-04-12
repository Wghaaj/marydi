"use client"

import Link from "next/link";

export default function Header() {


    return (
        <header className="py-[15px] w-full md:py-30px] text-xs md:text-base px-[30px]">
            <div className="flex flex-row items-center">
                <div className="flex flex-col gap-[10px] m-[0 auto]! w-[100%]">
                    <div>
                        <Link href="/" className="kalnia text-lg md:text-2xl hover:text-strange-pink">MaRyDi Candles</Link>
                    </div>
                    <div className="flex gap-[15px] md:gap-[20px]">
                        <Link href="/" className="hover:text-strange-pink">HOME</Link>
                        <Link href="/products" className="hover:text-strange-pink">PRODUCTS</Link>
                        <Link href="/quide" className="hover:text-strange-pink">GUIDE</Link>
                    </div>
                </div>
                <a href="/cart">
                    <button>
                     <svg className="w-[1.7rem] sm:w-[2rem] " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.0164 16.2572C19.5294 18.5297 19.2859 19.666 18.4608 20.333C17.6357 21 16.4737 21 14.1495 21H9.85053C7.52639 21 6.36432 21 5.53925 20.333C4.71418 19.666 4.47069 18.5297 3.98372 16.2572L3.55514 14.2572C2.83668 10.9043 2.47745 9.22793 3.378 8.11397C4.27855 7 5.99302 7 9.42196 7H14.5781C18.0071 7 19.7215 7 20.6221 8.11397C21.2929 8.94376 21.2647 10.0856 20.9097 12" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M16 12H12M9 12H8" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M10 15H14" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M18 9L15 3" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M6 9L9 3" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                </button>
                </a>
            </div>
            
        </header>
    );
}
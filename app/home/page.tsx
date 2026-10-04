import Image from "next/image";
import "../styles/css/home.css";
import WhyUs from "../ui/why";
import Link from "next/link";

export default function HomePage() {
    return (
        <>
        <div className="px-[30px] md:px-[60px] max-w-[100vw]! w-[100vw]">
            <div className="flex flex-col lg:flex-row items-center justify-between">
                <div className="max-w-[70vw] lg:max-w-[40vw]">
                    <p className="text-strange-pink text-[12px] md:text-[14px] m-[0]! flex items-center gap-[10px] max-w-[fit-content]">
                        <span className="small-line bg-strange-pink"></span>
                        EAST KILBRIDE, SCOTLAND · EST . 2025
                    </p>
                    <p className="text-[2rem] font-semibold md:text-[3rem]">
                        Flowers that <i className="text-strange-pink">burn</i> as beautifully as they <br /> bloom 
                    </p>
                    <p className="text-strange-pink pt-[20px]">
                        Handmade soy wax candle bouquets, hand-poured in Scotland — 100% natural, biodegradable, and made to order.
                    </p>
                    <div className="mt-[20px]!">
                        <button className="bg-strange-pink hover:bg-black text-white px-[20px] py-[10px] mr-[20px]! rounded-[50px] mt-[20px]">
                            <Link href="/products">Order Now</Link>
                        </button>
                        <button className="border border-strange-pink text-strange-pink hover:bg-black hover:text-white px-[20px] mt-[20px]! lg:mt-[0px]! py-[10px] rounded-[50px] mt-[20px]">
                            <Link href="/guide">How To Use</Link>
                        </button>
                    </div>
                </div>
                <div className="hidden lg:block">
                    <img className="curved-img" src="/white_roses.jpeg" alt="White Roses"></img>
                </div>
            </div>
            

        </div>
        <svg className="w-[100vw]! h-[64px] block mt-[100px]! px-[0px]!" viewBox="0 0 1220 64" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,20 C 80,55 160,0 240,25 C 320,50 400,5 480,22 C 560,40 640,8 720,24 C 800,42 880,6 960,22 C 1040,40 1120,6 1220,24 L1220,64 L0,64 Z" fill="#EFE6DA"/>
        </svg>

        <div className="px-[30px] md:px-[60px] max-w-[100vw]! w-[100vw]">
            <WhyUs />
            <div className="flex flex-col lg:flex-row items-center justify-between mt-[100px]!">
                <div>
                    <img className="curved-main-img" src="/main_home.JPG" alt="Home image"></img>
                </div>
                <div className="max-w-[70vw] lg:max-w-[40vw] mt-[20px]! md:mt-[0px]!">
                    <p>&mdash; <span className="text-strange-pink text-[10px] md:text-[12px]">ABOUT US</span></p>
                    <p className="text-[2rem] md:text-[3rem]">Crafted to look <span className="text-strange-pink italic">beautiful</span>. Made to feel <span className="text-strange-pink italic">special</span>.</p>
                    <div className="border-l-[2px] border-strange-pink mt-[20px]!">
                        <p className="text-strange-pink italic pl-[20px]!">“More than candles — pieces made by hand to bring warmth, fragrance, and a little beauty into everyday spaces.”</p>
                    </div>
                    <div className="my-[20px]!">
                        <p>At MaRyDi Candles, we create handmade candle bouquets inspired by flowers, nature, and the beauty of thoughtful details. Each piece is carefully crafted in East Kilbride, Scotland, using natural waxes and fragrances to create something that feels just as special as it looks.
                        <br /> <br />From meaningful gifts to wedding arrangements and little touches for your own home, our bouquets are made to be enjoyed, remembered, and eventually lit.</p>
                    </div>
                    <a href="/about" className="text-strange-pink hover:underline">&#9758; READ OUR FULL STORY </a>

                </div>
            </div>
        </div>
        </>
        
        
    );
}
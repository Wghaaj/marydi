import Image from "next/image";
import "../styles/css/home.css";
import WhyUs from "../ui/why";
import Link from "next/link";

export default function HomePage() {
    return (
        <main>
            <div className="small-container md:big-container px-[30px] md:px-[60px]!">
                <div className="top-text mt-[30px]! md:mt-[60px]!">
                    <p className="text-xl md: text-3xl">We are producing <br /> Handmade Natural Wax Candles</p>
                    <p className="text-sm md: text-base pt-[10px]">Our candles are 100% UK manufactured and <br /> hand-poured with love</p>
                    
                    <div className="mt-[30px]! md:mt-[60px]!">
                        <Link className="px-8 py-2 bg-strange-pink mt-[30px]! md:mt-[60px]! text-sm md:text-base hover:text-white hover:bg-black" href='https://www.instagram.com/marydi_candles?igsh=d2ZkYmdiN3Fwcno%3D&utm_source=qr'>Order Now</Link>

                    </div>
                </div>
             </div>
        
        <div className="block pt-[15rem] lg:pt-[10rem]!">
            <div className="main-container ">
                <div className="pic-container flex items-center justify-end ">
                    <WhyUs />
                </div>
            </div>
        </div>
        
        <div className="small-container md:big-container! px-[30px] md:px-[60px] mt-[15rem]!">
            <div className="flex justify-between items-center flex-col-reverse lg:flex-row! gap-10">
                <div className="mb-[2rem]! md:mb-[unset]!">
                    <Image src="/bouquet.jpg" width={580} height={620} alt="Candle Bouquet" className="rounded-lg shadow-lg w-full md:w-[500px]! lg:w-[600px]!" />
                </div>
                <div className="max-w-md md:max-w-lg! lg:max-w-xl!">
                    <p className="text-xl md: text-3xl pb-[15px] md:pb-[30px]!">About Us</p>
                    <p className="leading-[30px]">
                        At MaRyDi Candles, we believe in the beauty of craftsmanship and the power of nature. Based in East Kilbride, Scotland, we create elegant candle bouquets that look like real flowers but are lovingly handmade from 100% natural wax. Each piece is a blend of artistry, fragrance, and sustainability — designed to bring warmth and serenity to any space. <br />We take pride in using eco-friendly materials and natural fragrances, ensuring every creation is gentle on both you and the environment. Whether you’re decorating your home, gifting a loved one, or planning a special event, our customised designs are made to inspire and delight.
                    </p>
                </div>
            </div>
        </div>
    </main>
    );
}
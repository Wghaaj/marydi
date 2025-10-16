import Link from "next/link";
import "../styles/css/header.css";

export default function Header() {
    return (
        <header className="px-[30px] small-container md:big-container! md:pt-[30px]! md:pb-[60px]! text-xs md:text-base!">
            <div className="grid-area gap-[30px] md:gap-[15px]!">
                <div className="grid-c gap-[30px] md:gap-[60px]!">
                    <Link href="#" className="grid-a hover:text-strange-pink">HOME</Link>
                    <Link href="#" className="grid-b hover:text-strange-pink">PRODUCTS</Link>
                </div>
                <Link href="#" className="grid-d kalnia text-lg md:text-2xl hover:text-strange-pink">MaRyDi Candles</Link>
                <Link href="tel:+447493208453" className="grid-e hover:text-strange-pink">+44 7493 208453</Link>
            </div>
        </header>
    );
}
import Link from "next/link";

export default function Header() {
    return (
        <header className="py-[15px] md:py-30px] text-xs md:text-base">
            <div className="flex flex-col gap-[10px] m-[0 auto]!">
                <div>
                <Link href="/" className="kalnia text-lg md:text-2xl hover:text-strange-pink">MaRyDi Candles</Link>
                </div>
                <div className="flex gap-[15px] md:gap-[20px]">
                    <Link href="/" className="hover:text-strange-pink">HOME</Link>
                    <Link href="/products" className="hover:text-strange-pink">PRODUCTS</Link>
                    <Link href="/quide" className="hover:text-strange-pink">GUIDE</Link>
                </div>
            </div>
        </header>
    );
}
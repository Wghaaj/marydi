import Link from "next/link";
import "../styles/css/footer.css";

export default function Footer() {
    return (
        <footer className="small-container md:big-container! px-[30px] md:px-[60px] mt-[15rem]! pt-[30px] text-xs md:text-base! border-t border-strange-pink pt-[30-px] md:pt-[60px]! pb-[5px]">
            <div className="grid-area gap-[15px] md:gap-[unset]!">
                <div className="grid-a">
                    <Link href="#" className="grid-d kalnia text-lg md:text-2xl hover:text-strange-pink">MaRyDi Candles</Link>
                    <div className="links flex items-center justify-between gap-6 pt-[15px] md:pt-[20px]!">
                        <Link href="https://www.instagram.com/marydi_candles?igsh=d2ZkYmdiN3Fwcno%3D&utm_source=qr"><img className="w-[20px] md:w-[25px]" src='/instagram-icon-svgrepo-com.svg' alt='instagram icon'></img></Link>
                        <Link href="#"><img className="w-[20px] md:w-[25px]" src='/Threads_(app)_logo.svg' alt='threads icon'></img></Link>
                        <Link href="#"><img className="w-[20px] md:w-[25px]" src='/facebook-boxed-svgrepo-com.svg' alt='facebook icon'></img></Link>
                    </div>
                </div>
                <div className="flex flex-col grid-b">
                    <Link href="tel:+447493208453" className="grid-e m-0! text-center md:text-right! hover:text-strange-pink">+44 7493 208453</Link>
                    <Link href="mailto:marydicandles@gmail.com" className="grid-e hover:text-strange-pink">marydicandles@gmail.com</Link>
                </div>
                <div className="grid-c mt-[30px] md:mt-[60px]!">
                    <p className="text-[10px] md:text-xs!">© 2025 MaRyDi Candles. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
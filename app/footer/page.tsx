import Link from "next/link";
import "../styles/css/footer.css";



export default function Footer() {
    return (
        <footer className="p-[30px] md:px-[60px] mt-[50px]! md:mt-[80px]!">
            <div>
                <div className="flex gap-[30px] flex-col md:flex-row justify-between xs-container">
                    <div className="m-[0]!">
                    <div className="max-w-[50vw] md:max-w-[50%] m-[0]!">
                        <h1 className="text-[16px] md:text-[24px] font-semibold">MaRyDi Candles</h1>
                        <p className="text-[12px] md:text-[14px] text-gray-500 pt-[10px]!">Handmade natural wax candle bouquets, hand-poured with love in East Kilbride, Scotland</p>
                    </div>
                    <div className="flex m-[0]! gap-[15px] pt-[15px]! items-center justify-between max-w-[fit-content]">
                        <Link href="https://www.instagram.com/marydi_candles?igsh=d2ZkYmdiN3Fwcno%3D&utm_source=qr"><img className="w-[15px] md:w-[20px]" src='/instagram-icon-svgrepo-com.svg' alt='instagram icon'></img></Link>
                        <Link href="https://www.facebook.com/profile.php?id=61582619720721"><img className="w-[15px] md:w-[20px]" src='/facebook-boxed-svgrepo-com.svg' alt='facebook icon'></img></Link>
                    </div>  
                </div>    
                <div className="flex max-w-[fit-content] line2 m-[0]! gap-[30px] justify-between ">
                    <div className="m-[0]!">
                        <p className="text-[10px] md:text-[12px] text-gray-500">EXPLORE</p>
                        <nav>
                            <ul>
                                <li><Link href="/home" className="text-[12px] md:text-[14px] hover:text-strange-pink hover:underline">Home</Link></li>
                                <li><Link href="/products" className="text-[12px] md:text-[14px] hover:text-strange-pink hover:underline">Products</Link></li>
                                <li><Link href="/guide" className="text-[12px] md:text-[14px] hover:text-strange-pink hover:underline">Guide</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <p className="text-[10px] md:text-[12px] text-gray-500">GET IN TOUCH</p>
                        <nav>
                            <ul>
                                <li><a href="tel:+447493208453" className="text-[12px] md:text-[14px] hover:text-strange-pink hover:underline">+44 7493 208453</a></li>
                                <li><a href="mailto:marydicandles@gmail.com" className="text-[12px] md:text-[14px] hover:text-strange-pink hover:underline">marydicandles@gmail.com</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                </div>
                <hr className="gray-line w-[60vw]! mt-[3rem]!"/>
                <p className="text-[10px] text-center md:text-[12px] pt-[10px] text-gray-500">©2025 MaRyDi Candles. All Rights Reserved.
                    <br />
                    Handmade in Scotland
                </p>
                
            </div>
            

        </footer>
    );
}
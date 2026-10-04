"use client"

import { useState } from "react"
import Link from "next/link"

const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/products", label: "PRODUCTS" },
    { href: "/guide", label: "GUIDE" },
    { href: "/about", label: "ABOUT" },
]

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
            <header className="relative mb-[30px]! bg-[#f0efec] md:mb-[60px]! z-50 px-2 py-4 md:p-4 border-b border-black/10 w-full grid grid-cols-[auto_1fr_auto] items-center">           
            <Link href="/" className="text-lg md:text-xl hover:text-strange-pink font-semibold whitespace-nowrap">
                MaRyDi Candles
            </Link>

            <nav className="hidden md:flex justify-center ">
                <ul className="flex gap-[15px] md:gap-[30px] text-strange-pink bg-light-beige">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href} className="hover:text-black transition-colors">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="md:hidden" />

            <div className="flex items-center gap-4 justify-self-end">
                <Link href="/cart" aria-label="View cart" className="hover:text-black">
                    <svg viewBox="0 0 24 24" height="30px" width="30px" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M3.55514 14.2572C2.83668 10.9043 2.47745 9.22793 3.378 8.11397C4.27855 7 5.99302 7 9.42196 7H14.5781C18.0071 7 19.7215 7 20.6221 8.11397C21.5226 9.22793 21.1634 10.9043 20.4449 14.2572L20.0164 16.2572C19.5294 18.5297 19.2859 19.666 18.4608 20.333C17.6357 21 16.4737 21 14.1495 21H9.85053C7.52639 21 6.36432 21 5.53925 20.333C4.71418 19.666 4.47069 18.5297 3.98372 16.2572L3.55514 14.2572Z" stroke="#000000" strokeWidth="1.5"></path>
                        <path opacity="0.5" d="M8 12H16" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path opacity="0.5" d="M10 15H14" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path opacity="0.6" d="M18 9L15 3" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path opacity="0.6" d="M6 9L9 3" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </Link>

                <button
                    className="md:hidden"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((v) => !v)}
                >
                    <svg viewBox="0 0 24 24" height="26px" width="26px" fill="none" stroke="#000000" strokeWidth="1.5" strokeLinecap="round">
                        {menuOpen ? (
                            <path d="M6 6L18 18M18 6L6 18" />
                        ) : (
                            <path d="M4 7H20M4 12H20M4 17H20" />
                        )}
                    </svg>
                </button>
            </div>

            {menuOpen && (
                <nav className="absolute top-full left-0 w-full bg-white border-t border-black/10 md:hidden col-span-3">
                    <ul className="flex flex-col text-strange-pink bg-light-beige">
                        {navLinks.map((link) => (
                            <li key={link.href} className="border-b border-black/5 last:border-none">
                                <Link
                                    href={link.href}
                                    className="block px-4 py-3 hover:text-black"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    )
}
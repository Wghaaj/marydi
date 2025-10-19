import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'MaRyDi Candles - Handmade Candle-Bouquets',
  description: 'MaryDi Candles creates stunning handmade natural wax candle bouquets...',
  keywords: [
    'MaryDi Candles',
    'handmade candles',
    'natural wax candles',
    'candle bouquets',
    'floral candles',
    'candle gifts',
    'wedding candles',
    'event candles',
    'eco-friendly candles',
    'custom candles UK',
    'decorative candles',
    'scented candles',
    'unique candle bouquets',
  ],
  icons: '/favicon.png',
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

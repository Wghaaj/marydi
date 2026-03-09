import "../styles/css/products.css";
import products from "../database/products.json"
import ProductCard from "../productCard/productCard";



export default function ProductsPage() {
  return (
    <>
      <section className="bg-strange-pink py-[30px] px-[30px] md:px-[30px] shadow-xl/30 border-t-[2px]">
        <p className="text-white text-sm md:text-base"><span className="font-bold">Handmade Scented Candle Bouquet</span> &mdash; Available in Large, Medium, Small & Mini</p>
        <p className="text-white text-sm md:text-base pt-[20px] md:pt-[30px]">A heartfelt, one-of-a-kind gift for birthdays, Mother&rsquo;s Day, International Women&rsquo;s Day, or simply to make someone feel appreciated.</p>
        <p className="text-white text-sm md:text-base pt-[20px] md:pt-[30px]">Each bouquet is crafted with love from natural wax candles and paired with gentle dried florals — a little bundle of warmth, beauty, and intention.</p>
      </section>
      <main className="px-[30px] md:px-[60px] pt-[60px] pb-[30px] md:pb-[60px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </>
    
  );
}

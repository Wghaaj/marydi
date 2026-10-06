import Link from "next/link";
import ProductCard from "../productCard/productCard";
import prisma from "@/app/lib/prisma";

const PRODUCTS_PER_PAGE = 10;

type ProductsPageProps = {
  searchParams: Promise<{
    page?: string;
  }>;
};

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const params = await searchParams;
  const requestedPage = Number(params.page) || 1;

  const totalProducts = await prisma.product.count();
  const totalPages = Math.max(1, Math.ceil(totalProducts / PRODUCTS_PER_PAGE));
  const currentPage = Math.min(Math.max(requestedPage, 1), totalPages);

  const dbProducts = await prisma.product.findMany({
    orderBy: { id: "asc" },
    skip: (currentPage - 1) * PRODUCTS_PER_PAGE,
    take: PRODUCTS_PER_PAGE,
  });

  const products = dbProducts.map(product => ({
    ...product,
    price: Number(product.price),
  }));

  return (
    <main className="text-[#2d2724]">
      <div className="max-w-[1120px] mx-auto px-5 sm:px-8 lg:px-10 py-12 md:py-20">

        {/* Heading */}
        <section className="border-b border-black/10 pb-8 md:pb-10">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8 md:gap-16 items-end">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#8f506c] mb-4">— &nbsp; The Collection</p>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-[54px] leading-[0.98] max-w-[520px]">Candle bouquets for every occasion</h1>
            </div>

            <p className="text-sm leading-6 text-black/55 md:pb-1">
              Each arrangement is made to order — choose a style below, or ask us to design something entirely your own.
            </p>
          </div>
        </section>

        {/* Products */}
        <section className="mt-12 md:mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-10">
            {products.map(product => <ProductCard key={product.id} product={product} />)}
          </div>
        </section>

        {/* Pagination */}
        {totalPages > 1 && (
          <nav className="flex justify-center items-center gap-2 mt-14">
            {currentPage > 1 && (
              <Link href={`/products?page=${currentPage - 1}`} className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center hover:border-[#8f506c]">←</Link>
            )}

            {Array.from({ length: totalPages }, (_, index) => {
              const page = index + 1;

              return (
                <Link
                  key={page}
                  href={`/products?page=${page}`}
                  className={`w-10 h-10 rounded-full border flex items-center justify-center text-sm transition ${page === currentPage ? "bg-[#683c51] border-[#683c51] text-white" : "border-black/15 hover:border-[#8f506c]"}`}
                >
                  {page}
                </Link>
              );
            })}

            {currentPage < totalPages && (
              <Link href={`/products?page=${currentPage + 1}`} className="w-10 h-10 rounded-full border border-black/15 flex items-center justify-center hover:border-[#8f506c]">→</Link>
            )}
          </nav>
        )}

        {/* Custom order */}
        <section className="mt-16 md:mt-24 bg-[#683c51] text-white rounded-[22px] px-7 py-10 md:px-12 md:py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-[420px]">
              <h2 className="font-serif text-3xl md:text-4xl leading-tight">Don't see quite what you're picturing?</h2>
              <p className="text-sm text-white/70 leading-6 mt-4">Tell us your colours, occasion, and budget — we'll design a one-off bouquet just for you.</p>
            </div>

            <Link href="/form" className="inline-flex justify-center items-center self-start md:self-auto bg-[#f8f3eb] text-[#683c51] rounded-full px-7 h-[46px] text-xs font-bold tracking-[0.08em] uppercase whitespace-nowrap hover:opacity-90">
              Start a custom order
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
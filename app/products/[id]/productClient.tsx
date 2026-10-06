"use client";

import { useMemo, useState } from "react";
import { Gift, Heart, Leaf, Sparkles } from "lucide-react";
import { useCart } from "@/app/context/cartContext";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image1: string;
  image2: string | null;
  image3: string | null;
  image4: string | null;
  waxtype: string | null;
  width: string | null;
  height: string | null;
};

type Option = {
  id: number;
  name: string;
};

type Props = {
  product: Product;
  colourOptions: Option[];
  scentOptions: Option[];
  relatedProducts: Product[];
};

const preferredColours = ["Pink", "White", "Beige", "Red", "Green"];

const whyChoose = [
  "Lasts longer and doesn’t fade",
  "Decorative even when not lit",
  "No watering or maintenance",
  "Perfect keepsake gift",
];

const careInstructions = [
  "Candles should be removed from the arrangement before lighting",
  "Always place on a heat-safe surface",
  "Trim the wick to approx. 5mm prior to use",
  "Keep away from drafts, children and pets",
  "Never leave a candle burning unattended",
];

function getColourDotClass(name: string) {
  switch (name.toLowerCase()) {
    case "pink": return "bg-pink-300";
    case "white": return "bg-white border border-black/10";
    case "beige": return "bg-[#d8b38a]";
    case "red": return "bg-red-500";
    case "green": return "bg-green-500";
    case "orange": return "bg-orange-400";
    case "blue": return "bg-blue-400";
    case "navy blue": return "bg-blue-900";
    case "teal": return "bg-teal-500";
    case "brown": return "bg-amber-700";
    case "custom": return "bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300";
    default: return "bg-gray-300";
  }
}

function getScentDotClass(name: string) {
  switch (name.toLowerCase()) {
    case "sandalwood & vanilla": return "bg-[#d9b98f]";
    case "peony": return "bg-pink-200";
    case "jasmine": return "bg-[#f1dfb9]";
    case "custom": return "bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200";
    default: return "bg-gray-300";
  }
}

type OptionButtonProps = {
  label: string;
  selected: boolean;
  onClick: () => void;
  dotClass?: string;
  other?: boolean;
};

function OptionButton({ label, selected, onClick, dotClass, other = false }: OptionButtonProps) {
  return (
    <button type="button" onClick={onClick} className={`!m-0 !w-full !h-[52px] !max-w-none rounded-full border !px-4 flex items-center text-[11px] sm:text-xs font-semibold uppercase tracking-[0.03em] transition ${selected ? "border-[#9d5877] text-[#9d5877] bg-white" : "border-black/10 bg-white/70 hover:border-[#9d5877]"}`}>
      <span className="w-5 h-5 shrink-0 flex items-center justify-center">
        {other ? <Sparkles size={17} /> : <span className={`w-5 h-5 rounded-full shrink-0 ${dotClass}`} />}
      </span>
      <span className="flex-1 text-center leading-tight px-2">{label}</span>
      <span className="w-5 h-5 shrink-0" />
    </button>
  );
}

export default function ProductClient({ product, colourOptions, scentOptions, relatedProducts }: Props) {
  const { addToCart } = useCart();

  const [colors, setColors] = useState<string[]>([]);
  const [scent, setScent] = useState("");
  const [comment, setComment] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [showOtherColours, setShowOtherColours] = useState(false);
  const [activeTab, setActiveTab] = useState<"description" | "why" | "care">("description");

  const images = [product.image1, product.image2, product.image3, product.image4].filter(Boolean) as string[];
  const [mainImage, setMainImage] = useState(images[0]);

  const customColour = colourOptions.find(colour => colour.name.toLowerCase() === "custom");

  const visibleColours = useMemo(() => preferredColours.map(name => colourOptions.find(colour => colour.name.toLowerCase() === name.toLowerCase())).filter(Boolean) as Option[], [colourOptions]);

  const otherColours = useMemo(() => colourOptions.filter(colour => colour.name.toLowerCase() !== "custom" && !visibleColours.some(visible => visible.id === colour.id)), [colourOptions, visibleColours]);

  const normalScents = scentOptions.filter(option => option.name.toLowerCase() !== "custom");

  function toggleColor(color: string) {
    if (colors.includes(color)) {
      setColors(colors.filter(item => item !== color));
      return;
    }

    if (colors.length < 3) setColors([...colors, color]);
  }

  function addItem() {
    if (colors.length === 0 || !scent) return;

    addToCart({
      id: product.id,
      name: product.name,
      image: product.image1,
      price: product.price,
      colors,
      scent,
      comment,
      quantity,
    });

    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <main className="text-[#2d2724]">
      <div className="max-w-[1180px] mx-auto px-5 md:px-8 py-8 md:py-12">

        <div className="!m-0 text-xs md:text-sm mb-[15px]! text-black/45 mb-7">
          <span>Home </span><span className="mx-2"> ›</span><span> Products </span><span className="mx-2">› </span><span>{product.name}</span>
        </div>

        <section className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-start">

          <div className="!m-0 min-w-0">
            <div className="!m-0 rounded-[22px] overflow-hidden bg-[#ead0d3]">
              <img src={mainImage} alt={product.name} className="w-full aspect-[4/5] md:aspect-square object-cover" />
            </div>

            <div className="!m-0 grid grid-cols-4 gap-3 mt-3!">
              {images.map(image => (
                <button type="button" key={image} onClick={() => setMainImage(image)} className={`!m-0 !p-0 !w-full overflow-hidden rounded-xl border-2 ${mainImage === image ? "border-[#9d5877]" : "border-transparent"}`}>
                  <img src={image} alt={product.name} className="w-full aspect-square object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="!m-0 min-w-0">
            <p className="!m-0 text-xs tracking-[0.22em] text-[#9d5877] font-semibold mb-3 mb-[10px]!">HANDMADE CANDLE BOUQUET</p>
            <h1 className="!m-0 font-serif text-4xl md:text-5xl leading-[1.1] mb-[15px]!">{product.name}</h1>
            <p className="!m-0 font-serif text-3xl mb-[15px]!">£{product.price.toFixed(2)}</p>

            <div className="border-b border-black/10 mt-6" />

            <div className="!m-0 mt-5!">
              <div className="!m-0 flex justify-between items-center mb-4!">
                <p className="!m-0 text-xs font-bold tracking-[0.18em]">COLOUR</p>
                <p className="!m-0 text-xs text-black/45">Choose up to three</p>
              </div>

              <div className="!m-0 grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
                {visibleColours.map(colour => (
                  <OptionButton key={colour.id} label={colour.name} selected={colors.includes(colour.name)} onClick={() => toggleColor(colour.name)} dotClass={getColourDotClass(colour.name)} />
                ))}

                {otherColours.length > 0 && (
                  <OptionButton label="Other" selected={showOtherColours} onClick={() => setShowOtherColours(!showOtherColours)} other />
                )}

                {customColour && (
                  <OptionButton label="Custom" selected={colors.includes(customColour.name)} onClick={() => toggleColor(customColour.name)} dotClass={getColourDotClass(customColour.name)} />
                )}
              </div>

              {showOtherColours && (
                <div className="!m-0 mt-4 p-4 md:p-5 bg-white/65 rounded-[22px] border border-black/10">
                  <p className="!m-0 text-xs font-bold tracking-[0.14em] mb-4">MORE COLOURS</p>

                  <div className="!m-0 grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {otherColours.map(colour => (
                      <button key={colour.id} type="button" onClick={() => toggleColor(colour.name)} className={`!m-0 !w-full !h-[42px] rounded-full border !px-3 flex items-center text-[10px] sm:text-xs font-semibold uppercase transition ${colors.includes(colour.name) ? "border-[#9d5877] text-[#9d5877] bg-white" : "border-black/10 bg-white hover:border-[#9d5877]"}`}>
                        <span className={`w-4 h-4 rounded-full shrink-0 ${getColourDotClass(colour.name)}`} />
                        <span className="flex-1 text-center">{colour.name}</span>
                        <span className="w-4" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="!m-0 mt-8!">
              <p className="!m-0 text-xs font-bold tracking-[0.18em] mb-4!">SCENT</p>

              <div className="!m-0 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                {normalScents.map(option => (
                  <OptionButton key={option.id} label={option.name} selected={scent === option.name} onClick={() => setScent(option.name)} dotClass={getScentDotClass(option.name)} />
                ))}

                <OptionButton label="Custom" selected={scent === "Custom"} onClick={() => setScent("Custom")} dotClass={getScentDotClass("Custom")} />
              </div>
            </div>

            <div className="!m-0 mt-8!">
              <label className="text-xs font-bold tracking-[0.18em]">ADD A COMMENT (OPTIONAL)</label>

              <div className="relative !m-0 mt-3!">
                <textarea value={comment} maxLength={200} onChange={e => setComment(e.target.value)} placeholder="e.g. custom colours, specific occasion..." className="!m-0 w-full min-h-[120px] resize-none rounded-[22px] border border-black/15 bg-transparent px-5 py-4 pb-8 outline-none focus:border-[#9d5877]" />
                <span className="absolute bottom-3 right-5 text-xs text-black/40">{comment.length}/200</span>
              </div>
            </div>

            <div className="!m-0 flex flex-col sm:flex-row gap-3 mt-6!">
              <div className="!m-0 flex items-center justify-between border border-black/15 rounded-full px-5 h-[54px] sm:w-[160px] bg-white/50">
                <button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))} className="!m-0 text-xl">−</button>
                <span>{quantity}</span>
                <button type="button" onClick={() => setQuantity(quantity + 1)} className="!m-0 text-xl">+</button>
              </div>

              <button type="button" onClick={addItem} className="!m-0 !w-full h-[54px] sm:flex-1 rounded-full bg-[#9d5877] text-white text-sm font-semibold tracking-[0.04em] hover:opacity-90 transition">ADD TO CART</button>
            </div>

            {colors.length === 0 && <p className="!m-0 text-xs text-black/45 mt-2">Please select at least one product.</p>}
            {added && <p className="!m-0 text-sm text-[#9d5877] mt-3">✓ Item added to cart</p>}
          </div>
        </section>

        <section className="!m-0 grid grid-cols-1 sm:grid-cols-3 border-y border-black/10 mt-14">
          <div className="!m-0 py-6 px-4 flex flex-col items-center text-center gap-2">
            <Leaf size={24} className="text-[#8f506c]" />
            <p className="!m-0 text-xs font-bold tracking-[0.18em]">HANDMADE</p>
            <p className="!m-0 text-sm text-black/50">Crafted with love</p>
          </div>

          <div className="!m-0 py-6 px-4 flex flex-col items-center text-center gap-2 border-t sm:border-t-0 sm:border-x border-black/10">
            <Gift size={24} className="text-[#8f506c]" />
            <p className="!m-0 text-xs font-bold tracking-[0.18em]">PERFECT GIFT</p>
            <p className="!m-0 text-sm text-black/50">For any occasion</p>
          </div>

          <div className="!m-0 py-6 px-4 flex flex-col items-center text-center gap-2 border-t sm:border-t-0 border-black/10">
            <Heart size={24} className="text-[#8f506c]" />
            <p className="!m-0 text-xs font-bold tracking-[0.18em]">LONG LASTING</p>
            <p className="!m-0 text-sm text-black/50">A lasting keepsake</p>
          </div>
        </section>

        <section className="!m-0 mt-0">
          <div className="!m-0 grid grid-cols-3 border-b border-black/10 w-full">
            <button type="button" onClick={() => setActiveTab("description")} className={`!m-0 !w-full py-4 px-1 text-[10px] sm:text-xs tracking-[0.12em] text-center ${activeTab === "description" ? "border-b-2 border-[#9d5877] text-[#9d5877]" : ""}`}>DESCRIPTION</button>
            <button type="button" onClick={() => setActiveTab("why")} className={`!m-0 !w-full py-4 px-1 text-[10px] sm:text-xs tracking-[0.12em] text-center ${activeTab === "why" ? "border-b-2 border-[#9d5877] text-[#9d5877]" : ""}`}>WHY CHOOSE</button>
            <button type="button" onClick={() => setActiveTab("care")} className={`!m-0 !w-full py-4 px-1 text-[10px] sm:text-xs tracking-[0.12em] text-center ${activeTab === "care" ? "border-b-2 border-[#9d5877] text-[#9d5877]" : ""}`}>CARE INSTRUCTIONS</button>
          </div>

          <div className="!m-0 py-8">
            {activeTab === "description" && (
              <div className="!m-0 grid grid-cols-1 md:grid-cols-[220px_minmax(0,1fr)] gap-8 lg:gap-20 items-start">
                <div className="!m-0 text-sm leading-6">
                  <p className="!m-0"><span className="font-semibold">Wax Type:</span> {product.waxtype}</p>
                  <p className="!m-0"><span className="font-semibold">Item Width:</span> {product.width}</p>
                  <p className="!m-0"><span className="font-semibold">Item Height:</span> {product.height}</p>
                </div>

                <p className="!m-0 text-sm md:text-base leading-7 text-black/60 max-w-[680px]">{product.description}</p>
              </div>
            )}

            {activeTab === "why" && (
              <ul className="!m-0 space-y-3 text-sm md:text-base">
                {whyChoose.map(item => <li key={item}>— {item}</li>)}
              </ul>
            )}

            {activeTab === "care" && (
              <ul className="!m-0 space-y-3 text-sm md:text-base">
                {careInstructions.map(item => <li key={item}>— {item}</li>)}
              </ul>
            )}
          </div>
        </section>

        {relatedProducts.length > 0 && (
          <section className="!m-0 border-t border-black/10 pt-9 mt-2">
            <div className="!m-0 flex justify-between items-end gap-5 mb-6! w-full">
              <h2 className="!m-0 font-serif text-3xl md:text-4xl">You may also like</h2>
              <a href="/products" className="!m-0 text-sm hover:text-[#9d5877] whitespace-nowrap">View all →</a>
            </div>

            <div className="!m-0 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map(item => (
                <a href={`/products/${item.id}`} key={item.id} className="!m-0 group min-w-0">
                  <div className="!m-0 overflow-hidden rounded-2xl bg-[#ead0d3]">
                    <img src={item.image1} alt={item.name} className="w-full aspect-square object-cover group-hover:scale-[1.03] transition" />
                  </div>

                  <p className="!m-0 font-serif mt-3">{item.name}</p>
                  <p className="!m-0 text-sm mt-1">£{item.price.toFixed(2)}</p>
                </a>
              ))}
            </div>
          </section>
        )}

      </div>
    </main>
  );
}
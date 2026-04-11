import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { menuItems } from "@/lib/data/menu";
import { DietaryBadge } from "@/components/ui/Badge";
import type { MenuCategory, DietaryTag } from "@/types";
import { ShoppingBag, AlertCircle } from "lucide-react";

type CategoryConfig = {
  id: MenuCategory | string;
  label: string;
  emoji: string;
  anchor: string;
  description: string;
};

const categories: CategoryConfig[] = [
  { id: "starters", label: "Shawarma & Sides", emoji: "🌯", anchor: "shawarma", description: "Freshly prepared shawarmas, sides and extras" },
  { id: "mains", label: "Mains — African & Pizza", emoji: "🍛🍕", anchor: "african", description: "Our beloved African dishes and signature pizza selection" },
  { id: "cocktails", label: "Cocktails & Coffee", emoji: "☕", anchor: "drinks", description: "Signature hot and cold beverages" },
  { id: "soft-drinks", label: "Soft Drinks & Juices", emoji: "🥤", anchor: "softdrinks", description: "Fresh juices, Tiger Nut Drink and more" },
];

const formatPrice = (price: number) =>
  `₦${price.toLocaleString("en-NG")}`;

export const metadata = {
  title: "Menu",
  description: "Browse the full Crush Cafe menu — bar cocktails, restaurant mains, starters and drinks.",
};

export default function MenuPage() {
  const getItems = (category: string) =>
    menuItems.filter((i) => i.category === category && i.available);

  const unavailableItems = menuItems.filter((i) => !i.available);

  return (
    <>
      <Header />
      <main className="pt-24 lg:pt-28 pb-20">
        {/* Page hero */}
        <div className="relative bg-noir-800 py-20 px-6 text-center overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/gallery/outdoor-dining.jpg" alt="Crush Cafe" fill className="object-cover opacity-20" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-b from-noir-900/80 to-noir-900/95" />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <p className="overline mb-4">Our Menu</p>
            <div className="gold-line w-20 mx-auto mb-6" />
            <h1 className="font-display text-6xl lg:text-7xl font-light text-cream-100 mb-5">
              The Full <em className="text-gold-500">Menu</em>
            </h1>
            <p className="font-body text-sm text-stone-light leading-relaxed">
              Crafted with passion. Bold in flavour. Abuja&apos;s finest bar, restaurant and fine dining menu.
            </p>
          </div>
        </div>

        {/* Category nav sticky */}
        <div className="sticky top-18 lg:top-22 z-30 bg-noir-900/98 backdrop-blur-md border-b border-gold-700/15">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 overflow-x-auto no-scrollbar">
            <div className="flex gap-1 py-3 min-w-max">
              {categories.map((cat) => (
                <a
                  key={cat.anchor}
                  href={`#${cat.anchor}`}
                  className="font-body text-[0.62rem] uppercase tracking-[0.18em] px-5 py-2 text-stone-light hover:text-gold-500 hover:bg-gold-500/8 transition-all duration-200 whitespace-nowrap border border-transparent hover:border-gold-500/20"
                >
                  {cat.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Allergen notice */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-10">
          <div className="flex gap-3 items-start bg-amber-900/15 border border-amber-700/25 p-4">
            <AlertCircle size={15} className="text-amber-500 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
            <p className="font-body text-xs text-stone-light leading-relaxed">
              <span className="text-amber-400 font-medium">Allergen Notice:</span> Our dishes are prepared in a kitchen that handles nuts, gluten, dairy, shellfish, and eggs. Please inform your server of any dietary requirements or allergies. Menu items marked with dietary tags are prepared with care but cannot be guaranteed 100% free from cross-contamination.
            </p>
          </div>
        </div>

        {/* Dietary key */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-6 flex flex-wrap gap-2 items-center">
          <span className="font-body text-[0.6rem] uppercase tracking-[0.2em] text-stone-warm mr-2">Key:</span>
          {(["vegetarian","vegan","gluten-free","halal","dairy-free"] as DietaryTag[]).map((tag) => (
            <DietaryBadge key={tag} tag={tag} showFull />
          ))}
        </div>

        {/* Sections */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-24 mt-16">

          {/* Shawarma & Sides */}
          <section id="shawarma">
            <div className="mb-10">
              <p className="overline mb-3">🌯 Shawarma & Sides</p>
              <div className="gold-line w-16 mb-5" />
              <h2 className="font-display text-4xl font-light text-cream-100">Shawarma & Sides</h2>
              <p className="font-body text-sm text-stone-light mt-2">Freshly prepared, perfectly wrapped and seasoned</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {getItems("starters").map((item) => (
                <MenuCard key={item.id} item={item} />
              ))}
            </div>
          </section>

          {/* African Mains */}
          <section id="african">
            <div className="mb-10">
              <p className="overline mb-3">🍛 African Dishes</p>
              <div className="gold-line w-16 mb-5" />
              <h2 className="font-display text-4xl font-light text-cream-100">African Mains</h2>
              <p className="font-body text-sm text-stone-light mt-2">Authentic flavours with a contemporary touch</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {getItems("mains").filter(i => !i.name.toLowerCase().includes("pizza")).map((item) => (
                <MenuCard key={item.id} item={item} />
              ))}
            </div>

            {/* Pizza sub-section */}
            <div id="pizza" className="mt-16 mb-10">
              <p className="overline mb-3">🍕 Pizza</p>
              <div className="gold-line w-16 mb-5" />
              <h2 className="font-display text-4xl font-light text-cream-100">Pizzas</h2>
              <p className="font-body text-sm text-stone-light mt-2">Medium ₦10,000 — ₦13,000 &nbsp;·&nbsp; Large add ₦2,500</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {getItems("mains").filter(i => i.name.toLowerCase().includes("pizza")).map((item) => (
                <MenuCard key={item.id} item={item} featured={item.featured} />
              ))}
            </div>
          </section>

          {/* Drinks */}
          <section id="drinks">
            <div className="mb-10">
              <p className="overline mb-3">☕ Drinks</p>
              <div className="gold-line w-16 mb-5" />
              <h2 className="font-display text-4xl font-light text-cream-100">Drinks & Beverages</h2>
              <p className="font-body text-sm text-stone-light mt-2">Signature drinks crafted to refresh and delight</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[...getItems("cocktails"), ...getItems("soft-drinks")].map((item) => (
                <MenuCard key={item.id} item={item} />
              ))}
            </div>
          </section>

          {/* Unavailable items */}
          {unavailableItems.length > 0 && (
            <section>
              <div className="mb-8">
                <p className="overline mb-3">Temporarily Unavailable</p>
                <div className="gold-line w-16 mb-4" />
                <h3 className="font-display text-2xl font-light text-stone-warm">Currently Off Menu</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 opacity-50">
                {unavailableItems.map((item) => (
                  <MenuCard key={item.id} item={item} unavailable />
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Order CTA */}
        <div className="mt-24 bg-noir-800 py-16 px-6 text-center">
          <p className="overline mb-4">Ready to Order?</p>
          <h2 className="font-display text-4xl font-light text-cream-100 mb-6">
            Order for <em className="text-gold-500">delivery or collection</em>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/order" className="font-body text-[0.7rem] uppercase tracking-[0.22em] px-10 py-4 bg-gold-500 text-noir-900 hover:bg-gold-400 transition-all duration-300 font-medium flex items-center gap-2.5">
              <ShoppingBag size={14} /> Order Online
            </Link>
            <Link href="/reservations" className="font-body text-[0.7rem] uppercase tracking-[0.22em] px-10 py-4 border border-gold-500/50 text-gold-500 hover:border-gold-500 transition-all duration-300">
              Book a Table
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function MenuCard({
  item,
  featured,
  unavailable,
}: {
  item: (typeof menuItems)[0];
  featured?: boolean;
  unavailable?: boolean;
}) {
  return (
    <div className={`relative bg-noir-800 border transition-all duration-300 group ${
      unavailable ? "border-cream-100/5 cursor-not-allowed" : "border-cream-100/5 hover:border-gold-500/25 hover:bg-noir-700"
    } ${featured ? "ring-1 ring-gold-500/20" : ""}`}>
      {item.image && (
        <div className="relative aspect-[4/3] overflow-hidden img-hover bg-noir-700">
          <Image src={item.image} alt={item.name} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
          {unavailable && (
            <div className="absolute inset-0 bg-noir-950/70 flex items-center justify-center">
              <span className="font-body text-[0.62rem] uppercase tracking-[0.2em] text-stone-warm border border-stone-warm/40 px-3 py-1">
                Unavailable
              </span>
            </div>
          )}
        </div>
      )}
      <div className="p-5">
        {featured && !unavailable && (
          <span className="overline text-[0.55rem] text-gold-500 mb-2 block">House Special</span>
        )}
        {item.seasonal && (
          <span className="overline text-[0.55rem] text-amber-500 mb-2 block">Seasonal</span>
        )}
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-display text-lg font-light text-cream-100 leading-snug">{item.name}</h3>
          <span className="font-display text-base text-gold-500 flex-shrink-0">
            {item.variants && item.variants.length > 0 ? `from ₦${item.price.toLocaleString()}` : `₦${item.price.toLocaleString()}`}
          </span>
        </div>
        <p className="font-body text-xs text-stone-light leading-relaxed mb-4">{item.description}</p>
        {item.dietary.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {item.dietary.map((tag) => (
              <DietaryBadge key={tag} tag={tag as DietaryTag} />
            ))}
          </div>
        )}
        {item.variants && item.variants.length > 0 && (
          <div className="mt-3 pt-3 border-t border-cream-100/5">
            <p className="font-body text-[0.6rem] uppercase tracking-[0.15em] text-stone-warm mb-2">Options</p>
            <div className="flex flex-wrap gap-1.5">
              {item.variants.slice(0, 4).map((v) => (
                <span key={v.id} className="font-body text-[0.6rem] border border-cream-100/15 px-2 py-0.5 text-stone-light">
                  {v.name}
                </span>
              ))}
              {item.variants.length > 4 && (
                <span className="font-body text-[0.6rem] text-stone-warm">+{item.variants.length - 4} more</span>
              )}
            </div>
          </div>
        )}
        {!unavailable && (
          <Link href="/order" className="mt-4 w-full font-body text-[0.62rem] uppercase tracking-[0.18em] py-2.5 bg-gold-500/10 border border-gold-500/25 text-gold-500 hover:bg-gold-500 hover:text-noir-900 transition-all duration-300 flex items-center justify-center gap-2">
            <ShoppingBag size={11} /> Add to Order
          </Link>
        )}
      </div>
    </div>
  );
}

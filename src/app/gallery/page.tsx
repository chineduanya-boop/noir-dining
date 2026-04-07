import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const galleryImages = [
  {
    src: "/images/gallery/food-1.jpg",
    alt: "Signature Jollof Rice with fried plantains and Tiger Nut Drink",
    caption: "Signature Jollof Rice",
    category: "food",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/gallery/food-2.jpg",
    alt: "African stew with fried yam chips and sweet plantains",
    caption: "African Stew Platter",
    category: "food",
    span: "",
  },
  {
    src: "/images/gallery/drinks-1.jpg",
    alt: "Signature mocha coffee float at Major Chow lounge with billiards table",
    caption: "Mocha Coffee Float — Lounge",
    category: "drinks",
    span: "",
  },
  {
    src: "/images/gallery/interior-1.jpg",
    alt: "Major Chow Restaurant dining room — marble floors and warm lighting",
    caption: "Our Dining Room",
    category: "interior",
    span: "md:col-span-2",
  },
  {
    src: "/images/brand/logo-sign.jpg",
    alt: "Major-Chow Restaurant exterior signage — black and gold",
    caption: "Major Chow Exterior",
    category: "exterior",
    span: "",
  },
  {
    src: "/images/brand/logo-branding.jpg",
    alt: "Major Chow Restaurant brand — Eat Healthy, Live Healthy",
    caption: "Eat Healthy, Live Healthy",
    category: "brand",
    span: "",
  },
  {
    src: "/images/food/banner-dishes.jpg",
    alt: "A selection of Major Chow dishes — Chow Now Worry Later",
    caption: "Chow Now, Worry Later",
    category: "food",
    span: "md:col-span-2",
  },
];

const categories = [
  { id: "all", label: "All" },
  { id: "food", label: "Food" },
  { id: "drinks", label: "Drinks" },
  { id: "interior", label: "Interior" },
  { id: "exterior", label: "Exterior" },
  { id: "brand", label: "Brand" },
];

export const metadata = {
  title: "Gallery",
  description: "A visual journey through Major Chow Restaurant — food, ambience and atmosphere.",
};

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="pt-24 lg:pt-28 pb-20">
        {/* Hero */}
        <div className="relative bg-noir-800 py-20 px-6 text-center overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/gallery/interior-1.jpg" alt="Major Chow interior" fill className="object-cover opacity-25" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-b from-noir-900/85 to-noir-900/95" />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <p className="overline mb-4">Gallery</p>
            <div className="gold-line w-20 mx-auto mb-6" />
            <h1 className="font-display text-6xl lg:text-7xl font-light text-cream-100 mb-5">
              Our <em className="text-gold-500">World</em>
            </h1>
            <p className="font-body text-sm text-stone-light leading-relaxed">
              A visual journey through the food, atmosphere and spirit of Major Chow Restaurant.
            </p>
          </div>
        </div>

        {/* Gallery grid */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[280px]">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden group cursor-pointer bg-noir-800 ${img.span}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width:640px) 100vw, (max-width:768px) 50vw, 25vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-noir-950/0 group-hover:bg-noir-950/60 transition-all duration-400 flex items-end p-5">
                  <div className="translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                    <span className="overline text-[0.56rem] text-gold-500 mb-1 block">{img.category}</span>
                    <p className="font-display text-lg font-light text-cream-50">{img.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center px-6">
          <p className="overline mb-4">Experience it in person</p>
          <div className="gold-line w-20 mx-auto mb-6" />
          <h2 className="font-display text-4xl font-light text-cream-100 mb-8">
            Come visit <em className="text-gold-500">Major Chow</em>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/reservations" className="font-body text-[0.7rem] uppercase tracking-[0.22em] px-10 py-4 border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-noir-900 transition-all duration-300">
              Book a Table
            </Link>
            <Link href="/order" className="font-body text-[0.7rem] uppercase tracking-[0.22em] px-10 py-4 bg-gold-500 text-noir-900 hover:bg-gold-400 transition-all duration-300 font-medium">
              Order Online
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

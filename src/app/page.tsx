import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ChevronDown, MapPin, Clock, Phone, Star, ArrowRight } from "lucide-react";

const featuredExperiences = [
  {
    id: 1,
    name: "The Bar",
    description: "Premium spirits, craft cocktails and an extensive wine list served at our sleek dark bar counter",
    tag: "Signature Experience",
    image: "/images/gallery/bar-interior.jpg",
    fallbackBg: "bg-amber-950",
  },
  {
    id: 2,
    name: "Outdoor Terrace",
    description: "Al fresco dining under string lights — our iconic open-air deck is the heart of Crush Cafe",
    tag: "Most Loved",
    image: "/images/gallery/outdoor-dining.jpg",
    fallbackBg: "bg-stone-800",
  },
  {
    id: 3,
    name: "Fine Dining",
    description: "World-class cuisine in an elegant setting — where every detail of your evening is perfected",
    tag: "Premium Dining",
    image: "/images/gallery/daytime-interior.jpg",
    fallbackBg: "bg-zinc-900",
  },
];

const testimonials = [
  {
    name: "Amaka T.",
    rating: 5,
    text: "The outdoor terrace at night is absolutely magical. String lights everywhere, great music, incredible food — Crush Cafe is in a league of its own in Abuja.",
  },
  {
    name: "Emeka F.",
    rating: 5,
    text: "Best cocktails in Abuja, hands down. The bar staff really know their craft. And the terrace view at sunset? Unforgettable.",
  },
  {
    name: "Zainab A.",
    rating: 5,
    text: "We had our anniversary dinner here and it was perfect. The service, the food, the atmosphere — everything was elevated. We keep coming back.",
  },
];

const menuCategories = [
  { label: "Bar & Cocktails", icon: "🍹", href: "/menu#bar", desc: "Craft cocktails, premium spirits & wine" },
  { label: "Restaurant Mains", icon: "🍽️", href: "/menu#mains", desc: "Grills, seafood, pasta & African classics" },
  { label: "Starters & Sides", icon: "🥗", href: "/menu#starters", desc: "Sharing plates, soups & fresh starters" },
  { label: "Drinks & Mocktails", icon: "🥤", href: "/menu#drinks", desc: "Fresh juices, mocktails & soft drinks" },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 z-0 bg-noir-950">
            <Image
              src="/images/gallery/outdoor-dining.jpg"
              alt="Crush Cafe Abuja — outdoor terrace at sunset"
              fill
              priority
              className="object-cover object-center opacity-65"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-noir-950/80 via-noir-900/60 to-noir-950/90" />
          </div>

          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="gold-line w-12" />
              <span className="overline text-[0.6rem]">Bar · Restaurant · Fine Dining · Abuja</span>
              <div className="gold-line w-12" />
            </div>

            {/* Crush Cafe logo mark */}
            <div className="flex justify-center mb-6">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 lg:w-24 lg:h-24">
                <circle cx="50" cy="50" r="46" fill="#e8632a" opacity="0.15"/>
                <circle cx="50" cy="50" r="46" stroke="#e8632a" strokeWidth="2.5" fill="none"/>
                <path d="M72 32 C72 32 60 22 45 22 C28 22 16 34 16 50 C16 66 28 78 45 78 C60 78 72 68 72 68" stroke="#e8632a" strokeWidth="5" fill="none" strokeLinecap="round"/>
                <circle cx="72" cy="50" r="8" fill="#e8632a"/>
              </svg>
            </div>

            <h1 className="font-display text-6xl sm:text-7xl lg:text-9xl font-light tracking-[0.05em] text-cream-50 mb-2">
              CRUSH
              <br />
              <span className="gold-shimmer italic">CAFE</span>
            </h1>
            <p className="font-body text-[0.7rem] uppercase tracking-[0.3em] text-gold-600 mb-8">Abuja, Nigeria</p>
            <p className="font-display text-xl lg:text-2xl font-light italic text-cream-200 mb-12 leading-relaxed">
              &ldquo;Where Every Moment is Unforgettable&rdquo;
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/reservations" className="font-body text-[0.7rem] uppercase tracking-[0.22em] px-10 py-4 border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-noir-900 transition-all duration-300 w-full sm:w-auto text-center">
                Book a Table
              </Link>
              <Link href="/order" className="font-body text-[0.7rem] uppercase tracking-[0.22em] px-10 py-4 bg-gold-500 text-noir-900 hover:bg-gold-400 transition-all duration-300 font-medium w-full sm:w-auto text-center">
                Order Now
              </Link>
            </div>
          </div>

          <a href="#featured" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone-warm hover:text-gold-500 transition-colors">
            <span className="font-body text-[0.56rem] uppercase tracking-[0.3em]">Explore</span>
            <ChevronDown size={14} className="animate-bounce" />
          </a>
        </section>

        {/* ── MARQUEE STRIP ────────────────────────────────────── */}
        <div className="bg-gold-500 py-3 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {Array(8).fill(null).map((_, i) => (
              <span key={i} className="font-body text-[0.62rem] uppercase tracking-[0.22em] text-noir-900 font-medium mx-6">
                Bar &amp; Cocktails &nbsp;&bull;&nbsp; Fine Dining &nbsp;&bull;&nbsp; Outdoor Terrace &nbsp;&bull;&nbsp; Private Events &nbsp;&bull;&nbsp; Billiards Lounge &nbsp;&bull;&nbsp; Abuja&apos;s Premier Destination &nbsp;&bull;&nbsp;
              </span>
            ))}
          </div>
        </div>

        {/* ── SIGNATURE EXPERIENCES ────────────────────────────── */}
        <section id="featured" className="py-28 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="overline mb-4">Signature Experiences</p>
            <div className="gold-line w-20 mx-auto mb-6" />
            <h2 className="font-display text-5xl lg:text-6xl font-light text-cream-100">
              Three worlds,
              <br />
              <em className="text-gold-500">one destination</em>
            </h2>
            <p className="font-body text-sm text-stone-light mt-5 max-w-xl mx-auto leading-relaxed">
              From our moody cocktail bar to the sun-drenched outdoor terrace and our refined fine dining room — Crush Cafe offers an experience unlike anywhere else in Abuja.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {featuredExperiences.map((exp) => (
              <div key={exp.id} className="group relative overflow-hidden aspect-[4/5]">
                <div className={`absolute inset-0 ${exp.fallbackBg}`} />
                <Image
                  src={exp.image}
                  alt={exp.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width:768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir-950/90 via-noir-900/30 to-transparent" />
                <div className="absolute inset-0 p-7 flex flex-col justify-end">
                  <span className="overline text-[0.56rem] text-gold-400 mb-2">{exp.tag}</span>
                  <h3 className="font-display text-2xl font-light text-cream-50 mb-2">{exp.name}</h3>
                  <p className="font-body text-xs text-stone-light mb-4 leading-relaxed">{exp.description}</p>
                  <div className="flex items-center justify-between">
                    <Link href="/reservations" className="font-body text-[0.58rem] uppercase tracking-[0.2em] text-gold-500 hover:text-gold-300 flex items-center gap-1">
                      Reserve <ArrowRight size={10} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/menu" className="font-body text-[0.68rem] uppercase tracking-[0.22em] px-10 py-4 border border-gold-500/50 text-gold-500 hover:border-gold-500 transition-all duration-300 inline-block">
              View Full Menu
            </Link>
          </div>
        </section>

        {/* ── INTERIOR / ABOUT PREVIEW ─────────────────────────── */}
        <section className="overflow-hidden bg-noir-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[580px]">
            <div className="relative min-h-72 lg:min-h-full img-hover bg-noir-700">
              <Image
                src="/images/gallery/exterior.jpg"
                alt="Crush Cafe Abuja — elegant white exterior with palm trees"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-noir-900/20" />
            </div>
            <div className="flex flex-col justify-center px-10 lg:px-16 xl:px-20 py-20">
              <p className="overline mb-5">About Crush Cafe</p>
              <div className="gold-line w-16 mb-8" />
              <h2 className="font-display text-4xl lg:text-5xl font-light text-cream-100 leading-tight mb-7">
                Abuja&apos;s most
                <br />
                <em className="text-gold-500">vibrant destination</em>
              </h2>
              <p className="font-body text-sm text-stone-light leading-loose mb-5">
                Crush Cafe is where Abuja comes alive. Our beautiful white colonial building sets the stage for an experience that blends world-class food, expertly crafted cocktails, and an atmosphere that stays with you long after you leave.
              </p>
              <p className="font-body text-sm text-stone-light leading-loose mb-10">
                Whether you&apos;re after a casual drink at the bar, a romantic dinner on the terrace, or a night out with friends in our billiards lounge — this is your place.
              </p>
              <Link href="/about" className="font-body text-[0.68rem] uppercase tracking-[0.22em] text-gold-500 hover-underline flex items-center gap-2 self-start">
                Our Story <ArrowRight size={11} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── MENU CATEGORIES ──────────────────────────────────── */}
        <section className="py-28 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="overline mb-4">What We Offer</p>
            <div className="gold-line w-20 mx-auto mb-6" />
            <h2 className="font-display text-5xl lg:text-6xl font-light text-cream-100">
              Explore the <em className="text-gold-500">Menu</em>
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {menuCategories.map((cat) => (
              <Link key={cat.label} href={cat.href} className="group bg-noir-800 border border-cream-100/5 hover:border-gold-500/30 p-8 flex flex-col items-center text-center transition-all duration-300 hover:bg-noir-700">
                <span className="text-4xl mb-5">{cat.icon}</span>
                <h3 className="font-display text-xl font-light text-cream-100 group-hover:text-gold-500 transition-colors mb-2">{cat.label}</h3>
                <p className="font-body text-xs text-stone-warm leading-relaxed">{cat.desc}</p>
                <div className="gold-line w-10 mt-5 opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
              </Link>
            ))}
          </div>
        </section>

        {/* ── LOUNGE EXPERIENCE ────────────────────────────────── */}
        <section className="relative py-28 overflow-hidden">
          <div className="absolute inset-0 bg-noir-800">
            <Image
              src="/images/gallery/lounge-billiards.jpg"
              alt="Crush Cafe lounge — billiards and cocktails"
              fill
              className="object-cover object-center opacity-45"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-noir-950/50 to-noir-950/90" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <p className="overline mb-5">The Experience</p>
            <div className="gold-line w-20 mx-auto mb-8" />
            <h2 className="font-display text-5xl lg:text-6xl font-light text-cream-100 mb-8">
              More than a<br /><em className="text-gold-500">restaurant</em>
            </h2>
            <p className="font-body text-sm text-stone-light leading-loose max-w-2xl mx-auto mb-14">
              Crush Cafe is a complete social destination — with a sophisticated cocktail bar, lush outdoor terrace, fine dining room, and a billiards lounge that makes every night a story worth telling.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
              {[
                { label: "Cocktail Bar", icon: "🍸", desc: "Premium spirits, craft cocktails & fine wines" },
                { label: "Outdoor Terrace", icon: "✨", desc: "String-lit al fresco dining with lush greenery" },
                { label: "Billiards Lounge", icon: "🎱", desc: "Pool tables, cocktails & electric vibes" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-3">
                  <span className="text-3xl">{item.icon}</span>
                  <p className="font-display text-xl font-light text-cream-100">{item.label}</p>
                  <p className="font-body text-xs text-stone-warm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── GALLERY STRIP ────────────────────────────────────── */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="overline mb-3">Gallery</p>
              <h2 className="font-display text-4xl font-light text-cream-100">
                A Taste of <em className="text-gold-500">Crush Cafe</em>
              </h2>
            </div>
            <Link href="/gallery" className="hidden sm:flex font-body text-[0.65rem] uppercase tracking-[0.2em] text-gold-500 hover-underline items-center gap-2">
              View All <ArrowRight size={11} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-3 h-[500px]">
            <div className="relative img-hover bg-noir-800 md:row-span-2 col-span-1">
              <Image src="/images/gallery/bar-interior.jpg" alt="Crush Cafe bar interior" fill className="object-cover" sizes="25vw" />
            </div>
            <div className="relative img-hover bg-noir-800">
              <Image src="/images/gallery/terrace-1.jpg" alt="Outdoor terrace at Crush Cafe" fill className="object-cover" sizes="25vw" />
            </div>
            <div className="relative img-hover bg-noir-800">
              <Image src="/images/gallery/lounge-billiards.jpg" alt="Billiards lounge and cocktails" fill className="object-cover" sizes="25vw" />
            </div>
            <div className="relative img-hover bg-noir-800 md:row-span-2 col-span-1">
              <Image src="/images/gallery/daytime-interior.jpg" alt="Crush Cafe daytime interior" fill className="object-cover" sizes="25vw" />
            </div>
            <div className="relative img-hover bg-noir-800 col-span-2">
              <Image src="/images/gallery/outdoor-dining.jpg" alt="Crush Cafe outdoor dining at sunset" fill className="object-cover object-center" sizes="50vw" />
              <div className="absolute inset-0 bg-noir-950/30" />
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ─────────────────────────────────────── */}
        <section className="py-24 bg-noir-800 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="overline mb-4">What Guests Say</p>
              <div className="gold-line w-20 mx-auto mb-6" />
              <h2 className="font-display text-5xl font-light text-cream-100">
                Real <em className="text-gold-500">Reviews</em>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-noir-700 border border-cream-100/5 p-8">
                  <div className="flex gap-1 mb-5">
                    {Array(t.rating).fill(null).map((_, j) => (
                      <Star key={j} size={12} fill="#e8632a" className="text-gold-500" />
                    ))}
                  </div>
                  <p className="font-body text-sm text-stone-light leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
                  <div className="gold-line w-12 mb-4" />
                  <p className="font-body text-[0.66rem] uppercase tracking-[0.2em] text-cream-200">{t.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RESERVATION + ORDER CTA ───────────────────────────── */}
        <section className="py-28 px-6 max-w-4xl mx-auto text-center">
          <p className="overline mb-5">Ready to Experience Crush?</p>
          <div className="gold-line w-24 mx-auto mb-8" />
          <h2 className="font-display text-5xl lg:text-6xl font-light text-cream-100 mb-6">
            Reserve a table or<br />
            <em className="text-gold-500">order delivery</em>
          </h2>
          <p className="font-body text-sm text-stone-light max-w-xl mx-auto mb-12 leading-relaxed">
            Book your table for the full Crush Cafe experience, or place an order online for pickup or delivery.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link href="/reservations" className="font-body text-[0.72rem] uppercase tracking-[0.22em] px-12 py-4 border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-noir-900 transition-all duration-300 w-full sm:w-auto text-center">
              Book a Table
            </Link>
            <Link href="/order" className="font-body text-[0.72rem] uppercase tracking-[0.22em] px-12 py-4 bg-gold-500 text-noir-900 hover:bg-gold-400 transition-all duration-300 font-medium w-full sm:w-auto text-center">
              Order Online
            </Link>
          </div>
        </section>

        {/* ── LOCATION & HOURS ──────────────────────────────────── */}
        <section className="bg-noir-800 py-20 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-noir-700 border border-cream-100/5 aspect-video flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0">
                <Image src="/images/gallery/exterior.jpg" alt="Crush Cafe Abuja location" fill className="object-cover opacity-40" sizes="50vw" />
              </div>
              <div className="relative z-10 text-center p-8">
                <MapPin size={32} className="text-gold-500 mx-auto mb-4" />
                <p className="font-display text-2xl font-light text-cream-100 mb-2">Visit Us</p>
                <p className="font-body text-sm text-stone-light mb-4">Crush Cafe<br />Abuja, Nigeria</p>
                <a href="https://maps.google.com/search?q=Crush+Cafe+Abuja" target="_blank" rel="noopener noreferrer"
                  className="font-body text-[0.62rem] uppercase tracking-[0.2em] text-gold-500 border border-gold-500/40 px-5 py-2 hover:bg-gold-500/10 transition-colors inline-block">
                  Get Directions
                </a>
              </div>
            </div>
            <div>
              <p className="overline mb-5">Hours & Location</p>
              <h2 className="font-display text-4xl font-light text-cream-100 mb-8">
                Visit <em className="text-gold-500">Crush Cafe</em>
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: <Clock size={16} strokeWidth={1.5} className="text-gold-500 mt-0.5 flex-shrink-0" />,
                    label: "Opening Hours",
                    content: (
                      <div className="font-body text-sm text-stone-light space-y-1">
                        <p>Monday – Saturday &nbsp;·&nbsp; 11:00am – 12:00am</p>
                        <p>Sunday &nbsp;·&nbsp; 12:00pm – 11:00pm</p>
                      </div>
                    ),
                  },
                  {
                    icon: <MapPin size={16} strokeWidth={1.5} className="text-gold-500 mt-0.5 flex-shrink-0" />,
                    label: "Address",
                    content: <p className="font-body text-sm text-stone-light">Crush Cafe, Abuja, Nigeria</p>,
                  },
                  {
                    icon: <Phone size={16} strokeWidth={1.5} className="text-gold-500 mt-0.5 flex-shrink-0" />,
                    label: "Reservations & Enquiries",
                    content: (
                      <a href="tel:+2340000000000" className="font-body text-sm text-stone-light hover:text-gold-500 transition-colors">
                        +234 000 000 0000
                      </a>
                    ),
                  },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex gap-4">
                      {item.icon}
                      <div>
                        <p className="font-body text-[0.62rem] uppercase tracking-[0.2em] text-gold-500 mb-2">{item.label}</p>
                        {item.content}
                      </div>
                    </div>
                    {i < 2 && <div className="gold-line w-full opacity-20 mt-5" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

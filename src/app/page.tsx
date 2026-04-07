import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ChevronDown, MapPin, Clock, Phone, Star, ArrowRight } from "lucide-react";

const featuredDishes = [
  {
    id: 1,
    name: "Signature Jollof Rice",
    description: "Smoky party-style jollof rice, fried plantains & boiled eggs",
    price: "₦4,500",
    tag: "Most Loved",
    image: "/images/food/jollof-rice.jpg",
    fallbackBg: "bg-amber-900",
  },
  {
    id: 2,
    name: "Major Chow Special Pizza",
    description: "Our signature loaded pizza — jam sauce, cheese, shrimps, sausage & more",
    price: "from ₦13,000",
    tag: "House Special",
    image: "/images/brand/logo-branding.jpg",
    fallbackBg: "bg-stone-800",
  },
  {
    id: 3,
    name: "African Stew Platter",
    description: "Rich beef stew with fried yam chips and caramelised plantains",
    price: "₦5,500",
    tag: "Fan Favourite",
    image: "/images/food/stew-plate.jpg",
    fallbackBg: "bg-red-950",
  },
];

const testimonials = [
  {
    name: "Adaeze O.",
    rating: 5,
    text: "The jollof rice here is absolutely unmatched. That smoky base, the plantains — I keep coming back every week.",
  },
  {
    name: "Chukwuemeka N.",
    rating: 5,
    text: "Ordered the Major Chow Special Pizza and it blew my mind. So many toppings, great flavour balance. Best pizza in town.",
  },
  {
    name: "Fatima B.",
    rating: 5,
    text: "The atmosphere is classy and the service is top-tier. Tiger Nut Drink is a must-try — so refreshing and natural.",
  },
];

const menuCategories = [
  { label: "African Dishes", icon: "🍛", href: "/menu#african", desc: "Jollof rice, stews, plantains & more" },
  { label: "Pizza", icon: "🍕", href: "/menu#pizza", desc: "10 varieties, medium & large sizes" },
  { label: "Shawarma", icon: "🌯", href: "/menu#shawarma", desc: "Chicken, beef & signature specials" },
  { label: "Drinks", icon: "🥤", href: "/menu#drinks", desc: "Tiger Nut, coffee, fresh juices & Chapman" },
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
              src="/images/brand/logo-branding.jpg"
              alt="Major Chow Restaurant"
              fill
              priority
              className="object-cover object-center opacity-60"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-noir-950/80 via-noir-900/70 to-noir-950/90" />
          </div>

          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="gold-line w-12" />
              <span className="overline text-[0.6rem]">Premium Restaurant · Est. 2019</span>
              <div className="gold-line w-12" />
            </div>

            {/* Globe logo */}
            <div className="flex justify-center mb-6">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 lg:w-24 lg:h-24">
                <circle cx="50" cy="50" r="46" stroke="#C9A96E" strokeWidth="2.5" fill="none"/>
                <ellipse cx="50" cy="50" rx="24" ry="46" stroke="#C9A96E" strokeWidth="1.5" fill="none"/>
                <line x1="8" y1="50" x2="92" y2="50" stroke="#C9A96E" strokeWidth="1.5"/>
                <line x1="18" y1="28" x2="82" y2="28" stroke="#C9A96E" strokeWidth="1.2"/>
                <line x1="18" y1="72" x2="82" y2="72" stroke="#C9A96E" strokeWidth="1.2"/>
                <circle cx="50" cy="38" r="5" fill="#C9A96E"/>
                <path d="M42 55 Q50 48 58 55" stroke="#C9A96E" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                <line x1="50" y1="43" x2="50" y2="55" stroke="#C9A96E" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="44" y1="60" x2="56" y2="60" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round"/>
                <line x1="44" y1="60" x2="42" y2="70" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round"/>
                <line x1="56" y1="60" x2="58" y2="70" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>

            <h1 className="font-display text-6xl sm:text-7xl lg:text-9xl font-light tracking-[0.05em] text-cream-50 mb-2">
              MAJOR
              <br />
              <span className="gold-shimmer italic">CHOW</span>
            </h1>
            <p className="font-body text-[0.7rem] uppercase tracking-[0.3em] text-gold-600 mb-8">Restaurant</p>
            <p className="font-display text-xl lg:text-2xl font-light italic text-cream-200 mb-12 leading-relaxed">
              &ldquo;Eat Healthy, Live Healthy&rdquo;
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
            <span className="font-body text-[0.56rem] uppercase tracking-[0.3em]">Scroll</span>
            <ChevronDown size={14} className="animate-bounce" />
          </a>
        </section>

        {/* ── MARQUEE STRIP ────────────────────────────────────── */}
        <div className="bg-gold-500 py-3 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {Array(8).fill(null).map((_, i) => (
              <span key={i} className="font-body text-[0.62rem] uppercase tracking-[0.22em] text-noir-900 font-medium mx-6">
                Eat Healthy · Live Healthy &nbsp;&bull;&nbsp; Dine In · Takeaway · Delivery &nbsp;&bull;&nbsp; Pizza · Shawarma · Jollof Rice · Tiger Nut &nbsp;&bull;&nbsp;
              </span>
            ))}
          </div>
        </div>

        {/* ── SIGNATURE DISHES ─────────────────────────────────── */}
        <section id="featured" className="py-28 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="overline mb-4">Signature Dishes</p>
            <div className="gold-line w-20 mx-auto mb-6" />
            <h2 className="font-display text-5xl lg:text-6xl font-light text-cream-100">
              Chow Now,
              <br />
              <em className="text-gold-500">Worry Later</em>
            </h2>
            <p className="font-body text-sm text-stone-light mt-5 max-w-xl mx-auto leading-relaxed">
              From smoky Nigerian classics to loaded pizzas and perfectly rolled shawarmas — every dish is crafted with bold flavour and fresh quality ingredients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {featuredDishes.map((dish) => (
              <div key={dish.id} className="group relative overflow-hidden aspect-[4/5]">
                <div className={`absolute inset-0 ${dish.fallbackBg}`} />
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width:768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir-950/90 via-noir-900/30 to-transparent" />
                <div className="absolute inset-0 p-7 flex flex-col justify-end">
                  <span className="overline text-[0.56rem] text-gold-400 mb-2">{dish.tag}</span>
                  <h3 className="font-display text-2xl font-light text-cream-50 mb-2">{dish.name}</h3>
                  <p className="font-body text-xs text-stone-light mb-4 leading-relaxed">{dish.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-lg text-gold-500">{dish.price}</span>
                    <Link href="/order" className="font-body text-[0.58rem] uppercase tracking-[0.2em] text-gold-500 hover:text-gold-300 flex items-center gap-1">
                      Order <ArrowRight size={10} />
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
                src="/images/gallery/interior-1.jpg"
                alt="Major Chow Restaurant interior — marble floors and warm ambience"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-noir-900/20" />
            </div>
            <div className="flex flex-col justify-center px-10 lg:px-16 xl:px-20 py-20">
              <p className="overline mb-5">About Major Chow</p>
              <div className="gold-line w-16 mb-8" />
              <h2 className="font-display text-4xl lg:text-5xl font-light text-cream-100 leading-tight mb-7">
                Bold flavours,
                <br />
                <em className="text-gold-500">warm in every bite</em>
              </h2>
              <p className="font-body text-sm text-stone-light leading-loose mb-5">
                Major Chow Restaurant was born from a simple belief: that great food should be accessible, bold in flavour, and made with genuine care. We blend the finest African culinary traditions with contemporary techniques to create dishes that nourish the body and delight the spirit.
              </p>
              <p className="font-body text-sm text-stone-light leading-loose mb-10">
                Our marble-floored dining room, vibrant lounge, and attentive team make every visit more than a meal — it&apos;s an experience.
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
            <p className="overline mb-4">What We Serve</p>
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
              src="/images/food/coffee-drink.jpg"
              alt="Major Chow lounge — billiards and cocktails"
              fill
              className="object-cover object-center opacity-40"
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
              Major Chow is a social destination — with a warm dining room, billiards lounge, and vibrant atmosphere that makes every visit unforgettable. Come for the food. Stay for the experience.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
              {[
                { label: "Dine In", icon: "🍽️", desc: "Elegant marble-floored dining" },
                { label: "Lounge & Pool", icon: "🎱", desc: "Billiards, cocktails & good vibes" },
                { label: "Private Events", icon: "🥂", desc: "Celebrate in style with us" },
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
                A Taste of <em className="text-gold-500">Major Chow</em>
              </h2>
            </div>
            <Link href="/gallery" className="hidden sm:flex font-body text-[0.65rem] uppercase tracking-[0.2em] text-gold-500 hover-underline items-center gap-2">
              View All <ArrowRight size={11} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-3 h-[500px]">
            <div className="relative img-hover bg-noir-800 md:row-span-2 col-span-1">
              <Image src="/images/gallery/food-1.jpg" alt="Jollof rice with plantains" fill className="object-cover" sizes="25vw" />
            </div>
            <div className="relative img-hover bg-noir-800">
              <Image src="/images/gallery/food-2.jpg" alt="African stew platter" fill className="object-cover" sizes="25vw" />
            </div>
            <div className="relative img-hover bg-noir-800">
              <Image src="/images/gallery/drinks-1.jpg" alt="Mocha coffee at lounge" fill className="object-cover" sizes="25vw" />
            </div>
            <div className="relative img-hover bg-noir-800 md:row-span-2 col-span-1">
              <Image src="/images/gallery/interior-1.jpg" alt="Dining room interior" fill className="object-cover" sizes="25vw" />
            </div>
            <div className="relative img-hover bg-noir-800 col-span-2">
              <Image src="/images/brand/logo-sign.jpg" alt="Major Chow exterior signage" fill className="object-cover object-center" sizes="50vw" />
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
                      <Star key={j} size={12} fill="#C9A96E" className="text-gold-500" />
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
          <p className="overline mb-5">Ready to Chow?</p>
          <div className="gold-line w-24 mx-auto mb-8" />
          <h2 className="font-display text-5xl lg:text-6xl font-light text-cream-100 mb-6">
            Reserve a table or<br />
            <em className="text-gold-500">order delivery</em>
          </h2>
          <p className="font-body text-sm text-stone-light max-w-xl mx-auto mb-12 leading-relaxed">
            Book your table for a full dine-in experience, or place an order online for pickup or delivery straight to your door.
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
              {/* Map embed placeholder */}
              <div className="absolute inset-0">
                <Image src="/images/brand/logo-sign.jpg" alt="Major Chow location" fill className="object-cover opacity-30" sizes="50vw" />
              </div>
              <div className="relative z-10 text-center p-8">
                <MapPin size={32} className="text-gold-500 mx-auto mb-4" />
                <p className="font-display text-2xl font-light text-cream-100 mb-2">Visit Us</p>
                <p className="font-body text-sm text-stone-light mb-4">Major Chow Restaurant<br />Your City, Nigeria</p>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer"
                  className="font-body text-[0.62rem] uppercase tracking-[0.2em] text-gold-500 border border-gold-500/40 px-5 py-2 hover:bg-gold-500/10 transition-colors inline-block">
                  Get Directions
                </a>
              </div>
            </div>
            <div>
              <p className="overline mb-5">Hours & Location</p>
              <h2 className="font-display text-4xl font-light text-cream-100 mb-8">
                Visit <em className="text-gold-500">Major Chow</em>
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: <Clock size={16} strokeWidth={1.5} className="text-gold-500 mt-0.5 flex-shrink-0" />,
                    label: "Opening Hours",
                    content: (
                      <div className="font-body text-sm text-stone-light space-y-1">
                        <p>Monday – Saturday &nbsp;·&nbsp; 10:00am – 11:00pm</p>
                        <p>Sunday &nbsp;·&nbsp; 12:00pm – 10:00pm</p>
                      </div>
                    ),
                  },
                  {
                    icon: <MapPin size={16} strokeWidth={1.5} className="text-gold-500 mt-0.5 flex-shrink-0" />,
                    label: "Address",
                    content: <p className="font-body text-sm text-stone-light">Major Chow Restaurant, Your City, Nigeria</p>,
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

import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Our Story",
  description: "Learn about Major Chow Restaurant — our story, our philosophy and our passion for bold, healthy food.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-24 lg:pt-28">

        {/* Hero */}
        <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-noir-800">
            <Image
              src="/images/gallery/interior-1.jpg"
              alt="Major Chow dining room"
              fill
              className="object-cover opacity-40"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-noir-900/70 to-noir-950/90" />
          </div>
          <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
            <p className="overline mb-4">Our Story</p>
            <div className="gold-line w-20 mx-auto mb-6" />
            <h1 className="font-display text-6xl lg:text-8xl font-light text-cream-100">
              Who We <em className="text-gold-500">Are</em>
            </h1>
          </div>
        </div>

        {/* Story section */}
        <section className="max-w-6xl mx-auto px-6 lg:px-10 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="overline mb-5">The Beginning</p>
            <div className="gold-line w-16 mb-8" />
            <h2 className="font-display text-4xl lg:text-5xl font-light text-cream-100 mb-7 leading-tight">
              Born from a passion<br />for <em className="text-gold-500">bold, honest food</em>
            </h2>
            <div className="space-y-5 font-body text-sm text-stone-light leading-loose">
              <p>
                Major Chow Restaurant was founded on a simple but powerful idea: that food should be bold, nourishing, and prepared with genuine care. We wanted to create a space where great African flavours sat alongside international favourites — where a perfect jollof rice could share a table with a loaded shawarma or a signature pizza.
              </p>
              <p>
                We believe that eating well should never mean eating boringly. Every dish on our menu is crafted to deliver maximum flavour, using fresh, quality ingredients that feed your body and lift your spirit.
              </p>
              <p>
                Our motto, <span className="text-gold-500 italic">&ldquo;Eat Healthy, Live Healthy&rdquo;</span>, is not just a slogan — it is the promise we make to every guest who walks through our doors.
              </p>
            </div>
          </div>
          <div className="relative aspect-square lg:aspect-auto lg:h-[520px] img-hover bg-noir-800">
            <Image
              src="/images/brand/logo-branding.jpg"
              alt="Major Chow brand — Eat Healthy, Live Healthy"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
          </div>
        </section>

        {/* Gold divider */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="gold-line" />
        </div>

        {/* Philosophy */}
        <section className="max-w-6xl mx-auto px-6 lg:px-10 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative aspect-square lg:aspect-auto lg:h-[480px] img-hover bg-noir-800">
            <Image
              src="/images/gallery/food-1.jpg"
              alt="Major Chow Signature Jollof Rice"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-noir-950/50 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="overline text-[0.58rem] text-gold-500">Most Loved</span>
              <p className="font-display text-xl font-light text-cream-50 mt-1">Signature Jollof Rice</p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <p className="overline mb-5">Our Philosophy</p>
            <div className="gold-line w-16 mb-8" />
            <h2 className="font-display text-4xl lg:text-5xl font-light text-cream-100 mb-7 leading-tight">
              Quality in<br /><em className="text-gold-500">every detail</em>
            </h2>
            <div className="space-y-5 font-body text-sm text-stone-light leading-loose">
              <p>
                We source our ingredients carefully — from fresh produce that goes into our jollof rice, to the spices that season our suya-inspired pizzas, to the tiger nuts in our signature bottled drink. Nothing is an afterthought.
              </p>
              <p>
                Our kitchen team brings together traditional West African culinary knowledge with a modern, health-conscious approach. We believe you can have food that is deeply satisfying and genuinely good for you.
              </p>
              <p>
                From the way we season our stews to the way we layer our shawarmas — every step reflects our commitment to your dining experience.
              </p>
            </div>
          </div>
        </section>

        {/* Ambience */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/food/coffee-drink.jpg"
              alt="Major Chow lounge ambience"
              fill
              className="object-cover opacity-30"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-noir-950/80" />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-16">
              <p className="overline mb-4">The Atmosphere</p>
              <div className="gold-line w-20 mx-auto mb-6" />
              <h2 className="font-display text-5xl font-light text-cream-100">
                More than a <em className="text-gold-500">meal</em>
              </h2>
              <p className="font-body text-sm text-stone-light mt-5 max-w-xl mx-auto leading-relaxed">
                Walk into Major Chow and you feel the difference immediately. Our space is designed to be both elegant and welcoming.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🏛️",
                  title: "Elegant Dining Room",
                  desc: "Marble floors, black furniture, and warm ambient lighting create a premium dining atmosphere that feels both sophisticated and inviting.",
                },
                {
                  icon: "🎱",
                  title: "Lounge & Billiards",
                  desc: "Unwind after a great meal in our lounge area, complete with a pool table and a selection of signature drinks and coffee creations.",
                },
                {
                  icon: "🥂",
                  title: "Private Events",
                  desc: "Celebrating a birthday, anniversary, or corporate event? Our team will work with you to create a memorable occasion.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-noir-800/60 border border-cream-100/5 p-8 text-center">
                  <span className="text-4xl mb-4 block">{item.icon}</span>
                  <h3 className="font-display text-xl font-light text-cream-100 mb-3">{item.title}</h3>
                  <p className="font-body text-xs text-stone-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interior gallery */}
        <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative aspect-video img-hover bg-noir-800">
              <Image src="/images/gallery/interior-1.jpg" alt="Major Chow interior dining area" fill className="object-cover" sizes="50vw" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square img-hover bg-noir-800">
                <Image src="/images/brand/logo-sign.jpg" alt="Major Chow exterior sign" fill className="object-cover" sizes="25vw" />
              </div>
              <div className="relative aspect-square img-hover bg-noir-800">
                <Image src="/images/food/stew-plate.jpg" alt="African stew at Major Chow" fill className="object-cover" sizes="25vw" />
              </div>
              <div className="relative aspect-square img-hover bg-noir-800 col-span-2">
                <Image src="/images/food/banner-dishes.jpg" alt="Chow Now Worry Later — Major Chow dishes" fill className="object-cover object-center" sizes="50vw" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-noir-800 text-center">
          <p className="overline mb-4">Come Experience It</p>
          <div className="gold-line w-20 mx-auto mb-6" />
          <h2 className="font-display text-5xl font-light text-cream-100 mb-8">
            We&apos;re ready to <em className="text-gold-500">welcome you</em>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link href="/reservations" className="font-body text-[0.7rem] uppercase tracking-[0.22em] px-10 py-4 border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-noir-900 transition-all duration-300 w-full sm:w-auto text-center flex items-center justify-center gap-2">
              Book a Table <ArrowRight size={12} />
            </Link>
            <Link href="/order" className="font-body text-[0.7rem] uppercase tracking-[0.22em] px-10 py-4 bg-gold-500 text-noir-900 hover:bg-gold-400 transition-all duration-300 font-medium w-full sm:w-auto text-center">
              Order Online
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Our Story",
  description: "Learn about Crush Cafe Abuja — our story, philosophy and passion for great food, drinks and unforgettable experiences.",
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
              src="/images/gallery/outdoor-dining.jpg"
              alt="Crush Cafe outdoor terrace"
              fill
              className="object-cover opacity-45"
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
              Born from a desire to<br /><em className="text-gold-500">redefine Abuja dining</em>
            </h2>
            <div className="space-y-5 font-body text-sm text-stone-light leading-loose">
              <p>
                Crush Cafe was built on a single conviction — that Abuja deserved a destination where great food, exceptional cocktails, and a beautiful setting came together under one roof. Not just a restaurant. Not just a bar. Something entirely its own.
              </p>
              <p>
                From our elegant white colonial exterior to the lush palm-lined terrace, every corner of Crush Cafe was designed to transport you. We wanted a place where you could spend an entire evening — starting with cocktails at the bar, moving to dinner on the terrace, and ending the night in the billiards lounge.
              </p>
              <p>
                That vision became Crush Cafe — Abuja&apos;s most vibrant bar, restaurant and fine dining destination.
              </p>
            </div>
          </div>
          <div className="relative aspect-square lg:aspect-auto lg:h-[520px] img-hover bg-noir-800">
            <Image
              src="/images/gallery/terrace-1.jpg"
              alt="Crush Cafe outdoor terrace with white furniture and palm trees"
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
              src="/images/gallery/bar-interior.jpg"
              alt="Crush Cafe bar interior at night"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-noir-950/50 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="overline text-[0.58rem] text-gold-500">Signature Bar</span>
              <p className="font-display text-xl font-light text-cream-50 mt-1">Craft Cocktails &amp; Premium Spirits</p>
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
                At Crush Cafe, we believe every detail matters — from the way a cocktail is garnished to the angle of your terrace chair. We obsess over the small things so that you can enjoy the whole picture.
              </p>
              <p>
                Our kitchen team brings together bold flavours from across the world with a refined, contemporary touch. Our bartenders are artists — each drink crafted with intention and precision.
              </p>
              <p>
                From the warm glow of the bar at night to the open sky above our terrace at sunset — every element of Crush Cafe is designed to make you feel something.
              </p>
            </div>
          </div>
        </section>

        {/* Ambience */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/gallery/outdoor-dining.jpg"
              alt="Crush Cafe outdoor dining ambience"
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
                Walk into Crush Cafe and you feel the difference immediately. Every space is designed to be both elegant and alive.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🍸",
                  title: "Cocktail Bar",
                  desc: "Our moody, warmly-lit bar is the soul of Crush Cafe — stocked with premium spirits, fine wines, and craft cocktails that keep the night going.",
                },
                {
                  icon: "✨",
                  title: "Outdoor Terrace",
                  desc: "String lights above, lush greenery around you, and the Abuja sky overhead — our terrace is the most beautiful place to dine in the city.",
                },
                {
                  icon: "🎱",
                  title: "Billiards Lounge",
                  desc: "The perfect place to unwind with friends — pool tables, great cocktails, and a social energy that keeps the conversation flowing.",
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
              <Image src="/images/gallery/outdoor-dining.jpg" alt="Crush Cafe outdoor dining at sunset" fill className="object-cover" sizes="50vw" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square img-hover bg-noir-800">
                <Image src="/images/gallery/exterior.jpg" alt="Crush Cafe white colonial exterior" fill className="object-cover" sizes="25vw" />
              </div>
              <div className="relative aspect-square img-hover bg-noir-800">
                <Image src="/images/gallery/lounge-billiards.jpg" alt="Billiards and cocktails at Crush Cafe" fill className="object-cover" sizes="25vw" />
              </div>
              <div className="relative aspect-square img-hover bg-noir-800 col-span-2">
                <Image src="/images/gallery/daytime-interior.jpg" alt="Crush Cafe daytime dining" fill className="object-cover object-center" sizes="50vw" />
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

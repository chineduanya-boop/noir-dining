"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    category: "Reservations",
    items: [
      { q: "How do I make a reservation?", a: "You can book a table online via our Reservations page, or call us directly at +234 000 000 0000. We recommend booking in advance, especially for weekends and evenings." },
      { q: "How far in advance can I book?", a: "You can book up to 30 days in advance online. For private dining or events, please contact us directly as we can accommodate longer lead times." },
      { q: "What is your cancellation policy?", a: "Please cancel or modify reservations at least 24 hours in advance. Same-day cancellations may result in a no-show fee for large parties. We understand things happen — please call us if you need to make last-minute changes." },
      { q: "Do you hold tables if I'm late?", a: "We hold tables for 15 minutes past the booking time. If you're running late, please call us and we'll do our best to accommodate you." },
      { q: "Can I make a special occasion reservation?", a: "Absolutely. When booking, select your occasion and we'll arrange special touches. For extra-special celebrations (birthday cakes, decorations, champagne on arrival), please mention this in your special requests or call us ahead." },
    ],
  },
  {
    category: "Online Ordering",
    items: [
      { q: "What areas do you deliver to?", a: "We deliver within select areas. Enter your postcode on the Order Online page to check delivery availability. We're always expanding our delivery zones." },
      { q: "What is the minimum order for delivery?", a: "Minimum delivery orders vary by zone but start from ₦3,500. The exact minimum will be shown when you enter your delivery area." },
      { q: "How long does delivery take?", a: "Estimated delivery time is 35–55 minutes depending on your location and order volume. You'll receive a confirmation with an estimated time." },
      { q: "Can I schedule a delivery for later?", a: "Yes! On the order page you can choose 'ASAP' or schedule for a specific time during our operating hours." },
      { q: "Do you offer collection?", a: "Yes — you can collect from our restaurant. Choose 'Collection' when placing your order and your food will be ready in approximately 20–30 minutes." },
      { q: "Can I order as a guest without creating an account?", a: "Yes. You can place orders as a guest. However, creating an account lets you reorder previous orders and track your history." },
    ],
  },
  {
    category: "Menu & Dietary",
    items: [
      { q: "Are your pizzas halal?", a: "Yes — all our meat toppings are halal-certified. We maintain strict halal standards in our kitchen." },
      { q: "Do you have vegetarian options?", a: "Yes. Look for the 'V' badge on our menu. We have several vegetarian dishes across starters, mains and desserts." },
      { q: "Can you cater for allergies?", a: "Please inform us of any allergies when ordering or booking. While we take all precautions, our kitchen handles gluten, dairy, nuts, shellfish and eggs, so we cannot guarantee complete allergen-free preparation." },
      { q: "What is your Tiger Nut Drink?", a: "Our Tiger Nut Drink is a signature natural beverage made from tiger nuts (chufa). It is naturally dairy-free, refreshing, and packed with nutrients. It's one of our most popular drinks." },
      { q: "Can I customise my pizza or shawarma?", a: "Yes! When ordering online you can select pizza size, add extra toppings, and add notes for customisation. For shawarma, you can choose size and whether to include sausage." },
    ],
  },
  {
    category: "Payments",
    items: [
      { q: "What payment methods do you accept?", a: "For dine-in, we accept cash and card. For delivery and collection orders placed online, payment is currently collected on delivery/collection (cash or card). Online payment is coming soon." },
      { q: "Do you accept promo codes?", a: "Yes! Enter your promo code at checkout. Try WELCOME10 for 10% off your first order." },
      { q: "Is tipping expected?", a: "Tips are entirely optional but always appreciated by our team. You can add a tip during the online checkout process." },
    ],
  },
  {
    category: "Private Dining & Events",
    items: [
      { q: "Can I book the restaurant for a private event?", a: "Yes! We can host private dining, birthday parties, corporate events, graduation celebrations and more. Contact us directly to discuss your requirements and availability." },
      { q: "Do you offer catering services?", a: "We are exploring catering options. Please contact us at hello@majorchow.com to discuss your catering needs and we'll let you know what we can arrange." },
      { q: "Is there a pool/billiards table?", a: "Yes! Our lounge features a billiards table available to all guests. It's a great way to extend your evening." },
    ],
  },
];

export default function FAQPage() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <>
      <Header />
      <main className="pt-24 lg:pt-28 pb-20">
        {/* Hero */}
        <div className="relative bg-noir-800 py-20 px-6 text-center overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/food/banner-dishes.jpg" alt="Major Chow FAQ" fill className="object-cover opacity-15" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-b from-noir-900/80 to-noir-950/95" />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <p className="overline mb-4">FAQ</p>
            <div className="gold-line w-20 mx-auto mb-6" />
            <h1 className="font-display text-6xl lg:text-7xl font-light text-cream-100">
              Frequently Asked<br /><em className="text-gold-500">Questions</em>
            </h1>
          </div>
        </div>

        {/* FAQ Sections */}
        <div className="max-w-3xl mx-auto px-6 lg:px-10 py-20 space-y-14">
          {faqs.map((section) => (
            <div key={section.category}>
              <p className="overline mb-4">{section.category}</p>
              <div className="gold-line w-16 mb-6" />
              <div className="space-y-2">
                {section.items.map((item, i) => {
                  const key = `${section.category}-${i}`;
                  const isOpen = openItem === key;
                  return (
                    <div key={key} className="bg-noir-800 border border-cream-100/5 hover:border-gold-500/20 transition-colors">
                      <button
                        onClick={() => setOpenItem(isOpen ? null : key)}
                        className="w-full flex items-center justify-between gap-4 p-5 text-left"
                      >
                        <span className="font-body text-sm text-cream-200">{item.q}</span>
                        {isOpen ? (
                          <Minus size={14} className="text-gold-500 flex-shrink-0" />
                        ) : (
                          <Plus size={14} className="text-gold-500 flex-shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5">
                          <div className="gold-line opacity-30 mb-4" />
                          <p className="font-body text-sm text-stone-light leading-relaxed">{item.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Still have questions */}
          <div className="bg-noir-800 border border-gold-500/15 p-10 text-center">
            <p className="overline mb-3">Still have questions?</p>
            <h3 className="font-display text-3xl font-light text-cream-100 mb-4">
              We&apos;re happy to <em className="text-gold-500">help</em>
            </h3>
            <p className="font-body text-sm text-stone-light mb-7">
              Contact our team directly and we&apos;ll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="font-body text-[0.68rem] uppercase tracking-[0.2em] px-8 py-3 border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-noir-900 transition-all duration-300">
                Contact Us
              </Link>
              <a href="tel:+2340000000000" className="font-body text-[0.68rem] uppercase tracking-[0.2em] px-8 py-3 bg-gold-500 text-noir-900 hover:bg-gold-400 transition-all duration-300 font-medium">
                Call Us
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

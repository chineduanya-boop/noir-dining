import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const menuLinks = [
  { href: "/menu", label: "Full Menu" },
  { href: "/menu#pizza", label: "Pizza" },
  { href: "/menu#shawarma", label: "Shawarma" },
  { href: "/menu#african", label: "African Dishes" },
  { href: "/menu#drinks", label: "Drinks" },
];

const infoLinks = [
  { href: "/about", label: "Our Story" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reservations", label: "Reservations" },
  { href: "/order", label: "Order Online" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/legal/privacy", label: "Privacy Policy" },
  { href: "/legal/terms", label: "Terms & Conditions" },
  { href: "/legal/cookies", label: "Cookie Policy" },
];

export function Footer() {
  return (
    <footer className="bg-noir-950 border-t border-gold-700/15">
      {/* Top CTA strip */}
      <div className="bg-gold-500/8 border-b border-gold-700/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="overline text-[0.62rem] mb-2">Ready to Chow?</p>
            <h3 className="font-display text-3xl lg:text-4xl font-light text-cream-100">
              Eat Healthy, <em className="text-gold-500 not-italic">Live Healthy</em>
            </h3>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/reservations"
              className="font-body text-[0.65rem] uppercase tracking-[0.2em] px-7 py-3 border border-gold-500/60 text-gold-500 hover:bg-gold-500 hover:text-noir-900 transition-all duration-300"
            >
              Book a Table
            </Link>
            <Link
              href="/order"
              className="font-body text-[0.65rem] uppercase tracking-[0.2em] px-7 py-3 bg-gold-500 text-noir-900 hover:bg-gold-400 transition-all duration-300 font-medium"
            >
              Order Now
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand column */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2.5 mb-5">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 flex-shrink-0">
              <circle cx="50" cy="50" r="46" stroke="#C9A96E" strokeWidth="3" fill="none"/>
              <ellipse cx="50" cy="50" rx="24" ry="46" stroke="#C9A96E" strokeWidth="2" fill="none"/>
              <line x1="8" y1="50" x2="92" y2="50" stroke="#C9A96E" strokeWidth="2"/>
              <line x1="18" y1="28" x2="82" y2="28" stroke="#C9A96E" strokeWidth="1.5"/>
              <line x1="18" y1="72" x2="82" y2="72" stroke="#C9A96E" strokeWidth="1.5"/>
              <circle cx="50" cy="38" r="5" fill="#C9A96E"/>
              <path d="M42 55 Q50 48 58 55" stroke="#C9A96E" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              <line x1="50" y1="43" x2="50" y2="55" stroke="#C9A96E" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="44" y1="60" x2="56" y2="60" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round"/>
              <line x1="44" y1="60" x2="42" y2="70" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round"/>
              <line x1="56" y1="60" x2="58" y2="70" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <div>
              <p className="font-display text-lg font-light tracking-[0.1em] text-cream-100">MAJOR CHOW</p>
              <p className="font-body text-[0.56rem] tracking-[0.28em] text-gold-600 uppercase">Restaurant</p>
            </div>
          </div>
          <p className="font-body text-sm text-stone-light leading-relaxed mb-6">
            Bold flavours, warm hospitality, and a passion for quality. Whether you dine in, collect, or order delivery — we bring you the best.
          </p>
          <div className="flex items-center gap-5">
            <a href="https://instagram.com/majorchow" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="font-body text-[0.62rem] uppercase tracking-[0.15em] text-stone-warm hover:text-gold-500 transition-colors">
              IG
            </a>
            <a href="#" aria-label="Facebook"
              className="font-body text-[0.62rem] uppercase tracking-[0.15em] text-stone-warm hover:text-gold-500 transition-colors">
              FB
            </a>
            <a href="#" aria-label="X (Twitter)"
              className="font-body text-[0.62rem] uppercase tracking-[0.15em] text-stone-warm hover:text-gold-500 transition-colors">
              𝕏
            </a>
          </div>
        </div>

        {/* Menu links */}
        <div>
          <h4 className="overline text-[0.6rem] mb-5">Our Menu</h4>
          <ul className="space-y-3">
            {menuLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="font-body text-sm text-stone-light hover:text-gold-500 transition-colors hover-underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Info links */}
        <div>
          <h4 className="overline text-[0.6rem] mb-5">Explore</h4>
          <ul className="space-y-3">
            {infoLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="font-body text-sm text-stone-light hover:text-gold-500 transition-colors hover-underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Hours */}
        <div>
          <h4 className="overline text-[0.6rem] mb-5">Find Us</h4>
          <ul className="space-y-4 text-sm text-stone-light font-body">
            <li className="flex gap-3">
              <MapPin size={15} strokeWidth={1.5} className="text-gold-500 flex-shrink-0 mt-0.5" />
              <span>Major Chow Restaurant<br />Your City, Nigeria</span>
            </li>
            <li className="flex gap-3">
              <Phone size={15} strokeWidth={1.5} className="text-gold-500 flex-shrink-0 mt-0.5" />
              <a href="tel:+2340000000000" className="hover:text-gold-500 transition-colors">+234 000 000 0000</a>
            </li>
            <li className="flex gap-3">
              <Mail size={15} strokeWidth={1.5} className="text-gold-500 flex-shrink-0 mt-0.5" />
              <a href="mailto:hello@majorchow.com" className="hover:text-gold-500 transition-colors">hello@majorchow.com</a>
            </li>
            <li className="flex gap-3">
              <Clock size={15} strokeWidth={1.5} className="text-gold-500 flex-shrink-0 mt-0.5" />
              <div>
                <p>Mon – Sat: 10am – 11pm</p>
                <p>Sunday: 12pm – 10pm</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream-100/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-[0.65rem] text-stone-warm">
            © {new Date().getFullYear()} Major Chow Restaurant. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {legalLinks.map((l) => (
              <Link key={l.href} href={l.href} className="font-body text-[0.62rem] text-stone-warm hover:text-gold-500 transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/lib/store/cartStore";

const navLinks = [
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "Our Story" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const itemCount = useCartStore((s) => s.itemCount());

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    document.body.style.overflow = "";
  }, [pathname]);

  const toggleMenu = () => {
    setOpen((o) => {
      document.body.style.overflow = o ? "" : "hidden";
      return !o;
    });
  };

  const isHome = pathname === "/";
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) return null;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? "bg-noir-900/96 backdrop-blur-md border-b border-gold-700/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="flex items-center justify-between h-18 lg:h-22">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              {/* Globe icon SVG — simplified version of Major Chow logo */}
              <div className="w-9 h-9 lg:w-11 lg:h-11 flex-shrink-0">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <circle cx="50" cy="50" r="46" stroke="#C9A96E" strokeWidth="3" fill="none"/>
                  <ellipse cx="50" cy="50" rx="24" ry="46" stroke="#C9A96E" strokeWidth="2" fill="none"/>
                  <line x1="8" y1="50" x2="92" y2="50" stroke="#C9A96E" strokeWidth="2"/>
                  <line x1="18" y1="28" x2="82" y2="28" stroke="#C9A96E" strokeWidth="1.5"/>
                  <line x1="18" y1="72" x2="82" y2="72" stroke="#C9A96E" strokeWidth="1.5"/>
                  {/* Person dining */}
                  <circle cx="50" cy="38" r="5" fill="#C9A96E"/>
                  <path d="M42 55 Q50 48 58 55" stroke="#C9A96E" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                  <line x1="50" y1="43" x2="50" y2="55" stroke="#C9A96E" strokeWidth="2.5" strokeLinecap="round"/>
                  <line x1="44" y1="60" x2="56" y2="60" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="44" y1="60" x2="42" y2="70" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="56" y1="60" x2="58" y2="70" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-xl lg:text-2xl font-light tracking-[0.08em] text-cream-100 group-hover:text-gold-500 transition-colors duration-300">
                  MAJOR CHOW
                </span>
                <span className="font-body text-[0.58rem] tracking-[0.28em] text-gold-600 uppercase mt-0.5">
                  Restaurant
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-9">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-body text-[0.7rem] uppercase tracking-[0.2em] transition-colors duration-300 hover-underline ${
                    pathname === link.href
                      ? "text-gold-500"
                      : "text-cream-200 hover:text-cream-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/order"
                className="relative p-2 text-cream-200 hover:text-gold-500 transition-colors"
                aria-label="View cart"
              >
                <ShoppingBag size={20} strokeWidth={1.5} />
                {itemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold-500 text-noir-900 text-[0.6rem] font-medium rounded-full flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Link>
              <Link
                href="/reservations"
                className="font-body text-[0.65rem] uppercase tracking-[0.2em] px-5 py-2.5 border border-gold-500/50 text-gold-500 hover:bg-gold-500 hover:text-noir-900 transition-all duration-300"
              >
                Book a Table
              </Link>
              <Link
                href="/order"
                className="font-body text-[0.65rem] uppercase tracking-[0.2em] px-5 py-2.5 bg-gold-500 text-noir-900 hover:bg-gold-400 transition-all duration-300 font-medium"
              >
                Order Now
              </Link>
            </div>

            {/* Mobile controls */}
            <div className="flex lg:hidden items-center gap-4">
              <Link href="/order" className="relative text-cream-200">
                <ShoppingBag size={20} strokeWidth={1.5} />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold-500 text-noir-900 text-[0.6rem] font-medium rounded-full flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Link>
              <button
                onClick={toggleMenu}
                className="text-cream-100 p-1"
                aria-label={open ? "Close menu" : "Open menu"}
              >
                {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile fullscreen menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-noir-950/98 backdrop-blur-xl" />
        <div className="relative h-full flex flex-col items-center justify-center gap-7 pt-20">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-display text-4xl font-light tracking-wide text-cream-100 hover:text-gold-500 transition-all duration-300 ${
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <div
            className={`flex flex-col items-center gap-3 mt-6 transition-all duration-500 ${
              open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: "360ms" }}
          >
            <Link href="/reservations" className="font-body text-[0.72rem] uppercase tracking-[0.25em] px-10 py-3.5 border border-gold-500 text-gold-500">
              Book a Table
            </Link>
            <Link href="/order" className="font-body text-[0.72rem] uppercase tracking-[0.25em] px-10 py-3.5 bg-gold-500 text-noir-900 font-medium">
              Order Now
            </Link>
          </div>
          <div className="gold-line w-24 mt-4 opacity-60" />
          <p className="overline text-[0.58rem] text-stone-warm tracking-[0.3em]">
            Eat Healthy · Live Healthy
          </p>
        </div>
      </div>
    </>
  );
}

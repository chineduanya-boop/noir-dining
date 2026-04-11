"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSent(true);
  };

  return (
    <>
      <Header />
      <main className="pt-24 lg:pt-28 pb-20">
        {/* Hero */}
        <div className="relative bg-noir-800 py-20 px-6 text-center overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/gallery/exterior.jpg" alt="Crush Cafe Abuja" fill className="object-cover opacity-20" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-b from-noir-900/80 to-noir-950/95" />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <p className="overline mb-4">Get in Touch</p>
            <div className="gold-line w-20 mx-auto mb-6" />
            <h1 className="font-display text-6xl lg:text-7xl font-light text-cream-100">
              Contact <em className="text-gold-500">Us</em>
            </h1>
            <p className="font-body text-sm text-stone-light mt-5">We&apos;d love to hear from you.</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <p className="overline mb-5">Find & Reach Us</p>
            <div className="gold-line w-16 mb-8" />
            <div className="space-y-7">
              {[
                { icon: <MapPin size={18} strokeWidth={1.5} className="text-gold-500 flex-shrink-0 mt-0.5" />, label: "Address", content: <p className="font-body text-sm text-stone-light">Crush Cafe<br />Abuja, Nigeria</p> },
                { icon: <Phone size={18} strokeWidth={1.5} className="text-gold-500 flex-shrink-0 mt-0.5" />, label: "Phone", content: <a href="tel:+2340000000000" className="font-body text-sm text-stone-light hover:text-gold-500 transition-colors">+234 000 000 0000</a> },
                { icon: <Mail size={18} strokeWidth={1.5} className="text-gold-500 flex-shrink-0 mt-0.5" />, label: "Email", content: <a href="mailto:hello@crushcafe.ng" className="font-body text-sm text-stone-light hover:text-gold-500 transition-colors">hello@crushcafe.ng</a> },
                {
                  icon: <Clock size={18} strokeWidth={1.5} className="text-gold-500 flex-shrink-0 mt-0.5" />,
                  label: "Opening Hours",
                  content: (
                    <div className="font-body text-sm text-stone-light space-y-1">
                      <p>Monday – Saturday: 10:00am – 11:00pm</p>
                      <p>Sunday: 12:00pm – 10:00pm</p>
                    </div>
                  )
                },
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex gap-4">
                    {item.icon}
                    <div>
                      <p className="font-body text-[0.62rem] uppercase tracking-[0.2em] text-gold-500 mb-1">{item.label}</p>
                      {item.content}
                    </div>
                  </div>
                  {i < 3 && <div className="gold-line opacity-20 mt-6" />}
                </div>
              ))}
            </div>

            <div className="mt-10">
              <p className="overline mb-4">Follow Us</p>
              <div className="flex gap-6">
                <a href="https://instagram.com/crushcafeabuja" target="_blank" rel="noopener noreferrer"
                  className="font-body text-sm text-stone-light hover:text-gold-500 transition-colors hover-underline">
                  Instagram @crushcafeabuja
                </a>
                <a href="#" className="font-body text-sm text-stone-light hover:text-gold-500 transition-colors hover-underline">
                  Facebook
                </a>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-10 relative aspect-video bg-noir-800 border border-cream-100/8 flex items-center justify-center overflow-hidden">
              <Image src="/images/gallery/exterior.jpg" alt="Crush Cafe location" fill className="object-cover opacity-25" sizes="50vw" />
              <div className="relative z-10 text-center">
                <MapPin size={24} className="text-gold-500 mx-auto mb-2" />
                <p className="font-body text-xs text-stone-light mb-3">Major Chow Restaurant</p>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer"
                  className="font-body text-[0.6rem] uppercase tracking-[0.18em] text-gold-500 border border-gold-500/40 px-4 py-1.5 hover:bg-gold-500/10 transition-colors inline-block">
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <p className="overline mb-5">Send a Message</p>
            <div className="gold-line w-16 mb-8" />

            {sent ? (
              <div className="text-center py-16">
                <CheckCircle size={40} className="text-gold-500 mx-auto mb-4" strokeWidth={1.5} />
                <h3 className="font-display text-3xl font-light text-cream-100 mb-3">Message Sent!</h3>
                <p className="font-body text-sm text-stone-light mb-6">We&apos;ll get back to you within 24 hours.</p>
                <button onClick={() => setSent(false)} className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-gold-500 hover-underline">
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <label className="flex flex-col gap-2">
                    <span className="overline text-[0.58rem]">Your Name</span>
                    <input required type="text" placeholder="Full name" value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="bg-noir-800 border border-cream-100/15 text-cream-100 placeholder-stone-warm px-4 py-3 font-body text-sm focus:border-gold-500 outline-none transition-colors" />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="overline text-[0.58rem]">Phone (Optional)</span>
                    <input type="tel" placeholder="+234 000 000 0000" value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="bg-noir-800 border border-cream-100/15 text-cream-100 placeholder-stone-warm px-4 py-3 font-body text-sm focus:border-gold-500 outline-none transition-colors" />
                  </label>
                  <label className="flex flex-col gap-2 sm:col-span-2">
                    <span className="overline text-[0.58rem]">Email</span>
                    <input required type="email" placeholder="your@email.com" value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="bg-noir-800 border border-cream-100/15 text-cream-100 placeholder-stone-warm px-4 py-3 font-body text-sm focus:border-gold-500 outline-none transition-colors" />
                  </label>
                  <label className="flex flex-col gap-2 sm:col-span-2">
                    <span className="overline text-[0.58rem]">Subject</span>
                    <select required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="bg-noir-800 border border-cream-100/15 text-cream-100 px-4 py-3 font-body text-sm focus:border-gold-500 outline-none transition-colors">
                      <option value="">Select a subject...</option>
                      <option>General Enquiry</option>
                      <option>Private Dining / Events</option>
                      <option>Catering</option>
                      <option>Feedback</option>
                      <option>Partnership</option>
                      <option>Other</option>
                    </select>
                  </label>
                  <label className="flex flex-col gap-2 sm:col-span-2">
                    <span className="overline text-[0.58rem]">Message</span>
                    <textarea required rows={5} placeholder="How can we help you?" value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="bg-noir-800 border border-cream-100/15 text-cream-100 placeholder-stone-warm px-4 py-3 font-body text-sm focus:border-gold-500 outline-none transition-colors resize-none" />
                  </label>
                </div>
                <button type="submit" disabled={loading}
                  className="w-full font-body text-[0.7rem] uppercase tracking-[0.22em] py-4 bg-gold-500 text-noir-900 hover:bg-gold-400 transition-all duration-300 font-medium disabled:opacity-50 flex items-center justify-center gap-3">
                  {loading ? (
                    <><span className="w-3 h-3 border-2 border-noir-900/40 border-t-noir-900 rounded-full animate-spin" /> Sending...</>
                  ) : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

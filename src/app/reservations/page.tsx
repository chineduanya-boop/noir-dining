"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Calendar, Clock, Users, MessageSquare, CheckCircle } from "lucide-react";

const timeSlots = [
  "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
  "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30",
];

const occasions = [
  "None",
  "Birthday",
  "Anniversary",
  "Business Lunch",
  "Date Night",
  "Family Gathering",
  "Graduation",
  "Other",
];

export default function ReservationsPage() {
  const [form, setForm] = useState({
    date: "",
    time: "",
    partySize: "2",
    name: "",
    email: "",
    phone: "",
    occasion: "None",
    specialRequests: "",
    privateEnquiry: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const refNumber = `MC-R-${Math.floor(1000 + Math.random() * 9000)}`;

  if (submitted) {
    return (
      <>
        <Header />
        <main className="min-h-screen pt-24 flex items-center justify-center px-6">
          <div className="max-w-lg w-full text-center">
            <CheckCircle size={48} className="text-gold-500 mx-auto mb-6" strokeWidth={1} />
            <p className="overline mb-3">Booking Confirmed</p>
            <div className="gold-line w-20 mx-auto mb-6" />
            <h1 className="font-display text-5xl font-light text-cream-100 mb-4">
              We&apos;ll see you <em className="text-gold-500">soon</em>
            </h1>
            <p className="font-body text-sm text-stone-light mb-2">
              Your reservation reference number is:
            </p>
            <p className="font-display text-3xl text-gold-500 mb-6">{refNumber}</p>
            <p className="font-body text-sm text-stone-light mb-1">
              <strong className="text-cream-200">{form.name}</strong> — party of {form.partySize}
            </p>
            <p className="font-body text-sm text-stone-light mb-8">
              {form.date} at {form.time}
            </p>
            <p className="font-body text-xs text-stone-warm mb-10 leading-relaxed">
              A confirmation has been sent to {form.email}. If you need to cancel or make changes, please contact us at least 24 hours in advance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="font-body text-[0.68rem] uppercase tracking-[0.2em] px-8 py-3 border border-gold-500/40 text-gold-500 hover:bg-gold-500 hover:text-noir-900 transition-all duration-300">
                Back to Home
              </Link>
              <Link href="/menu" className="font-body text-[0.68rem] uppercase tracking-[0.2em] px-8 py-3 bg-gold-500 text-noir-900 hover:bg-gold-400 transition-all duration-300 font-medium">
                Browse Menu
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="pt-24 lg:pt-28">
        {/* Hero */}
        <div className="relative bg-noir-800 py-20 px-6 text-center overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/gallery/interior-1.jpg" alt="Major Chow dining room" fill className="object-cover opacity-20" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-b from-noir-900/80 to-noir-950/95" />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <p className="overline mb-4">Reservations</p>
            <div className="gold-line w-20 mx-auto mb-6" />
            <h1 className="font-display text-6xl lg:text-7xl font-light text-cream-100">
              Book a <em className="text-gold-500">Table</em>
            </h1>
            <p className="font-body text-sm text-stone-light mt-5">
              Reserve your table at Major Chow Restaurant. We recommend booking in advance to ensure your preferred time.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="max-w-5xl mx-auto px-6 lg:px-10 py-20 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left info */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <p className="overline mb-3">Opening Hours</p>
              <div className="gold-line w-12 mb-4" />
              <div className="font-body text-sm text-stone-light space-y-2">
                <p>Mon – Sat: 10am – 11pm</p>
                <p>Sunday: 12pm – 10pm</p>
              </div>
            </div>
            <div>
              <p className="overline mb-3">Dining Policy</p>
              <div className="gold-line w-12 mb-4" />
              <ul className="font-body text-xs text-stone-light space-y-2 leading-relaxed">
                <li>· Tables held for 15 minutes past booking time</li>
                <li>· Cancellations required 24 hours in advance</li>
                <li>· Large parties (8+) require advance deposit</li>
                <li>· Special occasion decoration available on request</li>
              </ul>
            </div>
            <div>
              <p className="overline mb-3">Private Dining</p>
              <div className="gold-line w-12 mb-4" />
              <p className="font-body text-xs text-stone-light leading-relaxed mb-3">
                Planning a private event or large gathering? We offer exclusive dining experiences for special occasions.
              </p>
              <a href="tel:+2340000000000" className="font-body text-[0.62rem] uppercase tracking-[0.18em] text-gold-500 hover-underline">
                Call to enquire
              </a>
            </div>
          </div>

          {/* Reservation form */}
          <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Date */}
              <label className="flex flex-col gap-2">
                <span className="overline text-[0.58rem] flex items-center gap-2">
                  <Calendar size={11} className="text-gold-500" /> Date
                </span>
                <input
                  type="date"
                  required
                  min={new Date().toISOString().split("T")[0]}
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="bg-noir-800 border border-cream-100/15 text-cream-100 px-4 py-3 font-body text-sm focus:border-gold-500 outline-none transition-colors"
                />
              </label>

              {/* Party size */}
              <label className="flex flex-col gap-2">
                <span className="overline text-[0.58rem] flex items-center gap-2">
                  <Users size={11} className="text-gold-500" /> Party Size
                </span>
                <select
                  required
                  value={form.partySize}
                  onChange={(e) => setForm({ ...form, partySize: e.target.value })}
                  className="bg-noir-800 border border-cream-100/15 text-cream-100 px-4 py-3 font-body text-sm focus:border-gold-500 outline-none transition-colors"
                >
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={n}>{n} {n === 1 ? "person" : "people"}</option>
                  ))}
                  <option value="13+">13+ (please call)</option>
                </select>
              </label>
            </div>

            {/* Time slots */}
            <div>
              <p className="overline text-[0.58rem] flex items-center gap-2 mb-3">
                <Clock size={11} className="text-gold-500" /> Preferred Time
              </p>
              <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                {timeSlots.map((t) => (
                  <button
                    type="button"
                    key={t}
                    onClick={() => setForm({ ...form, time: t })}
                    className={`font-body text-xs py-2 border transition-all duration-200 ${
                      form.time === t
                        ? "bg-gold-500 text-noir-900 border-gold-500 font-medium"
                        : "bg-noir-800 border-cream-100/15 text-stone-light hover:border-gold-500/50 hover:text-cream-100"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <label className="flex flex-col gap-2">
                <span className="overline text-[0.58rem]">Full Name</span>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="bg-noir-800 border border-cream-100/15 text-cream-100 placeholder-stone-warm px-4 py-3 font-body text-sm focus:border-gold-500 outline-none transition-colors"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="overline text-[0.58rem]">Phone Number</span>
                <input
                  type="tel"
                  required
                  placeholder="+234 000 000 0000"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="bg-noir-800 border border-cream-100/15 text-cream-100 placeholder-stone-warm px-4 py-3 font-body text-sm focus:border-gold-500 outline-none transition-colors"
                />
              </label>
              <label className="flex flex-col gap-2 sm:col-span-2">
                <span className="overline text-[0.58rem]">Email Address</span>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="bg-noir-800 border border-cream-100/15 text-cream-100 placeholder-stone-warm px-4 py-3 font-body text-sm focus:border-gold-500 outline-none transition-colors"
                />
              </label>
            </div>

            {/* Occasion */}
            <label className="flex flex-col gap-2">
              <span className="overline text-[0.58rem]">Occasion (Optional)</span>
              <select
                value={form.occasion}
                onChange={(e) => setForm({ ...form, occasion: e.target.value })}
                className="bg-noir-800 border border-cream-100/15 text-cream-100 px-4 py-3 font-body text-sm focus:border-gold-500 outline-none transition-colors"
              >
                {occasions.map((o) => <option key={o}>{o}</option>)}
              </select>
            </label>

            {/* Special requests */}
            <label className="flex flex-col gap-2">
              <span className="overline text-[0.58rem] flex items-center gap-2">
                <MessageSquare size={11} className="text-gold-500" /> Special Requests
              </span>
              <textarea
                rows={3}
                placeholder="Dietary requirements, seating preferences, special arrangements..."
                value={form.specialRequests}
                onChange={(e) => setForm({ ...form, specialRequests: e.target.value })}
                className="bg-noir-800 border border-cream-100/15 text-cream-100 placeholder-stone-warm px-4 py-3 font-body text-sm focus:border-gold-500 outline-none transition-colors resize-none"
              />
            </label>

            {/* Private dining toggle */}
            <label className="flex items-center gap-3 cursor-pointer">
              <div
                onClick={() => setForm({ ...form, privateEnquiry: !form.privateEnquiry })}
                className={`w-10 h-5 rounded-full transition-colors duration-300 relative flex-shrink-0 cursor-pointer ${
                  form.privateEnquiry ? "bg-gold-500" : "bg-noir-600"
                }`}
              >
                <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-transform duration-300 ${
                  form.privateEnquiry ? "translate-x-5" : "translate-x-0.5"
                }`} />
              </div>
              <span className="font-body text-sm text-stone-light">
                This is a private dining / special event enquiry
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading || !form.date || !form.time || !form.name}
              className="w-full font-body text-[0.72rem] uppercase tracking-[0.22em] py-4 bg-gold-500 text-noir-900 hover:bg-gold-400 transition-all duration-300 font-medium disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {loading ? (
                <>
                  <span className="w-3 h-3 border-2 border-noir-900/40 border-t-noir-900 rounded-full animate-spin" />
                  Confirming Reservation...
                </>
              ) : (
                "Confirm Reservation"
              )}
            </button>

            <p className="font-body text-xs text-stone-warm text-center leading-relaxed">
              By submitting this form you agree to our booking policy. Cancellations must be made at least 24 hours in advance.
            </p>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}

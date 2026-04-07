import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
export const metadata = { title: "Cookie Policy" };
export default function CookiesPage() {
  return (
    <>
      <Header />
      <main className="pt-24 lg:pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 py-16">
          <p className="overline mb-4">Legal</p>
          <div className="gold-line w-16 mb-6" />
          <h1 className="font-display text-5xl font-light text-cream-100 mb-4">Cookie Policy</h1>
          <p className="font-body text-xs text-stone-warm mb-12">Last updated: {new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}</p>
          <div className="font-body text-stone-light leading-relaxed space-y-8 text-sm">
            <section>
              <h2 className="font-display text-2xl font-light text-cream-100 mb-3">What Are Cookies</h2>
              <p>Cookies are small text files stored on your device when you visit a website. They help us provide a better experience by remembering your preferences and enabling core functionality.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl font-light text-cream-100 mb-3">How We Use Cookies</h2>
              <p>We use the following types of cookies:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li><strong className="text-cream-200">Essential cookies:</strong> Required for the website to function, including shopping cart persistence and session management.</li>
                <li><strong className="text-cream-200">Analytics cookies:</strong> Help us understand how visitors use our website so we can improve it.</li>
                <li><strong className="text-cream-200">Preference cookies:</strong> Remember your settings and choices for a better experience.</li>
              </ul>
            </section>
            <section>
              <h2 className="font-display text-2xl font-light text-cream-100 mb-3">Managing Cookies</h2>
              <p>You can control cookies through your browser settings. Note that disabling certain cookies may affect website functionality, particularly the shopping cart and order flow.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl font-light text-cream-100 mb-3">Contact</h2>
              <p>For questions about our cookie use: <a href="mailto:hello@majorchow.com" className="text-gold-500 hover:underline">hello@majorchow.com</a></p>
            </section>
          </div>
          <div className="mt-12 flex gap-4">
            <Link href="/legal/privacy" className="font-body text-[0.62rem] uppercase tracking-[0.15em] text-gold-600 hover:text-gold-500 hover-underline">Privacy Policy</Link>
            <Link href="/legal/terms" className="font-body text-[0.62rem] uppercase tracking-[0.15em] text-gold-600 hover:text-gold-500 hover-underline">Terms & Conditions</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

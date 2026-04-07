import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-24 lg:pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 py-16">
          <p className="overline mb-4">Legal</p>
          <div className="gold-line w-16 mb-6" />
          <h1 className="font-display text-5xl font-light text-cream-100 mb-4">Privacy Policy</h1>
          <p className="font-body text-xs text-stone-warm mb-12">Last updated: {new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}</p>
          <div className="prose prose-invert prose-sm max-w-none font-body text-stone-light leading-relaxed space-y-8">
            <section>
              <h2 className="font-display text-2xl font-light text-cream-100 mb-3">1. Introduction</h2>
              <p>Major Chow Restaurant (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or make a reservation or order with us.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl font-light text-cream-100 mb-3">2. Information We Collect</h2>
              <p>We may collect the following types of personal information:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Name, email address, phone number</li>
                <li>Delivery address for online orders</li>
                <li>Reservation details including date, time, party size and special requests</li>
                <li>Order history and preferences</li>
                <li>Payment information (processed securely — we do not store card details)</li>
                <li>Device and browsing data via cookies</li>
              </ul>
            </section>
            <section>
              <h2 className="font-display text-2xl font-light text-cream-100 mb-3">3. How We Use Your Information</h2>
              <p>We use your personal information to:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Process and fulfil your orders and reservations</li>
                <li>Send confirmation and status updates</li>
                <li>Improve our services and website experience</li>
                <li>Respond to enquiries and provide customer support</li>
                <li>Send marketing communications where you have consented</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>
            <section>
              <h2 className="font-display text-2xl font-light text-cream-100 mb-3">4. Data Retention</h2>
              <p>We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by law. Order data is retained for accounting purposes for a minimum of 7 years.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl font-light text-cream-100 mb-3">5. Your Rights</h2>
              <p>You have the right to access, correct, or delete your personal data. To exercise these rights, please contact us at hello@majorchow.com.</p>
            </section>
            <section>
              <h2 className="font-display text-2xl font-light text-cream-100 mb-3">6. Contact</h2>
              <p>For any privacy-related queries, contact: <a href="mailto:hello@majorchow.com" className="text-gold-500 hover:underline">hello@majorchow.com</a></p>
            </section>
          </div>
          <div className="mt-12 flex gap-4">
            <Link href="/legal/terms" className="font-body text-[0.62rem] uppercase tracking-[0.15em] text-gold-600 hover:text-gold-500 hover-underline">Terms & Conditions</Link>
            <Link href="/legal/cookies" className="font-body text-[0.62rem] uppercase tracking-[0.15em] text-gold-600 hover:text-gold-500 hover-underline">Cookie Policy</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

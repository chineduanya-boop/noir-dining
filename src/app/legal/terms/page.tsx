import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
export const metadata = { title: "Terms & Conditions" };
export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-24 lg:pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 py-16">
          <p className="overline mb-4">Legal</p>
          <div className="gold-line w-16 mb-6" />
          <h1 className="font-display text-5xl font-light text-cream-100 mb-4">Terms & Conditions</h1>
          <p className="font-body text-xs text-stone-warm mb-12">Last updated: {new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}</p>
          <div className="font-body text-stone-light leading-relaxed space-y-8 text-sm">
            {[
              { title: "1. Acceptance of Terms", content: "By accessing or using the Major Chow Restaurant website, placing an order, or making a reservation, you agree to be bound by these Terms and Conditions." },
              { title: "2. Online Ordering", content: "All orders placed online are subject to availability and confirmation. We reserve the right to refuse or cancel any order. Prices displayed are in Nigerian Naira (₦) and include applicable taxes." },
              { title: "3. Reservations", content: "Reservations are subject to availability. We hold tables for 15 minutes past the booked time. Cancellations must be made at least 24 hours in advance. We reserve the right to charge for late cancellations or no-shows for large party bookings." },
              { title: "4. Payment", content: "Payment for online orders is currently collected on delivery or collection. We accept cash and card. Promo codes are subject to their stated terms and cannot be combined unless specified." },
              { title: "5. Cancellations & Refunds", content: "If you wish to cancel an order, please contact us immediately. Once an order is being prepared, cancellation may not be possible. Refunds for valid cancellations will be processed within 5–7 working days." },
              { title: "6. Allergens", content: "While we take all reasonable precautions, our kitchen handles common allergens including gluten, dairy, nuts, shellfish and eggs. We cannot guarantee allergen-free preparation. Customers with severe allergies should contact us directly before ordering." },
              { title: "7. Intellectual Property", content: "All content on this website including text, images, logos, and design is the property of Major Chow Restaurant and may not be reproduced without written permission." },
              { title: "8. Limitation of Liability", content: "Major Chow Restaurant is not liable for any indirect, incidental or consequential damages arising from use of this website or our services, to the maximum extent permitted by applicable law." },
              { title: "9. Contact", content: "For any queries regarding these terms, contact us at hello@majorchow.com or +234 000 000 0000." },
            ].map((s) => (
              <section key={s.title}>
                <h2 className="font-display text-2xl font-light text-cream-100 mb-3">{s.title}</h2>
                <p>{s.content}</p>
              </section>
            ))}
          </div>
          <div className="mt-12 flex gap-4">
            <Link href="/legal/privacy" className="font-body text-[0.62rem] uppercase tracking-[0.15em] text-gold-600 hover:text-gold-500 hover-underline">Privacy Policy</Link>
            <Link href="/legal/cookies" className="font-body text-[0.62rem] uppercase tracking-[0.15em] text-gold-600 hover:text-gold-500 hover-underline">Cookie Policy</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

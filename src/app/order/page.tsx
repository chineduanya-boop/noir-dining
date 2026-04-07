"use client";

import { useState } from "react";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { menuItems } from "@/lib/data/menu";
import { useCartStore } from "@/lib/store/cartStore";
import { DietaryBadge } from "@/components/ui/Badge";
import { checkDeliveryAvailability } from "@/lib/data/mock";
import type { DietaryTag, MenuItem } from "@/types";
import { ShoppingBag, Plus, Minus, Trash2, X, CheckCircle, Bike, Store, Tag } from "lucide-react";

const categories = [
  { id: "all", label: "All" },
  { id: "starters", label: "Shawarma & Sides" },
  { id: "mains", label: "Mains & Pizza" },
  { id: "cocktails", label: "Coffee & Drinks" },
  { id: "soft-drinks", label: "Soft Drinks" },
];

const promoCodes = ["WELCOME10", "CHOW20", "FREEDELIVERY"];

export default function OrderPage() {
  const [step, setStep] = useState<"setup" | "menu" | "cart" | "checkout" | "confirmed">("setup");
  const [activeCategory, setActiveCategory] = useState("all");
  const [postcode, setPostcode] = useState("");
  const [postcodeError, setPostcodeError] = useState("");
  const [promoInput, setPromoInput] = useState("");
  const [promoError, setPromoError] = useState("");
  const [loading, setLoading] = useState(false);
  const [checkoutForm, setCheckoutForm] = useState({ name: "", email: "", phone: "", address: "", instructions: "" });
  const [orderRef] = useState(`MC-${Math.floor(10000 + Math.random() * 90000)}`);

  const {
    items, orderType, deliveryFee, promoCode, tip,
    setOrderType, setDeliveryFee, addItem, removeItem, updateQuantity,
    applyPromo, removePromo, setTip, clearCart,
    subtotal, discount, total, itemCount,
  } = useCartStore();

  const filteredItems = menuItems.filter(
    (i) => i.available && (activeCategory === "all" || i.category === activeCategory)
  );

  const handleSetup = () => {
    if (orderType === "delivery") {
      const zone = checkDeliveryAvailability(postcode);
      if (!zone) {
        setPostcodeError("Sorry, we don't deliver to this area yet. Please try collection.");
        return;
      }
      setDeliveryFee(zone.fee * 100); // convert to kobo-like for display
      setPostcodeError("");
    }
    setStep("menu");
  };

  const handlePromo = () => {
    const valid = promoCodes.includes(promoInput.toUpperCase());
    if (valid) {
      applyPromo(promoInput.toUpperCase(), promoInput.toUpperCase() === "CHOW20" ? 0.2 : promoInput.toUpperCase() === "WELCOME10" ? 0.1 : 500);
      setPromoError("");
    } else {
      setPromoError("Invalid promo code.");
    }
  };

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 2000));
    clearCart();
    setLoading(false);
    setStep("confirmed");
  };

  if (step === "confirmed") {
    return (
      <>
        <Header />
        <main className="min-h-screen pt-24 flex items-center justify-center px-6">
          <div className="max-w-md w-full text-center">
            <CheckCircle size={48} className="text-gold-500 mx-auto mb-6" strokeWidth={1} />
            <p className="overline mb-3">Order Confirmed!</p>
            <div className="gold-line w-20 mx-auto mb-6" />
            <h1 className="font-display text-4xl font-light text-cream-100 mb-4">
              <em className="text-gold-500">Chow</em> is on its way!
            </h1>
            <p className="font-body text-sm text-stone-light mb-2">Your order reference:</p>
            <p className="font-display text-3xl text-gold-500 mb-6">{orderRef}</p>
            <p className="font-body text-sm text-stone-light mb-2">
              {orderType === "delivery" ? "🛵 Estimated delivery: 35–50 minutes" : "🏪 Ready for pickup in: 20–30 minutes"}
            </p>
            <p className="font-body text-xs text-stone-warm mt-4 mb-8">
              Confirmation sent to {checkoutForm.email}
            </p>
            <button onClick={() => setStep("setup")} className="font-body text-[0.68rem] uppercase tracking-[0.2em] px-8 py-3 bg-gold-500 text-noir-900 hover:bg-gold-400 transition-all duration-300 font-medium">
              New Order
            </button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="pt-24 lg:pt-28 pb-20 min-h-screen">
        {/* Hero strip */}
        <div className="bg-noir-800 border-b border-gold-700/15 py-12 px-6 text-center">
          <p className="overline mb-3">Order Online</p>
          <h1 className="font-display text-5xl font-light text-cream-100">
            {orderType === "delivery" ? "🛵 Delivery" : "🏪 Collection"} Order
          </h1>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-10">
          {/* Step: Setup */}
          {step === "setup" && (
            <div className="max-w-xl mx-auto">
              <div className="mb-10 text-center">
                <div className="gold-line w-20 mx-auto mb-6" />
                <h2 className="font-display text-4xl font-light text-cream-100 mb-3">Start Your Order</h2>
                <p className="font-body text-sm text-stone-light">Choose delivery or collection to get started.</p>
              </div>

              {/* Order type */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {(["delivery", "collection"] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setOrderType(type)}
                    className={`p-6 border flex flex-col items-center gap-3 transition-all duration-300 ${
                      orderType === type
                        ? "border-gold-500 bg-gold-500/10 text-gold-500"
                        : "border-cream-100/15 bg-noir-800 text-stone-light hover:border-gold-500/40"
                    }`}
                  >
                    {type === "delivery" ? <Bike size={24} strokeWidth={1.5} /> : <Store size={24} strokeWidth={1.5} />}
                    <div>
                      <p className="font-body text-[0.7rem] uppercase tracking-[0.2em] font-medium capitalize">{type}</p>
                      <p className="font-body text-xs mt-1 opacity-70">
                        {type === "delivery" ? "35–55 min" : "20–30 min"}
                      </p>
                    </div>
                  </button>
                ))}
              </div>

              {/* Postcode check for delivery */}
              {orderType === "delivery" && (
                <div className="mb-6">
                  <label className="flex flex-col gap-2">
                    <span className="overline text-[0.58rem]">Delivery Postcode / Area</span>
                    <div className="flex gap-3">
                      <input
                        type="text"
                        placeholder="Enter your area..."
                        value={postcode}
                        onChange={(e) => setPostcode(e.target.value)}
                        className="flex-1 bg-noir-800 border border-cream-100/15 text-cream-100 placeholder-stone-warm px-4 py-3 font-body text-sm focus:border-gold-500 outline-none"
                      />
                      <button
                        type="button"
                        onClick={handleSetup}
                        className="font-body text-[0.62rem] uppercase tracking-[0.18em] px-5 py-3 bg-gold-500 text-noir-900 hover:bg-gold-400 transition-all font-medium"
                      >
                        Check
                      </button>
                    </div>
                    {postcodeError && <p className="font-body text-xs text-red-400">{postcodeError}</p>}
                  </label>
                </div>
              )}

              <button
                onClick={() => { if (orderType === "collection") handleSetup(); }}
                className={`w-full font-body text-[0.72rem] uppercase tracking-[0.22em] py-4 bg-gold-500 text-noir-900 hover:bg-gold-400 transition-all duration-300 font-medium ${
                  orderType === "delivery" ? "hidden" : ""
                }`}
              >
                Continue to Menu
              </button>
            </div>
          )}

          {/* Step: Menu */}
          {step === "menu" && (
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Menu items */}
              <div className="flex-1">
                {/* Category filter */}
                <div className="flex gap-2 overflow-x-auto no-scrollbar mb-8 pb-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`font-body text-[0.62rem] uppercase tracking-[0.18em] px-5 py-2.5 border whitespace-nowrap transition-all duration-200 ${
                        activeCategory === cat.id
                          ? "border-gold-500 bg-gold-500/15 text-gold-500"
                          : "border-cream-100/15 text-stone-light hover:border-gold-500/30"
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {filteredItems.map((item) => (
                    <OrderMenuItem key={item.id} item={item} onAdd={(it) => addItem(it)} />
                  ))}
                </div>
              </div>

              {/* Cart sidebar */}
              <div className="lg:w-80 xl:w-96">
                <CartPanel
                  items={items}
                  subtotal={subtotal()}
                  discount={discount()}
                  deliveryFee={deliveryFee}
                  tip={tip}
                  total={total()}
                  itemCount={itemCount()}
                  orderType={orderType}
                  promoCode={promoCode}
                  promoInput={promoInput}
                  promoError={promoError}
                  onPromoInputChange={setPromoInput}
                  onApplyPromo={handlePromo}
                  onRemovePromo={removePromo}
                  onUpdateQty={updateQuantity}
                  onRemoveItem={removeItem}
                  onSetTip={setTip}
                  onCheckout={() => setStep("checkout")}
                />
              </div>
            </div>
          )}

          {/* Step: Checkout */}
          {step === "checkout" && (
            <div className="max-w-2xl mx-auto">
              <div className="mb-10">
                <button onClick={() => setStep("menu")} className="font-body text-[0.62rem] uppercase tracking-[0.18em] text-stone-light hover:text-gold-500 transition-colors mb-6">
                  ← Back to Menu
                </button>
                <h2 className="font-display text-4xl font-light text-cream-100 mb-2">Checkout</h2>
                <p className="font-body text-sm text-stone-light">Complete your {orderType} order</p>
              </div>

              <form onSubmit={handleCheckout} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <label className="flex flex-col gap-2">
                    <span className="overline text-[0.58rem]">Full Name</span>
                    <input required type="text" placeholder="Your name" value={checkoutForm.name}
                      onChange={(e) => setCheckoutForm({ ...checkoutForm, name: e.target.value })}
                      className="bg-noir-800 border border-cream-100/15 text-cream-100 placeholder-stone-warm px-4 py-3 font-body text-sm focus:border-gold-500 outline-none" />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="overline text-[0.58rem]">Phone</span>
                    <input required type="tel" placeholder="+234 000 000 0000" value={checkoutForm.phone}
                      onChange={(e) => setCheckoutForm({ ...checkoutForm, phone: e.target.value })}
                      className="bg-noir-800 border border-cream-100/15 text-cream-100 placeholder-stone-warm px-4 py-3 font-body text-sm focus:border-gold-500 outline-none" />
                  </label>
                  <label className="flex flex-col gap-2 sm:col-span-2">
                    <span className="overline text-[0.58rem]">Email</span>
                    <input required type="email" placeholder="your@email.com" value={checkoutForm.email}
                      onChange={(e) => setCheckoutForm({ ...checkoutForm, email: e.target.value })}
                      className="bg-noir-800 border border-cream-100/15 text-cream-100 placeholder-stone-warm px-4 py-3 font-body text-sm focus:border-gold-500 outline-none" />
                  </label>
                  {orderType === "delivery" && (
                    <>
                      <label className="flex flex-col gap-2 sm:col-span-2">
                        <span className="overline text-[0.58rem]">Delivery Address</span>
                        <input required type="text" placeholder="Full delivery address" value={checkoutForm.address}
                          onChange={(e) => setCheckoutForm({ ...checkoutForm, address: e.target.value })}
                          className="bg-noir-800 border border-cream-100/15 text-cream-100 placeholder-stone-warm px-4 py-3 font-body text-sm focus:border-gold-500 outline-none" />
                      </label>
                      <label className="flex flex-col gap-2 sm:col-span-2">
                        <span className="overline text-[0.58rem]">Delivery Instructions (Optional)</span>
                        <input type="text" placeholder="Gate code, landmark, etc." value={checkoutForm.instructions}
                          onChange={(e) => setCheckoutForm({ ...checkoutForm, instructions: e.target.value })}
                          className="bg-noir-800 border border-cream-100/15 text-cream-100 placeholder-stone-warm px-4 py-3 font-body text-sm focus:border-gold-500 outline-none" />
                      </label>
                    </>
                  )}
                </div>

                {/* Order summary */}
                <div className="bg-noir-800 border border-cream-100/8 p-5 space-y-2">
                  <p className="overline text-[0.58rem] mb-3">Order Summary</p>
                  <div className="flex justify-between font-body text-sm text-stone-light">
                    <span>Subtotal ({itemCount()} items)</span>
                    <span>₦{subtotal().toLocaleString()}</span>
                  </div>
                  {discount() > 0 && (
                    <div className="flex justify-between font-body text-sm text-green-400">
                      <span>Discount ({promoCode})</span>
                      <span>-₦{discount().toFixed(0)}</span>
                    </div>
                  )}
                  {orderType === "delivery" && (
                    <div className="flex justify-between font-body text-sm text-stone-light">
                      <span>Delivery fee</span>
                      <span>₦{deliveryFee.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="gold-line opacity-30 my-2" />
                  <div className="flex justify-between font-display text-xl text-cream-100">
                    <span>Total</span>
                    <span className="text-gold-500">₦{total().toLocaleString()}</span>
                  </div>
                </div>

                {/* Payment note */}
                <div className="bg-amber-900/15 border border-amber-700/25 p-4">
                  <p className="font-body text-xs text-stone-light leading-relaxed">
                    <span className="text-amber-400">Payment on {orderType === "delivery" ? "delivery" : "collection"}.</span> Pay cash or card when your order arrives/is collected. Online payment coming soon.
                  </p>
                </div>

                <button type="submit" disabled={loading}
                  className="w-full font-body text-[0.72rem] uppercase tracking-[0.22em] py-4 bg-gold-500 text-noir-900 hover:bg-gold-400 transition-all duration-300 font-medium disabled:opacity-50 flex items-center justify-center gap-3">
                  {loading ? (
                    <><span className="w-3 h-3 border-2 border-noir-900/40 border-t-noir-900 rounded-full animate-spin" /> Placing Order...</>
                  ) : (
                    `Confirm ${orderType === "delivery" ? "Delivery" : "Collection"} Order`
                  )}
                </button>
              </form>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

function OrderMenuItem({ item, onAdd }: { item: MenuItem; onAdd: (item: MenuItem) => void }) {
  return (
    <div className="bg-noir-800 border border-cream-100/5 hover:border-gold-500/20 transition-all duration-300 group flex gap-0">
      {item.image && (
        <div className="relative w-24 flex-shrink-0 img-hover bg-noir-700">
          <Image src={item.image} alt={item.name} fill className="object-cover" sizes="96px" />
        </div>
      )}
      <div className="flex-1 p-4">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-display text-base font-light text-cream-100 leading-tight">{item.name}</h3>
          <span className="font-display text-sm text-gold-500 flex-shrink-0">
            {item.variants && item.variants.length ? `from ₦${item.price.toLocaleString()}` : `₦${item.price.toLocaleString()}`}
          </span>
        </div>
        <p className="font-body text-xs text-stone-warm leading-relaxed mb-3 line-clamp-2">{item.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1">
            {item.dietary.slice(0, 3).map((tag) => (
              <DietaryBadge key={tag} tag={tag as DietaryTag} />
            ))}
          </div>
          <button
            onClick={() => onAdd(item)}
            className="font-body text-[0.6rem] uppercase tracking-[0.15em] px-3 py-1.5 bg-gold-500/15 border border-gold-500/30 text-gold-500 hover:bg-gold-500 hover:text-noir-900 transition-all duration-200 flex items-center gap-1.5"
          >
            <Plus size={10} /> Add
          </button>
        </div>
      </div>
    </div>
  );
}

function CartPanel({
  items, subtotal, discount, deliveryFee, tip, total, itemCount, orderType,
  promoCode, promoInput, promoError, onPromoInputChange, onApplyPromo, onRemovePromo,
  onUpdateQty, onRemoveItem, onSetTip, onCheckout,
}: {
  items: import("@/types").CartItem[];
  subtotal: number; discount: number; deliveryFee: number; tip: number; total: number; itemCount: number;
  orderType: string; promoCode: string; promoInput: string; promoError: string;
  onPromoInputChange: (v: string) => void; onApplyPromo: () => void; onRemovePromo: () => void;
  onUpdateQty: (id: string, qty: number) => void; onRemoveItem: (id: string) => void;
  onSetTip: (t: number) => void; onCheckout: () => void;
}) {
  return (
    <div className="bg-noir-800 border border-cream-100/8 sticky top-28">
      <div className="p-5 border-b border-cream-100/8 flex items-center gap-3">
        <ShoppingBag size={16} strokeWidth={1.5} className="text-gold-500" />
        <span className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-cream-100">
          Your Order ({itemCount} items)
        </span>
      </div>

      {items.length === 0 ? (
        <div className="p-8 text-center">
          <p className="font-body text-sm text-stone-warm">Your order is empty</p>
          <p className="font-body text-xs text-stone-warm mt-1">Add items from the menu</p>
        </div>
      ) : (
        <>
          <div className="divide-y divide-cream-100/5 max-h-60 overflow-y-auto">
            {items.map((item, i) => (
              <div key={i} className="p-4 flex items-center gap-3">
                <div className="flex-1">
                  <p className="font-body text-xs text-cream-100">{item.menuItem.name}</p>
                  {item.variant && <p className="font-body text-[0.6rem] text-stone-warm">{item.variant.name}</p>}
                  <p className="font-display text-sm text-gold-500 mt-0.5">
                    ₦{((item.menuItem.price + (item.variant?.priceModifier || 0)) * item.quantity).toLocaleString()}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => onUpdateQty(item.menuItem.id, item.quantity - 1)}
                    className="w-6 h-6 border border-cream-100/20 flex items-center justify-center hover:border-gold-500 transition-colors">
                    <Minus size={10} />
                  </button>
                  <span className="font-body text-xs w-4 text-center">{item.quantity}</span>
                  <button onClick={() => onUpdateQty(item.menuItem.id, item.quantity + 1)}
                    className="w-6 h-6 border border-cream-100/20 flex items-center justify-center hover:border-gold-500 transition-colors">
                    <Plus size={10} />
                  </button>
                  <button onClick={() => onRemoveItem(item.menuItem.id)} className="text-stone-warm hover:text-red-400 transition-colors ml-1">
                    <Trash2 size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Promo */}
          <div className="p-4 border-t border-cream-100/8">
            {promoCode ? (
              <div className="flex items-center justify-between bg-green-900/20 border border-green-700/30 px-3 py-2">
                <div className="flex items-center gap-2">
                  <Tag size={11} className="text-green-400" />
                  <span className="font-body text-xs text-green-300">{promoCode} applied</span>
                </div>
                <button onClick={onRemovePromo}><X size={12} className="text-stone-warm hover:text-red-400" /></button>
              </div>
            ) : (
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Promo code"
                  value={promoInput}
                  onChange={(e) => onPromoInputChange(e.target.value.toUpperCase())}
                  className="flex-1 bg-noir-700 border border-cream-100/15 text-cream-100 placeholder-stone-warm px-3 py-2 font-body text-xs focus:border-gold-500 outline-none"
                />
                <button onClick={onApplyPromo}
                  className="font-body text-[0.58rem] uppercase tracking-[0.15em] px-3 py-2 border border-gold-500/40 text-gold-500 hover:bg-gold-500/15 transition-colors">
                  Apply
                </button>
              </div>
            )}
            {promoError && <p className="font-body text-xs text-red-400 mt-1">{promoError}</p>}
          </div>

          {/* Totals */}
          <div className="p-4 border-t border-cream-100/8 space-y-2">
            <div className="flex justify-between font-body text-xs text-stone-light">
              <span>Subtotal</span><span>₦{subtotal.toLocaleString()}</span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between font-body text-xs text-green-400">
                <span>Discount</span><span>-₦{discount.toFixed(0)}</span>
              </div>
            )}
            {orderType === "delivery" && (
              <div className="flex justify-between font-body text-xs text-stone-light">
                <span>Delivery</span><span>₦{deliveryFee.toLocaleString()}</span>
              </div>
            )}
            <div className="gold-line opacity-25 my-1" />
            <div className="flex justify-between font-display text-lg text-cream-100">
              <span>Total</span><span className="text-gold-500">₦{total.toLocaleString()}</span>
            </div>
          </div>

          <div className="p-4 pt-0">
            <button
              onClick={onCheckout}
              disabled={items.length === 0}
              className="w-full font-body text-[0.68rem] uppercase tracking-[0.2em] py-3.5 bg-gold-500 text-noir-900 hover:bg-gold-400 transition-all duration-300 font-medium disabled:opacity-40"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

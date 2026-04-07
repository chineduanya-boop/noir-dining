"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItem, MenuItem, MenuVariant, MenuAddon, OrderType } from "@/types";

interface CartStore {
  items: CartItem[];
  orderType: OrderType;
  postcode: string;
  deliveryFee: number;
  promoCode: string;
  promoDiscount: number;
  tip: number;
  scheduledTime: string | null;

  setOrderType: (type: OrderType) => void;
  setPostcode: (postcode: string) => void;
  setDeliveryFee: (fee: number) => void;
  addItem: (item: MenuItem, variant?: MenuVariant, addons?: MenuAddon[], notes?: string) => void;
  removeItem: (itemId: string, variantId?: string) => void;
  updateQuantity: (itemId: string, qty: number, variantId?: string) => void;
  clearCart: () => void;
  applyPromo: (code: string, discount: number) => void;
  removePromo: () => void;
  setTip: (amount: number) => void;
  setScheduledTime: (time: string | null) => void;

  // Computed
  subtotal: () => number;
  discount: () => number;
  total: () => number;
  itemCount: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      orderType: "delivery",
      postcode: "",
      deliveryFee: 0,
      promoCode: "",
      promoDiscount: 0,
      tip: 0,
      scheduledTime: null,

      setOrderType: (type) => set({ orderType: type, deliveryFee: type === "collection" ? 0 : get().deliveryFee }),
      setPostcode: (postcode) => set({ postcode }),
      setDeliveryFee: (fee) => set({ deliveryFee: fee }),

      addItem: (menuItem, variant, addons = [], notes) =>
        set((state) => {
          const existing = state.items.find(
            (i) => i.menuItem.id === menuItem.id && i.variant?.id === variant?.id
          );
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.menuItem.id === menuItem.id && i.variant?.id === variant?.id
                  ? { ...i, quantity: i.quantity + 1 }
                  : i
              ),
            };
          }
          return {
            items: [...state.items, { menuItem, quantity: 1, variant, addons, notes }],
          };
        }),

      removeItem: (itemId, variantId) =>
        set((state) => ({
          items: state.items.filter(
            (i) => !(i.menuItem.id === itemId && i.variant?.id === variantId)
          ),
        })),

      updateQuantity: (itemId, qty, variantId) =>
        set((state) => {
          if (qty <= 0) {
            return {
              items: state.items.filter(
                (i) => !(i.menuItem.id === itemId && i.variant?.id === variantId)
              ),
            };
          }
          return {
            items: state.items.map((i) =>
              i.menuItem.id === itemId && i.variant?.id === variantId
                ? { ...i, quantity: qty }
                : i
            ),
          };
        }),

      clearCart: () => set({ items: [], promoCode: "", promoDiscount: 0, tip: 0 }),
      applyPromo: (code, discount) => set({ promoCode: code, promoDiscount: discount }),
      removePromo: () => set({ promoCode: "", promoDiscount: 0 }),
      setTip: (amount) => set({ tip: amount }),
      setScheduledTime: (time) => set({ scheduledTime: time }),

      subtotal: () => {
        const { items } = get();
        return items.reduce((sum, item) => {
          const base = item.menuItem.price + (item.variant?.priceModifier || 0);
          const addonsTotal = item.addons.reduce((a, addon) => a + addon.price, 0);
          return sum + (base + addonsTotal) * item.quantity;
        }, 0);
      },

      discount: () => {
        const { promoDiscount, promoCode } = get();
        if (!promoCode) return 0;
        if (promoDiscount <= 1) return get().subtotal() * promoDiscount;
        return promoDiscount;
      },

      total: () => {
        const { deliveryFee, tip } = get();
        return get().subtotal() - get().discount() + deliveryFee + tip;
      },

      itemCount: () =>
        get().items.reduce((sum, item) => sum + item.quantity, 0),
    }),
    { name: "noir-cart" }
  )
);

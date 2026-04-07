import type {
  Order,
  Reservation,
  InventoryItem,
  PromoCode,
  DailySales,
  TopDish,
} from "@/types";

// ── Mock Orders ───────────────────────────────────────────────
export const mockOrders: Order[] = [
  {
    id: "ord1",
    orderNumber: "NL-2024-0001",
    type: "delivery",
    status: "preparing",
    items: [],
    customer: { name: "James Whitmore", email: "j.whitmore@email.com", phone: "+44 7700 900001" },
    delivery: { address: "14 Mayfair Place", postcode: "W1K 2AD", instructions: "Ring doorbell" },
    subtotal: 95,
    deliveryFee: 4.5,
    discount: 0,
    tip: 9.5,
    total: 109,
    createdAt: new Date(Date.now() - 1800000).toISOString(),
    updatedAt: new Date(Date.now() - 600000).toISOString(),
    estimatedTime: 35,
  },
  {
    id: "ord2",
    orderNumber: "NL-2024-0002",
    type: "collection",
    status: "ready-for-pickup",
    items: [],
    customer: { name: "Sophia Chen", email: "sophia@email.com", phone: "+44 7700 900002" },
    subtotal: 68,
    deliveryFee: 0,
    discount: 6.8,
    tip: 0,
    total: 61.2,
    promoCode: "WELCOME10",
    createdAt: new Date(Date.now() - 3600000).toISOString(),
    updatedAt: new Date(Date.now() - 1200000).toISOString(),
  },
  {
    id: "ord3",
    orderNumber: "NL-2024-0003",
    type: "delivery",
    status: "completed",
    items: [],
    customer: { name: "Marcus Laurent", email: "m.laurent@email.com", phone: "+44 7700 900003" },
    delivery: { address: "8 Belgravia Square", postcode: "SW1X 8PZ" },
    subtotal: 143,
    deliveryFee: 4.5,
    discount: 0,
    tip: 14.3,
    total: 161.8,
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    updatedAt: new Date(Date.now() - 82800000).toISOString(),
  },
  {
    id: "ord4",
    orderNumber: "NL-2024-0004",
    type: "delivery",
    status: "received",
    items: [],
    customer: { name: "Isabelle Moreau", email: "i.moreau@email.com", phone: "+44 7700 900004" },
    delivery: { address: "22 Kensington Gardens", postcode: "W8 4PT" },
    subtotal: 52,
    deliveryFee: 4.5,
    discount: 0,
    tip: 5,
    total: 61.5,
    createdAt: new Date(Date.now() - 300000).toISOString(),
    updatedAt: new Date(Date.now() - 300000).toISOString(),
    estimatedTime: 40,
  },
  {
    id: "ord5",
    orderNumber: "NL-2024-0005",
    type: "collection",
    status: "cancelled",
    items: [],
    customer: { name: "Oliver Banks", email: "o.banks@email.com", phone: "+44 7700 900005" },
    subtotal: 38,
    deliveryFee: 0,
    discount: 0,
    tip: 0,
    total: 38,
    createdAt: new Date(Date.now() - 172800000).toISOString(),
    updatedAt: new Date(Date.now() - 170000000).toISOString(),
  },
];

// ── Mock Reservations ─────────────────────────────────────────
export const mockReservations: Reservation[] = [
  {
    id: "res1",
    referenceNumber: "NL-R-4521",
    date: "2024-12-20",
    time: "19:30",
    partySize: 2,
    status: "confirmed",
    customer: { name: "Eleanor Voss", email: "e.voss@email.com", phone: "+44 7700 900010" },
    occasion: "Anniversary",
    specialRequests: "Window table preferred, champagne on arrival",
    tableNumber: 7,
    createdAt: new Date(Date.now() - 604800000).toISOString(),
  },
  {
    id: "res2",
    referenceNumber: "NL-R-4522",
    date: "2024-12-20",
    time: "20:00",
    partySize: 4,
    status: "confirmed",
    customer: { name: "Richard St. James", email: "r.stjames@email.com", phone: "+44 7700 900011" },
    specialRequests: "One guest is vegetarian",
    tableNumber: 12,
    createdAt: new Date(Date.now() - 432000000).toISOString(),
  },
  {
    id: "res3",
    referenceNumber: "NL-R-4523",
    date: "2024-12-21",
    time: "19:00",
    partySize: 6,
    status: "pending",
    customer: { name: "Natasha Beaumont", email: "n.beaumont@email.com", phone: "+44 7700 900012" },
    occasion: "Birthday",
    specialRequests: "Birthday cake, decoration if possible",
    createdAt: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    id: "res4",
    referenceNumber: "NL-R-4524",
    date: "2024-12-22",
    time: "12:30",
    partySize: 2,
    status: "confirmed",
    customer: { name: "Hugo Leclerc", email: "h.leclerc@email.com", phone: "+44 7700 900013" },
    tableNumber: 3,
    createdAt: new Date(Date.now() - 259200000).toISOString(),
  },
  {
    id: "res5",
    referenceNumber: "NL-R-4520",
    date: "2024-12-18",
    time: "20:30",
    partySize: 8,
    status: "completed",
    customer: { name: "Victoria Drake", email: "v.drake@email.com", phone: "+44 7700 900014" },
    isPrivateDining: true,
    specialRequests: "Private dining room, tasting menu for all guests",
    createdAt: new Date(Date.now() - 1209600000).toISOString(),
  },
];

// ── Mock Inventory ─────────────────────────────────────────────
export const mockInventory: InventoryItem[] = [
  { id: "inv1", name: "Dry-Aged Beef", category: "Protein", unit: "kg", quantity: 12, lowStockThreshold: 5, supplier: "Brixham Butchers", cost: 85 },
  { id: "inv2", name: "Turbot (whole)", category: "Fish", unit: "fish", quantity: 3, lowStockThreshold: 4, supplier: "Cornish Fish Co.", cost: 65 },
  { id: "inv3", name: "Duck Breast", category: "Protein", unit: "portions", quantity: 24, lowStockThreshold: 8, supplier: "Gressingham Farm", cost: 12 },
  { id: "inv4", name: "Black Truffle", category: "Luxury", unit: "g", quantity: 180, lowStockThreshold: 50, supplier: "Périgord Imports", cost: 3.5 },
  { id: "inv5", name: "Foie Gras", category: "Luxury", unit: "kg", quantity: 2.4, lowStockThreshold: 1, supplier: "Maison Lafitte", cost: 120 },
  { id: "inv6", name: "Valrhona Dark Chocolate", category: "Pastry", unit: "kg", quantity: 8, lowStockThreshold: 2, supplier: "Chocolate World", cost: 28 },
  { id: "inv7", name: "Tahitian Vanilla Pods", category: "Pastry", unit: "units", quantity: 45, lowStockThreshold: 15, supplier: "Vanilla Co.", cost: 3.2 },
  { id: "inv8", name: "Champagne Billecart-Salmon", category: "Beverage", unit: "bottles", quantity: 24, lowStockThreshold: 6, supplier: "Millésimes Imports", cost: 42 },
  { id: "inv9", name: "Grey Goose Vodka", category: "Spirits", unit: "bottles", quantity: 6, lowStockThreshold: 3, supplier: "Premium Spirits Ltd", cost: 38 },
  { id: "inv10", name: "Saffron", category: "Spices", unit: "g", quantity: 15, lowStockThreshold: 5, supplier: "Persian Spices", cost: 12 },
  { id: "inv11", name: "Burrata (fresh)", category: "Dairy", unit: "portions", quantity: 5, lowStockThreshold: 6, supplier: "Puglia Direct", cost: 6.5 },
  { id: "inv12", name: "Cornish Oysters", category: "Shellfish", unit: "dozen", quantity: 8, lowStockThreshold: 3, supplier: "Cornish Fish Co.", cost: 18 },
];

// ── Mock Promo Codes ───────────────────────────────────────────
export const mockPromoCodes: PromoCode[] = [
  { id: "p1", code: "WELCOME10", type: "percentage", value: 10, minOrder: 30, maxUses: 500, usedCount: 147, active: true },
  { id: "p2", code: "NOIR20", type: "percentage", value: 20, minOrder: 80, maxUses: 100, usedCount: 38, expiresAt: "2025-01-31", active: true },
  { id: "p3", code: "FREEDELIVERY", type: "fixed", value: 4.5, minOrder: 40, maxUses: 200, usedCount: 89, active: true },
  { id: "p4", code: "VIP15", type: "percentage", value: 15, minOrder: 60, usedCount: 22, active: false },
];

// ── Mock Sales Data ────────────────────────────────────────────
export const mockDailySales: DailySales[] = Array.from({ length: 30 }, (_, i) => {
  const date = new Date();
  date.setDate(date.getDate() - (29 - i));
  const orders = Math.floor(Math.random() * 25) + 12;
  const avgOrder = Math.floor(Math.random() * 40) + 65;
  return {
    date: date.toISOString().split("T")[0],
    orders,
    revenue: orders * avgOrder,
    deliveryOrders: Math.floor(orders * 0.6),
    collectionOrders: Math.ceil(orders * 0.4),
    avgOrderValue: avgOrder,
  };
});

export const mockTopDishes: TopDish[] = [
  { menuItemId: "m1", name: "Dry-Aged Côte de Boeuf", totalOrdered: 412, revenue: 39140 },
  { menuItemId: "c1", name: "Lumière Old Fashioned", totalOrdered: 389, revenue: 7002 },
  { menuItemId: "s1", name: "Oysters Gratinées", totalOrdered: 356, revenue: 11392 },
  { menuItemId: "m2", name: "Roasted Turbot", totalOrdered: 298, revenue: 17284 },
  { menuItemId: "d1", name: "Valrhona Chocolate Fondant", totalOrdered: 287, revenue: 4592 },
  { menuItemId: "c2", name: "Saffron Martini", totalOrdered: 265, revenue: 5300 },
  { menuItemId: "s2", name: "Foie Gras Torchon", totalOrdered: 241, revenue: 6748 },
  { menuItemId: "m4", name: "Agnolotti al Tartufo", totalOrdered: 198, revenue: 7524 },
];

// ── Delivery Zones ─────────────────────────────────────────────
export const deliveryZones = [
  { postcode: "W1", fee: 3.5, minOrder: 35, estimatedMinutes: 30 },
  { postcode: "SW1", fee: 3.5, minOrder: 35, estimatedMinutes: 30 },
  { postcode: "W8", fee: 4.5, minOrder: 40, estimatedMinutes: 40 },
  { postcode: "SW3", fee: 4.5, minOrder: 40, estimatedMinutes: 40 },
  { postcode: "EC1", fee: 5.5, minOrder: 50, estimatedMinutes: 50 },
  { postcode: "EC2", fee: 5.5, minOrder: 50, estimatedMinutes: 50 },
  { postcode: "N1", fee: 5.5, minOrder: 50, estimatedMinutes: 55 },
  { postcode: "SE1", fee: 6, minOrder: 55, estimatedMinutes: 55 },
];

export const checkDeliveryAvailability = (postcode: string) => {
  const prefix = postcode.replace(/\s/g, "").toUpperCase().replace(/\d+.*/, "");
  return deliveryZones.find((z) => z.postcode === prefix) || null;
};

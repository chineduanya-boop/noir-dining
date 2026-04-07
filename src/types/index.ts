// ─── Menu Types ───────────────────────────────────────────────
export type DietaryTag =
  | "vegetarian"
  | "vegan"
  | "gluten-free"
  | "halal"
  | "dairy-free"
  | "nut-free"
  | "spicy";

export type MenuCategory =
  | "starters"
  | "mains"
  | "desserts"
  | "wine"
  | "cocktails"
  | "soft-drinks"
  | "tasting-menu"
  | "lunch";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  dietary: DietaryTag[];
  available: boolean;
  featured: boolean;
  seasonal: boolean;
  image?: string;
  allergens?: string[];
  variants?: MenuVariant[];
  addons?: MenuAddon[];
  preparationTime?: number; // minutes
  stock?: number; // null = unlimited
  lowStockThreshold?: number;
}

export interface MenuVariant {
  id: string;
  name: string;
  priceModifier: number;
}

export interface MenuAddon {
  id: string;
  name: string;
  price: number;
  available: boolean;
}

// ─── Order Types ──────────────────────────────────────────────
export type OrderStatus =
  | "received"
  | "accepted"
  | "preparing"
  | "out-for-delivery"
  | "ready-for-pickup"
  | "completed"
  | "cancelled";

export type OrderType = "delivery" | "collection";

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
  variant?: MenuVariant;
  addons: MenuAddon[];
  notes?: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  type: OrderType;
  status: OrderStatus;
  items: CartItem[];
  customer: CustomerInfo;
  delivery?: DeliveryInfo;
  subtotal: number;
  deliveryFee: number;
  discount: number;
  tip: number;
  total: number;
  promoCode?: string;
  scheduledTime?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
  estimatedTime?: number; // minutes
}

export interface CustomerInfo {
  name: string;
  email: string;
  phone: string;
  address?: string;
}

export interface DeliveryInfo {
  address: string;
  postcode: string;
  instructions?: string;
  estimatedTime?: string;
}

// ─── Reservation Types ────────────────────────────────────────
export type ReservationStatus =
  | "pending"
  | "confirmed"
  | "cancelled"
  | "completed"
  | "no-show";

export interface Reservation {
  id: string;
  referenceNumber: string;
  date: string;
  time: string;
  partySize: number;
  status: ReservationStatus;
  customer: CustomerInfo;
  occasion?: string;
  specialRequests?: string;
  tableNumber?: number;
  isPrivateDining?: boolean;
  createdAt: string;
}

// ─── Inventory Types ──────────────────────────────────────────
export interface InventoryItem {
  id: string;
  name: string;
  category: string;
  unit: string;
  quantity: number;
  lowStockThreshold: number;
  supplier?: string;
  cost?: number;
  lastRestocked?: string;
  linkedMenuItems?: string[];
}

// ─── Admin Types ──────────────────────────────────────────────
export type AdminRole =
  | "super-admin"
  | "manager"
  | "front-of-house"
  | "kitchen"
  | "content-editor";

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: AdminRole;
  active: boolean;
}

// ─── Promo Code Types ─────────────────────────────────────────
export interface PromoCode {
  id: string;
  code: string;
  type: "percentage" | "fixed";
  value: number;
  minOrder?: number;
  maxUses?: number;
  usedCount: number;
  expiresAt?: string;
  active: boolean;
}

// ─── Report Types ─────────────────────────────────────────────
export interface DailySales {
  date: string;
  orders: number;
  revenue: number;
  deliveryOrders: number;
  collectionOrders: number;
  avgOrderValue: number;
}

export interface TopDish {
  menuItemId: string;
  name: string;
  totalOrdered: number;
  revenue: number;
}

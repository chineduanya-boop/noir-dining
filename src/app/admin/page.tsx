import Link from "next/link";
import { mockOrders, mockReservations, mockDailySales, mockTopDishes } from "@/lib/data/mock";
import { StatusBadge } from "@/components/ui/Badge";
import { TrendingUp, ShoppingBag, CalendarCheck, Users, ArrowRight, AlertCircle } from "lucide-react";
import { mockInventory } from "@/lib/data/mock";

export const metadata = { title: "Admin Dashboard — Major Chow" };

export default function AdminDashboard() {
  const today = mockDailySales[mockDailySales.length - 1];
  const yesterday = mockDailySales[mockDailySales.length - 2];
  const weekTotal = mockDailySales.slice(-7).reduce((s, d) => s + d.revenue, 0);
  const monthTotal = mockDailySales.reduce((s, d) => s + d.revenue, 0);
  const lowStockItems = mockInventory.filter((i) => i.quantity <= i.lowStockThreshold);
  const pendingOrders = mockOrders.filter((o) => ["received", "accepted", "preparing"].includes(o.status));
  const pendingReservations = mockReservations.filter((r) => r.status === "pending");

  const stats = [
    {
      label: "Today's Revenue",
      value: `₦${today.revenue.toLocaleString()}`,
      sub: `${today.orders} orders`,
      icon: TrendingUp,
      trend: today.revenue > yesterday.revenue ? "up" : "down",
    },
    {
      label: "Active Orders",
      value: String(pendingOrders.length),
      sub: "Require attention",
      icon: ShoppingBag,
      href: "/admin/orders",
    },
    {
      label: "Today's Reservations",
      value: String(mockReservations.filter((r) => r.status === "confirmed").length),
      sub: `${pendingReservations.length} pending`,
      icon: CalendarCheck,
      href: "/admin/reservations",
    },
    {
      label: "Low Stock Alerts",
      value: String(lowStockItems.length),
      sub: "Items need restocking",
      icon: AlertCircle,
      href: "/admin/inventory",
      alert: lowStockItems.length > 0,
    },
  ];

  return (
    <div className="space-y-8 max-w-7xl">
      {/* Header */}
      <div>
        <p className="overline mb-2">Admin Dashboard</p>
        <h1 className="font-display text-4xl font-light text-cream-100">
          Welcome back, <em className="text-gold-500">Major Chow</em>
        </h1>
        <p className="font-body text-sm text-stone-light mt-1">
          {new Date().toLocaleDateString("en-GB", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={`bg-noir-800 border p-5 ${stat.alert ? "border-amber-600/40" : "border-cream-100/5"}`}
          >
            <div className="flex items-start justify-between mb-3">
              <stat.icon
                size={18}
                strokeWidth={1.5}
                className={stat.alert ? "text-amber-500" : "text-gold-500"}
              />
              {stat.trend && (
                <span className={`font-body text-[0.6rem] ${stat.trend === "up" ? "text-green-400" : "text-red-400"}`}>
                  {stat.trend === "up" ? "▲" : "▼"}
                </span>
              )}
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-cream-100">{stat.value}</p>
            <p className="overline text-[0.56rem] mt-1 mb-0.5">{stat.label}</p>
            <p className="font-body text-xs text-stone-warm">{stat.sub}</p>
            {stat.href && (
              <Link href={stat.href} className="font-body text-[0.58rem] uppercase tracking-[0.15em] text-gold-600 hover:text-gold-500 flex items-center gap-1 mt-3">
                View <ArrowRight size={9} />
              </Link>
            )}
          </div>
        ))}
      </div>

      {/* Revenue summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: "Weekly Revenue", value: `₦${weekTotal.toLocaleString()}` },
          { label: "Monthly Revenue", value: `₦${monthTotal.toLocaleString()}` },
          { label: "Avg Order Value", value: `₦${Math.floor(monthTotal / mockDailySales.reduce((s,d) => s + d.orders, 0)).toLocaleString()}` },
        ].map((item) => (
          <div key={item.label} className="bg-noir-800 border border-cream-100/5 p-5">
            <p className="overline text-[0.55rem] mb-2">{item.label}</p>
            <p className="font-display text-3xl font-light text-gold-500">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent orders */}
        <div className="bg-noir-800 border border-cream-100/5">
          <div className="flex items-center justify-between px-5 py-4 border-b border-cream-100/5">
            <p className="font-body text-[0.65rem] uppercase tracking-[0.18em] text-cream-200">Recent Orders</p>
            <Link href="/admin/orders" className="font-body text-[0.6rem] uppercase tracking-[0.15em] text-gold-600 hover:text-gold-500 flex items-center gap-1">
              All <ArrowRight size={9} />
            </Link>
          </div>
          <div className="divide-y divide-cream-100/5">
            {mockOrders.slice(0, 5).map((order) => (
              <div key={order.id} className="px-5 py-3 flex items-center justify-between gap-3">
                <div>
                  <p className="font-body text-xs text-cream-200">{order.orderNumber}</p>
                  <p className="font-body text-[0.62rem] text-stone-warm">{order.customer.name} · {order.type}</p>
                </div>
                <div className="flex items-center gap-3">
                  <StatusBadge status={order.status} />
                  <p className="font-display text-sm text-gold-500">₦{order.total.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming reservations */}
        <div className="bg-noir-800 border border-cream-100/5">
          <div className="flex items-center justify-between px-5 py-4 border-b border-cream-100/5">
            <p className="font-body text-[0.65rem] uppercase tracking-[0.18em] text-cream-200">Upcoming Reservations</p>
            <Link href="/admin/reservations" className="font-body text-[0.6rem] uppercase tracking-[0.15em] text-gold-600 hover:text-gold-500 flex items-center gap-1">
              All <ArrowRight size={9} />
            </Link>
          </div>
          <div className="divide-y divide-cream-100/5">
            {mockReservations.filter((r) => r.status !== "completed" && r.status !== "cancelled").slice(0, 5).map((res) => (
              <div key={res.id} className="px-5 py-3 flex items-center justify-between gap-3">
                <div>
                  <p className="font-body text-xs text-cream-200">{res.customer.name}</p>
                  <p className="font-body text-[0.62rem] text-stone-warm">
                    {res.date} at {res.time} · {res.partySize} guests
                    {res.occasion && ` · ${res.occasion}`}
                  </p>
                </div>
                <StatusBadge status={res.status} />
              </div>
            ))}
          </div>
        </div>

        {/* Top dishes */}
        <div className="bg-noir-800 border border-cream-100/5">
          <div className="flex items-center justify-between px-5 py-4 border-b border-cream-100/5">
            <p className="font-body text-[0.65rem] uppercase tracking-[0.18em] text-cream-200">Top Dishes This Month</p>
            <Link href="/admin/reports" className="font-body text-[0.6rem] uppercase tracking-[0.15em] text-gold-600 hover:text-gold-500 flex items-center gap-1">
              Reports <ArrowRight size={9} />
            </Link>
          </div>
          <div className="divide-y divide-cream-100/5">
            {mockTopDishes.slice(0, 6).map((dish, i) => (
              <div key={dish.menuItemId} className="px-5 py-3 flex items-center gap-3">
                <span className="font-display text-sm text-gold-700 w-5">{i + 1}</span>
                <div className="flex-1">
                  <p className="font-body text-xs text-cream-200">{dish.name}</p>
                  <p className="font-body text-[0.6rem] text-stone-warm">{dish.totalOrdered} orders</p>
                </div>
                <p className="font-display text-sm text-gold-500">₦{dish.revenue.toLocaleString()}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Low stock alert */}
        <div className="bg-noir-800 border border-cream-100/5">
          <div className="flex items-center justify-between px-5 py-4 border-b border-cream-100/5">
            <p className="font-body text-[0.65rem] uppercase tracking-[0.18em] text-cream-200">
              Low Stock Alerts
              {lowStockItems.length > 0 && (
                <span className="ml-2 w-4 h-4 bg-amber-500 text-noir-900 text-[0.55rem] font-medium rounded-full inline-flex items-center justify-center">
                  {lowStockItems.length}
                </span>
              )}
            </p>
            <Link href="/admin/inventory" className="font-body text-[0.6rem] uppercase tracking-[0.15em] text-gold-600 hover:text-gold-500 flex items-center gap-1">
              Inventory <ArrowRight size={9} />
            </Link>
          </div>
          <div className="divide-y divide-cream-100/5">
            {lowStockItems.length === 0 ? (
              <p className="px-5 py-6 font-body text-sm text-stone-warm">All stock levels are healthy.</p>
            ) : (
              lowStockItems.map((item) => (
                <div key={item.id} className="px-5 py-3 flex items-center justify-between gap-3">
                  <div>
                    <p className="font-body text-xs text-cream-200">{item.name}</p>
                    <p className="font-body text-[0.6rem] text-stone-warm">{item.category}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-body text-xs text-amber-400">{item.quantity} {item.unit}</p>
                    <p className="font-body text-[0.58rem] text-stone-warm">Min: {item.lowStockThreshold}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Quick actions */}
      <div>
        <p className="overline mb-4">Quick Actions</p>
        <div className="flex flex-wrap gap-3">
          {[
            { href: "/admin/menu", label: "Add Menu Item" },
            { href: "/admin/orders", label: "View All Orders" },
            { href: "/admin/reservations", label: "Manage Bookings" },
            { href: "/admin/inventory", label: "Update Stock" },
            { href: "/admin/reports", label: "View Reports" },
            { href: "/admin/settings", label: "Settings" },
          ].map((action) => (
            <Link
              key={action.href}
              href={action.href}
              className="font-body text-[0.62rem] uppercase tracking-[0.15em] px-5 py-2.5 border border-cream-100/15 text-stone-light hover:border-gold-500/40 hover:text-gold-500 transition-all duration-200 flex items-center gap-1.5"
            >
              {action.label} <ArrowRight size={10} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

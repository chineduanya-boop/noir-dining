import { mockDailySales, mockTopDishes, mockOrders, mockPromoCodes } from "@/lib/data/mock";
import { TrendingUp, ShoppingBag, Bike, Store, Tag } from "lucide-react";

export const metadata = { title: "Reports — Admin" };

export default function AdminReportsPage() {
  const totalRevenue = mockDailySales.reduce((s, d) => s + d.revenue, 0);
  const totalOrders = mockDailySales.reduce((s, d) => s + d.orders, 0);
  const totalDelivery = mockDailySales.reduce((s, d) => s + d.deliveryOrders, 0);
  const totalCollection = mockDailySales.reduce((s, d) => s + d.collectionOrders, 0);
  const avgOrderValue = Math.floor(totalRevenue / totalOrders);
  const cancelledOrders = mockOrders.filter((o) => o.status === "cancelled").length;

  return (
    <div className="space-y-8 max-w-7xl">
      <div>
        <p className="overline mb-2">Reports</p>
        <h1 className="font-display text-3xl font-light text-cream-100">Sales & Analytics</h1>
        <p className="font-body text-sm text-stone-light mt-1">Last 30 days</p>
      </div>

      {/* KPI cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Revenue", value: `₦${totalRevenue.toLocaleString()}`, icon: TrendingUp, trend: "+12%" },
          { label: "Total Orders", value: totalOrders.toLocaleString(), icon: ShoppingBag, trend: "+8%" },
          { label: "Avg Order Value", value: `₦${avgOrderValue.toLocaleString()}`, icon: TrendingUp, trend: "+3%" },
          { label: "Cancelled Orders", value: cancelledOrders, icon: ShoppingBag, trend: "-2%" },
        ].map((stat) => (
          <div key={stat.label} className="bg-noir-800 border border-cream-100/5 p-5">
            <div className="flex items-center justify-between mb-3">
              <stat.icon size={16} strokeWidth={1.5} className="text-gold-500" />
              <span className={`font-body text-[0.6rem] ${stat.trend.startsWith("+") ? "text-green-400" : "text-red-400"}`}>
                {stat.trend}
              </span>
            </div>
            <p className="font-display text-2xl lg:text-3xl font-light text-cream-100">{stat.value}</p>
            <p className="font-body text-[0.58rem] uppercase tracking-[0.15em] text-stone-warm mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Delivery vs Collection */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-noir-800 border border-cream-100/5 p-5">
          <div className="flex items-center gap-3 mb-4">
            <Bike size={16} strokeWidth={1.5} className="text-gold-500" />
            <p className="overline text-[0.6rem]">Delivery Orders</p>
          </div>
          <p className="font-display text-3xl font-light text-cream-100">{totalDelivery.toLocaleString()}</p>
          <p className="font-body text-xs text-stone-light mt-1">
            {Math.round((totalDelivery / totalOrders) * 100)}% of all orders
          </p>
          <div className="mt-4 h-2 bg-noir-700 rounded-full overflow-hidden">
            <div className="h-full bg-gold-500 rounded-full" style={{ width: `${Math.round((totalDelivery / totalOrders) * 100)}%` }} />
          </div>
        </div>
        <div className="bg-noir-800 border border-cream-100/5 p-5">
          <div className="flex items-center gap-3 mb-4">
            <Store size={16} strokeWidth={1.5} className="text-gold-500" />
            <p className="overline text-[0.6rem]">Collection Orders</p>
          </div>
          <p className="font-display text-3xl font-light text-cream-100">{totalCollection.toLocaleString()}</p>
          <p className="font-body text-xs text-stone-light mt-1">
            {Math.round((totalCollection / totalOrders) * 100)}% of all orders
          </p>
          <div className="mt-4 h-2 bg-noir-700 rounded-full overflow-hidden">
            <div className="h-full bg-gold-600 rounded-full" style={{ width: `${Math.round((totalCollection / totalOrders) * 100)}%` }} />
          </div>
        </div>
      </div>

      {/* Revenue chart (simplified visual) */}
      <div className="bg-noir-800 border border-cream-100/5 p-6">
        <p className="overline mb-4">Daily Revenue — Last 30 Days</p>
        <div className="flex items-end gap-1 h-32">
          {mockDailySales.map((day, i) => {
            const max = Math.max(...mockDailySales.map((d) => d.revenue));
            const height = (day.revenue / max) * 100;
            return (
              <div key={i} className="flex-1 relative group">
                <div
                  className="bg-gold-500/40 hover:bg-gold-500 transition-colors duration-200"
                  style={{ height: `${height}%` }}
                  title={`${day.date}: ₦${day.revenue.toLocaleString()}`}
                />
              </div>
            );
          })}
        </div>
        <div className="flex justify-between font-body text-[0.58rem] text-stone-warm mt-2">
          <span>{mockDailySales[0].date}</span>
          <span>{mockDailySales[mockDailySales.length - 1].date}</span>
        </div>
      </div>

      {/* Top dishes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-noir-800 border border-cream-100/5">
          <div className="px-5 py-4 border-b border-cream-100/5">
            <p className="font-body text-[0.62rem] uppercase tracking-[0.18em] text-cream-200">Top Selling Dishes</p>
          </div>
          <div className="divide-y divide-cream-100/5">
            {mockTopDishes.map((dish, i) => (
              <div key={dish.menuItemId} className="px-5 py-3 flex items-center gap-3">
                <span className="font-display text-lg text-gold-700/60 w-6">{i + 1}</span>
                <div className="flex-1">
                  <p className="font-body text-sm text-cream-100">{dish.name}</p>
                  <div className="mt-1.5 h-1.5 bg-noir-700 rounded-full overflow-hidden w-full">
                    <div className="h-full bg-gold-500/60 rounded-full"
                      style={{ width: `${(dish.totalOrdered / mockTopDishes[0].totalOrdered) * 100}%` }} />
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-body text-xs text-stone-light">{dish.totalOrdered} orders</p>
                  <p className="font-display text-sm text-gold-500">₦{dish.revenue.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Promo code usage */}
        <div className="bg-noir-800 border border-cream-100/5">
          <div className="px-5 py-4 border-b border-cream-100/5">
            <p className="font-body text-[0.62rem] uppercase tracking-[0.18em] text-cream-200">Promo Code Usage</p>
          </div>
          <div className="divide-y divide-cream-100/5">
            {mockPromoCodes.map((promo) => (
              <div key={promo.id} className="px-5 py-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Tag size={12} className="text-gold-500" />
                    <span className="font-body text-sm text-cream-100">{promo.code}</span>
                    {!promo.active && (
                      <span className="font-body text-[0.58rem] border border-stone-warm/30 text-stone-warm px-1.5 py-0.5">Inactive</span>
                    )}
                  </div>
                  <span className="font-body text-xs text-stone-light">
                    {promo.type === "percentage" ? `${promo.value * 100}% off` : `₦${promo.value} off`}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex-1 mr-4">
                    <div className="h-1.5 bg-noir-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gold-500/50 rounded-full"
                        style={{ width: promo.maxUses ? `${(promo.usedCount / promo.maxUses) * 100}%` : "60%" }} />
                    </div>
                  </div>
                  <span className="font-body text-xs text-stone-light">{promo.usedCount} uses</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

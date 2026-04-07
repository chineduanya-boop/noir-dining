"use client";

import { useState } from "react";
import { mockInventory } from "@/lib/data/mock";
import type { InventoryItem } from "@/types";
import { AlertTriangle, Plus, Edit2, Search, Package } from "lucide-react";

export default function AdminInventoryPage() {
  const [items, setItems] = useState<InventoryItem[]>(mockInventory);
  const [search, setSearch] = useState("");
  const [filterAlert, setFilterAlert] = useState(false);

  const filtered = items.filter((i) => {
    const matchSearch = i.name.toLowerCase().includes(search.toLowerCase()) || i.category.toLowerCase().includes(search.toLowerCase());
    const matchAlert = !filterAlert || i.quantity <= i.lowStockThreshold;
    return matchSearch && matchAlert;
  });

  const lowStockCount = items.filter((i) => i.quantity <= i.lowStockThreshold).length;

  const updateQty = (id: string, qty: number) => {
    setItems((prev) => prev.map((i) => i.id === id ? { ...i, quantity: Math.max(0, qty) } : i));
  };

  return (
    <div className="space-y-6 max-w-7xl">
      <div>
        <p className="overline mb-2">Inventory</p>
        <h1 className="font-display text-3xl font-light text-cream-100">Inventory Management</h1>
      </div>

      {/* Alert banner */}
      {lowStockCount > 0 && (
        <div className="flex items-center gap-3 bg-amber-900/20 border border-amber-600/30 p-4">
          <AlertTriangle size={16} className="text-amber-500 flex-shrink-0" strokeWidth={1.5} />
          <p className="font-body text-sm text-stone-light">
            <span className="text-amber-400 font-medium">{lowStockCount} items</span> are at or below their low-stock threshold and need restocking.
          </p>
          <button onClick={() => setFilterAlert(true)} className="ml-auto font-body text-[0.6rem] uppercase tracking-[0.15em] text-amber-500 hover:underline flex-shrink-0">
            View Only
          </button>
        </div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: "Total Items", value: items.length, icon: Package },
          { label: "Low Stock", value: lowStockCount, icon: AlertTriangle, alert: lowStockCount > 0 },
          { label: "Categories", value: [...new Set(items.map((i) => i.category))].length, icon: Package },
          { label: "Total Value", value: `₦${items.reduce((s, i) => s + (i.quantity * (i.cost || 0)), 0).toLocaleString()}`, icon: Package },
        ].map((stat, i) => (
          <div key={i} className={`bg-noir-800 border p-4 ${stat.alert ? "border-amber-600/30" : "border-cream-100/5"}`}>
            <p className={`font-display text-2xl font-light ${stat.alert ? "text-amber-400" : "text-gold-500"}`}>{stat.value}</p>
            <p className="font-body text-[0.6rem] uppercase tracking-[0.15em] text-stone-light mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex gap-3">
        <div className="relative flex-1 max-w-md">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-warm" />
          <input type="text" placeholder="Search ingredients..." value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-noir-800 border border-cream-100/15 text-cream-100 placeholder-stone-warm pl-9 pr-4 py-2.5 font-body text-sm focus:border-gold-500 outline-none" />
        </div>
        <button onClick={() => setFilterAlert(!filterAlert)}
          className={`font-body text-[0.62rem] uppercase tracking-[0.15em] px-4 py-2.5 border transition-all duration-200 ${
            filterAlert ? "border-amber-500 bg-amber-500/10 text-amber-400" : "border-cream-100/15 text-stone-light hover:border-amber-500/40"}`}>
          Low Stock Only
        </button>
        <button className="font-body text-[0.62rem] uppercase tracking-[0.15em] px-4 py-2.5 bg-gold-500 text-noir-900 hover:bg-gold-400 transition-all flex items-center gap-1.5 font-medium">
          <Plus size={12} /> Add Item
        </button>
      </div>

      {/* Table */}
      <div className="bg-noir-800 border border-cream-100/5 overflow-x-auto">
        <table className="w-full min-w-[700px]">
          <thead>
            <tr className="border-b border-cream-100/5">
              {["Item", "Category", "Qty", "Threshold", "Supplier", "Cost/Unit", "Status", ""].map((h) => (
                <th key={h} className="px-4 py-3 text-left font-body text-[0.58rem] uppercase tracking-[0.18em] text-stone-warm">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-cream-100/5">
            {filtered.map((item) => {
              const isLow = item.quantity <= item.lowStockThreshold;
              return (
                <tr key={item.id} className={`hover:bg-noir-700/50 transition-colors ${isLow ? "bg-amber-900/5" : ""}`}>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      {isLow && <AlertTriangle size={12} className="text-amber-500 flex-shrink-0" />}
                      <p className="font-body text-sm text-cream-100">{item.name}</p>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="font-body text-xs text-stone-light">{item.category}</span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <button onClick={() => updateQty(item.id, item.quantity - 1)}
                        className="w-5 h-5 border border-cream-100/20 flex items-center justify-center text-xs hover:border-gold-500 transition-colors">-</button>
                      <span className={`font-body text-sm font-medium w-12 text-center ${isLow ? "text-amber-400" : "text-cream-100"}`}>
                        {item.quantity} <span className="text-stone-warm text-[0.6rem]">{item.unit}</span>
                      </span>
                      <button onClick={() => updateQty(item.id, item.quantity + 1)}
                        className="w-5 h-5 border border-cream-100/20 flex items-center justify-center text-xs hover:border-gold-500 transition-colors">+</button>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="font-body text-xs text-stone-light">{item.lowStockThreshold} {item.unit}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="font-body text-xs text-stone-light">{item.supplier || "—"}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="font-body text-xs text-stone-light">{item.cost ? `₦${item.cost}` : "—"}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`font-body text-[0.6rem] border px-2 py-0.5 uppercase tracking-wide ${
                      isLow ? "border-amber-600/30 text-amber-400 bg-amber-900/15" : "border-green-700/30 text-green-400 bg-green-900/15"}`}>
                      {isLow ? "Low Stock" : "In Stock"}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button className="text-stone-warm hover:text-cream-100 transition-colors">
                      <Edit2 size={13} strokeWidth={1.5} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

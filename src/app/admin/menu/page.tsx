"use client";

import { useState } from "react";
import { menuItems as initialItems } from "@/lib/data/menu";
import { DietaryBadge } from "@/components/ui/Badge";
import type { MenuItem, DietaryTag } from "@/types";
import { Plus, Edit2, Trash2, Eye, EyeOff, Search, Star } from "lucide-react";

export default function AdminMenuPage() {
  const [items, setItems] = useState<MenuItem[]>(initialItems);
  const [search, setSearch] = useState("");
  const [editItem, setEditItem] = useState<MenuItem | null>(null);
  const [showForm, setShowForm] = useState(false);

  const filtered = items.filter(
    (i) =>
      i.name.toLowerCase().includes(search.toLowerCase()) ||
      i.category.toLowerCase().includes(search.toLowerCase())
  );

  const toggleAvailability = (id: string) => {
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, available: !i.available } : i)));
  };

  const toggleFeatured = (id: string) => {
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, featured: !i.featured } : i)));
  };

  const deleteItem = (id: string) => {
    if (confirm("Remove this item from the menu?")) {
      setItems((prev) => prev.filter((i) => i.id !== id));
    }
  };

  return (
    <div className="space-y-6 max-w-7xl">
      <div className="flex items-center justify-between">
        <div>
          <p className="overline mb-2">Menu</p>
          <h1 className="font-display text-3xl font-light text-cream-100">Menu Management</h1>
        </div>
        <button
          onClick={() => { setEditItem(null); setShowForm(true); }}
          className="font-body text-[0.62rem] uppercase tracking-[0.18em] px-5 py-2.5 bg-gold-500 text-noir-900 hover:bg-gold-400 transition-all duration-200 font-medium flex items-center gap-2"
        >
          <Plus size={13} /> Add Item
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: "Total Items", value: items.length },
          { label: "Available", value: items.filter((i) => i.available).length },
          { label: "Unavailable", value: items.filter((i) => !i.available).length },
          { label: "Featured", value: items.filter((i) => i.featured).length },
        ].map((stat) => (
          <div key={stat.label} className="bg-noir-800 border border-cream-100/5 p-4">
            <p className="font-display text-2xl font-light text-gold-500">{stat.value}</p>
            <p className="font-body text-[0.6rem] uppercase tracking-[0.15em] text-stone-light mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Search */}
      <div className="relative">
        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-warm" />
        <input type="text" placeholder="Search menu items..." value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-noir-800 border border-cream-100/15 text-cream-100 placeholder-stone-warm pl-9 pr-4 py-2.5 font-body text-sm focus:border-gold-500 outline-none max-w-md" />
      </div>

      {/* Table */}
      <div className="bg-noir-800 border border-cream-100/5 overflow-x-auto">
        <table className="w-full min-w-[700px]">
          <thead>
            <tr className="border-b border-cream-100/5">
              {["Item", "Category", "Price", "Dietary", "Status", "Actions"].map((h) => (
                <th key={h} className="px-4 py-3 text-left font-body text-[0.58rem] uppercase tracking-[0.18em] text-stone-warm">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-cream-100/5">
            {filtered.map((item) => (
              <tr key={item.id} className="hover:bg-noir-700/50 transition-colors">
                <td className="px-4 py-3">
                  <div>
                    <p className="font-body text-sm text-cream-100">{item.name}</p>
                    {item.featured && <p className="font-body text-[0.58rem] text-gold-600 flex items-center gap-1"><Star size={9} fill="currentColor" /> Featured</p>}
                    {item.seasonal && <p className="font-body text-[0.58rem] text-amber-600">Seasonal</p>}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className="font-body text-xs text-stone-light capitalize">{item.category}</span>
                </td>
                <td className="px-4 py-3">
                  <span className="font-display text-sm text-gold-500">₦{item.price.toLocaleString()}</span>
                  {item.variants && item.variants.length > 0 && (
                    <p className="font-body text-[0.58rem] text-stone-warm">{item.variants.length} variants</p>
                  )}
                </td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap gap-1">
                    {item.dietary.slice(0, 3).map((tag) => (
                      <DietaryBadge key={tag} tag={tag as DietaryTag} />
                    ))}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className={`font-body text-[0.6rem] border px-2 py-0.5 uppercase tracking-wide ${
                    item.available ? "border-green-700/30 text-green-400 bg-green-900/15" : "border-red-700/30 text-red-400 bg-red-900/15"}`}>
                    {item.available ? "Available" : "Unavailable"}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <button onClick={() => toggleAvailability(item.id)} title={item.available ? "Mark unavailable" : "Mark available"}
                      className="text-stone-warm hover:text-gold-500 transition-colors">
                      {item.available ? <Eye size={14} strokeWidth={1.5} /> : <EyeOff size={14} strokeWidth={1.5} />}
                    </button>
                    <button onClick={() => toggleFeatured(item.id)} title={item.featured ? "Unfeature" : "Feature"}
                      className={`transition-colors ${item.featured ? "text-gold-500" : "text-stone-warm hover:text-gold-500"}`}>
                      <Star size={14} strokeWidth={1.5} fill={item.featured ? "currentColor" : "none"} />
                    </button>
                    <button onClick={() => { setEditItem(item); setShowForm(true); }} title="Edit"
                      className="text-stone-warm hover:text-cream-100 transition-colors">
                      <Edit2 size={13} strokeWidth={1.5} />
                    </button>
                    <button onClick={() => deleteItem(item.id)} title="Delete"
                      className="text-stone-warm hover:text-red-400 transition-colors">
                      <Trash2 size={13} strokeWidth={1.5} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add/Edit Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-noir-950/90" onClick={() => setShowForm(false)} />
          <div className="relative bg-noir-800 border border-gold-700/25 p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <p className="overline mb-3">{editItem ? "Edit Item" : "New Menu Item"}</p>
            <h2 className="font-display text-2xl font-light text-cream-100 mb-6">
              {editItem ? editItem.name : "Add a new item"}
            </h2>
            <div className="space-y-4">
              <label className="flex flex-col gap-1.5">
                <span className="overline text-[0.55rem]">Item Name</span>
                <input type="text" defaultValue={editItem?.name}
                  className="bg-noir-700 border border-cream-100/15 text-cream-100 px-3 py-2.5 font-body text-sm focus:border-gold-500 outline-none" />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="overline text-[0.55rem]">Description</span>
                <textarea rows={3} defaultValue={editItem?.description}
                  className="bg-noir-700 border border-cream-100/15 text-cream-100 px-3 py-2.5 font-body text-sm focus:border-gold-500 outline-none resize-none" />
              </label>
              <div className="grid grid-cols-2 gap-4">
                <label className="flex flex-col gap-1.5">
                  <span className="overline text-[0.55rem]">Price (₦)</span>
                  <input type="number" defaultValue={editItem?.price}
                    className="bg-noir-700 border border-cream-100/15 text-cream-100 px-3 py-2.5 font-body text-sm focus:border-gold-500 outline-none" />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="overline text-[0.55rem]">Category</span>
                  <select defaultValue={editItem?.category}
                    className="bg-noir-700 border border-cream-100/15 text-cream-100 px-3 py-2.5 font-body text-sm focus:border-gold-500 outline-none">
                    <option value="starters">Starters / Shawarma</option>
                    <option value="mains">Mains / Pizza</option>
                    <option value="desserts">Desserts</option>
                    <option value="cocktails">Cocktails / Coffee</option>
                    <option value="soft-drinks">Soft Drinks</option>
                  </select>
                </label>
              </div>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" defaultChecked={editItem?.available ?? true} className="accent-gold-500 w-4 h-4" />
                  <span className="font-body text-sm text-stone-light">Available</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" defaultChecked={editItem?.featured} className="accent-gold-500 w-4 h-4" />
                  <span className="font-body text-sm text-stone-light">Featured</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" defaultChecked={editItem?.seasonal} className="accent-gold-500 w-4 h-4" />
                  <span className="font-body text-sm text-stone-light">Seasonal</span>
                </label>
              </div>
              <div className="flex gap-3 pt-2">
                <button onClick={() => setShowForm(false)}
                  className="flex-1 font-body text-[0.65rem] uppercase tracking-[0.18em] py-3 border border-cream-100/20 text-stone-light hover:border-gold-500/40 transition-colors">
                  Cancel
                </button>
                <button onClick={() => setShowForm(false)}
                  className="flex-1 font-body text-[0.65rem] uppercase tracking-[0.18em] py-3 bg-gold-500 text-noir-900 hover:bg-gold-400 transition-all duration-200 font-medium">
                  {editItem ? "Save Changes" : "Add Item"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

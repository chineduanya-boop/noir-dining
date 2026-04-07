"use client";

import { useState } from "react";
import { mockReservations } from "@/lib/data/mock";
import { StatusBadge } from "@/components/ui/Badge";
import type { Reservation, ReservationStatus } from "@/types";
import { Search, Users, Calendar } from "lucide-react";

const statuses: ReservationStatus[] = ["pending","confirmed","cancelled","completed","no-show"];

export default function AdminReservationsPage() {
  const [reservations, setReservations] = useState<Reservation[]>(mockReservations);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [selected, setSelected] = useState<Reservation | null>(null);

  const filtered = reservations.filter((r) => {
    const q = search.toLowerCase();
    const matchSearch = r.customer.name.toLowerCase().includes(q) || r.referenceNumber.toLowerCase().includes(q);
    const matchStatus = filterStatus === "all" || r.status === filterStatus;
    return matchSearch && matchStatus;
  });

  const updateStatus = (id: string, status: ReservationStatus) => {
    setReservations((prev) => prev.map((r) => r.id === id ? { ...r, status } : r));
    if (selected?.id === id) setSelected((r) => r ? { ...r, status } : r);
  };

  return (
    <div className="space-y-6 max-w-7xl">
      <div>
        <p className="overline mb-2">Reservations</p>
        <h1 className="font-display text-3xl font-light text-cream-100">Reservation Management</h1>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-warm" />
          <input type="text" placeholder="Search by name or reference..." value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-noir-800 border border-cream-100/15 text-cream-100 placeholder-stone-warm pl-9 pr-4 py-2.5 font-body text-sm focus:border-gold-500 outline-none" />
        </div>
        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}
          className="bg-noir-800 border border-cream-100/15 text-cream-100 px-3 py-2.5 font-body text-sm focus:border-gold-500 outline-none">
          <option value="all">All Statuses</option>
          {statuses.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* List */}
        <div className="lg:col-span-3 bg-noir-800 border border-cream-100/5">
          <div className="px-5 py-3 border-b border-cream-100/5">
            <p className="font-body text-[0.62rem] uppercase tracking-[0.18em] text-stone-light">{filtered.length} reservations</p>
          </div>
          <div className="divide-y divide-cream-100/5 max-h-[600px] overflow-y-auto">
            {filtered.map((res) => (
              <button key={res.id} onClick={() => setSelected(res)}
                className={`w-full px-5 py-4 text-left hover:bg-noir-700 transition-colors ${selected?.id === res.id ? "bg-noir-700 border-l-2 border-gold-500" : ""}`}>
                <div className="flex items-center justify-between gap-3 mb-1.5">
                  <div className="flex items-center gap-3">
                    <span className="font-body text-xs text-cream-200 font-medium">{res.customer.name}</span>
                    <StatusBadge status={res.status} />
                    {res.isPrivateDining && <span className="font-body text-[0.58rem] border border-gold-500/40 text-gold-500 px-1.5 py-0.5">Private</span>}
                  </div>
                  <span className="font-body text-[0.6rem] text-stone-warm">{res.referenceNumber}</span>
                </div>
                <div className="flex items-center gap-4 text-stone-light">
                  <span className="flex items-center gap-1 font-body text-xs">
                    <Calendar size={10} />{res.date} at {res.time}
                  </span>
                  <span className="flex items-center gap-1 font-body text-xs">
                    <Users size={10} />{res.partySize} guests
                  </span>
                  {res.occasion && <span className="font-body text-xs text-gold-600">{res.occasion}</span>}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Detail */}
        <div className="lg:col-span-2 bg-noir-800 border border-cream-100/5 p-5">
          {!selected ? (
            <div className="h-full flex items-center justify-center">
              <p className="font-body text-sm text-stone-warm">Select a reservation to view details</p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="font-body text-xs text-cream-200 font-medium">{selected.referenceNumber}</p>
                <StatusBadge status={selected.status} />
              </div>
              <div className="gold-line opacity-20" />
              <div className="grid grid-cols-2 gap-4 text-sm">
                {[
                  { label: "Guest", value: selected.customer.name },
                  { label: "Phone", value: selected.customer.phone },
                  { label: "Email", value: selected.customer.email },
                  { label: "Date", value: selected.date },
                  { label: "Time", value: selected.time },
                  { label: "Party Size", value: `${selected.partySize} guests` },
                  ...(selected.tableNumber ? [{ label: "Table", value: `#${selected.tableNumber}` }] : []),
                  ...(selected.occasion ? [{ label: "Occasion", value: selected.occasion }] : []),
                ].map((item) => (
                  <div key={item.label}>
                    <p className="overline text-[0.54rem] mb-0.5">{item.label}</p>
                    <p className="font-body text-xs text-cream-100">{item.value}</p>
                  </div>
                ))}
              </div>
              {selected.specialRequests && (
                <div>
                  <p className="overline text-[0.54rem] mb-1">Special Requests</p>
                  <p className="font-body text-xs text-stone-light leading-relaxed italic">{selected.specialRequests}</p>
                </div>
              )}
              <div className="gold-line opacity-20" />
              <div>
                <p className="overline text-[0.55rem] mb-3">Update Status</p>
                <div className="flex flex-wrap gap-2">
                  {statuses.map((s) => (
                    <button key={s} onClick={() => updateStatus(selected.id, s)}
                      className={`font-body text-[0.58rem] uppercase tracking-[0.1em] py-1.5 px-3 border transition-all duration-200 ${
                        selected.status === s ? "border-gold-500 bg-gold-500/12 text-gold-400" : "border-cream-100/12 text-stone-light hover:border-gold-500/30"}`}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

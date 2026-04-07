"use client";

import { useState } from "react";
import { mockOrders } from "@/lib/data/mock";
import { StatusBadge } from "@/components/ui/Badge";
import type { Order, OrderStatus } from "@/types";
import { Search, Filter, Clock } from "lucide-react";

const statusOptions: OrderStatus[] = ["received","accepted","preparing","out-for-delivery","ready-for-pickup","completed","cancelled"];

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<Order[]>(mockOrders);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const filtered = orders.filter((o) => {
    const matchSearch = o.orderNumber.toLowerCase().includes(search.toLowerCase()) ||
      o.customer.name.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus === "all" || o.status === filterStatus;
    return matchSearch && matchStatus;
  });

  const updateStatus = (orderId: string, status: OrderStatus) => {
    setOrders((prev) => prev.map((o) => o.id === orderId ? { ...o, status, updatedAt: new Date().toISOString() } : o));
    if (selectedOrder?.id === orderId) setSelectedOrder((o) => o ? { ...o, status } : o);
  };

  return (
    <div className="space-y-6 max-w-7xl">
      <div>
        <p className="overline mb-2">Orders</p>
        <h1 className="font-display text-3xl font-light text-cream-100">Order Management</h1>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-warm" />
          <input
            type="text"
            placeholder="Search by order # or customer name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-noir-800 border border-cream-100/15 text-cream-100 placeholder-stone-warm pl-9 pr-4 py-2.5 font-body text-sm focus:border-gold-500 outline-none"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter size={14} className="text-stone-warm" />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="bg-noir-800 border border-cream-100/15 text-cream-100 px-3 py-2.5 font-body text-sm focus:border-gold-500 outline-none"
          >
            <option value="all">All Statuses</option>
            {statusOptions.map((s) => (
              <option key={s} value={s}>{s.replace(/-/g, " ")}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Orders list */}
        <div className="lg:col-span-3 bg-noir-800 border border-cream-100/5">
          <div className="px-5 py-3 border-b border-cream-100/5">
            <p className="font-body text-[0.62rem] uppercase tracking-[0.18em] text-stone-light">{filtered.length} orders</p>
          </div>
          <div className="divide-y divide-cream-100/5 max-h-[600px] overflow-y-auto">
            {filtered.length === 0 ? (
              <p className="px-5 py-8 font-body text-sm text-stone-warm text-center">No orders found</p>
            ) : (
              filtered.map((order) => (
                <button
                  key={order.id}
                  onClick={() => setSelectedOrder(order)}
                  className={`w-full px-5 py-4 text-left hover:bg-noir-700 transition-colors ${
                    selectedOrder?.id === order.id ? "bg-noir-700 border-l-2 border-gold-500" : ""
                  }`}
                >
                  <div className="flex items-center justify-between gap-3 mb-1.5">
                    <div className="flex items-center gap-3">
                      <span className="font-body text-xs text-cream-200 font-medium">{order.orderNumber}</span>
                      <StatusBadge status={order.status} />
                    </div>
                    <span className="font-display text-sm text-gold-500">₦{order.total.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="font-body text-xs text-stone-light">{order.customer.name} · {order.type}</p>
                    <div className="flex items-center gap-1 text-stone-warm">
                      <Clock size={10} />
                      <span className="font-body text-[0.6rem]">
                        {new Date(order.createdAt).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })}
                      </span>
                    </div>
                  </div>
                </button>
              ))
            )}
          </div>
        </div>

        {/* Order detail */}
        <div className="lg:col-span-2 bg-noir-800 border border-cream-100/5">
          {!selectedOrder ? (
            <div className="h-full flex items-center justify-center p-8">
              <p className="font-body text-sm text-stone-warm text-center">Select an order to view details</p>
            </div>
          ) : (
            <div className="p-5">
              <div className="flex items-center justify-between mb-4">
                <p className="font-body text-xs text-cream-200 font-medium">{selectedOrder.orderNumber}</p>
                <StatusBadge status={selectedOrder.status} />
              </div>

              <div className="space-y-3 mb-5">
                <div>
                  <p className="overline text-[0.55rem] mb-1">Customer</p>
                  <p className="font-body text-sm text-cream-100">{selectedOrder.customer.name}</p>
                  <p className="font-body text-xs text-stone-light">{selectedOrder.customer.phone}</p>
                  <p className="font-body text-xs text-stone-light">{selectedOrder.customer.email}</p>
                </div>
                {selectedOrder.delivery && (
                  <div>
                    <p className="overline text-[0.55rem] mb-1">Delivery Address</p>
                    <p className="font-body text-xs text-stone-light">{selectedOrder.delivery.address}</p>
                    {selectedOrder.delivery.instructions && (
                      <p className="font-body text-xs text-stone-warm italic mt-0.5">{selectedOrder.delivery.instructions}</p>
                    )}
                  </div>
                )}
                <div>
                  <p className="overline text-[0.55rem] mb-1">Order Type</p>
                  <p className="font-body text-sm text-cream-100 capitalize">{selectedOrder.type}</p>
                </div>
                <div>
                  <p className="overline text-[0.55rem] mb-1">Total</p>
                  <p className="font-display text-xl text-gold-500">₦{selectedOrder.total.toLocaleString()}</p>
                  <p className="font-body text-xs text-stone-light">Subtotal: ₦{selectedOrder.subtotal.toLocaleString()}</p>
                </div>
              </div>

              <div className="gold-line opacity-20 mb-4" />

              {/* Update status */}
              <div>
                <p className="overline text-[0.55rem] mb-3">Update Status</p>
                <div className="grid grid-cols-2 gap-2">
                  {statusOptions.map((status) => (
                    <button
                      key={status}
                      onClick={() => updateStatus(selectedOrder.id, status)}
                      className={`font-body text-[0.58rem] uppercase tracking-[0.12em] py-2 px-3 border transition-all duration-200 text-left ${
                        selectedOrder.status === status
                          ? "border-gold-500 bg-gold-500/12 text-gold-400"
                          : "border-cream-100/12 text-stone-light hover:border-gold-500/30 hover:text-cream-100"
                      }`}
                    >
                      {status.replace(/-/g, " ")}
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

"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard, ShoppingBag, CalendarCheck, UtensilsCrossed,
  Package, BarChart3, Settings, LogOut, Menu, X, ChevronRight,
} from "lucide-react";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { href: "/admin/orders", label: "Orders", icon: ShoppingBag },
  { href: "/admin/reservations", label: "Reservations", icon: CalendarCheck },
  { href: "/admin/menu", label: "Menu Management", icon: UtensilsCrossed },
  { href: "/admin/inventory", label: "Inventory", icon: Package },
  { href: "/admin/reports", label: "Reports", icon: BarChart3 },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  async function handleSignOut() {
    await fetch("/api/admin-logout", { method: "POST" });
    window.location.href = "/admin/login";
  }

  const isActive = (href: string, exact?: boolean) =>
    exact ? pathname === href : pathname.startsWith(href) && (href !== "/admin" || pathname === "/admin");

  return (
    <div className="min-h-screen bg-noir-950 flex">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-noir-900 border-r border-gold-700/15 flex flex-col transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Logo */}
        <div className="px-6 py-6 border-b border-gold-700/15">
          <div className="flex items-center justify-between">
            <Link href="/admin" className="flex flex-col">
              <span className="font-display text-lg font-light tracking-[0.1em] text-cream-100">MAJOR CHOW</span>
              <span className="font-body text-[0.55rem] tracking-[0.25em] text-gold-600 uppercase">Admin Portal</span>
            </Link>
            <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-stone-warm hover:text-cream-100">
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
          {navItems.map((item) => {
            const active = isActive(item.href, item.exact);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 transition-all duration-200 group ${
                  active
                    ? "bg-gold-500/12 border-l-2 border-gold-500 text-gold-400 pl-[10px]"
                    : "border-l-2 border-transparent text-stone-light hover:text-cream-100 hover:bg-noir-800"
                }`}
              >
                <item.icon size={15} strokeWidth={1.5} className={active ? "text-gold-500" : "text-stone-warm group-hover:text-cream-200"} />
                <span className="font-body text-[0.7rem] uppercase tracking-[0.15em]">{item.label}</span>
                {active && <ChevronRight size={12} className="ml-auto text-gold-500" />}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gold-700/15 space-y-2">
          <Link href="/" className="flex items-center gap-3 px-3 py-2 text-stone-light hover:text-cream-100 transition-colors">
            <ChevronRight size={14} className="rotate-180" />
            <span className="font-body text-[0.65rem] uppercase tracking-[0.15em]">View Website</span>
          </Link>
          <button onClick={handleSignOut} className="flex items-center gap-3 px-3 py-2 text-red-400/70 hover:text-red-400 transition-colors w-full">
            <LogOut size={14} strokeWidth={1.5} />
            <span className="font-body text-[0.65rem] uppercase tracking-[0.15em]">Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 bg-noir-950/80 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Main */}
      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen">
        {/* Top bar */}
        <header className="sticky top-0 z-30 bg-noir-900/95 backdrop-blur border-b border-gold-700/12 px-6 py-4 flex items-center gap-4">
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-stone-warm hover:text-cream-100">
            <Menu size={20} strokeWidth={1.5} />
          </button>
          <div className="flex-1" />
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-gold-500/20 border border-gold-500/30 flex items-center justify-center">
              <span className="font-body text-[0.6rem] text-gold-500 font-medium">A</span>
            </div>
            <span className="font-body text-[0.65rem] text-stone-light hidden sm:block">Admin</span>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}

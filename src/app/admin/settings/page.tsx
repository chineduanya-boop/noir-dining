"use client";

import { useState } from "react";
import { Save, AlertCircle } from "lucide-react";

export default function AdminSettingsPage() {
  const [deliveryEnabled, setDeliveryEnabled] = useState(true);
  const [orderingEnabled, setOrderingEnabled] = useState(true);
  const [saved, setSaved] = useState(false);

  const saveSettings = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-8 max-w-3xl">
      <div>
        <p className="overline mb-2">Settings</p>
        <h1 className="font-display text-3xl font-light text-cream-100">Restaurant Settings</h1>
      </div>

      {saved && (
        <div className="flex items-center gap-2 bg-green-900/20 border border-green-700/30 p-3">
          <AlertCircle size={14} className="text-green-400" />
          <span className="font-body text-sm text-green-300">Settings saved successfully.</span>
        </div>
      )}

      {/* Operations */}
      <div className="bg-noir-800 border border-cream-100/5">
        <div className="px-6 py-4 border-b border-cream-100/5">
          <p className="font-body text-[0.65rem] uppercase tracking-[0.18em] text-cream-200">Operations</p>
        </div>
        <div className="divide-y divide-cream-100/5">
          {[
            { label: "Online Ordering", desc: "Allow customers to place orders online", value: orderingEnabled, set: setOrderingEnabled },
            { label: "Delivery", desc: "Enable delivery orders", value: deliveryEnabled, set: setDeliveryEnabled },
          ].map((item) => (
            <div key={item.label} className="px-6 py-4 flex items-center justify-between gap-4">
              <div>
                <p className="font-body text-sm text-cream-100">{item.label}</p>
                <p className="font-body text-xs text-stone-light">{item.desc}</p>
              </div>
              <button
                onClick={() => item.set(!item.value)}
                className={`w-12 h-6 rounded-full transition-colors duration-300 relative flex-shrink-0 ${item.value ? "bg-gold-500" : "bg-noir-600"}`}
              >
                <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-transform duration-300 ${item.value ? "translate-x-6" : "translate-x-0.5"}`} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Opening hours */}
      <div className="bg-noir-800 border border-cream-100/5">
        <div className="px-6 py-4 border-b border-cream-100/5">
          <p className="font-body text-[0.65rem] uppercase tracking-[0.18em] text-cream-200">Opening Hours</p>
        </div>
        <div className="p-6 space-y-4">
          {["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"].map((day) => (
            <div key={day} className="flex items-center gap-4">
              <span className="font-body text-sm text-stone-light w-24">{day}</span>
              <input type="time" defaultValue={day === "Sunday" ? "12:00" : "10:00"}
                className="bg-noir-700 border border-cream-100/15 text-cream-100 px-3 py-1.5 font-body text-sm focus:border-gold-500 outline-none" />
              <span className="text-stone-warm">—</span>
              <input type="time" defaultValue={day === "Sunday" ? "22:00" : "23:00"}
                className="bg-noir-700 border border-cream-100/15 text-cream-100 px-3 py-1.5 font-body text-sm focus:border-gold-500 outline-none" />
            </div>
          ))}
        </div>
      </div>

      {/* Restaurant info */}
      <div className="bg-noir-800 border border-cream-100/5">
        <div className="px-6 py-4 border-b border-cream-100/5">
          <p className="font-body text-[0.65rem] uppercase tracking-[0.18em] text-cream-200">Restaurant Information</p>
        </div>
        <div className="p-6 space-y-4">
          {[
            { label: "Restaurant Name", value: "Major Chow Restaurant" },
            { label: "Phone Number", value: "+234 000 000 0000" },
            { label: "Email Address", value: "hello@majorchow.com" },
            { label: "Address", value: "Your City, Nigeria" },
          ].map((field) => (
            <label key={field.label} className="flex flex-col gap-1.5">
              <span className="overline text-[0.55rem]">{field.label}</span>
              <input type="text" defaultValue={field.value}
                className="bg-noir-700 border border-cream-100/15 text-cream-100 px-4 py-2.5 font-body text-sm focus:border-gold-500 outline-none" />
            </label>
          ))}
        </div>
      </div>

      {/* User roles */}
      <div className="bg-noir-800 border border-cream-100/5">
        <div className="px-6 py-4 border-b border-cream-100/5">
          <p className="font-body text-[0.65rem] uppercase tracking-[0.18em] text-cream-200">Staff Roles</p>
        </div>
        <div className="p-6">
          <div className="space-y-3 mb-5">
            {[
              { name: "Owner / Super Admin", role: "super-admin", perms: "Full access" },
              { name: "Manager", role: "manager", perms: "Orders, reservations, menu, reports" },
              { name: "Kitchen Staff", role: "kitchen", perms: "Orders only" },
              { name: "Front of House", role: "front-of-house", perms: "Orders & reservations" },
              { name: "Content Editor", role: "content-editor", perms: "Menu content & CMS" },
            ].map((user) => (
              <div key={user.role} className="flex items-center justify-between py-2 border-b border-cream-100/5">
                <div>
                  <p className="font-body text-sm text-cream-100">{user.name}</p>
                  <p className="font-body text-xs text-stone-warm">{user.perms}</p>
                </div>
                <span className="font-body text-[0.58rem] border border-gold-500/30 text-gold-600 px-2 py-0.5 uppercase tracking-wide">{user.role}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button onClick={saveSettings}
        className="font-body text-[0.7rem] uppercase tracking-[0.22em] px-10 py-4 bg-gold-500 text-noir-900 hover:bg-gold-400 transition-all duration-300 font-medium flex items-center gap-2">
        <Save size={14} /> Save All Settings
      </button>
    </div>
  );
}

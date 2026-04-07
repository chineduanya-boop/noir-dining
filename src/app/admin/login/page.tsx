"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (password.length !== 6) {
      setError("Password must be 6 characters");
      return;
    }
    setLoading(true);
    setError("");

    const res = await fetch("/api/admin-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push("/admin");
      router.refresh();
    } else {
      setError("Incorrect password. Try again.");
      setPassword("");
      setLoading(false);
      inputRef.current?.focus();
    }
  }

  return (
    <div className="min-h-screen bg-noir-950 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-10">
          <p className="font-display text-2xl font-light tracking-[0.15em] text-cream-100">MAJOR CHOW</p>
          <p className="font-body text-[0.55rem] tracking-[0.3em] text-gold-600 uppercase mt-1">Admin Portal</p>
        </div>

        {/* Card */}
        <div className="bg-noir-900 border border-gold-700/15 p-8">
          <div className="flex items-center justify-center w-10 h-10 bg-gold-500/10 border border-gold-500/20 mx-auto mb-6">
            <Lock size={16} strokeWidth={1.5} className="text-gold-500" />
          </div>

          <p className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-stone-light text-center mb-6">
            Enter Access Password
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              ref={inputRef}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value.slice(0, 6))}
              maxLength={6}
              placeholder="● ● ● ● ● ●"
              autoFocus
              className="w-full bg-noir-950 border border-cream-100/10 focus:border-gold-500/40 outline-none px-4 py-3 font-body text-cream-100 text-center tracking-[0.5em] text-lg placeholder:text-stone-warm/30 placeholder:tracking-[0.3em] transition-colors"
            />

            {error && (
              <p className="font-body text-[0.62rem] text-red-400 text-center">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading || password.length !== 6}
              className="w-full bg-gold-500/10 border border-gold-500/30 hover:bg-gold-500/20 hover:border-gold-500/50 disabled:opacity-40 disabled:cursor-not-allowed text-gold-400 font-body text-[0.62rem] uppercase tracking-[0.2em] py-3 transition-all duration-200"
            >
              {loading ? "Verifying…" : "Enter"}
            </button>
          </form>
        </div>

        <p className="text-center font-body text-[0.55rem] text-stone-warm/40 mt-6 tracking-[0.1em]">
          Restricted access — Major Chow staff only
        </p>
      </div>
    </div>
  );
}

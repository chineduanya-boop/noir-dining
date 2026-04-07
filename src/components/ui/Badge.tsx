import type { DietaryTag } from "@/types";

const tagConfig: Record<DietaryTag, { label: string; color: string }> = {
  vegetarian: { label: "V", color: "border-green-600/40 text-green-400 bg-green-900/20" },
  vegan: { label: "Ve", color: "border-green-500/40 text-green-300 bg-green-900/15" },
  "gluten-free": { label: "GF", color: "border-amber-600/40 text-amber-400 bg-amber-900/20" },
  halal: { label: "H", color: "border-blue-600/40 text-blue-400 bg-blue-900/20" },
  "dairy-free": { label: "DF", color: "border-purple-600/40 text-purple-400 bg-purple-900/20" },
  "nut-free": { label: "NF", color: "border-orange-600/40 text-orange-400 bg-orange-900/20" },
  spicy: { label: "🌶", color: "border-red-600/40 text-red-400 bg-red-900/20" },
};

interface DietaryBadgeProps {
  tag: DietaryTag;
  showFull?: boolean;
}

export function DietaryBadge({ tag, showFull }: DietaryBadgeProps) {
  const config = tagConfig[tag];
  return (
    <span
      className={`inline-flex items-center border px-1.5 py-0.5 text-[0.6rem] font-body font-medium uppercase tracking-wide rounded-sm ${config.color}`}
    >
      {showFull ? tag : config.label}
    </span>
  );
}

interface StatusBadgeProps {
  status: string;
}

const statusConfig: Record<string, string> = {
  received: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  accepted: "bg-indigo-500/15 text-indigo-300 border-indigo-500/30",
  preparing: "bg-amber-500/15 text-amber-300 border-amber-500/30",
  "out-for-delivery": "bg-orange-500/15 text-orange-300 border-orange-500/30",
  "ready-for-pickup": "bg-green-500/15 text-green-300 border-green-500/30",
  completed: "bg-green-700/15 text-green-400 border-green-700/30",
  cancelled: "bg-red-500/15 text-red-400 border-red-500/30",
  pending: "bg-yellow-500/15 text-yellow-300 border-yellow-500/30",
  confirmed: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  "no-show": "bg-gray-500/15 text-gray-400 border-gray-500/30",
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const colors = statusConfig[status] || "bg-gray-500/15 text-gray-400 border-gray-500/30";
  const label = status.replace(/-/g, " ");
  return (
    <span
      className={`inline-flex items-center border px-2.5 py-1 text-[0.62rem] font-body font-medium uppercase tracking-widest rounded-sm ${colors}`}
    >
      {label}
    </span>
  );
}

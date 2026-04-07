"use client";

import { forwardRef } from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost" | "outline" | "danger";
type Size = "sm" | "md" | "lg" | "xl";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  href?: string;
  external?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gold-500 text-noir-900 hover:bg-gold-400 active:bg-gold-600 font-medium tracking-widest border border-gold-500 hover:border-gold-400",
  secondary:
    "bg-transparent text-cream-100 border border-cream-200/30 hover:border-gold-500 hover:text-gold-500 tracking-widest",
  ghost:
    "bg-transparent text-cream-200 hover:text-gold-500 tracking-widest border border-transparent hover:border-transparent",
  outline:
    "bg-transparent text-gold-500 border border-gold-500 hover:bg-gold-500 hover:text-noir-900 tracking-widest",
  danger:
    "bg-transparent text-red-400 border border-red-400/50 hover:bg-red-400/10 tracking-widest",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-5 py-2 text-[0.65rem]",
  md: "px-7 py-3 text-[0.7rem]",
  lg: "px-10 py-4 text-[0.75rem]",
  xl: "px-14 py-5 text-[0.8rem]",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      href,
      external,
      loading,
      icon,
      iconPosition = "right",
      fullWidth,
      className = "",
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center gap-2.5 uppercase font-body transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed relative overflow-hidden group";

    const cls = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${fullWidth ? "w-full" : ""} ${className}`;

    const inner = (
      <>
        {loading && (
          <span className="absolute inset-0 flex items-center justify-center bg-inherit">
            <span className="w-3 h-3 border border-current border-t-transparent rounded-full animate-spin" />
          </span>
        )}
        <span className={`flex items-center gap-2.5 ${loading ? "opacity-0" : ""}`}>
          {icon && iconPosition === "left" && icon}
          {children}
          {icon && iconPosition === "right" && icon}
        </span>
      </>
    );

    if (href && !disabled) {
      return (
        <Link
          href={href}
          className={cls}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
        >
          {inner}
        </Link>
      );
    }

    return (
      <button ref={ref} className={cls} disabled={disabled || loading} {...props}>
        {inner}
      </button>
    );
  }
);

Button.displayName = "Button";

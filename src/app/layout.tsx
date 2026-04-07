import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Major Chow Restaurant — Eat Healthy, Live Healthy",
    template: "%s | Major Chow Restaurant",
  },
  description:
    "Major Chow Restaurant — a premium dining destination serving bold African flavours, shawarma, pizza, and signature drinks. Eat Healthy, Live Healthy.",
  keywords: [
    "Major Chow",
    "Major Chow Restaurant",
    "African restaurant",
    "Nigerian food",
    "shawarma",
    "pizza",
    "jollof rice",
    "reservations",
    "delivery",
    "eat healthy live healthy",
  ],
  openGraph: {
    title: "Major Chow Restaurant — Eat Healthy, Live Healthy",
    description:
      "Bold African flavours, shawarma, pizza & signature drinks. Dine in, takeaway or delivery.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        {/* Google Fonts loaded at runtime — no build-time network required */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Jost:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-[#f5f0e8] antialiased">
        {children}
      </body>
    </html>
  );
}

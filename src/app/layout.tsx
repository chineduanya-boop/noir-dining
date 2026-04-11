import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Crush Cafe — Bar · Restaurant · Fine Dining · Abuja",
    template: "%s | Crush Cafe",
  },
  description:
    "Crush Cafe Abuja — an upscale bar, restaurant and fine dining destination. Stunning outdoor terrace, signature cocktails, world-class cuisine and a vibrant social atmosphere.",
  keywords: [
    "Crush Cafe",
    "Crush Cafe Abuja",
    "bar and restaurant Abuja",
    "fine dining Abuja",
    "outdoor dining Abuja",
    "cocktail bar Abuja",
    "restaurant Abuja",
    "billiards lounge Abuja",
    "private events Abuja",
  ],
  openGraph: {
    title: "Crush Cafe — Bar · Restaurant · Fine Dining · Abuja",
    description:
      "Upscale bar, restaurant & fine dining in Abuja. Outdoor terrace, signature cocktails & unforgettable experiences.",
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

import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { WishlistProvider } from "@/components/providers/wishlist-context";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Travelia — Explore the World with Confidence",
    template: "%s | Travelia",
  },
  description:
    "Discover extraordinary journeys with Travelia. Handcrafted tours to 480+ destinations across 35 countries. Book your next adventure today.",
  keywords: [
    "travel",
    "tours",
    "vacation",
    "holiday",
    "adventure",
    "Travelia",
    "booking",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-surface text-foreground font-sans">
        <WishlistProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </WishlistProvider>
      </body>
    </html>
  );
}
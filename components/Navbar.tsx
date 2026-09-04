"use client";

import Link from "next/link";
import { ShoppingBag, Search } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-serif font-bold text-lg text-[#A03C1B]">
          ROTI MRUYUNG
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-stone-700">
          <Link href="/katalog" className="hover:text-[#A03C1B]">
            Katalog Roti
          </Link>
          <Link href="/pre-order" className="hover:text-[#A03C1B]">
            Pre-Order
          </Link>
          <Link href="/menu-cafe" className="hover:text-[#A03C1B]">
            Menu Cafe
          </Link>
          <Link href="/lokasi" className="hover:text-[#A03C1B]">
            Lokasi Toko
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <button className="text-stone-700 hover:text-[#A03C1B]">
            <Search className="w-4 h-4" />
          </button>

          <Link href="/cart" className="relative p-1">
            <ShoppingBag className="w-5 h-5 text-stone-700 hover:text-[#A03C1B]" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#A03C1B] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-in zoom-in">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}

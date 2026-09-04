"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingBag, Search } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-stone-200/80">
      {/* Announcement Bar */}
      <div className="bg-[#A03C1B] text-white text-[10px] sm:text-xs py-1.5 px-4 text-center font-medium tracking-wide">
        🥖 Roti Fresh Setiap Hari! Order Sebelum Jam 12:00 untuk Ambil Sore Ini
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Tombol Hamburger di Mobile */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-stone-700 hover:text-[#A03C1B] p-2 rounded-md focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Logo Brand (Tengah di Mobile, Kiri di Desktop) */}
          <div className="flex-1 md:flex-none text-center md:text-left">
            <Link href="/" className="inline-block">
              <h1 className="font-serif font-bold text-lg sm:text-2xl text-[#A03C1B] tracking-tight uppercase leading-none">
                Roti Mruyung
              </h1>
              <span className="block text-[8px] sm:text-[10px] text-stone-500 tracking-[0.2em] uppercase font-medium">
                Banyumas
              </span>
            </Link>
          </div>

          {/* Menu Link Desktop */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-stone-700">
            <Link href="/" className="hover:text-[#A03C1B] transition">
              Katalog Roti
            </Link>
            <Link href="/pre-order" className="hover:text-[#A03C1B] transition">
              Pre-Order
            </Link>
            <Link href="/menu-cafe" className="hover:text-[#A03C1B] transition">
              Menu Cafe
            </Link>
            <Link href="/lokasi" className="hover:text-[#A03C1B] transition">
              Lokasi Toko
            </Link>
          </div>

          {/* Ikon Aksi (Search & Cart) */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button
              type="button"
              className="text-stone-600 hover:text-[#A03C1B] p-2"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              type="button"
              className="relative text-stone-600 hover:text-[#A03C1B] p-2"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute top-1 right-1 bg-[#A03C1B] text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Drawer Menu Mobile (Bisa Buka / Tutup) */}
      {isOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-stone-200 px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-stone-800 hover:bg-[#A03C1B]/10 hover:text-[#A03C1B]"
          >
            Katalog Roti
          </Link>
          <Link
            href="/pre-order"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-stone-800 hover:bg-[#A03C1B]/10 hover:text-[#A03C1B]"
          >
            Pre-Order Hampers
          </Link>
          <Link
            href="/menu-cafe"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-stone-800 hover:bg-[#A03C1B]/10 hover:text-[#A03C1B]"
          >
            Menu Cafe
          </Link>
          <Link
            href="/lokasi"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-stone-800 hover:bg-[#A03C1B]/10 hover:text-[#A03C1B]"
          >
            Lokasi Toko
          </Link>
        </div>
      )}
    </header>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingBag, Search } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Katalog Roti", href: "/" },
    { name: "Pre-Order", href: "/pre-order" },
    { name: "Menu Cafe", href: "/menu-cafe" },
    { name: "Lokasi Toko", href: "/lokasi" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-stone-200/80">
      {/* Announcement Bar */}
      <div className="bg-[#A03C1B] text-white text-[10px] sm:text-xs py-1.5 px-4 text-center font-medium tracking-wide">
        🥖 Roti Fresh Setiap Hari! Order Sebelum Jam 12:00 untuk Ambil Sore Ini
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Tombol Hamburger (Mobile) */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-stone-700 hover:text-[#A03C1B] p-2 rounded-md focus:outline-hidden"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Logo Brand */}
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

          {/* Menu Link Desktop dengan Indikator Active */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`py-1 transition relative ${
                    isActive
                      ? "text-[#A03C1B] font-bold border-b-2 border-[#A03C1B]"
                      : "text-stone-700 hover:text-[#A03C1B]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
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

      {/* Drawer Menu Mobile dengan Indikator Active */}
      {isOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-stone-200 px-4 pt-3 pb-6 space-y-2 shadow-lg">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-sm font-semibold transition ${
                  isActive
                    ? "bg-[#A03C1B]/10 text-[#A03C1B] font-bold"
                    : "text-stone-800 hover:bg-stone-100 hover:text-[#A03C1B]"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}

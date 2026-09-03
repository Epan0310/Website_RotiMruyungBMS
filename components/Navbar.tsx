"use client";

import { Search, Clock, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Katalog Roti" },
    { href: "/pre-order", label: "Pre-Order" },
    { href: "/menu-cafe", label: "Menu Cafe" },
    { href: "/lokasi", label: "Lokasi" },
  ];

  return (
    <header className="w-full bg-[#FAF8F5] border-b border-stone-200/60 sticky top-0 z-50">
      {/* Top Banner Terracotta */}
      <div className="bg-[#A03C1B] text-white text-[11px] py-1.5 text-center font-medium tracking-wide">
        🍞 Roti Fresh Setiap Hari! Order Sebelum Jam 12:00 untuk Ambil Sore Ini
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Left Links */}
        <div className="flex items-center gap-5 text-xs font-semibold text-stone-700">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition ${
                  isActive
                    ? "text-[#A03C1B] font-bold border-b-2 border-[#A03C1B] pb-0.5"
                    : "hover:text-[#A03C1B]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Center Brand Logo */}
        <Link href="/" className="text-center group block select-none">
          <h1 className="font-serif text-xl md:text-2xl font-bold tracking-[0.18em] text-[#A03C1B] leading-none group-hover:opacity-90 transition">
            ROTI MRUYUNG
          </h1>
          <p className="text-[10px] tracking-[0.38em] text-stone-400 uppercase font-semibold mt-1">
            BANYUMAS
          </p>
        </Link>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          <div className="flex items-center bg-white border border-stone-200 rounded-md px-2.5 py-1 text-xs">
            <Search className="w-3.5 h-3.5 text-stone-400 mr-1.5" />
            <input
              type="text"
              placeholder="Cari roti..."
              className="bg-transparent text-xs focus:outline-hidden w-24 text-stone-700"
            />
          </div>

          <div className="flex items-center gap-1 text-[11px] text-stone-600 bg-stone-100 px-2.5 py-1 rounded-md border border-stone-200">
            <Clock className="w-3.5 h-3.5 text-[#A03C1B]" />
            <span>
              Ambil: <strong>15:00</strong>
            </span>
          </div>

          <button className="relative flex items-center justify-center p-2 text-[#A03C1B] bg-stone-100 hover:bg-stone-200 rounded-md cursor-pointer">
            <ShoppingBag className="w-4 h-4" />
            <span className="absolute -top-1 -right-1 bg-[#A03C1B] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              1
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingBag, Search } from "lucide-react";
import { useCart } from "@/context/CartContext";

// Data produk asli Roti Mruyung (Katalog Roti, Pre-Order, Menu Cafe)
const PRODUCTS_DATA = [
  {
    id: "1",
    name: "Roti Sisir Mentega Special",
    price: 15000,
    category: "Katalog Roti",
    href: "/",
  },
  {
    id: "2",
    name: "Roti Gambang Heritage",
    price: 18000,
    category: "Katalog Roti",
    href: "/",
  },
  {
    id: "3",
    name: "Roti Pisang Keju Super",
    price: 16000,
    category: "Katalog Roti",
    href: "/",
  },
  {
    id: "4",
    name: "Roti Sobek Cokelat Keju",
    price: 25000,
    category: "Katalog Roti",
    href: "/",
  },
  {
    id: "5",
    name: "Roti Daging Smoked Beef (Pack)",
    price: 45000,
    category: "Pre-Order",
    href: "/pre-order",
  },
  {
    id: "6",
    name: "Paket Box Hantaran Roti",
    price: 85000,
    category: "Pre-Order",
    href: "/pre-order",
  },
  {
    id: "7",
    name: "Kopi Susu Mruyung Gula Aren",
    price: 22000,
    category: "Menu Cafe",
    href: "/menu-cafe",
  },
  {
    id: "8",
    name: "Es Cokelat Mruyung",
    price: 20000,
    category: "Menu Cafe",
    href: "/menu-cafe",
  },
  {
    id: "9",
    name: "Americano Ice / Hot",
    price: 18000,
    category: "Menu Cafe",
    href: "/menu-cafe",
  },
  {
    id: "10",
    name: "Matcha Latte Ice",
    price: 24000,
    category: "Menu Cafe",
    href: "/menu-cafe",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const pathname = usePathname();
  const { totalItems } = useCart();

  const navItems = [
    { name: "Katalog Roti", href: "/" },
    { name: "Pre-Order", href: "/pre-order" },
    { name: "Menu Cafe", href: "/menu-cafe" },
    { name: "Lokasi Toko", href: "/lokasi" },
  ];

  // Filter produk berdasarkan kata kunci pencarian
  const searchResults =
    searchQuery.trim() === ""
      ? []
      : PRODUCTS_DATA.filter(
          (item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.category.toLowerCase().includes(searchQuery.toLowerCase()),
        );

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

          {/* Menu Link Desktop */}
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
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Tombol Search */}
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              className="text-stone-600 hover:text-[#A03C1B] p-2 cursor-pointer transition"
              aria-label="Cari"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Tombol Keranjang */}
            <Link
              href="/cart"
              className="relative p-2 text-stone-700 hover:text-[#A03C1B] transition flex items-center justify-center cursor-pointer"
              aria-label="Keranjang Belanja"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute top-0.5 right-0.5 bg-[#631B00] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-[#FAF8F5] animate-in zoom-in-50">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>

      {/* Drawer Menu Mobile */}
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

      {/* MODAL SEARCH POPUP */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-start justify-center pt-20 px-4">
          <div className="bg-[#FAF8F5] w-full max-w-xl rounded-2xl shadow-2xl border border-stone-200 overflow-hidden animate-in fade-in slide-in-from-top-4 duration-200">
            {/* Input Header */}
            <div className="p-4 border-b border-stone-200 flex items-center gap-3 bg-white">
              <Search className="w-5 h-5 text-stone-400 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari roti, kopi, atau menu kesukaanmu..."
                className="w-full bg-transparent text-sm text-stone-800 placeholder-stone-400 focus:outline-none"
                autoFocus
              />
              <button
                onClick={() => {
                  setIsSearchOpen(false);
                  setSearchQuery("");
                }}
                className="p-1 text-stone-400 hover:text-stone-700 rounded-lg cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Hasil Pencarian */}
            <div className="max-h-80 overflow-y-auto p-4">
              {searchQuery.trim() === "" ? (
                <div className="text-center py-6 text-stone-400 text-xs">
                  Ketik nama makanan atau minuman untuk mencari.
                </div>
              ) : searchResults.length > 0 ? (
                <div className="space-y-2">
                  <p className="text-[10px] uppercase font-bold text-stone-400 tracking-wider mb-2">
                    Hasil Pencarian ({searchResults.length})
                  </p>
                  {searchResults.map((product) => (
                    <Link
                      key={product.id}
                      href={product.href}
                      onClick={() => {
                        setIsSearchOpen(false);
                        setSearchQuery("");
                      }}
                      className="flex items-center justify-between p-3 rounded-xl bg-white hover:bg-[#A03C1B]/5 border border-stone-100 transition group"
                    >
                      <div>
                        <h4 className="text-sm font-semibold text-stone-800 group-hover:text-[#A03C1B]">
                          {product.name}
                        </h4>
                        <span className="text-[10px] text-stone-400">
                          {product.category}
                        </span>
                      </div>
                      <span className="text-xs font-bold text-[#A03C1B]">
                        Rp {product.price.toLocaleString("id-ID")}
                      </span>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-stone-500 text-xs">
                  Produk{" "}
                  <span className="font-bold">&quot;{searchQuery}&quot;</span>{" "}
                  tidak ditemukan.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

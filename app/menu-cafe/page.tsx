"use client";

import { useState } from "react";
import {
  Plus,
  Minus,
  ShoppingBag,
  MapPin,
  ChevronRight,
  CheckCircle2,
  X,
} from "lucide-react";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  badge?: string;
}

export default function MenuCafePage() {
  const [selectedCategory, setSelectedCategory] =
    useState<string>("Semua Menu");
  const [cart, setCart] = useState<{ [key: string]: number }>({});
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const categories = [
    "Semua Menu",
    "Kopi Mruyung",
    "Non-Kopi & Mendoan",
    "Makanan Berat",
    "Dessert",
  ];

  const menuItems: MenuItem[] = [
    {
      id: "menu-1",
      name: "Kopi Susu Mruyung",
      description:
        "Signature house blend espresso with creamy milk and a hint of palm sugar.",
      price: 18000,
      category: "Kopi Mruyung",
      image: "/images/cafe-1.jpg",
    },
    {
      id: "menu-2",
      name: "Nasi Goreng Mruyung",
      description:
        "Classic fried rice with our secret family spice blend, served with sunny egg & crackers.",
      price: 25000,
      category: "Makanan Berat",
      image: "/images/cafe-2.jpg",
    },
    {
      id: "menu-3",
      name: "Mendoan Banyumas Warm",
      description:
        "Authentic half-cooked battered tempeh, served warm with spicy sweet soy sauce.",
      price: 15000,
      category: "Non-Kopi & Mendoan",
      image: "/images/cafe-3.jpg",
      badge: "HOT",
    },
    {
      id: "menu-4",
      name: "Matcha Mruyung Latte",
      description:
        "Premium Japanese ceremonial grade matcha blended with silky steamed milk.",
      price: 22000,
      category: "Non-Kopi & Mendoan",
      image: "/images/cafe-4.jpg",
    },
    {
      id: "menu-5",
      name: "Ayam Bakar Rempah Mruyung",
      description:
        "Slow-cooked spiced grilled chicken served with warm fragrant rice and fresh sambal.",
      price: 32000,
      category: "Makanan Berat",
      image: "/images/cafe-5.jpg",
    },
    {
      id: "menu-6",
      name: "Heritage Klepon Cake",
      description:
        "Soft pandan sponge layered with palm sugar and fresh coconut flakes.",
      price: 20000,
      category: "Dessert",
      image: "/images/cafe-6.jpg",
    },
  ];

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const updateQuantity = (id: string, delta: number, name: string) => {
    setCart((prev) => {
      const current = prev[id] || 0;
      const next = current + delta;

      if (next <= 0) {
        const copy = { ...prev };
        delete copy[id];
        showToast(`"${name}" dihapus dari daftar`);
        return copy;
      }

      if (delta > 0 && current === 0) {
        showToast(`"${name}" ditambahkan`);
      }

      return { ...prev, [id]: next };
    });
  };

  // Logic filter: Tampilkan semua jika "Semua Menu", selain itu filter sesuai kategori
  const filteredItems =
    selectedCategory === "Semua Menu"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);
  const totalPrice = menuItems.reduce(
    (sum, item) => sum + (cart[item.id] || 0) * item.price,
    0,
  );

  return (
    <main className="min-h-screen bg-[#FAF8F5] pb-28 relative">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 bg-stone-900 text-white text-xs px-4 py-3 rounded-lg shadow-xl flex items-center gap-2 animate-in fade-in slide-in-from-top-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="ml-2 text-stone-400 hover:text-white"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {/* Dine-In Header Banner */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 bg-stone-200/60 border border-stone-300/70 text-stone-700 text-[10px] sm:text-xs font-semibold px-4 py-1.5 rounded-full tracking-wider uppercase">
            <MapPin className="w-3.5 h-3.5 text-[#A03C1B]" />
            AREA RESTO & CAFE MRUYUNG — SCAN & ORDER MENU
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#631B00] tracking-tight">
            Dine-In Menu
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
            Experience the warmth of our heritage bakery alongside crafted
            beverages and hearty meals.
          </p>
        </div>

        {/* Content Layout: Categories & Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          {/* Categories Filter */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-stone-200/80 p-5 shadow-2xs sticky top-24">
              <h3 className="font-serif font-bold text-lg text-[#631B00] mb-4 pb-2 border-b border-stone-100">
                Categories
              </h3>

              <div className="flex lg:flex-col overflow-x-auto gap-2 pb-2 lg:pb-0 scrollbar-none">
                {categories.map((cat) => {
                  const isActive = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedCategory(cat)}
                      className={`whitespace-nowrap w-full text-left px-4 py-3 rounded-xl text-xs sm:text-sm font-medium transition cursor-pointer flex items-center justify-between ${
                        isActive
                          ? "bg-[#631B00] text-white shadow-xs font-semibold"
                          : "bg-stone-50 lg:bg-transparent text-stone-700 hover:bg-stone-100"
                      }`}
                    >
                      <span>{cat}</span>
                      <ChevronRight
                        className={`hidden lg:block w-4 h-4 ${isActive ? "text-white" : "text-stone-400"}`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Product Items Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredItems.map((item) => {
                const qty = cart[item.id] || 0;

                return (
                  <div
                    key={item.id}
                    className={`bg-white rounded-2xl border overflow-hidden transition duration-200 flex flex-col justify-between ${
                      qty > 0
                        ? "border-[#631B00] ring-1 ring-[#631B00]/30 shadow-md"
                        : "border-stone-200/80 shadow-2xs hover:shadow-md"
                    }`}
                  >
                    <div className="relative w-full aspect-[4/3] bg-stone-100 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                      {item.badge && (
                        <span className="absolute top-3 left-3 bg-[#631B00] text-white text-[9px] font-bold px-2 py-0.5 rounded-xs tracking-wider uppercase shadow-2xs">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="font-serif font-bold text-base text-stone-900 mb-1 line-clamp-1">
                          {item.name}
                        </h4>
                        <p className="text-xs text-stone-500 leading-relaxed line-clamp-2 mb-4">
                          {item.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-stone-100">
                        <span className="text-xs sm:text-sm font-bold text-stone-900">
                          Rp {item.price.toLocaleString("id-ID")}
                        </span>

                        {qty === 0 ? (
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.id, 1, item.name)
                            }
                            className="w-8 h-8 bg-stone-100 hover:bg-[#631B00] hover:text-white text-stone-800 rounded-lg flex items-center justify-center transition cursor-pointer active:scale-95"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        ) : (
                          <div className="flex items-center gap-2 bg-stone-100 p-1 rounded-lg border border-stone-200">
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(item.id, -1, item.name)
                              }
                              className="w-6 h-6 bg-white hover:bg-stone-200 text-stone-800 rounded flex items-center justify-center transition cursor-pointer"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-bold text-stone-900 px-1">
                              {qty}
                            </span>
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(item.id, 1, item.name)
                              }
                              className="w-6 h-6 bg-[#631B00] text-white rounded flex items-center justify-center transition cursor-pointer hover:bg-[#4d1500]"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Bottom Bar Order */}
      {totalItems > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-stone-200 p-4 shadow-2xl z-40 animate-in slide-in-from-bottom-5">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-2 sm:px-6">
            <div className="flex items-center gap-3">
              <div className="relative bg-[#631B00]/10 p-2.5 rounded-xl">
                <ShoppingBag className="w-5 h-5 text-[#631B00]" />
                <span className="absolute -top-1 -right-1 bg-[#631B00] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              </div>
              <div>
                <p className="text-[11px] text-stone-500 font-medium">
                  Order Dine-In
                </p>
                <p className="font-serif font-bold text-base sm:text-lg text-stone-900">
                  Total:{" "}
                  <span className="text-[#631B00]">
                    Rp {totalPrice.toLocaleString("id-ID")}
                  </span>
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => showToast("Pesanan berhasil dikirim ke kasir!")}
              className="bg-[#631B00] hover:bg-[#4d1500] text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-xl transition shadow-md active:scale-95 cursor-pointer"
            >
              Pesan Sekarang →
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

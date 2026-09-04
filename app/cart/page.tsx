"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ArrowRight,
  ArrowLeft,
  MessageSquare,
  Sparkles,
} from "lucide-react";

interface CartItem {
  id: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
  image: string;
  note?: string;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "roti-1",
      name: "Roti Sisir Klasik",
      category: "Katalog Roti",
      price: 24000,
      quantity: 2,
      image: "/images/roti-1.png",
      note: "Minta dihangatkan sebentar",
    },
    {
      id: "menu-1",
      name: "Kopi Susu Gula Aren",
      category: "Menu Cafe",
      price: 25000,
      quantity: 2,
      image: "/images/cafe-1.png",
      note: "Less ice, normal sugar",
    },
  ]);

  const [notes, setNotes] = useState<{ [key: string]: string }>({
    "roti-1": "Minta dihangatkan sebentar",
    "menu-1": "Less ice, normal sugar",
  });

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(
      (prev) =>
        prev
          .map((item) => {
            if (item.id === id) {
              const newQty = item.quantity + delta;
              return newQty > 0 ? { ...item, quantity: newQty } : null;
            }
            return item;
          })
          .filter(Boolean) as CartItem[],
    );
  };

  const removeItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleNoteChange = (id: string, val: string) => {
    setNotes((prev) => ({ ...prev, [id]: val }));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const serviceFee = cartItems.length > 0 ? 2000 : 0;
  const totalPrice = subtotal + serviceFee;

  return (
    <main className="min-h-screen bg-[#FAF8F5] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header Section */}
        <div className="flex items-center justify-between pb-4 border-b border-stone-200/80">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-[#631B00]/10 rounded-xl text-[#631B00]">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-serif font-bold text-2xl sm:text-3xl text-[#631B00]">
                Keranjang Belanja
              </h1>
              <p className="text-xs text-stone-500">
                Periksa kembali item pilihanmu sebelum lanjut ke pembayaran.
              </p>
            </div>
          </div>

          <Link
            href="/menu-cafe"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-600 hover:text-[#631B00] transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Tambah Item Lain</span>
          </Link>
        </div>

        {cartItems.length === 0 ? (
          /* Empty Cart State */
          <div className="bg-white rounded-3xl border border-stone-200/80 p-12 text-center space-y-4 max-w-md mx-auto my-12">
            <div className="w-16 h-16 bg-stone-100 text-stone-400 rounded-full flex items-center justify-center mx-auto">
              <ShoppingBag className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-stone-900">
                Keranjangmu Masih Kosong
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Yuk, pilih roti lezat atau minuman segar kesukaanmu dulu!
              </p>
            </div>
            <Link
              href="/menu-cafe"
              className="inline-block bg-[#631B00] text-white text-xs font-bold px-6 py-3 rounded-xl hover:bg-[#4d1500] transition"
            >
              Lihat Menu Cafe
            </Link>
          </div>
        ) : (
          /* Cart Content Layout */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Item List (7 Cols) */}
            <div className="lg:col-span-7 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-stone-200/80 p-4 sm:p-5 shadow-2xs space-y-4"
                >
                  <div className="flex gap-4 items-center">
                    {/* Image Mockup */}
                    <div className="w-20 h-20 bg-stone-100 rounded-xl overflow-hidden shrink-0 border border-stone-200/60">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">
                        {item.category}
                      </span>
                      <h3 className="font-serif font-bold text-base text-stone-900 truncate">
                        {item.name}
                      </h3>
                      <p className="text-xs font-bold text-[#631B00] mt-0.5">
                        Rp {item.price.toLocaleString("id-ID")}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1.5 bg-stone-100 p-1 rounded-xl border border-stone-200">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-7 h-7 bg-white hover:bg-stone-200 text-stone-800 rounded-lg flex items-center justify-center transition cursor-pointer"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-xs font-bold text-stone-900 px-1.5">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-7 h-7 bg-[#631B00] text-white rounded-lg flex items-center justify-center transition cursor-pointer hover:bg-[#4d1500]"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="p-2 text-stone-400 hover:text-red-600 transition cursor-pointer"
                        title="Hapus Item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Note Input */}
                  <div className="pt-3 border-t border-stone-100 flex items-center gap-2">
                    <MessageSquare className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                    <input
                      type="text"
                      placeholder="Tambah catatan pesanan (opsional)..."
                      value={notes[item.id] || ""}
                      onChange={(e) =>
                        handleNoteChange(item.id, e.target.value)
                      }
                      className="w-full text-xs text-stone-700 placeholder-stone-400 bg-stone-50 border border-stone-200/80 rounded-lg px-3 py-1.5 focus:outline-none focus:border-[#631B00]"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Summary Card (5 Cols) */}
            <div className="lg:col-span-5 bg-white rounded-3xl border border-stone-200/80 p-6 shadow-2xs space-y-6 sticky top-24">
              <h2 className="font-serif font-bold text-xl text-[#631B00] pb-3 border-b border-stone-100 flex items-center justify-between">
                <span>Rincian Keranjang</span>
                <Sparkles className="w-4 h-4 text-[#631B00]" />
              </h2>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between text-stone-600">
                  <span>
                    Subtotal ({cartItems.reduce((a, b) => a + b.quantity, 0)}{" "}
                    item)
                  </span>
                  <span className="font-semibold text-stone-900">
                    Rp {subtotal.toLocaleString("id-ID")}
                  </span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Estimasi Biaya Layanan</span>
                  <span className="font-semibold text-stone-900">
                    Rp {serviceFee.toLocaleString("id-ID")}
                  </span>
                </div>
              </div>

              <div className="border-t border-stone-200 pt-4 flex items-center justify-between">
                <span className="font-serif text-lg font-bold text-stone-900">
                  Total Harga
                </span>
                <span className="font-serif text-2xl font-bold text-[#631B00]">
                  Rp {totalPrice.toLocaleString("id-ID")}
                </span>
              </div>

              {/* Navigation to Checkout */}
              <Link
                href="/checkout"
                className="w-full bg-[#631B00] hover:bg-[#4d1500] text-white text-xs sm:text-sm font-bold py-4 px-4 rounded-xl transition shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <span>Lanjut ke Pengisian Pemesanan</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <p className="text-[11px] text-stone-400 text-center">
                Metode pengiriman dan waktu pengambilan diatur di halaman
                berikutnya.
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

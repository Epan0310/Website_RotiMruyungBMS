"use client";

import Link from "next/link";
import { ShoppingBag, Plus, Minus, Trash2, ArrowLeft } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, totalPrice, totalItems } =
    useCart();

  if (totalItems === 0) {
    return (
      <main className="min-h-screen bg-[#FAF8F5] py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="bg-stone-200/60 p-2.5 rounded-xl">
                <ShoppingBag className="w-6 h-6 text-stone-700" />
              </div>
              <div>
                <h1 className="font-serif text-2xl font-bold text-stone-900">
                  Keranjang Belanja
                </h1>
                <p className="text-xs text-stone-500">
                  Periksa kembali item pilihanmu sebelum lanjut ke pembayaran.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-stone-200/80 p-12 text-center max-w-lg mx-auto shadow-2xs">
            <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingBag className="w-8 h-8 text-stone-400" />
            </div>
            <h2 className="font-serif text-lg font-bold text-stone-800 mb-1">
              Keranjangmu Masih Kosong
            </h2>
            <p className="text-xs text-stone-500 mb-6">
              Yuk, pilih roti lezat atau minuman segar kesukaanmu dulu!
            </p>
            <Link
              href="/menu-cafe"
              className="inline-block bg-[#A03C1B] hover:bg-[#853014] text-white text-xs font-bold px-6 py-3 rounded-xl transition shadow-xs"
            >
              Lihat Menu Cafe
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FAF8F5] py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="bg-[#A03C1B]/10 p-2.5 rounded-xl">
              <ShoppingBag className="w-6 h-6 text-[#A03C1B]" />
            </div>
            <div>
              <h1 className="font-serif text-2xl font-bold text-stone-900">
                Keranjang Belanja
              </h1>
              <p className="text-xs text-stone-500">
                Periksa kembali item pilihanmu sebelum lanjut ke pembayaran.
              </p>
            </div>
          </div>
          <Link
            href="/menu-cafe"
            className="text-xs font-medium text-stone-600 hover:text-[#A03C1B] flex items-center gap-1"
          >
            <ArrowLeft className="w-4 h-4" />
            Tambah Item Lain
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-stone-200/80 p-4 flex items-center gap-4 shadow-2xs"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg bg-stone-100 shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif font-bold text-sm text-stone-800 truncate">
                    {item.name}
                  </h3>
                  {item.category && (
                    <p className="text-[10px] text-stone-400">
                      {item.category}
                    </p>
                  )}
                  <p className="text-xs font-bold text-[#A03C1B] mt-1">
                    Rp {item.price.toLocaleString("id-ID")}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 bg-stone-100 p-1 rounded-lg border border-stone-200">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="w-6 h-6 bg-white rounded text-stone-800 flex items-center justify-center hover:bg-stone-200 transition"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-xs font-bold px-1">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-6 h-6 bg-[#A03C1B] text-white rounded flex items-center justify-center hover:bg-[#853014] transition"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-stone-400 hover:text-red-500 transition p-1"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl border border-stone-200/80 p-6 shadow-2xs h-fit space-y-4">
            <h3 className="font-serif font-bold text-base text-stone-800 border-b border-stone-100 pb-3">
              Ringkasan Belanja
            </h3>
            <div className="flex justify-between text-xs text-stone-600">
              <span>Total Items</span>
              <span className="font-semibold">{totalItems} item</span>
            </div>
            <div className="flex justify-between text-sm font-bold text-stone-900 border-t border-stone-100 pt-3">
              <span>Total Harga</span>
              <span className="text-[#A03C1B]">
                Rp {totalPrice.toLocaleString("id-ID")}
              </span>
            </div>
            <Link
              href="/checkout"
              className="block text-center w-full bg-[#A03C1B] hover:bg-[#853014] text-white text-xs font-bold py-3 rounded-xl transition shadow-xs mt-4"
            >
              Lanjut ke Pembayaran
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

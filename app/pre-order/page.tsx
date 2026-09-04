"use client";

import { useState } from "react";
import { Plus, Minus, ShoppingBag, CheckCircle2, X } from "lucide-react";

export default function PreOrderPage() {
  const [pickupDate, setPickupDate] = useState("2026-09-06");
  const [pickupTime, setPickupTime] = useState<"pagi" | "sore">("pagi");
  const [greetingCard, setGreetingCard] = useState("");

  // State Interaktif
  const [cart, setCart] = useState<{ [key: string]: number }>({});
  const [isScheduleSaved, setIsScheduleSaved] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const hampersList = [
    {
      id: "hampers-1",
      name: "Paket Warisan Mruyung",
      description:
        "Kombinasi sourdough klasik, baguette pedesaan, dan selai artisan pilihan.",
      price: 250000,
      image: "/images/roti-4.png",
      badge: "BEST SELLER",
      badgeBg: "bg-[#A03C1B]",
    },
    {
      id: "hampers-2",
      name: "Pagi di Banyumas",
      description:
        "Koleksi pastry sarapan premium kami. Termasuk croissant butter dan danish buah.",
      price: 165000,
      image: "/images/roti-2.png",
      badge: null,
      badgeBg: "",
    },
    {
      id: "hampers-3",
      name: "Hampers Rempah",
      description:
        "Pilihan kue kering artisan dan roti manis dengan aroma rempah otentik.",
      price: 320000,
      image: "/images/roti-3.png",
      badge: "MUSIMAN",
      badgeBg: "bg-amber-700",
    },
    {
      id: "hampers-4",
      name: "Paket Manis Mruyung",
      description:
        "Aneka roti manis lembut dengan isian cokelat, keju, dan selai rumahan.",
      price: 180000,
      image: "/images/roti-1.png",
      badge: "FAVORIT",
      badgeBg: "bg-emerald-700",
    },
    {
      id: "hampers-5",
      name: "Hampers Spesial Edisi Cafe",
      description:
        "Perpaduan kue pastry renyah dan biji kopi pilihan khas Banyumas.",
      price: 275000,
      image: "/images/roti-5.png",
      badge: null,
      badgeBg: "",
    },
    {
      id: "hampers-6",
      name: "Paket Artisan Sourdough",
      description:
        "Roti ragi alami fermentasi panjang, sehat, renyah di luar dan lembut di dalam.",
      price: 210000,
      image: "/images/roti-6.png",
      badge: "SEHAT",
      badgeBg: "bg-stone-700",
    },
    {
      id: "hampers-7",
      name: "Hampers Keluarga Besar",
      description:
        "Porsi lengkap isi 12 varian roti terbaik Mruyung untuk acara keluarga.",
      price: 450000,
      image: "/images/roti-7.png",
      badge: "HEMAT",
      badgeBg: "bg-[#A03C1B]",
    },
  ];

  // Helper Toast Popup
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Handler Tambah/Kurang Cart
  const updateQuantity = (id: string, delta: number, name: string) => {
    setCart((prev) => {
      const currentQty = prev[id] || 0;
      const newQty = currentQty + delta;

      if (newQty <= 0) {
        const updatedCart = { ...prev };
        delete updatedCart[id];
        showToast(`"${name}" dihapus dari daftar`);
        return updatedCart;
      }

      if (delta > 0 && currentQty === 0) {
        showToast(`"${name}" ditambahkan ke pesanan`);
      }

      return { ...prev, [id]: newQty };
    });
  };

  // Hitung Total Produk & Harga
  const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  const totalPrice = hampersList.reduce((sum, item) => {
    return sum + (cart[item.id] || 0) * item.price;
  }, 0);

  const handleApplySchedule = (e: React.FormEvent) => {
    e.preventDefault();
    setIsScheduleSaved(true);
    showToast("Jadwal & kartu ucapan berhasil disimpan!");
  };

  return (
    <main className="min-h-screen bg-[#FAF8F5] pb-28 relative">
      {/* Toast Notification Floating */}
      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 bg-stone-900 text-white text-xs px-4 py-3 rounded-lg shadow-xl flex items-center gap-2 animate-in fade-in slide-in-from-top-3">
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

      {/* Hero Banner Header */}
      <section className="relative w-full h-[280px] sm:h-[320px] md:h-[380px] flex items-center justify-center text-center px-4 sm:px-6 overflow-hidden border-b border-stone-200/50">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-85"
          style={{ backgroundImage: `url('/images/hero-bg.png')` }}
        />
        <div className="absolute inset-0 bg-[#FAF8F5]/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-stone-100/10 to-[#FAF8F5]" />

        <div className="relative z-10 max-w-2xl mx-auto space-y-2 sm:space-y-3">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-[#A03C1B] leading-tight">
            Pre-Order Hampers & Paket Oleh-oleh
          </h2>
          <p className="text-stone-800 text-xs md:text-sm font-medium leading-relaxed max-w-xl mx-auto">
            Pesan bingkisan spesial untuk momen berharga Anda. Dirakit dengan
            tangan, dipanggang dengan cinta, siap disajikan segar di hari
            pilihan Anda.
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Left Column: Form Pengaturan Pre-Order */}
          <div className="lg:col-span-1">
            <form
              onSubmit={handleApplySchedule}
              className="bg-white rounded-xl border border-stone-200/80 p-4 sm:p-5 shadow-2xs sticky top-20"
            >
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-stone-100">
                <h3 className="font-serif text-base font-bold text-[#A03C1B]">
                  Pengaturan Pre-Order
                </h3>
                {isScheduleSaved && (
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-semibold">
                    Tersimpan
                  </span>
                )}
              </div>

              <div className="space-y-4 text-xs">
                {/* Tanggal Pengambilan */}
                <div>
                  <label className="block text-stone-600 font-medium mb-1.5">
                    Pilih Tanggal Pengambilan
                  </label>
                  <input
                    type="date"
                    value={pickupDate}
                    onChange={(e) => {
                      setPickupDate(e.target.value);
                      setIsScheduleSaved(false);
                    }}
                    className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-stone-700 focus:outline-hidden focus:border-[#A03C1B]"
                  />
                  <p className="text-[10px] text-stone-400 mt-1">
                    *Min. pemesanan H-2 sebelum hari H
                  </p>
                </div>

                {/* Waktu Pengambilan */}
                <div>
                  <label className="block text-stone-600 font-medium mb-1.5">
                    Waktu Pengambilan
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setPickupTime("pagi");
                        setIsScheduleSaved(false);
                      }}
                      className={`py-2 px-2 rounded-lg border text-[11px] font-medium transition cursor-pointer ${
                        pickupTime === "pagi"
                          ? "border-[#A03C1B] bg-[#A03C1B]/10 text-[#A03C1B] font-bold"
                          : "border-stone-200 bg-stone-50 text-stone-600 hover:bg-stone-100"
                      }`}
                    >
                      Pagi (08:00 - 12:00)
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setPickupTime("sore");
                        setIsScheduleSaved(false);
                      }}
                      className={`py-2 px-2 rounded-lg border text-[11px] font-medium transition cursor-pointer ${
                        pickupTime === "sore"
                          ? "border-[#A03C1B] bg-[#A03C1B]/10 text-[#A03C1B] font-bold"
                          : "border-stone-200 bg-stone-50 text-stone-600 hover:bg-stone-100"
                      }`}
                    >
                      Sore (15:00 - 18:00)
                    </button>
                  </div>
                </div>

                {/* Pesan Kartu Ucapan */}
                <div>
                  <label className="block text-stone-600 font-medium mb-1.5">
                    Pesan Kartu Ucapan (Opsional)
                  </label>
                  <textarea
                    rows={3}
                    value={greetingCard}
                    onChange={(e) => {
                      setGreetingCard(e.target.value);
                      setIsScheduleSaved(false);
                    }}
                    placeholder="Tulis pesan hangat Anda di sini..."
                    className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-stone-700 focus:outline-hidden focus:border-[#A03C1B] resize-none placeholder:text-stone-400"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#A03C1B] hover:bg-[#853014] text-white text-xs font-bold py-2.5 rounded-lg tracking-wider uppercase transition shadow-2xs cursor-pointer active:scale-98"
                >
                  Terapkan Jadwal
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Grid Koleksi Hampers */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-end mb-4 sm:mb-5">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-800">
                Koleksi Hampers
              </h3>
              <p className="text-xs text-stone-400 font-medium">
                Menampilkan {hampersList.length} paket spesial
              </p>
            </div>

            {/* Grid Koleksi */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {hampersList.map((item) => {
                const qty = cart[item.id] || 0;

                return (
                  <div
                    key={item.id}
                    className={`bg-white rounded-xl border transition duration-200 flex flex-col justify-between overflow-hidden ${
                      qty > 0
                        ? "border-[#A03C1B] ring-1 ring-[#A03C1B]/30 shadow-md"
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
                        <span
                          className={`absolute top-2.5 left-2.5 text-white text-[9px] font-bold px-2 py-0.5 rounded-xs tracking-wider uppercase shadow-2xs ${item.badgeBg}`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </div>

                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="font-serif font-bold text-sm text-stone-800 mb-1.5 line-clamp-1">
                          {item.name}
                        </h4>
                        <p className="text-xs text-stone-500 leading-relaxed line-clamp-2 mb-4">
                          {item.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-stone-100">
                        <span className="text-xs font-bold text-[#A03C1B]">
                          Rp {item.price.toLocaleString("id-ID")}
                        </span>

                        {/* Control Quantity / Tambah Button */}
                        {qty === 0 ? (
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.id, 1, item.name)
                            }
                            className="w-8 h-8 bg-stone-100 hover:bg-[#A03C1B] hover:text-white text-stone-700 rounded-lg flex items-center justify-center transition cursor-pointer active:scale-95"
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
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="text-xs font-bold text-stone-800 px-1">
                              {qty}
                            </span>
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(item.id, 1, item.name)
                              }
                              className="w-6 h-6 bg-[#A03C1B] text-white rounded flex items-center justify-center transition cursor-pointer hover:bg-[#853014]"
                            >
                              <Plus className="w-3.5 h-3.5" />
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
      </section>

      {/* Floating Bottom Bar (Tampil Otomatis Saat Ada Item di Cart) */}
      {totalItems > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-stone-200 p-4 shadow-2xl z-40 animate-in slide-in-from-bottom-5">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-2 sm:px-6">
            <div className="flex items-center gap-3">
              <div className="relative bg-[#A03C1B]/10 p-2.5 rounded-xl">
                <ShoppingBag className="w-5 h-5 text-[#A03C1B]" />
                <span className="absolute -top-1 -right-1 bg-[#A03C1B] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              </div>
              <div>
                <p className="text-[11px] text-stone-500 font-medium">
                  Pengambilan: {pickupDate} ({pickupTime})
                </p>
                <p className="font-serif font-bold text-base sm:text-lg text-stone-900">
                  Total:{" "}
                  <span className="text-[#A03C1B]">
                    Rp {totalPrice.toLocaleString("id-ID")}
                  </span>
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => showToast("Lanjut ke Halaman Checkout...")}
              className="bg-[#A03C1B] hover:bg-[#853014] text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-xl transition shadow-md active:scale-95 cursor-pointer flex items-center gap-2"
            >
              Checkout Pre-Order →
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

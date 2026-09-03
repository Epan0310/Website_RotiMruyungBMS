"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

export default function PreOrderPage() {
  const [pickupDate, setPickupDate] = useState("2026-09-05");
  const [pickupTime, setPickupTime] = useState<"pagi" | "sore">("pagi");
  const [greetingCard, setGreetingCard] = useState("");

  // Data produk dinamis (Mendukung roti-1.png sampai roti-7.png)
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

  return (
    <main className="min-h-screen bg-[#FAF8F5] pb-20">
      {/* Hero Banner: Full Width dengan Latar Gambar Jelas */}
      <section className="relative w-full h-[320px] md:h-[380px] flex items-center justify-center text-center px-6 overflow-hidden border-b border-stone-200/50">
        {/* Background Image: Opacity 85% agar tekstur foto tajam & jelas */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-85"
          style={{
            backgroundImage: `url('/images/hero-bg.png')`,
          }}
        />

        {/* Soft warm overlay tipis agar teks kontras dan tidak menutupi foto */}
        <div className="absolute inset-0 bg-[#FAF8F5]/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-stone-100/10 to-[#FAF8F5]" />

        <div className="relative z-10 max-w-2xl mx-auto space-y-3">
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-[#A03C1B] leading-tight">
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
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Column: Form Pengaturan Pre-Order */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl border border-stone-200/80 p-5 shadow-2xs sticky top-24">
              <h3 className="font-serif text-base font-bold text-[#A03C1B] mb-5 pb-2 border-b border-stone-100">
                Pengaturan Pre-Order
              </h3>

              <div className="space-y-4 text-xs">
                {/* Tanggal Pengambilan */}
                <div>
                  <label className="block text-stone-600 font-medium mb-1.5">
                    Pilih Tanggal Pengambilan
                  </label>
                  <input
                    type="date"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-200 rounded-md px-3 py-2 text-stone-700 focus:outline-hidden focus:border-[#A03C1B]"
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
                      onClick={() => setPickupTime("pagi")}
                      className={`py-2 px-2 rounded-md border text-[11px] font-medium transition cursor-pointer ${
                        pickupTime === "pagi"
                          ? "border-[#A03C1B] bg-[#A03C1B]/5 text-[#A03C1B]"
                          : "border-stone-200 bg-stone-50 text-stone-600 hover:bg-stone-100"
                      }`}
                    >
                      Pagi (08-12)
                    </button>
                    <button
                      type="button"
                      onClick={() => setPickupTime("sore")}
                      className={`py-2 px-2 rounded-md border text-[11px] font-medium transition cursor-pointer ${
                        pickupTime === "sore"
                          ? "border-[#A03C1B] bg-[#A03C1B]/5 text-[#A03C1B]"
                          : "border-stone-200 bg-stone-50 text-stone-600 hover:bg-stone-100"
                      }`}
                    >
                      Sore (15-18)
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
                    onChange={(e) => setGreetingCard(e.target.value)}
                    placeholder="Tulis pesan hangat Anda di sini..."
                    className="w-full bg-stone-50 border border-stone-200 rounded-md px-3 py-2 text-stone-700 focus:outline-hidden focus:border-[#A03C1B] resize-none placeholder:text-stone-400"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="button"
                  className="w-full bg-[#A03C1B] hover:bg-[#853014] text-white text-xs font-bold py-2.5 rounded-md tracking-wider uppercase transition shadow-2xs mt-2 cursor-pointer"
                >
                  Terapkan Jadwal
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Grid Koleksi Hampers */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-end mb-5">
              <h3 className="font-serif text-2xl font-bold text-stone-800">
                Koleksi Hampers
              </h3>
              <p className="text-xs text-stone-400 font-medium">
                Menampilkan {hampersList.length} paket spesial
              </p>
            </div>

            {/* Grid 3 Kolom */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {hampersList.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl border border-stone-200/80 overflow-hidden shadow-2xs hover:shadow-md transition duration-200 flex flex-col justify-between"
                >
                  {/* Aspect ratio 4:3 mengikuti dimensi Figma */}
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

                    <div className="flex items-center justify-between pt-2 border-t border-stone-100">
                      <span className="text-xs font-bold text-[#A03C1B]">
                        Rp {item.price.toLocaleString("id-ID")}
                      </span>
                      <button
                        type="button"
                        className="w-7 h-7 bg-stone-100 hover:bg-[#A03C1B] hover:text-white text-stone-700 rounded-md flex items-center justify-center transition cursor-pointer"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

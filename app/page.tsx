import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function Home() {
  const products = await prisma.product.findMany({
    include: { category: true },
  });

  return (
    <main className="min-h-screen bg-[#FAF8F5] pb-16">
      {/* Hero Banner Section */}
      <section className="max-w-7xl mx-auto my-4 sm:my-6 px-4 sm:px-6">
        <div
          className="relative min-h-[340px] sm:h-[380px] md:h-[420px] rounded-2xl overflow-hidden bg-cover bg-center flex items-center justify-center text-center p-6 shadow-xs"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/hero-bg.png')`,
          }}
        >
          <div className="relative z-10 max-w-xl text-white space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal tracking-wide leading-tight">
              Roti Klasik Kehangatan Kota Lama Banyumas
            </h2>
            <p className="text-stone-200 text-xs sm:text-sm font-light max-w-md mx-auto leading-relaxed">
              Dibuat segar setiap hari tanpa bahan pengawet. Pesan online, ambil
              tanpa antre.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
              <a
                href="#katalog"
                className="bg-[#A03C1B] hover:bg-[#853014] text-white text-xs font-semibold px-5 py-3 rounded-lg transition shadow-2xs text-center"
              >
                Pesan Roti Hari Ini
              </a>
              <Link
                href="/pre-order"
                className="bg-white hover:bg-stone-100 text-stone-800 text-xs font-semibold px-5 py-3 rounded-lg transition shadow-2xs text-center"
              >
                Pre-Order Hampers
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Grid Section */}
      <section id="katalog" className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 border-b border-stone-200/80 pb-4 gap-4">
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-800">
              Katalog Roti Hari Ini
            </h3>
            <p className="text-xs text-stone-500 mt-1">
              Dipanggang segar setiap pagi langsung dari oven.
            </p>
          </div>

          {/* Horizontal Scroll Filter Kategori di HP */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
            <button className="whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold bg-[#A03C1B] text-white shadow-2xs transition cursor-pointer">
              Semua Roti
            </button>
            <button className="whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold bg-stone-100 text-stone-600 hover:bg-stone-200 transition cursor-pointer">
              Roti Bluder
            </button>
            <button className="whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold bg-stone-100 text-stone-600 hover:bg-stone-200 transition cursor-pointer">
              Roti Sobek & Sisir
            </button>
            <button className="whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold bg-stone-100 text-stone-600 hover:bg-stone-200 transition cursor-pointer">
              Pastry & Cake
            </button>
            <button className="whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold bg-stone-100 text-stone-600 hover:bg-stone-200 transition cursor-pointer">
              Minuman
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-stone-200/80 overflow-hidden shadow-2xs hover:shadow-md transition duration-200 flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />

                {/* Status Badge */}
                <span
                  className={`absolute top-2.5 left-2.5 text-white text-[9px] font-bold px-2 py-0.5 rounded-xs tracking-wider uppercase shadow-2xs ${
                    item.status === "DIPROSES_OVEN"
                      ? "bg-amber-600"
                      : "bg-[#A03C1B]"
                  }`}
                >
                  {item.statusText
                    ? `${item.status.replace("_", " ")} (${item.statusText})`
                    : item.status.replace("_", " ")}
                </span>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-serif font-bold text-sm text-stone-800 mb-1 line-clamp-1">
                    {item.name}
                  </h4>
                  <p className="text-xs font-bold text-[#A03C1B]">
                    Rp {item.price.toLocaleString("id-ID")}
                  </p>
                </div>
                <button className="mt-4 w-full bg-stone-100 hover:bg-[#A03C1B] hover:text-white text-stone-700 text-xs font-semibold py-2 rounded-lg transition cursor-pointer">
                  + Tambah
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Steps Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 my-8 sm:my-12">
        <div className="bg-[#F4EFEA] rounded-2xl p-6 sm:p-8 text-center border border-stone-200/60 shadow-2xs">
          <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-800 mb-6 sm:mb-8">
            Cara Pesan & Ambil Sendiri
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-white rounded-full border border-stone-200 flex items-center justify-center text-[#A03C1B] mb-3 text-sm font-bold shadow-2xs">
                1
              </div>
              <h4 className="font-serif font-bold text-sm text-stone-800 mb-1">
                Pilih & Bayar
              </h4>
              <p className="text-xs text-stone-500 max-w-xs leading-relaxed">
                Pilih roti segar dari katalog dan selesaikan pembayaran online.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-white rounded-full border border-stone-200 flex items-center justify-center text-[#A03C1B] mb-3 text-sm font-bold shadow-2xs">
                2
              </div>
              <h4 className="font-serif font-bold text-sm text-stone-800 mb-1">
                Tentukan Jam Ambil
              </h4>
              <p className="text-xs text-stone-500 max-w-xs leading-relaxed">
                Pilih waktu yang nyaman untuk Anda mengambil pesanan hari ini.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-white rounded-full border border-stone-200 flex items-center justify-center text-[#A03C1B] mb-3 text-sm font-bold shadow-2xs">
                3
              </div>
              <h4 className="font-serif font-bold text-sm text-stone-800 mb-1">
                Ambil di Counter Express
              </h4>
              <p className="text-xs text-stone-500 max-w-xs leading-relaxed">
                Tunjukkan bukti pesanan dan ambil tanpa perlu antre panjang.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

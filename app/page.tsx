import { prisma } from "@/lib/prisma";

export default async function Home() {
  const products = await prisma.product.findMany({
    include: { category: true },
  });

  return (
    <main className="min-h-screen bg-[#FAF8F5] pb-16">
      {/* Hero Banner Section */}
      <section className="max-w-7xl mx-auto my-6 px-6">
        <div
          className="relative h-[380px] rounded-2xl overflow-hidden bg-cover bg-center flex items-center justify-center text-center p-6 shadow-sm"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url('/images/hero-bg.png')`,
          }}
        >
          <div className="relative z-10 max-w-xl text-white">
            <h2 className="font-serif text-3xl md:text-4xl font-normal tracking-wide leading-tight mb-3">
              Roti Klasik Kehangatan Kota Lama Banyumas
            </h2>
            <p className="text-stone-200 text-xs md:text-sm font-light mb-6">
              Dibuat segar setiap hari tanpa bahan pengawet. Pesan online, ambil
              tanpa antre.
            </p>
            <div className="flex justify-center gap-3">
              <button className="bg-[#A03C1B] hover:bg-[#853014] text-white text-xs font-medium px-5 py-2.5 rounded-md transition shadow-sm">
                Pesan Roti Hari Ini
              </button>
              <button className="bg-white hover:bg-stone-100 text-stone-800 text-xs font-medium px-5 py-2.5 rounded-md transition shadow-sm">
                Pre-Order Hampers
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Grid Section */}
      <section className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-end mb-6 border-b border-stone-200 pb-3">
          <h3 className="font-serif text-2xl font-bold text-stone-800">
            Katalog Roti Hari Ini
          </h3>
          <div className="flex gap-5 text-xs font-medium text-stone-500">
            <button className="text-[#A03C1B] font-bold border-b-2 border-[#A03C1B] pb-1">
              Semua Roti
            </button>
            <button className="hover:text-stone-800">Roti Bluder</button>
            <button className="hover:text-stone-800">Roti Sobek & Sisir</button>
            <button className="hover:text-stone-800">Pastry & Cake</button>
            <button className="hover:text-stone-800">Minuman</button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg border border-stone-200/80 overflow-hidden shadow-xs flex flex-col justify-between"
            >
              <div className="relative h-52 bg-stone-100 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />

                {/* Status Badge Custom Color */}
                <span
                  className={`absolute top-2 left-2 text-white text-[9px] font-bold px-2 py-0.5 rounded-xs tracking-wider uppercase ${
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
                  <h4 className="font-serif font-bold text-sm text-stone-800 mb-1">
                    {item.name}
                  </h4>
                  <p className="text-xs text-stone-500 font-medium">
                    Rp {item.price.toLocaleString("id-ID")}
                  </p>
                </div>
                <button className="mt-4 w-full bg-stone-100 hover:bg-[#A03C1B] hover:text-white text-stone-600 text-xs font-medium py-2 rounded transition-colors">
                  + Tambah
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Steps Section */}
      <section className="max-w-7xl mx-auto px-6 my-12">
        <div className="bg-[#F4EFEA] rounded-2xl p-8 text-center border border-stone-200/60">
          <h3 className="font-serif text-xl font-bold text-stone-800 mb-8">
            Cara Pesan & Ambil Sendiri
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-white rounded-full border border-stone-200 flex items-center justify-center text-[#A03C1B] mb-3 text-sm font-bold">
                1
              </div>
              <h4 className="font-serif font-bold text-sm text-stone-800 mb-1">
                1. Pilih & Bayar
              </h4>
              <p className="text-xs text-stone-500 max-w-xs">
                Pilih roti segar dari katalog dan selesaikan pembayaran online.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-white rounded-full border border-stone-200 flex items-center justify-center text-[#A03C1B] mb-3 text-sm font-bold">
                2
              </div>
              <h4 className="font-serif font-bold text-sm text-stone-800 mb-1">
                2. Tentukan Jam Ambil
              </h4>
              <p className="text-xs text-stone-500 max-w-xs">
                Pilih waktu yang nyaman untuk Anda mengambil pesanan hari ini.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-white rounded-full border border-stone-200 flex items-center justify-center text-[#A03C1B] mb-3 text-sm font-bold">
                3
              </div>
              <h4 className="font-serif font-bold text-sm text-stone-800 mb-1">
                3. Ambil di Counter Express
              </h4>
              <p className="text-xs text-stone-500 max-w-xs">
                Tunjukkan bukti pesanan dan ambil tanpa perlu antre panjang.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

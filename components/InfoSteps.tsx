import { ShoppingBag, Clock, Store } from "lucide-react";

export default function InfoSteps() {
  const steps = [
    {
      icon: ShoppingBag,
      title: "1. Pilih & Bayar",
      desc: "Pilih roti segar dari katalog dan selesaikan pembayaran online.",
    },
    {
      icon: Clock,
      title: "2. Tentukan Jam Ambil",
      desc: "Pilih waktu yang nyaman untuk Anda mengambil pesanan hari ini.",
    },
    {
      icon: Store,
      title: "3. Ambil di Counter Express",
      desc: "Tunjukkan bukti pesanan dan ambil tanpa perlu antre panjang.",
    },
  ];

  return (
    <section className="bg-stone-100/60 py-12 my-12 border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="font-serif text-xl font-bold text-stone-800 mb-8">
          Cara Pesan & Ambil Sendiri
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center max-w-xs mx-auto"
              >
                <div className="w-12 h-12 bg-white rounded-full border border-stone-200 flex items-center justify-center text-[#8C3B19] shadow-xs mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-bold text-sm text-stone-800 mb-1">
                  {step.title}
                </h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

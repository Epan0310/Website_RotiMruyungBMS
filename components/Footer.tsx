import { Store, Clock, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#FAF7F2] border-t border-stone-200 mt-16 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        {/* Brand Info */}
        <div className="md:col-span-1">
          <h2 className="font-serif text-lg font-bold text-[#8C3B19]">Roti Mruyung Banyumas</h2>
          <p className="text-xs text-stone-500 mt-2 leading-relaxed">
            Heritage Artisan Bakery di jantung Kota Lama Banyumas. Menyajikan kehangatan dan tradisi resep otentik setiap hari.
          </p>
        </div>

        {/* Lokasi & Operasional */}
        <div>
          <h3 className="font-serif text-xs font-bold uppercase tracking-wider text-stone-800 mb-3 flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-[#8C3B19]" /> Lokasi Toko
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Jl. Sudirman No. 12, Kota Lama Banyumas, Jawa Tengah
          </p>
        </div>

        <div>
          <h3 className="font-serif text-xs font-bold uppercase tracking-wider text-stone-800 mb-3 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-[#8C3B19]" /> Jam Operasional
          </h3>
          <p className="text-xs text-stone-600">Buka Setiap Hari</p>
          <p className="text-xs font-semibold text-stone-800 mt-1">07:00 - 21:00 WIB</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-serif text-xs font-bold uppercase tracking-wider text-stone-800 mb-3">Navigasi</h3>
          <ul className="space-y-2 text-xs text-stone-600">
            <li><a href="#" className="hover:text-[#8C3B19]">Cara Pesan</a></li>
            <li><a href="#" className="hover:text-[#8C3B19]">Hubungi Kami</a></li>
            <li><a href="#" className="hover:text-[#8C3B19]">Instagram @rotimruyung</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-6 border-t border-stone-200/60 text-center text-[11px] text-stone-400">
        © 2026 Roti Mruyung Banyumas. Traditional Heritage Bakery.
      </div>
    </footer>
  );
}
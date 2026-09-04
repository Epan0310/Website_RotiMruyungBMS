"use client";

import { useState } from "react";
import {
  MapPin,
  Clock,
  Navigation,
  Copy,
  Check,
  CheckCircle2,
  X,
  Phone,
  Wifi,
  Car,
  Coffee,
  Sparkles,
} from "lucide-react";

export default function LokasiPage() {
  const [copied, setCopied] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const addressText =
    "Jl. Mruyung No. 1, Sudagaran, Kec. Banyumas, Kabupaten Banyumas, Jawa Tengah 53192";
  const googleMapsUrl = "https://maps.google.com/?q=Roti+Mruyung+Banyumas";

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(addressText);
    setCopied(true);
    showToast("Alamat berhasil disalin!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-[#FAF8F5] py-10 px-4 sm:px-6 lg:px-8 relative">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 bg-stone-900 text-white text-xs px-4 py-3 rounded-lg shadow-xl flex items-center gap-2 animate-in fade-in slide-in-from-top-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
          <button
            type="button"
            onClick={() => setToastMessage(null)}
            className="ml-2 text-stone-400 hover:text-white"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-stone-200/60 border border-stone-300/70 text-stone-700 text-[10px] sm:text-xs font-semibold px-4 py-1.5 rounded-full tracking-wider uppercase">
            <MapPin className="w-3.5 h-3.5 text-[#A03C1B]" />
            KUNJUNGI TOKO & CAFE KAMI
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#631B00] tracking-tight">
            Lokasi & Jam Operasional
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
            Nikmati aroma roti hangat khas resep warisan langsung dari tungku
            panggangan kami di Banyumas.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Map Interactive Container (7 Cols) */}
          <div className="lg:col-span-7 bg-white p-3 rounded-3xl border border-stone-200/80 shadow-xs space-y-3">
            <div className="relative w-full h-[380px] sm:h-[480px] rounded-2xl overflow-hidden bg-stone-100 border border-stone-100">
              <iframe
                title="Lokasi Roti Mruyung Banyumas"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15822.842777651817!2d109.2842426871582!3d-7.520211199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e655B8100000000%3A0x1!2sBanyumas%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[20%] contrast-[105%] hover:grayscale-0 transition duration-300"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 px-2 py-1">
              <span className="text-xs text-stone-500 font-medium">
                Peta Interaktif Google Maps
              </span>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#631B00] hover:underline"
              >
                <span>Buka Tampilan Penuh</span>
                <Navigation className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Store Info & Status Card (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Main Info Card */}
            <div className="bg-white rounded-3xl border border-stone-200/80 p-6 sm:p-7 shadow-xs space-y-6">
              {/* Status Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-stone-100">
                <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-200/80 px-3 py-1 rounded-full text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Buka Sekarang
                </div>
                <span className="text-xs text-stone-500">
                  Tutup pukul 21:00 WIB
                </span>
              </div>

              {/* Address Details */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-stone-400 uppercase tracking-wider">
                  <MapPin className="w-4 h-4 text-[#631B00]" />
                  Alamat Lengkap
                </div>
                <p className="text-sm text-stone-800 font-medium leading-relaxed">
                  {addressText}
                </p>
                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#631B00] hover:text-[#4d1500] transition pt-1 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600">Alamat Tersalin</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Salin Alamat</span>
                    </>
                  )}
                </button>
              </div>

              {/* Opening Hours */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-bold text-stone-400 uppercase tracking-wider">
                  <Clock className="w-4 h-4 text-[#631B00]" />
                  Jam Operasional
                </div>
                <div className="bg-stone-50 rounded-2xl p-4 border border-stone-100 space-y-2 text-xs text-stone-700">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Senin – Jumat</span>
                    <span className="font-bold text-stone-900">
                      07:00 – 21:00 WIB
                    </span>
                  </div>
                  <div className="flex justify-between items-center pt-1 border-t border-stone-200/60">
                    <span className="font-medium">Sabtu – Minggu</span>
                    <span className="font-bold text-[#631B00]">
                      06:30 – 21:30 WIB
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-[#631B00] hover:bg-[#4d1500] text-white text-xs font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition shadow-xs active:scale-95 text-center"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Petunjuk Arah</span>
                </a>
                <a
                  href="https://wa.me/6281234567890?text=Halo%20Roti%20Mruyung,%20saya%20mau%20tanya%20lokasi%20toko"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition active:scale-95 text-center border border-stone-200"
                >
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <span>Tanya via WA</span>
                </a>
              </div>
            </div>

            {/* Store Facilities */}
            <div className="bg-white rounded-3xl border border-stone-200/80 p-6 shadow-xs space-y-4">
              <h3 className="font-serif font-bold text-sm text-stone-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#631B00]" />
                Fasilitas Area Resto & Cafe
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-stone-700">
                <div className="flex items-center gap-2 bg-stone-50 p-2.5 rounded-xl border border-stone-100">
                  <Car className="w-4 h-4 text-[#631B00]" />
                  <span>Parkir Luas</span>
                </div>
                <div className="flex items-center gap-2 bg-stone-50 p-2.5 rounded-xl border border-stone-100">
                  <Coffee className="w-4 h-4 text-[#631B00]" />
                  <span>Dine-In Cafe</span>
                </div>
                <div className="flex items-center gap-2 bg-stone-50 p-2.5 rounded-xl border border-stone-100">
                  <Wifi className="w-4 h-4 text-[#631B00]" />
                  <span>Free Wi-Fi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

"use client";

import { useState, useEffect } from "react";
import {
  Store,
  Truck,
  Clock,
  Lock,
  QrCode,
  Building2,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  X,
} from "lucide-react";

export default function CheckoutPage() {
  // State manajemen
  const [fulfillmentMethod, setFulfillmentMethod] = useState<
    "pickup" | "delivery"
  >("pickup");
  const [selectedDate, setSelectedDate] = useState<string>("Sen, 24 Okt");
  const [selectedTime, setSelectedTime] = useState<string>("14:00 - 16:00");
  const [paymentMethod, setPaymentMethod] = useState<"qris" | "va">("qris");
  const [name, setName] = useState<string>("Budi Santoso");
  const [phone, setPhone] = useState<string>("081234567890");

  // State Timer (15 menit = 900 detik)
  const [timeLeft, setTimeLeft] = useState<number>(15 * 60);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const dates = ["Sen, 24 Okt", "Sel, 25 Okt", "Rab, 26 Okt"];
  const timeSlots = ["10:00 - 12:00", "12:00 - 14:00", "14:00 - 16:00"];

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccessModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#FAF8F5] py-8 px-4 sm:px-6 lg:px-8 relative">
      {/* Top Banner Indicator */}
      <div className="max-w-6xl mx-auto mb-6 flex items-center justify-between border-b border-stone-200/80 pb-4">
        <div className="flex items-center gap-2 text-stone-600 text-xs sm:text-sm font-medium">
          <Lock className="w-4 h-4 text-[#631B00]" />
          <span>Secure Checkout</span>
        </div>
        <span className="text-xs text-stone-400">
          Roti Mruyung Online Store
        </span>
      </div>

      <div className="max-w-6xl mx-auto">
        <form
          onSubmit={handlePay}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          {/* LEFT COLUMN: Main Form Options (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* 1. Metode Penerimaan */}
            <div className="bg-white rounded-2xl border border-stone-200/80 p-5 sm:p-6 shadow-2xs space-y-4">
              <h2 className="font-serif font-bold text-lg text-[#631B00]">
                Metode Penerimaan
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setFulfillmentMethod("pickup")}
                  className={`p-4 rounded-xl border-2 text-center transition cursor-pointer flex flex-col items-center justify-center gap-2 ${
                    fulfillmentMethod === "pickup"
                      ? "border-[#631B00] bg-[#631B00]/5 text-[#631B00]"
                      : "border-stone-200 bg-white text-stone-600 hover:border-stone-300"
                  }`}
                >
                  <Store className="w-6 h-6 text-[#631B00]" />
                  <div>
                    <p className="font-bold text-xs sm:text-sm">
                      Ambil Mandiri
                    </p>
                    <p className="text-[11px] text-stone-500 font-light mt-0.5">
                      Ambil di toko kami
                    </p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setFulfillmentMethod("delivery")}
                  className={`p-4 rounded-xl border-2 text-center transition cursor-pointer flex flex-col items-center justify-center gap-2 ${
                    fulfillmentMethod === "delivery"
                      ? "border-[#631B00] bg-[#631B00]/5 text-[#631B00]"
                      : "border-stone-200 bg-white text-stone-600 hover:border-stone-300"
                  }`}
                >
                  <Truck className="w-6 h-6 text-[#631B00]" />
                  <div>
                    <p className="font-bold text-xs sm:text-sm">Kirim Kurir</p>
                    <p className="text-[11px] text-stone-500 font-light mt-0.5">
                      Dikirim ke alamat Anda
                    </p>
                  </div>
                </button>
              </div>
            </div>

            {/* 2. Jadwal Pengambilan */}
            <div className="bg-white rounded-2xl border border-stone-200/80 p-5 sm:p-6 shadow-2xs space-y-5">
              <div className="flex items-center justify-between">
                <h2 className="font-serif font-bold text-lg text-[#631B00]">
                  Jadwal Pengambilan
                </h2>
                <span className="bg-[#631B00] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                  Hari Ini
                </span>
              </div>

              {/* Date Tabs */}
              <div className="flex border-b border-stone-200 gap-6 text-xs font-medium">
                {dates.map((date) => (
                  <button
                    key={date}
                    type="button"
                    onClick={() => setSelectedDate(date)}
                    className={`pb-2 transition cursor-pointer ${
                      selectedDate === date
                        ? "border-b-2 border-[#631B00] text-[#631B00] font-bold"
                        : "text-stone-500 hover:text-stone-800"
                    }`}
                  >
                    {date}
                  </button>
                ))}
              </div>

              {/* Time Slots Grid */}
              <div className="grid grid-cols-3 gap-3 pt-1">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={`py-3 px-2 rounded-xl text-xs font-semibold border transition text-center cursor-pointer ${
                      selectedTime === time
                        ? "border-[#D97706] text-[#D97706] bg-amber-50/50 shadow-2xs"
                        : "border-stone-200 text-stone-700 bg-white hover:bg-stone-50"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Informasi Kontak */}
            <div className="bg-white rounded-2xl border border-stone-200/80 p-5 sm:p-6 shadow-2xs space-y-4">
              <h2 className="font-serif font-bold text-lg text-[#631B00]">
                Informasi Kontak
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border-b border-stone-300 py-2 text-sm font-medium text-stone-800 focus:outline-none focus:border-[#631B00] bg-transparent"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider">
                    Nomor WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full border-b border-stone-300 py-2 text-sm font-medium text-stone-800 focus:outline-none focus:border-[#631B00] bg-transparent"
                  />
                </div>
              </div>
            </div>

            {/* 4. Metode Pembayaran */}
            <div className="bg-white rounded-2xl border border-stone-200/80 p-5 sm:p-6 shadow-2xs space-y-4">
              <h2 className="font-serif font-bold text-lg text-[#631B00]">
                Metode Pembayaran
              </h2>
              <div className="space-y-3">
                {/* QRIS Option */}
                <label
                  onClick={() => setPaymentMethod("qris")}
                  className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition ${
                    paymentMethod === "qris"
                      ? "border-[#631B00] bg-stone-50/50"
                      : "border-stone-200 hover:bg-stone-50/30"
                  }`}
                >
                  <div className="pt-0.5">
                    <div
                      className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        paymentMethod === "qris"
                          ? "border-[#631B00]"
                          : "border-stone-400"
                      }`}
                    >
                      {paymentMethod === "qris" && (
                        <div className="w-2 h-2 rounded-full bg-[#631B00]" />
                      )}
                    </div>
                  </div>
                  <QrCode className="w-5 h-5 text-[#631B00] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-xs sm:text-sm text-stone-900">
                      QRIS
                    </p>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Gopay, OVO, Dana, LinkAja, BCA, dll.
                    </p>
                  </div>
                </label>

                {/* Virtual Account Option */}
                <label
                  onClick={() => setPaymentMethod("va")}
                  className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition ${
                    paymentMethod === "va"
                      ? "border-[#631B00] bg-stone-50/50"
                      : "border-stone-200 hover:bg-stone-50/30"
                  }`}
                >
                  <div className="pt-0.5">
                    <div
                      className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        paymentMethod === "va"
                          ? "border-[#631B00]"
                          : "border-stone-400"
                      }`}
                    >
                      {paymentMethod === "va" && (
                        <div className="w-2 h-2 rounded-full bg-[#631B00]" />
                      )}
                    </div>
                  </div>
                  <Building2 className="w-5 h-5 text-[#631B00] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-xs sm:text-sm text-stone-900">
                      Virtual Account
                    </p>
                    <p className="text-xs text-stone-500 mt-0.5">
                      BCA, Mandiri, BNI, BRI.
                    </p>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Order Summary & Timer Sidebar (5 Cols) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Timer Box */}
            <div className="bg-[#FEE2E2]/60 border border-red-200 rounded-2xl p-4 text-center space-y-1">
              <p className="text-xs font-semibold text-red-900 flex items-center justify-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-red-700" />
                Selesaikan pembayaran dalam
              </p>
              <p className="font-serif text-3xl font-bold text-red-900 tracking-wider">
                {formatTime(timeLeft)}
              </p>
            </div>

            {/* Order Summary Card */}
            <div className="bg-white rounded-2xl border border-stone-200/80 p-6 shadow-2xs space-y-6">
              <h3 className="font-serif font-bold text-xl text-[#631B00] pb-3 border-b border-stone-100">
                Ringkasan Pesanan
              </h3>

              {/* Items List */}
              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold text-stone-900">
                      Roti Sisir Klasik
                    </p>
                    <p className="text-stone-500 text-xs">2x</p>
                  </div>
                  <p className="font-bold text-stone-900">Rp 48.000</p>
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold text-stone-900">
                      Kopi Susu Gula Aren
                    </p>
                    <p className="text-stone-500 text-xs">2x</p>
                  </div>
                  <p className="font-bold text-stone-900">Rp 50.000</p>
                </div>
              </div>

              {/* Calculation Subtotal */}
              <div className="border-t border-stone-100 pt-4 space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between text-stone-600">
                  <span>Subtotal</span>
                  <span className="font-semibold text-stone-800">
                    Rp 98.000
                  </span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Biaya Layanan</span>
                  <span className="font-semibold text-stone-800">Rp 2.000</span>
                </div>
              </div>

              {/* Total Price */}
              <div className="border-t border-stone-200 pt-4 flex items-center justify-between">
                <span className="font-serif text-lg font-bold text-stone-900">
                  Total
                </span>
                <span className="font-serif text-2xl font-bold text-[#631B00]">
                  Rp 100.000
                </span>
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                className="w-full bg-[#631B00] hover:bg-[#4d1500] text-white text-xs sm:text-sm font-bold py-4 px-4 rounded-xl transition shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <span>Bayar Sekarang & Dapatkan QR Pickup</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-stone-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Pembayaran aman & terenkripsi</span>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* Success Modal QR Code */}
      {isSuccessModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-sm w-full text-center space-y-5 relative shadow-2xl animate-in zoom-in-95 duration-200">
            <button
              type="button"
              onClick={() => setIsSuccessModalOpen(false)}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <div>
              <h3 className="font-serif font-bold text-xl text-stone-900">
                Pesanan Dikonfirmasi!
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Tunjukkan QR Code ini ke kasir Roti Mruyung saat pengambilan.
              </p>
            </div>

            {/* QR Mockup Box */}
            <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 inline-block mx-auto">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=MRUYUNG-ORDER-1000`}
                alt="QR Code Pickup"
                className="w-44 h-44 mx-auto rounded-lg"
              />
              <p className="text-[10px] font-mono font-bold text-stone-600 mt-2 tracking-widest">
                ID: MRY-2026-0904
              </p>
            </div>

            <div className="text-left bg-stone-50 p-3 rounded-xl border border-stone-100 space-y-1 text-xs text-stone-600">
              <p>
                <span className="font-bold">Pemesan:</span> {name}
              </p>
              <p>
                <span className="font-bold">Jadwal:</span> {selectedDate},{" "}
                {selectedTime}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsSuccessModalOpen(false)}
              className="w-full bg-[#631B00] text-white text-xs font-bold py-3 rounded-xl hover:bg-[#4d1500] transition"
            >
              Tutup & Simpan Tiket
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

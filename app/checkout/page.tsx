"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, totalPrice, clearCart } = useCart();

  const [deliveryMethod, setDeliveryMethod] = useState<"pickup" | "delivery">(
    "pickup",
  );
  const [selectedDate, setSelectedDate] = useState("Sen, 24 Okt");
  const [selectedTime, setSelectedTime] = useState("14:00 - 16:00");
  const [paymentMethod, setPaymentMethod] = useState("qris");
  const [isSuccess, setIsSuccess] = useState(false);

  // Form State
  const [name, setName] = useState("Budi Santoso");
  const [phone, setPhone] = useState("081234567890");

  const biayaLayanan = 2000;
  const grandTotal = totalPrice + (cart.length > 0 ? biayaLayanan : 0);

  // Jika keranjang kosong dan bukan setelah bayar, kembalikan ke katalog
  useEffect(() => {
    if (cart.length === 0 && !isSuccess) {
      // Biarkan jika user baru checkout
    }
  }, [cart, isSuccess]);

  const handlePay = () => {
    if (cart.length === 0) return;
    setIsSuccess(true);
    clearCart();
  };

  if (isSuccess) {
    return (
      <main className="min-h-screen bg-[#FAF8F5] flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl border border-stone-200 p-8 max-w-md w-full text-center space-y-4 shadow-xl animate-in zoom-in-95">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="font-serif font-bold text-2xl text-[#631B00]">
            Pesanan Berhasil!
          </h2>
          <p className="text-xs text-stone-600 leading-relaxed">
            Terima kasih, <span className="font-semibold">{name}</span>. Pesanan
            kamu sedang disiapkan. Tunjukkan bukti pesanan ini saat pengambilan
            di toko.
          </p>
          <div className="bg-stone-50 p-4 rounded-xl text-left border border-stone-200 text-xs space-y-1">
            <p>
              <span className="text-stone-400">Jadwal:</span> {selectedDate},{" "}
              {selectedTime}
            </p>
            <p>
              <span className="text-stone-400">Metode:</span>{" "}
              {deliveryMethod === "pickup" ? "Ambil Mandiri" : "Kirim Kurir"}
            </p>
            <p>
              <span className="text-stone-400">Pembayaran:</span>{" "}
              {paymentMethod.toUpperCase()}
            </p>
          </div>
          <Link
            href="/"
            className="block w-full bg-[#631B00] hover:bg-[#4d1500] text-white text-xs font-bold py-3 rounded-xl transition"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FAF8F5] pb-20">
      {/* Header Info */}
      <div className="bg-white border-b border-stone-200 py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-stone-500">
          <Link
            href="/cart"
            className="flex items-center gap-1 hover:text-[#A03C1B] transition"
          >
            <ArrowLeft className="w-4 h-4" /> Kembali ke Keranjang
          </Link>
          <span>Secure Checkout</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form Kiri */}
          <div className="lg:col-span-7 space-y-6">
            {/* 1. Metode Penerimaan */}
            <section className="bg-white rounded-2xl border border-stone-200/80 p-6 shadow-2xs">
              <h3 className="font-serif font-bold text-lg text-[#631B00] mb-4">
                Metode Penerimaan
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setDeliveryMethod("pickup")}
                  className={`p-4 rounded-xl border text-center transition cursor-pointer ${
                    deliveryMethod === "pickup"
                      ? "border-[#631B00] bg-[#631B00]/5 text-[#631B00] font-bold"
                      : "border-stone-200 text-stone-600 hover:bg-stone-50"
                  }`}
                >
                  <p className="text-sm">Ambil Mandiri</p>
                  <span className="text-[10px] text-stone-400 font-normal">
                    Ambil di toko kami
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setDeliveryMethod("delivery")}
                  className={`p-4 rounded-xl border text-center transition cursor-pointer ${
                    deliveryMethod === "delivery"
                      ? "border-[#631B00] bg-[#631B00]/5 text-[#631B00] font-bold"
                      : "border-stone-200 text-stone-600 hover:bg-stone-50"
                  }`}
                >
                  <p className="text-sm">Kirim Kurir</p>
                  <span className="text-[10px] text-stone-400 font-normal">
                    Dikirimi ke alamat Anda
                  </span>
                </button>
              </div>
            </section>

            {/* 2. Jadwal Pengambilan */}
            <section className="bg-white rounded-2xl border border-stone-200/80 p-6 shadow-2xs">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-serif font-bold text-lg text-[#631B00]">
                  Jadwal Pengambilan
                </h3>
                <span className="bg-[#631B00] text-white text-[9px] font-bold px-2 py-0.5 rounded-xs uppercase">
                  Hari Ini
                </span>
              </div>

              {/* Tag Tanggal */}
              <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
                {["Sen, 24 Okt", "Sel, 25 Okt", "Rab, 26 Okt"].map((date) => (
                  <button
                    key={date}
                    type="button"
                    onClick={() => setSelectedDate(date)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition ${
                      selectedDate === date
                        ? "bg-[#631B00] text-white font-bold"
                        : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                    }`}
                  >
                    {date}
                  </button>
                ))}
              </div>

              {/* Slot Jam */}
              <div className="grid grid-cols-3 gap-3">
                {["10:00 - 12:00", "12:00 - 14:00", "14:00 - 16:00"].map(
                  (time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`py-2.5 rounded-xl border text-xs font-medium transition cursor-pointer ${
                        selectedTime === time
                          ? "border-[#631B00] bg-[#631B00]/5 text-[#631B00] font-bold"
                          : "border-stone-200 text-stone-600 hover:bg-stone-50"
                      }`}
                    >
                      {time}
                    </button>
                  ),
                )}
              </div>
            </section>

            {/* 3. Informasi Kontak */}
            <section className="bg-white rounded-2xl border border-stone-200/80 p-6 shadow-2xs">
              <h3 className="font-serif font-bold text-lg text-[#631B00] mb-4">
                Informasi Kontak
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase font-bold text-stone-400 mb-1">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 border border-stone-200 rounded-xl text-xs text-stone-800 focus:outline-none focus:border-[#631B00]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-bold text-stone-400 mb-1">
                    Nomor WhatsApp
                  </label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 border border-stone-200 rounded-xl text-xs text-stone-800 focus:outline-none focus:border-[#631B00]"
                  />
                </div>
              </div>
            </section>

            {/* 4. Metode Pembayaran */}
            <section className="bg-white rounded-2xl border border-stone-200/80 p-6 shadow-2xs">
              <h3 className="font-serif font-bold text-lg text-[#631B00] mb-4">
                Metode Pembayaran
              </h3>
              <div className="space-y-3">
                <label
                  className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition ${paymentMethod === "qris" ? "border-[#631B00] bg-[#631B00]/5" : "border-stone-200"}`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === "qris"}
                      onChange={() => setPaymentMethod("qris")}
                      className="accent-[#631B00]"
                    />
                    <div>
                      <p className="text-xs font-bold text-stone-800">QRIS</p>
                      <p className="text-[10px] text-stone-400">
                        Gopay, OVO, ShopeePay, BCA Mobile, dll.
                      </p>
                    </div>
                  </div>
                </label>

                <label
                  className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition ${paymentMethod === "va" ? "border-[#631B00] bg-[#631B00]/5" : "border-stone-200"}`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === "va"}
                      onChange={() => setPaymentMethod("va")}
                      className="accent-[#631B00]"
                    />
                    <div>
                      <p className="text-xs font-bold text-stone-800">
                        Virtual Account
                      </p>
                      <p className="text-[10px] text-stone-400">
                        BCA, Mandiri, BRI, BNI
                      </p>
                    </div>
                  </div>
                </label>
              </div>
            </section>
          </div>

          {/* Ringkasan Pesanan Kanan (Dinamis dari Context) */}
          <div className="lg:col-span-5 sticky top-20">
            <div className="bg-white rounded-2xl border border-stone-200/80 p-6 shadow-md space-y-6">
              <h3 className="font-serif font-bold text-xl text-[#631B00] border-b border-stone-100 pb-3">
                Ringkasan Pesanan
              </h3>

              {cart.length === 0 ? (
                <div className="text-center py-6 text-stone-400 text-xs">
                  Keranjang kamu kosong. Silakan pilih produk terlebih dahulu.
                </div>
              ) : (
                <div className="space-y-4 max-h-64 overflow-y-auto pr-1">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-start text-xs border-b border-stone-100 pb-3"
                    >
                      <div>
                        <p className="font-bold text-stone-800">{item.name}</p>
                        <p className="text-stone-400">
                          {item.quantity}x @ Rp{" "}
                          {item.price.toLocaleString("id-ID")}
                        </p>
                      </div>
                      <span className="font-bold text-stone-900">
                        Rp{" "}
                        {(item.price * item.quantity).toLocaleString("id-ID")}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              <div className="space-y-2 pt-2 text-xs text-stone-600 border-t border-stone-100">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-stone-800">
                    Rp {totalPrice.toLocaleString("id-ID")}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Biaya Layanan</span>
                  <span className="font-semibold text-stone-800">
                    {cart.length > 0
                      ? `Rp ${biayaLayanan.toLocaleString("id-ID")}`
                      : "Rp 0"}
                  </span>
                </div>
                <div className="flex justify-between text-base font-bold text-stone-900 pt-3 border-t border-stone-200">
                  <span>Total</span>
                  <span className="text-[#631B00]">
                    Rp {grandTotal.toLocaleString("id-ID")}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={handlePay}
                disabled={cart.length === 0}
                className="w-full bg-[#631B00] hover:bg-[#4d1500] disabled:bg-stone-300 text-white text-xs font-bold py-3.5 rounded-xl transition shadow-md active:scale-98 cursor-pointer flex items-center justify-center gap-2"
              >
                Bayar Sekarang & Dapatkan QR Pickup →
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

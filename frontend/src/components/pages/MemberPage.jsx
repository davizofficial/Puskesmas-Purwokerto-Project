export default function MemberPage() {
  const handlePilihPaket = (namaPaket) => {
    alert(`Terima kasih! Anda memilih Paket Keanggotaan: ${namaPaket}.\nSilakan kunjungi bagian pendaftaran untuk aktivasi kartu member Anda.`);
  };

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Program Member</h1>
          <p className="text-xl text-emerald-100">
            Nikmati berbagai keuntungan eksklusif sebagai member kami
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-emerald-700 mb-12">
            Mengapa Menjadi Member?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg hover:-translate-y-2 transition">
              <div className="text-emerald-600 text-4xl mb-4">
                <i className="fas fa-percentage"></i>
              </div>
              <h3 className="text-xl font-bold text-emerald-700 mb-3">
                Diskon Khusus
              </h3>
              <p className="text-gray-600 text-sm">
                Dapatkan diskon hingga 20% untuk semua layanan kesehatan
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg hover:-translate-y-2 transition">
              <div className="text-emerald-600 text-4xl mb-4">
                <i className="fas fa-hourglass-half"></i>
              </div>
              <h3 className="text-xl font-bold text-emerald-700 mb-3">
                Prioritas Antrian
              </h3>
              <p className="text-gray-600 text-sm">
                Akses cepat dan prioritas dalam pemeriksaan kesehatan
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg hover:-translate-y-2 transition">
              <div className="text-emerald-600 text-4xl mb-4">
                <i className="fas fa-gift"></i>
              </div>
              <h3 className="text-xl font-bold text-emerald-700 mb-3">
                Bonus Poin
              </h3>
              <p className="text-gray-600 text-sm">
                Kumpulkan poin setiap kunjungan untuk hadiah menarik
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg hover:-translate-y-2 transition">
              <div className="text-emerald-600 text-4xl mb-4">
                <i className="fas fa-check-double"></i>
              </div>
              <h3 className="text-xl font-bold text-emerald-700 mb-3">
                Konsultasi Gratis
              </h3>
              <p className="text-gray-600 text-sm">
                Konsultasi kesehatan gratis dengan dokter spesialis
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg hover:-translate-y-2 transition">
              <div className="text-emerald-600 text-4xl mb-4">
                <i className="fas fa-bell"></i>
              </div>
              <h3 className="text-xl font-bold text-emerald-700 mb-3">
                Notifikasi Kesehatan
              </h3>
              <p className="text-gray-600 text-sm">
                Pengingat check-up rutin dan tips kesehatan eksklusif
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg hover:-translate-y-2 transition">
              <div className="text-emerald-600 text-4xl mb-4">
                <i className="fas fa-crown"></i>
              </div>
              <h3 className="text-xl font-bold text-emerald-700 mb-3">
                Status Premium
              </h3>
              <p className="text-gray-600 text-sm">
                Akses ke layanan premium dengan fasilitas terbaik
              </p>
            </div>
          </div>
        </section>

        {/* Membership Types */}
        <section>
          <h2 className="text-4xl font-bold text-emerald-700 mb-12">
            Paket Keanggotaan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Silver */}
            <div className="bg-white rounded-lg shadow-md border-2 border-emerald-600 overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-emerald-700 mb-2">
                  Silver
                </h3>
                <p className="text-gray-600 mb-6">Paket dasar untuk keluarga</p>
                <p className="text-3xl font-bold text-emerald-600 mb-6">
                  Rp 500.000<span className="text-sm text-gray-600">/tahun</span>
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <span className="text-emerald-600">
                      <i className="fas fa-check"></i>
                    </span>
                    <span className="text-gray-700">Diskon 10%</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-emerald-600">
                      <i className="fas fa-check"></i>
                    </span>
                    <span className="text-gray-700">Prioritas antrian</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-emerald-600">
                      <i className="fas fa-check"></i>
                    </span>
                    <span className="text-gray-700">Bonus poin</span>
                  </li>
                </ul>
                <button
                  onClick={() => handlePilihPaket("Silver")}
                  className="w-full border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-bold py-2 rounded-lg transition cursor-pointer"
                >
                  Pilih Paket
                </button>
              </div>
            </div>

            {/* Gold (Popular) */}
            <div className="bg-white rounded-lg shadow-md border-2 border-emerald-600 overflow-hidden transform md:scale-105">
              <div className="bg-emerald-600 text-white text-center py-2">
                <span className="font-bold text-sm tracking-wide">
                  PALING POPULER
                </span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-emerald-700 mb-2">
                  Gold
                </h3>
                <p className="text-gray-600 mb-6">
                  Paket lengkap untuk perseorangan
                </p>
                <p className="text-3xl font-bold text-emerald-600 mb-6">
                  Rp 1.000.000<span className="text-sm text-gray-600">/tahun</span>
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <span className="text-emerald-600">
                      <i className="fas fa-check"></i>
                    </span>
                    <span className="text-gray-700">Diskon 15%</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-emerald-600">
                      <i className="fas fa-check"></i>
                    </span>
                    <span className="text-gray-700">Prioritas antrian</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-emerald-600">
                      <i className="fas fa-check"></i>
                    </span>
                    <span className="text-gray-700">Konsultasi gratis</span>
                  </li>
                </ul>
                <button
                  onClick={() => handlePilihPaket("Gold")}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 rounded-lg transition shadow-md cursor-pointer"
                >
                  Pilih Paket
                </button>
              </div>
            </div>

            {/* Platinum */}
            <div className="bg-white rounded-lg shadow-md border-2 border-emerald-600 overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-emerald-700 mb-2">
                  Platinum
                </h3>
                <p className="text-gray-600 mb-6">Paket premium eksklusif</p>
                <p className="text-3xl font-bold text-emerald-600 mb-6">
                  Rp 2.000.000<span className="text-sm text-gray-600">/tahun</span>
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <span className="text-emerald-600">
                      <i className="fas fa-check"></i>
                    </span>
                    <span className="text-gray-700">Diskon 20%</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-emerald-600">
                      <i className="fas fa-check"></i>
                    </span>
                    <span className="text-gray-700">Status premium</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-emerald-600">
                      <i className="fas fa-check"></i>
                    </span>
                    <span className="text-gray-700">Layanan 24/7</span>
                  </li>
                </ul>
                <button
                  onClick={() => handlePilihPaket("Platinum")}
                  className="w-full border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-bold py-2 rounded-lg transition cursor-pointer"
                >
                  Pilih Paket
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default function LayananPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Layanan Kesehatan</h1>
          <p className="text-xl text-emerald-100">
            Kami menyediakan berbagai layanan kesehatan berkualitas tinggi
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <section>
          <h2 className="text-4xl font-bold text-emerald-700 mb-12">
            Daftar Layanan Kami
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="text-emerald-600 text-4xl mb-4">
                <i className="fas fa-stethoscope"></i>
              </div>
              <h3 className="text-xl font-bold text-emerald-700 mb-3">
                Pemeriksaan Umum
              </h3>
              <p className="text-gray-600">
                Pemeriksaan kesehatan menyeluruh dengan dokter berpengalaman.
                Termasuk pengecekan tekanan darah, berat badan, dan riwayat
                kesehatan lengkap untuk deteksi dini penyakit.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="text-emerald-600 text-4xl mb-4">
                <i className="fas fa-syringe"></i>
              </div>
              <h3 className="text-xl font-bold text-emerald-700 mb-3">
                Imunisasi
              </h3>
              <p className="text-gray-600">
                Program imunisasi lengkap untuk semua usia sesuai jadwal
                kesehatan nasional. Kami menyediakan vaksin berkualitas dengan
                pelayanan yang aman dan nyaman.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="text-emerald-600 text-4xl mb-4">
                <i className="fas fa-baby"></i>
              </div>
              <h3 className="text-xl font-bold text-emerald-700 mb-3">
                Kesehatan Ibu & Anak
              </h3>
              <p className="text-gray-600">
                Layanan antenatal, postnatal, dan kesehatan anak dengan
                pendampingan profesional. Termasuk konseling kesehatan dan
                pemeriksaan berkala.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="text-emerald-600 text-4xl mb-4">
                <i className="fas fa-flask"></i>
              </div>
              <h3 className="text-xl font-bold text-emerald-700 mb-3">
                Laboratorium
              </h3>
              <p className="text-gray-600">
                Tes laboratorium lengkap dengan peralatan modern dan hasil yang
                akurat. Kami menawarkan berbagai pemeriksaan darah, urin, dan
                tes khusus lainnya.
              </p>
            </div>

            {/* Service 5 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="text-emerald-600 text-4xl mb-4">
                <i className="fas fa-prescription-bottle"></i>
              </div>
              <h3 className="text-xl font-bold text-emerald-700 mb-3">Farmasi</h3>
              <p className="text-gray-600">
                Layanan farmasi dengan obat-obatan berkualitas tinggi. Kami
                menyediakan konsultasi apotek dan edukasi penggunaan obat yang
                tepat.
              </p>
            </div>

            {/* Service 6 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="text-emerald-600 text-4xl mb-4">
                <i className="fas fa-tooth"></i>
              </div>
              <h3 className="text-xl font-bold text-emerald-700 mb-3">
                Gigi & Mulut
              </h3>
              <p className="text-gray-600">
                Layanan kesehatan gigi dan mulut dengan teknologi terkini.
                Meliputi pembersihan gigi, penambalan, dan perawatan kesehatan
                gigi lainnya.
              </p>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="mt-12 bg-green-50 border-l-4 border-emerald-600 rounded-lg p-6">
          <h3 className="font-bold text-emerald-700 text-lg mb-4">
            Informasi Penting
          </h3>
          <p className="text-gray-700">
            Semua layanan kami dilengkapi dengan tenaga medis profesional dan
            bersertifikat. Kami juga menerima berbagai asuransi kesehatan untuk
            memudahkan akses layanan kesehatan Anda.
          </p>
        </section>
      </div>
    </div>
  );
}

export default function HomePage({ onNavigate }) {
  return (
    <div>
      {/* Hero Section dengan Background Image */}
      <section
        className="relative h-96 md:h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://puskesmaspurwokerto.com/assets/banner.webp')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Puskesmas Purwokerto
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Pusat Kesehatan Masyarakat Terpadu - Melayani dengan Sepenuh Hati
            </p>
            <div className="flex gap-4 flex-wrap">
              <button
                onClick={() => onNavigate("pendaftaran")}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg transition cursor-pointer"
              >
                Daftar Sekarang
              </button>
              <button
                onClick={() => onNavigate("kontak")}
                className="border-2 border-white hover:bg-white hover:text-emerald-600 text-white font-bold py-3 px-8 rounded-lg transition cursor-pointer"
              >
                Hubungi Kami
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Welcome Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-emerald-700 mb-8">
            Selamat Datang di Puskesmas Purwokerto
          </h2>
          <div className="max-w-2xl mb-8">
            <p className="text-gray-700 text-lg leading-relaxed">
              Puskesmas Purwokerto adalah institusi kesehatan terdepan yang
              berkomitmen untuk memberikan layanan kesehatan berkualitas tinggi
              kepada seluruh masyarakat. Dengan tim profesional yang berdedikasi
              dan fasilitas modern, kami siap melayani kebutuhan kesehatan Anda
              dan keluarga.
            </p>
          </div>

          {/* Info Box */}
          <div className="bg-green-50 border-l-4 border-emerald-600 rounded-lg p-6">
            <h3 className="font-bold text-emerald-700 text-lg mb-4">
              <i className="fas fa-map-marker-alt mr-2"></i> Lokasi & Jam Operasional
            </h3>
            <p className="text-gray-700 mb-2">
              <strong>Alamat:</strong> Jln. Kesehatan No. 123, Purwokerto
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Jam Buka:</strong> Senin - Jumat: 08:00 - 17:00 | Sabtu: 08:00 - 12:00
            </p>
            <p className="text-gray-700">
              <strong>Telepon:</strong> (0281) 1234-5678 |{" "}
              <strong>Email:</strong> info@puskesmaspurwokerto.id
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-emerald-700 mb-8">
            Layanan Unggulan Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="text-emerald-600 text-4xl mb-4">
                <i className="fas fa-stethoscope"></i>
              </div>
              <h3 className="text-xl font-bold text-emerald-700 mb-3">
                Pemeriksaan Umum
              </h3>
              <p className="text-gray-600">
                Pemeriksaan kesehatan umum dengan dokter berpengalaman untuk
                deteksi dini penyakit.
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
                Program imunisasi lengkap untuk bayi, anak-anak, dan dewasa
                sesuai standar kesehatan.
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
                pendampingan profesional.
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
                Tes laboratorium lengkap dengan hasil cepat dan akurat untuk
                berbagai pemeriksaan.
              </p>
            </div>

            {/* Service 5 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="text-emerald-600 text-4xl mb-4">
                <i className="fas fa-prescription-bottle"></i>
              </div>
              <h3 className="text-xl font-bold text-emerald-700 mb-3">
                Farmasi
              </h3>
              <p className="text-gray-600">
                Layanan farmasi lengkap dengan obat-obatan berkualitas dan
                konsultasi apotek profesional.
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
                Layanan kesehatan gigi dan mulut dengan peralatan modern untuk
                senyum yang sehat.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-emerald-700 mb-8">
            Mengapa Memilih Puskesmas Purwokerto?
          </h2>
          <div className="max-w-2xl">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 font-bold text-lg flex-shrink-0">
                  ✓
                </span>
                <span className="text-gray-700">
                  Tim dokter dan perawat bersertifikat dan berpengalaman
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 font-bold text-lg flex-shrink-0">
                  ✓
                </span>
                <span className="text-gray-700">
                  Fasilitas kesehatan modern dan terlengkap
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 font-bold text-lg flex-shrink-0">
                  ✓
                </span>
                <span className="text-gray-700">
                  Biaya terjangkau dengan kualitas terbaik
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 font-bold text-lg flex-shrink-0">
                  ✓
                </span>
                <span className="text-gray-700">
                  Sistem pelayanan yang cepat dan ramah
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 font-bold text-lg flex-shrink-0">
                  ✓
                </span>
                <span className="text-gray-700">
                  Menerima asuransi kesehatan berbagai provider
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-16">
          <h3 className="text-3xl font-bold text-emerald-700 mb-6">
            Siap untuk Memulai?
          </h3>
          <div className="flex gap-4 flex-wrap justify-center">
            <button
              onClick={() => onNavigate("pendaftaran")}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg transition cursor-pointer"
            >
              Daftar Sekarang
            </button>
            <button
              onClick={() => onNavigate("kontak")}
              className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-bold py-3 px-8 rounded-lg transition cursor-pointer"
            >
              Hubungi Kami
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default function HeroSection({ onNavigate }) {
  return (
    <>
      {/* Hero Section dengan Background Image */}
      <section
        className="relative h-96 md:h-[500px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://puskesmaspurwokerto.com/assets/banner.webp')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/45"></div>

        {/* Content */}
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
              Puskesmas Purwokerto
            </h1>
            <p className="text-lg md:text-2xl mb-8 text-emerald-100 font-light">
              Pusat Kesehatan Masyarakat Terpadu - Melayani dengan Sepenuh Hati
            </p>
            <div className="flex gap-4 flex-wrap">
              <button
                onClick={() => onNavigate("pendaftaran")}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg transition shadow-lg cursor-pointer"
              >
                Daftar Sekarang
              </button>
              <button
                onClick={() => onNavigate("pasien")}
                className="border-2 border-white hover:bg-white hover:text-emerald-700 text-white font-bold py-3 px-8 rounded-lg transition cursor-pointer"
              >
                Lihat Data Pasien
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome & Info Section */}
      <section className="mb-16 pt-12">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-6">
          Selamat Datang di Puskesmas Purwokerto
        </h2>
        <div className="max-w-3xl mb-8">
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Puskesmas Purwokerto adalah institusi kesehatan terdepan yang
            berkomitmen untuk memberikan layanan kesehatan berkualitas tinggi
            kepada seluruh masyarakat. Dengan tim profesional yang berdedikasi
            dan fasilitas modern, kami siap melayani kebutuhan kesehatan Anda dan
            keluarga.
          </p>
        </div>

        {/* Info Box */}
        <div className="bg-green-50 border-l-4 border-emerald-600 rounded-lg p-6 shadow-sm">
          <h3 className="font-bold text-emerald-700 text-lg mb-3 flex items-center">
            <i className="fas fa-map-marker-alt mr-2"></i> Lokasi & Jam Operasional
          </h3>
          <p className="text-gray-700 mb-1.5 text-sm md:text-base">
            <strong>Alamat:</strong> Jln. Kesehatan No. 123, Purwokerto
          </p>
          <p className="text-gray-700 mb-1.5 text-sm md:text-base">
            <strong>Jam Buka:</strong> Senin - Jumat: 08:00 - 17:00 | Sabtu: 08:00 - 12:00
          </p>
          <p className="text-gray-700 text-sm md:text-base">
            <strong>Telepon:</strong> (0281) 1234-5678 | <strong>Email:</strong> info@puskesmaspurwokerto.id
          </p>
        </div>
      </section>
    </>
  );
}

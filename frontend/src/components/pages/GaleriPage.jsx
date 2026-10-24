export default function GaleriPage() {
  const fasilitas = [
    {
      title: "Ruang Pemeriksaan Umum",
      deskripsi:
        "Dilengkapi alat diagnosis modern dan tempat tidur periksa higienis untuk kenyamanan pemeriksaan umum Anda.",
      img: "images/ruang-pemeriksaan-umum.png",
    },
    {
      title: "Ruang Laboratorium",
      deskripsi:
        "Laboratorium pengujian sampel darah, urin, dan tes cepat dengan akurasi terpercaya dan sertifikasi standar.",
      img: "images/labolatorium.png",
    },
    {
      title: "Ruang Gigi",
      deskripsi:
        "Unit dental dengan kursi gigi canggih, sterilisasi instrumen autoclave, dan tenaga dokter gigi terlatih.",
      img: "images/ruang-gigi.png",
    },
    {
      title: "Apotek",
      deskripsi:
        "Apotek resmi menyediakan obat-obatan lengkap dan layanan konseling obat gratis bersama apoteker.",
      img: "images/apotek.jpg",
    },
    {
      title: "Ruang Istirahat",
      deskripsi:
        "Ruangan observasi yang tenang, ber-AC, dan nyaman bagi pasien yang membutuhkan istirahat sementara.",
      img: "images/ruang-istirahat.jpg",
    },
    {
      title: "Ruang Konsultasi",
      deskripsi:
        "Ruang privat untuk konsultasi kesehatan mendalam dan konseling gizi bersama dokter spesialis.",
      img: "images/ruang-konsultasi.jpg",
    },
  ];

  const kegiatan = [
    {
      title: "Penyuluhan Kesehatan",
      deskripsi:
        "Edukasi pola hidup bersih dan sehat (PHBS) secara berkala di lingkungan RT/RW dan sekolah.",
    },
    {
      title: "Program Vaksinasi",
      deskripsi:
        "Pemberian vaksin imunisasi dasar dan vaksinasi tahunan bagi balita, anak, dan lansia.",
    },
    {
      title: "Donor Darah",
      deskripsi:
        "Bakti sosial donor darah rutin bekerjasama dengan PMI untuk membantu sesama yang membutuhkan.",
    },
    {
      title: "Senam Kesehatan",
      deskripsi:
        "Kegiatan senam bugar dan peregangan setiap Sabtu pagi terbuka untuk seluruh warga sekitar.",
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Galeri</h1>
          <p className="text-xl text-emerald-100">
            Lihat fasilitas dan kegiatan Puskesmas Purwokerto
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Fasilitas */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-emerald-700 mb-4">
            Fasilitas Kami
          </h2>
          <p className="text-gray-600 mb-12">
            Klik pada setiap fasilitas untuk melihat detail informasi.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fasilitas.map((item, idx) => (
              <div
                key={idx}
                className="kartu-galeri group cursor-pointer"
                data-deskripsi={item.deskripsi}
                onClick={() => alert(`${item.title}:\n\n${item.deskripsi}`)}
              >
                <div className="bg-gray-200 rounded-lg h-48 overflow-hidden hover:shadow-lg hover:-translate-y-2 transition duration-300">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <p className="judul-galeri text-center text-gray-700 font-semibold mt-4 group-hover:text-emerald-700 transition">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Kegiatan */}
        <section>
          <h2 className="text-4xl font-bold text-emerald-700 mb-4">
            Kegiatan Kami
          </h2>
          <p className="text-gray-600 mb-12">
            Berbagai kegiatan bakti dan pemberdayaan kesehatan masyarakat.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {kegiatan.map((item, idx) => (
              <div
                key={idx}
                className="kartu-galeri group cursor-pointer"
                data-deskripsi={item.deskripsi}
                onClick={() => alert(`${item.title}:\n\n${item.deskripsi}`)}
              >
                <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center hover:shadow-lg hover:-translate-y-2 transition duration-300"></div>
                <p className="judul-galeri text-center text-gray-700 font-semibold mt-4 group-hover:text-emerald-700 transition">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

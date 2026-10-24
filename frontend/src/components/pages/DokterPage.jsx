import { useState } from "react";

const DOCTORS = [
  {
    id: 1,
    nama: "Dr. Budi Santoso",
    spesialis: "Dokter Umum",
    kategori: "umum",
    deskripsi: "Pengalaman 10 tahun, Spesialis Kesehatan Umum",
  },
  {
    id: 2,
    nama: "Dr. Siti Nurhaliza",
    spesialis: "Dokter Anak",
    kategori: "anak",
    deskripsi: "Pengalaman 8 tahun, Spesialis Kesehatan Anak",
  },
  {
    id: 3,
    nama: "Dr. Ahmad Wijaya",
    spesialis: "Dokter Gigi",
    kategori: "gigi",
    deskripsi: "Pengalaman 7 tahun, Spesialis Kesehatan Gigi",
  },
  {
    id: 4,
    nama: "Dr. Rini Wulandari",
    spesialis: "Dokter Kandungan",
    kategori: "kandungan",
    deskripsi: "Pengalaman 9 tahun, Spesialis Obstetri",
  },
  {
    id: 5,
    nama: "Dr. Hendra Gunawan",
    spesialis: "Dokter Penyakit",
    kategori: "penyakit-dalam",
    deskripsi: "Pengalaman 12 tahun, Spesialis Penyakit Dalam",
  },
  {
    id: 6,
    nama: "Dr. Eka Putri",
    spesialis: "Perawat Profesional",
    kategori: "umum",
    deskripsi: "Pengalaman 6 tahun, Perawat Bersertifikat",
  },
];

export default function DokterPage() {
  const [kategori, setKategori] = useState("semua");
  const [search, setSearch] = useState("");

  const filteredDoctors = DOCTORS.filter((doc) => {
    const matchCat = kategori === "semua" || doc.kategori === kategori;
    const matchSearch =
      doc.nama.toLowerCase().includes(search.toLowerCase()) ||
      doc.spesialis.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const categories = [
    { id: "semua", label: "Semua" },
    { id: "umum", label: "Dokter Umum" },
    { id: "anak", label: "Dokter Anak" },
    { id: "gigi", label: "Dokter Gigi" },
    { id: "kandungan", label: "Dokter Kandungan" },
    { id: "penyakit-dalam", label: "Penyakit Dalam" },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Tim Dokter Kami</h1>
          <p className="text-xl text-emerald-100">
            Dokter berpengalaman dan bersertifikat siap melayani Anda
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <section>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-4xl font-bold text-emerald-700">
                Dokter Spesialis
              </h2>
              <p className="text-gray-600 mt-1">
                Temukan dokter sesuai kebutuhan medis Anda
              </p>
            </div>
            {/* Live Search Box */}
            <div className="relative w-full md:w-80">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-emerald-600">
                <i className="fas fa-search"></i>
              </span>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Cari nama atau spesialis..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-600 shadow-sm text-sm"
              />
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setKategori(cat.id)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition cursor-pointer ${
                  kategori === cat.id
                    ? "bg-emerald-600 text-white"
                    : "bg-emerald-100 text-emerald-800 hover:bg-emerald-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {filteredDoctors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDoctors.map((doc) => (
                <div
                  key={doc.id}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition text-center"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-emerald-600 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow">
                    <i className="fas fa-user-md text-white text-3xl"></i>
                  </div>
                  <h4 className="text-xl font-bold text-emerald-700 mb-2">
                    {doc.nama}
                  </h4>
                  <p className="text-emerald-600 font-semibold mb-2">
                    {doc.spesialis}
                  </p>
                  <p className="text-gray-600 text-sm">{doc.deskripsi}</p>
                </div>
              ))}
            </div>
          ) : (
            /* Pesan jika dokter tidak ditemukan */
            <div className="text-center py-12 bg-white rounded-lg shadow-sm border mt-6">
              <i className="fas fa-user-slash text-gray-400 text-5xl mb-3"></i>
              <p className="text-gray-600 font-medium">
                Dokter atau spesialisasi yang Anda cari tidak ditemukan.
              </p>
              <button
                className="mt-4 text-emerald-600 hover:text-emerald-700 font-semibold text-sm cursor-pointer"
                onClick={() => {
                  setSearch("");
                  setKategori("semua");
                }}
              >
                Reset Pencarian
              </button>
            </div>
          )}
        </section>

        {/* Info Section */}
        <section className="mt-12 bg-green-50 border-l-4 border-emerald-600 rounded-lg p-6">
          <h3 className="font-bold text-emerald-700 text-lg mb-4">
            Jadwal Praktik
          </h3>
          <p className="text-gray-700">
            Semua dokter kami melayani dengan jam praktik yang fleksibel. Silahkan
            hubungi kami untuk mengatur jadwal konsultasi dengan dokter pilihan
            Anda.
          </p>
        </section>
      </div>
    </div>
  );
}

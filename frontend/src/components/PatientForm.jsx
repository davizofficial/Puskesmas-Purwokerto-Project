import { useState } from "react";

export default function PatientForm({ onAddPatient, onNavigate }) {
  const [formData, setFormData] = useState({
    nama: "",
    nik: "",
    email: "",
    telepon: "",
    alamat: "",
    jenisKelamin: "",
    tanggalLahir: "",
    layanan: "",
    keluhan: "",
  });

  const [lastRegistered, setLastRegistered] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.nama.trim() || !formData.nik.trim()) {
      alert("Nama lengkap dan NIK wajib diisi!");
      return;
    }

    if (formData.nik.trim().length !== 16) {
      alert("Nomor NIK harus berjumlah 16 digit!");
      return;
    }

    const now = new Date();
    const jam = String(now.getHours()).padStart(2, "0");
    const menit = String(now.getMinutes()).padStart(2, "0");

    const newPatient = {
      id: "PS-" + Math.floor(1000 + Math.random() * 9000),
      nama: formData.nama.trim(),
      nik: formData.nik.trim(),
      email: formData.email.trim(),
      telepon: formData.telepon.trim(),
      alamat: formData.alamat.trim() || "Purwokerto",
      jenisKelamin: formData.jenisKelamin || "Laki-laki",
      tanggalLahir: formData.tanggalLahir || "1995-01-01",
      poli: formData.layanan || "Pemeriksaan Umum",
      keluhan: formData.keluhan.trim() || "Pemeriksaan umum dan konsultasi dokter",
      waktuDaftar: `${jam}:${menit} WIB`,
      status: "Menunggu",
    };

    onAddPatient(newPatient);
    setLastRegistered(newPatient);

    // Reset input form
    setFormData({
      nama: "",
      nik: "",
      email: "",
      telepon: "",
      alamat: "",
      jenisKelamin: "",
      tanggalLahir: "",
      layanan: "",
      keluhan: "",
    });
  };

  return (
    <section>
      <h2 className="text-4xl font-bold text-emerald-700 mb-8">
        Formulir Pendaftaran
      </h2>

      {/* Notifikasi Sukses Pendaftaran & Nomor Tiket */}
      {lastRegistered && (
        <div className="mb-8 p-6 bg-emerald-50 border border-emerald-500 rounded-xl shadow-sm transition">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center text-2xl flex-shrink-0">
                <i className="fas fa-check"></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-emerald-800">
                  Pendaftaran Berhasil
                </h3>
                <p className="text-sm text-gray-700 mt-1">
                  Pasien <strong>{lastRegistered.nama}</strong> telah terdaftar
                  pada poli <strong>{lastRegistered.poli}</strong>.
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-xs text-gray-500">Nomor Antrean Anda:</span>
                  <span className="bg-emerald-600 text-white font-mono font-bold px-3 py-1 rounded text-sm tracking-wider">
                    {lastRegistered.id}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-2 self-end sm:self-center">
              {onNavigate && (
                <button
                  type="button"
                  onClick={() => onNavigate("antrean")}
                  className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-4 py-2 rounded-lg text-sm transition cursor-pointer shadow flex items-center gap-2"
                >
                  <span>Lihat Antrean</span>
                  <i className="fas fa-arrow-right text-xs"></i>
                </button>
              )}
              <button
                type="button"
                onClick={() => setLastRegistered(null)}
                className="text-gray-400 hover:text-gray-600 text-lg px-2 py-1"
                title="Tutup"
              >
                <i className="fas fa-xmark"></i>
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Formulir Input Controlled Component (2 Kolom) */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-emerald-700 font-semibold mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="nama"
                  value={formData.nama}
                  onChange={handleChange}
                  placeholder="Masukkan nama lengkap"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-emerald-600"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-emerald-700 font-semibold mb-2">
                  Nomor Identitas (NIK/Paspor)
                </label>
                <input
                  type="text"
                  name="nik"
                  value={formData.nik}
                  onChange={handleChange}
                  placeholder="Masukkan nomor identitas 16 digit"
                  maxLength={16}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-emerald-600"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-emerald-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Masukkan email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-emerald-600"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-emerald-700 font-semibold mb-2">
                  Nomor Telepon
                </label>
                <input
                  type="tel"
                  name="telepon"
                  value={formData.telepon}
                  onChange={handleChange}
                  placeholder="Masukkan nomor telepon (contoh: 08123456789)"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-emerald-600"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-emerald-700 font-semibold mb-2">
                  Alamat Lengkap
                </label>
                <textarea
                  name="alamat"
                  rows={3}
                  value={formData.alamat}
                  onChange={handleChange}
                  placeholder="Masukkan alamat lengkap"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-emerald-600"
                  required
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="block text-emerald-700 font-semibold mb-2">
                  Jenis Kelamin
                </label>
                <select
                  name="jenisKelamin"
                  value={formData.jenisKelamin}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-emerald-600"
                  required
                >
                  <option value="">Pilih Jenis Kelamin</option>
                  <option value="laki-laki">Laki-laki</option>
                  <option value="perempuan">Perempuan</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-emerald-700 font-semibold mb-2">
                  Tanggal Lahir
                </label>
                <input
                  type="date"
                  name="tanggalLahir"
                  value={formData.tanggalLahir}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-emerald-600"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-emerald-700 font-semibold mb-2">
                  Pilih Layanan
                </label>
                <select
                  name="layanan"
                  value={formData.layanan}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-emerald-600"
                  required
                >
                  <option value="">Pilih Layanan</option>
                  <option value="Pemeriksaan Umum">Pemeriksaan Umum</option>
                  <option value="Poli Anak">Imunisasi</option>
                  <option value="Laboratorium">Laboratorium</option>
                  <option value="Poli Gigi">Gigi & Mulut</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-lg transition shadow cursor-pointer text-base"
              >
                Daftar Sekarang
              </button>
            </form>
          </div>
        </div>

        {/* Panduan Pendaftaran (1 Kolom Samping - Sesuai Legacy HTML) */}
        <div>
          <div className="bg-green-50 border-l-4 border-emerald-600 rounded-lg p-6 shadow-sm sticky top-24">
            <h3 className="font-bold text-emerald-700 mb-4 text-lg">
              Panduan Pendaftaran
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 font-bold text-lg flex-shrink-0">
                  <i className="fas fa-check-circle"></i>
                </span>
                <span className="text-gray-700 text-sm">
                  Isi semua data dengan benar
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 font-bold text-lg flex-shrink-0">
                  <i className="fas fa-check-circle"></i>
                </span>
                <span className="text-gray-700 text-sm">
                  Siapkan dokumen identitas
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 font-bold text-lg flex-shrink-0">
                  <i className="fas fa-check-circle"></i>
                </span>
                <span className="text-gray-700 text-sm">
                  Pilih layanan kesehatan
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 font-bold text-lg flex-shrink-0">
                  <i className="fas fa-check-circle"></i>
                </span>
                <span className="text-gray-700 text-sm">
                  Tunggu konfirmasi dari kami
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

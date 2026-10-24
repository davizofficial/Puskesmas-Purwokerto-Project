import { useState } from "react";

export default function PatientForm({ onAddPatient }) {
  const [formData, setFormData] = useState({
    nama: "",
    nik: "",
    email: "",
    telepon: "",
    alamat: "",
    jenisKelamin: "Laki-laki",
    tanggalLahir: "",
    layanan: "Pemeriksaan Umum",
    keluhan: "",
  });

  const [notification, setNotification] = useState("");

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
      jenisKelamin: formData.jenisKelamin,
      tanggalLahir: formData.tanggalLahir || "1995-01-01",
      poli: formData.layanan,
      keluhan: formData.keluhan.trim() || "Pemeriksaan rutin kesehatan",
      waktuDaftar: `${jam}:${menit} WIB`,
      status: "Menunggu",
    };

    onAddPatient(newPatient);

    // Notifikasi sukses seperti di legacy-html
    setNotification(`Pasien ${newPatient.nama} berhasil didaftarkan dengan ID: ${newPatient.id}!`);
    setTimeout(() => {
      setNotification("");
    }, 4000);

    // Reset controlled inputs
    setFormData({
      nama: "",
      nik: "",
      email: "",
      telepon: "",
      alamat: "",
      jenisKelamin: "Laki-laki",
      tanggalLahir: "",
      layanan: "Pemeriksaan Umum",
      keluhan: "",
    });
  };

  return (
    <section className="mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-8">
        Formulir Pendaftaran Pasien
      </h2>

      {notification && (
        <div className="mb-6 p-4 bg-emerald-100 border border-emerald-300 text-emerald-800 rounded-lg font-medium flex items-center gap-2">
          <i className="fas fa-circle-check text-emerald-600 text-lg"></i>
          <span>{notification}</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form Container (2 cols) */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-emerald-700 font-semibold mb-2">
                  Nama Lengkap *
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-emerald-700 font-semibold mb-2">
                    Nomor Identitas (NIK 16 digit) *
                  </label>
                  <input
                    type="text"
                    name="nik"
                    value={formData.nik}
                    onChange={handleChange}
                    placeholder="Contoh: 3302101508920001"
                    maxLength={16}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-emerald-600"
                    required
                  />
                </div>

                <div>
                  <label className="block text-emerald-700 font-semibold mb-2">
                    Nomor Telepon / WhatsApp
                  </label>
                  <input
                    type="tel"
                    name="telepon"
                    value={formData.telepon}
                    onChange={handleChange}
                    placeholder="Contoh: 08123456789"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-emerald-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-emerald-700 font-semibold mb-2">
                    Jenis Kelamin
                  </label>
                  <select
                    name="jenisKelamin"
                    value={formData.jenisKelamin}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-emerald-600 bg-white"
                  >
                    <option value="Laki-laki">Laki-laki</option>
                    <option value="Perempuan">Perempuan</option>
                  </select>
                </div>

                <div>
                  <label className="block text-emerald-700 font-semibold mb-2">
                    Pilih Layanan / Poli *
                  </label>
                  <select
                    name="layanan"
                    value={formData.layanan}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-emerald-600 bg-white"
                    required
                  >
                    <option value="Pemeriksaan Umum">Pemeriksaan Umum</option>
                    <option value="Poli Gigi">Gigi & Mulut</option>
                    <option value="Poli Anak">Kesehatan Anak & Imunisasi</option>
                    <option value="Poli KIA">KIA & Ibu Hamil</option>
                    <option value="Laboratorium">Laboratorium</option>
                  </select>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-emerald-700 font-semibold mb-2">
                  Alamat Lengkap
                </label>
                <input
                  type="text"
                  name="alamat"
                  value={formData.alamat}
                  onChange={handleChange}
                  placeholder="Contoh: Jln. Jend. Soedirman No. 45, Purwokerto"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-emerald-600"
                />
              </div>

              <div className="mb-6">
                <label className="block text-emerald-700 font-semibold mb-2">
                  Keluhan / Gejala Medis Awal
                </label>
                <textarea
                  name="keluhan"
                  rows={3}
                  value={formData.keluhan}
                  onChange={handleChange}
                  placeholder="Jelaskan secara singkat gejala atau kebutuhan pemeriksaan"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-emerald-600"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-lg transition shadow-md cursor-pointer flex items-center justify-center gap-2"
              >
                <i className="fas fa-check-circle"></i>
                <span>Daftar Sekarang</span>
              </button>
            </form>
          </div>
        </div>

        {/* Sidebar Info Pendaftaran (seperti di legacy-html) */}
        <div>
          <div className="bg-emerald-50 rounded-lg p-6 border-l-4 border-emerald-600 shadow-sm mb-6">
            <h3 className="font-bold text-emerald-700 text-lg mb-4 flex items-center">
              <i className="fas fa-circle-info mr-2"></i> Ketentuan Pendaftaran
            </h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Membawa kartu identitas fisik (KTP/KIA/KK) saat kedatangan.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Pendaftaran online dilayani hingga 1 jam sebelum poli tutup.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>Nomor antrean resmi diterbitkan otomatis oleh sistem.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-emerald-600 text-3xl mb-2">
              <i className="fas fa-headset"></i>
            </div>
            <h4 className="font-bold text-gray-800 mb-1">Butuh Bantuan?</h4>
            <p className="text-xs text-gray-600 mb-3">
              Hubungi layanan informasi & bantuan Puskesmas Purwokerto:
            </p>
            <p className="font-bold text-emerald-700 text-sm">(0281) 1234-5678</p>
          </div>
        </div>
      </div>
    </section>
  );
}

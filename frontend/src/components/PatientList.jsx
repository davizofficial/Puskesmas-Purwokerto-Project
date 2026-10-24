import { useState } from "react";
import PatientCard from "./PatientCard";

export default function PatientList({
  patients,
  onDeletePatient,
  onUpdateStatus,
  onResetSampleData,
  onClearAll,
}) {
  const [filterPoli, setFilterPoli] = useState("Semua");

  const filteredPatients =
    filterPoli === "Semua"
      ? patients
      : patients.filter((p) => p.poli === filterPoli);

  return (
    <section className="mb-16">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-700">
            Daftar Antrean & Pasien
          </h2>
          <p className="text-gray-600 text-sm mt-1">
            Menampilkan data pasien terdaftar secara real-time ({filteredPatients.length} data)
          </p>
        </div>

        {/* Toolbar Pengujian Dosen & Filter */}
        <div className="flex flex-wrap items-center gap-2">
          <select
            value={filterPoli}
            onChange={(e) => setFilterPoli(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white text-gray-700 focus:outline-none focus:border-emerald-600"
          >
            <option value="Semua">Semua Layanan</option>
            <option value="Pemeriksaan Umum">Pemeriksaan Umum</option>
            <option value="Poli Gigi">Poli Gigi</option>
            <option value="Poli Anak">Poli Anak</option>
            <option value="Poli KIA">Poli KIA</option>
            <option value="Laboratorium">Laboratorium</option>
          </select>

          <button
            onClick={onClearAll}
            className="border border-red-300 text-red-600 hover:bg-red-50 text-xs font-semibold px-3 py-2 rounded-lg transition cursor-pointer"
            title="Uji coba tampilan conditional rendering saat data kosong"
          >
            <i className="fas fa-trash-can mr-1"></i> Kosongkan Data
          </button>

          <button
            onClick={onResetSampleData}
            className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-3 py-2 rounded-lg transition shadow-sm cursor-pointer"
            title="Muat kembali data contoh pasien"
          >
            <i className="fas fa-rotate-left mr-1"></i> Reset Contoh Data
          </button>
        </div>
      </div>

      {/* 5.c. CONDITIONAL RENDERING: Tampilkan pesan saat daftar masih kosong */}
      {patients.length === 0 ? (
        <div className="bg-green-50 border-l-4 border-emerald-600 rounded-lg p-10 text-center shadow-sm">
          <div className="text-emerald-600 text-5xl mb-3">
            <i className="fas fa-clipboard-user"></i>
          </div>
          <h3 className="text-2xl font-bold text-emerald-700 mb-2">
            Belum ada data pasien
          </h3>
          <p className="text-gray-600 text-sm max-w-md mx-auto mb-6">
            Saat ini belum ada data pasien yang terdaftar di antrean pelayanan.
            Silakan tambahkan data pasien baru melalui formulir pendaftaran.
          </p>
          <button
            onClick={onResetSampleData}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-6 rounded-lg transition shadow cursor-pointer text-sm"
          >
            <i className="fas fa-plus mr-2"></i> Muat Data Contoh
          </button>
        </div>
      ) : filteredPatients.length === 0 ? (
        <div className="bg-white rounded-lg p-8 text-center text-gray-500 shadow-sm border border-gray-100 text-sm">
          Tidak ada data pasien untuk kategori layanan <strong>{filterPoli}</strong>.
        </div>
      ) : (
        /* 5.a. RENDER LIST menggunakan .map() dengan key unik */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPatients.map((patient) => (
            <PatientCard
              key={patient.id}
              patient={patient}
              onDelete={onDeletePatient}
              onUpdateStatus={onUpdateStatus}
            />
          ))}
        </div>
      )}
    </section>
  );
}

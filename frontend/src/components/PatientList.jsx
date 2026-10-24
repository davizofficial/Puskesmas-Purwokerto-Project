import { useState } from "react";
import PatientCard from "./PatientCard";

export default function PatientList({ patients }) {
  const [filterPoli, setFilterPoli] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPatients = patients.filter((p) => {
    const matchPoli = filterPoli === "Semua" || p.poli === filterPoli;
    const matchSearch =
      p.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchPoli && matchSearch;
  });

  const countMenunggu = patients.filter((p) => p.status === "Menunggu").length;
  const countDiperiksa = patients.filter(
    (p) => p.status === "Sedang Diperiksa"
  ).length;
  const countSelesai = patients.filter((p) => p.status === "Selesai").length;

  return (
    <section>
      {/* Ringkasan Jumlah Antrean */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <p className="text-xs text-gray-500 font-medium">Sedang Diperiksa</p>
          <p className="text-3xl font-bold text-emerald-700 mt-1">
            {countDiperiksa}
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <p className="text-xs text-gray-500 font-medium">Menunggu Panggilan</p>
          <p className="text-3xl font-bold text-amber-600 mt-1">
            {countMenunggu}
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <p className="text-xs text-gray-500 font-medium">Selesai Dilayani</p>
          <p className="text-3xl font-bold text-gray-700 mt-1">
            {countSelesai}
          </p>
        </div>
      </div>

      {/* Filter & Pencarian Sederhana */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
        <div className="w-full sm:w-72">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari nomor antrean atau nama..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-emerald-600"
          />
        </div>

        <div className="w-full sm:w-auto flex items-center gap-2">
          <label className="text-xs text-gray-500 whitespace-nowrap">
            Layanan:
          </label>
          <select
            value={filterPoli}
            onChange={(e) => setFilterPoli(e.target.value)}
            className="w-full sm:w-auto border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white text-gray-700 focus:outline-none focus:border-emerald-600"
          >
            <option value="Semua">Semua Layanan</option>
            <option value="Pemeriksaan Umum">Pemeriksaan Umum</option>
            <option value="Poli Gigi">Poli Gigi / Gigi & Mulut</option>
            <option value="Poli Anak">Poli Anak / Imunisasi</option>
            <option value="Laboratorium">Laboratorium</option>
          </select>
        </div>
      </div>

      {/* Conditional Rendering apabila antrean kosong */}
      {patients.length === 0 ? (
        <div className="bg-white border border-gray-200 rounded-lg p-12 text-center">
          <h3 className="text-xl font-bold text-gray-700 mb-2">
            Belum ada data antrean pasien
          </h3>
          <p className="text-sm text-gray-500">
            Saat ini tidak ada antrean yang sedang berjalan.
          </p>
        </div>
      ) : filteredPatients.length === 0 ? (
        <div className="bg-white border border-gray-200 rounded-lg p-8 text-center text-gray-500 text-sm">
          Tidak ditemukan antrean dengan kata kunci tersebut.
        </div>
      ) : (
        /* Render List .map() dengan key unik */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPatients.map((patient) => (
            <PatientCard key={patient.id} patient={patient} isStaff={false} />
          ))}
        </div>
      )}
    </section>
  );
}

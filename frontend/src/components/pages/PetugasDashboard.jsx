import { useState } from "react";
import PatientCard from "../PatientCard";

export default function PetugasDashboard({
  patients,
  onDeletePatient,
  onUpdateStatus,
  onResetSampleData,
  onClearAll,
  onLogout,
  onNavigate,
}) {
  const [activeTab, setActiveTab] = useState("Semua"); // 'Semua' | 'Menunggu' | 'Sedang Diperiksa' | 'Selesai'
  const [filterPoli, setFilterPoli] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("table"); // 'table' | 'cards'

  // Hitung jumlah status antrean
  const countMenunggu = patients.filter((p) => p.status === "Menunggu").length;
  const countDiperiksa = patients.filter(
    (p) => p.status === "Sedang Diperiksa"
  ).length;
  const countSelesai = patients.filter((p) => p.status === "Selesai").length;

  const filteredPatients = patients.filter((p) => {
    const matchTab = activeTab === "Semua" || p.status === activeTab;
    const matchPoli = filterPoli === "Semua" || p.poli === filterPoli;
    const matchSearch =
      p.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.nik.includes(searchQuery);
    return matchTab && matchPoli && matchSearch;
  });

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* Topbar Bersih Petugas */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-bold text-gray-800 text-base">
              Manajemen Antrean
            </span>
            <span className="text-gray-300">|</span>
            <span className="text-xs text-gray-500">Staf Petugas</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate("antrean")}
              className="text-xs text-gray-600 hover:text-emerald-700 transition cursor-pointer"
            >
              Layar Antrean Publik
            </button>
            <span className="text-gray-300">|</span>
            <button
              onClick={onLogout}
              className="text-xs text-red-600 hover:text-red-800 font-medium transition cursor-pointer"
            >
              Keluar
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Navigasi Tab Status yang Mempermudah Tugas */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b border-gray-200 pb-4">
          <div className="flex gap-2">
            {[
              { id: "Semua", label: "Semua", count: patients.length },
              { id: "Menunggu", label: "Menunggu", count: countMenunggu },
              {
                id: "Sedang Diperiksa",
                label: "Sedang Diperiksa",
                count: countDiperiksa,
              },
              { id: "Selesai", label: "Selesai", count: countSelesai },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-1.5 rounded-md text-xs font-medium transition cursor-pointer flex items-center gap-1.5 ${
                  activeTab === tab.id
                    ? "bg-emerald-700 text-white"
                    : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    activeTab === tab.id
                      ? "bg-emerald-800 text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* Pengujian Dosen & Utilitas Ringan */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode(viewMode === "table" ? "cards" : "table")}
              className="text-xs border border-gray-300 bg-white px-2.5 py-1.5 rounded text-gray-600 hover:bg-gray-50 transition cursor-pointer"
              title="Ganti Mode Tampilan"
            >
              {viewMode === "table" ? "Tampilan Kartu" : "Tampilan Tabel"}
            </button>
            <button
              onClick={onClearAll}
              className="text-xs border border-gray-300 bg-white text-red-600 hover:bg-red-50 px-2.5 py-1.5 rounded transition cursor-pointer"
              title="Uji coba antrean kosong"
            >
              Kosongkan
            </button>
            <button
              onClick={onResetSampleData}
              className="text-xs bg-gray-100 text-gray-700 hover:bg-gray-200 px-2.5 py-1.5 rounded transition cursor-pointer"
              title="Reset data contoh"
            >
              Reset Data
            </button>
          </div>
        </div>

        {/* Filter & Pencarian Cepat */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari nama, tiket, atau NIK..."
            className="w-full sm:w-80 px-3.5 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:border-emerald-600"
          />

          <select
            value={filterPoli}
            onChange={(e) => setFilterPoli(e.target.value)}
            className="w-full sm:w-auto border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white text-gray-700 focus:outline-none focus:border-emerald-600"
          >
            <option value="Semua">Semua Layanan / Poli</option>
            <option value="Pemeriksaan Umum">Pemeriksaan Umum</option>
            <option value="Poli Gigi">Poli Gigi</option>
            <option value="Poli Anak">Poli Anak</option>
            <option value="Poli KIA">Poli KIA</option>
            <option value="Laboratorium">Laboratorium</option>
          </select>
        </div>

        {/* Conditional Rendering saat Kosong */}
        {patients.length === 0 ? (
          <div className="bg-white border border-gray-200 rounded-lg p-12 text-center">
            <h3 className="text-lg font-bold text-gray-800 mb-1">
              Tidak ada data antrean pasien
            </h3>
            <p className="text-xs text-gray-500 mb-4">
              Antrean saat ini kosong.
            </p>
            <button
              onClick={onResetSampleData}
              className="text-xs bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-4 py-2 rounded transition cursor-pointer"
            >
              Muat Data Contoh
            </button>
          </div>
        ) : filteredPatients.length === 0 ? (
          <div className="bg-white border border-gray-200 rounded-lg p-8 text-center text-gray-500 text-xs">
            Tidak ada pasien yang sesuai dengan filter ini.
          </div>
        ) : viewMode === "table" ? (
          /* Tampilan Tabel Kerja Petugas */
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200 text-gray-600 text-xs">
                    <th className="py-3 px-4 font-semibold">No. Tiket</th>
                    <th className="py-3 px-4 font-semibold">Nama Pasien</th>
                    <th className="py-3 px-4 font-semibold">NIK</th>
                    <th className="py-3 px-4 font-semibold">Layanan</th>
                    <th className="py-3 px-4 font-semibold">Waktu Masuk</th>
                    <th className="py-3 px-4 font-semibold">Keluhan</th>
                    <th className="py-3 px-4 font-semibold text-center">Status</th>
                    <th className="py-3 px-4 font-semibold text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredPatients.map((patient) => (
                    <tr key={patient.id} className="hover:bg-gray-50/60 transition">
                      <td className="py-3 px-4 font-mono font-bold text-emerald-800">
                        {patient.id}
                      </td>
                      <td className="py-3 px-4 font-medium text-gray-900">
                        {patient.nama}
                      </td>
                      <td className="py-3 px-4 font-mono text-xs text-gray-600">
                        {patient.nik}
                      </td>
                      <td className="py-3 px-4 text-gray-700">
                        {patient.poli}
                      </td>
                      <td className="py-3 px-4 text-xs text-gray-500">
                        {patient.waktuDaftar}
                      </td>
                      <td className="py-3 px-4 text-xs text-gray-600 max-w-xs truncate">
                        {patient.keluhan}
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span
                          className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${
                            patient.status === "Sedang Diperiksa"
                              ? "bg-emerald-100 text-emerald-800"
                              : patient.status === "Menunggu"
                              ? "bg-amber-100 text-amber-800"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {patient.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <div className="flex items-center justify-center gap-1.5">
                          {patient.status === "Menunggu" && (
                            <button
                              onClick={() =>
                                onUpdateStatus(patient.id, "Sedang Diperiksa")
                              }
                              className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs px-2.5 py-1 rounded transition cursor-pointer"
                            >
                              Panggil
                            </button>
                          )}
                          {patient.status === "Sedang Diperiksa" && (
                            <button
                              onClick={() =>
                                onUpdateStatus(patient.id, "Selesai")
                              }
                              className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-2.5 py-1 rounded transition cursor-pointer"
                            >
                              Selesai
                            </button>
                          )}
                          <button
                            onClick={() => onDeletePatient(patient.id)}
                            className="text-red-500 hover:text-red-700 text-xs px-2 py-1 cursor-pointer"
                          >
                            Hapus
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          /* Tampilan Kartu */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPatients.map((patient) => (
              <PatientCard
                key={patient.id}
                patient={patient}
                isStaff={true}
                onDelete={onDeletePatient}
                onUpdateStatus={onUpdateStatus}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function PatientCard({
  patient,
  isStaff = false,
  onDelete,
  onUpdateStatus,
}) {
  const getStatusStyle = (status) => {
    switch (status) {
      case "Sedang Diperiksa":
        return "bg-emerald-600 text-white";
      case "Menunggu":
        return "bg-amber-100 text-amber-800 border border-amber-300";
      case "Selesai":
        return "bg-gray-100 text-gray-700 border border-gray-300";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 flex flex-col justify-between hover:border-emerald-500 transition">
      <div>
        {/* Nomor Tiket & Status */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold font-mono text-emerald-800">
            {patient.id}
          </span>
          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full ${getStatusStyle(
              patient.status
            )}`}
          >
            {patient.status}
          </span>
        </div>

        {/* Nama Pasien */}
        <h3 className="text-lg font-bold text-gray-900 mb-2">
          {patient.nama}
        </h3>

        {/* Info Tambahan untuk Staf Medis (Privat) */}
        {isStaff && (
          <div className="mb-3 text-xs text-gray-600 font-mono bg-gray-50 p-2 rounded border border-gray-200">
            <div>NIK: {patient.nik}</div>
            {patient.telepon && <div>Telp: {patient.telepon}</div>}
          </div>
        )}

        {/* Info Layanan & Waktu */}
        <div className="text-sm text-gray-600 space-y-1 mb-4">
          <div className="flex justify-between">
            <span className="text-gray-500">Layanan:</span>
            <span className="font-semibold text-gray-800">{patient.poli}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Waktu Masuk:</span>
            <span>{patient.waktuDaftar}</span>
          </div>
        </div>

        {/* Keluhan hanya untuk Petugas Medis */}
        {isStaff && patient.keluhan && (
          <div className="text-xs bg-gray-50 p-2.5 rounded border border-gray-200 mb-4 text-gray-700">
            <span className="font-semibold text-gray-600 block mb-0.5">
              Keluhan:
            </span>
            <p className="italic">"{patient.keluhan}"</p>
          </div>
        )}
      </div>

      {/* Aksi Petugas */}
      {isStaff && (
        <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
          <div className="flex gap-2">
            {patient.status === "Menunggu" && (
              <button
                onClick={() => onUpdateStatus(patient.id, "Sedang Diperiksa")}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-3 py-1.5 rounded transition cursor-pointer"
              >
                Panggil
              </button>
            )}
            {patient.status === "Sedang Diperiksa" && (
              <button
                onClick={() => onUpdateStatus(patient.id, "Selesai")}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-3 py-1.5 rounded transition cursor-pointer"
              >
                Selesai
              </button>
            )}
          </div>

          <button
            onClick={() => onDelete(patient.id)}
            className="text-red-600 hover:text-red-800 text-xs py-1 px-2 cursor-pointer"
          >
            Hapus
          </button>
        </div>
      )}
    </div>
  );
}

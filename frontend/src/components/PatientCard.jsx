export default function PatientCard({ patient, onDelete, onUpdateStatus }) {
  const getStatusBadge = (status) => {
    switch (status) {
      case "Menunggu":
        return "bg-amber-100 text-amber-800 border-amber-300";
      case "Sedang Diperiksa":
        return "bg-blue-100 text-blue-800 border-blue-300";
      case "Selesai":
        return "bg-emerald-100 text-emerald-800 border-emerald-300";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  const getPoliIcon = (poli) => {
    switch (poli) {
      case "Poli Gigi":
        return "fa-tooth";
      case "Poli Anak":
        return "fa-baby";
      case "Poli KIA":
        return "fa-person-breastfeeding";
      case "Laboratorium":
        return "fa-flask-vial";
      default:
        return "fa-stethoscope";
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-1 transition duration-200 border-t-4 border-emerald-600 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="font-bold text-xs bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded border border-emerald-200">
            {patient.id}
          </span>
          <span
            className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${getStatusBadge(
              patient.status
            )}`}
          >
            {patient.status}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-1 flex items-center gap-2">
          <i className="fas fa-user-circle text-emerald-600 text-lg"></i>
          <span>{patient.nama}</span>
        </h3>
        <p className="text-xs text-gray-500 mb-4 font-mono">
          NIK: {patient.nik}
        </p>

        <div className="space-y-2 text-sm text-gray-700 bg-gray-50 p-4 rounded-lg mb-4">
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-500 font-medium">Layanan / Poli:</span>
            <span className="font-bold text-emerald-700 flex items-center gap-1.5">
              <i className={`fas ${getPoliIcon(patient.poli)}`}></i>
              {patient.poli}
            </span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-500 font-medium">Jenis Kelamin:</span>
            <span>{patient.jenisKelamin}</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-500 font-medium">Waktu Daftar:</span>
            <span>{patient.waktuDaftar}</span>
          </div>
          <div className="pt-2 border-t border-gray-200 text-xs">
            <span className="text-gray-500 block mb-0.5">Keluhan Awal:</span>
            <p className="italic text-gray-800 line-clamp-2">"{patient.keluhan}"</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-gray-100 text-xs">
        <div className="flex gap-2">
          {patient.status === "Menunggu" && (
            <button
              onClick={() => onUpdateStatus(patient.id, "Sedang Diperiksa")}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-3 py-1.5 rounded transition cursor-pointer flex items-center gap-1"
            >
              <i className="fas fa-stethoscope"></i>
              <span>Panggil</span>
            </button>
          )}
          {patient.status === "Sedang Diperiksa" && (
            <button
              onClick={() => onUpdateStatus(patient.id, "Selesai")}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-3 py-1.5 rounded transition cursor-pointer flex items-center gap-1"
            >
              <i className="fas fa-check"></i>
              <span>Selesai</span>
            </button>
          )}
        </div>

        <button
          onClick={() => onDelete(patient.id)}
          className="text-red-600 hover:text-red-800 hover:bg-red-50 px-2 py-1.5 rounded transition cursor-pointer flex items-center gap-1"
          title="Hapus data pasien"
        >
          <i className="fas fa-trash-can"></i>
          <span>Hapus</span>
        </button>
      </div>
    </div>
  );
}

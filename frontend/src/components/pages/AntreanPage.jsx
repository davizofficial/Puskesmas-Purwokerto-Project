import PatientList from "../PatientList";

export default function AntreanPage({ patients, onNavigate }) {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-3">
                Antrean Pasien
              </h1>
              <p className="text-lg md:text-xl text-emerald-100">
                Informasi nomor antrean dan status pelayanan pasien hari ini
              </p>
            </div>
            {onNavigate && (
              <div>
                <button
                  onClick={() => onNavigate("pendaftaran")}
                  className="bg-white text-emerald-800 hover:bg-emerald-50 font-bold px-6 py-3 rounded-lg shadow transition cursor-pointer text-sm"
                >
                  Daftar Antrean Baru
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <PatientList patients={patients} />
      </div>
    </div>
  );
}

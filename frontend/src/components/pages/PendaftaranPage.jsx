import PatientForm from "../PatientForm";

export default function PendaftaranPage({ onAddPatient, onNavigate }) {
  return (
    <div>
      {/* Page Header (Persis seperti legacy-html/pendaftaran.html) */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Pendaftaran Pasien</h1>
          <p className="text-xl text-emerald-100">
            Daftar menjadi pasien baru dengan mudah dan cepat
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <PatientForm onAddPatient={onAddPatient} onNavigate={onNavigate} />
      </div>
    </div>
  );
}

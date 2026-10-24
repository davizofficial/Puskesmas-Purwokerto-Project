export default function SummaryCards({ patients }) {
  const total = patients.length;
  const menunggu = patients.filter((p) => p.status === "Menunggu").length;
  const diperiksa = patients.filter((p) => p.status === "Sedang Diperiksa").length;
  const selesai = patients.filter((p) => p.status === "Selesai").length;

  const stats = [
    {
      title: "Pemeriksaan Umum",
      desc: "Pelayanan kesehatan dasar dan konsultasi dokter umum setiap hari.",
      count: patients.filter((p) => p.poli === "Poli Umum").length,
      icon: "fa-stethoscope",
    },
    {
      title: "Gigi & Mulut",
      desc: "Penanganan perawatan gigi, pembersihan karang, dan ekstraksi gigi.",
      count: patients.filter((p) => p.poli === "Poli Gigi").length,
      icon: "fa-tooth",
    },
    {
      title: "Kesehatan Anak & KIA",
      desc: "Layanan imunisasi rutin, tumbuh kembang anak, dan ibu hamil.",
      count: patients.filter((p) => p.poli === "Poli Anak" || p.poli === "Poli KIA").length,
      icon: "fa-baby",
    },
    {
      title: "Laboratorium Klinis",
      desc: "Pemeriksaan tes darah, urin, gula darah, dan tes diagnostik cepat.",
      count: patients.filter((p) => p.poli === "Laboratorium").length,
      icon: "fa-flask-vial",
    },
    {
      title: "Antrean Aktif",
      desc: "Pasien yang sedang dalam ruang tunggu antrean pelayanan hari ini.",
      count: menunggu,
      icon: "fa-clock",
      highlight: true,
    },
    {
      title: "Total Pasien Terdaftar",
      desc: `Total akumulasi ${total} pasien (${selesai} selesai, ${diperiksa} diperiksa).`,
      count: total,
      icon: "fa-users-line",
      highlight: true,
    },
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-8">
        Layanan & Ringkasan Antrean
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition flex flex-col justify-between ${
              item.highlight ? "border-t-4 border-emerald-600 bg-emerald-50/20" : ""
            }`}
          >
            <div>
              <div className="text-emerald-600 text-4xl mb-4">
                <i className={`fas ${item.icon}`}></i>
              </div>
              <h3 className="text-xl font-bold text-emerald-700 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {item.desc}
              </p>
            </div>
            <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
              <span className="text-gray-500 font-medium">Terdaftar Hari Ini:</span>
              <span className="bg-emerald-100 text-emerald-800 font-bold px-2.5 py-1 rounded-full text-xs">
                {item.count} Pasien
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

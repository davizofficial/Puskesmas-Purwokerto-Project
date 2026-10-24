export default function TentangKamiPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Tentang Kami</h1>
          <p className="text-xl text-emerald-100">
            Mengenal lebih dekat Puskesmas Purwokerto
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Sejarah */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-emerald-700 mb-8">
            Sejarah Puskesmas Purwokerto
          </h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-700 leading-relaxed text-lg">
              Puskesmas Purwokerto didirikan pada tahun 2010 dengan visi untuk
              menyediakan layanan kesehatan berkualitas tinggi yang terjangkau bagi
              seluruh masyarakat. Sejak awal berdirinya, kami berkomitmen untuk
              terus berkembang dan meningkatkan standar pelayanan kesehatan.
            </p>
          </div>
        </section>

        {/* Visi & Misi */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-emerald-700 mb-8">Visi & Misi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-emerald-700 mb-4">Visi</h3>
              <p className="text-gray-700 leading-relaxed">
                Menjadi pusat kesehatan masyarakat terdepan yang memberikan layanan
                kesehatan berkualitas tinggi dengan teknologi terkini dan tenaga
                medis profesional.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-emerald-700 mb-4">Misi</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold text-lg flex-shrink-0">
                    <i className="fas fa-check-circle"></i>
                  </span>
                  <span className="text-gray-700">
                    Memberikan layanan kesehatan terbaik
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold text-lg flex-shrink-0">
                    <i className="fas fa-check-circle"></i>
                  </span>
                  <span className="text-gray-700">
                    Meningkatkan kesadaran kesehatan masyarakat
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-600 font-bold text-lg flex-shrink-0">
                    <i className="fas fa-check-circle"></i>
                  </span>
                  <span className="text-gray-700">
                    Menyediakan akses kesehatan yang terjangkau
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Nilai-Nilai */}
        <section>
          <h2 className="text-4xl font-bold text-emerald-700 mb-8">
            Nilai-Nilai Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition">
              <div className="text-emerald-600 text-4xl mb-4">
                <i className="fas fa-heart"></i>
              </div>
              <h3 className="text-xl font-bold text-emerald-700 mb-3">
                Dedikasi
              </h3>
              <p className="text-gray-600">
                Komitmen penuh untuk kesehatan masyarakat
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition">
              <div className="text-emerald-600 text-4xl mb-4">
                <i className="fas fa-handshake"></i>
              </div>
              <h3 className="text-xl font-bold text-emerald-700 mb-3">
                Kepercayaan
              </h3>
              <p className="text-gray-600">Melayani dengan integritas dan jujur</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition">
              <div className="text-emerald-600 text-4xl mb-4">
                <i className="fas fa-star"></i>
              </div>
              <h3 className="text-xl font-bold text-emerald-700 mb-3">
                Keunggulan
              </h3>
              <p className="text-gray-600">
                Memberikan layanan terbaik setiap saat
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

import { useState } from "react";

export default function KontakPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    telp: "",
    subjek: "",
    pesan: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ nama: "", email: "", telp: "", subjek: "", pesan: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Hubungi Kami</h1>
          <p className="text-xl text-emerald-100">
            Kami siap menjawab pertanyaan Anda
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Contact Info */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-emerald-700 mb-12">
            Informasi Kontak
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Info 1 */}
            <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition">
              <div className="text-emerald-600 text-5xl mb-4">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3 className="text-xl font-bold text-emerald-700 mb-3">Alamat</h3>
              <p className="text-gray-600">
                Jln. Kesehatan No. 123
                <br />
                Purwokerto, 53120
              </p>
            </div>

            {/* Info 2 */}
            <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition">
              <div className="text-emerald-600 text-5xl mb-4">
                <i className="fas fa-phone"></i>
              </div>
              <h3 className="text-xl font-bold text-emerald-700 mb-3">Telepon</h3>
              <p className="text-gray-600">
                (0281) 1234-5678
                <br />
                (0281) 8765-4321
              </p>
            </div>

            {/* Info 3 */}
            <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition">
              <div className="text-emerald-600 text-5xl mb-4">
                <i className="fas fa-envelope"></i>
              </div>
              <h3 className="text-xl font-bold text-emerald-700 mb-3">Email</h3>
              <p className="text-gray-600">
                info@puskesmaspurwokerto.id
                <br />
                support@puskesmaspurwokerto.id
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-emerald-700 mb-12">
            Kirim Pesan
          </h2>

          {submitted && (
            <div className="mb-6 p-4 bg-emerald-100 border border-emerald-300 text-emerald-800 rounded-lg font-medium flex items-center gap-2">
              <i className="fas fa-circle-check text-emerald-600 text-lg"></i>
              <span>Pesan Anda telah berhasil dikirim! Tim kami akan segera merespons.</span>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-8">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="block text-emerald-700 font-semibold mb-2">
                      Nama Anda
                    </label>
                    <input
                      type="text"
                      value={formData.nama}
                      onChange={(e) =>
                        setFormData({ ...formData, nama: e.target.value })
                      }
                      placeholder="Masukkan nama"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-emerald-600"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-emerald-700 font-semibold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="Masukkan email"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-emerald-600"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-emerald-700 font-semibold mb-2">
                      Nomor Telepon
                    </label>
                    <input
                      type="tel"
                      value={formData.telp}
                      onChange={(e) =>
                        setFormData({ ...formData, telp: e.target.value })
                      }
                      placeholder="Masukkan nomor telepon"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-emerald-600"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-emerald-700 font-semibold mb-2">
                      Subjek
                    </label>
                    <input
                      type="text"
                      value={formData.subjek}
                      onChange={(e) =>
                        setFormData({ ...formData, subjek: e.target.value })
                      }
                      placeholder="Masukkan subjek pesan"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-emerald-600"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-emerald-700 font-semibold mb-2">
                      Pesan
                    </label>
                    <textarea
                      rows={5}
                      value={formData.pesan}
                      onChange={(e) =>
                        setFormData({ ...formData, pesan: e.target.value })
                      }
                      placeholder="Masukkan pesan Anda"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-emerald-600"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-lg transition cursor-pointer"
                  >
                    Kirim Pesan
                  </button>
                </form>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-green-50 border-l-4 border-emerald-600 rounded-lg p-6 h-fit">
              <h3 className="font-bold text-emerald-700 text-lg mb-4">
                Jam Operasional
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-700">
                    <strong>Hari Kerja</strong>
                  </p>
                  <p className="text-gray-600 text-sm">
                    Senin - Jumat: 08:00 - 17:00 WIB
                  </p>
                </div>
                <div>
                  <p className="text-gray-700">
                    <strong>Hari Sabtu</strong>
                  </p>
                  <p className="text-gray-600 text-sm">08:00 - 12:00 WIB</p>
                </div>
                <div>
                  <p className="text-gray-700">
                    <strong>Libur</strong>
                  </p>
                  <p className="text-gray-600 text-sm">
                    Hari Minggu & Hari Libur Nasional
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

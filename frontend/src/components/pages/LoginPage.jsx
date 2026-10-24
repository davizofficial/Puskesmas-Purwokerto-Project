import { useState } from "react";

export default function LoginPage({
  isStaffLoggedIn,
  onLogin,
  onLogout,
  onNavigate,
}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === "petugas" && password === "puskesmas123") {
      setErrorMessage("");
      onLogin();
      onNavigate("petugas-dashboard");
    } else {
      setErrorMessage("Username atau kata sandi tidak sesuai.");
    }
  };

  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-sm p-8">
        {isStaffLoggedIn ? (
          <div className="text-center">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Sesi Petugas Aktif
            </h2>
            <p className="text-xs text-gray-500 mb-6">
              Anda sudah masuk sebagai petugas.
            </p>

            <div className="space-y-3">
              <button
                onClick={() => onNavigate("petugas-dashboard")}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 rounded-lg transition text-sm cursor-pointer"
              >
                Buka Dashboard
              </button>
              <button
                onClick={onLogout}
                className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-2 rounded-lg transition text-xs cursor-pointer"
              >
                Keluar (Logout)
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Login Petugas
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                Puskesmas Purwokerto
              </p>
            </div>

            {errorMessage && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 text-xs rounded-lg text-center">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Username
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Masukkan username"
                  required
                  className="w-full px-3.5 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-emerald-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Kata Sandi
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full px-3.5 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-emerald-600"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 rounded-lg transition cursor-pointer text-sm shadow-sm"
              >
                Masuk
              </button>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => onNavigate("beranda")}
                className="text-xs text-gray-500 hover:text-emerald-700 transition cursor-pointer"
              >
                &larr; Kembali ke Beranda
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

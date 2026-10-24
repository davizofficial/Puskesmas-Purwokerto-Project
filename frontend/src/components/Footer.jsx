export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-emerald-800 text-white text-center py-8 border-t-4 border-emerald-600 mt-16">
      <div className="container mx-auto px-4">
        <p className="mb-2">
          <strong>Copyright 2026 Puskesmas Purwokerto. Semua Hak Dilindungi.</strong>
        </p>
        <p className="text-emerald-100 text-sm">Kepercayaan Anda adalah Prioritas Kami</p>

        {onNavigate && (
          <div className="mt-4 pt-4 border-t border-emerald-700/60 text-xs text-emerald-200">
            <button
              onClick={() => {
                onNavigate("login");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-emerald-300 hover:text-white transition cursor-pointer"
            >
              Portal Petugas
            </button>
          </div>
        )}
      </div>
    </footer>
  );
}

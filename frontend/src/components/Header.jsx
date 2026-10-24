import { useState } from "react";

export default function Header({ activePage, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: "beranda", label: "Beranda" },
    { id: "layanan", label: "Layanan" },
    { id: "dokter", label: "Dokter" },
    { id: "pendaftaran", label: "Pendaftaran" },
    { id: "antrean", label: "Antrean" },
    { id: "kontak", label: "Kontak" },
    { id: "galeri", label: "Galeri" },
    { id: "tentang-kami", label: "Tentang Kami" },
    { id: "member", label: "Member" },
  ];

  const handleNavClick = (id) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="bg-emerald-800 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo / Brand */}
          <button
            onClick={() => handleNavClick("beranda")}
            className="text-white font-bold text-lg flex items-center hover:opacity-95 transition cursor-pointer"
          >
            <i className="fas fa-hospital mr-2"></i> Puskesmas Purwokerto
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white md:hidden text-2xl focus:outline-none cursor-pointer"
            aria-label="Menu"
          >
            <i
              className={`fas ${
                mobileMenuOpen ? "fa-xmark fa-times" : "fa-bars"
              }`}
            ></i>
          </button>

          {/* Desktop Menu - Bersih murni teks tanpa ikon dan tanpa tombol petugas */}
          <div className="hidden md:flex gap-4 lg:gap-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-white hover:bg-emerald-700 px-3 lg:px-4 py-2 rounded transition cursor-pointer text-sm font-medium ${
                  activePage === item.id ? "bg-emerald-700 font-semibold" : ""
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden pt-4 pb-2 border-t border-emerald-700 mt-3 flex flex-col gap-2"
          >
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left text-white px-4 py-2 rounded transition text-sm ${
                  activePage === item.id
                    ? "bg-emerald-700 font-semibold"
                    : "hover:bg-emerald-700"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Halaman-halaman Publik (99.99% Identik dengan legacy-html)
import HomePage from "./components/pages/HomePage";
import LayananPage from "./components/pages/LayananPage";
import DokterPage from "./components/pages/DokterPage";
import PendaftaranPage from "./components/pages/PendaftaranPage";
import AntreanPage from "./components/pages/AntreanPage";
import KontakPage from "./components/pages/KontakPage";
import GaleriPage from "./components/pages/GaleriPage";
import TentangKamiPage from "./components/pages/TentangKamiPage";
import MemberPage from "./components/pages/MemberPage";

// Halaman Petugas Medis / Autentikasi
import LoginPage from "./components/pages/LoginPage";
import PetugasDashboard from "./components/pages/PetugasDashboard";

// Data awal realistis untuk entitas Pasien (Topik Puskesmas / Kesehatan)
const INITIAL_PATIENTS = [
  {
    id: "PS-1042",
    nama: "Budi Santoso",
    nik: "3302101508920001",
    telepon: "081234567890",
    alamat: "Jln. Jend. Soedirman No. 12, Purwokerto",
    jenisKelamin: "Laki-laki",
    tanggalLahir: "1992-08-15",
    poli: "Pemeriksaan Umum",
    keluhan: "Demam tinggi dan flu batuk berdahak sejak 3 hari",
    waktuDaftar: "08:15 WIB",
    status: "Sedang Diperiksa",
  },
  {
    id: "PS-1043",
    nama: "Siti Rahmawati",
    nik: "3302104512950003",
    telepon: "085678901234",
    alamat: "Jln. Gatot Subroto No. 45, Purwokerto",
    jenisKelamin: "Perempuan",
    tanggalLahir: "1995-12-05",
    poli: "Gigi & Mulut",
    keluhan: "Gigi geraham belakang berlubang dan nyeri saat makan",
    waktuDaftar: "08:30 WIB",
    status: "Menunggu",
  },
  {
    id: "PS-1044",
    nama: "Muhammad Alif Pratama",
    nik: "3302102003180002",
    telepon: "081398765432",
    alamat: "Jln. HR Bunyamin No. 88, Purwokerto",
    jenisKelamin: "Laki-laki",
    tanggalLahir: "2018-03-20",
    poli: "Imunisasi",
    keluhan: "Pemeriksaan imunisasi rutin & pemantauan gizi balita",
    waktuDaftar: "08:45 WIB",
    status: "Menunggu",
  },
  {
    id: "PS-1045",
    nama: "Dewi Lestari",
    nik: "3302105407900004",
    telepon: "082134567891",
    alamat: "Jln. Dr. Angka No. 34, Purwokerto",
    jenisKelamin: "Perempuan",
    tanggalLahir: "1990-07-14",
    poli: "Pemeriksaan Umum",
    keluhan: "Kontrol tensi darah dan keluhan migrain berkala",
    waktuDaftar: "07:55 WIB",
    status: "Selesai",
  },
];

export default function App() {
  const [activePage, setActivePage] = useState("beranda");
  const [isStaffLoggedIn, setIsStaffLoggedIn] = useState(false);

  // 5.a. Simpan daftar item sebagai state (array) di App.jsx
  const [patients, setPatients] = useState(INITIAL_PATIENTS);

  // 5.b. Handler tambah item baru ke state array
  const handleAddPatient = (newPatient) => {
    setPatients((prev) => [newPatient, ...prev]);
  };

  // Handler hapus pasien
  const handleDeletePatient = (patientId) => {
    setPatients((prev) => prev.filter((p) => p.id !== patientId));
  };

  // Handler update status pasien (Panggil / Selesai)
  const handleUpdateStatus = (patientId, newStatus) => {
    setPatients((prev) =>
      prev.map((p) => (p.id === patientId ? { ...p, status: newStatus } : p))
    );
  };

  // Handler pengujian conditional rendering: Kosongkan data
  const handleClearAll = () => {
    setPatients([]);
  };

  // Handler pengujian: Pulihkan data contoh
  const handleResetSampleData = () => {
    setPatients(INITIAL_PATIENTS);
  };

  // Handler Login & Logout Petugas
  const handleLogin = () => {
    setIsStaffLoggedIn(true);
  };

  const handleLogout = () => {
    setIsStaffLoggedIn(false);
    setActivePage("beranda");
  };

  return (
    <div className="bg-gray-50 font-sans min-h-screen flex flex-col justify-between text-gray-800">
      {/* 1. Header Global (Navigasi Bersih 100% Identik) */}
      <Header activePage={activePage} onNavigate={setActivePage} />

      {/* 2. Main Content sesuai halaman aktif */}
      <main className="flex-1">
        {activePage === "beranda" && <HomePage onNavigate={setActivePage} />}
        {activePage === "layanan" && <LayananPage />}
        {activePage === "dokter" && <DokterPage />}
        {activePage === "pendaftaran" && (
          <PendaftaranPage
            onAddPatient={handleAddPatient}
            onNavigate={setActivePage}
          />
        )}
        {activePage === "antrean" && (
          <AntreanPage patients={patients} onNavigate={setActivePage} />
        )}
        {activePage === "kontak" && <KontakPage />}
        {activePage === "galeri" && <GaleriPage />}
        {activePage === "tentang-kami" && <TentangKamiPage />}
        {activePage === "member" && <MemberPage />}
        {activePage === "login" && (
          <LoginPage
            isStaffLoggedIn={isStaffLoggedIn}
            onLogin={handleLogin}
            onLogout={handleLogout}
            onNavigate={setActivePage}
          />
        )}
        {activePage === "petugas-dashboard" &&
          (isStaffLoggedIn ? (
            <PetugasDashboard
              patients={patients}
              onDeletePatient={handleDeletePatient}
              onUpdateStatus={handleUpdateStatus}
              onResetSampleData={handleResetSampleData}
              onClearAll={handleClearAll}
              onLogout={handleLogout}
              onNavigate={setActivePage}
            />
          ) : (
            <LoginPage
              isStaffLoggedIn={isStaffLoggedIn}
              onLogin={handleLogin}
              onLogout={handleLogout}
              onNavigate={setActivePage}
            />
          ))}
      </main>

      {/* 3. Footer Global */}
      <Footer onNavigate={setActivePage} />
    </div>
  );
}

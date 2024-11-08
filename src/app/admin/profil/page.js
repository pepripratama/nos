'use client'; // Menambahkan directive untuk menjadikan komponen ini sebagai client component

import { useState } from 'react';
import Tambah from './tambah';

export default function Profil() {
  const [showTambah, setShowTambah] = useState(false);

  const btnTambahHandle = () => {
    setShowTambah(true);
  };

  return (
    <div className="text-3xl font-bold text-center">
      <h3>Ini adalah halaman profil</h3>
      <button onClick={btnTambahHandle} className="bg-blue-500 px-5 py-2 text-white">
        Tambah Profil
      </button>

      {showTambah && <Tambah onClose={() => setShowTambah(false)} />}
    </div>
  );
}

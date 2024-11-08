"use client";

import "../globals.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import Link from "next/link";

export default function RootLayout({ children }) {
  const [isLogin, setIsLogin] = useState(true);
  // const router = useRouter(); // Menggunakan useRouter untuk navigasi

  // useEffect(() => {
  //   const value = localStorage.getItem("token");
  //   if (value) {
  //     setIsLogin(value);
  //   } else {
  //     router.push("/login"); // Menggunakan router.push untuk berpindah halaman
  //   }
  // }, []); // Kosongkan array dependensi agar efek hanya dijalankan sekali

  return (
    <html lang="en">
      <body>
        {isLogin && (
          <div>
            <div>
              <Link className="text-blue-500" href="/admin/">
                Home
              </Link>
            </div>
            <div>
              <Link className="text-blue-500" href="/admin/about">
                About
              </Link>
            </div>
            <div>
              <Link className="text-blue-500" href="/admin/profil">
                Profil
              </Link>
            </div>
          </div>
        )}
        {children}
      </body>
    </html>
  );
}

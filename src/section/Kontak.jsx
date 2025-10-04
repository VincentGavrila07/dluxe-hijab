import React, { useState } from "react";
import { Phone, Mail, Instagram } from "lucide-react";

const TikTokIcon = ({ size = 16, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 448 512"
    width={size}
    height={size}
    className={className}
  >
    <path d="M448,209.9a210.1,210.1,0,0,1-122.77-39.23V349.06A162,162,0,1,1,185.55,188v86.41A74.66,74.66,0,1,0,236.65,342V0h88.58A121.29,121.29,0,0,0,448,121.3Z" />
  </svg>
);

const Footer = () => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    const phone = "6285179853547"; // Nomor WA tanpa +
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <footer className="bg-[#1A1A1A] text-gray-300 pt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-gray-700">
        
        {/* Left - Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">DluxeHijab</h2>
          <p className="text-sm leading-relaxed">
            Kami menghadirkan hijab berkualitas tinggi dengan desain elegan,
            bahan nyaman, dan warna yang tahan lama. Tampil percaya diri setiap hari
            bersama DluxeHijab.
          </p>
        </div>

        {/* Middle - Navigation */}
        <div>
          <h4 className="font-semibold text-white mb-4">Navigasi</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Produk</a></li>
            <li><a href="#" className="hover:text-white">Layanan</a></li>
            <li><a href="#" className="hover:text-white">Tentang Kami</a></li>
            <li><a href="#" className="hover:text-white">Kontak</a></li>
          </ul>
        </div>

        {/* Middle - Contact */}
        <div>
          <h4 className="font-semibold text-white mb-4">Kontak</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={16} /> +62 851-7985-3547
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> DluxeHijab@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <Instagram size={16} /> @DluxeHijab
            </li>
            <li className="flex items-center gap-2">
              <TikTokIcon size={16} className="text-white" /> @dluxehijab_
            </li>
          </ul>
        </div>

        {/* Right - WhatsApp Box */}
        <div>
          <h4 className="font-semibold text-white mb-4">Hubungi via WhatsApp</h4>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <textarea
              className="w-full p-2 border rounded-md text-black text-sm"
              rows="3"
              placeholder="Tulis pesan kamu..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              onClick={handleSend}
              className="mt-3 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md text-sm font-semibold"
            >
              Kirim ke WhatsApp
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-gray-500 text-sm py-4">
        © 2025 DluxeHijab. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

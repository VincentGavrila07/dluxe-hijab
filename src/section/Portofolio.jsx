import React from "react";
import { Star, Users, MapPin } from "lucide-react";

const Portfolio = () => {
  const items = [
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      title: "Koleksi Elegant Series",
      desc: "Best seller 2024 dengan ribuan hijab terjual di seluruh Indonesia.",
    },
    {
      icon: <Users className="w-8 h-8 text-pink-500" />,
      title: "Kolaborasi Influencer",
      desc: "Bekerja sama dengan selebgram & influencer muslimah populer.",
    },
    {
      icon: <MapPin className="w-8 h-8 text-green-500" />,
      title: "Distribusi Nasional",
      desc: "Produk sudah tersebar di berbagai kota besar Indonesia.",
    },
  ];

  return (
    <section className="bg-white py-16" id="portofolio">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-black mb-12">
            Portofolio <span className="text-[#D4AF37]">dan Hasil Kerja</span>
          </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Perjalanan DluxeHijab dalam menghadirkan hijab berkualitas tinggi
          untuk muslimah Indonesia.
        </p>

        {/* Grid Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white border rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

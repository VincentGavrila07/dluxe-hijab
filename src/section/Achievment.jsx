import React from "react";
import { Award, Newspaper, Users } from "lucide-react";

const Achievement = () => {
  const data = [
    {
      icon: <Award className="w-6 h-6 text-yellow-400" />,
      title: "Terdaftar Resmi",
      desc: "Diakui sebagai brand fashion muslim lokal.",
    },
    {
      icon: <Newspaper className="w-6 h-6 text-blue-400" />,
      title: "Liputan Media Fashion",
      desc: "Mendapat perhatian media fashion muslim (opsional).",
    },
    {
      icon: <Users className="w-6 h-6 text-green-400" />,
      title: "Ribuan Pelanggan Loyal",
      desc: "Dipercaya oleh pelanggan di seluruh Indonesia.",
    },
  ];

  return (
    <section className="bg-[#1A1A1A] py-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-12">
          Prestasi & Penghargaan
        </h2>

        {/* Timeline */}
        <div className="relative border-l-2 border-gray-600">
          {data.map((item, i) => (
            <div key={i} className="mb-10 ml-6">
              {/* Icon */}
              <span className="absolute -left-3 flex items-center justify-center w-8 h-8 bg-[#1A1A1A] border-2 border-yellow-400 rounded-full">
                {item.icon}
              </span>

              {/* Content */}
              <h3 className="font-semibold text-lg text-white mb-1">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievement;

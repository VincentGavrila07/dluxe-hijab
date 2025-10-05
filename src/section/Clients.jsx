import React from "react";
import { UserCheck, Store, Sparkles } from "lucide-react";

const Clients = () => {
  const data = [
    {
      icon: <UserCheck className="w-8 h-8 text-white" />,
      title: "Muslimah Muda & Profesional",
      desc: "Dipercaya oleh generasi muslimah modern untuk tampil elegan dan percaya diri.",
    },
    {
      icon: <Store className="w-8 h-8 text-white" />,
      title: "Reseller & Agen",
      desc: "Berkolaborasi dengan reseller dan agen di berbagai kota besar Indonesia.",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-white" />,
      title: "Kolaborasi Influencer",
      desc: "Bekerja sama dengan influencer fashion muslimah ternama.",
    },
  ];

  return (
    <section className="bg-white py-20" id="clients">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Klien & Partner
        </h2>
        <p className="text-gray-600 mb-16">
          Telah dipercaya oleh berbagai kalangan muslimah dan partner bisnis
          di seluruh Indonesia.
        </p>

        {/* Horizontal Timeline */}
        <div className="relative flex items-center justify-between">
          {/* Garis horizontal */}
          <div className="absolute top-5 left-0 right-0 h-[2px] bg-gradient-to-r from-yellow-400 to-yellow-600 z-0"></div>

          {data.map((item, i) => (
            <div
              key={i}
              className="relative z-10 flex flex-col items-center w-1/3 px-4"
            >
              {/* Icon dalam lingkaran gold */}
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-lg shadow-yellow-200 mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
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

export default Clients;

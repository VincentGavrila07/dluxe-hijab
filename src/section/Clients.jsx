import React from "react";
import { motion } from "framer-motion";
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
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-black mb-6"
        >
          Client <span className="text-[#D4AF37]">dan Partner</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 mb-16"
        >
          Telah dipercaya oleh berbagai kalangan muslimah dan partner bisnis di
          seluruh Indonesia.
        </motion.p>

        {/* Timeline */}
        <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-12 md:gap-0">
          {/* Garis horizontal hanya di desktop */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-[2px] bg-gradient-to-r from-yellow-400 to-yellow-600 z-0"></div>

          {data.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative z-10 flex flex-col items-center md:w-1/3 text-center"
            >
              {/* Icon dalam lingkaran gold */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-md shadow-yellow-200 mb-4"
              >
                {item.icon}
              </motion.div>

              <h3
                className={`${
                  i === 0
                    ? "text-base md:text-lg"
                    : "text-lg"
                } font-semibold text-gray-900 mb-2`}
              >
                {item.title}
              </h3>
              <p
                className={`text-gray-600 ${
                  i === 0 ? "text-xs md:text-sm" : "text-sm"
                } px-4 md:px-0`}
              >
                {item.desc}
              </p>

              {/* Garis vertikal di mobile */}
              {i !== data.length - 1 && (
                <div className="md:hidden w-[2px] h-10 bg-gradient-to-b from-yellow-400 to-yellow-600 my-6"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;

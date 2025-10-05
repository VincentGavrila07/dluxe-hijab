import React from "react";
import { FaTrophy, FaLightbulb, FaAngleRight } from "react-icons/fa";

const AboutSection = () => {
  const missions = [
    "Memberikan produk hijab dengan kualitas bahan terbaik dan desain eksklusif.",
    "Menginspirasi muslimah untuk percaya diri dengan gaya yang elegan.",
    "Membangun komunitas muslimah yang positif dan saling mendukung",
  ];

  return (
    <section id="about">
      {/* === Intro & Image === */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10">
          {/* Image (kiri di desktop) */}
          <div className="relative order-2 md:order-1">
            <img
              src="/assets/Profile.jpeg"
              alt="Construction"
              className="w-full h-[400px] object-cover rounded-3xl shadow-lg"
            />
          </div>

          {/* Text (kanan di desktop) */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-extrabold  text-black mb-10">
            Welcome To <span className="text-[#D4AF37]">D'luxe Hijab</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Dluxe Hijab adalah brand fashion muslim yang berfokus pada hijab
              modern dengan kualitas premium, desain elegan, dan kenyamanan
              maksimal. Didirikan dengan semangat untuk menghadirkan hijab yang
              tidak hanya indah dipandang tetapi juga praktis digunakan
              sehari-hari, Dluxe Hijab kini terus berkembang menjadi pilihan
              utama wanita muslimah yang ingin tampil stylish namun tetap syar’i.
            </p>
          </div>
        </div>
      </div>

      {/* === Vision & Mission (full black section) === */}
      <div className="bg-[#1A1A1A] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-12">
            Our <span className="text-[#D4AF37]">Vision and Mission</span>
          </h2>

          {/* Vision */}
          <div className="flex items-start gap-4 mb-10 text-left">
            <FaTrophy className="text-[#D4AF37] text-4xl mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold text-[#D4AF37] mb-2 border-b-2 border-[#D4AF37] inline-block">
                Vision
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Menjadi brand hijab lokal terdepan yang dikenal luas di Indonesia maupun mancanegara dengan menghadirkan produk berkualitas tinggi.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="flex items-start gap-4 text-left">
            <FaLightbulb className="text-[#D4AF37] text-4xl mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold text-[#D4AF37] mb-4 border-b-2 border-[#D4AF37] inline-block">
                Mission
              </h3>
              <ul className="space-y-2 text-gray-300">
                {missions.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <FaAngleRight className="text-[#D4AF37] mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

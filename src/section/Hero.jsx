import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#1A1A1A] text-white h-auto md:min-h-screen flex items-center relative overflow-hidden pt-8 pb-10 md:pt-20 md:pb-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center relative z-10 w-full mb-15 md:mb-0">
        {/* Text Content */}
        <div className='pt-16 md:pt-0 pb-32 md:pb-0'> 
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            <span className="text-[#D4AF37]">Elegance </span> in <br />
            Every Veil.
          </h1>
          <p className="text-gray-300 max-w-lg text-sm md:text-base mt-4">
            Menjadi brand hijab lokal terdepan yang dikenal luas di Indonesia
            maupun mancanegara dengan menghadirkan produk berkualitas tinggi.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button className="px-6 py-3 bg-[#D4AF37] text-[#1A1A1A] font-semibold rounded-md hover:bg-[#b8922d] transition cursor-pointer">
              Get Started
            </button>
            <button className="relative px-6 py-3 border-2 border-[#D4AF37] text-[#D4AF37] font-semibold rounded-md overflow-hidden group cursor-pointer">
              <span className="relative z-10 transition-colors duration-300 group-hover:text-[#1A1A1A]">
                Our Service
              </span>
              <span className="absolute left-0 top-0 h-full w-0 bg-[#D4AF37] transition-all duration-500 group-hover:w-full"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Image anchored to bottom */}
      <div className="absolute bottom-0 right-0 w-full md:w-1/2 flex justify-center md:justify-end">
        <img
          src="/assets/Hero.png"
          alt="Hero Person"
          // PERUBAHAN DI SINI: Ukuran gambar diperbesar untuk mobile
          className="w-[85%] max-w-[280px] md:w-[120%] md:max-w-3xl object-contain md:object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
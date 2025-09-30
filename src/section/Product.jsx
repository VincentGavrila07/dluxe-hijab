import React from "react";

const Product = () => {
  return (
    <section className="relative">
      {/* Background Split with Concave Curve */}
      <div className="absolute inset-0">
        {/* Bagian Putih */}
        <div className="h-1/2 bg-white"></div>
        {/* Bagian Hitam + Lengkungan */}
        <div className="relative h-1/2 bg-[#1A1A1A]">
          <svg
            className="absolute -top-20 left-0 w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#000000"
              d="M0,192 C360,300 1080,80 1440,192 L1440,320 L0,320 Z"
            ></path>
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Title */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Produk & Layanan
          </h2>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Explore All →
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            {
              title: "Hijab Premium",
              price: "Pashmina, segi empat, instan.",

            },
            {
              title: "Aksesoris Hijab",
              price: "Inner, ciput, bros.",

            },
            {
              title: "Exclusive Collection",
              price: "Edisi terbatas dengan desain khas Dluxe Hijab.",

            },
          ].map((home, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="h-48 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">{home.title}</h3>
                <p className="text-sm text-gray-500">Dluxe Hijab</p>
               
                <p className="mt-3 font-bold">{home.price}</p>
                <button className="relative mt-3 px-5 py-2 border-2 border-yellow-500 text-yellow-600 font-medium rounded-md overflow-hidden group">
                  <span className="relative z-10 group-hover:text-black">
                    Check Now
                  </span>
                  <span className="absolute inset-0 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="bg-black text-white p-6 rounded-lg max-w-2xl">
          <p className="italic mb-3">
            "Elegance in Every Veil."
          </p>
          <p className="font-semibold">DluxeHijab</p>
        </div>
      </div>
    </section>
  );
};

export default Product;

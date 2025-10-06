import React from "react";
import { CheckCircle } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

// ----------- DATA FOTO BARU -----------
// Anda bisa menambahkan URL gambar nyata di sini.
// Pastikan gambar-gambar ini ada di folder 'public' atau di hosting gambar.
// Contoh: "/images/cokelat-cream-1.jpg"
// ----------- DATA FOTO BARU ------------
const productColors = [
  {
    name: "Cokelat Cream",
    images: ["/assets/ck1.jpeg", "/assets/ck2.jpeg", "/assets/ck3.jpeg", "/assets/ck4.jpeg"],
  },
  {
    name: "Biru Dongker",
    images: ["/assets/bd1.jpeg", "/assets/bd2.jpeg", "/assets/bd3.jpeg", "/assets/bd4.jpeg"],
  },
  {
    name: "Abu-Abu",
    images: ["/assets/abu1.jpeg", "/assets/abu2.jpeg", "/assets/abu3.jpeg", "/assets/abu4.jpeg"],
  },
  {
    name: "Cokelat Umber",
    images: ["/assets/ck1.jpeg", "/assets/ck2.jpeg", "/assets/ck3.jpeg", "/assets/ck4.jpeg"],
  },
  {
    name: "Baby Pink",
    images: ["/assets/bp1.jpeg", "/assets/bp3.jpeg", "/assets/bp5.jpeg", "/assets/bp4.jpeg"],
  },
  {
    name: "Ungu Iris",
    images: ["/assets/ui1.jpeg", "/assets/ui2.jpeg", "/assets/ui3.jpeg", "/assets/ui4.jpeg"],
  },
  {
    name: "Putih Mutiara",
    images: ["/assets/pm1.jpeg", "/assets/pm2.jpeg", "/assets/pm3.jpeg", "/assets/pm4.jpeg"],
  },
];

// -------------------------------------

const Product = () => {
  return (
    <section className="bg-white" id="product">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Title */}
        <div className="flex flex-col items-center mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-12">
            Produk <span className="text-[#D4AF37]">dan Layanan</span>
          </h2>
          {/* <a href="#" className="text-gray-600 hover:text-gray-900">
            Explore All →
          </a> */}
        </div>


        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            {
              title: "Hijab Premium",
              price: "Pashmina, segi empat, instan.",
              image: "/assets/ck1.jpeg",
            },
            {
              title: "Aksesoris Hijab",
              price: "Inner, ciput, bros.",
              image: "/assets/ck1.jpeg",
            },
            {
              title: "Exclusive Collection",
              price: "Edisi terbatas dengan desain khas Dluxe Hijab.",
              image: "/assets/ck1.jpeg",
            },
          ].map((home, i) => (
            <div
              key={i}
              className="bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Gambar produk */}
              <img
                src={home.image}
                alt={home.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-4">
                <h3 className="font-semibold text-gray-900">{home.title}</h3>
                <p className="text-sm text-gray-500">Dluxe Hijab</p>
                <p className="mt-3 font-bold">{home.price}</p>

                <button className="relative mt-3 px-5 py-2 border-2 border-yellow-500 text-yellow-600 font-medium rounded-md overflow-hidden group">
                  <a
                    className="relative z-10 group-hover:text-[#1A1A1A]"
                    href="#collection"
                  >
                    Check Now
                  </a>
                  <span className="absolute inset-0 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </button>
              </div>
            </div>
          ))}
        </div>


        {/* Kelebihan Produk */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-black mb-12">
            Kelebihan Produk <span className="text-[#D4AF37]">D'luxe Hijab</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-left">
              {[
                "Bahan berkualitas, adem & nyaman",
                "Warna tahan lama & tidak mudah pudar",
                "Model timeless & mudah dipadukan",
                "Harga kompetitif",
              ].map((item, i) => (
                <li key={i} className="flex items-center">
                  <CheckCircle className="text-green-500 w-5 h-5 mr-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <section id="collection">
        {/* Produk Berdasarkan Warna */}
        <div className="bg-[#1A1A1A] py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-12">
              Koleksi <span className="text-[#D4AF37]">Berdasarkan Warna</span>
            </h2>
            <Swiper
              modules={[Navigation]}
              navigation
              spaceBetween={30}
              slidesPerView={1}
            >
              {productColors.map((colorData, idx) => ( // Mengubah `color` menjadi `colorData`
                <SwiperSlide key={idx}>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h4 className="font-semibold text-lg mb-4 text-center text-gray-900">
                      {colorData.name} {/* Menggunakan colorData.name */}
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-items-center">
                      {colorData.images.map((imageSrc, n) => (
                        <div
                          key={n}
                          className="relative w-full max-w-[250px] pb-[130%] rounded-lg overflow-hidden shadow-sm"
                        >
                          <img
                            src={imageSrc}
                            alt={`Foto ${n + 1} ${colorData.name}`}
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>


      {/* Testimonial */}
      <div className="bg-[#1A1A1A] text-white p-6 text-center">
        <p className="italic mb-3">"Elegance in Every Veil."</p>
        <p className="font-semibold">DluxeHijab</p>
      </div>
    </section>
  );
};

export default Product;
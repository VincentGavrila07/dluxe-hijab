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
const productColors = [
  {
    name: "Cokelat Cream",
    images: [
      "/images/cokelat-cream-1.jpg",
      "/images/cokelat-cream-2.jpg",
      "/images/cokelat-cream-3.jpg",
      "/images/cokelat-cream-4.jpg",
    ],
  },
  {
    name: "Biru Dongker",
    images: [
      "/images/biru-dongker-1.jpg",
      "/images/biru-dongker-2.jpg",
      "/images/biru-dongker-3.jpg",
      "/images/biru-dongker-4.jpg",
    ],
  },
  {
    name: "Abu-Abu",
    images: [
      "/images/abu-abu-1.jpg",
      "/images/abu-abu-2.jpg",
      "/images/abu-abu-3.jpg",
      "/images/abu-abu-4.jpg",
    ],
  },
  {
    name: "Cokelat Umber",
    images: [
      "/images/cokelat-umber-1.jpg",
      "/images/cokelat-umber-2.jpg",
      "/images/cokelat-umber-3.jpg",
      "/images/cokelat-umber-4.jpg",
    ],
  },
  {
    name: "Baby Pink",
    images: [
      "/images/baby-pink-1.jpg",
      "/images/baby-pink-2.jpg",
      "/images/baby-pink-3.jpg",
      "/images/baby-pink-4.jpg",
    ],
  },
  {
    name: "Ungu Iris",
    images: [
      "/images/ungu-iris-1.jpg",
      "/images/ungu-iris-2.jpg",
      "/images/ungu-iris-3.jpg",
      "/images/ungu-iris-4.jpg",
    ],
  },
  {
    name: "Putih Mutiara",
    images: [
      "/images/putih-mutiara-1.jpg",
      "/images/putih-mutiara-2.jpg",
      "/images/putih-mutiara-3.jpg",
      "/images/putih-mutiara-4.jpg",
    ],
  },
];
// -------------------------------------

const Product = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Title */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Produk & Layanan</h2>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Explore All →
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { title: "Hijab Premium", price: "Pashmina, segi empat, instan." },
            { title: "Aksesoris Hijab", price: "Inner, ciput, bros." },
            {
              title: "Exclusive Collection",
              price: "Edisi terbatas dengan desain khas Dluxe Hijab.",
            },
          ].map((home, i) => (
            <div
              key={i}
              className="bg-white border rounded-lg shadow-md overflow-hidden"
            >
              <div className="h-48 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">{home.title}</h3>
                <p className="text-sm text-gray-500">Dluxe Hijab</p>
                <p className="mt-3 font-bold">{home.price}</p>
                <button className="relative mt-3 px-5 py-2 border-2 border-yellow-500 text-yellow-600 font-medium rounded-md overflow-hidden group">
                  <span className="relative z-10 group-hover:text-[#1A1A1A]">
                    Check Now
                  </span>
                  <span className="absolute inset-0 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Kelebihan Produk */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Kelebihan Produk Dluxe Hijab
          </h3>
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

      {/* Produk Berdasarkan Warna */}
      <div className="bg-[#1A1A1A] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Koleksi Berdasarkan Warna
          </h3>
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
                  <div className="grid grid-cols-2 gap-4">
                    {colorData.images.map((imageSrc, n) => ( // Mengulang berdasarkan array images
                      <div
                        key={n}
                        className="relative w-full pb-[150%] rounded-lg overflow-hidden" // pb-[150%] untuk rasio potret 2:3
                      >
                        <img
                          src={imageSrc} // Sumber gambar dari data
                          alt={`Foto ${n + 1} ${colorData.name}`} // Alt text yang deskriptif
                          className="absolute inset-0 w-full h-full object-cover" // Gambar mengisi div
                        />
                        {/* Jika Anda ingin teks overlay, Anda bisa menambahkannya di sini */}
                        {/* <span className="absolute bottom-2 left-2 text-white text-xs bg-black bg-opacity-50 p-1 rounded">
                          Foto {n + 1} {colorData.name}
                        </span> */}
                      </div>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Testimonial */}
      <div className="bg-[#1A1A1A] text-white p-6 text-center">
        <p className="italic mb-3">"Elegance in Every Veil."</p>
        <p className="font-semibold">DluxeHijab</p>
      </div>
    </section>
  );
};

export default Product;
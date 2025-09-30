import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WaFloating = () => {
  const phoneNumber = "6285179853547";

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all animate-bounce"
      title="Chat via WhatsApp"
    >
      <FaWhatsapp size={24} />
    </a>
  );
};

export default WaFloating;

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const menuItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Products", href: "#product" },
  { name: "Portofolio", href: "#portofolio" },
  { name: "Achievment", href: "#achievement" },
  { name: "Partner", href: "#clients" },
  { name: "Contact", href: "#kontak" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ease-in-out border-b-[1px] border-[#D4AF37] ${
        open
          ? "bg-black"
          : "bg-black md:bg-black/40 md:backdrop-blur-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="tracking-wide">
          <img
            src="/assets/LogoText.png"
            alt="Dluxe Hijab"
            className="w-24 h-16"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <li key={item.name} className="relative group">
              <a
                href={item.href}
                className="text-white transition duration-200 hover:text-[#D4AF37]"
              >
                {item.name}
              </a>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-[#D4AF37] transition-transform duration-300 hover:scale-110"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gradient-to-b from-black to-[#1A1A1A] shadow-lg border-l-[2px] border-[#D4AF37] transform transition-all duration-500 ease-in-out ${
          open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setOpen(false)}
            className="text-[#D4AF37] transition-transform duration-300 hover:rotate-90"
          >
            <X size={28} />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col items-start p-6 gap-6">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-white text-lg hover:text-[#D4AF37] transition"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

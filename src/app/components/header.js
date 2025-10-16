"use client";
import { Phone } from "lucide-react";

export default function Header() {
  return (
    <header
      className="bg-[#090E1A] text-white w-full h-[76px] flex items-center justify-between px-12 
      sticky top-0 left-0 z-50 backdrop-blur-md bg-opacity-95 shadow-md"
    >
      {/* Left Section - Logo */}
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 rounded-full border border-[#D4AF37] flex items-center justify-center">
          <span className="text-[#D4AF37] text-lg font-bold">✿</span>
        </div>
        <h1 className="text-2xl font-semibold">
          <span className="text-[#D4AF37]">K</span>M
        </h1>
      </div>

      {/* Middle Section - Nav Links */}
      <nav className="flex items-center space-x-10 text-sm font-semibold">
        <a href="#" className="text-[#D4AF37]">HOME</a>
        <a href="#" className="hover:text-[#D4AF37]">ABOUT</a>
        <a href="#" className="hover:text-[#D4AF37]">RESUME</a>
        <a href="#" className="hover:text-[#D4AF37]">PORTFOLIO</a>
        <a href="#" className="hover:text-[#D4AF37]">BLOG</a>
        <a href="#" className="hover:text-[#D4AF37]">CONTACT</a>
      </nav>

      {/* Right Section - Divider + Phone */}
      <div className="flex items-center space-x-6">
        <div className="h-5 w-px bg-gray-500"></div>
        <div className="flex items-center space-x-2">
          <Phone size={16} className="text-[#D4AF37]" />
          <span className="text-[#D4AF37] text-sm font-medium">
            +1 971 234 1508
          </span>
        </div>
      </div>
    </header>
  );
}

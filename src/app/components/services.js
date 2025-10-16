"use client";
import { PenTool, Layout, Package, Smartphone, Film, Monitor } from "lucide-react";

export default function Services() {
  const services = [
    { icon: <PenTool size={48} />, title: "Sketches" },
    { icon: <Layout size={48} />, title: "UI/UX Design" },
    { icon: <Package size={48} />, title: "Product Design" },
    { icon: <Smartphone size={48} />, title: "App Design" },
    { icon: <Film size={48} />, title: "Motion Graphics" },
    { icon: <Monitor size={48} />, title: "Responsive Design" },
  ];

  return (
    <section className="relative w-full min-h-screen bg-[#090E1A] text-white flex flex-col items-center justify-center px-6 md:px-20 py-24 overflow-hidden">
      {/* Faint Background Text */}
      <h2 className="absolute text-[3rem] md:text-[3.5rem] font-extrabold text-white/5 tracking-widest select-none top-20">
        SERVICES
      </h2>

      {/* Section Heading */}
      <div className="relative z-10 text-center mb-16">
        <h3 className="text-[#D4AF37] text-xl font-semibold tracking-[4px] uppercase relative inline-block">
          SERVICES
          <span className="absolute left-0 right-0 mx-auto bottom-[-10px] w-16 h-[2px] bg-[#D4AF37]"></span>
        </h3>
      </div>

      {/* Services Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full">
        {services.map((service, index) => (
          <div
            key={index}
            className="group flex flex-col items-center text-center p-10 border border-[#1E2432] rounded-md transition-all duration-300 hover:border-[#D4AF37]/40"
          >
            <div className="text-[#6B7280] mb-6 transition-all duration-300 group-hover:text-[#D4AF37]">
              {service.icon}
            </div>
            <h4 className="text-lg font-semibold mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">
              {service.title}
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed max-w-[240px]">
              Lorem ipsum dolor sittem ametamn elit, per sed do eiusmod teimpor
              sittem elit inuning utsed sittem.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import { Code2, Brush, Camera, Monitor, PenTool, Globe } from "lucide-react";

export default function Portfolios() {
  const portfolios = [
    { id: 1, icon: <Code2 size={60} />, label: "Web Dev" },
    { id: 2, icon: <Brush size={60} />, label: "Design" },
    { id: 3, icon: <Camera size={60} />, label: "Photography" },
    { id: 4, icon: <Monitor size={60} />, label: "UI/UX" },
    { id: 5, icon: <PenTool size={60} />, label: "Branding" },
    { id: 6, icon: <Globe size={60} />, label: "Marketing" },
  ];

  return (
    <section
      id="portfolio"
      className="bg-[#121623] text-white py-20 flex flex-col items-center relative"
    >
      {/* Title Section */}
      <div className="relative flex flex-col items-center mb-16">
        {/* Fainted Text Behind */}
        <h2 className="absolute text-[90px] md:text-[110px] font-extrabold text-[#05081A] opacity-30 select-none pointer-events-none leading-none">
          PORTFOLIOS
        </h2>

        {/* Yellow Text On Top */}
        <div className="relative flex flex-col items-center">
          <h2 className="text-[#FFD700] text-[36px] md:text-[42px] font-semibold tracking-wide leading-none">
            PORTFOLIOS
          </h2>
          {/* Yellow Underline */}
          <div className="mt-2 w-20 h-[3px] bg-[#FFD700] rounded-full"></div>
        </div>
      </div>

      {/* Grid with Icons */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 gap-10"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        {portfolios.map((item) => (
          <motion.div
            key={item.id}
            className="relative rounded-2xl overflow-hidden bg-[#1A1F2E] flex flex-col items-center justify-center gap-4 cursor-pointer border border-[#1F2535] hover:border-[#FFD700] transition-all duration-300 p-10 group"
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ duration: 0.4 }}
          >
            {/* Icon */}
            <div className="text-[#FFD700] transition-transform duration-500 group-hover:scale-110">
              {item.icon}
            </div>

            {/* Label */}
            <p className="text-white font-medium text-lg tracking-wide">
              {item.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

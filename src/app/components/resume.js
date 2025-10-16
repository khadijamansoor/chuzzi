"use client";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative bg-[#090E1A] text-white py-20 px-6 md:px-20"
    >
      {/* RESUME Heading */}
      <div className="relative text-center mb-12">
        {/* Fainted RESUME */}
        <h2
          className="absolute text-[70px] md:text-[90px] font-extrabold text-[#0B1222] opacity-20 
          top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap select-none"
        >
          RESUME
        </h2>

        {/* Yellow RESUME */}
        <h2 className="text-[#FFD700] text-[28px] md:text-[36px] font-semibold tracking-wide z-10 relative">
          RESUME
        </h2>
      </div>

      {/* Resume Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative">

        {/* Left Column - Experience */}
        <div className="relative pl-10">
          {/* Continuous Vertical Line */}
          <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-gray-700"></div>

          {[
            {
              title: "Senior UX/UI Designer",
              date: "Jan 2020 - Present",
              company: "Bergnaum, Hills and Howe",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.",
            },
            {
              title: "Product Designer",
              date: "Jan 2016 - December 2019",
              company: "Langosh, Sipes and Raynor",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.",
            },
            {
              title: "UI/UX Designer",
              date: "Jan 2014 - December 2015",
              company: "Strosin, Maggio and Homenick",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.",
            },
          ].map((item, i) => (
            <div key={i} className="mb-10 relative">
              {/* Bullet point */}
              <span
                className="absolute -left-[1.05rem] top-2 w-4 h-4 bg-gray-700 rounded-full border-2 border-[#FFD700]
                hover:bg-[#FFD700] hover:shadow-[0_0_8px_#FFD700] transition-all duration-300"
              ></span>

              <h3 className="text-[#FFD700] text-lg font-semibold">
                {item.title}
              </h3>
              <p className="text-[#FFD700] text-sm">{item.date}</p>
              <p className="text-white font-medium">{item.company}</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Right Column - Education */}
        <div className="relative pl-10">
          {/* Continuous Vertical Line */}
          <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-gray-700"></div>

          {[
            {
              title: "Master of Computer Science",
              date: "2015 - 2016",
              company: "University of XYZ",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.",
            },
            {
              title: "Bachelor of Computer Science",
              date: "2010 - 2014",
              company: "University of ABC",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.",
            },
            {
              title: "Diploma in Computer Science",
              date: "2006 - 2010",
              company: "XYZ Institution",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.",
            },
          ].map((item, i) => (
            <div key={i} className="mb-10 relative">
              {/* Bullet point */}
              <span
                className="absolute -left-[1.05rem] top-2 w-4 h-4 bg-gray-700 rounded-full border-2 border-[#FFD700]
                hover:bg-[#FFD700] hover:shadow-[0_0_8px_#FFD700] transition-all duration-300"
              ></span>

              <h3 className="text-[#FFD700] text-lg font-semibold">
                {item.title}
              </h3>
              <p className="text-[#FFD700] text-sm">{item.date}</p>
              <p className="text-white font-medium">{item.company}</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

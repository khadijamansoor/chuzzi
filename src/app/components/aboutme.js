"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="relative w-full bg-[#121623] text-white py-24 px-6 md:px-16 lg:px-24 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Section Heading with Welcome Animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative text-center mb-20 flex flex-col items-center justify-center"
      >
        {/* Fainted ABOUT ME */}
        <h1
          className="absolute text-[70px] md:text-[90px] font-extrabold text-[#0B1222] opacity-20 
          top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap select-none"
        >
          ABOUT ME
        </h1>

        {/* Yellow Title */}
        <h2 className="relative text-[#E8B84C] text-lg font-semibold tracking-[0.3em] uppercase z-10">
          ABOUT ME
        </h2>
        <div className="w-16 h-[2px] bg-[#E8B84C] mt-3"></div>
      </motion.div>

      {/* Main Content with Welcome Animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        className="flex flex-col lg:flex-row items-center justify-between gap-16 w-full max-w-6xl"
      >
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <div className="relative w-[320px] h-[400px] md:w-[380px] md:h-[460px] lg:w-[420px] lg:h-[500px] rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/assets/images/aboutme.jpg"
              alt="About Me Portrait"
              fill
              className="object-cover rounded-xl"
              priority
            />
          </div>
        </div>

        {/* Right Side - Text */}
        <div className="w-full lg:w-1/2 text-left space-y-5">
          <h3 className="text-3xl md:text-4xl font-semibold">
            Hi There! I&apos;m{" "}
            <span className="text-[#E8B84C]">Khadija Mansoor</span>
          </h3>
          <p className="text-[#E8B84C] text-lg font-medium">Visual Designer</p>
          <p className="text-gray-300 leading-relaxed max-w-md">
            I am a Visual Designer with a strong focus on digital branding.
            Visual design seeks to attract, inspire, create desires and motivate
            people to respond to messages, with a view to making a favorable
            impact.
          </p>

          {/* Info Items - Vertical */}
          <div className="flex flex-col gap-3 text-sm text-gray-300 mt-6">
            <p>
              <span className="text-[#E8B84C] font-medium">Birthday:</span> july
              20, 1990
            </p>
            <p>
              <span className="text-[#E8B84C] font-medium">Phone:</span> +1
              876-369-9009
            </p>
            <p>
              <span className="text-[#E8B84C] font-medium">Email:</span>{" "}
              devis@example.com
            </p>
            <p>
              <span className="text-[#E8B84C] font-medium">From:</span> 2661
              Hich meadow lane bear creek
            </p>
            <p>
              <span className="text-[#E8B84C] font-medium">Language:</span>{" "}
              English, Germanic
            </p>
            <p>
              <span className="text-[#E8B84C] font-medium">Freelance:</span>{" "}
              Available
            </p>
          </div>

          {/* Button */}
          <button className="mt-8 bg-[#E8B84C] text-[#121623] font-semibold py-3 px-8 rounded-full shadow-md hover:scale-105 transition-transform duration-300">
            Download CV
          </button>
        </div>
      </motion.div>
    </section>
  );
}

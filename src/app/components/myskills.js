"use client";
import { motion } from "framer-motion";
import React from "react";

export default function MySkills() {
  const skills = [
    { name: "Photoshop", level: 95 },
    { name: "Figma", level: 90 },
    { name: "Illustrator", level: 85 },
    { name: "After Effects", level: 80 },
    { name: "Premiere Pro", level: 75 },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative w-full min-h-screen bg-[#090E1A] text-white flex flex-col items-center justify-center px-6 md:px-20 pt-10 pb-24 overflow-hidden"
    >
      {/* --- Headings Section (Matched to SERVICES style) --- */}
      <div className="relative text-center mb-16">
        {/* Fainted Background Text */}
        <h2
          className="absolute text-[70px] md:text-[90px] font-extrabold text-[#0B1222] opacity-20 
          top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap select-none"
        >
          MY SKILLS
        </h2>

        {/* Yellow Foreground Heading with underline */}
        <div className="relative z-10 inline-block">
          <h2 className="text-[#FFD700] text-[28px] md:text-[36px] font-semibold tracking-wide">
            MY SKILLS
          </h2>
          <span className="block w-20 h-[3px] bg-[#FFD700] mx-auto mt-2 rounded-full"></span>
        </div>
      </div>

      {/* --- Two-column Layout --- */}
      <div className="relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl w-full">
        {/* Left Column - Text */}
        <div>
          <h4 className="text-2xl font-bold mb-4 text-white">
            All the skills that I have in this field are presented here.
          </h4>
          <p className="text-gray-400 leading-relaxed">
            I specialize in digital design, blending creativity with technology
            to create visually stunning and functional designs. My skill set
            includes UI/UX, motion design, and brand development, ensuring
            compelling visuals for every project I undertake.
          </p>
        </div>

        {/* Right Column - Skill Bars */}
        <div className="flex flex-col gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between mb-2">
                <span className="text-[#FFD700] font-semibold">
                  {skill.name}
                </span>
                <span className="text-[#FFD700] font-semibold">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full h-2 bg-[#1E2432] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#FFD700]"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  viewport={{ once: true }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

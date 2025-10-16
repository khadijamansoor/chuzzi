"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Richard Miles",
      position: "Chairman",
      src: "/assets/images/review1.jpg",
      text: `“Lorem ipsum dolor sittem ametamngcing elit, per sed do eiusmod teimpor sittem elit inuning utsed sittem do eiusmod.”`,
    },
    {
      id: 2,
      name: "Vesta Shufelt",
      position: "Executive Director",
      src: "/assets/images/review2.jpg",
      text: `“Lorem ipsum dolor sittem ametamngcing elit, per sed do eiusmod teimpor sittem elit inuning utsed sittem do eiusmod.”`,
    },
    {
      id: 3,
      name: "Joseph Alves",
      position: "Managing Director",
      src: "/assets/images/review3.jpg",
      text: `“Lorem ipsum dolor sittem ametamngcing elit, per sed do eiusmod teimpor sittem elit inuning utsed sittem do eiusmod.”`,
    },
  ];

  return (
    <section className="bg-[#0B0E1A] py-20 flex flex-col items-center relative">
      {/* Section Title */}
      <div className="relative flex flex-col items-center mb-16">
        {/* Fainted Text */}
        <h2 className="absolute text-[70px] md:text-[90px] font-extrabold text-[#1A2035] opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none">
          REVIEWS
        </h2>
        {/* Yellow Text */}
        <h2 className="text-[#FFD700] text-[28px] md:text-[36px] font-semibold z-10 relative">
          REVIEWS
        </h2>
        <div className="h-1 w-16 bg-[#FFD700] mt-2"></div>
      </div>

      {/* Review Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl">
        {reviews.map((review, index) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="relative flex flex-col items-center text-center px-6 py-4 bg-[#111529] rounded-xl hover:border hover:border-[#FFD700] transition-all duration-300"
          >
            {/* Speech Bubble */}
            <div className="relative bg-[#111529] p-6 rounded-lg text-gray-300 text-sm md:text-base mb-8">
              {review.text}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-[#111529]"></div>
            </div>

            {/* User Image */}
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-transparent mb-4 transition-all duration-300 hover:border-[#FFD700]">
              <Image
                src={review.src}
                alt={review.name}
                width={80}
                height={80}
                className="object-cover"
              />
            </div>

            {/* Name and Position */}
            <h3 className="text-white font-semibold">{review.name}</h3>
            <p className="text-gray-400 text-sm">{review.position}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

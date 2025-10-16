"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function BlogSection() {
  const blogs = [
    {
      id: 1,
      title: "What are the latest trends in Graphic Design?",
      description: "Explore the newest ideas in typography, color schemes, and digital art.",
      image: "/assets/images/blog1.jpg",
    },
    {
      id: 2,
      title: "Top 10 Tools for Modern Designers",
      description: "A curated list of essential software every creative professional should know.",
      image: "/assets/images/blog2.jpg",
    },
    {
      id: 3,
      title: "Designing for Mobile-First Experiences",
      description: "How to optimize user experience and UI for smaller screens.",
      image: "/assets/images/blog3.jpg",
    },
  ];

  return (
    <section className="relative w-full bg-[#0B0F1C] text-white py-20 px-8 md:px-20 overflow-hidden">
      {/* Watermark behind entire section */}
      <h1 className="absolute text-[8rem] font-bold text-gray-800 opacity-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">
        BLOG
      </h1>

      {/* Section Header */}
      <div className="text-center mb-16 relative z-10">
        {/* Fainted behind yellow heading */}
        <h2 className="absolute inset-0 flex items-center justify-center text-[4rem] md:text-[5rem] font-extrabold text-white/5 select-none pointer-events-none">
          LATEST NEWS
        </h2>

        {/* Yellow on top */}
        <h2 className="relative text-yellow-400 text-lg md:text-xl font-semibold mb-2 tracking-widest z-10">
          LATEST BLOGS
        </h2>

        <div className="h-1 w-20 bg-yellow-400 mx-auto relative z-10"></div>
      </div>

      {/* Blog Cards */}
      <div className="flex flex-wrap justify-center gap-10 z-10 relative">
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="w-72 md:w-80 cursor-pointer group"
          >
            {/* Image with hover zoom */}
            <div className="relative w-full h-64 overflow-hidden rounded-xl">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            {/* Text outside the image */}
            <div className="mt-4 text-center">
              <h3 className="text-2xl font-bold mb-2">{blog.title}</h3>
              <p className="text-gray-400">{blog.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

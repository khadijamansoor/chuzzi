"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Hero() {
  const canvasRef = useRef(null);
  const cursorRef = useRef(null);

  // 🌌 Starry Background Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let stars = [];
    const numStars = 180;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.2,
        speed: 0.1 + Math.random() * 0.25,
      });
    }

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#D4AF37";
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const updateStars = () => {
      stars.forEach((star) => {
        star.y += star.speed;
        if (star.y > canvas.height) star.y = 0;
      });
    };

    const animate = () => {
      drawStars();
      updateStars();
      requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  // ✨ Mild Instant Cursor Glow
  useEffect(() => {
    const cursor = cursorRef.current;

    const handleMouseMove = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      cursor.style.opacity = 1;
      cursor.style.transform = "scale(1)";
      setTimeout(() => {
        cursor.style.opacity = 0;
        cursor.style.transform = "scale(1.8)";
      }, 80);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      className="relative w-full flex flex-col md:flex-row items-center justify-between px-20 py-12 md:py-16 bg-[#090E1A] text-white overflow-hidden h-screen"
    >
      {/* ⭐ Star Canvas Background */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ backgroundColor: "#090E1A" }}
      ></canvas>

      {/* 💫 Cursor Glow */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed w-16 h-16 rounded-full bg-[#D4AF37]/20 blur-2xl transition-all duration-150 ease-out z-50"
        style={{ opacity: 0, transform: "scale(1)" }}
      ></div>

      {/* Left Text Section with Welcome Animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 max-w-xl text-left space-y-4 md:space-y-6"
      >
        <p className="text-[#D4AF37] text-lg md:text-xl tracking-widest uppercase">
          Hello, I am
        </p>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Khadija <span className="text-[#D4AF37]"></span>
        </h1>
        <p className="text-gray-300 max-w-md leading-relaxed text-base md:text-lg">
          A passionate <span className="text-[#D4AF37]">UI/UX Designer</span> and Frontend Developer
          who crafts seamless digital experiences.
        </p>
        <button className="mt-6 px-8 py-3 bg-[#D4AF37] text-black font-semibold rounded-md hover:bg-[#b8962e] transition-all duration-300">
          Hire Me
        </button>
      </motion.div>

      {/* Right Image Section with Welcome Animation */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 flex justify-end h-full"
      >
        <Image
          src="/assets/images/edward.png"
          alt="Edward Davis"
          width={600}
          height={700}
          priority
          className="rounded-lg shadow-2xl object-cover max-h-full"
        />

        {/* 🌐 Pop-out Horizontal Social Capsule with Triangle Connector */}
        <div className="absolute -bottom-6 -left-32 flex items-center">
          {/* Triangle connector */}
          <div className="w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 border-l-[#090E1A] mr-[-2px]"></div>

          {/* Capsule */}
          <div className="flex items-center bg-[#090E1A]/90 backdrop-blur-md rounded-full px-6 py-3 space-x-6 shadow-xl animate-slide-float">
            <a href="#" className="hover:scale-125 transition-transform duration-300">
              <Facebook size={24} className="text-[#D4AF37]" />
            </a>
            <a href="#" className="hover:scale-125 transition-transform duration-300">
              <Instagram size={24} className="text-[#D4AF37]" />
            </a>
            <a href="#" className="hover:scale-125 transition-transform duration-300">
              <Twitter size={24} className="text-[#D4AF37]" />
            </a>
            <a href="#" className="hover:scale-125 transition-transform duration-300">
              <Linkedin size={24} className="text-[#D4AF37]" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Tailwind Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        @keyframes slideInRight {
          0% { transform: translateX(60px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }

        .animate-slide-float {
          animation: slideInRight 0.8s ease-out forwards, float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

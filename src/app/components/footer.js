"use client";
import Image from "next/image";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaDribbble, FaBehance, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function ContactFooter() {
  return (
    <section className="relative w-full bg-[#0B0F1C] text-white py-20 px-8 md:px-20">
      {/* Section Header */}
      <div className="text-center mb-16 relative">
        {/* Fainted behind the yellow text */}
        <h2 className="absolute inset-0 flex items-center justify-center text-[3rem] md:text-[3.5rem] font-extrabold text-white/5 select-none pointer-events-none">
          CONTACT ME
        </h2>

        {/* Yellow on top */}
        <h2 className="relative text-yellow-400 text-lg md:text-xl font-semibold mb-2 tracking-widest z-10">
          CONTACT ME
        </h2>

        <div className="h-1 w-20 bg-yellow-400 mx-auto relative z-10"></div>
      </div>

      {/* Two-column Layout */}
      <div className="flex flex-col md:flex-row gap-16 z-10 relative">
        {/* Left Column: Contact Form */}
        <div className="md:w-1/2 space-y-6">
          <h3 className="text-4xl font-bold mb-6">Just say Hello</h3>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-[#0A0E1A] border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:border-yellow-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-[#0A0E1A] border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:border-yellow-400"
            />
            <input
              type="text"
              placeholder="Your Subject"
              className="bg-[#0A0E1A] border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:border-yellow-400"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="bg-[#0A0E1A] border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:border-yellow-400"
            ></textarea>
            <button
              type="submit"
              className="bg-yellow-400 text-black font-semibold py-3 rounded-md hover:brightness-110 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Column: Contact Info */}
        <div className="md:w-1/2 space-y-8">
          <h3 className="text-4xl font-bold mb-4">Contact Info</h3>
          <p className="text-gray-400 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla tincidunt id faucibus sed suscipit feugiat.
          </p>

          {/* Contact Details */}
          <div className="space-y-4">
            <div>
              <h4 className="font-bold flex items-center gap-2">
                <FaEnvelope /> Email
              </h4>
              <p>devis@example.com</p>
              <p>info@support.com</p>
            </div>
            <div>
              <h4 className="font-bold flex items-center gap-2">
                <FaPhone /> Phone
              </h4>
              <p>+1 876-369-9009</p>
              <p>+1 213-519-1786</p>
            </div>
            <div>
              <h4 className="font-bold flex items-center gap-2">
                <FaMapMarkerAlt /> Address
              </h4>
              <p>2661 High Meadow Lane Bear Creek,</p>
              <p>Olancha, KY 93544</p>
            </div>
          </div>

          {/* Social Media */}
          <div className="mt-8">
            <p className="mb-4 text-white">Visite my social profile and get connected</p>
            <div className="flex gap-4">
              <div className="bg-[#0A0E1A] p-3 rounded-full hover:bg-yellow-400 transition">
                <FaDribbble className="text-white hover:text-black" />
              </div>
              <div className="bg-[#0A0E1A] p-3 rounded-full hover:bg-yellow-400 transition">
                <FaBehance className="text-white hover:text-black" />
              </div>
              <div className="bg-[#0A0E1A] p-3 rounded-full hover:bg-yellow-400 transition">
                <FaTwitter className="text-white hover:text-black" />
              </div>
              <div className="bg-[#0A0E1A] p-3 rounded-full hover:bg-yellow-400 transition">
                <FaLinkedin className="text-white hover:text-black" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-500 text-sm mt-20 z-10">
        © 2020. Designed by Laralink. All right reserved.
      </div>
    </section>
  );
}

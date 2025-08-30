import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useTheme } from "../Theme/ThemeProvider";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const { theme } = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <section
      className={`w-full min-h-screen font-inter ${theme ? "text-black bg-portfolio-light" : "text-gray-300 bg-portfolio-dark"}`}
    >
      <div className="container mx-auto px-4  value  h-screen gap-10 py-20">
        {/* Left Side */}
        <div className="flex-1 flex flex-col gap-6">
          <h1 className="text-4xl font-semibold text-[#ec5631]">
            Let’s Connect ✨
          </h1>
          <h2 className="text-2xl font-bold">
            Let’s <span className="text-[#ec5631]">Work Together!</span>
          </h2>
          <p className="text-lg leading-relaxed">
            I’m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          {/* Contact Info */}
          <div className="flex flex-col gap-3">
            <p className="flex items-center gap-2 ">
              <Mail className="text-[#ec5631]" />
              <a href="mailto:Bhushankumar5445@gmail.com" className="hover:underline hover:text-[#ec5631]">
                Bhushankumar5445@gmail.com
              </a>
            </p>

            <p className="flex items-center gap-2 ">
              <Phone className="text-[#ec5631]" />
              <a href="tel:+917888320170" className="hover:underline hover:text-[#ec5631]">
                +91 7888320170
              </a>
            </p>

            <p className="flex items-center gap-2 ">
              <MapPin className="text-[#ec5631]" />
              <a href="https://www.google.com/maps/place/Abohar,+Punjab,+India" target="_blank" className="hover:underline hover:text-[#ec5631]">Abohar, Punjab, India</a>
            </p>
          </div>
        </div>

        {/* Right Side (Form) */}
        <div className="flex-1 w-full">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 mt-6 bg-transparent"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="bg-transparent border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ec5631]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-transparent border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ec5631]"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="bg-transparent border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ec5631]"
            ></textarea>
            <button
              type="submit"
              disabled={loading}
              className="bg-[#ec5631] text-white font-semibold py-3 px-6 rounded-xl hover:scale-105 transition-transform duration-200 shadow-lg disabled:opacity-50 mb-16 md:mb-0"
            >
              {loading ? "Sending..." : "Send"} <Send className="inline w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

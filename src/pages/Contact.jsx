import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Linkedin,
  Github,
} from "lucide-react";
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
      className={`w-full font-inter flex items-center justify-center min-h-screen px-4 sm:px-6 md:px-12 py-10 transition-colors duration-300
        ${theme ? " text-black" : " text-gray-200"}`}
    >
      <div className="max-w-7xl w-full mx-auto pt-10">
        {/* Section Heading */}
        <h1
          className={`text-2xl sm:text-3xl md:text-4xl font-semibold text-[#ec5631] text-left`}
        >
          Let’s Connect ✨
        </h1>

        {/* Parent Flexbox */}
        <div className="flex-row  lg:flex gap-10 lg:gap-16 items-start pt-6">
          {/* Left Side (Heading + Text + Socials) */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug pb-4 text-left">
              Let’s Work <span className="text-[#ec5631]">Together!</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-left">
              I’m always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col gap-4 mt-6 text-left">
              <p className="flex gap-2 text-sm sm:text-base">
                <Mail className="text-[#ec5631]" /> Bhushankumar4554@gmail.com
              </p>
              <p className="flex gap-2 text-sm sm:text-base">
                <Phone className="text-[#ec5631]" /> +91 7888320170
              </p>
              <p className="flex items-center gap-2 text-sm sm:text-base">
                <MapPin className="text-[#ec5631]" /> Abohar, Punjab, India
              </p>
            </div>

            {/* Social Icons */}
            <div className="mt-6 flex gap-4 sm:gap-6 justify-start">
              <a
                href="https://wa.me/917888320170"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full border transition
                  ${
                    theme
                      ? "border-gray-400 hover:bg-[#25D366] hover:text-white"
                      : "border-gray-700 hover:bg-[#25D366] hover:text-white"
                  }`}
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/bhushan-kumar-23673932a/"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full border transition
                  ${
                    theme
                      ? "border-gray-400 hover:bg-[#ec5631] hover:text-white"
                      : "border-gray-700 hover:bg-[#ec5631] hover:text-white"
                  }`}
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/lovishverma1435"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full border transition
                  ${
                    theme
                      ? "border-gray-400 hover:bg-[#ec5631] hover:text-white"
                      : "border-gray-700 hover:bg-[#ec5631] hover:text-white"
                  }`}
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Right Side (Form) */}
          <div className="w-full lg:w-1/2">
            <form
              onSubmit={handleSubmit}
              className={`flex flex-col gap-5 sm:gap-6 p-5 sm:p-6 md:p-8 rounded-2xl shadow-lg border w-full transition-colors duration-300
                ${
                  theme
                    ? "bg-white border-gray-300"
                    : "bg-gradient-to-br from-[#1a1a1a] to-[#0d0714] border-gray-800"
                }`}
            >
              <input
                type="text"
                placeholder="Your Name"
                className={`w-full p-3 sm:p-4 rounded-xl outline-none transition focus:border-[#ec5631] focus:ring-2 focus:ring-[#ec5631]
                  ${
                    theme
                      ? "bg-gray-100 border border-gray-300 text-black placeholder-gray-500"
                      : "bg-[#0d0714]/50 border border-gray-700 text-white placeholder-gray-400"
                  }`}
              />
              <input
                type="email"
                placeholder="Your Email"
                className={`w-full p-3 sm:p-4 rounded-xl outline-none transition focus:border-[#ec5631] focus:ring-2 focus:ring-[#ec5631]
                  ${
                    theme
                      ? "bg-gray-100 border border-gray-300 text-black placeholder-gray-500"
                      : "bg-[#0d0714]/50 border border-gray-700 text-white placeholder-gray-400"
                  }`}
              />
              <textarea
                rows="5"
                placeholder="Your Message"
                className={`w-full p-3 sm:p-4 rounded-xl outline-none transition focus:border-[#ec5631] focus:ring-2 focus:ring-[#ec5631]
                  ${
                    theme
                      ? "bg-gray-100 border border-gray-300 text-black placeholder-gray-500"
                      : "bg-[#0d0714]/50 border border-gray-700 text-white placeholder-gray-400"
                  }`}
              ></textarea>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-[#ec5631] py-3 sm:py-4 rounded-xl font-semibold hover:shadow-[0_0_20px_rgba(236,86,49,0.7)] transition-all text-white"
              >
                {loading ? "Sending..." : "Send Message"}
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

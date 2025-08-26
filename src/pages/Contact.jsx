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

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <section className="w-full   text-white font-inter  py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h1 className="text-3xl md:text-4xl font-semibold text-[#ec5631]  md:text-left">
          Let’s Connect ✨
        </h1>

        {/* Parent Flexbox */}
        <div className="lg:flex gap-12 items-start pt-12">
          {/* Left Side (Heading + Text + Socials) */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-2xl md:text-4xl font-bold leading-snug pb-5 ">
              Let’s Work <span className="text-[#ec5631]">Together!</span>
            </h1>
            <p className="text-base md:text-lg text-gray-300 ">
              I’m always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col gap-4 mt-6 text-gray-300">
              <p className="flex  gap-2 text-sm md:text-base ">
                <Mail className="text-[#ec5631]" /> Bhushankumar4554@gmail.com
              </p>
              <p className="flex  gap-2 text-sm md:text-base ">
                <Phone className="text-[#ec5631]" /> +91 7888320170
              </p>
              <p className="flex items-center gap-2 text-sm md:text-base">
                <MapPin className="text-[#ec5631]" /> Abohar, Punjab, India
              </p>
            </div>

            {/* Social Icons */}
            <div className="mt-8 mb-8 lg:mb-0 flex gap-5">
              <a
                href="https://wa.me/917888320170"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-gray-700 hover:bg-[#25D366] hover:text-white transition"
              >
                <MessageCircle size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/bhushan-kumar-23673932a/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-gray-700 hover:bg-[#ec5631] hover:text-white transition"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="https://github.com/lovishverma1435"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-gray-700 hover:bg-[#ec5631] hover:text-white transition"
              >
                <Github size={22} />
              </a>
            </div>
          </div>

          {/* Right Side (Form) */}
          <div className="w-full lg:w-1/2">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 bg-gradient-to-br from-[#1a1a1a] to-[#0d0714] border border-gray-800 p-6 md:p-8 rounded-2xl shadow-lg"
            >
              <input
                type="text"
                placeholder="Your Name"
                className="p-4 rounded-xl bg-[#0d0714]/50 border border-gray-700 focus:border-[#ec5631] focus:ring-2 focus:ring-[#ec5631] outline-none transition"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-4 rounded-xl bg-[#0d0714]/50 border border-gray-700 focus:border-[#ec5631] focus:ring-2 focus:ring-[#ec5631] outline-none transition"
              />
              <textarea
                rows="5"
                placeholder="Your Message"
                className="p-4 rounded-xl bg-[#0d0714]/50 border border-gray-700 focus:border-[#ec5631] focus:ring-2 focus:ring-[#ec5631] outline-none transition"
              ></textarea>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-[#ec5631] py-3 rounded-xl font-semibold hover:shadow-[0_0_20px_rgba(236,86,49,0.7)] transition-all"
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

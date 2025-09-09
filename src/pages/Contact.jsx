import React, { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useTheme } from "../Theme/ThemeProvider";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import "../App.css"
const Contact = () => {
  const [loading, setLoading] = useState(false);
  AOS.init({
    duration: 1200,
    once: false,
    offset: 0,
  });
  const { theme } = useTheme();
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      "service_kce2ghc",
      "template_ultuuzk",
      formRef.current,
      "dzadLep3geGSzN2Fo"
    )

      .then((result) => {
        console.log("Email sent successfully:", result.text);
        alert("Message sent successfully!");
        setLoading(false);
        formRef.current.reset();
      }, (error) => {
        console.error("Email sending error:", error.text);
        alert("Failed to send message.");
        setLoading(false);
      });
  };

  return (
    <section
      className={`w-full min-h-screen font-inter ${theme ? "text-black bg-portfolio-light" : "text-gray-300 bg-portfolio-dark"}`}
    >
      <div className="container mx-auto px-4  value  h-screen gap-10 py-20">
        {/* Left Side */}
        <div className="flex-1 flex flex-col gap-6">
          <h1 data-aos="fade-right" data-aos-delay="200" className="flex text-4xl lg:text-5xl font-bold text-OrangeCustom gap-[10px]">
            Let’s Connect <iframe title="id" src="https://lottie.host/embed/a8c326ab-79af-4c6a-ae2e-44fce48336e3/CguXzoecsQ.lottie " className="w-[34px] h-[34px]"></iframe>
          </h1>
          <h2 data-aos="fade-right" data-aos-delay="400" className="text-2xl font-bold pt-1">
            Let’s <span className="text-OrangeCustom font-extrabold text-3xl">Work Together!</span>
          </h2>
          <p data-aos="fade-right" data-aos-delay="600" className="text-lg leading-relaxed">
            I’m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          {/* Contact Info */}
          <div className="flex flex-col gap-3">
            <p data-aos="fade-right" data-aos-delay="800" className="flex items-center gap-2 ">
              <Mail className="text-OrangeCustom" />
              <a href="mailto:Bhushankumar5445@gmail.com" className="hover:underline hover:text-OrangeCustom">
                Bhushankumar5445@gmail.com
              </a>
            </p>

            <p data-aos="fade-right" data-aos-delay="1000" className="flex items-center gap-2 ">
              <Phone className="text-OrangeCustom" />
              <a href="tel:+917888320170" className="hover:underline hover:text-OrangeCustom">
                +91 7888320170
              </a>
            </p>

            <p data-aos="fade-right" data-aos-delay="1200" className="flex items-center gap-2 ">
              <MapPin className="text-OrangeCustom" />
              <a href="https://www.google.com/maps/place/Abohar,+Punjab,+India" target="_blank" className="hover:underline hover:text-[#ec5631]">Abohar, Punjab, India</a>
            </p>
          </div>
        </div>

        {/* Right Side (Form) */}
        <div className="flex-1 max-w-[500px]  w-full">
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4 bg-transparent">
            <div data-aos="fade-down" data-aos-delay="800" className="flex flex-col w-full">
            <input 
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className={`${theme ? "placeholder-black" : "placeholder-white"} bg-transparent border z-0 border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-OrangeCustom font-semibold`}
            /></div>
            <div data-aos="fade-down" data-aos-delay="600" className="flex flex-col w-full">
            <input 
              type="email"
              name="reply_to"
              placeholder="Your Email"
              required
              className={`${theme ? "placeholder-black" : "placeholder-white"} bg-transparent border z-0 border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-OrangeCustom font-semibold`}
            /></div>
            <div data-aos="fade-down" data-aos-delay="400" className=" flex flex-col w-full">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
                className={`${theme ? "placeholder-black" : "placeholder-white"} bg-transparent border z-0 border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-OrangeCustom font-semibold`}
              ></textarea>
            </div>
            <div  data-aos="fade-down" data-aos-delay="200" className="flex flex-col w-full">
            <button
              type="submit"
              disabled={loading}
              className="bg-OrangeCustom z-0 text-white font-semibold py-3 px-6 rounded-xl  hover:scale-105 transition-transform duration-300 shadow-lg disabled:opacity-50 mb-16 md:mb-0"
            >
              {loading ? "Sending..." : "Send"} <Send className="inline w-5 h-5" />
            </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
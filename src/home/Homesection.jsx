import React from "react";
import { useTheme } from "../Theme/ThemeProvider";
import AOS from "aos";
import "aos/dist/aos.css";
const HeroSection = () => {
    AOS.init({
        duration: 1200,
        once: false,
        offset: 0,
    });
  const { theme } = useTheme();
  return (
    <section
      className={`${
        theme
          ? "text-black bg-portfolio-light"
          : "text-gray-300 bg-portfolio-dark"
      } relative w-full h-screen font-inter overflow-y-hidden`}
    >
      {/* Jai Shree Krishna */}

      {/* Big Name */}
      <h1 data-aos="fade-down"  data-aos-delay="200" className="absolute top-16 left-1/2 -translate-x-1/2 font-bold tracking-widest leading-none ">
        <span className="bg-gradient-to-r from-orange-700 via-orange-600 to-amber-500 bg-clip-text text-transparent headname font-normal">
          LOVISH
        </span>
      </h1>

      {/* Middle Image */}
      <div data-aos="fade-down"   data-aos-delay="400" className="absolute bottom-0 headimg  -translate-x-1/2 ">
        <img  
          src="../../hero3-com_uwncal.webp"
          alt="Character"
          className="h-[75vh] object-contain animate-[float_2s_ease-in-out_infinite]"
        />
      </div>

      {/* Call Me Section */}
      <div data-aos="fade-right"  data-aos-delay="600" className="absolute rightname text-right">
        <p className="text-sm font-semibold uppercase ">Call me</p>
        <h2 className="text-3xl font-bold">
          <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-400 bg-clip-text text-transparent text-5xl font-extrabold">
            LOVEY
          </span>
        </h2>
      </div>

      {/* Welcome Section */}
      <div  data-aos="fade-left"  data-aos-delay="800" className="absolute leftname leading-tight text-end">
        <p className="text-[2.5rem] font-normal">
          <span className="bg-gradient-to-r from-orange-700 via-orange-600 to-amber-500 bg-clip-text text-transparent text-3xl lg:text-5xl font-medium">
            WELCOME
          </span>{" "}
        </p>
        <span className=" text-xl font-medium">TO MY</span>
        <p className=" text-xl font-bold">
          <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-400 bg-clip-text text-transparent">
            PORTFOLIO
          </span>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;

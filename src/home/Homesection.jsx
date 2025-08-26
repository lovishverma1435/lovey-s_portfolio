import React from "react";
import { useTheme } from "../Theme/ThemeProvider";

const HeroSection = () => {
  const {theme}=useTheme()
  return (
    <section className={`${theme ? "text-black" :"text-gray-300"} relative w-full h-screen font-inter `}>
      {/* Jai Shree Krishna */}
      <p className="absolute top-6 left-[325px] -translate-x-1/2  text-sm font-medium ">
        Jai Shree Krishna, I'm
      </p>

      {/* Big Name */}
      <h1 className="absolute top-16 left-1/2 -translate-x-1/2 font-bold tracking-widest text-[12vw] leading-none">
        <span className="bg-gradient-to-r from-[#ff4974] to-[#4fc3f7] bg-clip-text text-transparent text-[200px] font-normal">
          BHUSHAN
        </span>
      </h1>

      {/* Middle Image */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 ">
        <img
          src="../../hero3-com_uwncal.webp" // replace with actual PNG of boy with transparent background
          alt="Character"
          className="h-[75vh] object-contain animate-[float_2s_ease-in-out_infinite]"
        />
      </div>

      {/* Call Me Section */}
      <div className="absolute top-3/4 right-[280px] text-right">
        <p className="text-sm font-medium uppercase ">Call me</p>
        <h2 className="text-3xl font-bold">
          <span className="bg-gradient-to-r from-[#ff4974] to-[#ff7aa2] bg-clip-text text-transparent text-5xl font-normal">
            LOVEY
          </span>
          {/* <span className="text-gray-400 text-sm ml-2">with 'ii'.</span> */}
        </h2>
      </div>

      {/* Welcome Section */}
      <div className="absolute bottom-12 left-[260px] leading-tight text-end">
        <p className="text-[2.5rem] font-normal">
          <span className="bg-gradient-to-r from-[#ff4974] to-[#ff7aa2] bg-clip-text text-transparent text-5xl">
            WELCOME
          </span>{" "}
        </p>
          <span className=" text-xl font-medium">TO MY</span>
        <p className="text-xl font-bold">
          <span className="bg-gradient-to-r from-[#ff4974] to-[#4fc3f7] bg-clip-text text-transparent">
            PORTFOLIO
          </span>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;

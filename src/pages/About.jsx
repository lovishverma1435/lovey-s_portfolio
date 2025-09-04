import React, { useState } from 'react'
import { Instagram, Linkedin, Github, Twitter, Download } from 'lucide-react'
import { useTheme } from '../Theme/ThemeProvider'
import Skills from "./Skills"
import { Link } from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
  const [IsLoading, SetIsLoading] = useState(false)
 AOS.init({
        duration: 1200,
        once: false,
        offset: 0,
    });
  const handleclick = () => {
    SetIsLoading(true)
    setTimeout(() => {
      SetIsLoading(false)
    }, 2000)
  }
  
  const { theme } = useTheme()
  return (
    <>
      <section className={`${theme ? "text-black bg-portfolio-light "  : "text-gray-300 bg-portfolio-dark"} w-full  font-inter`}>
        <div className='container'>
          <div className=" items-center lg:flex md:items-center h-screen relative pt-12 ">
            <div  data-aos="fade-right" className="flex justify-center">
              <img className='max-w-[500px] w-full h-auto md:h-[500px] ' src="/hero4.png" alt="" />
            </div>
            <div className=" flex flex-col gap-8 text-center sm:mx-auto max-w-[550px] w-full">
              <div className="flex flex-col gap-4 text-center ">
                <h1  data-aos="fade-left"  data-aos-delay="200" className='text-4xl sm:text-5xl md:text-6xl  lg:text-start font-bold'>Abo<span className='text-[#ec5631]'>ut Me...</span></h1>
                <h1 data-aos="fade-left"  data-aos-delay="400" className='text-lg sm:text-xl md:text-2xl leading-snug lg:text-start font-semibold'>Transforming ideas into digital <span className='text-2xl sm:text-3xl md:text-4xl text-[#ec5631] font-semibold'>experiences</span></h1>
              </div>
              <p data-aos="fade-left"  data-aos-delay="600" className="text-base sm:text-lg md:text-2xl leading-relaxed lg:text-start font-semibold">
                Hey, <span className='text-[#ec5631] text-xl sm:text-2xl lg:text-3xl font-extrabold'>I’m Lovey</span> 👋 A passionate <span className='text-[#ec5631] text-xl sm:text-2xl md:text-3xl font-extrabold'>Full-Stack Web Developer</span> driven by the love for creating responsive and impactful web applications that not only look beautiful but also provide seamless performance and meaningful solutions..
              </p>
              <div  className=" flex button gap-4 sm:gap-6 w-full pb-16 md:pb-0">
                <a data-aos="fade-up"  data-aos-delay="800"
                  href="https://drive.usercontent.google.com/download?id=1oHxtBgAOB4prO6MX03dkd3T1Xmno-LG_&export=download&authuser=0&confirm=t&uuid=40682eac-e488-4268-8508-900586cb5ba1&at=AN8xHoqK_qp0tg66Esv1c4X-19jC:1756960813085"
                  download={"cv"}
                  className='bg-[#ec5631] w-full py-3 px-14 rounded-xl flex justify-center items-center font-semibold text-lg gap-3 hover:scale-105 transition-transform duration-300 shadow-lg'
                >
                  CV <Download className='w-5 h-5' />
                </a>

                <Link data-aos="fade-up"  data-aos-delay="1000"
                to={"/skills"}
                  className='bg-[#ec5631] w-full py-3 px-16 rounded-xl flex justify-center items-center font-semibold text-lg hover:scale-105 transition-transform duration-300 shadow-lg'
                >
                  <h1>Skills</h1>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default About;
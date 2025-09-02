import React, { useState } from 'react'
import { Instagram, Linkedin, Github, Twitter, Download } from 'lucide-react'
import { useTheme } from '../Theme/ThemeProvider'
import Skills from "./Skills"
import { Link } from 'react-router-dom'

const About = () => {
  const [IsLoading, SetIsLoading] = useState(false)

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
            <div className="flex justify-center">
              <img className='max-w-[500px] w-full h-auto md:h-[500px] ' src="/hero4.png" alt="" />
            </div>
            <div className=" flex flex-col gap-8 text-center sm:mx-auto max-w-[550px] w-full">
              <div className="flex flex-col gap-4 text-center ">
                <h1 className='text-4xl sm:text-5xl md:text-6xl  lg:text-start font-bold'>Abo<span className='text-[#ec5631]'>ut Me...</span></h1>
                <h1 className='text-lg sm:text-xl md:text-2xl leading-snug lg:text-start font-semibold'>Transforming ideas into digital <span className='text-2xl sm:text-3xl md:text-4xl text-[#ec5631] font-semibold'>experiences</span></h1>
              </div>
              <p className="text-base sm:text-lg md:text-2xl leading-relaxed lg:text-start font-semibold">
                Hey, <span className='text-[#ec5631] text-xl sm:text-2xl lg:text-3xl font-extrabold'>I’m Lovey</span> 👋 A passionate <span className='text-[#ec5631] text-xl sm:text-2xl md:text-3xl font-extrabold'>Full-Stack Web Developer</span> driven by the love for creating responsive and impactful web applications that not only look beautiful but also provide seamless performance and meaningful solutions..
              </p>
              <div className=" flex button gap-4 sm:gap-6 w-full pb-16 md:pb-0">
                <a
                  href="https://drive.usercontent.google.com/download?id=1KN-tfEHaDdDyJct6rhCcDt0_oyUPZWpx&export=download&authuser=0&confirm=t&uuid=897c23e0-8bb3-4eee-bd5f-ea8254459639&at=AN8xHoppkLzmUb3q43PKS-mYnft_:1755671016408"
                  download={"cv"}
                  className='bg-[#ec5631] w-full py-3 px-14 rounded-xl flex justify-center items-center font-semibold text-lg gap-3 hover:scale-105 transition-transform duration-300 shadow-lg'
                >
                  CV <Download className='w-5 h-5' />
                </a>

                <Link
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
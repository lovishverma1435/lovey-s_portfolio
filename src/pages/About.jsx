import React, { useState } from 'react'
import { Download } from 'lucide-react'
import { useTheme } from '../Theme/ThemeProvider'

const About = () => {
  // const [IsLoading, SetIsLoading] = useState(false)

  // const handleclick = () => {
  //   SetIsLoading(true)
  //   setTimeout(() => {
  //     SetIsLoading(false)
  //   }, 2000)
  // }

  const { theme } = useTheme()

  return (
    <>
      {/* About Section */}
      <section className={`${theme ? "text-black" :"text-gray-300"} w-full font-inter pb-24`}>
        <div className="container">
          <div className="grid-cols-1 md:flex md:items-center md:justify-between 
                          my-auto min-h-screen relative pt-8">
            
            {/* Left Image */}
            <div className="flex justify-center md:justify-start">
              <img 
                className='max-w-[500px] w-full h-auto md:h-[500px]' 
                src="/hero4.png" 
                alt="hero" 
              />
            </div>
            
            {/* Right Content */}
            <div className="flex flex-col gap-8 text-center md:text-left">
              <div className="flex flex-col gap-4 text-center md:text-start">
                <h1 className='text-4xl sm:text-5xl md:text-6xl text-[#ec5631] font-semibold'>
                  About Me...
                </h1>
                <h1 className='text-lg sm:text-xl md:text-2xl leading-snug'>
                  Transforming ideas into digital 
                  <span className='text-2xl sm:text-3xl md:text-4xl text-[#ec5631]'> experiences</span>
                </h1>
              </div>
              
              <p className="text-base sm:text-lg md:text-2xl leading-relaxed">
                Hey, <span className='text-[#ec5631] text-xl sm:text-2xl md:text-3xl'>I’m Lovey</span> 👋 
                A passionate <span className='text-[#ec5631] text-xl sm:text-2xl md:text-3xl'>Full-Stack Web Developer</span> 
                who loves building scalable, modern, and user-friendly applications.
              </p>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 sm:gap-6">
                <a 
                  href="https://drive.usercontent.google.com/download?id=1KN-tfEHaDdDyJct6rhCcDt0_oyUPZWpx&export=download&authuser=0&confirm=t&uuid=897c23e0-8bb3-4eee-bd5f-ea8254459639&at=AN8xHoppkLzmUb3q43PKS-mYnft_:1755671016408" 
                  download={"cv"} 
                  className='bg-[#ec5631] py-3 px-6 rounded-xl flex justify-center items-center font-semibold text-lg gap-2 hover:scale-105 transition-transform shadow-lg'
                >
                  CV <Download className='w-5 h-5'/>
                </a>
                <a 
                  href="#"
                  className='bg-[#ec5631] py-3 px-6 rounded-xl flex justify-center items-center font-semibold text-lg hover:scale-105 transition-transform shadow-lg'
                >
                  Skills
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default About

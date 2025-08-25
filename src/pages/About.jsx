import React, { useState } from 'react'
import { Instagram, Linkedin, Github, Twitter } from 'lucide-react'

const About = () => {
  const [IsLoading, SetIsLoading] = useState(false)

  const handleclick = () => {
    SetIsLoading(true)
    setTimeout(() => {
      SetIsLoading(false)
    }, 2000)
  }
  return (
    <>
      <section className=' w-full h-screen bg-[#0d0714] font-inter overflow-hidden'>
        <div className='container'>
          <div className="pt-5">
            <div className="flex gap-5 items-center justify-between">
              <div className="flex gap-4">
                <img className='max-w-12 h-12 w-full rounded-[50%] border-2  border-gray-300' src="/bklogo.png" alt="" />
              </div>
              <div className="flex gap-5 text-gray-300">
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-8 h-8 hover:text-pink-500 transition-colors duration-300 cursor-pointer" />
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-8 h-8 hover:text-blue-500 transition-colors duration-300 cursor-pointer" />
                </a>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                  <Github className="w-8 h-8 hover:text-orange-500 transition-colors duration-300 cursor-pointer" />
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-8 h-8 hover:text-sky-400 transition-colors duration-300 cursor-pointer" />
                </a>
              </div>
            </div>
            <div className="flex items-center justify-between py-5 relative">
              <img className='max-w-[500px] w-full h-[500px] ' src="/hero4.png" alt="" />
              <iframe className='absolute left-[170px] top-[-20px]' title='#' src="https://lottie.host/embed/49ef9e95-4631-42fe-a4d5-ed8bf3addcfc/YLuZni78Ue.lottie"></iframe>
              <div className=" flex flex-col gap-14 max-w-[500px] w-full ">
                <div className="flex flex-col gap-4">
                  <h1 className='text-6xl text-[#ec5631] font-medium'>About Me...</h1>
                  <h1 className='text-xl leading-[120%]'>Transforming ideas into digital <span className='text-4xl text-[#ec5631]'>experiences</span></h1>
                </div>
                <p className="text-2xl max-w-2xl leading-relaxed text-gray-300">
                  Hey, <span className='text-[#ec5631] text-3xl'>I’m Lovey</span> 👋 A passionate <span className='text-[#ec5631] text-3xl'>Full-Stack Web Developer</span> who loves
                  building scalable, modern, and user-friendly applications.
                </p>
                
                <a href="https://drive.usercontent.google.com/download?id=1KN-tfEHaDdDyJct6rhCcDt0_oyUPZWpx&export=download&authuser=0&confirm=t&uuid=897c23e0-8bb3-4eee-bd5f-ea8254459639&at=AN8xHoppkLzmUb3q43PKS-mYnft_:1755671016408" download={"cv"} className='bg-[#ec5631] py-3 rounded-xl flex justify-center'>CV</a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default About

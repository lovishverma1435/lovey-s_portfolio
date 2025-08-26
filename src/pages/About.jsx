import React, { useState } from 'react'
import { Instagram, Linkedin, Github, Twitter,Download  } from 'lucide-react'

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
      <section className=' w-full  font-inter'>
        <div className='container'>
          <div className="pt-5">
           
            <div className="flex items-center justify-between py-5 relative">
              <img className='max-w-[500px] w-full h-[500px] ' src="/hero4.png" alt="" />
              <div className=" flex flex-col gap-14 max-w-[500px] w-full ">
                <div className="flex flex-col gap-4">
                  <h1 className='text-6xl text-[#ec5631] font-medium'>About Me...</h1>
                  <h1 className='text-xl leading-[120%] text-gray-300'>Transforming ideas into digital <span className='text-4xl text-[#ec5631]'>experiences</span></h1>
                </div>
                <p className="text-2xl max-w-2xl leading-relaxed text-gray-300">
                  Hey, <span className='text-[#ec5631] text-3xl'>I’m Lovey</span> 👋 A passionate <span className='text-[#ec5631] text-3xl'>Full-Stack Web Developer</span> who loves
                  building scalable, modern, and user-friendly applications.
                </p>
                <div className="flex gap-5">
                <a href="https://drive.usercontent.google.com/download?id=1KN-tfEHaDdDyJct6rhCcDt0_oyUPZWpx&export=download&authuser=0&confirm=t&uuid=897c23e0-8bb3-4eee-bd5f-ea8254459639&at=AN8xHoppkLzmUb3q43PKS-mYnft_:1755671016408" download={"cv"} className='bg-[#ec5631] py-3 rounded-xl flex justify-center max-w-[150px] w-full font-semibold text-lg gap-2 items-center'>CV <Download className='w-5 h-5'/> </a>
                 <a href=""  className='bg-[#ec5631] py-3 rounded-xl flex justify-center max-w-[150px] w-full  font-semibold text-lg'>Skills</a>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default About

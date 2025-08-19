import React from 'react'
import Fontui from '../ui/Fontui'

const About = () => {
  return (
    <>
      <section className='relative w-full h-screen bg-[#0d0714] text-white font-inter overflow-hidden'>
        <div className='container'>
          <div className="pt-5">
            <div className="flex gap-5 items-center">
              <img className='max-w-12 h-12 w-full rounded-[50%] border-2  border-gray-300' src="/lovey.png" alt="" />
              <Fontui className='text-4xl' outofspan='' words={["LOVEY"]} />
            </div>
            <div className="flex items-center justify-between">
              <img className='max-w-[500px] w-full h-[500px]' src="/hero4.png" alt="" />
              <div className=" flex flex-col gap-14 max-w-[500px] w-full relative">
                <iframe className='absolute left-[-150px]' title='#' src="https://lottie.host/embed/49ef9e95-4631-42fe-a4d5-ed8bf3addcfc/YLuZni78Ue.lottie"></iframe>
                <div className="flex flex-col gap-4">
                  <h1 className='text-6xl text-[#ec5631]'>About Me...</h1>
                <h1 className='text-xl leading-[120%]'>Transforming ideas into digital experiences ...</h1>
                </div>
                <p className="text-2xl max-w-2xl leading-relaxed text-gray-300">
                   Hi, <span className='text-[#F55A32] text-3xl'>I’m Lovey</span> 👋 A passionate <span className='text-[#F55A32] text-3xl'>Full-Stack Web Developer</span> who loves
                  building scalable, modern, and user-friendly applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default About

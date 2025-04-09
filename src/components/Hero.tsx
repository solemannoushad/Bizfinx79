import React from 'react'

interface HeroProps {
  heading: string;
  subheading: string
}
function Hero({heading, subheading}: HeroProps) { 
  return (
    <>
    <section className="w-full h-screen min-h-[400px] flex items-center justify-center bg-foreground z-30">
        <div className='w-[80%] max-w-7xl z-30'>
            <h1 className='hero-heading inline relative text-3xl font-medium text-secondary uppercase'>{heading}</h1>
            <h2 className="text-5xl lg:text-6xl text-white font-semibold mt-5">{subheading}</h2>
        </div>
    </section>
    <div className="absolute top-0 left-0 w-screen h-screen fade z-20"></div>
      <div className="absolute top-0 left-0 w-screen h-screen z-10">
        <video className="w-screen h-full object-cover" autoPlay muted loop>
          <source src="/bg.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  )
}

export default Hero

import React from 'react'

interface HeroProps {
  heading: string;
  subheading: string
}
function Hero({heading, subheading}: HeroProps) { 
  return (
    <section className="w-full h-screen min-h-[400px] flex items-center justify-center bg-foreground">
        <div className='w-[80%] max-w-7xl'>
            <h1 className='hero-heading inline relative text-3xl font-medium text-secondary uppercase'>{heading}</h1>
            <h2 className="text-5xl lg:text-6xl text-white font-semibold mt-5">{subheading}</h2>
        </div>
    </section>
  )
}

export default Hero

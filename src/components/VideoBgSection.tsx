import React from 'react'

function VideoBgSection() {
  return (
    <section className='w-screen h-[37rem] relative flex items-center justify-end text-white'>
        <video className="w-full h-full object-cover absolute top-0 left-0 z-10" autoPlay muted loop>
            <source src="/global-impact.mp4" type="video/mp4" />
        </video>
        <div className="overlay w-full h-full absolute top-0 left-0 z-20"></div>
        <div className="video-top-content z-30 w-[80%] max-w-6xl mx-6 lg:mx-auto text-right">
            <h4 className='text-5xl font-medium'>GLOBAL IMPACT</h4>
            <h5 className='font-normal mt-4 text-2xl'>At BizFinx79, we empower businesses globally with human-centered financial solutions that spark growth, create opportunities, and build authentic global connections.
            </h5>
        </div>
    </section>
  )
}

export default VideoBgSection

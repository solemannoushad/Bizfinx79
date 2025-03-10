import React from 'react'

function VideoBgSection() {
  return (
    <section className='w-screen h-[37rem] relative flex items-center justify-end text-white'>
        <video className="w-full h-full object-cover absolute top-0 left-0 z-10" autoPlay muted loop>
            <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className="overlay w-full h-full absolute top-0 left-0 z-20"></div>
        <div className="video-top-content z-30 w-[80%] text-right mr-7">
            <h4 className='text-5xl font-medium'>TIRED OF PAYING FOR METHODS THAT DON’T GET RESULTS?</h4>
            <h5 className='font-medium mt-4 text-2xl'>Botkeeper will get you those results. Make more money. Save time. Enjoy more of what makes you happy.
            </h5>
        </div>
    </section>
  )
}

export default VideoBgSection

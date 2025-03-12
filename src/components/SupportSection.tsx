import React from 'react'

function SupportSection() {
  return (
    <section className="my-16 px-8 py-10">
        <div className="support-card my-20 flex items-center">
            <div className="support-card-img w-1/2 relative">
                <div className="img-overlay bg-[#8c969f] absolute -top-8 -left-8 w-full h-full z-10"></div>
                <img className='w-full z-20 relative' src="/thumbnail1.webp" alt="" />
            </div>
            <div className="support-content ml-8 w-1/2">
                <h1 className='text-4xl font-medium'>AUTOMATION, PURPOSE-BUILT FOR ACCOUNTING FIRMS</h1>
                <p className='text-lg mt-2'>Botkeeper leverages machine learning and workflow tools that automate the most manual and time-consuming bookkeeping work, simplifying your workload and giving you back your most precious resource: TIME.</p>
            </div>
        </div>
        <div className="support-card my-20 flex items-center flex-row-reverse">
            <div className="support-card-img w-1/2 relative">
                <div className="img-overlay bg-[#8c969f] absolute -top-8 -right-8 w-full h-full z-10"></div>
                <img className='w-full z-20 relative' src="/thumbnail1.webp" alt="" />
            </div>
            <div className="support-content mr-8 w-1/2">
                <h1 className='text-4xl font-medium'>FANATICAL SUPPORT</h1>
                <p className='text-lg mt-2'>Yep, that's what's included when you go with the Botkeeper solution. We've got your back every step of the way. Here's just some of what we make available based on your needs: standardized support options attuned to your package level, with flexible add-on support options available, white-glove onboarding and training, free, unlimited email and phone support, resource library, enablement kit, online knowledge base, and dedicated learning environment "Botkeeper University," and monthly group training on anything and everything to help your firm grow; the Botkeeper Platform, sales, marketing, pricing strategy, and more!</p>
            </div>
        </div>
    </section>
  )
}

export default SupportSection

import IndustiresHero from '@/components/IndustiresHero'
import { industriesContent } from '@/content/industries'
import React from 'react'

function page() {
  return (
    <>
        <IndustiresHero />
        <section className='section'>
            <div className='my-16 text-center'>
                <h2 className='font-bold text-4xl mb-5'>Custom Solutions Designed for Your Industry</h2>
                <p className='text-[#616161] text-lg'>At BizFinx79, we know that industry expertise is the key to real impact. Having a partner who understands your challenges, speaks your language, and delivers solutions shaped around your sector gives you a competitive edge. Expanding beyond our foundation in financial services, we now empower businesses across multiple industries. From dynamic markets like technology to highly regulated sectors such as healthcare and financial services, our expertise also spans manufacturing, retail, private equity, and more.
                Discover how our strategic consulting, financial management, and business solutions can help your organization streamline operations, enhance efficiency, and unlock long-term success.
                </p>
            </div>
        </section>
        <section className="section bg-[#eeeeee]">
            <h3 className='font-bold text-4xl text-center mt-8'>Explore Auxis Solutions for Your Industry</h3>
            <div className='flex flex-col my-10'>
                {
                    industriesContent.map((item, index) => {
                        const {title, description, img} = item;
                        return(
                            <div key={title} className={`flex items-center justify-between my-6 p-4 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                                <div className='w-1/2'>
                                    <img src={img} alt="" />
                                </div>
                                <div className={`w-1/2 ${index % 2 === 0 ? 'ml-6' : 'mr-6'}`}>
                                    <h3 className='font-semibold text-4xl my-3'>{title}</h3>
                                    <p className='text-[#616161] text-lg'>{description}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    </>
  )
}

export default page

"use client"
import ContactForm from '@/components/ContactForm'
import Heading from '@/components/Heading'
import Hero from '@/components/Hero'
import React, { useEffect, useState } from 'react'

function page() {

    useEffect(() => {
          document.title = "Contact Us - Devstella";
        }, []);


    const icons = [
        {
            name: 'mail',
            text: 'info@bizfinx79.com'
        },
        {
            name: 'phone',
            text: '00966-538320746'
        },
        // {
        //     name: 'map-pin',
        //     text: '123 Innovation Drive, Tech City'
        // },
    ]

  return (
    <>
        <Hero heading='Contact Us' subheading='Get in Touch with Us' />
        <div className='max-w-4xl mx-auto my-16'>
            <Heading title="Let's turn your vision"  />
            <div className='my-10'>
                <ContactForm />
            </div>
            <div className='flex my-8 justify-center lg:flex-row flex-col'>
                {icons.map((i) => {
                    return(
                        <div key={i.name} className='flex items-center mx-2 cursor-pointer group'>                        
                            <div className='border-2 border-foreground bg-foreground inline-flex items-center justify-normal rounded-full cursor-pointer group-hover:bg-white transition-all duration-100'>
                                <i className={`iconoir-${i.name} text-white p-2 text-xl transition-all duration-500 group-hover:text-foreground`}></i>
                            </div>
                            <div className='text-foreground ml-3 text-sm'>{i.text}</div>
                        </div>
                    )
                }) }
            </div>
        </div>
    </>
  )
}

export default page

'use client'
import Button from '@/components/Button'
import React from 'react'

export default function ServiceHero({heading, subheading}: {heading: string, subheading: string}) {
  return (
    <div>
      <div className='w-screen h-[60vh] bg-foreground flex items-center '>
      <div className="max-w-7xl flex items-center px-10 mx-auto mt-15">
      <div className="hero-content w-full md:w-1/2 flex flex-col">
        <p className='text-white  font-semibold leading-6' dangerouslySetInnerHTML={{__html: heading}}></p>
        <p className='text-[#fdd340] text-4xl font-semibold my-4'>{subheading}</p>
        <div className="inline">
          <Button title='Call To Action' onClick={() => {}} />
        </div>
      </div>
      <div className="hero-img hidden md:block md:w-1/2 px-20 mt-15">
        <div className="img w-full h-[30rem] bg-white rounded-2xl"></div>
      </div>
      </div>
    </div>
    </div>
  )
}

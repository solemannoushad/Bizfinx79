'use client'
import React from 'react'
import Button from './Button'

function HomeHero() {
  return (
    <section className='w-screen h-screen bg-foreground flex items-center px-10'>
      <div className="hero-content w-1/2 flex flex-col">
        <p className='text-white text-5xl font-semibold leading-14'>Navigate Your Finances with Confidence</p>
        <p className='text-[#fdd340] text-4xl font-semibold my-4'>Expert Accounting, Tax, and CFO Solutions</p>
        <div className="inline">
          <Button title='Call To Action' onClick={() => {}} />
        </div>
      </div>
      <div className="hero-img w-1/2 px-20">
        <div className="img w-full h-[30rem] bg-white rounded-2xl"></div>
      </div>
    </section>
  )
}

export default HomeHero
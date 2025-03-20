'use client'
import React from 'react'
import Button from './Button'

function HomeHero() {
  return (
    <section className='w-screen h-screen bg-foreground flex justify-center items-center'>
      <div className="hero-content w-[50%] text-center flex flex-col items-center">
        <h1 className='text-white text-5xl font-semibold'>Navigate Your Finances with Confidence:  </h1>
        <h2 className='text-[#fdd340] text-5xl font-semibold my-4'>Expert Accounting, Tax, and CFO Solutions</h2>
        <Button title='Call To Action' onClick={() => {}} />
      </div>
    </section>
  )
}

export default HomeHero

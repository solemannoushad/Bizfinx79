'use client'
import React from 'react'
import Button from './Button'

function TrustBadge() {
  return (
    <section className="section trust-badge-section mt-10">
        <div className="divider border-b-2 border-black w-16 mx-auto mt-10"></div>
        <div className="trust-badge-container text-center flex flex-col items-center mt-16 mb-10">
            <h1 className='font-semibold text-5xl uppercase'>100% Happiness Guarantee</h1>
            <h3 className='font-medium text-2xl my-2'>Not happy? We'll do everything we can to make it right. </h3>
            <p className='text-lg'>Spoiler alert. You won't be happy. You will be freakin thrilled you went with Botkeeper.</p>
            <Button onClick={() => {}} title="let's do this" />
        </div>
    </section>
  )
}
export default TrustBadge

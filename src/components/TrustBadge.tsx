'use client'
import React from 'react'
import Button from './Button'

function TrustBadge() {
  return (
    <section className="section trust-badge-section mt-10">
        <div className="divider border-b-2 border-black w-16 mx-auto mt-10"></div>
        <div className="trust-badge-container w-1/2 flex flex-col items-baseline mt-16 mb-10">
            <h1 className='font-semibold text-5xl uppercase'>100% Financial Joy Guarantee</h1>
            <p className='text-lg my-2'>With BizFinx, you're not just satisfied—you’ll be thrilled. If you're not over the moon, we'll work tirelessly to make it right.</p>
            <Button onClick={() => {}} title="let's do this" />
        </div>
    </section>
  )
}
export default TrustBadge

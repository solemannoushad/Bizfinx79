'use client'
import React from 'react'
import Button from './Button'

interface TrustBadgeProps {
  title: string;
  txt: string;
  image: string;
}

function TrustBadge({title, txt, image}: TrustBadgeProps) {
  return (
    <section className="section trust-badge-section mt-10">
        {/* <div className="divider border-b-2 border-black w-16 mx-auto mt-10"></div> */}
        <div className="trust-badge-container w-full flex items-center my-10 mx-auto px-10 py-14 rounded-4xl bg-foreground text-white">
            <div className="w-full md:w-1/2 flex flex-col">
              <p className='font-semibold text-5xl uppercase'>{title}</p>
              <p className='text-lg my-2'>{txt}</p>
              <div className='inline'>
                <Button onClick={() => {}} title="let's do this" />
              </div>
            </div>
            <div className="w-1/2 flex items-center px-10">
              <img src={`/images/${image}`} alt="" className='w-full h-full object-cover' />
            </div>
        </div>
    </section>
  )
}
export default TrustBadge

'use client'
import Button from '@/components/Button'
import React from 'react'
interface ServiceTemplateHighlightProps {
    heading: string
    description: string
    imgUrl?: string
    
  }
  

function ServiceTemplateHighlight({heading, description, imgUrl}: ServiceTemplateHighlightProps) {
  return (
    <section className="py-[2rem] px-[2rem] md:px-[4rem] max-w-[1400px] mx-auto mt-10">
        {/* <div className="divider border-b-2 border-black w-16 mx-auto mt-10"></div> */}
        <div className="trust-badge-container w-full flex my-10 mx-auto px-10 py-14 rounded-4xl bg-secondary">
            <div className="w-full md:w-[55%] flex flex-col">
              <h1 className='font-semibold text-[36px] uppercase text-[#002366]'>{heading}</h1>
              <p className='text-lg my-2' dangerouslySetInnerHTML={{__html: description}}></p>
              <div className='inline'>
                <Button onClick={() => {}} title="let's do this" />
              </div>
            </div>
        </div>
    </section>
  )
}
export default ServiceTemplateHighlight
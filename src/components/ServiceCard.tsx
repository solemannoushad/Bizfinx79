import Link from 'next/link'
import React from 'react'

interface ServiceCardProps{
    url: string,
    title: string,
    points: string[]
}

function ServiceCard({ url, title, points }: ServiceCardProps) {
  return (
    <div className='p-7 bg-[#eeeeee] rounded-lg flex flex-col justify-between cursor-pointer'>
      <h3 className='text-2xl font-semibold'>{title}</h3>
      <ul className='list-disc ml-7 my-6'>
        {
            points.map((item, index) => {
                return(
                    <li key={index}>{item}</li>
                )
            })
        }
      </ul>
      <div className='inline-flex items-center cursor-pointer'>
        <Link className='text-foreground font-semibold text-lg' href={`/services/${url}`}>Learn More</Link>
        <img src="/icons/angle-down-solid.svg" className='w-3 ml-2 rotate-270' alt="" />
      </div>
    </div>
  )
}

export default ServiceCard

import ServiceCard from '@/components/ServiceCard';
import { serviceContent } from '@/content/services'
import React from 'react'

function page() {
  return (
    <>
      <div className="w-full h-screen bg-foreground text-white flex items-center justify-center">
        <h1>Services</h1>
      </div>
      <section className="section">
        <div className='grid grid-cols-2 gap-4 justify-center'>
          {
            serviceContent.cards.map((item) => {
              const { url, title, points } = item;
              return(
                <ServiceCard key={title} url={url} title={title} points={points} />
              )
            })
          }
        </div>
      </section>
    </>
  )
}

export default page

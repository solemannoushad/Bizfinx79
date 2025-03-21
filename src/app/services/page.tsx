import BlogsSection from '@/components/BlogsSection';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import { serviceContent } from '@/content/services'
import React from 'react'

function page() {
  return (
    <>
      <Hero heading='services' subheading='Best Accounting and Tax Services Online for Startups and Small Busiensses' />

      <section className="section">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 justify-center'>
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
      <BlogsSection />
    </>
  )
}

export default page
